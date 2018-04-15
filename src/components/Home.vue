<template>
  <div>
  <njeru-cyrus-header></njeru-cyrus-header>
  <njeru-cyrus-portfolio></njeru-cyrus-portfolio>
    <br><br>
  <njeru-cyrus-fact-file></njeru-cyrus-fact-file>
  <njeru-cyrus-testimonials></njeru-cyrus-testimonials>
  <njeru-cyrus-contact></njeru-cyrus-contact>
  <njeru-cyrus-footer></njeru-cyrus-footer>
  </div>
</template>
<script>
  import NjeruCyrusHeader from "./Header.vue";
  import NjeruCyrusPortfolio from "./Portfolio.vue";
  import NjeruCyrusFactFile from "./FactFile.vue";
  import NjeruCyrusTestimonials from "./Testimonials.vue";
  import NjeruCyrusContact from "./Contact.vue";
  import NjeruCyrusFooter from "./Footer.vue";
  export default {
    components: {
      NjeruCyrusFooter,
      NjeruCyrusContact,
      NjeruCyrusTestimonials,
      NjeruCyrusFactFile,
      NjeruCyrusPortfolio,
      NjeruCyrusHeader
    },

    name: 'NjeruCyrusHome'
  }
</script>
