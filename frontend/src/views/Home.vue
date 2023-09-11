<template>
    <div class="container mx-auto p-5">
        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="getUsers.length > 0" v-for="item in getUsers" :key="item.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.name }}
                </th>
                <td class="px-6 py-4">
                    {{ item.email }}
                </td>
                <td class="px-6 py-4">
                    {{ item.gender }}
                </td>
                <td class="px-6 py-4">
                    <a href="/">
                    <button type="button" @click="deleteUser(item.id)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        delete</button></a>
                        <router-link :to="{ name: 'Edit', params: { id: item.id}}">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">edit</button>
                        </router-link>
                </td>
            </tr>
            <tr v-else>
                <th class="text-center p-5 text-3xl" colspan="4">Data not found</th>
            </tr>
        </tbody>
    </table>
</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapGetters('users', ['getUsers'])
    },
    methods:{
        ...mapActions('users', ['fetchUsers']),
        deleteUser(usersId) {
      this.$store.dispatch('users/deleteUser', usersId);
    }
    },
    created() {
          this.fetchUsers();
      },
      beforeMount() {
        this.fetchUsers();
      },
}
</script>