<template>
  <Layout>
    <ClientOnly>
      <div style="background: #000 !important">
        <b-navbar fixed toggleable="lg" type="dark" class="navbar-transparent">
          <b-navbar-brand v-if="identity != null && identity.fullName != null" class="d-inline-block d-md-none" href="/"
            >{{ identity.fullName}}</b-navbar-brand
          >
          <b-navbar-brand v-if="identity != null && identity.initials != null" class="d-none d-md-inline-block" href="/"
            >{{ identity.initials }}</b-navbar-brand
          >

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#featured-work">Featured Work</b-nav-item>
              <b-nav-item href="#featured-projects">Projects</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item
                v-if="links != null && links.resume != null"
                :href="links.resume"
                target="_blank"
                >Resume</b-nav-item
              >
              <b-nav-item
                v-if="links != null && links.email != null"
                :href="links.email"
                target="_blank"
              >
                <b-icon icon="envelope" aria-hidden="true"></b-icon>
              </b-nav-item>
              <b-nav-item
                v-if="links != null && links.twitter != null"
                :href="'https://twitter.com/' + links.twitter"
                target="_blank"
              >
                <b-icon icon="twitter" aria-hidden="true"></b-icon>
              </b-nav-item>
              <b-nav-item
                v-if="links != null && links.instagram != null"
                :href="'https://instagram.com/' + links.instagram"
                target="_blank"
              >
                <b-icon icon="instagram" aria-hidden="true"></b-icon>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <div
        class="bgImage"
        style="height: 650px; display: block"
        :style="{
          background: '#000',
          backgroundImage: 'url(' + randomBackground() + ') !important',
        }"
      ></div>

      <div
        class="container-fluid text-center"
        style="position: absolute; top: 0px; left: 0px"
      >
        <div class="row" style="padding-top: 150px">
          <div class="col-12 mx-auto">
            <div class="card bg-none border-0 justify-content-center">
              <div
                class="justify-content-center align-self-center"
                style="position: relative; z-index: 999"
              >
                <h1
                  class="intro intro-message"
                  style="
                    font-size: 150%;
                    margin-top: 90px;
                    position: absolute;
                    top: -50px;
                    left: 0px;
                    width: 100%;
                    text-align: center;
                    opacity: 1;
                    color: rgb(255, 255, 255) !important;
                  "
                >
                  Hi, I'm {{ identity.name }}.
                </h1>
                <h1
                  class="d-inline-block text-light intro intro-message w-100"
                  style="font-size: 350%; margin-top: 120px"
                >
                  <span v-if="hero != null && hero.headline != null" v-html="hero.headline">
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        v-if="identity != null && identity.avatar != null"
        id="avatar"
        class="raised"
        :src="identity.avatar"
        style="
          border: 6px solid #fff;
          margin-top: 45px;
          width: 100px;
          height: 100px;
          border-radius: 100px;
          z-index: 999 !important;
        "
      />

      <!-- Testimonials !-->

      <div
        id="testimonials"
        v-if="testimonials != null && testimonials.image != null"
        class="w-100 text-center pt-4 px-5 pb-5"
        style="
          border-top: 1px solid #111;
          background: #000;
          border-bottom: 1px solid rgba(0, 50, 150, 0.2);
          background-position: center;
          background-size: cover !important;
        "
      >
        <g-image
          :src="testimonials.image"
          style="width: 100%; max-width: 950px; margin: 80px 0px"
        />
      </div>

      <!-- Featured Work !-->

      <div
        id="featured-work"
        class="w-100 text-center pt-4 px-5 pb-5"
        style="
          background: none;
          border-bottom: 1px solid rgba(0, 50, 150, 0.2);
          background-position: center;
          background-size: cover !important;
          min-height: 500px;
        "
      >
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-12 mx-auto">
              <div class="card bg-none border-0 justify-content-center">
                <div
                  class="justify-content-center align-self-center"
                  style="position: relative; z-index: 999"
                >
                  <p
                    style="
                      margin-bottom: 25px;
                      background: #fff;
                      color: #000;
                      font-size: 33px;
                    "
                    class="badge badge-pill border-0 px-3 py-2 intro"
                  >
                    - Featured Work -
                  </p>
                  <br />
                  <div class="br-25 toggles">
                    <b-button
                      @click="filterWork = 'consulting'"
                      v-bind:class="{ active: filterWork == 'consulting' }"
                      class="btn-light btn-outline-primary"
                      >Consulting</b-button
                    >
                    <b-button
                      @click="filterWork = 'editorial'"
                      v-bind:class="{ active: filterWork == 'editorial' }"
                      class="btn-light btn-outline-primary"
                      >Film Editorial</b-button
                    >
                    <b-button
                      @click="filterWork = 'marketing'"
                      v-bind:class="{ active: filterWork == 'marketing' }"
                      class="btn-light btn-outline-primary"
                      >Commercial Editorial</b-button
                    >
                    <b-button
                      @click="filterWork = 'original'"
                      v-bind:class="{ active: filterWork == 'original' }"
                      class="btn-light btn-outline-primary"
                      >Original Content</b-button
                    >
                    <b-button
                      @click="filterWork = 'all'"
                      v-bind:class="{ active: filterWork == 'all' }"
                      class="btn-light btn-outline-primary"
                      >Show All</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modals -->

          <!-- Dynamic Modal -->
          <b-modal hide-footer id="modal-dynamic" size="xl" :title="modalTitle">
            <video-embed
              v-if="modalVideo != null && modalVideo.includes('https://')"
              :params="{ autoplay: 1, modestbranding: 1, controls:1, rel: 0  }"
              :src="modalVideo"
            ></video-embed>
            <video style="max-width:100%;"
            autoplay
              v-else-if="modalVideo != null && modalVideo.includes('.mp4')"                           
            >
              <source type="video/mp4"  :src="modalVideo">
            </video>
            <img v-else-if="modalImage != null" :src="modalImage" style="max-width:100%;border-radius:4px;"/>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">{{ modalText }}</p>
          </b-modal>
   
          <!-- Featured Projects -->

          <div class="row ml-2 mb-5 mx-0" id="projects">
            <!-- Project -->
            <div
              v-for="project, index in projects"
              :key="project.id"              
              class="col-md-4 mb-3"
              v-bind:class="{ 'd-none': project.tags == null || !project.tags.includes(filterWork) }"
            >
              <div
                @click="showProject(index)"
                class="portfolio-item"
                :style="{
                  background: '#000',
                  backgroundImage: 'url(' + project.thumbnail + ') !important',
                }"
              ></div>
            </div>
          </div>            
          </div>
        </div>
      </div>
      <!-- Highlights !-->
      <div
        v-if="highlights != null"
        class="w-100"
        id="featured-projects"
        style="
          background: linear-gradient(
            rgb(255, 255, 255) 200px,
            rgb(97 204 255 / 17%) 2000px
          );
        "
      >
        <div class="container p-5" style="z-index: 2222 !important">
          <div class="row align-items-center py-5">
            <div class="col-12 mx-auto">
              <div class="card bg-none border-0 justify-content-center">
                <div
                  class="justify-content-center align-self-center"
                  style="position: relative; z-index: 999"
                >
                  <p
                    style="
                      margin-bottom: 25px;
                      background: #fff;
                      color: #000;
                      font-size: 33px;
                    "
                    class="badge badge-pill border-0 px-3 py-2 intro"
                  >
                    - Projects -
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-3" v-for="highlight in highlights" v-bind:key="highlight.id">
              <span
                class="badge badge-dark br-25 px-3 py-2 mb-3 raised meta-badge"
                >{{ highlight.label }}</span
              >
              <b-card
                no-body
                class="overflow-hidden border-0 raised w-100 project-card"
                 @click="openWindow(highlight.link)"
                style="cursor: pointer"
              >
                <b-row no-gutters>
                  <b-col
                    md="6"
                    style="
                      min-height: 300px;
                      background: url(https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/163599789_475069440295036_2987837820087803364_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=dl_0cjxcKTsAX8oaMFY&ccb=7-4&oh=675760f71d8c9bdc800a3c10fd2777df&oe=60867BA1&_nc_sid=4f375e);
                      background-size: cover !important;
                      background-position: center !important;
                      display: block;
                    "
                    :style="{          
          backgroundImage: 'url(' + highlight.image + ') !important',
        }"
                  >
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="DharmaWorks">
                      <b-card-text
                        >{{ highlight.description }}</b-card-text
                      >
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>

      
          </div>
        </div>
      </div>

      <div style="background: #000; height: 650px; display: block" v-if="links != null">
        <video-bg
          :sources="['bg-vid.mp4']"
          class="bg w-100 text-center d-none d-md-block"
          style="height:650pxdisplay:block;min-height:650px;max-height: 400px; height: 100vh; "
        >
          <div
            class="container-fluid text-center"
            style="0px;z-index:99999 !important;width:100%;height:650px;"
          >
            <div class="row" style="padding-top: 150px">
              <div class="col-12 mx-auto">
                <div class="card bg-none border-0 justify-content-center">
                  <div
                    class="w-100 justify-content-center align-self-center contact-section"
                    style="position: relative; z-index: 999"
                  >
                    <h1
                      class="w-100 intro intro-message"
                      style="
                        font-size: 250%;
                        margin-top: 100px;
                        width: 100%;
                        text-align: center;
                        opacity: 1;
                        color: rgb(255, 255, 255) !important;
                      "
                    >
                      - Contact -
                    </h1>
                    <a
                    v-if="links.email != null"
                      :href="links.email"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="envelope"></b-icon>
                    </a>
                    <a
                      v-if="links.twitter != null"
                      :href="'https://www.twitter.com/' + links.twitter"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="twitter"></b-icon>
                    </a>
                    <a
                      hv-if="links.instagram != null"
                      :href="'https://www.instagram.com/' + links.instagram"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="instagram"></b-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </video-bg>
        <div class="bg w-100 text-center d-block d-md-none" >
          <div class="container-fluid text-center">
            <div class="row" style="padding-top: 150px">
              <div class="col-12 mx-auto">
                <div class="card bg-none border-0 justify-content-center">
                  <div
                    class="w-100 justify-content-center align-self-center contact-section"
                    style="position: relative; z-index: 999"
                  >
                    <h1
                      class="w-100 intro intro-message"
                      style="
                        font-size: 250%;
                        margin-top: 90px !important;
                        width: 100%;
                        text-align: center;
                        opacity: 1;
                        color: rgb(255, 255, 255) !important;
                      "
                    >
                      - Contact -
                    </h1>
                    <a
                    v-if="links.email != null"
                      :href="links.email"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="envelope"></b-icon>
                    </a>
                    <a
                      v-if="links.twitter != null"
                      :href="'https://www.twitter.com/' + links.twitter"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="twitter"></b-icon>
                    </a>
                    <a
                      hv-if="links.instagram != null"
                      :href="'https://www.instagram.com/' + links.instagram"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="instagram"></b-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </Layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fetched: false,
      json: {},
      identity: {},
      hero: {
        headline: "Hello, world.",
        heading: "This is my portfolio.",
      },
      testimonials: {
        img: "/logos.png",
      },
      projects: [],
      highlights: null,
      links: {},
      modalVideo: "",
      modalText: "",
      modalTitle: "",
      modalImage: "",
      filterWork: "all",
      backgroundImages: [""],
      window: null,
    };
  },
  async mounted() {
    this.getData();
    this.window = window;
  },
  methods: {
    getData() {
      axios.get(process.env.GRIDSOME_JSON_URL || "/data.json").then((response) => this.updateData(response));
    },
    updateData(data) {
      //console.log(data.data);
      this.json = data.data;
      if (data.data != null) {
        if (data.data.identity != null) {
          this.identity = data.data.identity;
        }
        if (data.data.hero != null) {
          this.hero = data.data.hero;
        }
        if (data.data.testimonials != null) {
          this.testimonials = data.data.testimonials;
        }
        if (data.data.projects != null) {
          this.projects = data.data.projects;
        }
        if (data.data.highlights != null) {
          this.highlights = data.data.highlights;
        }
        if (data.data.backgroundImages != null) {
          this.backgroundImages = data.data.backgroundImages;
        }
        if (data.data.links != null) {
          this.links = data.data.links;
        }
      }
    },
    showProject(id) {
      this.modalVideo = this.projects[id].video;
      this.modalText = this.projects[id].description;
      this.modalTitle = this.projects[id].title;
      this.modalImage = this.projects[id].thumbnail;
      this.$bvModal.show("modal-dynamic");
    },
    randomBackground() {
      var items = this.backgroundImages;
      return items[Math.floor(Math.random() * items.length)];
    },
    openWindow: function (url) {
      window.open(url, "_blank");
    },
    getFullName() {
      if (this.fetched == false) {
        this.getData();
        this.fetched = true;
      }
      return this.identity.fullName;
    },
  },
  metaInfo() {
    return {
      title: this.getFullName() || null,
      meta: [
        {
          name: "description",
          content: "Personal Portfolio of " + this.getFullName(),
        },
      ],
      // etc...
    };
  },
};
</script>

