<template>
  <q-page class="landing_page">
    <div class="hero_heading">
      <h5>Business Overview</h5>
      <my-select :options="selectOptions" class="input" label="All time" />
    </div>
    <div class="hero_content">
      <HomeCard
        :imageSource="MoneyOne"
        total="43"
        heading="Total Businesses"
        :backgroundColor="'rgba(216, 243, 242, 1)'"
      />
      <HomeCard
        :imageSource="MoneyTwo"
        total="32"
        heading="Approved Businesses"
        :backgroundColor="'rgba(209, 250, 223, 1)'"
      />
      <HomeCard
        :imageSource="MoneyThree"
        total="11"
        heading="Pending Approvals"
        :backgroundColor="'rgba(251, 235, 230, 1)'"
      />
    </div>
    <TableContent />
  </q-page>
</template>

<script>
import TableContent from "src/components/UI/TableContent.vue";
import { defineComponent } from "vue";
import HomeCard from "../components/UI/HomeCard.vue";
import MoneyOne from "../assets/MoneyOne.svg";
import MoneyTwo from "../assets/MoneyTwo.svg";
import MoneyThree from "../assets/MoneyThree.svg";
import MySelect from "src/components/UI/TextInput.vue";

export default defineComponent({
  name: "LandingPage",

  components: {
    TableContent,
    HomeCard,
    MySelect,
  },

  data() {
    return {
      MoneyOne: MoneyOne,
      MoneyTwo: MoneyTwo,
      MoneyThree: MoneyThree,
      selectOptions: ["Today", "yesterday", "Last 7 days", "Custom Duration"],
    };
  },
});
</script>

<style scoped>
.hero_content {
  display: flex;
  justify-content: space-between;
}

.hero_heading {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 2.5%;
  padding-right: 2.5%;
}
.input {
  margin-top: 3rem;
}
</style>
