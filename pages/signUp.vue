<template>
    <div>
        <form @submit.prevent="submitForm()" class="d-flex flex-column justify-content-center align-items-center">
            <input class="form-control mb-3" type="text" name="username" v-model="my_username" placeholder="username"
                   required>
            <input class="form-control mb-3" type="text" name="firstName" v-model="first_name" placeholder="first name"
                   required>
            <input class="form-control mb-3" type="text" name="lastName" v-model="last_name" placeholder="last name"
                   required>
            <input class="form-control mb-3" type="email" name="email" v-model="my_email" placeholder="email" required>
            <input class="form-control mb-3" type="password" name="password" v-model="my_password"
                   placeholder="password" required>
            <button class="btn-success btn">
                submit
            </button>
        </form>
    </div>
</template>

<script setup>
import axios from "axios"

const router = useRouter()
const my_username = ref()
const first_name = ref()
const last_name = ref()
const my_email = ref()
const my_password = ref()
const submitForm = () => {
    axios({
        method: "post",
        url: "/api/signUp",
        data: {
            firstName: first_name.value,
            lastName: last_name.value,
            username: my_username.value,
            password: my_password.value,
            email: my_email.value
        }
    }).then((res) => {
        if (res.data.statusCode === 200) router.push('/login')
        else alert(res.data.statusCode + "\n" + res.data.statusMessage)
    }).catch((err) => {
        console.log(err)
    })
}
/*

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
*/

</script>

<style scoped lang="sass">
form
  height: 98vh

  input
    width: 50%
</style>