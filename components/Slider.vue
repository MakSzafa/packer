<template>
    <v-card class="ma-2" :title="title">
        <v-slider 
        v-model="sliderValue" 
        color="primary" 
        :min="min" 
        :max="max" 
        :step="step" 
        @update:model-value="emitSliderValue">

            <template v-slot:append>
                <v-text-field 
                v-model="sliderValue" 
                density="compact" 
                style="width: 80px" 
                type="number"
                variant="outlined">
                </v-text-field>
            </template>
        </v-slider>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    min: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        required: true,
    },
    step: {
        type: Number,
        default: 1,
    },
})

const sliderValue = ref(0);

const emit = defineEmits(['sliderValueUpdated'])

const emitSliderValue = () => {
    emit('sliderValueUpdated', sliderValue.value)
}
</script>