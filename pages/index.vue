<template>
    <div>
        <h1 class="title ma-2">Spakuj się z nami na wyjazd!</h1>
        <v-form class="ma-5" @submit.prevent="onSubmit">
            <Slider 
            @sliderValueUpdated="handleTravelDaysUpdated" 
            title="Czas trwania wyjazdu" 
            :min="0" 
            :max="14"/>
            <Slider 
            @sliderValueUpdated="handleTemperatureUpdated" 
            title="Przewidywana średnia temperatura" 
            :min="-20" 
            :max="40"/>
            <ChipGroup 
            @chipGroupValueUpdated="handleWeatherConditionsUpdated"
            title="Warunki pogodowe"
            :chips="weatherConditions"/>
            <ChipGroup 
            @chipGroupValueUpdated="handleActivitiesUpdated"
            title="Dodatkowe aktywności"
            :chips="activities"/>
            <SwitchSelect 
            @switchValueUpdated="handleCosmeticUpdated"
            @selectValueUpdated="handleCosmeticsListUpdated"
            title="Czy potrzebujesz kosmetyków?"
            :chips="cosmetics"/>
            <SwitchSelect 
            @switchValueUpdated="handleFirstAidUpdated"
            @selectValueUpdated="handleFirstAidListUpdated"
            title="Czy potrzebujesz apteczkę?"
            :chips="firstAidKit"/>
            <ChipGroup 
            @chipGroupValueUpdated="handleAddOnsUpdated"
            title="Dodatki"
            :chips="addOns"/>
            <v-btn class="mt-2" type="submit">Submit</v-btn>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// travel time
const travelDays = ref(0);

const handleTravelDaysUpdated = (value) => {
    travelDays.value = value;
}

// temperature
const temperature = ref(0);

const handleTemperatureUpdated = (value) => {
    temperature.value = value;
}

// weather conditions
const weatherConditions = [
    { id: 1, name: 'słońce' },
    { id: 2, name: 'deszcz' },
    { id: 3, name: 'śnieg' },
    { id: 4, name: 'wiatr' },
]

const weatherConditionsPicked = ref([]);

const handleWeatherConditionsUpdated = (value) => {
    weatherConditionsPicked.value = value;
}

// activities
const activities = [
    { id: 1, name: 'pływanie' },
    { id: 2, name: 'opalanie' },
    { id: 3, name: 'spacerowanie' },
    { id: 4, name: 'zwiedzanie' },
    { id: 5, name: 'treking' },
]

const activitiesPicked = ref([]);

const handleActivitiesUpdated = (value) => {
    activitiesPicked.value = value;
}

// cosmetics
const cosmetics = [
    { id: 1, name: 'krem' }, 
    { id: 2, name: 'maszynka do golenia' }, 
    { id: 3, name: 'odżywka do włosów' }, 
    { id: 4, name: 'pasta do zębów' }, 
    { id: 5, name: 'perfumy' }, 
    { id: 6, name: 'szapmon' }, 
    { id: 7, name: 'szczoteczka do zębów' }, 
    { id: 8, name: 'żel do mycia' }, 
    { id: 9, name: 'żel do twarzy' },
]

const isCosmetic = ref('Nie');
const cosmeticsList = ref([]);

const handleCosmeticUpdated = (value) => {
    isCosmetic.value = value;
}

const handleCosmeticsListUpdated = (value) => {
    cosmeticsList.value = value;
}

// first aid kit
const firstAidKit = [
    { id: 1, name: 'lek przeciwbólowy' },
    { id: 2, name: 'plastry' },
    { id: 3, name: 'środek odkażający' },
]

const isFirstAid = ref('Nie');
const firstAidList = ref([]);

const handleFirstAidUpdated = (value) => {
    isFirstAid.value = value;
}

const handleFirstAidListUpdated = (value) => {
    firstAidList.value = value;
}

// add-ons
const addOns = [
    { id: 1, name: 'akcesoria do pływania np. koło' },
    { id: 2, name: 'aparat' },
    { id: 3, name: 'dron' },
    { id: 4, name: 'karty' },
    { id: 5, name: 'książka' },
    { id: 6, name: 'ładowarka' },
    { id: 7, name: 'okulary przeciwsłoneczne' },
    { id: 8, name: 'powerbank' },
    { id: 9, name: 'słuchawki' },
    { id: 10, name: 'spinacze na ubrania' },
    { id: 11, name: 'zestaw do nurkowania' },
    { id: 12, name: 'zestaw do szycia' },
]

const addOnsPicked = ref([]);

const handleAddOnsUpdated = (value) => {
    addOnsPicked.value = value
}

// submit form
const onSubmit = () => {
    if(travelDays.value < 0) travelDays.value = 1;
    if(travelDays.value > 14) travelDays.value = 14;
    if(temperature.value < -20) temperature.value = -20;
    if(temperature.value > 40) temperature.value = 40;

    const pickedSummary = {
        days: travelDays.value,
        temperature: temperature.value,
        weatherConditions: weatherConditionsPicked.value,
        activities: activitiesPicked.value,
        isCosmetics: isCosmetic.value,
        cosmetics: cosmeticsList.value,
        isFirstAidKit: isFirstAid.value,
        firstAidKit: firstAidList.value,
        addOns: addOnsPicked.value,
    }
    localStorage.setItem('form', JSON.stringify(pickedSummary))
    navigateTo('/generated')
}
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";

.title {
    text-align: center;
}
</style>