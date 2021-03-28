<template>
  <Layout>
    <ClientOnly>
      <video-bg
        :sources="['bg-vid.mp4']"
        class="bg w-100 text-center"
        style="min-height:500px;max-height: 400px; height: 100vh;"
      >
        <div class="container-fluid">
          <div class="row" style="padding-top:150px;">
            <div class="col-12 mx-auto">
              <div class="card bg-none border-0 justify-content-center">
                <div
                  class="justify-content-center align-self-center"
                  style="position:relative; z-index:999;"
                >
                  <h1
                    class="d-inline-block"
                    style="font-size:150%;margin-top:60px;position:absolute;top:-50px;left:0px; width:100%;text-align:center;opacity:1;color:rgb(255,255,255) !important;"
                  >JAMES HUNTER CARTER</h1>
                  <h1
                    class="d-inline-block text-light"
                    style="font-size:350%;margin-top:60px;"
                  >I WORK IN THE DARK ARTS.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </video-bg>
    </ClientOnly>
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
            onclick="window.open('https://www.popculturealchemy.com', '_blank')"
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
                <b-card-body title="Pop Culture Alchemy">
                  <b-card-text>A clothing line for spiritual geeks.</b-card-text>
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
  top: 285px !important;
}
@media (max-width: 991px) {
  #avatar {
    position: absolute !important;
    left: calc(50% - 50px) !important;
    top: 425px !important;
  }
}

.bg::after {
  content: "";
  position: absolute;
  z-index: 0 !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 00, 0.85), rgba(0, 0, 0, 0));
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
</style>
