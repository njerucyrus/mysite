<template>
  <div>
    <div id="services" class="content-block">
      <div id="numbers" class="parallax">
        <div class="overlay">
          <!-- title -->
          <div class="container-fluid numbers-title">
            <div class="container">
              <div class="row block-heading">
                <h1>Some of My Skills</h1>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <!-- number list -->
            <ul>
              <li v-for="skill in skills" class="chip">{{skill.skill_name}}</li>

            </ul>
          </div><!-- container-fluid end -->
        </div><!-- overlay end -->
      </div>
    </div>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "NjeruCyrusFactFile",

    computed: {
      ...mapGetters({
        skills: 'getSkills'
      })

    },
    created(){
      this.$store.dispatch('fetchSkills')
    }
  }
</script>
<style scoped>
  .chip {
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #f1f1f1;
    color:#000;
    margin:5px;

  }
</style>
