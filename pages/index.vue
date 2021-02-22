<template>
  <div
    class="bg-blue-900 w-full h-screen flex items-center justify-end flex-col"
  >
    <div class="flex items-center justify-center">
      <p class="text-6xl font-black uppercase text-gray-300 tracking-widest">
        pslc
      </p>
      <div class="bg-gray-300 px-1 animate-pulse ml-3 rounded-full">
        <p
          class="pt-2 px-2 animate-bounce font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900"
        >
          20
        </p>
      </div>
    </div>
    <div class="my-32">
      <n-link
        class="font-semibold text-2xl text-gray-300 shadow-xl rounded-lg px-6 py-3 bg-blue-600 hover:bg-blue-500"
        to="/members"
        >View Members</n-link
      >
    </div>
  </div>
</template>