<style>
.meta-badge {
  position: absolute !important;
  top: 20px !important;
  left: 0px !important;
  z-index: 99 !important;
  background: #eafef3 !important;
  color: rgb(46, 120, 139);
}

video,
iframe {
  border-radius: 4px !important;
  overflow: none !important;
}

#featured-projects p.card-text {
  font-size: 25px !important;
  opacity: 0.85;
}

#featured-projects .card img {
  max-height: 350px !important;
  max-width: 350px !important;
}

@media (min-width: 991px) {
  #featured-projects .card .col-md-6:last-of-type {
    width: 800px !important;
    max-width: 800px !important;
    text-align: center !important;
    line-height: 280%;
  }
  #featured-projects p.card-text {
    padding: 15px;
  }
  #featured-projects .card-title {
    margin-left: 15px;
    margin-top: 15px;
  }
}

.portfolio-item,
.project-card {
  transition: 0.3s;
}

.portfolio-item:hover,
.project-card:hover {
  opacity: 0.8;
}
.portfolio-item {
  background-position: center !important;
  background-size: cover !important;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0px 5px 10px rgba(0, 50, 150, 0.2),
    5px 5px 20px rgba(0, 50, 150, 0.1);
  cursor: pointer !important;
}
.intro {
  font-family: "Cabin" !important;
}

