<template>
  <div class="Description-container">
    <div class="wrapper">
      <div class="mini-wrapper">
        <div >
          <p class="Text">{{ name }}</p>
        </div>
        <div class="copy-text" >
          <p ref="mylink">{{ ourpassId }}</p>
          <q-btn
          flat
          @click="copyId(ourpassId)"
          icon="fas fa-copy fa-xs"
          class="copy"
    />
        </div>
        <input type="hidden" id="ourpassId" :value="ourpassId">
        <q-badge :label='status' class="Button" />
      </div>
      <div class="sub-wrapper">
        <p class="text-wrapper">Approval Status</p>
        <my-select :options="selectOptions" class="Input" label="Rejected" />
      </div>
    </div>
    <div class="description">
      <i>Business Description</i>
      <p class="Text">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import MySelect from "src/components/UI/TextInput.vue";
import { copyToClipboard } from 'quasar'
export default {

  props:{
    description:String,
    name:String,
    status:String
  },
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
      ourpassId:'Ourpass/SDFGHK./HJKO765432456'
    };
  },
  methods:{
    copyId(ourpasskey){
      copyToClipboard(ourpasskey)
  .then(() => {
    // success!
    this.$q.notify({
      type:"positive",
      message:"ourpasskey sucessfully copied to clipboard",
      position:"center",
      timeout:10
    })
  })
  .catch((error) => {
    console.log(error)
  })
        },
  }
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
.copy-text{
  display: flex;
  gap: 1rem;
  cursor: pointer;
  align-items: center;
}
.copy{
  margin-top: -1.3rem;
}
</style>
