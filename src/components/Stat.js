import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { mediaQueries } from './Layout'

const StatWrap = styled.div``
const NumberWrap = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: 48px;
  letter-spacing: -1.75px;
  ${mediaQueries.sm} {
    font-size: 56px;
  }
  ${mediaQueries.md} {
    font-size: 64px;
  }
  ${mediaQueries.lg} {
    font-size: 72px;
  }
  ${mediaQueries.xl} {
    font-size: 88px;
  }
`
const Number = styled(animated.span)``
const Unit = styled.span`
  font-weight: 900;
  font-size: 0.5em;
  margin-left: 0.1em;
`
const Label = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: ${props => props.theme.color.primary};
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  ${mediaQueries.sm} {
    font-size: 13px;
  }
  ${mediaQueries.md} {
    font-size: 14px;
  }
  ${mediaQueries.lg} {
    font-size: 15px;
  }
  ${mediaQueries.xl} {
    font-size: 16px;
  }
`

const Stat = ({ number, unit, label, isVisible }) => {
  const countDownAnimation = useSpring({
    number: isVisible ? number : 0,
    config: { tension: 10, friction: 6, precision: 0.1, clamp: true }
  })

  return (
    <StatWrap>
      <NumberWrap>
        <Number>{countDownAnimation.number.interpolate(num => num.toFixed(0))}</Number>
        {unit && <Unit>{unit}</Unit>}
      </NumberWrap>
      <Label>{label}</Label>
    </StatWrap>
  )
}

Stat.propTypes = {
  number: PropTypes.number.isRequired,
  unit: PropTypes.strimg,
  label: PropTypes.string.isRequired
}

export default Stat
