// Declara o modulo para todos os arquivos .svg
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'

  // content é um React.FC "Functional Component" do tipo SVGProps
  const content: React.FC<SvgProps>

  // exporta a var content criada
  export default content
}
