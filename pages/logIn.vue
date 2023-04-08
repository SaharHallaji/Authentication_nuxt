<template>
    <form>
        <input type="text">

    </form>
</template>

<script setup>
import axios from "axios"
const router = useRouter()
onMounted(()=>{
    axios({
        method: "post",
        url: "/api/logIn",
        data: {
            username: "saharhallaji",
            password: "12345",
        }
    }).then((response) => {
        response.data.statusCode === 200 ? router.push('/dashboard') : alert(response.data.statusMessage)
    }).catch((err) => {
        console.log(err)
    })
})

</script>

<style scoped>

</style>