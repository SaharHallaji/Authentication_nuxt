
export default defineNuxtConfig({
    css: [
        "bootstrap/dist/css/bootstrap.min.css"
    ],
    vite: {
        logLevel: "error"
    },
    nitro: {
        plugins: ["~/server/index.ts"],
    },
    runtimeConfig: {
        public: {
            apiBase: 'http://192.168.1.108:3000/'
        }
    },
})
