<template>
  <q-layout view="lHh Lpr lFf" class="q-list">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="name_title"> Welcome Sameze</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <div class="img">
            <img :src="Logo" alt="logo" />
          </div>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="links"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";
import Logo from "../assets/Logo.svg";

const linksList = [
  {
    title: "Overview",
    // caption: "Overview",
    icon: "dashboard",
    link: "/",
  },
  {
    title: "Business",
    // caption: "Business",
    icon: "work",
    link: "#/businesspage",
  },
  {
    title: "audit log",
    // caption: "chat.quasar.dev",
    icon: "tv",
    link: "https://chat.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      Logo,
      essentialLinks: linksList,
      leftDrawerOpen,
      router: useRouter(),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.header {
  background: rgba(251, 251, 251, 1);
  color: rgba(16, 16, 16, 1);

  padding: 16px, 40px, 16px, 40px;
}
.links {
  margin-top: 2rem;
  color: rgba(102, 102, 102, 1);
  box-shadow: 0px 4px 10px 4px rgba(209, 209, 209, 0.05);
  font-size: 0.8rem;
}
.q-list {
  background: rgba(251, 251, 251, 1);
}
.name_title {
  font-weight: 400;
  font-size: 1rem;
  color: rgba(16, 16, 16, 1);
}
img {
  margin-top: 3rem;
}
</style>
