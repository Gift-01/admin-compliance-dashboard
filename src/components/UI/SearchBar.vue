<template>
  <div class="content">
    <h6>Businesses: {{ total }}</h6>
    <q-input
      v-model="filter"
      debounce="300"
      color="teal"
      filled
      outlined
      placeholder="Search using business name or business id"
      class="q-pa-md search_input"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props:{
    total:Number
  },
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
  padding: 8px, 12px, 8px, 12px;
  @media screen and (max-width: 760px) {
    justify-content: space-evenly;
  }
}
.search_input {
  width: 20rem;
  text-align: center;
  border-radius: 4px;
  padding: 1rem;
  color: rgba(34, 34, 34, 1);
  font-weight: 400;
  font-size: 0.7rem;
  @media screen and (max-width: 760px) {
    transform: translateY(-0.3rem);
  }
}
.content h6 {
  color: rgba(34, 34, 34, 1);
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
