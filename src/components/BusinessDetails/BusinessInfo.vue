<template>
  <div class="details">
    <div style="width: 50%">
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
    <div style="width: 50%">
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
</template>

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
