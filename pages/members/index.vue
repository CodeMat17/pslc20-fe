<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <div class="px-4 pt-6">
      <div
        v-if="$apollo.queries.members.loading"
        class="text-center mt-32 text-lg tracking-wider"
      >
        Members data loading... Please wait
      </div>
      <div v-else-if="error" class="text-center mt-32 text-lg tracking-wider">
        Cannot load members now. Please refresh page.
      </div>
      <div
        v-else-if="members === null"
        class="text-center mt-32 text-lg tracking-wider"
      >
        Please wait...
      </div>
      <div v-else>
        <div
          class="pt-4 text-center mb-4 font-bold text-2xl tracking-widest text-pink-500"
        >
          The New Dawn Leaders
        </div>
        <div class="sm:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2">
          <div v-for="(member, i) in members" :key="i">
            <div
              class="w-full max-w-xs mx-auto my-4 border rounded-lg overflow-hidden shadow-lg transform transition hover:bg-pink-100 hover:-translate-y-1 hover:shadow-xl"
            >
              <div v-if="member.image !== null">
                <img
                  :src="strapi_url + member.image.url"
                  class="object-top object-cover w-full h-64"
                />
              </div>
              <div class="px-4 py-2">
                <h1 class="font-semibold text-lg text-gray-900">
                  {{ member.name }}
                </h1>
                <p
                  v-if="member.position !== null"
                  class="font-semibold tracking-wider text-gray-600"
                >
                  {{ member.position }}
                </p>
                <p class="text-gray-700 text-sm">{{ member.designation }}</p>
                <div class="flex items-center justify-between mt-6 mb-2">
                  <div
                    class="flex items-center justify-between text-gray-600 space-x-6"
                  >
                    <div v-if="member.email !== null">
                      <a
                        :href="member.email"
                        aria-label="Email"
                        rel="noreferrer"
                      >
                        <svg
                          style="width: 30px; height: 30px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.07 13.88L13 19.94V22H15.06L21.12 15.93M22.7 13.58L21.42 12.3C21.32 12.19 21.18 12.13 21.04 12.13C20.89 12.14 20.75 12.19 20.65 12.3L19.65 13.3L21.7 15.3L22.7 14.3C22.89 14.1 22.89 13.78 22.7 13.58M11 18H4V8L12 13L20 8V10H22V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H11V18M20 6L12 11L4 6H20Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div v-if="member.twitter !== null">
                      <a
                        :href="member.twitter"
                        aria-label="Twitter"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          style="width: 30px; height: 30px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div v-if="member.linkedin !== null">
                      <a
                        :href="member.linkedin"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        target="_blank"
                      >
                        <svg
                          style="width: 30px; height: 30px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <n-link
                    class="bg-pink-500 px-2 py-1 rounded-lg uppercase font-semibold text-gray-100 shadow-xl text-sm tracking-wider"
                    to="/details"
                    >Details</n-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <Futta />
      </div>
    </div>
  </div>
</template>

<script>
import membersQuery from "~/apollo/queries/member/members";
export default {
  head() {
    return {
      title: "PSLC-20 Members",
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
      members: [],
      query: "",
      error: null,
      strapi_url: process.env.STRAPI_URL,
    };
  },
  apollo: {
    members: {
      prefetch: true,
      query: membersQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
};
</script>