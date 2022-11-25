<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/cbg3.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">
            Resumé of Chris Missal<br />
            <small>Full-stack Software developer</small>
          </h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container resume-page">
        <div class="row resume-container">
          
          <div class="col-md-12 resume-section">
            <div class="row">
              <div class="col-md-6 text-right">
                <h3 class="title title-up">Personal Info</h3>
              </div>
              <div class="col-md-6">
                <p class="description"><br />Intentionally left blank, available upon request soon.</p>
              </div>
            </div>
          </div>

          <div class="col-md-12 resume-section">
            <div class="row">
              <div class="col-md-6 text-right">
                <h3 class="title title-up">Experiences & Responsibilities</h3>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="category">Workify <small class="text-muted">Austin, Texas</small> <small class="text-secondary">2015 &ndash; present</small></h4>
                    <h6 class="text-muted">Engineering Team Lead</h6>
                    <p class="description">At Workify we're building an employee surveying and feedback platform. Our company's "be human" core value allows our product team to design design a product that we would use ourselves. No sneaky, unethical selling of data, or giving it to advertisers!</p>
                    <p class="description">I'm super proud of our entire team, past and present, and look forward to the next chapter we're writing!</p>
                  </div>
                  <div class="col-md-12">
                    <h4 class="category">Headspring <small class="text-muted">Austin, Texas</small> <small class="text-secondary">2012 &ndash; 2015</small></h4>
                    <h6 class="text-muted">Senior Consultant</h6>
                    <p class="description">My time at Headspring, a custom software solutions company, accelerated my growth in greenfield projects, legacy technologies, as well as many industries and institutions.</p>
                    <p class="description">I expanded my toolset while I learned from many, and taught others. We also built some cool open source tools.</p>
                  </div>
                  <div class="col-md-12">
                    <h4 class="category">J&P Cycles <small class="text-muted">Eastern Iowa</small> <small class="text-secondary">2007 &ndash; 2012</small></h4>
                    <h6 class="text-muted">Web Developer</h6>
                    <p class="description">As a web developer, I was responsible for the daily maintenance and features of the custom .NET e-commerce web application.</p>
                    <p class="description">The teams we built turned around a decimated department, and helped move the company into the <quote>"Web 2.0 era"</quote>.</p>
                    <p class="description">We managed our own email server! It was around for so many years that it had a pretty solid reputation score. One cool project was creating an email templating service provider internal to the company.</p>
                  </div>
                  <div class="col-md-12">
                    <h4 class="category">Iowa Code Camp <small class="text-secondary">2009 &ndash; 2011</small></h4>
                    <h6 class="text-muted">Organizer and Presenter</h6>
                    <p class="description">This is or was the largest free software conference in Iowa <small>[citation needed]</small>.</p>
                    <p class="description">My typical role was to help with selecting and scheduling speakers, and obtaining sponsorships.</p>
                    <p class="description">In addition to helping with volunteer duties, I presented several sessions over the years.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-md-12 resume-section">
            <hr />
          </div>

          <div class="col-md-12 resume-section cm-languages cm-self-ratings">
            <div class="row">
              <div class="col-md-6 text-right">
                <h3 class="title title-up">Languages</h3>
                <p>Some of my more comfortable languages and my self assigned productivity score</p>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>C# <em>(9/10)</em></li>
                  <li>SQL <em>(8/10)</em></li>
                  <li>JavaScript <em>(7/10)</em></li>
                  <li>Java <em>(6/10)</em></li>
                  <li>python <em>(3/10)</em></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-12 resume-section cm-databases cm-self-ratings">
            <div class="row">
              <div class="col-md-6 text-right">
                <h3 class="title title-up">Databases</h3>
                <p>My level of comfort developing on databases and other storage solutions</p>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>SQL Server <em>(9/10)</em></li>
                  <li>Graph DBs <em>(6/10)</em></li>
                  <li>Key-value stores <em>(6/10)</em></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-12 resume-section cm-tools cm-self-ratings">
            <div class="row">
              <div class="col-md-6 text-right">
                <h3 class="title title-up">Tools</h3>
                <p>A list of some tools that I&apos;ve come to appreciate over time.</p>
              </div>
              <div class="col-md-6">
                <ul>
                  <li><span class="item">Microservices</span>, <span class="time-ago-text">since 2015</span></li>
                  <li><span class="item">SPAs</span>, <span class="time-ago-text">since 2014</span></li>
                  <li><span class="item">Message brokers</span>, <span class="time-ago-text">since 2013</span></li>
                  <li><span class="item">git</span>, <span class="time-ago-text">since 2009</span></li>
                  <li><span class="item">Linux</span>, <span class="time-ago-text">since 2018</span></li>
                  <li><span class="item">RDBMS</span>, <span class="time-ago-text">since 2003</span></li>
                  <li><span class="item">Windows</span>, <span class="time-ago-text">since forever?</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resume',
  bodyClass: 'resume-page',
  components: {
  }
};
</script>
<style>

@media print {
  .page-header, .footer {
    display: none;
  }
}
.resume-page {
  min-height: calc(100vh - 95px);
}
.resume-section .col-md-6:first-child {
  padding-right: 48px;
}
.resume-section ul {
  padding-left: 0;
  margin: 2em 0 0;
}
.resume-section ul li {
  list-style-type: none;
  margin-bottom: 0.33em;
}
</style>
