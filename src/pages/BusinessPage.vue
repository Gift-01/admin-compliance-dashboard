<template>
    <div class="container">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="All businesses" label="All businesses" />
          <q-tab name="Approved businesses" label="Approved businesses" />
          <q-tab name="Pending Approval" label="Pending Approval" />
          <q-tab name="Queried Approvals" label="Queried Approvals" />

        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="All businesses">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels> 
    </div>
</template>

<script setup>
 import { ref } from 'vue'
 const tab=ref('mails')
</script>

<style lang="scss" scoped>
.container{
    padding: 1rem;
}
</style>