import 'styled-components'
import theme from './theme'

declare module 'styled-components' {
  // Define o tipo ThemeType, ele vai ter a mesma tipagem do objeto exportado no arquivo './theme'
  type ThemeType = typeof theme

  // A interface DefaultTheme extends de ThemeType
  export interface DefaultTheme extends ThemeType {}
}
