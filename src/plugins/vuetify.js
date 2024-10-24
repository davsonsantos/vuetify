import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export const PrimaryColor = '#8B5DC0';
export const PrimaryDarkColor = '#3F78FF';
export const PrimaryLightColor = '#E9F0FF';
export const PrimaryLightColorForDark = '#18243e';

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: PrimaryColor,
    secondary: '#5B6B79',
    info: '#3ec9d6',
    success: '#2ca87f',
    warning: '#e58a00',
    error: '#dc2626',
    lightprimary: PrimaryLightColor,
    lightsecondary: '#F8F9FA',
    lightsuccess: '#c0e5d9',
    lightinfo: '#c5eff3',
    lighterror: '#f5bebe',
    lightwarning: '#f7dcb3',
    darkText: '#1D2630',
    lightText: '#5B6B79',
    darkprimary: PrimaryDarkColor,
    darksecondary: '#3E4853',
    darkinfo: '#30bccc',
    darksuccess: '#21976c',
    darkwarning: '#de7700',
    darkerror: '#d31c1c',
    borderLight: '#e8ebee',
    inputBorder: '#BEC8D0',
    containerBg: '#F8F9FA',
    surface: '#fff',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#f3f5f7',
    primary200: '#b8ceff',
    secondary200: '#d8dadd',
    warning200: '#faaf00'
  }
}

export default createVuetify({
  defaults: {
    global: {},
    VTextField: {
      variant: 'outlined',
      rounded: 'lg',
      density: 'compact'
    },
    VBtn: {
      color: 'primary',
      variant: 'flat',
      rounded: 'lg',
      style: 'text-transform: none;',
    },
    VCard: {
      rounded: 'md'
    },
    VTooltip: {
      location: 'top'
    }
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})
