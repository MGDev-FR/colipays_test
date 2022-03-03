<template>
    <div class="container">
        <h2>Users list</h2>

        <table class="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Active</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for='user in users' :key="user.id">
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>@{{ user.isActive }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "HomePage",
        data() {
            return {
                users: ''
            }
        },
        async created() {
            /* Retrieve the list of all the users */
            const response = await axios.get('api/users', {
                /* Token config for the route api/users */
                headers: {
                    Authorization: "Bearer " + this.$store.getters.token
                }
            });

            this.users = response.data['hydra:member'];
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