import React, { useEffect, useState } from 'react'
import {
  CommonActions,
  useNavigation,
} from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Logo from '../../assets/logo.svg'

import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import { Car } from '../../components/Car'
import { Load } from '../../components/Load'

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles'

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  function handleNavigationToCarDetails() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'CarDetails',
      }),
    )
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
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars} // mock data loop
          keyExtractor={item => item.id} // extract key from item
          renderItem={(
            { item }, // render item from each mock data
          ) => (
            <Car
              data={item}
              onPress={handleNavigationToCarDetails}
            />
          )}
        />
      )}
    </Container>
  )
}
