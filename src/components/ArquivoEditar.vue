<script setup>
import { onMounted, ref, watch } from 'vue';
import { api } from '@/utils/api';

const props = defineProps({
    fileId: {
        type: Number,
        required: true
    },
});

const arquivoForm = ref({})
const error = ref()

const emit = defineEmits(['edit'])
const model = defineModel()

async function editarArquivo() {
    try {
        const response = await api.put('/arquivos/' + props.fileId, arquivoForm.value)
        emit('edit')
        if (response) {
            model.value = false
        }
    } catch (e) {
        error.value = Object.values(e.response.data.errors).flat().join('\n')
    }
}

watch(model, async () => {
    const response = await api.get('/arquivos/' + props.fileId)
    arquivoForm.value = response.data.data
})


</script>

<template>
    <v-dialog v-model="model" max-width="500">
        <template v-slot:default="{ isActive }">
            <v-card prepend-icon="mdi-pencil" color="#354050" title="Editar Arquivo">
                <v-card-text>
                    <v-alert v-if="error" class="mb-4" color="error" :text="error"></v-alert>
                    <v-row dense>
                        <v-col cols="12" md="12" sm="6">
                            <v-text-field v-model="arquivoForm.file_name" label="Nome do arquivo"
                                variant="outlined"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12" sm="6">
                            <v-textarea v-model="arquivoForm.description" clearable label="Descrição"
                                variant="outlined"></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-checkbox v-model="arquivoForm.is_visible" label="Visível"></v-checkbox>
                        </v-col>
                        <v-col cols="6">
                            <v-checkbox v-model="arquivoForm.is_downloadable" label="Baixável"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Cancelar" @click="model = false"></v-btn>
                    <v-btn text="Enviar" color="green" @click="editarArquivo"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>