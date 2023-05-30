<template>
  <div class="content">
    <h6>Businesses: 34</h6>
    <q-input
      v-model="filter"
      debounce="300"
      outlined
      placeholder="Search using business name or business id"
      class="q-pa-md search_btn"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 2.5%;
  margin-right: 2.5%;
}

.search_btn {
  width: 23rem;
  text-align: center;
  margin-top: 1rem;
}
</style>
