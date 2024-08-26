<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/utils/authStore';
const dialog = ref(false)
const email = ref('xxevertonreisxx@gmail.com')
const password = ref('password')
const authStore = useAuthStore()

async function login() {
    try {
        authStore.login(email.value, password.value)

    } catch (error) {

    }
}

</script>
<template>
    <div class="pa-1 text-center">
        <v-dialog v-model="dialog" max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="text-none font-weight-regular" text="Login" variant="tonal"
                    v-bind="activatorProps"></v-btn>
            </template>

            <v-card prepend-icon="mdi-account" title="Fazer login">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12" sm="6">
                            <v-text-field v-model="email" label="Email" required></v-text-field>
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

                    <v-btn color="primary" text="Login" variant="tonal" @click="login"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>