import { computed, reactive, ref } from "vue";
import { api } from "./api";

const auth = reactive(
    JSON.parse(localStorage.getItem('auth')) ?? {}
)

const isAuthenticated = computed(() => auth.token != null)

export function useAuthStore() {
    return {
        async login(email, password) {
            try {
                const response = await api.post('/login', {
                    email,
                    password
                })
                if (response) {
                    localStorage.setItem('auth', JSON.stringify(response.data.data))
                    auth.token = response.data.data.token
                    auth.user = response.data.data.user
                }
            } catch (error) {

            }
        },
        logout() {
            localStorage.removeItem('auth')
            auth.token = null
            auth.user = null
        },
        isAuthenticated() {
            return isAuthenticated.value
        },
        getToken() {
            if (!auth.token) {
                return null
            }
            return 'Bearer ' + auth.token
        },
        getUser() {
            return auth.user
        }
    }
}