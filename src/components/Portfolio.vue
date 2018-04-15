<template>
<div class="content-block text-center" id="portfolio">
  <header class="block-heading cleafix">
    <h1>Latest Works</h1>
    <!-- <p>Take a look at some of my recent products</p> -->
  </header>

  <div class="isotope portfolio-items">
    <div class="element-item grid" v-for="project in projects">
      <div class="effect-zoe">
        <img class="img-responsive" alt="Portfolio" v-if="project.img_1" :src="project.img_1" height="300" width="450">
        <figcaption>
          <h3 class="hidden-xs">{{project.project_title}}</h3>
          <p class="icon-links">
            <a :href="`${project.project_url}`" target="_blank"><i class="fa fa-link"></i></a>
          </p>
        </figcaption>
      </div>
    </div>
  </div>

  <!-- isotope portfolio-items -->
  <a href="#" class="btn btn-lg btn-view" style="margin-top: 25px!important;" >
    <span>View All</span>
  </a>
</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "NjeruCyrusPortfolio",
    computed: {
      ...mapGetters({
        projects: 'getProjects'
      })

    },
    created(){
      this.$store.dispatch('fetchProjects')
    }
  }
</script>

<style scoped>
  .centered {
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    margin-top: 15px;
  }
</style>
