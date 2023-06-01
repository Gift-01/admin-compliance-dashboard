<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="business-details" label="Business Details" />
          <q-tab name="verification-documents" label="Verification Documents" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="business-details">
            <div class="text-h6">Business Details</div>
            <q-separator />
            <div class="details">
              <div>
                <div>
                  <i class="title"> Business Name</i>
                  <p class="text">CraftElavate</p>
                </div>
                <div>
                  <i class="title">Date created</i>
                  <p class="text">Aug 12,2020 9:37am</p>
                </div>
                <div>
                  <i class="title">Business Size</i>
                  <p class="text">10-20 people</p>
                </div>
                <div>
                  <i class="title">Business Category</i>
                  <p class="text">Agricultural investment</p>
                </div>
              </div>
              <div>
                <div>
                  <i class="title">Business ID</i>
                  <p class="text">#10004200211</p>
                </div>
                <div>
                  <i class="title">Business Type</i>
                  <p class="text">Individual Type</p>
                </div>
                <div>
                  <i class="title">Industry Type</i>
                  <p class="text">Agriculture</p>
                </div>
                <div>
                  <i class="title">Business Address</i>
                  <p class="text">12/15 Allen Avenue street Lekki,Lagos.</p>
                </div>
              </div>
            </div>
            <q-separator />
          </q-tab-panel>

          <q-tab-panel name="verification-documents">
            <div class="verification-documents">
              <p class="text-h6">Application Documents</p>
              <q-btn label="Upload Document" class="Button" />
            </div>
            <BusinessTable />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import BusinessTable from "./BusinessTable.vue";

export default {
  components: { BusinessTable },
  data() {
    return {
      tab: "mails",
    };
  },
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: row;
  padding: 16px 16px 24px;
  gap: 100px;
  background: #ffffff;
  border-radius: 12px;
}

.text {
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
}
.title {
  color: #666;
}
.Button {
  color: #344054;
  text-transform: capitalize;
  min-width: 159px !important;
  // background-color:;
}

.verification-documents {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 24px;
}
</style>
