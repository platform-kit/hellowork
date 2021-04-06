<template>
  <Layout>
    <ClientOnly>
      <div style="background:#000 !important;">
        <b-navbar fixed toggleable="lg" type="dark" class="navbar-transparent">
          <b-navbar-brand class="d-inline-block d-md-none" href="/">James Hunter Carter</b-navbar-brand>
          <b-navbar-brand class="d-none d-md-inline-block" href="/">JHC</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#featured-work">Featured Work</b-nav-item>
              <b-nav-item href="#featured-projects">Projects</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="https://represent.io/jameshuntercarter" target="_blank">Resume</b-nav-item>
              <b-nav-item
                href="https://represent.io/jameshuntercarter/click/email/31600"
                target="_blank"
              >
                <b-icon icon="envelope" aria-hidden="true"></b-icon>
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

      <div
        class="bgImage"
        style="height:650px;display:block;"
        :style="{background: '#000', backgroundImage: 'url(' + randomBackground() + ') !important'}"
      ></div>

      <div class="container-fluid text-center" style="position:absolute;top:0px;left:0px;">
        <div class="row" style="padding-top:150px;">
          <div class="col-12 mx-auto">
            <div class="card bg-none border-0 justify-content-center">
              <div
                class="justify-content-center align-self-center"
                style="position:relative; z-index:999;"
              >
                <h1
                  class="intro intro-message"
                  style="font-size:150%;margin-top:90px;position:absolute;top:-50px;left:0px; width:100%;text-align:center;opacity:1;color:rgb(255,255,255) !important;"
                >Hi, I'm Hunter.</h1>
                <h1
                  class="d-inline-block text-light intro intro-message w-100"
                  style="font-size:350%;margin-top:120px;"
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
        style="border:6px solid #fff;margin-top:45px;width:100px;height:100px;border-radius:100px;z-index:999 !important;"
      />

      <!-- Portfolio !-->

      <div
        id="clients"
        class="w-100 text-center pt-4 px-5 pb-5"
        style="border-top:1px solid #111;background:#000;border-bottom:1px solid rgba(0,50,150,0.2); background-position:center; background-size:cover !important;"
      >
        <g-image src="/logos.png" style="width:100%;max-width:950px;margin:80px 0px;" />
      </div>

      <!-- Featured Work !-->

      <div
        id="featured-work"
        class="w-100 text-center pt-4 px-5 pb-5"
        style="background:none;border-bottom:1px solid rgba(0,50,150,0.2); background-position:center; background-size:cover !important;min-height:500px;"
      >
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-12 mx-auto">
              <div class="card bg-none border-0 justify-content-center">
                <div
                  class="justify-content-center align-self-center"
                  style="position:relative; z-index:999;"
                >
                  <p
                    style="margin-bottom:25px;background:#fff;color:#000;font-size:33px;"
                    class="badge badge-pill border-0 px-3 py-2 intro"
                  >- Featured Work -</p>
                  <br />
                  <div class="br-25 toggles">
                    <b-button
                      @click="filterWork = 'consulting' "
                      v-bind:class="{ active: filterWork == 'consulting' }"
                      class="btn-light btn-outline-primary"
                    >Consulting</b-button>
                    <b-button
                      @click="filterWork = 'editorial'"
                      v-bind:class="{ active: filterWork == 'editorial' }"
                      class="btn-light btn-outline-primary"
                    >Editing</b-button>
                    <b-button
                      @click="filterWork = 'marketing'"
                      v-bind:class="{ active: filterWork == 'marketing' }"
                      class="btn-light btn-outline-primary"
                    >Marketing</b-button>
                    <b-button
                      @click="filterWork = 'social'"
                      v-bind:class="{ active: filterWork == 'social' }"
                      class="btn-light btn-outline-primary"
                    >Social Media</b-button>
                    <b-button
                      @click="filterWork = 'all'"
                      v-bind:class="{ active: filterWork == 'all' }"
                      class="btn-light btn-outline-primary"
                    >Show All</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modals -->

          <!-- Borat Modal -->
          <b-modal hide-footer id="modal-borat" size="xl" title="Borat Subsequent Moviefilm">
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/watch?v=HOwaypo3jC4"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p
              class="mb-3"
            >Worked directly with Sacha Baron Cohen to create a 10-minute sizzle/trailer which was used to sell the film to Amazon.</p>
          </b-modal>

          <!-- School for Good and Evil Consulting Modal -->
          <b-modal
            hide-footer
            id="modal-school-for-good-and-evil"
            size="xl"
            title="School for Good &amp; Evil: Editorial &amp; Consulting"
          >
            <!-- video element -->
            <img
              src="https://movies.mxdwn.com/wp-content/uploads/2020/05/the-school-of-good-and-evil.jpg"
              style="width:100%;border-radius:4px;"
            />

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p
              class="mb-3"
            >Worked directly with director Paul Fieg &amp; the team at Fiegco to create a sizzle reel for pitching the film to Netflix.</p>
            <modal-footer></modal-footer>
          </b-modal>

          <!-- Pikachu Consulting Modal -->
          <b-modal
            hide-footer
            id="modal-detective-pikachu-consulting"
            size="xl"
            title="Detective Pikachu: Consulting"
          >
            <video controls style="width:100%;max-width:100%;display:block;">
              <source src="/detective-pikachu-consulting.mp4" type="video/mp4" />
            </video>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Provided consultation on story, post-production, and marketing. Worked directly with director Rob Letterman &amp; the team to build out the world of
              <i>Pokémon Detective Pikachu</i>.
            </p>
            <modal-footer></modal-footer>
          </b-modal>

          <!-- Fear Street Consulting Modal -->
          <b-modal
            hide-footer
            id="modal-fear-street-consulting"
            size="xl"
            title="Fear Street: Editorial &amp; Consulting"
          >
            <!-- video element -->
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/R.L.-Stines-Fear-Street-Logo.jpg"
              style="width:100%;border-radius:4px;"
            />

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p
              class="mb-3"
            >Worked directly with director Leigh Janiak &amp; the Fear Street post team to create main titles, recaps, and trailers for all 3 films in the trilogy.</p>
            <modal-footer></modal-footer>
          </b-modal>

          <!-- Pikachu Marketing Modal -->
          <b-modal
            hide-footer
            id="modal-detective-pikachu-marketing"
            size="xl"
            title="Detective Pikachu - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/wmnkAOO6Qo4"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p
              class="mb-3"
            >Produced and edited this trailer, based on an idea from Ryan Reynolds &amp; George Dewey of Maximum Effort.</p>
          </b-modal>

          <!-- Pikachu Social Modal -->
          <b-modal
            hide-footer
            id="modal-detective-pikachu-social"
            size="xl"
            title="Detective Pikachu - Social"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/4RXdusySjsk"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited this social promo for Ryan Reynolds' social media accounts.</p>
          </b-modal>

          <!-- Walking Dead Marketing Modal -->
          <b-modal
            hide-footer
            id="modal-walking-dead-marketing"
            size="xl"
            title="The Walking Dead - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/KowNrOoiwRU"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Produced and edited this 5-minute extended Comic-Con trailer for season 9 of
              <i>The Walking Dead</i>. Featuring custom score by Bear McCreary.
            </p>
          </b-modal>

          <!-- Lego Batman Marketing Modal -->
          <b-modal
            hide-footer
            id="modal-lego-batman-marketing"
            size="xl"
            title="LEGO Batman - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/aBJyp2LFHgk"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Edited this teaser for
              <i>The LEGO Batman Movie</i>.
              <br />Assembled from storyboards and previz/animatics. All shots were produced specifically for this teaser.
            </p>
          </b-modal>

          <!-- Fear The Walking Dead Marketing Modal -->
          <b-modal
            hide-footer
            id="modal-fear-the-walking-dead-marketing"
            size="xl"
            title="The Walking Dead - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/Ixdi8XdYHMQ"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Produced and edited this trailer for season 4A of
              <i>Fear The Walking Dead</i>.
            </p>
          </b-modal>

          <!-- Trolls Marketing Modal -->
          <b-modal hide-footer id="modal-trolls-marketing" size="xl" title="Trolls - Marketing">
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/iUnRuQLYdTw"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Edited this teaser for
              <i>DreamWorks' Trolls</i>.
              <br />Animation and music were produced specifically for this teaser.
            </p>
          </b-modal>

          <!-- Star Trek Beyond Modal -->
          <b-modal
            hide-footer
            id="modal-star-trek-beyond"
            size="xl"
            title="San Andreas - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/lDWIc4MGirE"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Edited this teaser for
              <i>Star Trek Beyond</i> exhibiting in the special 3-screen "Barco Escape" format.
            </p>
          </b-modal>

          <!-- Star Trek Into Darkness Modal -->
          <b-modal
            hide-footer
            id="modal-star-trek-into-darkness"
            size="xl"
            title="San Andreas - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/yhz4A5BCMAA"></video-embed>
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Edited this trailer for
              <i>Star Trek Into Darkness</i>.
            </p>
          </b-modal>

          <!-- San Andreas Modal -->
          <b-modal
            hide-footer
            id="modal-san-andreas-marketing"
            size="xl"
            title="San Andreas - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/Bz9e0PGSDeU"></video-embed>
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Edited this teaser for
              <i>San Andreas</i>.
            </p>
          </b-modal>

          <!-- Trolls Marketing Modal -->
          <b-modal
            hide-footer
            id="modal-lego-movie-marketing"
            size="xl"
            title="The LEGO Movie - Marketing"
          >
            <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/lPnY2NjSjrg"></video-embed>
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Edited this teaser for
              <i>The LEGO Movie</i>.
            </p>
          </b-modal>

          <!-- PlatformKit Social Modal -->
          <b-modal
            hide-footer
            id="modal-platformkit-social"
            size="xl"
            title="PlatformKit - Explainer"
          >
            <video-embed src="https://vimeo.com/414917709"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited this motion-graphic promo for PlatformKit.</p>
          </b-modal>

          <!-- PlatformKit Marketing Modal -->
          <b-modal
            hide-footer
            id="modal-platformkit-marketing"
            size="xl"
            title="PlatformKit - Promo"
          >
            <video-embed src="https://www.youtube.com/watch?v=4czLxjSJNY0"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited and produced this ad for PlatformKit. Narration via Voices.com</p>
          </b-modal>

          <!-- DharmaWorks Hero Modal -->
          <b-modal
            hide-footer
            id="modal-dharmaworks-hero"
            size="xl"
            title="DharmaWorks - Video Essay"
          >
            <video-embed src="https://www.vimeo.com/521762762"></video-embed>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p
              class="mb-3"
            >Edited &amp; produced this video essay about the Patriarchy's favorite kind of hero. Narrated by Jean Shinoda Bolen.</p>
          </b-modal>

          <!-- DharmaWorks It Works Modal -->
          <b-modal
            hide-footer
            id="modal-dharmaworks-it-works"
            size="xl"
            title="DharmaWorks - Audiobook"
          >
            <video-embed src="https://www.vimeo.com/530078154"></video-embed>
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Edited &amp; produced this video/audio-book adaptation of
              <i>It Works</i>.
            </p>
          </b-modal>

          <!-- DharmaWorks Meditation Modal -->
          <b-modal
            hide-footer
            id="modal-dharmaworks-meditation"
            size="xl"
            title="DharmaWorks - Meditation"
          >
            <video-embed src="https://www.vimeo.com/452089938"></video-embed>
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p
              class="mb-3"
            >Meditation for activating the "third eye" chakra. Narrated by Jocelyn Daher. Music via Musicvine.com</p>
          </b-modal>

          <!-- Limitless Modal -->
          <b-modal hide-footer id="modal-limitless" size="xl" title="Limitless - Viral Ad">
            <!-- vimeo iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
            <video-embed src="https://www.youtube.com/watch?v=Ne8YmpVVH4Q"></video-embed>
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">
              Produced and edited this ad (originally for the 2011 Superbowl) for 2011's
              <i>Limitless</i>, starring Bradley Cooper.
            </p>
          </b-modal>

          <!-- Nightmare Modal -->
          <b-modal
            hide-footer
            id="modal-nightmare"
            size="xl"
            title="Nightmare on Elm Street - TV Spot"
          >
            <video-embed src="https://www.youtube.com/watch?v=NVLagNq2G2A"></video-embed>
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited this TV spot for A Nightmare on Elm Street (2010).</p>
          </b-modal>

          <!-- Tron Modal -->
          <b-modal hide-footer id="modal-tron" size="xl" title="Tron Legacy - TV Spot">
            <video-embed src="https://www.youtube.com/watch?v=368swgLpHLs"></video-embed>                       
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited this TV spot for Tron Legacy.</p>
          </b-modal>

          <!-- TinTin Modal -->
          <b-modal hide-footer id="modal-tintin" size="xl" title="Adventures of TinTin - TV Spot">
            <video-embed src="https://www.youtube.com/watch?v=5nyCL2-sp3Q"></video-embed>                       
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited this TV spot for The Adventures of TinTin.</p>
          </b-modal>

          <!-- Mission Modal -->
          <b-modal hide-footer id="modal-mission" size="xl" title="Mission Impossible - TV Spot">
            <video-embed src="https://www.youtube.com/watch?v=UOvGtWiJC5k"></video-embed>                        
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited this TV spot for Mission Impossible Ghost Protocol.</p>
          </b-modal>

          <!-- Marianne Modal -->
          <b-modal hide-footer id="modal-marianne" size="xl" title="Limitless - Viral Ad">
            <video-embed src="https://www.youtube.com/watch?v=UnYcLt1Vh6Y"></video-embed>                        
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Produced and edited this ad for Marianne Williamson.</p>
          </b-modal>

          <!-- Transformers Modal -->
          <b-modal hide-footer id="modal-transformers" size="xl" title="Limitless - Viral Ad">
            <!-- vimeo iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
            <video-embed src="https://www.youtube.com/watch?v=AP34-8Q4YXY"></video-embed>                                    
            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">Edited this TV Spot for Transformers 2: Revenge of the Fallen.</p>
          </b-modal>

          <!-- Featured Projects -->

          <div class="row ml-2 mb-5 mx-0" id="projects">
            <!-- Borat -->
            <div
              class="col-md-4 mb-3"
              v-show="filterWork == 'consulting' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                @click="$bvModal.show('modal-borat')"
                class="portfolio-item"
                style="background:url(https://bloximages.chicago2.vip.townnews.com/azdailysun.com/content/tncms/assets/v3/editorial/e/e4/ee496247-dc3e-5545-83e8-0cd1ba93846d/5fc00d0387761.image.jpg?resize=1200%2C675);"
              ></div>
            </div>

            <!-- School for Good and Evil -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-school-for-good-and-evil')"
              v-show="filterWork == 'consulting' ||filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://movies.mxdwn.com/wp-content/uploads/2020/05/the-school-of-good-and-evil.jpg); "
              ></div>
            </div>

            <!-- Fear Street -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-fear-street-consulting')"
              v-show="filterWork == 'consulting' ||filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/R.L.-Stines-Fear-Street-Logo.jpg); background-position:30% 0%;"
              ></div>
            </div>

            <!-- Detective Pikachu - Teaser -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-detective-pikachu-marketing')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'social' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://i.ytimg.com/vi/wmnkAOO6Qo4/maxresdefault.jpg);"
              ></div>
            </div>

            <!-- Detective Pikachu - Constulting -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-detective-pikachu-consulting')"
              v-show="filterWork == 'consulting' || filterWork == 'editorial'  || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf4.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/f0462446-3a47-48a3-b283-78d5dc39f3eb_rwc_584x319x2663x1501x2663.jpg?h=a17fdc294996b1566e90da5375387e5f);"
              ></div>
            </div>

            <!-- Detective Pikachu - Social -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-detective-pikachu-social')"
              v-show="filterWork == 'marketing' ||  filterWork == 'editorial' || filterWork == 'social' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://i.ytimg.com/vi/4RXdusySjsk/maxresdefault.jpg);"
              ></div>
            </div>

            <!-- The Walking Dead -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-walking-dead-marketing')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf3.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/eaf8625f-dcce-4860-99cd-bfaba14e6dda_rwc_0x22x1440x811x1440.png?h=f45befbc57df4c9833a5eba309726bf1); "
              ></div>
            </div>

            <!-- Mission: Impossible -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-mission')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/12c097fc-e86b-42b3-b6fe-5847b1e8b927_rwc_0x53x1920x1082x1920.jpg?h=aadad9437ac4692c968f56d762755415); "
              ></div>
            </div>

            <!-- Fear The Walking Dead -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-fear-the-walking-dead-marketing')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf3.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/44d02f84-5a1b-4759-8aa1-7f1c735d0b33_rwc_0x87x800x451x800.jpeg?h=b22f2a14965994121c52571ccf78e3b3); "
              ></div>
            </div>

            <!-- LEGO Batman -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-lego-batman-marketing')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf6.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/7fa0e97a-36b0-4df6-895c-9ed14cefaf65_rwc_0x0x1177x664x1177.png?h=cffd1ad89de34063c3d5056787e8fbaf); "
              ></div>
            </div>

            <!-- Trolls -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-trolls-marketing')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf2.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/3c9b915c-b31f-4c72-a499-a98a220001f6_rwc_0x0x1915x1080x1915.jpg?h=3772253aacb9c7c3a716da4f203b11f8); "
              ></div>
            </div>

            <!-- LEGO Movie -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-lego-movie-marketing')"
              v-show="filterWork == 'marketing' ||  filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf1.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/ca16ec5e-a592-4625-87b0-3ec5342f248e_rwc_0x0x1177x664x1177.png?h=381d8ad84682e1eedcafc32a420f1e00); "
              ></div>
            </div>

            <!-- Star Trek Beyond -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-star-trek-beyond')"
              v-show="filterWork == 'marketing' ||  filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSqSLVlOSfqyQQiRoNPjJxyhrWvRXQq7ccQ&usqp=CAU); "
              ></div>
            </div>

            <!-- Star Trek Into Darkness -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-star-trek-into-darkness')"
              v-show="filterWork == 'marketing' ||  filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEca40E4ygi0ftpy0zfd1c5jW0iMy6VkX2UI2K8YK0cJ2xYCH5YSykp3eeleO-iRhhz8&usqp=CAU); "
              ></div>
            </div>

            <!-- San Andreas -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-san-andreas-marketing')"
              v-show="filterWork == 'marketing' ||  filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://iamyourtargetdemographic.files.wordpress.com/2015/06/san-andreas.jpg); background-position:0px -20px !important;"
              ></div>
            </div>

            <!-- TinTin -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-tintin')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf5.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/6473ea25-cac0-4b3a-85f9-7b403dbf7e92_rwc_0x0x1177x664x1177.png?h=2c64fb46fb41670da7585de8c8db532c);"
              ></div>
            </div>

            <!-- PlatformKit - Social -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-platformkit-social')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'social' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(https://www.platformkit.com/files/platformkit.jpg); "
              ></div>
            </div>

            <!-- Transformers -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-transformers')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background:url(https://pro2-bar-s3-cdn-cf6.myportfolio.com/dabe2fd9-9ff4-4456-80d8-758c0e1b5c37/768d62c5-8fe5-4e72-ae28-e639ce985986_rwc_0x0x1177x664x1177.png?h=680f71602126a41b9608dcc5442451b2); "
              ></div>
            </div>

            <!-- PlatformKit - Marketing -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-platformkit-marketing')"
              v-show="filterWork == 'marketing' || filterWork == 'editorial' || filterWork == 'social' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(/entrepreneurs.jpg); "
              ></div>
            </div>

            <!-- DharmaWorks - It Works -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-dharmaworks-it-works')"
              v-show="filterWork == 'editorial' ||  filterWork == 'social' ||  filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(https://i.vimeocdn.com/video/1097166542.jpg); "
              ></div>
            </div>

            <!-- DharmaWorks - The Hero Who Has No Fear -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-dharmaworks-hero')"
              v-show="filterWork == 'editorial' ||  filterWork == 'social' ||  filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(/hero-who-has-no-fear.jpg); "
              ></div>
            </div>

            <!-- Nightmare on Elm Street - Marketing -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-nightmare')"
              v-show="filterWork == 'editing' || filterWork == 'marketing' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(https://images4.alphacoders.com/274/274156.jpg); "
              ></div>
            </div>

            <!-- DharmaWorks - Meditation -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-dharmaworks-meditation')"
              v-show=" filterWork == 'social' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(/third-eye-meditation.jpg); "
              ></div>
            </div>

            <!-- Tron Legacy - Marketing -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-tron')"
              v-show="filterWork == 'editing' || filterWork == 'marketing' || filterWork == 'all'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6VxAEKydw9u8uojhSH3kBcvnwf_S_BeMcw&usqp=CAU); "
              ></div>
            </div>

            <!-- Marianne 2020 - 1776 -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-marianne')"
              v-show="filterWork == 'social'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(/1776.jpg); "
              ></div>
            </div>

            <!-- Limitless -->
            <div
              class="col-md-4 mb-3"
              @click="$bvModal.show('modal-limitless')"
              v-show="filterWork == 'marketing' || filterWork == 'social'"
            >
              <div
                class="portfolio-item"
                style="background-position:center !important;background:url(https://i.ytimg.com/vi/Ne8YmpVVH4Q/maxresdefault.jpg); "
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Featured Projects !-->
      <div
        class="w-100"
        id="featured-projects"
        style="background:linear-gradient(rgb(255, 255, 255) 200px, rgb(97 204 255 / 17%) 2000px);"
      >
        <div class="container p-5" style="z-index:2222 !important;">
          <div class="row align-items-center py-5">
            <div class="col-12 mx-auto">
              <div class="card bg-none border-0 justify-content-center">
                <div
                  class="justify-content-center align-self-center"
                  style="position:relative; z-index:999;"
                >
                  <p
                    style="margin-bottom:25px;background:#fff;color:#000;font-size:33px;"
                    class="badge badge-pill border-0 px-3 py-2 intro"
                  >- Projects -</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-3">
              <span class="badge badge-dark br-25 px-3 py-2 mb-3 raised meta-badge">Self Development</span>
              <b-card
                no-body
                class="overflow-hidden border-0 raised w-100"
                onclick="window.open('https://www.dharmaworks.com', '_blank')"
                style="cursor:pointer;"
              >
                <b-row no-gutters>
                  <b-col md="6" style="min-height:300px;background:url(https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/163599789_475069440295036_2987837820087803364_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=dl_0cjxcKTsAX8oaMFY&ccb=7-4&oh=675760f71d8c9bdc800a3c10fd2777df&oe=60867BA1&_nc_sid=4f375e);background-size:cover !important;background-position:center !important;display:block;">
                    
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="DharmaWorks">
                      <b-card-text>I’ve published a small collection of the most impactful spiritual teachings I’ve discovered throughout my life. Read in your browser or subscribe to get lessons daily via email.</b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <div class="col-md-12 mb-3">
              <span class="badge badge-dark br-25 px-3 py-2 mb-3 raised meta-badge">Software Development</span>
              <b-card
                no-body
                class="overflow-hidden border-0 raised w-100"
                onclick="window.open('https://www.platformkit.com', '_blank')"
                style="cursor:pointer;"
              >
                <b-row no-gutters>
                  <b-col md="6" style="min-height:300px;background:url(https://www.platformkit.com/logos/touch-icon.png);background-size:cover !important;background-repeat:no-repeat;background-size:70% !important;background-position:center !important;display:block;">
                    
                    
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="PlatformKit">
                      <b-card-text>An open-source framework for selling e-commerce products/services, content subscriptions, and software subscripions. Built in Node.js and Vue.js</b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <div class="col-md-12 mb-3">
              <span class="badge badge-dark br-25 px-3 py-2 mb-3 raised meta-badge">Product Design</span>
              <b-card
                no-body
                class="overflow-hidden border-0 raised w-100"
                onclick="window.open('https://www.aquarianoutfitters.com', '_blank')"
                style="cursor:pointer;"
              >
                <b-row no-gutters>
                  <b-col md="6" style="min-height:300px;background:url(https://i.etsystatic.com/26946098/r/il/6d6fb2/2815675809/il_fullxfull.2815675809_pqfx.jpg);background-repeat:no-repeat;background-size:70% !important;background-position:center !important;display:block;">
                    
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Aquarian Outfitters">
                      <b-card-text>A clothing line for modern mystics. Featuring pop-culture references, esoteric symbols, and sacred geometry, in a modern, minimal style.</b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </div>
        </div>
      </div>

      <div style="background:#000;height:650px;display:block;">
        <video-bg
          :sources="['bg-vid.mp4']"
          class="bg w-100 text-center d-none d-md-block"
          style="height:650pxdisplay:block;min-height:650px;max-height: 400px; height: 100vh; "
        >
          <div
            class="container-fluid text-center"
            style="0px;z-index:99999 !important;width:100%;height:650px;"
          >
            <div class="row" style="padding-top:150px;">
              <div class="col-12 mx-auto">
                <div class="card bg-none border-0 justify-content-center">
                  <div
                    class="w-100 justify-content-center align-self-center contact-section"
                    style="position:relative; z-index:999;"
                  >
                    <h1
                      class="w-100 intro intro-message"
                      style="font-size:250%;margin-top:100px; width:100%;text-align:center;opacity:1;color:rgb(255,255,255) !important;"
                    >- Contact -</h1>
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
            <div class="row" style="padding-top:150px;">
              <div class="col-12 mx-auto">
                <div class="card bg-none border-0 justify-content-center">
                  <div
                    class="w-100 justify-content-center align-self-center contact-section"
                    style="position:relative; z-index:999;"
                  >
                    <h1
                      class="w-100 intro intro-message"
                      style="font-size:250%;margin-top:90px !important; width:100%;text-align:center;opacity:1;color:rgb(255,255,255) !important;"
                    >- Contact -</h1>
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
    title: "Portfolio"
  },
  data() {
    return {
      filterWork: "all",
      window: null,
      backgroundImages: [
        "https://images.unsplash.com/photo-1602292678572-16cb94ea0d88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1271&q=80", // leaf
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80", // movie theater
        // "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80", // skull
        "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80", // swirls
        "https://images.unsplash.com/photo-1470338229081-eb5980be28c9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80", // cameras
        "https://images.unsplash.com/photo-1519326931307-6003daea39f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2650&q=80", // iphone
        "https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80" // macbook
      ]
    };
  },
  async mounted() {},
  methods: {
    randomBackground() {
      var items = this.backgroundImages;
      return items[Math.floor(Math.random() * items.length)];
    }
  }
};
</script>

<style>

.meta-badge {
  position:absolute !important;
  top:20px !important;
  left:0px !important;    
  z-index:99 !important;
  background: #eafef3 !important;
  color:rgb(46, 120, 139); 
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
  text-align:center;
}
  #projects .col-md-4 div {
    height: 190px;
    width: 300px;    
    margin-left:-5px;
    display:inline-block !important;
  }
}

@media (max-width: 375px) {
 
  #projects .col-md-4 div { 
    margin-left:-48px !important; 
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
