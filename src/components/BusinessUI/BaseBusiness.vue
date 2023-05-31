<template>
  <div class="container">
    <q-tabs
      v-model="this.tab"
      dense
      color="#222222"
      active-color="#121212"
      indicator-color="#121212"
      align="justify"
      narrow-indicator
    >
      <q-tab name="All businesses" label="All businesses" />
      <q-tab
        name="Approved businesses"
        label="Approved businesses"
        class="tab"
      />
      <q-tab name="Pending Approval" label="Pending Approval" class="tab" />
      <q-tab name="Queried Approvals" label="Queried Approvals" class="tab" />
    </q-tabs>
    <q-separator inset />
    <BusinessTableHeader @customChange="handleCustomChange($event)" />
    <q-tab-panels v-model="this.tab" animated>
      <q-tab-panel name="All businesses">
        <BaseTable :rows="this.row" />
      </q-tab-panel>

      <q-tab-panel name="Approved businesses">
        <BaseTable :rows="this.approved" />
      </q-tab-panel>

      <q-tab-panel name="Pending Approval">
        <BaseTable :rows="this.pending" />
      </q-tab-panel>
      <q-tab-panel name="Queried Approvals">
        <BaseTable :rows="this.queried" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import BaseTable from "src/components/UI/BaseTable.vue";
import BusinessTableHeader from "src/components/BusinessUI/BusinessTableHeader.vue";
import { rows } from "../../baseRow.js";

export default {
  beforeMount() {
    this.approved = this.getApproved();
    this.pending = this.getPending();
    this.queried = this.getQueried();
  },
  components: { BaseTable, BusinessTableHeader },
  data() {
    return {
      tab: "All businesses",
      approved: "",
      pending: "",
      queried: "",
      inputValue: "",
      row: rows,
    };
  },
  methods: {
    getApproved() {
      return rows.filter((item) => item.verificationStatus == "Approved");
    },
    getPending() {
      return rows.filter(
        (item) => item.verificationStatus == "Pending Approval"
      );
    },
    getQueried() {
      return rows.filter((item) => item.verificationStatus == "Queried");
    },
    handleCustomChange(text) {
      this.inputValue = text;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
}
</style>
