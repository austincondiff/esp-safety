import breakpoints from './breakpoints'

const mediaQueries = {
  sm: `@media only screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media only screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media only screen and (min-width: ${breakpoints.lg}px)`,
  xl: `@media only screen and (min-width: ${breakpoints.xl}px)`
}

export default mediaQueries
