<template>
    <div class="container mx-auto p-5">
       <div class="bg-gray-100 border border-gray-200 rounded-lg max-w-full p-8">
        
<form @submit.prevent="submitUsers">
    <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
    <input type="text" v-model="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john selatan" required>
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required>
  </div>
  <div class="mb-6">
    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your gender</label>
    <select v-model="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
        <option value="">Your Gender</option>
        <option value="pria">pria</option>
        <option value="wanita">wanita</option>
    </select>
  </div>
 
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

       </div> 
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
       return {
        name: '',
        email: '',
        gender: '',
    };
  },
  computed:{
        ...mapGetters('users', ['getUsers'])
    },
 methods: {
  ...mapActions('users', ['updateUsers']),
   async submitUsers(){
    const credentials = {
              name: this.name,
              email: this.email,
              gender: this.gender
          };
          const success = await this.createUsers(credentials);
          if (success) {
              
              alert("failed");
          } else {
              
              this.$router.push("/");
          }
    }
 },
}
</script>