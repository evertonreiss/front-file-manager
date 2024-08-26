<script setup>
import { computed, inject, ref } from 'vue';
import { useAuthStore } from '@/utils/authStore';
import { downloadFile, viewFile } from '@/utils/fileUtils';
import { api } from '@/utils/api';
import ArquivoEditar from './ArquivoEditar.vue';

const modalEditar = ref(false)

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
    mimeType: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['remove', 'edit'])

const authStore = useAuthStore()

const isFileOwner = computed(() => authStore.getAuth()?.user?.id === props.uploadedBy && authStore.isAuthenticated())

const isFileDownloadable = computed(() => isFileOwner || props.isDownloadable)

async function requestDownloadFile() {
    const response = await api.get('/arquivos/download/' + props.fileId, { responseType: 'blob' })
    downloadFile(response.data, props.fileName, props.mimeType)
}

async function requestViewFile() {
    const response = await api.get('/arquivos/download/' + props.fileId, { responseType: 'blob' })
    viewFile(response.data, props.mimeType)
}

async function requestDeleteFile() {
    const response = await api.delete('/arquivos/' + props.fileId)
    emit('remove')
}

const opcoes = ref([
    { title: 'Ver', icon: 'mdi-arrow-expand-all', active: true, onClick: requestViewFile },
    { title: 'Editar', icon: 'mdi-pencil', active: isFileOwner, onClick: () => modalEditar.value = true },
    { title: 'Excluir', icon: 'mdi-delete', active: isFileOwner, onClick: requestDeleteFile },
    { title: 'Download', icon: 'mdi-download', active: isFileDownloadable, onClick: requestDownloadFile }
])

</script>
<template>
    <ArquivoEditar v-model="modalEditar" @edit="$emit('edit')" :file-id="props.fileId"></ArquivoEditar>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
        </template>

        <v-list style="background-color: #405060;">
            <template v-for="item in opcoes" :key="item.id">
                <v-list-item v-if="item.active">
                    <v-list-item-title style="color: aliceblue;">
                        <v-btn @click="item.onClick" class="text-none" color="transparent" :prepend-icon="item.icon"
                            variant="flat">
                            {{ item.title }}
                        </v-btn>
                    </v-list-item-title>

                </v-list-item>
            </template>
        </v-list>
    </v-menu>
</template>
