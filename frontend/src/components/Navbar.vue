<template>
<nav class="border-gray-200 bg-indigo-300 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xs flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FullStack</span>
    </a>
    <router-link to="/create">
    <button>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z"/>
  </svg>
    </button>
</router-link>
  </div>
</nav>

</template>