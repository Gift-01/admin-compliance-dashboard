<template>
  <q-layout view="lHh Lpr lFf" class="q-list">
    <q-header class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="name_title"> Welcome, Sameze</q-toolbar-title>

        <my-select
          :options="selectOptions"
          class="input"
          label="Quick action"
          rounded="rounded"
        />
        <div class="notification-wrapper">
          <div class="notification-dot"></div>
          <q-icon name="notifications" class="notification-icon" />
        </div>
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
import MySelect from "../components/UI/TextInput.vue";

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
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    MySelect,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      Logo,
      essentialLinks: linksList,
      leftDrawerOpen,
      selectOptions: [
        "All time",
        "Today",
        "yesterday",
        "Last 7 days",
        "Custom Duration",
      ],
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
  display: flex;
  justify-content: space-between;
  height: 5rem;
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
  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
    width: 1000px;
  }
}
img {
  margin-top: 3rem;
}
.input {
  margin-right: 1rem;
  width: 10rem;
  font-size: 0.2rem;
  @media screen and (max-width: 760px) {
    margin-right: 0.5rem;
    width: 8rem;
  }
}

.notification-icon {
  color: #ced0d0;
  font-size: 1.5rem;
}
.notification-wrapper {
  position: relative;
  display: inline-block;
  margin-right: 1rem;
  cursor: pointer;
}

.notification-dot {
  position: absolute;
  top: -5px; /* Adjust the positioning of the dot as needed */
  right: -5px; /* Adjust the positioning of the dot as needed */
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}
.bb {
  border-bottom: 1px solid red;
}
</style>
