// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    'on-background': '#000000',
    surface: '#FFFFFF',
    'on-surface': '#000000',
    primary: '#8047E0',
    'primary-darken-1': '#8169ae',
    secondary: '#2a7e00',
    'secondary-darken-1': '#096000',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    header: '#8047E0',
    'on-header': '#000000',
  }
}

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    'on-background': '#BDBDBD',
    surface: '#282a2a',
    'on-surface': '#e7e7e7',
    primary: '#B694F6',
    'primary-darken-1': '#965bf9',
    secondary: '#C2F26A',
    'secondary-darken-1': '#ACE92A',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    header: '#282a2a',
    'on-header': '#e7e7e7',
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({

    theme: {
      defaultTheme: 'customDarkTheme',
      themes: {
        customLightTheme,
        customDarkTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
})
