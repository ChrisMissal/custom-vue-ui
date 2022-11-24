<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/cbg2.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="text-center">
          <h3 class="title">Chris Missal</h3>
          <h5>Full-stack Software Developer and Cloud Architect</h5>
        </div>
      </div>
    </div>
    <div class="row main">
      <div class="container index-page">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="title title-up">Refreshed</h2>
              <h6>November 2022</h6>

              <p class="description">
                A refreshed website feels like clean sheets, except it's replacing the dirty laundry you show the world.
              </p>
              <p class="description">
                More to come, but I have shared a <a href="#/resume">resumé</a>, so check that out for now.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
};
</script>
<style>
.index-page {
  min-height: calc(60vh - 95px);
}
</style>
