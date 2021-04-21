import { BaseURL } from "../router"

export const scrollIntoView = (name?: string | null, smooth = true) => {
  const target = name ? document.querySelector(`[name=${ name }]`) : document.documentElement
  if (target !== null) {
    target.scrollIntoView({
      behavior: smooth ? "smooth" : "auto"
    })
  }
}

export const setTitle = (title: string | null = "", suffix: string | null = "Pokémon Only - Oh My Passion!!!") => {
  document.title = [ title, suffix ].filter((x) => Boolean(x)).join(" | ")
}

export const setHash = (name?: string | null, jump = false, smooth = true) => {
  const hash = name ? `#${ name }` : ""
  if (hash !== location.hash) {
    if (history.replaceState) {
      history.replaceState(history.state, document.title, name ? hash : "#")
    } else {
      location.hash = hash
    }
  }
  if (jump) {
    scrollIntoView(name, smooth)
  }
}

export const isLandscapeOrientation = () => {
  return window.innerHeight <= window.innerWidth
}

export const inHome = () => location.pathname === BaseURL
