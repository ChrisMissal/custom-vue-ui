<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Home
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow on GitHub"
          data-placement="right"
          href="https://github.com/ChrisMissal"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="xs-none">GitHub</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow on LinkedIn"
          data-placement="right"
          href="https://linkedin.com/in/chrismissal"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          <p class="xs-none">LinkedIn</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow on Twitter"
          data-placement="right"
          href="https://twitter.com/ChrisMissal"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="xs-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/ChrisMissal"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="xs-none">Instagram</p>
        </a>
      </li>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Menu">
        <nav-link class="dropdown-item" to="/resume">
          Resume
        </nav-link>
        <nav-link class="dropdown-item" to="/about">
          About
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  },
  data() {
    return [{
      name: 'twitter', title: 'Twitter', handle: 'ChrisMissal'
    }, {
      name: 'instagram', title: 'Instagram', handle: 'chrismissal'
    }, {
      name: 'github', title: 'GitHub', handle: 'ChrisMissal'
    }];
  }
};
</script>

<style scoped></style>
