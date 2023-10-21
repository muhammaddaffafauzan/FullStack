<template>
    <div class="container mx-auto p-5">
      <span class="mb-5 font-medium text-3xl">Edit users</span>
       <div class="bg-gray-100 border border-gray-200 rounded-lg max-w-full p-8 mt-3">
        
<form @submit.prevent="updateUserData">
    <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
    <input type="text" v-model="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="user.name" required>
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="user.email" required>
  </div>
  <div class="mb-6">
    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your gender</label>
    <select v-model="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
        <option value="" hidden>{{ user.gender }}</option>
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
  data(){
    return this.editedUser
  },
  computed:{
        ...mapGetters('users', ['getUsersById']),
        user() {
        return this.getUsersById(this.$route.params.id);
      },
    },
 methods: {
  ...mapActions('users', ['fetchSingleUsers', 'updateUser']),
  async updateUserData() {
      const { id, name, email, gender } = this.editedUser;
      await this.updateUser({ id, name, email, gender });
      const success = await this.updateUser({ id, name, email, gender });
          if (success) {
              
              alert("failed edit");
          } else {
              this.$router.push("/");
          }
    }
 },
 mounted() {
      const userId = this.$route.params.id;
      this.fetchSingleUsers(userId);
    }
}
</script>