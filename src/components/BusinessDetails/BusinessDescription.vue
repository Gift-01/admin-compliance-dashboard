<template>
  <div class="Description-container">
    <div class="wrapper">
      <div class="mini-wrapper">
        <div v-if="active">
          <p class="Text">Craft Elevate</p>
        </div>
        <div @mouseover="showText = true" @mouseleave="showText = false">
          <p>Ourpass/SDFGHK./HJKO765432456</p>
        </div>
        <p v-if="showText">Copy</p>
        <q-badge label="Queried" class="Button" />
      </div>
      <div class="sub-wrapper">
        <p class="text-wrapper">Approval Status</p>
        <my-select :options="selectOptions" class="Input" label="Rejected" />
      </div>
    </div>
    <div class="description">
      <i>Business Description</i>
      <p class="Text">
        Ourpass lending product to merchants. However, we also do not have all
        the time to work on a high tech feature for this, we will be coming up
        with a low tech implementation for pilot stage.
      </p>
    </div>
  </div>
</template>

<script>
import MySelect from "src/components/UI/TextInput.vue";
export default {

  components: { MySelect },
  

  data() {
    return {
      showText: false,
      selectOptions: [
        "In Review",
        "Rejected",
        "Approved",
        "Provide more Information",
        "Queried Document",
        "Awaiting Document Submission",
      ],
    };
  },

  // methods: {
  //   async getBusinesses() {
  //     try {
  //       const response = await this.$api.get("/business/details");
  //       this.rows = response.data;
  //       return response.data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.Description-container {
  background-color: #fff !important;
  padding: 16px;
  gap: 10px !important;
  margin: 36px 24px;
  min-height: 219px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
.mini-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sub-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 45px;
}
.text-wrapper {
  margin: 0 10px;
}

.Button {
  color: #b42318;
  background-color: #fef3f2;
  border-radius: 16px;
  width: 62px;
  height: 21px;
  padding: 2px 8px;
}
.description {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 18px 0px;
}
.Text {
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 500;
}
.Input {
  width: 136px;
  border: 1px solid #ced0d0;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .wrapper {
    display: block;
  }
  .sub-wrapper {
    gap: 35px;
  }
}
</style>
