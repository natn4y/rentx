import React from 'react'
import { StatusBar } from 'react-native'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from './styles'

export function CarDetails() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png',
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </About>
      </Content>
    </Container>
  )
}
