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
          <q-tab name="Approved businesses" label="Approved businesses" class="tab" />
          <q-tab name="Pending Approval" label="Pending Approval" class="tab" />
          <q-tab name="Queried Approvals" label="Queried Approvals" class="tab" />

        </q-tabs>
        <q-separator inset/>
         <BusinessTableHeader/>
        <q-tab-panels v-model="this.tab" animated>
          <q-tab-panel name="All businesses">
            <BaseTable/>
          </q-tab-panel>

          <q-tab-panel name="Approved businesses">
            <BaseTable/>
          </q-tab-panel>

          <q-tab-panel name="Pending Approval">
            <BaseTable/>
          </q-tab-panel>
          <q-tab-panel name="Queried Approvals">
            <BaseTable/>
          </q-tab-panel>
        </q-tab-panels> 
    </div>
</template>

<script>
 import { ref } from 'vue'
 import BaseTable from 'src/components/UI/BaseTable.vue';
 import BusinessTableHeader from 'src/components/BusinessUI/BusinessTableHeader.vue'
//  const tab=ref('mails')

 export default({
  components:{BaseTable,BusinessTableHeader},
   data(){
    return{
      tab:"All businesses"
    }
      
   }
 })
</script>

<style lang="scss" scoped>
.container{
    padding: 2rem;
}
.tab{
 
}
</style>
