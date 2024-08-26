<script setup>
import { ref } from 'vue';
import { api } from '@/utils/api';

const arquivoForm = ref({
    is_visible: '1',
    is_downloadable: '1'
})
const emit = defineEmits(['upload'])

const dialog = ref(false)

async function enviarArquivo() {
    try {
        const formData = new FormData()
        Object.keys(arquivoForm.value).forEach(chave => formData.append(chave, arquivoForm.value[chave]))
        const response = await api.post('/arquivos', formData, { headers: { "Content-Type": 'multipart/form-data' } })
        emit('upload')
        if (response) {
            dialog.value = false
            arquivoForm.value = {
                is_visible: '1',
                is_downloadable: '1'
            }
        }
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <v-dialog v-model="dialog" max-width="500">
        <template #activator="{ props: activatorProps }">
            <v-btn size="x-large" prepend-icon="mdi-cloud-upload" elevation="4" v-bind="activatorProps" color="#303540"
                text="Enviar arquivo" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card prepend-icon="mdi-cloud-upload" color="#354050" title="Enviar arquivo">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12" sm="6">
                            <v-file-input v-model="arquivoForm.uploaded_file" prepend-icon="" label="Arquivo"
                                variant="outlined" counter show-size></v-file-input>
                        </v-col>

                        <v-col cols="12" md="12" sm="6">
                            <v-textarea v-model="arquivoForm.description" clearable label="Descrição"
                                variant="outlined"></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-checkbox true-value="1" false-value="0" v-model="arquivoForm.is_visible"
                                label="Visível"></v-checkbox>
                        </v-col>
                        <v-col cols="6">
                            <v-checkbox true-value="1" false-value="0" v-model="arquivoForm.is_downloadable"
                                label="Baixável"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Cancelar" @click="dialog = false"></v-btn>
                    <v-btn text="Enviar" color="green" @click="enviarArquivo"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>