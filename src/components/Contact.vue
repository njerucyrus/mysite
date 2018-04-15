<template>
  <div class="content-block" id="contact">
    <div class="overlay-3">
      <header class="block-heading cleafix text-center">
        <h1>Contact</h1>
        <!-- <p>Feel Free to Contact</p> -->
      </header>
      <div class="block-content text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-6 wow animated fadeInLeft">
              <form class="contact-form">
                <input type="text" v-model="name" name="name" placeholder="Name" required>
                <input type="email" v-model="email" name="email" placeholder="Email" required>
                <textarea rows="5" v-model="message" name="message" placeholder="Say Something..." required></textarea>
                <input type="submit" value="Submit" v-on:click="sendMessage">
              </form>
            </div>
            <div class="col-md-6 wow animated fadeInRight">
              <div class="row">
                <div class="col-md-12">
                  <div class="contact-info">
                    <div class="clearfix">
                      <div class="rotated-icon">
                        <div class="sqaure-nebir"></div>
                        <i class="fa fa-map-marker"></i>
                      </div>
                      <p><strong> Address:</strong> Nairobi Kenya.
                      </p>
                    </div>
                    <div class="clearfix">
                      <div class="rotated-icon">
                        <div class="sqaure-nebir"></div>
                        <i class="fa fa-mobile"></i>
                      </div>
                      <p><strong> Mobile No:</strong> +254703191981</p>
                    </div>
                    <div class="clearfix">
                      <div class="rotated-icon">
                        <div class="sqaure-nebir"></div>
                        <i class="fa fa-envelope-o"></i>
                      </div>
                      <p>
                        <strong> Email:</strong> njerucyrus5@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <ul class="social-box">
                  <li><a class="facebook-icon" href="https://www.facebook.com/njeru.cyrus.5" target="_blank"><i
                    class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter-icon" href="https://twitter.com/cyrus_njeru" target="_blank"><i
                    class="fa fa-twitter"></i></a></li>
                  <li><a class="g-plus-icon" href="https://plus.google.com/103393334766942846836" target="_blank"><i
                    class="fa fa-google-plus"></i></a></li>
                  <li><a class="linkedin-icon" href="https://www.linkedin.com/in/njeru-cyrus-654678a7"
                         target="_blank"><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>  <!-- block-content -->
    </div>  <!-- overlay-3 -->
  </div>  <!-- content-block -->

</template>

<script>
  import api from './../store/config'

  export default {
    name: "NjeruCyrusContact",
    data() {
      return {
        name: '',
        email: '',
        message: '',
        errors: [],
        loading: false,
      }
    },
    methods: {
      sendMessage(e){
        e.preventDefault()
        let data = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        console.log(data)
        api.post(`/api/contact/`, data)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
