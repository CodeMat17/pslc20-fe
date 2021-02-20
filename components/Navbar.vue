<template>
  <div class="block flex justify-center items-center space-x-5">
    <div
      class="w-full bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div
        class="flex items-center justify-between text-gray-200 px-4 py-3 sm:p-0"
      >
        <div class="flex items-center justify-center text-2xl font-semibold tracking-wider">
          <p>PSLC</p>
          <div class="ml-2 text-gray-900 bg-gray-100 rounded-full px-1">20</div>
        </div>
        <div class="sm:hidden">
          <button
            @click="showMenu = !showMenu"
            type="button"
            class="text-yellow-500 hover:text-yellow-300 focus:outline-none"
          >
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-show="showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-show="!showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="showMenu ? 'block' : 'hidden'"
        class="uppercase font-semibold tracking-wider text-gray-400 sm:flex"
        @click="showMenu = !showMenu"
      >
        <n-link
          to="/members"
          class="block pl-4 pr-6 py-3 mt-1 text-lg hover:text-yellow-500 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Members</n-link
        >
        <n-link
          to="/gallery"
          class="block pl-4 pr-6 py-3 mt-1 text-lg hover:text-yellow-500 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Gallery</n-link
        >
        <!-- <button 
        @click="logout"
        class="block w-full px-4 py-3 mt-4 mb-2 sm:m-0 bg-yellow-500 text-gray-900 rounded font-semibold uppercase hover:bg-yellow-300"
        >
        Logout</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    // async logout() {
    //   await this.$strapi.logout();
    //   this.$nuxt.$router.push("/");
    // },
  },
};
</script>