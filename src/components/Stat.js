import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { mediaQueries } from './Layout'

const StatWrap = styled.div``
const NumberWrap = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: 5.5rem;
  line-height: 1em;
  letter-spacing: -0.025em;
`
const Number = styled(animated.span)``
const Unit = styled.span`
  font-weight: 900;
  font-size: 0.5em;
  margin-left: 0.1em;
`
const Label = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: ${props => props.theme.color.primary};
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
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
