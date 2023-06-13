<template>
  <q-item clickable :to="link"  @click="active" active-class="active" exact class="sidebar">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section class="nav-text">
      <q-item-label >{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  data(){
    return{
      active:true
    }
  }

});
</script>

<style lang="scss" scoped>
   .active{
  background-color: #FFFFFF !important;
  border-left: 2px solid #102051;
  color: #222222;
  font-weight: 600;
}
.nav-text{
  margin-left: -1rem;
}

</style>
