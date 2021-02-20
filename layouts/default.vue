<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="bg-red-200 w-full h-screen flex items-center justify-center"
    >
      <p class="p-4 tracking-widest text-center text-lg sm:text-xl text-red-500">
        Your internet is off or very poor at the moment. Reconnect and refresh the page.
      </p>
    </div>
    <div v-if="$nuxt.isOnline">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
