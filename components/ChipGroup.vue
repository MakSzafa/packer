<template>
    <v-card class="ma-2" :title="title">
            <v-chip-group 
            column 
            multiple 
            color="primary"
            v-model="pickedChips" 
            @update:model-value="emitChipGroupValue">
                <v-chip 
                v-for="chip in chips" 
                :key="chip.id"  
                :value="chip.name"
                class="mx-3" >
                {{ chip.name }}</v-chip>

            </v-chip-group>
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
    },
})

const pickedChips = ref([]);

const emit = defineEmits(['chipGroupValueUpdated'])

const emitChipGroupValue = () => {
    emit('chipGroupValueUpdated', pickedChips.value)
}
</script>