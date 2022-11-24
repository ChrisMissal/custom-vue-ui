<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/cbg1.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">What's this all about?</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container about-page">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who is Chris?</h2>
            <p class="description">
              I'm Chris, or Christopher in some parts, and am a Software developer in the United States. I started my career in 2005 building websites for friends and family. After obtaining
              an Associates Degree in Computer Programming I began working with teams building software for small businesses, startups, and a few Fortune 500 projects in between. I'm currently working for a small startup
              called <a href="https://getworkify.com" class="link">Workify</a>.
            </p>
            <p class="description">
              This site is a blog, resume, online portfolio, or whatever I want it to be. I plan to share some projects here in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Special thanks!</h2>
            <card class="card">
              <tabs
                slot="raw-content"
                tab-content-classes="tab-content-padding"
              >
                <tab-pane>
                  <template slot="label">
                    <i class="now-ui-icons design_image"></i> Background
                  </template>
                  <p class="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://stocksnap.io/photo/alone-background-TJSWWAXG9T">Alone Background</a>" by <a target="_blank" rel="noopener noreferrer" href="https://www.freepik.com/jeswin">Jeswin</a> is marked with <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/publicdomain/zero/1.0/?ref=openverse">CC0 1.0 <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img><img src="https://mirrors.creativecommons.org/presskit/icons/zero.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img></a>. </p>
                </tab-pane>
                <tab-pane>
                  <template slot="label">
                    <i class="now-ui-icons design_image"></i> Background
                  </template>
                  <p class="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://stocksnap.io/photo/beach-sand-2PT5PZPXLH">Beach Sand</a>" by <a target="_blank" rel="noopener noreferrer" href="https://stocksnap.io/author/22412">Alice Donovan Rouse</a> is marked with <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/publicdomain/zero/1.0/?ref=openverse">CC0 1.0 <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img><img src="https://mirrors.creativecommons.org/presskit/icons/zero.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img></a>. </p>
                </tab-pane>
                <tab-pane>
                  <template slot="label">
                    <i class="now-ui-icons design_image"></i> Background
                  </template>
                  <p class="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://stocksnap.io/photo/sunset-beach-IDEUVDPV0Y">Sunset Beach</a>" by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/ianlivesey">Ian Livesey</a> is marked with <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/publicdomain/zero/1.0/?ref=openverse">CC0 1.0 <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img><img src="https://mirrors.creativecommons.org/presskit/icons/zero.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img></a>. </p>
                </tab-pane>
                <tab-pane>
                  <template slot="label">
                    <i class="now-ui-icons ui-2_settings-90"></i> Theme
                  </template>
                  <p class="attribution description">Website design by <a href="https:///www.invisionapp.com" target="_blank" rel="noopener">Invision</a>.
                    Theme components coded by <a href="https://binarcode.com" target="_blank" rel="noopener">BinarCode</a>
                      and <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Creative Tim</a>.</p>
                </tab-pane>
              </tabs>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to get in touch?</h2>
        <p class="description">I will do my best to read and respond where appropriate.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Tabs, TabPane, FormGroupInput } from '@/components';
export default {
  name: 'about',
  bodyClass: 'about-page',
  components: {
    Tabs,
    TabPane,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
