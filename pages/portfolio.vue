<template>
  <div class="portfolio">
    <div class="container mx-auto px-8 lg:px-0">
      <div class="title-block mb-12">
        <h1 class="text-3xl text-dark-400 dark:text-white font-bold uppercase font-display">Portfolio</h1>
        <p class="text-light text-sm dark:text-grey leading-10">
          Over the last 5 years, I’ve had the privilege to work with a wide-variety of companies. Ranging from enterprise software companies, small business, and automation software companies.
        </p>
      </div>
      <div class="grid lg:grid-cols-2 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
        >
          <div class="mb-10">
            <img
              :src="require('@/assets/img/' + project.image)"
              :alt="project.title"
              class="shadow-md rounded-xl"
            />
            <a
              :href="project.url"
              class="bg-dark-300 hover:bg-primary text-white rounded-full text-sm py-4 w-48 block text-center font-display uppercase mx-auto -mt-16 relative z-40"
            >
              Visit {{ project.title }}
            </a>
          </div>
          <div
            class="p-6 rounded-2xl shadow-md"
            :style="'background-color:' + project.theme"
          >
            <div class="flex flex-row flex-wrap mb-2">
              <h4 class="text-white text-xl font-display font-bold uppercase">{{ project.title }}</h4>
              <h4 class="text-white text-md ml-auto my-auto text-sm">{{ project.tech }}</h4>
            </div>
            <p class="text-grey leading-8 text-sm">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @media (min-width: 768px) {
    .title-block {
      max-width: 740px;
    }
  }
</style>
<script>
export default {
  data() {
    return {
      projects: [
        {
          image: "alqen.png",
          theme: "#7b56f0",
          title: "Alqen.io",
          url: "https://alqen.io",
          tech: "Vue.js, Nuxt.js, Tailwind CSS",
          description:
            "Suite of bespoke cloud-based A.I automation tools that streamline business growth for many popular marketplaces.",
        },
        {
          image: "projectwifi.png",
          theme: "#feaa45",
          title: "Project WiFi",
          url: "https://projectwifi.io",
          tech: "Vue.js, Nuxt.js, Tailwind CSS",
          description:
            "A platform to manage Walmart and Amazon dropshipping stores through the use of fully automated software.",
        },
        {
          image: "spirit.png",
          theme: "#5856D6",
          title: "Spirit",
          url: "/",
          tech: "Electron, Vue.js, Nuxt.js, Tailwind CSS",
          description:
            "A suite of tools to assist in the process of checking out limited quantity goods through online marketplaces.",
        },
        {
          image: "andykong.png",
          theme: "#000000",
          title: "Andy Kong",
          url: "https://andytakong.netlify.app/",
          tech: "Vue.js",
          description:
            "A personal website for a 20 year old entrepreneur living in Los Angeles and running a start-up.",
        },
        {
          image: "marcello.png",
          theme: "#ff8f6b",
          title: "Marcello C.",
          url: "https://marcellocantu.com/",
          tech: "Vue.js",
          description:
            "A personal website for Marcello Cantu (29) who is an American Entrepreneur, and Business Leader.",
        },
        {
          image: "emilies.png",
          theme: "#34c2da",
          title: "Emile’s Amenities",
          url: "https://emilesamenities.com/",
          tech: "Vue.js, Bootstrap",
          description:
            "A team of professional contractors operating in the Tri-State area. Specializing in all contracting, cleaning and brokerage services. ",
        },
      ],
    };
  },
};
</script>