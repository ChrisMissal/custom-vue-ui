<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Home
      </router-link>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Menu">
        <nav-link class="dropdown-item" to="/credits">
          Credits
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
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
