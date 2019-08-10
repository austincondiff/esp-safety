import React from 'react'

class Parallax extends React.Component {
  constructor(props) {
    super(props)

    this.state = { backgroundImageLoaded: false, parallaxInViewport: false }

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
    this.handleScroll()
    if (this.parallaxContainerRef.current && window.getComputedStyle(this.parallaxContainerRef.current).position === 'static') {
      this.parallaxContainerRef.current.style.position = 'relative'
    }

    if (this.props.backgroundImage) {
      var img = new Image()
      img.onload = this.handleBackgroundImageLoad
      img.src = this.props.backgroundImage
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('focus', this.playVideo)
    window.removeEventListener('blur', this.pauseVideo)
  }

  handleBackgroundImageLoad = () => {
    this.setState({ backgroundImageLoaded: true })
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
    const { windowAnchor, contentAnchor, strength, backgroundVideo, backgroundImage } = this.props

    // Get dimensions
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const parallaxTop = this.parallaxOuterRef.current && scrollTop + this.parallaxOuterRef.current.getBoundingClientRect().top
    const parallaxHeight = this.parallaxOuterRef.current && this.parallaxOuterRef.current.offsetHeight
    const parallaxInViewport = scrollTop > parallaxTop - windowHeight && scrollTop < parallaxTop + parallaxHeight

    if (parallaxInViewport) {
      requestAnimationFrame(() => {
        if(!this.state.parallaxInViewport) this.setState({ parallaxInViewport: true })
        // Do parallax calculations
        const parallaxOffsetFactor = windowAnchor < 0.5 ? 2 * windowAnchor : 2 - 2 * windowAnchor
        const contentAnchorOffset = (parallaxTop + parallaxHeight * contentAnchor) * parallaxOffsetFactor
        const windowAnchorOffset = windowHeight * windowAnchor
        const scrollAnchor = scrollTop + windowAnchorOffset
        const strengthSegmentHeight = strength ? parallaxHeight / Math.abs(strength) : 0
        const strengthSegmentInWindowCount = strengthSegmentHeight
          ? windowHeight / strengthSegmentHeight + Math.abs(1 * strength + 1)
          : 0
        const parallaxInsideHeight = ((strengthSegmentInWindowCount - 1) * parallaxOffsetFactor + 1) * parallaxHeight
        const heightDifference =
          (backgroundImage || backgroundVideo) && parallaxInsideHeight ? parallaxInsideHeight - parallaxHeight : 0
        const parallaxTranslateY = (contentAnchorOffset - scrollAnchor) * strength - heightDifference * windowAnchor

        // Apply styles
        this.parallaxInnerRef.current.style.transform = `translateY(${parallaxTranslateY}px)`
        this.parallaxInnerRef.current.style.height =
          (backgroundImage || backgroundVideo) && parallaxInsideHeight ? `${parallaxInsideHeight}px` : `100%`
      })
    } else {
      if(this.state.parallaxInViewport) this.setState({ parallaxInViewport: false })
    }


    if (backgroundVideo) {
      if (!parallaxInViewport && this.isVideoPlaying()) {
        this.pauseVideo()
      } else if (parallaxInViewport && !this.isVideoPlaying()) {
        this.playVideo()
      }
    }
  }

  getFileExtension = str => str.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1]

  render() {
    const { backgroundImage, backgroundImagePosition, backgroundVideo, children, className, style } = this.props
    const { backgroundImageLoaded, parallaxInViewport } = this.state

    return backgroundImage || backgroundVideo ? (
      <div ref={this.parallaxContainerRef} style={{ overflow: 'hidden', ...style }} className={className}>
        <div ref={this.parallaxOuterRef} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
          <div
            ref={this.parallaxInnerRef}
            style={{
              position: 'absolute',
              top: 0,
              right: parallaxInViewport ? 'auto' : 0,
              bottom: parallaxInViewport ? 'auto' : 0,
              left: 0,
              width: '100%',
              transformOrigin: `50% 50%`,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: backgroundImagePosition || 'center',
              transition: 'opacity .5s',
              opacity: (backgroundImage || backgroundVideo) && !backgroundImageLoaded ? 0 : 1
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
                onCanPlay={this.handleBackgroundImageLoad}
                onPlaying={this.handleBackgroundImageLoad}
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
                  <source src={backgroundVideo} type={`video/${this.getFileExtension(backgroundVideo)}`} />
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
