<template>
  <Layout>
    <ClientOnly>
      <div style="background: #000 !important">
        <b-navbar fixed toggleable="lg" type="dark" class="navbar-transparent">
          <b-navbar-brand class="d-inline-block d-md-none" href="/"
            >James Hunter Carter</b-navbar-brand
          >
          <b-navbar-brand class="d-none d-md-inline-block" href="/"
            >JHC</b-navbar-brand
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
                href="https://represent.io/jameshuntercarter"
                target="_blank"
                >Resume</b-nav-item
              >
              <b-nav-item
                href="https://represent.io/jameshuntercarter/click/email/31600"
                target="_blank"
              >
                <b-icon icon="envelope" aria-hidden="true"></b-icon>
              </b-nav-item>

              <b-nav-item
                href="https://twitter.com/popalchemist"
                target="_blank"
              >
                <b-icon icon="twitter" aria-hidden="true"></b-icon>
              </b-nav-item>
              <b-nav-item
                href="https://instagram.com/jameshuntercarter"
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
                  Hi, I'm Hunter.
                </h1>
                <h1
                  class="d-inline-block text-light intro intro-message w-100"
                  style="font-size: 350%; margin-top: 120px"
                >
                  I work in the
                  <span class="d-inline-block">dark arts.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        id="avatar"
        class="raised"
        src="https://avatars.githubusercontent.com/u/4305297?s=400&u=8022306c08796f8740c44f7668999d6d65944b6d&v=4"
        style="
          border: 6px solid #fff;
          margin-top: 45px;
          width: 100px;
          height: 100px;
          border-radius: 100px;
          z-index: 999 !important;
        "
      />

      <!-- Portfolio !-->

      <div
        id="clients"
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
          src="/logos.png"
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
                      >Editing</b-button
                    >
                    <b-button
                      @click="filterWork = 'marketing'"
                      v-bind:class="{ active: filterWork == 'marketing' }"
                      class="btn-light btn-outline-primary"
                      >Marketing</b-button
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
      <!-- Featured Projects !-->
      <div
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
            <div class="col-md-12 mb-3">
              <span
                class="badge badge-dark br-25 px-3 py-2 mb-3 raised meta-badge"
                >Self Development</span
              >
              <b-card
                no-body
                class="overflow-hidden border-0 raised w-100 project-card"
                onclick="window.open('https://www.dharmaworks.com', '_blank')"
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
                  >
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="DharmaWorks">
                      <b-card-text
                        >I’ve published a small collection of the most impactful
                        spiritual teachings I’ve discovered throughout my life.
                        Read in your browser or subscribe to get lessons daily
                        via email.</b-card-text
                      >
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <div class="col-md-12 mb-3">
              <span
                class="badge badge-dark br-25 px-3 py-2 mb-3 raised meta-badge"
                >Software Development</span
              >
              <b-card
                no-body
                class="overflow-hidden border-0 raised w-100 project-card"
                onclick="window.open('https://www.platformkit.com', '_blank')"
                style="cursor: pointer"
              >
                <b-row no-gutters>
                  <b-col
                    md="6"
                    style="
                      min-height: 300px;
                      background: url(https://www.platformkit.com/logos/touch-icon.png);
                      background-size: cover !important;
                      background-repeat: no-repeat;
                      background-size: 70% !important;
                      background-position: center !important;
                      display: block;
                    "
                  >
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="PlatformKit">
                      <b-card-text
                        >An open-source framework for selling e-commerce
                        products/services, content subscriptions, and software
                        subscripions. Built in Node.js and Vue.js</b-card-text
                      >
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <div class="col-md-12 mb-3">
              <span
                class="badge badge-dark br-25 px-3 py-2 mb-3 raised meta-badge"
                >Product Design</span
              >
              <b-card
                no-body
                class="overflow-hidden border-0 raised w-100 project-card"
                onclick="window.open('https://www.aquarianoutfitters.com', '_blank')"
                style="cursor: pointer"
              >
                <b-row no-gutters>
                  <b-col
                    md="6"
                    style="
                      min-height: 300px;
                      background: url(https://i.etsystatic.com/26946098/r/il/6d6fb2/2815675809/il_fullxfull.2815675809_pqfx.jpg);
                      background-repeat: no-repeat;
                      background-size: 70% !important;
                      background-position: center !important;
                      display: block;
                    "
                  >
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Aquarian Outfitters">
                      <b-card-text
                        >A clothing line for modern mystics. Featuring
                        pop-culture references, esoteric symbols, and sacred
                        geometry, in a modern, minimal style.</b-card-text
                      >
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </div>
        </div>
      </div>

      <div style="background: #000; height: 650px; display: block">
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
                      href="https://represent.io/jameshuntercarter/click/email/31600"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="envelope"></b-icon>
                    </a>
                    <a
                      href="https://twitter.com/popalchemist"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="twitter"></b-icon>
                    </a>
                    <a
                      href="https://instagram.com/jameshuntercarter"
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
        <div class="bg w-100 text-center d-block d-md-none">
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
                      href="https://represent.io/jameshuntercarter/click/email/31600"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="envelope"></b-icon>
                    </a>
                    <a
                      href="https://twitter.com/popalchemist"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="twitter"></b-icon>
                    </a>
                    <a
                      href="https://instagram.com/jameshuntercarter"
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
export default {
  metaInfo: {
    title: "Portfolio",
  },
  data() {
    return {
      modalVideo: "https://www.youtube.com/watch?v=HOwaypo3jC4",
      modalText:
        "Worked directly with Sacha Baron Cohen to create a 10-minute sizzle/trailer which was used to sell the film to Amazon.",
      modalTitle: "Borat: Subsequent Moviefilm",
      projects: [
        {
          id: "school",
          title: "School for Good and Evil",
          tags: ["all", "consulting", "editorial"],
          video: null,
          thumbnail:
            "https://movies-b26f.kxcdn.com/wp-content/uploads/2020/12/The-school-for-good-and-evil-screenshot-IMG_D6FA4EABBCB2-1-e1613860069355.jpeg",
          description:
            "Worked directly with director Paul Fieg & the team at Fiegco to create a sizzle reel for pitching the film to Netflix.",
        },
        {
          id: "borat",
          title: "Borat Subsequent Moviefilm",
          tags: ["all", "consulting", "editorial"],
          video: "https://www.youtube.com/watch?v=HOwaypo3jC4",
          thumbnail:
            "https://bloximages.chicago2.vip.townnews.com/azdailysun.com/content/tncms/assets/v3/editorial/e/e4/ee496247-dc3e-5545-83e8-0cd1ba93846d/5fc00d0387761.image.jpg?resize=1200%2C675",
          description:
            "Worked directly with Sacha Baron Cohen to create a 10-minute sizzle/trailer which was used to sell the film to Amazon.",
        },
        {
          id: "fear-street",
          title: "Fear Street - Consulting & Feature Editorial",
          tags: ["all", "consulting", "editorial"],
          video: null,
          thumbnail:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/R.L.-Stines-Fear-Street-Logo.jpg",
          description:
            "Worked directly with director Leigh Janiak & the Fear Street post team to create main titles, recaps, and trailers for all 3 films.",
        },

        {
          id: "pikachu-marketing",
          title: "Detective Pikachu - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/wmnkAOO6Qo4",
          thumbnail: "https://i.ytimg.com/vi/wmnkAOO6Qo4/maxresdefault.jpg",
          description:
            "Produced and edited this trailer, based on an idea from Ryan Reynolds. Legend says that he shed a single tear upon watching it.",
        },
        {
          id: "pikachu-consulting",
          title: "Detective Pikachu - Consulting",
          tags: ["all", "consulting", "editorial"],
          video: "/detective-pikachu-consulting.mp4",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf4.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/f0462446-3a47-48a3-b283-78d5dc39f3eb_rwc_584x319x2663x1501x2663.jpg?h=a17fdc294996b1566e90da5375387e5f",
          description:
            "Provided consultation on story, post-production, and marketing. Worked directly with director Rob Letterman & the team to build out the world of Detective Pikachu.",
        },
        {
          id: "pikachu-social",
          title: "Detective Pikachu - Social Media",
          tags: ["all", "marketing", "editorial", "social"],
          video: "https://www.youtube.com/embed/4RXdusySjsk",
          thumbnail: "https://i.ytimg.com/vi/4RXdusySjsk/maxresdefault.jpg",
          description:
            "Edited this social promo for Ryan Reynolds' social media accounts.",
        },
        {
          id: "walking-dead",
          title: "The Walking Dead - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/KowNrOoiwRU",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf3.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/eaf8625f-dcce-4860-99cd-bfaba14e6dda_rwc_0x22x1440x811x1440.png?h=f45befbc57df4c9833a5eba309726bf1",
          description:
            " Produced and edited this 5-minute extended Comic-Con trailer for season 9 of The Walking Dead. Featuring custom score by Bear McCreary.",
        },
        {
          id: "detective-pikachu-featurette",
          title: "Detective Pikachu - Marketing",
          tags: ["all", "marketing", "editorial", "social"],
          video: "https://www.youtube.com/embed/198gzllaumo",
          thumbnail:
            "https://s3.amazonaws.com/prod-media.gameinformer.com/styles/body_default/s3/2019/04/10/f9734cb2/squirtle.jpg",
          description:
            "Produced this 'behind-the-scenes' featurette for Detective Pikachu. Visuals and music produced specifically for this piece.",
        },
        {
          id: "fear-the-walking-dead",
          title: "Fear The Walking Dead - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/Ixdi8XdYHMQ",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf3.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/44d02f84-5a1b-4759-8aa1-7f1c735d0b33_rwc_0x87x800x451x800.jpeg?h=b22f2a14965994121c52571ccf78e3b3",
          description:
            "Produced and edited this trailer for season 4 of Fear The Walking Dead.",
        },
        {
          id: "fear-the-walking-dead",
          title: "Fear The Walking Dead - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/watch?v=JAACtzjy1VM",
          thumbnail:
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2018/07/Fear-The-Walking-Dead-4b-poster-1.jpg",
          description:
            "Produced and edited this trailer for Season 4B of Fear The Walking Dead.",
        },
        {
          id: "lego-batman",
          title: "Lego Batman - Marketing",
          tags: ["all", "marketing", "editorial", "social"],
          video: "https://www.youtube.com/embed/Ixdi8XdYHMQ",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf6.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/7fa0e97a-36b0-4df6-895c-9ed14cefaf65_rwc_0x0x1177x664x1177.png?h=cffd1ad89de34063c3d5056787e8fbaf",
          description:
            "Edited this teaser for The LEGO Batman Movie. Assembled from storyboards and previz/animatics. Animation was produced specifically for this teaser.",
        },
        {
          id: "trolls",
          title: "DreamWorks' Trolls - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/iUnRuQLYdTw",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf2.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/3c9b915c-b31f-4c72-a499-a98a220001f6_rwc_0x0x1915x1080x1915.jpg?h=3772253aacb9c7c3a716da4f203b11f8",
          description:
            " Edited this teaser for DreamWorks' Trolls. Animation and music were produced specifically for this teaser.",
        },

        {
          id: "lego-movie",
          title: "The LEGO Movie - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/lPnY2NjSjrg",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf1.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/ca16ec5e-a592-4625-87b0-3ec5342f248e_rwc_0x0x1177x664x1177.png?h=381d8ad84682e1eedcafc32a420f1e00",
          description: "Edited this teaser for The LEGO Movie.",
        },

        {
          id: "star-trek-beyond",
          title: "Star Trek Beyond - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/lDWIc4MGirE",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSqSLVlOSfqyQQiRoNPjJxyhrWvRXQq7ccQ&usqp=CAU",
          description:
            "Edited this teaser for Star Trek Beyond exhibiting in a special 3-screen format.",
        },
        {
          id: "mission-impossible",
          title: "Mission Impossible - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/UOvGtWiJC5k",
          thumbnail:
            "https://2.bp.blogspot.com/-qZd9XrPjFls/W2hhfZ5QzKI/AAAAAAAAFTs/JV3EE_UR-2E55Mg2mTXDqloofXPNDoh2gCLcBGAs/s1600/MI-GP.jpg",
          description:
            "Edited this TV spot for Mission Impossible Ghost Protocol.",
        },
        {
          id: "edge-of-tomorrow",
          title: "Edge of Tomorrow - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/watch?v=TnObnE7DT-E",
          thumbnail:
            "https://cyberdystopianmatrix.files.wordpress.com/2019/09/edge-of-tomorrow.jpg",
          description: "Edited this piece for Edge of Tomorrow.",
        },
        {
          id: "star-trek-into-darkness",
          title: "Star Trek Into Darkness - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/yhz4A5BCMAA",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEca40E4ygi0ftpy0zfd1c5jW0iMy6VkX2UI2K8YK0cJ2xYCH5YSykp3eeleO-iRhhz8&usqp=CAU",
          description: "Edited this trailer for Star Trek Into Darkness.",
        },
        {
          id: "cloud-atlas",
          title: "Cloud Atlas - Marketing",
          tags: ["all", "marketing", "editorial", "social"],
          video: "https://www.youtube.com/watch?v=qpsgYbcELMU",
          thumbnail:
            "https://biblioklept.files.wordpress.com/2013/04/cloud-atlas-poster.jpg",
          description:
            "Edited this behind-the-scenes featurette for the Wachowski's Cloud Atlas.",
        },
        {
          id: "jupiter-ascending",
          title: "Jupier Ascending - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/watch?v=THVFkk-sEus",
          thumbnail:
            "http://all-things-andy-gavin.com/wp-content/uploads/2015/02/Jupiter-Ascending.jpg",
          description:
            "Edited and produced this audiobook/video adaptation of It Works.",
        },
        {
          id: "pan",
          title: "Pan - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/watch?v=TQMqvG4t3Mo",
          thumbnail:
            "https://static.wikia.nocookie.net/logopedia/images/8/88/Peter-pan-2015-movie-title-logo.jpg/revision/latest?cb=20141218221651",
          description:
            "Edited and produced this audiobook/video adaptation of It Works.",
        },
        {
          id: "tintin",
          title: "TinTin - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/5nyCL2-sp3Q",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf5.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/6473ea25-cac0-4b3a-85f9-7b403dbf7e92_rwc_0x0x1177x664x1177.png?h=2c64fb46fb41670da7585de8c8db532c",
          description: " Edited this TV Spot for The Adventures of TinTin.",
        },
        {
          id: "narcos",
          title: "Narcos - Marketing",
          tags: ["all", "marketing", "editorial", "social"],
          video: "https://www.youtube.com/watch?v=Ybwt0S1gDYk",
          thumbnail:
            "https://3.bp.blogspot.com/-FgmIzIVVK9A/W13KU0EgGwI/AAAAAAAAU_E/7y8VLu8Ei3ASRZq1oh5BY6ktbNm_lcEfwCLcBGAs/s1600/Narcos.jpg",
          description: "Edited this TV Spot for Narcos Season 1.",
        },
        {
          id: "journey",
          title: "Journey 2 - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/watch?v=SpIuOYI9RB4",
          thumbnail:
            "https://i0.wp.com/www.heyuguys.com/images/2012/01/Journey-2-UK-Poster.jpg",
          description:
            "Edited this trailer for Journey 2 The Mysterious Island.",
        },
        {
          id: "wolfman",
          title: "Wolfman - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/watch?v=mmPfsrcT6OY",
          thumbnail:
            "https://s.ecrater.com/stores/60130/4ba70a15c369d_60130b.jpg",
          description: "Edited this Superbowl spot for The Wolfman.",
        },
        {
          id: "san-andreas",
          title: "San Andreas - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/Bz9e0PGSDeU",
          thumbnail:
            "https://iamyourtargetdemographic.files.wordpress.com/2015/06/san-andreas.jpg",
          description: "Edited this teaser for San Andreas.",
        },
        {
          id: "tron",
          title: "Tron Legacy - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/368swgLpHLs",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6VxAEKydw9u8uojhSH3kBcvnwf_S_BeMcw&usqp=CAU",
          description: "Edited this TV spot for Tron Legacy.",
        },
        {
          id: "nightmare",
          title: "A Nightmare on Elm Street - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/NVLagNq2G2A",
          thumbnail: "https://images4.alphacoders.com/274/274156.jpg",
          description: "Edited this TV spot for A Nightmare on Elm Street.",
        },
        {
          id: "limitless",
          title: "Limitless - Marketing",
          tags: ["all", "marketing", "editorial", "social"],
          video: "https://www.youtube.com/embed/Ne8YmpVVH4Q",
          thumbnail: "https://i.ytimg.com/vi/Ne8YmpVVH4Q/maxresdefault.jpg",
          description:
            "Edited this ad (originally for the 2011 Superbowl) starring Bradley Cooper.",
        },
         {
          id: "transformers-5",
          title: "Transformers 5 - Feature Editorial",
          tags: ["all", "editorial"],
          video: "https://youtu.be/4plK7mCobcY?t=82",
          thumbnail:
            "https://townsquare.media/site/442/files/2016/05/Transformers.jpg?w=980&q=75",
          description: "Provided additional editing for this scene from Transformers: The Last Knight.",
        },
        {
          id: "transformers-2",
          title: "Transformers 2 - Marketing",
          tags: ["all", "marketing", "editorial"],
          video: "https://www.youtube.com/embed/AP34-8Q4YXY",
          thumbnail:
            "https://pro2-bar-s3-cdn-cf6.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/768d62c5-8fe5-4e72-ae28-e639ce985986_rwc_0x0x1177x664x1177.png?h=680f71602126a41b9608dcc5442451b2",
          description: "Edited this TV spot for Transformers 2.",
        },
        
        {
          id: "platformkit-explainer",
          title: "PlatformKit - Explainer",
          tags: ["marketing", "editorial", "social", "original"],
          video: "https://vimeo.com/414917709",
          thumbnail: "https://www.platformkit.com/files/platformkit.jpg",
          description: "Edited this web ad for PlatformKit.",
        },
        {
          id: "platformkit-marketing",
          title: "PlatformKit - Explainer",
          tags: ["all", "marketing", "editorial", "social", "original"],
          video: "https://www.youtube.com/watch?v=4czLxjSJNY0",
          thumbnail: "/entrepreneurs.jpg",
          description: "Edited this web ad for PlatformKit.",
        },
        {
          id: "dharmaworks-hero",
          title: "The Hero Who Has No Fear",
          tags: ["social", "original"],
          video: "https://www.vimeo.com/521762762",
          thumbnail: "/hero-who-has-no-fear.jpg",
          description:
            "Edited and produced this video essay featuring narratation by Jean Shinoda Bolen from her 'Ring of Power' lecture.",
        },
        {
          id: "dharmaworks-it-works",
          title: "DharmaWorks - It Works",
          tags: ["all", "social", "original"],
          video: "https://www.vimeo.com/530078154",
          thumbnail: "https://i.vimeocdn.com/video/1097166542.jpg",
          description:
            "Edited and produced this audiobook/video adaptation of It Works.",
        },
        {
          id: "dharmaworks-meditation",
          title: "DharmaWorks - Meditation",
          tags: [ "social", "original"],
          video: "https://www.vimeo.com/452089938",
          thumbnail: "https://i.vimeocdn.com/video/947386307_236x133.jpg",
          description:
            "Edited this meditation.",
        },
        {
          id: "dharmaworks-promo",
          title: "DharmaWorks - Promo",
          tags: ["all",  "editorial", "social", "original"],
          video: "https://www.vimeo.com/446966638",
          thumbnail: "https://i.pinimg.com/originals/31/5b/b1/315bb19d42bbe42ed47bbd6008aa9412.jpg",
          description:
            "Edited this meditation.",
        },
      ],
      filterWork: "all",
      window: null,
      backgroundImages: [
        "https://images.unsplash.com/photo-1602292678572-16cb94ea0d88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1271&q=80", // leaf
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80", // movie theater
        "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80", // swirls
        "https://images.unsplash.com/photo-1470338229081-eb5980be28c9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80", // cameras
        "https://images.unsplash.com/photo-1519326931307-6003daea39f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2650&q=80", // iphone
        "https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80", // macbook
      ],
    };
  },
  async mounted() {},
  methods: {
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
.plyr {
  border-radius: 5px !important;
  overflow: hidden !important;
}
.plyr iframe,
.plyr video {
  transition: 0.2s ease !important;
}

.plyr.plyr--paused iframe,
.plyr.plyr--paused video {
  filter: blur(1rem);
  transition: 0s !important;
  opacity: 0.25;
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
