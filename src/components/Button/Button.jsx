import styled from 'styled-components'

const Button = styled.button`
  ${({ size, type, primary, transparent, light, overlay }) => `
    font-size: ${
      size === 'sm' ? 16 :
      size === 'lg' ? 16 :
      size === 'xl' ? 16 :
      16
    }px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    border-radius: 128px;
    border: 0;
    outline: 0;
    cursor: pointer;
    white-space: nowrap;
    padding: ${
      size === 'sm' ? '12px 24px' :
      size === 'lg' ? '16px 28px' :
      size === 'xl' ? '25px 40px' :
      '17px 28px 15px 28px'
    };
    transition: 200ms;
    box-shadow: 0 0 0 rgba(0,0,0,0.75);
    background-color: ${
      overlay ? (
        `rgba(0,0,0,0.15)`
      ) :
      transparent ? (
        'transparent'
      ) :
      primary ? (
        type === 'success' ? '#2D9F43' :
        type === 'warning' ? '#FFB81C' :
        type === 'error' ? '#CC1B1B' :
        '#DD2C2C'
      ) : (
        type === 'success' ? '#E5F6E8' :
        type === 'info' ? '#D4ECF0' :
        type === 'warning' ? '#FEF3E2' :
        type === 'error' ? '#F9E8E8' :
        '#EAEAEA'
      )
    };
    color: ${
      (primary || overlay) ? (
        '#FFFFFF'
      ) : (
        type === 'success' ? '#235C35' :
        type === 'info' ? '#006184' :
        type === 'warning' ? '#D07A00' :
        type === 'error' ? '#B80A0A' :
        light ? '#FFFFFF' : '#22282E'
      )
    };
    &:hover {
      background-color: ${
        transparent ? (
          light ? 'rgba(100,100,100,0.5)' : 'rgba(0,0,0,0.15)'
        ) :
        overlay ? (
          '#ffffff'
        ) :
        primary ? (
          type === 'success' ? '#38B350' :
          type === 'warning' ? '#FFC139' :
          type === 'error' ? '#DD2929' :
          '#f44638'
        ) : (
          type === 'success' ? '#EDFBF0' :
          type === 'info' ? '#E0F2F5' :
          type === 'warning' ? '#FFF8ED' :
          type === 'error' ? '#FEEEEE' :
          '#F2F2F2'
        )
      };

      ${overlay ? `color: black;` : ``}

      // background-color: ${primary ? '#00C6E3' : '#F2F2F2'};
      box-shadow: 0 16px 32px rgba(0,0,0,0.25);
    }
    &:focus {
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.25);
    }
    &:focus:hover {
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.25);
      background-color: ${
        primary ? (
          type === 'success' ? '#287E3C' :
          type === 'warning' ? '#E8990E' :
          type === 'error' ? '#AF1212' :
          '#b61d1d'
        ) : (
          type === 'success' ? '#C5F1CE' :
          type === 'info' ? '#BDE7EE' :
          type === 'warning' ? '#FFEACB' :
          type === 'error' ? '#FAD7D7' :
          '#DDDDDD'
        )
      };
    }
    &:active,
    &:active:focus {
      background-color: ${
        primary ? (
          type === 'success' ? '#287E3C' :
          type === 'warning' ? '#E8990E' :
          type === 'error' ? '#AF1212' :
          '#b61d1d'
        ) : (
          type === 'success' ? '#C5F1CE' :
          type === 'info' ? '#BDE7EE' :
          type === 'warning' ? '#FFEACB' :
          type === 'error' ? '#FAD7D7' :
          '#DDDDDD'
        )
      };
    }
  `}
`

export default Button
