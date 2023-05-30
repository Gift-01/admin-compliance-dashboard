<template>
  <q-table
    class="content_table"
    :rows="items"
    :columns="columns"
    row-key="id"
    :rows-per-page-options="[10, 25, 50]"
    :pagination="true"
    :filter="filter"
    :filter-method="filterMethod"
  >
    <template v-slot:top>
      <div class="content">
        <h6>Businesses: 34</h6>
        <q-input
          v-model="filter"
          debounce="300"
          outlined
          placeholder="Search using business name or business id"
          class="q-pa-md search_btn"
        />
      </div>
    </template>
  </q-table>
</template>

<script>
import items from "../../items";

export default {
  data() {
    return {
      items: items,
      columns: [
        {
          name: "Business Name",
          required: true,
          label: "Business Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "Business ID",
          required: true,
          label: "Business ID",
          align: "left",
          field: "description",
          sortable: true,
        },
        {
          name: "Verification Status",
          required: true,
          label: "Verification Status",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "Business Type",
          required: true,
          label: "Business Type",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "Date Created",
          required: true,
          label: "Date Created",
          align: "left",
          field: "name",
          sortable: true,
        },

        // Add more columns as needed
      ],
      filter: "",
    };
  },
  // computed: {
  //   filterMethod(row, search) {
  //     return (
  //       row.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
  //       row.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
  //       // Add more properties to search on as needed
  //     );
  //   },
  // },
};
</script>

<style scoped>
.content_table {
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.search_btn {
  width: 23rem;
  text-align: center;
  margin-top: 1rem;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid red;
  width: 100%;
}
</style>
