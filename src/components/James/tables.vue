<template>
  <div class="wrapper">
    <p class="business-total">Businesses:86</p>
    <q-input
      color="teal"
      filled
      v-model="this.text"
      @keyup="handleChange"
      label="Search using business name or business ID"
      class="input"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <!-- <q-icon class="fa-sharp fa-solid fa-arrow-up-right-from-square"/> -->
    <q-btn-dropdown class="filter" label="Filter by" flat>
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Business ID</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Approved</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Pending</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn
      icon="fa-sharp fa-solid fa-arrow-up-right-from-square"
      label="export"
      class="export-btn"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleChange() {
      this.$emit("customChange", this.text);
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 1rem;
}
.input {
  width: 50%;
}
.export-btn {
  background-color: #31a3a0;
  color: white;
  padding-block: 0.5rem;
}
.filter {
  background-color: #f2f2f2;
  color: #101010;
}
.business-total {
  margin-top: 1rem;
  font-weight: 500;
}
</style>
