<template>
  <div class="container">
    <BusinessHeader />
    <BusinessDescription :description="description" :name="name"  :status="status" />
    <BusinessTabs :name="name" :date="date" :info='info' />
  </div>
</template>

<script>
import BusinessHeader from "src/components/BusinessDetails/BusinessHeader.vue";
import BusinessDescription from "src/components/BusinessDetails/BusinessDescription.vue";
import BusinessTabs from "src/components/BusinessDetails/BusinessTabs.vue";

export default {
  components: { BusinessHeader, BusinessDescription, BusinessTabs },
  created() {
    this.getData()
  },
   data(){
    return{
      description:'',
      name:'',
      status:'',
      date:'',
      info:{}
      
    }
   
   },
  methods: {
    
 
    async getData(){
                try{
                    const response=await  this.$api.get('api/business/details')
                const data= await response.data.data
                const detailsData=data.find(item=>item.businessName==this.$route.params.id)
                this.info=detailsData
                 console.log(detailsData)
                 this.description=detailsData.businessDescription
                 this.name=detailsData.businessName
                 this.status=detailsData.verificationStatus
                 this.date=detailsData.dateCreated
                }catch(error){
                    console.log(error)
                }
                
            },
 
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #fbfbfb;
  min-height: 100vh;
}
</style>
