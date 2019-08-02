export const convertLinesToParagraphs = text => {
  let result = '<p>' + text + '</p>'
  result = result.replace(/\r\n\r\n/g, '</p><p>').replace(/\n\n/g, '</p><p>')
  result = result.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />')

  const splitString = text.split(/\n/).filter(s => s)

  console.log({ splitString })

  return result
}

export const scrollTo = (scrollTargetY = 0, speed = 1000, callbackFn, easing = 'easeInOutQuint') => {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use

  var scrollY = window.scrollY || document.documentElement.scrollTop,
    currentTime = 0

  // min time .1, max time .8 seconds
  var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  var easingEquations = {
    easeOutSine: function(pos) {
      return Math.sin(pos * (Math.PI / 2))
    },
    easeInOutSine: function(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1)
    },
    easeInOutQuint: function(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5)
      }
      return 0.5 * (Math.pow(pos - 2, 5) + 2)
    }
  }

  // add animation loop
  function tick() {
    currentTime += 1 / 60
    var p = currentTime / time
    var t = easingEquations[easing](p)

    if (p < 1) {
      requestAnimationFrame(tick)
      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
    } else {
      window.scrollTo(0, scrollTargetY)
      callbackFn()
    }
  }

  // call it once to get started
  tick()
}

export const paramsToObject = val => {
  const params = new URLSearchParams(val)
  let result = {}

  for (let param of params) {
    const [key, value] = param
    result[key] = value
  }

  return result
}
