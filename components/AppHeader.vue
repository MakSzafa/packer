<template>
    <v-app-bar scroll-behavior="elevate" scroll-threshold="250" density="compact" class="bg-header text-on-header">
        <v-app-bar-title class="d-flex justify-center font-weight-bold text-h4 cursor-pointer" @click="navigateTo('/')">Packer</v-app-bar-title>
        <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'customLightTheme' : 'customDarkTheme'
}
</script>