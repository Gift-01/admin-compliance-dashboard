<template>
  <q-table
    class="content_table"
    :rows="items"
    :columns="columns"
    row-key="id"
    :rows-per-page-options="perPageOptions"
    :pagination="{ enabled: true }"
    :filter="filter"
    @row-click="handleRowClick"
    flat
    :style="{ overflowX: 'auto' }"
  >
    <template v-slot:body-cell-VerificationStatus="props">
      <q-td :props="props">
        <div
          :style="{
            display: 'inline-block',
            padding: '5px',
            borderRadius: '16px',
            textAlign: 'center',
            color: getStatusTextColor(props.row.VerificationStatus),
            backgroundColor: getStatusColor(props.row.VerificationStatus),
          }"
        >
          {{ props.row.VerificationStatus }}
        </div>
      </q-td>
    </template>
  </q-table>
</template>

<script>
import { items, columns } from "../../items";

export default {
  props: {
    perPageOptions: {
      type: Array,
      default: () => [5, 25, 50],
    },
  },

  data() {
    return {
      items,
      columns,
      filter: "",
    };
  },

  methods: {
    getStatusColor(status) {
      switch (status) {
        case "Approved":
          return "#ECFDF3";
        case "Pending Approval":
          return "#FFFAEB";
        case "Quaried":
          return "#FEF3F2";
        default:
          return "#bdbdbd";
      }
    },

    getStatusTextColor(status) {
      switch (status) {
        case "Approved":
          return "#027A48";
        case "Pending Approval":
          return "#B54708";
        case "Quaried":
          return "#B42318";
        default:
          return "#000000";
      }
    },
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

  text-align: center;
  color: rgba(16, 16, 16, 1);
  font-size: 0.7rem;
  font-weight: 400;
}
</style>
