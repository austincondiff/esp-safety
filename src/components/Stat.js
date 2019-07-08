import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StatWrap = styled.div``
const NumberWrap = styled.div`
  text-align: center;
`
const Number = styled.span`
  font-weight: 100;
  font-size: 88px;
  letter-spacing: -1.75px;
`
const Unit = styled.span`
  font-weight: 900;
  font-size: 44px;
  margin-left: 8px;
`
const Label = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #dd2c2c;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
`

class Stat extends React.Component {
  render() {
    const { number, unit, label } = this.props

    return (
      <StatWrap>
        <NumberWrap>
          <Number>{number}</Number>
          {unit && <Unit>{unit}</Unit>}
        </NumberWrap>
        <Label>{label}</Label>
      </StatWrap>
    )
  }
}

Stat.propTypes = {
  number: PropTypes.number.isRequired,
  unit: PropTypes.strimg,
  label: PropTypes.string.isRequired
}

export default Stat
