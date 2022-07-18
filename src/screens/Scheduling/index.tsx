import React from 'react'
import { StatusBar } from 'react-native'
import { View } from 'react-native'

import { useTheme } from 'styled-components'

import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles'

export function Scheduling() {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <View style={{ alignSelf: 'flex-start' }}>
          <BackButton
            onPress={() => {}}
            color={theme.colors.shape}
          />
        </View>

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              18/06/2021
            </DateValue>
          </DateInfo>

          <ArrowSvg style={{ marginTop: 12 }} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>
              18/06/2021
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>

      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  )
}