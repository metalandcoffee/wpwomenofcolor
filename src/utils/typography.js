import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

const typography = new Typography(altonTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
