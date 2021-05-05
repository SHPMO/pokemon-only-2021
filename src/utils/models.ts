import { mockCache } from "./mock"

const apiURL = "https://www.getdaze.org/stall/api"
const pmo = "pmo2021"
// const pmo = "pmo2019"

export interface Seller {
  id: number
  circle_name: string
  circle_description: string
  circle_image: string
  items: number[]
  seller_id: string
}

export interface Item {
  item_id: number
  seller_id: number
  name: string
  item_type: string
  content: string
  price: number
  url: string
  authors: string
  introduction: string
  forto: string
  cover_image: string
  is_restricted: string
  circle: string
  is_started_with: boolean
  item_pictures: string[]
}

export type Sellers = {
  [id: number]: Seller
}

export type Items = {
  [id: number]: Item
}

const cached = mockCache
// const cached = {
//   sellers: {} as Sellers,
//   items: {} as Items,
//   allSellersFetched: false,
//   allItemsFetched: false,
//   itemsFetched: {} as { [sellerID: number]: true }
// }

const requestAPI = async <T>(name: string, data: {
  [key: string]: string | number | undefined
} = {}): Promise<T | null> => {
  try {
    data[pmo] = pmo
    const response = await fetch(`${ apiURL }/${ name }?${
      Object.keys(data)
        .filter((key) => data[key] !== undefined)
        .map((key) => `${ key }=${ encodeURIComponent(data[key]!) }`)
        .join("&")
    }`)
    const results = await response.json() as {
      error: number,
      message: string,
      data: T
    }
    if (results.error !== 0) {
      console.error(results.message)
      return null
    }
    return results.data
  } catch (e) {
    console.error(e.stack)
    return null
  }
}

export const getSellers = async (force = false): Promise<Sellers> => {
  if (!force && cached.allSellersFetched) {
    return cached.sellers
  }
  const sellers = await requestAPI<Seller[]>("get_seller")
  if (sellers === null) {
    return {}
  }
  cached.sellers = sellers
  cached.allSellersFetched = true
  return sellers
}

export const getSeller = async (id: number, force = false): Promise<Seller | null> => {
  if (!force && (id in cached.sellers)) {
    return cached.sellers[id]
  }
  const seller = await requestAPI<Seller>("get_seller", { seller_id: id })
  if (seller === null) {
    return null
  }
  cached.sellers[seller.id] = seller
  return seller
}

export const getItems = async (sellerID?: number, force = false): Promise<Items> => {
  if (!force) {
    if (sellerID === undefined) {
      if (cached.allItemsFetched) {
        return cached.items
      }
    } else if (cached.allItemsFetched || cached.itemsFetched[sellerID]) {
      const seller = await getSeller(sellerID)
      if (seller === null) {
        return {}
      }
      const cachedItems: Items = {}
      seller.items.forEach((id) => void (cachedItems[id] = cached.items[id]))
      return cachedItems
    }
  }
  const items = await requestAPI<Items>("get_item", { seller_id: sellerID })
  if (items === null) {
    return {}
  }
  if (sellerID === undefined) {
    cached.items = items
    cached.allItemsFetched = true
    Object.values(items)
      .forEach((item) => void (cached.itemsFetched[item.seller_id] = true))
  } else {
    Object.values(items)
      .forEach((item) => void (cached.items[item.item_id] = item))
    cached.itemsFetched[sellerID] = true
  }
  return items
}

export const getItem = async (id: number, force = false): Promise<Item | null> => {
  if (!force && (id in cached.items)) {
    return cached.items[id]
  }
  const item = await requestAPI<Item>("get_item", { item_id: id })
  if (item === null) {
    return null
  }
  cached.items[item.item_id] = item
  return item
}
