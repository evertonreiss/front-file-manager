<script setup>
import { api } from '@/utils/api';
import { ref } from 'vue';
import { useAuthStore } from '@/utils/authStore';

const authStore = useAuthStore()
const dialog = ref(false)

const name = ref('Everton')
const email = ref('everton@email.com')
const password = ref('password')

async function cadastrar() {
    const data = {
        "name": name.value,
        "email": email.value,
        "password": password.value
    }
    try {
        const response = await api.post('/register', data)
        if (response.status == 201) {
            authStore.login(email.value, password.value)
            dialog = false
        }
    } catch (error) {

    }
}

</script>
<template>
    <div class="pa-4 text-center">
        <v-dialog v-model="dialog" max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="text-none font-weight-regular" text="Cadastrar" variant="tonal"
                    v-bind="activatorProps"></v-btn>
            </template>

            <v-card prepend-icon="mdi-account" title="Cadastrar-se">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12" sm="6">
                            <v-text-field v-model="name" label="Nome" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12" sm="6">
                            <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12" sm="6">
                            <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Cancelar" variant="plain" @click="dialog = false"></v-btn>

                    <v-btn color="primary" text="Cadastrar" variant="tonal" @click="cadastrar"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>