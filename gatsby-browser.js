const scrollToTop = (element, position, duration) => {
  if (element) {
    var cosParameter = element.scrollTop / 2,
      scrollCount = 0,
      oldTimestamp = performance.now()
    function step(newTimestamp) {
      scrollCount += Math.PI / (duration / (newTimestamp - oldTimestamp))
      if (scrollCount >= Math.PI) element.scrollTo(0, 0)
      if (element.scrollTop === 0) return
      element.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))
      oldTimestamp = newTimestamp
      window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }
}

exports.onRouteUpdate = () => {
  scrollToTop(document.getElementById('scroll-root'), 0, 1000)
}
