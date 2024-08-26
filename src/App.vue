<script setup>
import { ref, watch } from 'vue'
import LoginModal from './components/LoginModal.vue';
import RegisterModal from './components/CadastrarModal.vue';
import { useAuthStore } from './utils/authStore';
import ListagemArquivo from './components/ListagemArquivo.vue';
import ArquivoEnviar from './components/ArquivoEnviar.vue';

const drawer = ref(false)
const group = ref(null)
const authStore = useAuthStore()
const listagemArquivoRef = ref()

</script>

<template>
    <v-card>
        <v-layout>
            <v-app-bar color="#253545" prominent>
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

            <v-main style="min-height: 100vh; background-color: #333; color: aliceblue; padding: 100px 20px;">
                <v-card-text v-if="authStore.isAuthenticated()">
                    <div class="d-flex justify-center my-10">
                        <ArquivoEnviar @upload="listagemArquivoRef.listarArquivos()">
                        </ArquivoEnviar>
                    </div>
                    <ListagemArquivo ref="listagemArquivoRef"></ListagemArquivo>
                </v-card-text>
                <v-card v-else class="mx-auto elevation-4" max-width="415" color="#304050"
                    title="Faça login para acessar e enviar arquivos">
                </v-card>

            </v-main>
        </v-layout>
    </v-card>
</template>


<style scoped></style>
