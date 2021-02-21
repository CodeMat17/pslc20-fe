<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <div class="px-4 pt-6">
      <div
        v-if="$apollo.queries.galleries.loading"
        class="text-center mt-32 text-lg tracking-wider"
      >
        Gallery is loading... Please wait
      </div>
      <div v-else-if="error" class="text-center mt-32 text-lg tracking-wider">
        Error: Cannot load gallery now. Please refresh page.
      </div>
      <div
        v-else-if="galleries === null"
        class="text-center mt-32 text-lg tracking-wider"
      >
        Please wait...
      </div>
      <div v-else>
        <div
          class="pt-4 text-center mb-4 font-bold text-2xl tracking-widest text-pink-500"
        >
          ...Gallery...
        </div>
        <div class="sm:grid lg:grid-cols-2 xl:grid-cols-3 md:gap-2">
          <div v-for="(gallery, i) in galleries" :key="i">
            <div
              class="w-full max-w-md mx-auto my-4 border rounded-lg overflow-hidden shadow-lg transform transition hover:bg-pink-100 hover:-translate-y-1 hover:shadow-xl"
            >
              <div v-if="gallery.image !== null">
                <img
                  :src="gallery.image"
                  class="object-center object-cover w-full h-64"
                />
              </div>
              <div class="px-4 py-2">
                <h1 class="font-medium text-md text-gray-900 text-center">
                  {{ gallery.title }}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pt-4 text-center mb-4 font-bold text-3xl tracking-widest text-gray-900"
        >
          ...More Coming Soon...
        </div>
        <Futta />
      </div>
    </div>
  </div>
</template>

<script>
import galleriesQuery from "~/apollo/queries/gallery/galleries";
export default {
  head() {
    return {
      title: "PSLC-20 Gallery",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "PSLC-20 E-book",
        },
      ],
    };
  },
  data() {
    return {
      galleries: [],
      query: "",
      error: null,
    };
  },
  apollo: {
    galleries: {
      prefetch: true,
      query: galleriesQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
};
</script>