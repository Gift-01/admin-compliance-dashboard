<template>
  <div class="details">
    <div style="width: 50%">
      <div>
        <i class="title"> Business Name</i>
        <p class="text"> {{ info.businessName }}</p>
      </div>
      <div>
        <i class="title">Date created</i>
        <p class="text">{{ info.dateCreated }} 9:37am</p>
      </div>
      <div>
        <i class="title">Business Size</i>
        <p class="text"> {{ info.businessSize }}</p>
      </div>
      <div>
        <i class="title">Business Category</i>
        <p class="text">{{ info.businessCategory }}</p>
      </div>
    </div>
    <div style="width: 50%">
      <div>
        <i class="title">Business ID</i>
        <p class="text">{{ info.businessID }}</p>
      </div>
      <div>
        <i class="title">Business Type</i>
        <p class="text">{{ info.businessType }}</p>
      </div>
      <div>
        <i class="title">Industry Type</i>
        <p class="text">Agriculture</p>
      </div>
      <div>
        <i class="title">Business Address</i>
        <p class="text">{{ info.businessAddress }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props:{
    info:Object
  }
}
</script>
<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: row;
  padding: 16px 16px 24px;
  gap: 100px;
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
}

.text {
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
}
.title {
  color: #666;
}
</style>
