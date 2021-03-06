import React from 'react'
import styled from 'styled-components'

import { Row, Col } from './Layout'

const ImageGallerWrap = styled.div``
const SelectedImageWrap = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
`
const SelectedImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const ThumbnailsWrap = styled.div`
  margin-top: 32px;
`
const ThumbnailWrap = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
`
const Thumbnail = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  box-shadow: ${props =>
    props.active
      ? `inset 0 0 0 3px ${props.theme.color.primary}, 0 8px 24px 0 rgba(0,0,0,0.20)`
      : `inset 0 0 0 1px rgba(0,0,0,0.15)`};
  transition: 0.25s;
  &:hover {
    box-shadow: ${props =>
      props.active
        ? `inset 0 0 0 3px ${props.theme.color.primary}, 0 8px 24px 0 rgba(0,0,0,0.20)`
        : `inset 0 0 0 3px rgba(0,0,0,0.15)`};
  }
`

export default class ImageGallery extends React.Component {
  state = { selectedImage: this.props.images && this.props.images.length && this.props.images.filter(img => img)[0] }

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.images) !== JSON.stringify(this.props.images) &&
      !this.props.images.includes(this.state.selectedImage)
    ) {
      const filteredImages = this.props.images.filter(img => img)

      if (filteredImages && filteredImages.length) {
        this.setState({ selectedImage: filteredImages[filteredImages.length - 1] })
      } else {
        this.setState({ selectedImage: null })
      }
    }
  }

  render() {
    const { images } = this.props
    const { selectedImage } = this.state

    const filteredImages = images && images.length && images.filter(img => img)

    if (!images || !images.length || !filteredImages.length) return null

    return (
      <ImageGallerWrap>
        <SelectedImageWrap>
          <SelectedImage src={selectedImage} />
        </SelectedImageWrap>
        <ThumbnailsWrap>
          <Row gutter="8px">
            {filteredImages.length > 1 &&
              filteredImages.map(img => (
                <Col xs={2} key={img}>
                  <ThumbnailWrap>
                    <Thumbnail src={img} active={img === selectedImage} onClick={() => this.setState({ selectedImage: img })} />
                  </ThumbnailWrap>
                </Col>
              ))}
          </Row>
        </ThumbnailsWrap>
      </ImageGallerWrap>
    )
  }
}
