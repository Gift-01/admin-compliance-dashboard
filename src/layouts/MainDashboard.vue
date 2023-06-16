<template>
  <div class="dashboard">
    <div class="hero_heading">
      <p>Business Overview</p>
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
    <SearchBar />
    <BaseTable/>
    <!-- <TableContent /> -->
  </div>
</template>

<script>
// import TableContent from "../components/UI/TableContent.vue";
import BaseTable from '../components/UI/BaseTable.vue' 
import SearchBar from "../components/UI/SearchBar.vue";
import { defineComponent } from "vue";
import HomeCard from "../components/UI/HomeCard.vue";
import MoneyOne from "../assets/MoneyOne.svg";
import MoneyTwo from "../assets/MoneyTwo.svg";
import MoneyThree from "../assets/MoneyThree.svg";
import MySelect from "../components/UI/TextInput.vue";

export default defineComponent({
  name: "MainDashboard",
  components: {
    // TableContent,
    BaseTable,
    SearchBar,
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
  margin-left: 2.5%;
  margin-right: 2.5%;
  padding: 12px, 16px, 12px, 16px;
  border-bottom: 1px solid rgba(216, 243, 242, 1);
  padding-top: 1rem;
}
.hero_heading p {
  font-size: 1rem;
  font-weight: 500;
  padding-top: 1.5rem;
  @media screen and (max-width: 760px) {
    padding-top: 2rem;
  }
}
.input {
  margin-top: 1rem;
  padding: 10px, 10px, 10px, 16px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ced0d0, #ced0d0);
  margin-bottom: 0.5rem;
  width: 10rem;
  @media screen and (max-width: 760px) {
    width: 8rem;
  }
}

.dashboard {
  margin-top: 2rem;
  background: rgba(255, 255, 255, 1);
  margin-left: 2.5%;
  margin-right: 2.5%;
}
</style>
