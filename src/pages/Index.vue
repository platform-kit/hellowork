<template>
  <Layout>
    <ClientOnly>
      <b-modal id="modal-uploadImage" size="xl" title="Upload Image" style="z-index:999 !important;">         
        <file-pond 
        allow-multiple="true" 
        max-files="1"         
        allowImageCrop="true"
        imageCropAspectRatio="1:1"
        accepted-file-types="image/jpeg, image/png"
        v-on:addfile="handleFileProcess()"
        :files="files"
        ref="pond"
        />
        <template #modal-footer>
          <div class="w-100">            
            <b-button
              variant="outline-danger"
              size="sm"
              class="float-left"
              @click="show=false"
            >
              Close
            </b-button>
                      
            <b-button
              variant="outline-primary"
              size="sm"
              class="float-right mr-1"   
              :disabled="imageUploaded() == false || password == null"
              @click="insertPostImage()">
              Add Image
            </b-button>
            <b-input-group prepend="Password" class="mb-2 mt-3" style="max-width:150px;max-height:33px;float:right;position:absolute;right:120px;bottom:8px;" >
                  <template #prepend>
                    <b-input-group-text style="max-height:33px;" >
                      <b-icon icon="lock" aria-hidden="true"></b-icon>
                    </b-input-group-text>
                  </template>
                  <b-form-input type="password" @input="submitted = false" style="max-height:33px;" v-model="password" ref="focusThis"></b-form-input>
                </b-input-group>    
          </div>
        </template>
      </b-modal>
      <b-modal hide-footer id="modal-generatedPostImage" title="Your Image" style="z-index:9999999 !important">
        <img v-if="postEditor.generatedPostImage != null" id="generatedPostImage" :src="postEditor.generatedPostImage" class="w-100" style="display:inline !important;"/>                           
        <b-aspect v-else id="postImage" class="d-flex"  aspect="1:1" style="display:inline-block;border-radius:4px;background:rgba(0,50,150,0.1);color:#fff;padding:25px;text-align:center;display:flex !important">
          <b-icon style="height:50px;width:50px;position:absolute;top:calc(50% - 50px);left:calc(50% - 25px)" icon="arrow-clockwise" class="text-primary" animation="spin" font-scale="1"></b-icon>
        </b-aspect>
        <br>
        <p v-if="postEditor.generatedPostImage != null" class="mt-4 w-100 text-center">You can save this image.</p>
      </b-modal>      
      <b-modal hide-header-close no-close-on-esc no-close-on-backdrop id="modal-sort-projects" title="Sort Projects" style="z-index:999">
        <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <b-button style="float:right;" size="sm" variant="outline-primary" @click="close(); changesMade = true;">
            Save
          </b-button>
          <h5>Sort Projects</h5>
        </template>
        <ul class="list-group" >                   
            <draggable v-model="projects" group="people" @start="drag=true" @end="drag=false">
              <li class="list-group-item" v-for="project in projects" v-bind:key="project.id">
              {{ project.title }} 
              <b-icon icon="arrows-move"  style="float:right;margin-top:4px;" font-scale="1"></b-icon>
            </li>
            </draggable>
        </ul>
          <template #modal-footer>
            <div class="w-100"  style="padding:10px 10px 0px 10px !important;">           
              <b-button
                variant="primary"
                autocomplete="off"                
                class="float-right"
                @click="$bvModal.hide('modal-sort-projects');changesMade = true;"
              >
                   <b-icon icon="nut" v-if="submitted == true" class="p-1 mr-2" animation="spin" font-scale="1"></b-icon>Submit
              </b-button>
            </div>
          </template>
      </b-modal>
      <b-modal hide-header-close no-close-on-esc no-close-on-backdrop id="modal-sort-highlights" title="Sort Highlighted Links" style="z-index:999">
         <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <b-button style="float:right;" size="sm" variant="outline-primary" @click="close(); changesMade = true;">
            Save
          </b-button>
          <h5>Sort Highlights</h5>
        </template>
        <ul class="list-group" >
            
            <draggable v-model="highlights" group="people" @start="drag=true" @end="drag=false">
              <li class="list-group-item" v-for="project in highlights" v-bind:key="project.id">
              {{ project.title }} 
              <b-icon icon="arrows-move"  style="float:right;margin-top:4px;" font-scale="1"></b-icon>
            </li>
            </draggable>
        </ul>
          <template #modal-footer>
            <div class="w-100"  style="padding:10px 10px 0px 10px !important;">           
              <b-button
                variant="primary"
                autocomplete="off"                
                class="float-right"
                @click="$bvModal.hide('modal-sort-highlights');changesMade = true;"
              >
                   <b-icon icon="nut" v-if="submitted == true" class="p-1 mr-2" animation="spin" font-scale="1"></b-icon>Submit
              </b-button>
            </div>
          </template>
      </b-modal>
      <b-modal  hide-header-close  @shown="focusMyElement" id="modal-password" title="Enter your password." style="z-index:999">

              <span class="text-danger" v-if="message != null">{{ message }}</span>
                <b-input-group prepend="Password" class="mb-2 mt-3">
                  <template #prepend>
                    <b-input-group-text >
                      <b-icon icon="lock" aria-hidden="true"></b-icon>
                    </b-input-group-text>
                  </template>
                  <b-form-input type="password" @input="submitted = false" v-model="password" ref="focusThis"></b-form-input>
                </b-input-group>


          <template #modal-footer>
            <div class="w-100"  style="padding:10px 10px 0px 10px !important;">
              <p class="float-left">            
                <b-button
                variant="danger"
                
                class="float-right"
                @click="$bvModal.hide('modal-password');"
              >
                Cancel
              </b-button>
              </p> 
              <b-button
                variant="primary"
                autocomplete="off"
                :disabled="password == null"
                class="float-right"
                @click="publish(); submitted = true"
              >
                   <b-icon icon="nut" v-if="submitted == true" class="p-1 mr-2" animation="spin" font-scale="1"></b-icon>Submit
              </b-button>
            </div>
          </template>
      </b-modal>
      <b-modal  hide-header-close  @shown="focusMyElement" id="image-editor" title="Edit Image" style="z-index:999">

          <div v-if="imageEditor.newUrl != null && imageEditor.newUrl != ''" class="imageSquareLarge" v-bind:style="{ backgroundImage: 'url(' + imageEditor.newUrl + ')' }" ></div>          
          <div v-else class="imageSquareLarge" v-bind:style="{ backgroundImage: 'url(' + imageEditor.oldUrl + ')' }" ></div>
          
              
                <b-input-group prepend="URL" class="mb-2 mt-3">

              <b-form-input v-model="imageEditor.newUrl" ref="focusThis"></b-form-input>
              </b-input-group>


          <template #modal-footer>
            <div class="w-100"  style="padding:10px 10px 0px 10px !important;">
              <p class="float-left">            
                <b-button
                variant="danger"
                
                class="float-right"
                @click="$bvModal.hide('image-editor');imageEditor.newUrl = null;"
              >
                Cancel
              </b-button>
              </p> 
              <b-button
                variant="primary"
                
                class="float-right"
                @click="$bvModal.hide('image-editor'); imageEditor.newUrl = null;"
              >
                Save
              </b-button>
            </div>
          </template>
      </b-modal>
      <b-modal  hide-header-close  @shown="focusMyElement" id="project-editor" title="Edit Project" style="z-index:999">

          <div v-if="projectEditor.project.thumbnail != null && projectEditor.project.thumbnail != ''" class="imageSquareLarge" v-bind:style="{ backgroundImage: 'url(' + projectEditor.project.thumbnail + ')' }" ></div>          
          <div v-else class="imageSquareLarge" v-bind:style="{ backgroundImage: 'url(' + projectEditor.project.thumbnail + ')' }" ></div>
          
              
                <b-input-group prepend="Title" class="mb-2 mt-3">
                  <b-form-input v-model="projectEditor.project.title" ref="focusThis"></b-form-input>
                </b-input-group>

                <b-input-group prepend="Image URL" class="mb-2 mt-3">
                  <b-form-input v-model="projectEditor.project.thumbnail" ></b-form-input>
                </b-input-group>

                <b-input-group prepend="Video URL" class="mb-2 mt-3">
                  <b-form-input v-model="projectEditor.project.video" ></b-form-input>
                </b-input-group>

                <b-form-textarea v-model="projectEditor.project.description" ></b-form-textarea>


          <template #modal-footer>
            <div class="w-100"  style="padding:10px 10px 0px 10px !important;">
              <p class="float-left">            
                <b-button
                variant="danger"
                
                class="float-right"
                @click="$bvModal.hide('project-editor');"
              >
                Cancel
              </b-button>
              </p> 
              <b-button
                variant="primary"
                
                class="float-right"
                @click="saveProject();"
              >
                Save
              </b-button>
            </div>
          </template>
      </b-modal>
      <b-modal  hide-header-close  @shown="focusMyElement" id="link-editor" title="Edit Link" style="z-index:999">

          <div v-if="linkEditor.link.thumbnail != null && linkEditor.link.thumbnail != ''" class="imageSquareLarge" v-bind:style="{ backgroundImage: 'url(' + linkEditor.link.thumbnail + ')' }" ></div>          
          <div v-else class="imageSquareLarge" v-bind:style="{ backgroundImage: 'url(' + linkEditor.link.image + ')' }" ></div>        
              
                <b-input-group prepend="Title" class="mb-2 mt-3">
                  <b-form-input v-model="linkEditor.link.title" ref="focusThis"></b-form-input>
                </b-input-group>

                 <b-input-group prepend="Label" class="mb-2 mt-3">
                  <b-form-input v-model="linkEditor.link.label" ref="focusThis"></b-form-input>
                </b-input-group>

                <b-input-group prepend="Image URL" class="mb-2 mt-3">
                  <b-form-input v-model="linkEditor.link.image" ></b-form-input>
                </b-input-group>

                 <b-input-group prepend="Link URL" class="mb-2 mt-3">
                  <b-form-input v-model="linkEditor.link.link" ></b-form-input>
                </b-input-group>

                <b-form-textarea v-model="linkEditor.link.description" ></b-form-textarea>

          <template #modal-footer>
            <div class="w-100"  style="padding:10px 10px 0px 10px !important;">
              <p class="float-left">            
                <b-button
                variant="danger"
                
                class="float-right"
                @click="$bvModal.hide('link-editor');"
              >
                Cancel
              </b-button>
              </p> 
              <b-button
                variant="primary"
                
                class="float-right"
                @click="saveLink();"
              >
                Save
              </b-button>
            </div>
          </template>
      </b-modal>
      <div class="w-100 h-100" style="height:100%;background:#000;display:block !important;min-height:100vh !important;"  v-if="identity.name == null">
      <div
              
        class="justify-content-center align-self-center"
        style="position: absolute;top:calc(50% - 100px);left:calc(50% - 50px);height:100px;width:100px;font-size:150%; color:#fff; z-index: 9999999999"
      >
        <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
        Loading...
      </div>
      </div>
      <div v-else>
        <b-sidebar id="newpostSidebar" ref="newpostSidebar" width="483px"  right shadow style="z-index:9999;">          

           <div v-b-toggle:newpostSidebar  @click="postEditor.rendering = true;savePost();" class="btn btn-light text-primary btn-sm" style="position:absolute;top:8px;right:15px;background:rgba(0,50,150,0.075)" >
            <b-icon icon="eye" font-scale="1"  aria-hidden="true"></b-icon>
          </div>
          
          <div class="px-3 py-2" >
            <h5 class="m-0 mb-1 p-0">New Post</h5>          
                <b-input-group prepend="Image" class="mb-1" >
                  <b-form-input v-model="postEditor.image" placeholder="Paste an image url."></b-form-input>
                  <b-input-group-append>                                        
                      <div class="btn btn-primary" style="border-radius:0px 4px 4px 0px !important;" @click="$bvModal.show('modal-uploadImage');$root.$emit('bv::toggle::collapse', 'newpostSidebar')"> 
                        Upload <b-icon style="padding-top:3px;" icon="cloud-upload" aria-hidden="true"></b-icon>
                        </div>
                  </b-input-group-append>
                </b-input-group>
                
                <b-form-textarea style="min-height:85px;" class="mb-1" v-model="postEditor.text" placeholder="Enter some text." />
                
            
            <div  id="postImageContainer" v-bind:class="{'scaled': postEditor.rendering == true}" style="" v-bind:style="{ backgroundImage: 'url(' + postEditor.image + ')' }">
              <b-aspect id="postImage" class="d-flex"  aspect="1:1" v-bind:style="{ backgroundImage: 'url(' + postEditor.overlay + ')' }" style="color:#fff;padding:25px;text-align:center;display:flex !important">
                <div id="postText" class="my-auto mx-auto" v-html="postEditor.text">{{ postEditor.text }}</div>

              </b-aspect>              
            </div>

            <div  id="postImagePreview" v-bind:class="{'scaled': postEditor.rendering == true}" style="" v-bind:style="{ backgroundImage: 'url(' + postEditor.image + ')' }">
              <b-aspect id="postImage" class="d-flex"  aspect="1:1" v-bind:style="{ backgroundImage: 'url(' + postEditor.overlay + ')' }" style="color:#fff;padding:25px;text-align:center;display:flex !important">
                <div id="postText" class="my-auto mx-auto" v-html="postEditor.text">{{ postEditor.text}}</div>

              </b-aspect>              
            </div>
            
            <div style="margin-top:0px;display:inline-block !important;width:100%;">
              <span @click="postEditor.mode='backgroundImages'" class="border badge badge-pill" v-bind:class="{'badge-dark': postEditor.mode == 'backgroundImages', 'border': postEditor.mode == 'overlays' }"                           >Background Images</span><span class="badge">via <a href="https://unsplash.com" target="_blank">Unsplash</a></span> 
              <span v-bind:class="{'badge-dark': postEditor.mode == 'overlays', 'border': postEditor.mode == 'backgroundImages' }"  style="float:right;margin-top:5px;" class="badge border badge-pill" @click="postEditor.mode = 'overlays'">Overlays</span>
              
              <div v-if="postEditor.mode == 'backgroundImages'">
                <b-input-group prepend="Search" class="mt-2 mb-2" >
                    <b-form-input @input="searchForImages()" v-model="postEditor.imageSearchTerms" placeholder="Search for images."></b-form-input>
                </b-input-group>
                <div v-if="postEditor.unsplashImages != null">
                  <div @click="postEditor.image = result.urls.full; postEditor.selectedUnsplash = result" class="imageSquare" v-for="result in postEditor.unsplashImages.results" v-bind:key="result"  v-bind:style="{ backgroundImage: 'url(' + result.urls.thumb + ')' }" ></div>
                </div>              
                <div v-if="postEditor.selectedUnsplash != null" class="border br-5 p-3">Image by <a :href="postEditor.selectedUnsplash.user.links.html">{{ postEditor.selectedUnsplash.user.name }}</a></div>
              </div>
              <div v-if="postEditor.mode == 'overlays'" class="pt-2">
                <div @click="postEditor.overlay = option" class="imageSquare" v-for="option in postOverlays" v-bind:key="option"  v-bind:style="{ backgroundImage: 'url(' + option + ')' }" ></div>
              </div>
            </div>  
          </div>
        </b-sidebar>
      <b-sidebar id="sidebar" ref="sidebar"  right shadow style="width:50%;z-index:9999999999999999999999999 !important; min-width:450px !important;">
      <div class="px-3 py-2">
        <h5 class="m-0 mb-1 p-0">Content Editor</h5>
        <span class="badge badge-pill badge-dark mb-3 mt-2">
          Hero Section
        </span>
        <div class="w-100">
            <b-form >
              <b-input-group prepend="Initials" class="mb-1" >
                <b-form-input @input="changesMade = true"  v-model="identity.initials" placeholder="Enter your initials."></b-form-input>
              </b-input-group>
              <b-input-group prepend="Name" class="mb-1" >
                <b-form-input @input="changesMade = true"   v-model="identity.name" placeholder="Enter your name."></b-form-input>
              </b-input-group>          
              <b-input-group prepend="Full Name" class="mb-1" >
                <b-form-input  @input="changesMade = true"  v-model="identity.fullName" placeholder="Enter your full name."></b-form-input>
              </b-input-group>  
              <b-input-group prepend="Headline" class="mb-1" >
                <b-form-input  @input="changesMade = true"  v-model="hero.headline" placeholder="Enter a headline."></b-form-input>
              </b-input-group> 
              <b-input-group prepend="Avatar" class="mb-1" >
                <b-form-input  @input="changesMade = true"  v-model="identity.avatar" placeholder="Enter an image url."></b-form-input>
              </b-input-group>        
            </b-form>          
          <div v-if="identity.avatar != null && identity.avatar != ''" class="imageSquare"  v-bind:style="{ backgroundImage: 'url(' + identity.avatar + ')' }" ></div>  
        </div>

           <span class="badge badge-pill badge-dark mb-3 mt-2">
          Contact Info
        </span>
        <div class="w-100">
            <b-form >
              <b-input-group prepend="Email" class="mb-1" >
              <b-form-input @input="changesMade = true"  v-model="links.email" placeholder="Email"></b-form-input>
              </b-input-group>
              <b-input-group prepend="Resume" class="mb-1" >
              <b-form-input @input="changesMade = true"  v-model="links.resume" placeholder="Resume URL"></b-form-input>
              </b-input-group>
              <b-input-group prepend="Twitter" class="mb-1" >
              <b-form-input @input="changesMade = true"  v-model="links.twitter" placeholder="Twitter Username"></b-form-input>
              </b-input-group>
              <b-input-group prepend="Instagram" class="mb-1" >
              <b-form-input @input="changesMade = true"  v-model="links.instagram" placeholder="Instagram Username"></b-form-input>
              </b-input-group>
              <b-input-group prepend="LinkedIn" class="mb-1" >
              <b-form-input @input="changesMade = true"  v-model="links.linkedin" placeholder="LinkedIn url-slug"></b-form-input>
              </b-input-group>                     
          </b-form>                    
        </div>
        
        <div class="w-100 d-block">
          <span class="badge badge-pill badge-dark mb-3 mt-2">Background Images</span>
          <br>
          <div class="imageSquare" @click="backgroundImages.unshift('');imageEditor.oldUrl = ''; $bvModal.show('image-editor'); hideSidebar()" style="display:inline-block;"><b-icon icon="plus" font-scale="3" style="color:rgba(0,50,150,0.4);margin:12px auto;display:block;" aria-hidden="true"></b-icon></div>
          <div class="imageSquare" @click="imageEditor.oldUrl = image; $bvModal.show('image-editor'); hideSidebar()" v-for="image in backgroundImages" v-bind:key="image"  v-bind:style="{ backgroundImage: 'url(' + image + ')' }" ></div>
          <br>
        </div>
        
        <span class="badge badge-pill badge-dark mb-3 mt-2">Testimonial Image</span><br>
        <b-img  @click="imageEditor.oldUrl = testimonials.image; $bvModal.show('image-editor'); hideSidebar()" style="background:#000;padding:15px;max-width:50%; margin:0px 5px 5px 0px;" :src="testimonials.image" fluid thumbnail></b-img>  <br>
        
        <span class="badge badge-pill badge-dark mb-3 mt-2">Gallery</span>
        <span class="badge badge-pill border text-dark ml-2" @click="$bvModal.show('modal-sort-projects'); hideSidebar()" style="cursor:pointer;">Sort</span>
        <br>

        <b-input-group prepend="Section Title" style="margin-bottom:6px;width:calc(100% - 8px);" >
          <b-form-input @input="changesMade = true"  v-model="language.galleryTitle" placeholder="Featured Work"></b-form-input>
        </b-input-group>
        <div class="imageSquare" @click="var id = Date.now(); projects.unshift({id:id, title: 'New Project'  }); projectEditor.index = 0; projectEditor.project = {id:id, title: 'New Project'};  $bvModal.show('project-editor'); hideSidebar()" style="display:inline-block;"><b-icon icon="plus" font-scale="3" style="color:rgba(0,50,150,0.4);margin:12px auto;display:block;" aria-hidden="true"></b-icon></div>
        <div @click="projectEditor.index = index; projectEditor.project = project;  $bvModal.show('project-editor'); hideSidebar()" v-for="(project, index) in projects" v-bind:key="index" class="imageSquare" v-bind:style="{ backgroundImage: 'url(' + project.thumbnail + ')' }" ></div>
        <br>
        
        <span class="badge badge-pill badge-dark mb-3 mt-2">Highlighted Links</span>
        <span class="badge badge-pill border text-dark ml-2" @click="$bvModal.show('modal-sort-highlights'); hideSidebar()" style="cursor:pointer;">Sort</span><br>
        <b-input-group prepend="Section Title" style="margin-bottom:6px;width:calc(100% - 8px);" >
          <b-form-input @input="changesMade = true"  v-model="language.linksTitle" placeholder="Projects"></b-form-input>
        </b-input-group>
        <div class="imageSquare" @click="var id = Date.now(); highlights.unshift({id:id, title: 'New Link'  }); linkEditor.index = 0; linkEditor.link = {id:id, title: 'New Project'};  $bvModal.show('link-editor'); hideSidebar()" style="display:inline-block;"><b-icon icon="plus" font-scale="3" style="color:rgba(0,50,150,0.4);margin:12px auto;display:block;" aria-hidden="true"></b-icon></div>
        <div @click="linkEditor.index = index; linkEditor.link = link;  $bvModal.show('link-editor'); hideSidebar()" v-for="(link, index) in highlights" v-bind:key="link.id" class="imageSquare" v-bind:style="{ backgroundImage: 'url(' + link.image + ')' }" ></div>
      </div>
    </b-sidebar>
      <div style="background: #000 !important">
        <b-navbar fixed toggleable="lg" type="dark" class="navbar-transparent d-none d-md-flex" style="z-index:999 !important;">
          <b-navbar-brand v-if="identity != null && identity.fullName != null" class="d-inline-block d-md-none" href="/"
            >{{ identity.fullName}}</b-navbar-brand
          >
          <b-navbar-brand v-if="identity != null && identity.initials != null" class="d-none d-md-inline-block" href="/"
            >{{ identity.initials }}</b-navbar-brand
          >

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item v-if="sections!= null && sections.work != null && sections.work.enabled != null && sections.work.enabled == true" href="#featured-work">{{ language.galleryTitle }}</b-nav-item>
              <b-nav-item href="#featured-projects">{{ language.linksTitle }}</b-nav-item>
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
              <b-nav-item
                v-if="links != null && links.linkedin != null"
                :href="'https://www.linkedin.com/in/' + links.linkedin"
                target="_blank"
              >
                <b-icon icon="linkedin" aria-hidden="true"></b-icon>
              </b-nav-item>   
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

           <div
              id="adminButton"
              style="box-shadow:0px 5px 15px rgba(0,50,150,0.2);position:fixed;bottom:20px;right:20px;width:50px;height:50px;background:#e5eaf4;color:rgb(45 87 169);padding:14px 14px 14px 16px;border-radius:50px;z-index:999999;"    
              v-b-toggle.sidebar
                
              v-bind:class="{active: showAdmin == true, inactive: showAdmin == false }"                          
              >
              <b-icon icon="pen-fill" aria-hidden="true"></b-icon>
           </div>
           <div
              id="newPostButton"
              @click="postEditor.rendering = false"
              style="box-shadow:0px 5px 15px rgba(0,50,150,0.2);position:fixed;bottom:20px;right:80px;width:50px;height:50px;background:#e5eaf4;color:rgb(45 87 169);padding:14px 14px 14px 16px;border-radius:50px;z-index:999999;"    
              v-b-toggle.newpostSidebar
                
              v-bind:class="{active: showAdmin == true, inactive: showAdmin == false }"                          
              >
              <b-icon icon="plus" font-scale="3" style="margin-top:-12px;margin-left:-15px;" aria-hidden="true"></b-icon>
           </div>
            <div
            @click="login()"
            style="cursor:pointer;box-shadow:0px 5px 15px rgba(0,50,150,0.2);position:fixed;bottom:20px;left:20px;height:50px;background:rgb(45 87 169) !important;color:#e5eaf4 !important;padding:14px 14px 14px 16px;border-radius:50px;z-index:1000;"                
            v-if="showAdmin == true && changesMade == true"                                
            >
            <b-icon icon="cloud-upload" aria-hidden="true"></b-icon> Publish Changes
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
                v-if="identity.name != null && identity.name != ''"
                class="justify-content-center align-self-center"
                style="position: relative; z-index: 999"
              >
                <h1
                v-show="identity.name != null && identity.name != ''"
                  class="intro intro-message"
                  id="hero-text"
                  style="
                   
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
          border: 6px solid #fff; margin-top: 45px;
          width: 100px;
          height: 100px;
          border-radius: 100px;
          z-index: 999 !important;
        "
      />

      <!-- Testimonials !-->

      <div
        id="testimonials"
        v-if="sections!= null && sections.testimonials != null && sections.testimonials.enabled != null && sections.testimonials.enabled == true && testimonials != null && testimonials.image != null"
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
        v-if="sections!= null && sections.work != null && sections.work.enabled != null && sections.work.enabled == true"
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
                      background: #none;
                      color: #000;
                      font-size: 33px;
                      z-index:1 !important;
                    "
                    class="badge badge-pill border-0 px-3 py-2 intro"
                  >
                    {{ language.galleryTitle }}
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
              :params="{ autoplay: 0, modestbranding: 1, controls:1, rel: 0  }"
              :src="modalVideo"
            ></video-embed>
            <video style="max-width:100%;"
            preload="none"
              v-else-if="modalVideo != null && modalVideo.includes('.mp4')"                           
            >
              <source type="video/mp4"  :src="modalVideo">
            </video>
            <img v-else-if="modalImage != null" :src="modalImage" style="max-width:100%;border-radius:4px;"/>

            <span class="my-3 badge badge-pill badge-dark">Description</span>
            <p class="mb-3">{{ modalText }}</p>
            <div class="btn btn-outline-primary"
            v-if="showAdmin"
             @click="
             
             $bvModal.show('project-editor'); 
                "
             >
              <b-icon icon="pen-fill" class="p-1 mr-2" font-scale="1"></b-icon>Edit Project
              
            </div>
             <div class="btn btn-outline-danger ml-2"
            v-if="showAdmin"
            style="float:right;"
             @click="             
              projects.splice(projectEditor.index, 1);
              changesMade = true;
              $bvModal.hide('modal-dynamic');"
             >
              <b-icon icon="trash" class="p-1 mr-2" font-scale="1"></b-icon>Delete Project
              
            </div>            
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
                @click="showProject(index); projectEditor.project = project; projectEditor.index = index;"
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
      <a id="featured-projects"/>
      <div
        v-if="highlights != null"
        class="w-100"
        id="featured-projects"
        style="
          background: #fff;
        "
      >
        <div class="container p-5" style="z-index: 2222 !important">
          <div class="row align-items-center pb-5 pt-4 mt-1 mt-md-0 pt-md-3">
            <div class="col-12 mx-auto">
              <div class="card bg-none border-0 justify-content-center">
                <div
                  class="justify-content-center align-self-center"
                  style="position: relative; z-index: 999"
                >
                  <p
                    style="
                      margin-bottom: 25px;
                      background: none;
                      color: #000;
                      font-size: 33px;
                    "
                    class="badge badge-pill border-0 px-3 py-2 intro"
                  >
                    {{ language.linksTitle }}
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
                    <b-card-body :title="highlight.title">
                      <b-card-text class="text-left"
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

      <div
       style="background-size:cover !important;background-position:center !important;height: 650px; display: block"  :style="{
          background: '#000',
          backgroundImage: 'url(' + randomBackground() + ') !important',
        }" 
        v-if="sections!= null && sections.contact != null && sections.contact.enabled != null && sections.contact.enabled == true && links != null && identity.name != null"
        
        >
        
        <div class="bg w-100 text-center"  >
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
                    <a
                      hv-if="links.linkedin != null"
                      :href="'https://www.linkedin.com/in/' + links.linkedin"
                      target="_blank"
                      class="btn btn-light m-2"
                    >
                      <b-icon icon="linkedin"></b-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>           
      </div>
      <div id="mobile-footer" class="w-100 pb-5 d-flex d-md-none">
          <a
                    v-if="links.email != null"
                      :href="links.email"
                      target="_blank"
                      class="btn btn-light m-2 text-dark mx-auto br-25 border"
                    >
                      <b-icon icon="envelope" scale=".75" style="padding-top:3px;"></b-icon> E-MAIL
                    </a>
        </div>
      </div>   
    </ClientOnly>
  </Layout>
