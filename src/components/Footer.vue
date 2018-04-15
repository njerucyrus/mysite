<template>
  <footer id="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="copyright">&copy; {{copyright}} Njeru Cyrus</div>
        </div>
        <div class="col-sm-6">
          <div class="designed-by">Designed By <a>Njeru Cyrus</a></div>
        </div>
      </div>
    </div>
  </footer>	<!-- site-footer -->
</template>
<script>
  export default {
    name : "NjeruCyrusFooter",

    computed: {
      copyright :() => { return new Date().getFullYear();}
    }
  }
</script>
