<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/utils/authStore';

const dialog = ref(false);
const email = ref();
const password = ref();
const authStore = useAuthStore();
const error = ref()

async function login() {
    try {
        const response = await authStore.login(email.value, password.value);
    } catch (e) {
        error.value = Object.values(e.response.data.errors).flat().join('\n')
    }
}
</script>

<template>
    <div class="text-center">
        <v-dialog v-model="dialog" max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="text-none font-weight-regular" text="Login" v-bind="activatorProps"></v-btn>
            </template>

            <v-card prepend-icon="mdi-account" title="Fazer login" color="#303540">
                <v-card-text>
                    <form @submit.prevent="login">
                        <v-alert v-if="error" class="mb-4" color="error" :text="error"></v-alert>
                        <v-row dense>
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
                                variant="flat" text="Cancelar"></v-btn>
                            <v-btn class="text-none ms-2 text-white" color="#1e4f3e" rounded="2" variant="flat"
                                text="Login" type="submit"></v-btn>
                        </v-card-actions>
                    </form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>