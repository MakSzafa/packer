<template>
    <v-card class="ma-2" :title="title">
        <v-switch v-model="switchValue" color="primary" false-value="Nie" true-value="Tak"
            @update:model-value="emitSwitchValue">
        </v-switch>
        <v-chip-group v-if="switchValue === 'Tak'" 
            column 
            multiple 
            color="primary" 
            v-model="selectChipsValue"
            @update:model-value="emitSelectedChipsValue">
            <v-chip v-for="chip in chips" 
            :key="chip.id" 
            :value="chip.name" 
            class="mx-3">
                {{ chip.name }}
            </v-chip>
        </v-chip-group>
        <!-- <v-select v-if="switchValue === 'Tak'"
        v-model="selectValue"
        clearable
        chips
        multiple
        variant="outlined"
        density="compact"
        label="Wybierz"
        :items="items"
        @update:model-value="emitSelectValue">
        </v-select> -->
    </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    chips: {
        type: Array,
        required: true,
    }
})

const switchValue = ref(false);
const selectChipsValue = ref([])

const emit = defineEmits(['switchValueUpdated', 'selectValueUpdated'])

const emitSwitchValue = () => {
    emit('switchValueUpdated', switchValue.value)
    if (switchValue.value === 'Nie') emit('selectValueUpdated', [])
}

const emitSelectedChipsValue = () => {
    emit('selectValueUpdated', selectChipsValue.value)
}
</script>