<template>
  <q-table
    class="content_table"
    :rows="items"
    :columns="columns"
    row-key="id"
    :rows-per-page-options="[5, 25, 50]"
    pagination="true"
    :filter="filter"
    @row-click="handleRowClick"
    flat
  >
  </q-table>
</template>

<script>
import { items, columns } from "../../items";

export default {
  data() {
    return {
      items,
      columns,
      filter: "",
    };
  },

  methods: {
    handleRowClick(row) {
      this.$router.push({ path: `businesspage/${row.id}` });
    },
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
  display: flex;
  flex-direction: column;
  text-align: center;
  color: rgba(16, 16, 16, 1);
  font-size: 0.7rem;
  font-weight: 400;
}

.status-approved {
  color: green;
}

.status-pending {
  color: orange;
}

.status-queried {
  color: red;
}
</style>
