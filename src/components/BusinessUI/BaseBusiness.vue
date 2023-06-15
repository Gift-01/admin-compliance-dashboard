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
        <TableContent :rows="this.row" :per-page-options="[10, 20, 30]" />
      </q-tab-panel>

      <q-tab-panel name="Approved businesses">
        <TableContent :rows="this.approved" />
      </q-tab-panel>

      <q-tab-panel name="Pending Approval">
        <TableContent :rows="this.pending" />
      </q-tab-panel>
      <q-tab-panel name="Queried Approvals">
        <TableContent :rows="this.queried" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import TableContent from "../UI/TableContent.vue";
import BusinessTableHeader from "src/components/BusinessUI/BusinessTableHeader.vue";
import { items as rows } from "../../items";

export default {
  beforeMount() {
    this.approved = this.getApproved();
    this.pending = this.getPending();
    this.queried = this.getQueried();
    
  },
  components: { TableContent, BusinessTableHeader },
  data() {
    return {
      tab: "All businesses",
      approved: "",
      pending: "",
      queried: "",
      inputValue: "",
      row: this.handleSearch(rows),
      
    };
  },
  methods: {
    getApproved() {
      return rows.filter((item) => item.VerificationStatus == "Approved");
    },
    getPending() {
      return rows.filter(
        (item) => item.VerificationStatus == "Pending Approval"
      );
    },
    getQueried() {
      return rows.filter((item) => item.VerificationStatus == "Queried");
    },
    handleCustomChange(text) {
      this.inputValue = text;
      console.log(this.handleSearch());
    },
    handleSearch(rows, inputValue) {
      // if(inputValue){
      //  return rows.filter((item)=>item.businessName==inputValue)
      // }else{
      //   return rows
      // }
      return rows
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1.5rem;
}
</style>
