import React from 'react'

class Parallax extends React.Component {
  constructor(props) {
    super(props)

    this.parallaxContainerRef = React.createRef()
    this.parallaxOuterRef = React.createRef()
    this.parallaxInnerRef = React.createRef()
    this.parallaxVideoRef = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
    this.scheduledAnimationFrame = false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('focus', this.playVideo)
    window.addEventListener('blur', this.pauseVideo)
    this.parallaxInnerRef.current.style.opacity = '0'
    this.parallaxInnerRef.current.style.transition = 'opacity .5s'
    this.handleScroll()
    if (this.parallaxContainerRef.current && window.getComputedStyle(this.parallaxContainerRef.current).position === 'static') {
      this.parallaxContainerRef.current.style.position = 'relative'
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('focus', this.playVideo)
    window.removeEventListener('blur', this.pauseVideo)
  }

  isVideoPlaying = () =>
    !!(
      this.parallaxVideoRef &&
      this.parallaxVideoRef.current.currentTime > 0 &&
      !this.parallaxVideoRef.current.paused &&
      !this.parallaxVideoRef.current.ended &&
      this.parallaxVideoRef.current.readyState > 2
    )

  playVideo = () => this.parallaxVideoRef.current && this.parallaxVideoRef.current.play()

  pauseVideo = () => this.parallaxVideoRef.current && this.parallaxVideoRef.current.pause()

  handleScroll = () => {
    // Prevent multiple rAF callbacks
    if (this.scheduledAnimationFrame) {
      return
    }

    this.scheduledAnimationFrame = true

    requestAnimationFrame(() => {
      const { windowAnchor, contentAnchor, strength, backgroundVideo } = this.props

      // Get dimensions
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const parallaxTop = window.scrollY + this.parallaxOuterRef.current.getBoundingClientRect().top
      const parallaxHeight = this.parallaxOuterRef.current.offsetHeight

      // Do parallax calculations
      const contentAnchorOffset = parallaxTop + parallaxHeight * contentAnchor
      const windowAnchorOffset = windowHeight * windowAnchor
      const scrollAnchor = scrollTop + windowAnchorOffset
      const parallaxTransform = (contentAnchorOffset - scrollAnchor) * strength

      // Apply styles
      this.parallaxInnerRef.current.style.opacity = '1'
      this.parallaxInnerRef.current.style.transform = `translateY(${parallaxTransform}px)`

      if (backgroundVideo) {
        const parallaxInViewport = parallaxTop + parallaxHeight > scrollTop && parallaxTop < parallaxTop + windowHeight

        if (!parallaxInViewport && this.isVideoPlaying()) {
          this.pauseVideo()
        } else if (parallaxInViewport && !this.isVideoPlaying()) {
          this.playVideo()
        }
      }

      // Allow for another anamation frame to be requested
      this.scheduledAnimationFrame = false
    })
  }

  render() {
    const { backgroundImage, backgroundVideo, children, className, style } = this.props

    return backgroundImage || backgroundVideo ? (
      <div ref={this.parallaxContainerRef} style={{ overflow: 'hidden', ...style }} className={className}>
        <div ref={this.parallaxOuterRef} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
          <div
            ref={this.parallaxInnerRef}
            style={{
              position: 'absolute',
              top: '-25vh',
              right: 0,
              bottom: '-25vh',
              left: 0,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            {backgroundVideo && (
              <video
                ref={this.parallaxVideoRef}
                width="1080"
                height="720"
                preload="auto"
                loop
                autoPlay
                muted
                playsInline
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  overflow: 'hidden'
                }}
              >
                {typeof backgroundVideo === 'string' ? (
                  <source src={backgroundVideo} type="video/webm" />
                ) : (
                  <React.Fragment>
                    <source src={backgroundVideo.webm} type="video/webm" />
                    <source src={backgroundVideo.mp4} type="video/mp4" />
                  </React.Fragment>
                )}
              </video>
            )}
            {children}
          </div>
        </div>
      </div>
    ) : (
      <div style={style} className={className} ref={this.parallaxOuterRef}>
        <div ref={this.parallaxInnerRef}>{children}</div>
      </div>
    )
  }
}

Parallax.defaultProps = {
  windowAnchor: 0.5,
  contentAnchor: 0.5,
  strength: 0.25
}

export default Parallax
