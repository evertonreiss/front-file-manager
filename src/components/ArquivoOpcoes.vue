<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/utils/authStore';
import downloadFile from '@/utils/downloadFile';
import { api } from '@/utils/api';
import { baseURL } from '@/utils/api';

const props = defineProps({
    uploadedBy: {
        type: Number,
        required: true
    },
    isDownloadable: {
        type: Boolean,
        required: true
    },
    fileId: {
        type: Number,
        required: true
    },
    fileName: {
        type: String,
        required: true
    }
});

const authStore = useAuthStore()
const authUserId = authStore.getUser() ? authStore.getUser().id : null

const isFileOwner = authUserId === props.uploadedBy

async function requestDownloadFile() {
    const response = await api.get('/arquivos/download/' + props.fileId, { responseType: 'blob' })
    downloadFile(response.data, props.fileName)
}

const opcoes = [
    { title: 'Ver', icon: 'mdi-arrow-expand-all', active: true },
    { title: 'Editar', icon: 'mdi-pencil', active: isFileOwner },
    { title: 'Excluir', icon: 'mdi-delete', active: isFileOwner },
    { title: 'Download', icon: 'mdi-download', active: props.isDownloadable, onClick: requestDownloadFile }
]

</script>
<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
        </template>

        <v-list style="background-color: #405060;">
            <v-list-item v-for="item in opcoes.filter(e => e.active)" :key="item.id">
                <v-list-item-title style="color: aliceblue;">
                    <v-btn @click="item.onClick" class="text-none" color="transparent" :prepend-icon="item.icon"
                        variant="flat">
                        {{ item.title }}
                    </v-btn>
                </v-list-item-title>

            </v-list-item>
        </v-list>
    </v-menu>
</template>
