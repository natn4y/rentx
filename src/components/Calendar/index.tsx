import React from 'react'
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars'                                     //! Renamed to Calendar to avoid conflict with the
                                                                    //! function Calendar()
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

interface Locale_detail {
monthNames? : string [] | undefined;
monthNamesShort?: string [] | undefined;
dayNames?: string[] | undefined;
dayNamesShort?: string [] | undefined;
amDesignator?: string | undefined;
pmDesignator?: string | undefined;
today?: string | undefined;
}

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje'
} as Locale_detail

LocaleConfig.defaultLocale = 'pt-br'

export function Calendar() {
  const theme = useTheme();

  return (
  <CustomCalendar
    renderArrow={( direction ) =>
      <Feather
        size={24}
        color={theme.colors.shape}
        name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
      />
    }

    headerStyle={{
      backgroundColor: theme.colors.background_secondary,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.text_detail,
      paddingBottom: 10,
      marginBottom: 10,
    }}

    theme={{
      textDayFontFamily: theme.fonts.primary_400,
      textDayHeaderFontFamily: theme.fonts.primary_500,
      textDayHeaderFontSize: 10,
      textMonthFontSize: 20,
      textMonthFontFamily: theme.fonts.secondary_600,
      monthTextColor: theme.colors.title,
      arrowStyle: {
        marginHorizontal: -15
      }
    }}

    firstDay={1}
    minDate={new Date().toDateString()}
  />
  )
}
