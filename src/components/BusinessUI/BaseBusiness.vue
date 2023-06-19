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
        <BaseTable :rows="rows" :per-page-options="[10, 20, 30]" />
      </q-tab-panel>

      <q-tab-panel name="Approved businesses">
        <BaseTable :rows="[]" />
      </q-tab-panel>

      <q-tab-panel name="Pending Approval">
        <BaseTable :rows="this.getPending()" />
      </q-tab-panel>
      <q-tab-panel name="Queried Approvals">
        <BaseTable :rows="this.getQueried()" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
// import TableContent from "../UI/TableContent.vue";
import BusinessTableHeader from "src/components/BusinessUI/BusinessTableHeader.vue";
// import { items as rows } from "../../items";
import BaseTable from "../UI/BaseTable.vue";

export default {
   created(){
      this.getData()
   },
  components: {  BusinessTableHeader, BaseTable },
  data() {
    return {
      tab: "All businesses",
      inputValue: "",
      rows:[]
      // row: this.handleSearch(rows),
    };
  },
  methods: {
    getApproved() {
      return this.rows.filter((item) => item.verificationStatus == "approved");
    },
    getPending() {
      return this.rows.filter(
        (item) => item.verificationStatus == "pending"
      );
    },
    getQueried() {
      return this.rows.filter((item) => item.verificationStatus == "queried");
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
    async getData(){
                try{
                    const response=await  this.$api.get('api/business/details')
                const data= await response.data.data
                this.rows=data
                }catch(error){
                    console.log(error)
                }
                
            },
 
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1.5rem;
}
</style>
