//sobrescreve o tema padrão do styled components
import 'styled-components'

import theme from './theme'

//adiciona as propriedades do nosso tema ao tema do styled components
declare module 'styled-components' {
  //o tipo ThemeType recebe os atributos de theme
  type ThemeType = typeof theme

  //Acrecenta ao tema padrão o nosso tipo de tema
  export interface DefaultTheme extends ThemeType {}
}