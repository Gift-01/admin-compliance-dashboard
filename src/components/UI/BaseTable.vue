<template>
    <q-table
      class="business"
      :rows="items"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[10, 25, 50]"
      :pagination="true"
      :filter="filter"
      :filter-method="filterMethod"
      flat
    >
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
  };
  </script>
  
  <style scoped>
  </style>
  