@media (max-width: 991px) {
  .intro-message {
    margin-top: 150px !important;
  }
}

#projects .col-md-4 div {
  height: 180px;
  width: 320px;
}
@media (max-width: 991px) {
  #projects .col-md-4 {
    text-align: center;
  }
  #projects .col-md-4 div {
    height: 190px;
    width: 300px;
    margin-left: -5px;
    display: inline-block !important;
  }
}

@media (max-width: 375px) {
  #projects .col-md-4 div {
    margin-left: -48px !important;
  }
}

.bgImage::after {
  content: "";
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 650px !important;
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
}
.bgImage {
  background-size: cover !important;
  background-position: center !important;
}

#avatar {
  position: absolute !important;
  left: calc(50% - 50px) !important;
  top: 350px !important;
}
@media (max-width: 991px) {
  #avatar {
    position: absolute !important;
    left: calc(50% - 50px) !important;
    top: 555px !important;
  }
}

.contact-section a {
  border-radius: 50px;
  padding: 13px 10px;
  width: 50px;
  height: 50px;
}

.bg-none {
  background: none !important;
}

.toggles .btn {
  background: none !important;
  border-color: transparent !important;
  color: #333 !important;
}
.toggles .btn:hover {
  background: rgba(0, 50, 150, 0.05) !important;
  color: #333 !important;
}
.toggles .btn.active {
  background: rgba(0, 50, 150, 0.1) !important;
  color: rgba(0, 50, 150, 0.8) !important;
  border-color: transparent !important;
}

.raised {
  box-shadow: 0px 5px 10px rgba(0, 50, 150, 0.2),
    5px 5px 20px rgba(0, 50, 150, 0.1);
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

.br-25,
.br-25 .btn {
  border-radius: 25px !important;
}

.br-25 .btn {
  margin: 3px;
  padding: 3px 12px;
}
</style>
