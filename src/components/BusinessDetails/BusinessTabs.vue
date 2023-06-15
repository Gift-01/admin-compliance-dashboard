<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
          active-color="dark"
          indicator-color="dark"
          align="justify"
        >
          <q-tab
            name="business-details"
            label="Business Details"
            class="text-capitalize"
            style="flex: none"
          />
          <q-tab
            name="verification-documents"
            label="Verification Documents"
            class="text-capitalize"
            style="flex: none"
          />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="business-details">
            <div
              class="text-h6"
              style="color: #171717; font-weight: 700; font-size: 20px"
            >
              Business Details
            </div>
            <q-separator />
            <BusinessInfo />
            <q-separator />
          </q-tab-panel>
          <q-tab-panel name="verification-documents">
            <div class="verification-documents">
              <p
                class="text-h6"
                style="color: #171717; font-weight: 700; font-size: 20px"
              >
                Application Documents
              </p>
              <q-uploader
                url="http://localhost:4444/upload"
                label="Upload Documents"
                class="Button"
              />
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
import BusinessInfo from "./BusinessInfo.vue";

export default {
  components: { BusinessTable, BusinessInfo },
  data() {
    return {
      tab: "business-details",
    };
  },
};
</script>

<style lang="scss" scoped>
.Button {
  color: #344054;
  text-transform: capitalize;
  border: 1px solid #c6c6c6;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  min-width: 159px !important;
  // height: 43px;
}

.q-uploader__list scroll {
  padding: 1px !important;
  min-height: 1px !important;
}

.verification-documents {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  gap: 24px;
}
</style>
