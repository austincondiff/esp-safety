import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { mediaQueries } from '../Layout'

const Flickity = typeof window !== 'undefined' ? require('react-flickity-component') : () => null

export const TestimonialsWrap = styled.div`
  position: relative;
  outline: none;
  & .flickity-enabled {
    outline: none;
  }
  & .flickity-page-dots {
    margin: 6vw 0 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    & li {
      width: 58px;
      height: 16px;
      padding: 0;
      position: relative;
      cursor: pointer;
      &:before {
        display: none;
        content: initial;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 6px;
        right: 4px;
        bottom: 6px;
        left: 4px;
        background-color: #cccccc;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
        transition: 0.25s;
      }
      &:hover:after {
        background-color: #666666;
      }
      &:active:after {
        background-color: #000000;
      }
      &.is-selected:after {
        background-color: ${props => props.theme.color.primary};
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.35);
      }
    }
  }
  & .flickity-button {
    width: 33.33vw;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
    display: none;
    ${mediaQueries.lg} {
      display: block;
    }
    & svg {
      display: none;
    }
    &.previous {
      left: calc(50% - 50vw);
    }
    &.next {
      right: calc(50% - 50vw);
    }
  }
`

const Testimonials = ({ children }) => (
  <TestimonialsWrap>
    <Flickity options={{ wrapAround: true }}>{children}</Flickity>
  </TestimonialsWrap>
)
export default Testimonials
