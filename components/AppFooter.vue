<template>
    <v-footer class="bg-header text-on-header flex-0-1 justify-center">
        <v-btn class="mx-3" rounded="xl" variant="text" @click="navigateTo('/about')">
            Informacje
        </v-btn>
        <v-btn class="mx-3" rounded="xl" variant="text" @click="navigateTo('https://buycoffee.to/maniek_programista', {open:{target: '_blank'}})">
            Wesprzyj mnie
        </v-btn>
        <v-btn class="mx-3" rounded="xl" variant="text" @click="navigateTo('https://makszafa.pl', {open:{target: '_blank'}})">
            Kontakt
        </v-btn>
    </v-footer>
</template>

