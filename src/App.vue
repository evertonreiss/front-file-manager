<script setup>
import { ref, watch } from 'vue'
import LoginModal from './components/LoginModal.vue';
import RegisterModal from './components/RegisterModal.vue';
import { useAuthStore } from './utils/authStore';
import ListagemArquivo from './components/ListagemArquivo.vue';

const drawer = ref(false)
const group = ref(null)
const authStore = useAuthStore()

const items = ref([
    {
        title: 'Todos',
        value: 'all'
    },
    {
        title: 'Imagens',
        value: 'image',
    },
    {
        title: 'Vídeos',
        value: 'video',
    },
    {
        title: 'Documentos',
        value: 'document',
    },
    {
        title: 'Músicas',
        value: 'music',
    },
])

watch(group, () => {
    drawer.value = false
})
</script>

<template>
    <v-card>
        <v-layout>
            <v-app-bar color="#253545" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>File Manager</v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-if="!authStore.isAuthenticated()">
                    <LoginModal></LoginModal>
                    <RegisterModal></RegisterModal>
                </template>
                <template v-else>
                    <p style="margin: 0 15px;">
                        Bem vindo, {{ authStore.getUser()?.name }}
                    </p>
                    <v-btn text="Sair" variant="plain" @click="authStore.logout()"></v-btn>
                </template>

            </v-app-bar>

            <v-navigation-drawer color="#213141" v-model="drawer"
                :location="$vuetify.display.mobile ? 'left' : undefined" temporary>
                <v-list :items="items"></v-list>
            </v-navigation-drawer>

            <v-main style="height: 100vh; background-color: #333; color: aliceblue;">
                <v-card-text>
                    <ListagemArquivo></ListagemArquivo>
                </v-card-text>
            </v-main>
        </v-layout>
    </v-card>
</template>


<style scoped></style>
