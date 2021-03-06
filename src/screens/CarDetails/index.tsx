import React from 'react'
import { StatusBar } from 'react-native'
import {
  CommonActions,
  useNavigation,
} from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

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
  Accessories,
  Footer,
} from './styles'

export function CarDetails() {
  const navigation = useNavigation()

  function handleNavigationToScheduling() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Scheduling',
      }),
    )
  }

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

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </About>

        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher per??odo do aluguel"
          onPress={handleNavigationToScheduling}
        />
      </Footer>
    </Container>
  )
}
