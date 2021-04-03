export const scrollIntoView = (target?: string) => {
  if (target === undefined) {
    return
  }
  const targetAnchor = document.querySelector(`[name=${ target }]`)
  if (targetAnchor !== null) {
    targetAnchor.scrollIntoView({
      behavior: "smooth"
    })
  }
}