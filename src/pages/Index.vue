<template>
  <Layout>
    <div>
      <b-navbar fixed toggleable="lg" type="dark" class="navbar-transparent">
        <b-navbar-brand class="d-none d-md-inline-block" href="#">My Work:</b-navbar-brand>
        <b-navbar-brand class="d-inline-block d-md-none" href="#">James Hunter Carter</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="https://www.promofoundry.com" target="_blank">Marketing</b-nav-item>
            <b-nav-item href="https://www.platformkit.com" target="_blank">Software</b-nav-item>
            <b-nav-item href="https://www.dharmaworks.com" target="_blank">Coaching</b-nav-item>
            <b-nav-item href="https://www.aquarianoutfitters.com" target="_blank">Design</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://represent.io/jameshuntercarter" target="_blank">Resume</b-nav-item>
            <b-nav-item href="https://represent.io/jameshuntercarter/click/email/31600" target="_blank">E-Mail</b-nav-item>
            
            <b-nav-item href="https://github.com/platform-kit" target="_blank">
              <b-icon icon="github" aria-hidden="true"></b-icon>
            </b-nav-item>
            <b-nav-item href="https://twitter.com/popalchemist" target="_blank">
              <b-icon icon="twitter" aria-hidden="true"></b-icon>
            </b-nav-item>
            <b-nav-item href="https://instagram.com/jameshuntercarter" target="_blank">
              <b-icon icon="instagram" aria-hidden="true"></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <ClientOnly>
      <div style="background:#000;height:650px;display:block;">
        <video-bg
          :sources="['bg-vid.mp4']"
          img="https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          class="bg w-100 text-center"
          style="height:650pxdisplay:block;min-height:650px;max-height: 400px; height: 100vh; opacity:0.5;"
        ></video-bg>
      </div>
    </ClientOnly>
    <div class="container-fluid text-center" style="position:absolute;top:0px;left:0px;">
      <div class="row" style="padding-top:150px;">
        <div class="col-12 mx-auto">
          <div class="card bg-none border-0 justify-content-center">
            <div
              class="justify-content-center align-self-center"
              style="position:relative; z-index:999;"
            >
              <h1
                class="d-none d-md-inline-block"
                style="font-size:150%;margin-top:60px;position:absolute;top:-50px;left:0px; width:100%;text-align:center;opacity:1;color:rgb(255,255,255) !important;"
              >Hi, I'm James Hunter Carter.</h1>
              <h1
                class="d-inline-block text-light"
                style="font-size:350%;margin-top:90px;"
              >I WORK IN THE DARK ARTS.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      id="avatar"
      class="raised"
      src="https://avatars.githubusercontent.com/u/4305297?s=400&u=8022306c08796f8740c44f7668999d6d65944b6d&v=4"
      style="border:6px solid #fff;margin-top:15px;width:100px;height:100px;border-radius:100px;z-index:999 !important;"
    />

    <div class="container p-5" style="z-index:2222 !important;">
      <div class="row">
        <div class="col-md-6 mb-3">
          <span class="badge badge-dark br-25 px-3 py-2 mb-3 raised">Marketing</span>
          <b-card
            no-body
            class="overflow-hidden border-0 raised w-100"
            onclick="window.open('https://www.promofoundry.com', '_blank')"
            style="cursor:pointer;"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://www.promofoundry.com/images/pf-webclip.png"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="PromoFoundry">
                  <b-card-text>I provide consulting &amp; post-production services for entertainment &amp; tech companies (Netflix, Amazon, etc).</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>

        <div class="col-md-6 mb-3">
          <span class="badge badge-dark br-25 px-3 py-2 mb-3 raised">Self Development</span>
          <b-card
            no-body
            class="overflow-hidden border-0 raised w-100"
            onclick="window.open('https://www.dharmaworks.com', '_blank')"
            style="cursor:pointer;"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/163599789_475069440295036_2987837820087803364_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=dl_0cjxcKTsAX8oaMFY&ccb=7-4&oh=675760f71d8c9bdc800a3c10fd2777df&oe=60867BA1&_nc_sid=4f375e"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="DharmaWorks">
                  <b-card-text>I’ve published a small collection of the most impactful spiritual teachings I’ve discovered throughout my life. Read in your browser or subscribe to get lessons via email.</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>

        <div class="col-md-6 mb-3">
          <span class="badge badge-dark br-25 px-3 py-2 mb-3 raised">Software Development</span>
          <b-card
            no-body
            class="overflow-hidden border-0 raised w-100"
            onclick="window.open('https://www.platformkit.com', '_blank')"
            style="cursor:pointer;"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://www.platformkit.com/logos/touch-icon.png"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="PlatformKit">
                  <b-card-text>An open-source framework for selling e-commerce products/services, content subscriptions, and software subscripions. Built in Node.js and Vue.js</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>

        <div class="col-md-6 mb-3">
          <span class="badge badge-dark br-25 px-3 py-2 mb-3 raised">Design</span>
          <b-card
            no-body
            class="overflow-hidden border-0 raised w-100"
            onclick="window.open('https://www.aquarianoutfitters.com', '_blank')"
            style="cursor:pointer;"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://i.etsystatic.com/26946098/r/il/6d6fb2/2815675809/il_fullxfull.2815675809_pqfx.jpg"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Aquarian Outfitters">
                  <b-card-text>A clothing line for modern mystics.</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Portfolio"
  }
};
</script>

<style>
#avatar {
  position: absolute !important;
  left: calc(50% - 50px) !important;
  top: 345px !important;
}
@media (max-width: 991px) {
  #avatar {
    position: absolute !important;
    left: calc(50% - 50px) !important;
    top: 575px !important;
  }
}

.bg-none {
  background: none !important;
}

.raised {
  box-shadow: 5px 5px 10px rgba(50, 80, 100, 0.3);
}
.br-5 {
  border-radius: 5px;
}

.br-25 {
  border-radius: 25px;
}
.home-links a {
  margin-right: 1rem;
}

.navbar-transparent {
  background: rgba(0, 0, 0, 0) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  position: absolute;
  z-index: 999999 !important;
  width: 100%;
}


</style>
