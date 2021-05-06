import { Item, Items, Seller, Sellers } from "./models"

const mockSeller: Seller = {
  id: 0,
  circle_name: "社团{}",
  circle_image: "",
  circle_description: "社团介绍",
  items: [],
  seller_id: ""
}

const mockItem: Item = {
  item_id: 0,
  seller_id: 0,
  name: "道具{}",
  item_type: "类型",
  content: "内容",
  price: 0,
  url: "",
  authors: "作者",
  introduction: "介绍",
  forto: "面向",
  cover_image: "",
  is_restricted: "限制级",
  circle: "一个社团",
  is_started_with: true,
  item_pictures: []
}

export const mockCache = {
  sellers: {} as Sellers,
  items: {} as Items,
  allSellersFetched: true,
  allItemsFetched: true,
  itemsFetched: {} as { [sellerID: number]: true }
}

Array(11).fill(0).forEach((_, i) => {
  const itemIDs = Array(4).fill(0).map((_, j) => {
    const item = Object.assign({}, mockItem)
    const index = i * 4 + j
    item.item_id = index
    item.seller_id = i
    item.name = item.name.replace("{}", index.toString(10))
    mockCache.items[i * 4 + j] = item
    return item.item_id
  })
  const seller = Object.assign({}, mockSeller)
  seller.id = i
  seller.circle_name = seller.circle_name.replace("{}", i.toString(10))
  seller.items = itemIDs
  seller.seller_id = i < 9 ? `${ i < 4 ? "A" : "B" }${ (i < 4 ? i : i - 4) + 1 }` : ""
  mockCache.sellers[i] = seller
})

mockCache.sellers[0].circle_name = "试着写一个很长的一个社团名"
mockCache.sellers[0].circle_description = "和一段更长的社团介绍。社团介绍社团介绍社团介绍~~~~"
