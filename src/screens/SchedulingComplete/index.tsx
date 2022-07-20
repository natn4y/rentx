import React from 'react'
import {
  Dimensions,
  useWindowDimensions,
  StatusBar,
} from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { ConfirmButton } from '../../components/ConfirmButton'

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles'

// const { width } = Dimensions.get('window') //- pega a largura da tela do celular "Pode ser definido fora do componente"

export function SchedulingComplete() {
  const { width } = useWindowDimensions() //- pega a largura da tela "Só pode ser definido dentro do componente"
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="Ok" />
      </Footer>
    </Container>
  )
}
