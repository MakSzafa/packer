<template>
    <v-card class="ma-2" :title="title">
        <v-switch 
        v-model="switchValue" 
        color="primary" 
        false-value="Nie"
        true-value="Tak"
        @update:model-value="emitSwitchValue">
        </v-switch>
        <v-combobox v-if="switchValue === 'Tak'"
        v-model="selectValue"
        clearable
        chips
        multiple
        variant="outlined"
        density="compact"
        label="Wybierz"
        :items="items"
        @update:model-value="emitSelectValue">
        </v-combobox>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    }
})

const switchValue = ref(false);
const selectValue = ref([])

const emit = defineEmits(['switchValueUpdated', 'selectValueUpdated'])

const emitSwitchValue = () => {
    emit('switchValueUpdated', switchValue.value)
    if (switchValue.value === 'Nie') emit('selectValueUpdated', [])
}

const emitSelectValue = () => {
    emit('selectValueUpdated', selectValue.value)
}
</script>