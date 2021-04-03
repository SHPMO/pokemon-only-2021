export const scrollIntoView = (name?: string | null) => {
  if (!name) {
    return
  }
  const target = document.querySelector(`[name=${ name }]`)
  if (target !== null) {
    target.scrollIntoView({
      behavior: "smooth"
    })
  }
}

export const setTitle = (title: string | null = "", suffix: string | null = "Oh My Passion!!!") => {
  document.title = [ title, suffix ].filter((x) => Boolean(x)).join(" - ")
}

export const setHash = (name?: string | null, jump = false) => {
  const hash = name ? `#${ name }` : ""
  if (hash !== location.hash) {
    if (history.pushState) {
      history.pushState(null, document.title, name ? hash : "#")
    } else {
      location.hash = hash
    }
  }
  if (jump) {
    scrollIntoView(name)
  }
}

export const isLandscapeOrientation = () => {
  return window.innerHeight <= window.innerWidth
}