<template>
  <div class="container mx-auto px-8 lg:px-0">
    <div class="grid grid-cols-12 gap-y-6 gap-x-12">
      <div class="col-span-8">
        <h1 class="text-3xl text-dark-400 dark:text-white font-bold uppercase font-display">About Me</h1>
        <p class="text-light text-sm dark:text-grey leading-10">
          My background stems from my early years of front-end web development and includes experience developing software solutions to solve problems. I have a commitment to learning which has progressed into a freelance career path while keeping my academic focus in the forefront while working with a vast array of customers and working on other projects aimed at solidifying my competencies.
        </p>
      </div>
      <div class="col-span-4">
        <List
          name="Get in touch"
          :items="contact"
        />
        
      </div>
      <div class="col-span-8">
        <h1 class="text-2xl text-dark-400 dark:text-white font-bold uppercase font-display mb-8">Work Experience</h1>
        <div class="flex flex-col gap-8">
          <Job
            v-for="item in work"
            :job="item"
            :key="work.indexOf(item)"
          />
        </div>
      </div>
      <div class="col-span-4 flex flex-col gap-8">
        <List
          name="Technologies"
          :items="tech"
        />
        <List
          name="Hobbies"
          :items="hobbies"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
<script>
import Job from "@/components/about/Job";
import List from "@/components/about/List";
export default {
  components: {
    Job,
    List,
  },
  data() {
    return {
      tech: [
        "Javascript",
        "HTML5, CSS3, SASS",
        "Vue.js and Nuxt.js Frameworks",
        "Node.js",
        "Electron",
        "Adobe Photoshop & Illustator",
      ],
      hobbies: [
        "Wrestling, Gracie Jiu-Jitsu,  MMA",
        "Weightlifting/Crossfit",
        "Hiking and Cycling",
        "Piano",
        "Collecting Sneakers",
      ],
      contact: [
        'Email: me@ethansmith.us',
        'Phone: +1 (407) 274-8119',
        'Discord: nathe#0865'
      ],
      work: [
        {
          name: "Necton LLC - Founder",
          time: "December 2020 - Present",
          description:
            "Manage day-to-day operations of an online e-commerce store and software development firm. Utilize automation software to acquire limited quantity goods that are in high-demand.",
        },
        {
          name: "Alqen.io - Software Engineer",
          time: "August 2020 - Present",
          description:
            "Help develop and implement intuitave business ideas to improve efficiency of day-to-day operations. Work alongside a team of backend developers and strategic planners to develop user interfaces using the Vue.js framework used to manage online E-commerce stores.",
        },
        {
          name: "ProjectWiFi - Software Developer",
          time: "August 2019 - June 2021",
          description:
            "Worked along a team of Graphic Designers and backend developers to develop a Customer Resource Management (CRM) solution to manage and maintain Amazon seller stores.",
        },
        {
          name: "City of Orlando - Volunteer",
          time: "May 2019 - July 2019",
          description:
            "Participated in a volunteer program shadowing and working with information technology employees at the City of Orlando. Assisted in areas such as the installation of Cisco Networking Equipment and gained knowledge as it realtes to managing large network infrastructures.",
        },
        {
          name: "VerveDev - Lead Developer/Designer",
          time: "May 2017 - Jan 2019",
          description:
            "Primarily developed websites using HTML, PHP, SCSS, JavaScript and other web languages. Designed Websites using software such as Adobe Photoshop CC and Adobe Experience Design.",
        },
      ],
    };
  },
};
</script>