</template>

<script>
import axios from "axios";
import draggable from "vuedraggable";

// Import FilePond
import * as FilePond from "filepond";
// Import Vue FilePond
import vueFilePond from "vue-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
// Import FilePond plugins
// Please note that you need to install these plugins separately
// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// Import encoding plugin
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
// Import crop plugin
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
// Create component
var FilePondComponent = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageCrop
);

export default {
  components: {
    draggable,
    FilePondComponent,
  },
  data() {
    return {
      files: null,
      submitted: false,
      message: null,
      password: null,
      sections: null,
      postEditor: {
        rendering: false,
        mode: "backgroundImages",
        selectedUnsplash: null,
        generatedPostImage: null,
        unsplashImages: {
          results: null,
        },
        imageSearchTerms: "",
        text: null,
        image: "https://source.unsplash.com/daily",
        overlay: "/images/overlays/overlay.png",
        config: {
          inline: {
            target: "#postImageContainer",
            returnAction: "base64",
            callback: (img) => {
              // modifies what image is returned
              //console.log('image:');
              // console.log(img);
              //return img
              this.postEditor.generatedPostImage = img;
            },
          },
          download: {
            target: "#postImageContainer",
            returnAction: "download",
          },
        },
      },
      postOverlays: ["/images/overlays/overlay-blank.png"],
      imageEditor: {
        newUrl: null,
        oldUrl: null,
      },
      language: {
        galleryTitle: "Gallery",
        linksTitle: "Featured Work",
      },
      projectEditor: {
        imageUrl: null,
        project: {
          thumbnail: null,
          video: null,
          title: null,
        },
        index: null,
      },
      linkEditor: {
        imageUrl: null,
        link: {
          thumbnail: null,
          title: null,
        },
        index: null,
      },
      fetched: false,
      json: {},
      identity: {},
      hero: {
        headline: "",
        heading: "",
      },
      testimonials: {
        image: "/logos.png",
      },
      showNav: true,
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
      showAdmin: false,
      message: null,
      originalJson: null,
      currentJson: null,
      changesMade: null,
      background: null,
    };
  },
  async mounted() {
    this.getData();
    this.window = window;
    window.addEventListener("keydown", this.escapeListener);
    if (window.location.href.includes("admin")) {
      this.showAdmin = true;
    }
  },
  methods: {
    padBase64Image(b64str) {
      // fixes bug with Safari on iOS - encoded data string must have # of characters that's divisible by 4
      var string = b64str;
      console.log(string);
      if (string.includes("png")) {
        var exclude = "data:image/jpeg;base64,";
      } else {
        var exclude = "data:image/jpeg;base64,";
      }
      string = string.substring(string.lastIndexOf(",") + 1);
      console.log(string);
      while (string.length % 4 > 0) {
        string += "=";
      }

      console.log("DIFF:");

      function findDiff(str1, str2) {
        let diff = "";
        str2.split("").forEach(function (val, i) {
          if (val != str1.charAt(i)) diff += val;
        });
        return diff;
      }

      console.log(findDiff(exclude + string, b64str));

      return exclude + string;
    },
    handleFileProcess() {
      console.log("FilePond has processed files.");
      // example of instance method call on pond reference
      this.files = this.$refs.pond.getFiles();
    },
    imageUploaded() {
      if (this.files != null && this.files.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    insertPostImage() {
      var imageData = this.files[0].getFileEncodeDataURL();
      var data = {
        filename: "temp.jpg",
        contents: imageData.substring(imageData.lastIndexOf(",") + 1),
      };
      axios
        .post("/.netlify/functions/upload-image-v1?p=" + this.password, data, {
          // Config
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        })
        .catch(function (error) {
          //console.log("Show error notification!");
          //return Promise.reject(error);
          //self.submitted = false;
          self.updateMessage("Something went wrong. Try again.");
        })
        .then(function (response) {
          // Handle success
          console.log(response);
          console.log(response.status);
          if (response.status == 200) {
            //self.$bvModal.hide("modal-password");
            //self.changesMade = false;
            //self.submitted = false;
          } else {
            //self.submitted = false;
            self.updateMessage("Something went wrong. Try again.");
          }
        });
      this.$bvModal.hide("modal-uploadImage");
      /*
      var string = this.files[0].getFileEncodeDataURL();
      string = '/.nelify/functions/base64-image-v1?data=' + string.substring(string.lastIndexOf(",") + 1);
      console.log(string);
      */

      this.postEditor.image = "/.netlify/functions/read-image-v1";
      /*
      this.postEditor.image = this.padBase64Image(
        this.files[0].getFileEncodeDataURL()
      );
      */
      this.$root.$emit("bv::toggle::collapse", "newpostSidebar");
      //this.files[0].get
    },
    handleFilePondInit() {
      console.log("FilePond has initialized");

      // example of instance method call on pond reference
      this.files = this.$refs.pond.getFiles();
    },
    searchForImages() {
      axios
        .get(
          "https://api.unsplash.com/search/photos/?client_id=d0ebc52e406b1ac89f78ab30e1f6112338d663ef349501d65fb2f380e4987e9e&per_page=20&query=" +
            this.postEditor.imageSearchTerms
        )
        .then((response) => {
          this.postEditor.unsplashImages = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    generatePostImage() {
      this.postEditor.generatedImage = vue2img().pdf(
        this.postEditor.config.inline
      );
    },
    savePost() {
      window.scrollTo(0, 0);
      this.postEditor.generatedPostImage = null;
      vue2img().image(this.postEditor.config.inline);
      this.$bvModal.show("modal-generatedPostImage");
    },
    publish() {
      this.message = null;
      var data = {};
      data.identity = this.identity;
      data.links = this.links;
      data.hero = this.hero;
      data.testimonials = this.testimonials;
      data.projects = this.projects;
      data.postOverlays = this.postOverlays;
      data.highlights = this.highlights;
      data.backgroundImages = this.backgroundImages;
      this.submitted = true;
      var self = this;
      axios
        .post("/.netlify/functions/content-v1?p=" + this.password, data, {
          // Config
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        })
        .catch(function (error) {
          //console.log("Show error notification!");
          //return Promise.reject(error);
          self.submitted = false;
          self.updateMessage("Something went wrong. Try again.");
        })
        .then(function (response) {
          // Handle success
          console.log(response);
          console.log(response.status);
          if (response.status == 200) {
            self.$bvModal.hide("modal-password");
            self.changesMade = false;
            self.submitted = false;
          } else {
            self.submitted = false;
            self.updateMessage("Something went wrong. Try again.");
          }
        });
    },
    updateMessage(input) {
      this.message = input;
    },
    login() {
      this.$bvModal.show("modal-password");
    },
    saveProject() {
      this.$bvModal.hide("project-editor");
      var index = this.projectEditor.index;
      this.projects[index] = this.projectEditor.project;
      this.changesMade = true;
      this.updateJson();
    },
    saveLink() {
      this.$bvModal.hide("link-editor");
      var index = this.linkEditor.index;
      this.highlights[index] = this.linkEditor.link;
      this.changesMade = true;
      this.updateJson();
    },
    updateJson() {},
    focusMyElement() {
      this.$refs.focusThis.focus();
    },
    hideSidebar() {
      this.$root.$emit("bv::toggle::collapse", "sidebar");
    },
    showSidebar() {
      this.$root.$emit("bv::toggle::collapse", "sidebar");
    },
    escapeListener(event) {
      if (event.key === "Escape") {
        this.showAdmin = true;
      }
    },
    getData() {
      var source = "/data.json";
      if (typeof process.env.GRIDSOME_JSON_URL != "undefined") {
        source = process.env.GRIDSOME_JSON_URL;
      }
      console.log("Pulling data from... \n " + source);
      axios.get(source).then((response) => this.checkData(response));
    },
    checkData(response) {
      if (response.data == "" || response.data == null) {
        axios
          .get((process.env.GRIDSOME_DOMAIN || "") + "/data.json")
          .then((response) => this.updateData(response));
      } else {
        this.updateData(response);
      }
    },
    updateData(data) {
      if (typeof data.data == "string") {
        data.data = JSON.parse(data.data);
      }
      console.log(data.data);
      console.log("Updated data.");
      this.json = data.data;
      this.originalJson = JSON.stringify(data.data);
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
        if (data.data.sections != null) {
          this.sections = data.data.sections;
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
        if (data.data.postOverlays != null) {
          this.postOverlays = data.data.postOverlays;
        }
        if (data.data.links != null) {
          this.links = data.data.links;
        }
      }
    },
    showProject(index) {
      this.projectEditor.index = index;
      this.modalVideo = this.projects[index].video;
      this.modalText = this.projects[index].description;
      this.modalTitle = this.projects[index].title;
      this.modalImage = this.projects[index].thumbnail;
      this.$bvModal.show("modal-dynamic");
    },
    randomBackground() {
      var items = this.backgroundImages;
      if (this.background == null) {
        this.background = items[Math.floor(Math.random() * items.length)];
      }
      return this.background;
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
#postText {
  max-width: 90%;
  overflow-wrap: break-word !important;
  font-family: "Cabin" !important;
  font-size: 115%;
}

.b-aspect-content {
  display: flex !important;
}

#postImage {
  overflow: hidden;
  background-size: cover !important;
  background-position: center !important;
}

#postImageContainer,
#postImagePreview {
  background-size: cover !important;
  background-position: center !important;
  display: inline-block;
  min-height: 450px;
  min-width: 450px;
  border-radius: 0px;
  overflow: hidden;
}

@media (max-width: 991px) {
  #postImageContainer,
  #postImagePreview {
    transform: scale(0.76);
    margin-left: -55px;
    margin-top: -53px;
    margin-bottom: -55px;
  }
}

#postImageContainer.scaled,
#postImageContainer {
  padding: 0px !important;
  position: absolute !important;
  top: -1350px !important;
  left: -1350px !important;
  z-index: -100 !important;
  background-size: cover !important;
  background-position: center !important;
  min-height: 1350px !important;
  min-width: 1350px !important;
  border-radius: 0px;
  overflow: hidden;
  font-size: 315%;
  max-width: 1350px !important;
  max-height: 1350px !important;
}

#postImageContainer.scaled,
#postImageContainer.scaled #postImage {
  border-radius: 0px !important;
}

#adminButton,
#newPostButton {
  z-index: 999 !important;
  transition: 0.2s all !important;
  transform: scale(0);
}
#adminButton.inactive,
#newPostButton.inactive {
  transform: scale(0);
}
#adminButton.active,
#newPostButton.active {
  transform: scale(1) !important;
}
.imageSquareLarge {
  height: 350px;
  width: 100%;
  display: block;
  border-radius: 4px;
  background-color: rgba(0, 50, 100, 0.25);
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center;
}
.imageSquare {
  background-color: rgba(0, 50, 150, 0.2);
  width: 75px;
  height: 75px;
  display: inline-block;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.imageSquare:hover {
  opacity: 0.8;
}

@media (min-width: 991px) {
  #sidebar {
    padding-left: 5px;
    padding-top: 10px;
    min-width: 520px !important;
  }
}

#sidebar .input-group-text,
#newpostSidebar .input-group-text {
  min-width: 100px;
}

#newpostSidebar .b-sidebar-body {
  overflow-x: hidden;
}
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
  top: 380px !important;
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

#hero-text {
  font-size: 150%;
  min-width: 250px;
  margin-top: 90px;
  position: absolute;
  top: -120px;
  left: 0px;
  width: 100%;
  text-align: center;
  opacity: 1;
  color: rgb(255, 255, 255) !important;
}

@media(min-width:991px){
  #hero-text {
    top: -105px;
  }
}
</style>
