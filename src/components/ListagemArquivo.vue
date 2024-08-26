<script setup>
import { onMounted, ref } from 'vue';
import ArquivoOpcoes from './ArquivoOpcoes.vue';
import { api } from '@/utils/api';
import humanFileSize from '@/utils/humanFileSize';
import { getFileType, getIconForFile } from '@/utils/fileUtils';

const files = ref([])

async function listarArquivos() {
    const response = await api.get('/arquivos')
    files.value = response.data.data
}

onMounted(listarArquivos)

defineExpose({ listarArquivos })

</script>
<template>
    <v-card v-if="files.length" class="mx-auto pa-6" max-width="90vw" color="#303540">
        <v-list-item v-for="file in files" :key="file.id" :title="file.file_name + '.' + getFileType(file.file_path)"
            style="margin: 10px 0; background-color: #363c44;">
            <template v-slot:prepend>
                <v-icon size="x-large" color="#fff">{{ getIconForFile(getFileType(file.file_path)) }}</v-icon>
                <!-- <v-avatar color="#506070" tile>
                </v-avatar> -->
            </template>
            <template v-slot:extends></template>
            <v-row justify="space-around" no-gutters>
                <v-col cols="1">
                    <span>{{ humanFileSize(file.file_size, true) }}</span>
                </v-col>
                <v-col cols="2">
                    <span><b>Enviado por:</b> {{ file.user.name }}</span>
                </v-col>
                <v-col cols="8">
                    <span>{{ file.description ?? '' }}</span>
                </v-col>
                <v-col cols="1">
                    <span style="color: #fff" v-if="!file.is_visible">Privado</span>
                </v-col>
            </v-row>
            <template v-slot:append>
                <ArquivoOpcoes @remove="listarArquivos" @edit="listarArquivos" :uploaded-by="file.user.id"
                    :is-downloadable="file.is_downloadable" :file-id="file.id" :file-name="file.file_name"
                    :mime-type="file.mime_type">
                </ArquivoOpcoes>
            </template>
        </v-list-item>
    </v-card>
</template>