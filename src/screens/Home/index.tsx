import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car'

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles'

export function Home() {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail:
      'https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png',
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(85)} height={RFValue(85)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3]} // mock data loop
        keyExtractor={(item: any) => String(item)} // extract key from item
        renderItem={(
          { item }: any, // render item from each mock data
        ) => <Car data={carData} />}
      />
    </Container>
  )
}
