<template>
    <form @submit.prevent="loginForm()" class="d-flex flex-column justify-content-center align-items-center">
        <input class="form-control mb-3" type="text" name="username" placeholder="username" v-model="my_username">
        <input class="form-control mb-3" type="password" name="password" placeholder="password" v-model="my_password">
        <button class="btn btn-success">
            login
        </button>
    </form>
</template>

<script setup>
import axios from "axios"

const my_username = ref()
const my_password = ref()
const router = useRouter()
const loginForm = () => {
    axios({
        method: "post",
        url: "/api/logIn",
        data: {
            username: my_username.value,
            password: my_password.value
        }
    }).then((res) => {
        res.data.statusCode === 200 ? router.push("/dashboard") : alert(res.data.statusCode + "\n " + res.data.statusMessage)

    }).catch((err)=> console.log(err)
    )
}

</script>

<style scoped lang="sass">
form
  height: 98vh

  input
    width: 50%
</style>