<template>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'LoginPage',

        data() {
            return {
                email: '',
                password: ''
            }
        },
        async created() {
            /* Redirect to Home page if the user is already logged */
            if (this.$store.getters.token){
                await this.$router.push({ name: 'Home' });
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post('api/login_check', {
                   username: this.email,
                   password: this.password
                });

                /* Record connection data and redirect to home */
                await this.$store.dispatch('login', response.data.token);
                await this.$router.push({ name: 'Home' });
            }
        }
    }
</script>

<style>
    .container {
        padding-top: 10%;
        padding-left: 10%;
        padding-right: 10%;
    }
</style>