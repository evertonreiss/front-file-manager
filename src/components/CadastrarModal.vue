<script setup>
import { api } from '@/utils/api';
import { ref } from 'vue';
import { useAuthStore } from '@/utils/authStore';

const authStore = useAuthStore();
const dialog = ref(false);

const name = ref('Everton');
const email = ref('everton@email.com');
const password = ref('password');

async function cadastrar() {
    const data = {
        "name": name.value,
        "email": email.value,
        "password": password.value
    };
    try {
        const response = await api.post('/register', data);
        if (response.status == 201) {
            authStore.login(email.value, password.value);
            dialog.value = false;
        }
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <div class="px-3 text-center">
        <v-dialog v-model="dialog" max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="text-none font-weight-regular" text="Cadastrar" v-bind="activatorProps"></v-btn>
            </template>

            <v-card prepend-icon="mdi-account" color="#303540" title="Cadastrar-se">
                <v-card-text>
                    <!-- Adicione o formulário -->
                    <form @submit.prevent="cadastrar">
                        <v-row dense>
                            <v-col cols="12" md="12" sm="6">
                                <v-text-field v-model="name" label="Nome" required variant="outlined"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" sm="6">
                                <v-text-field v-model="email" label="Email" type="email" required
                                    variant="outlined"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" sm="6">
                                <v-text-field v-model="password" label="Senha" type="password" required
                                    variant="outlined"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn @click="dialog = false" class=" text-none text-white" color="#50505070" rounded="2"
                                variant="flat" text="Cancelar" type="submit"></v-btn>
                            <v-btn class="text-none ms-2 text-white" color="#1e4f3e" rounded="2" variant="flat"
                                text="Cadastrar" type="submit"></v-btn>
                        </v-card-actions>
                    </form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
