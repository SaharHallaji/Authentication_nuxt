<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
import axios from "axios"

const data = ref()
const router = useRouter()
axios({
    method: 'post',
    url: "/api/signUp",
    data: {
        username: "saharhallaji",
        password: "12345",
        firstName: "sahar",
        lastName: "hallaji",
        email: "saharhallaji.dev@gmail.com"
    }
}).then((response) => {
    response.data.statusCode === 200 ? router.push('/login') : alert(response.data.statusMessage)
}).catch((reason) => console.log(reason))

</script>

<style scoped>

</style>