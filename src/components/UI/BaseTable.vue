<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <q-td key="businessName" :props="props">
            {{ props.row.businessName }}
          </q-td>
          <q-td key="businessId" :props="props">
              {{ props.row.businessId }}
          </q-td>
          <q-td key="verificationStatus" :props="props">
            <q-chip v-if="props.row.verificationStatus=='Approved'" style='background-color: #ECFDF3 ;color:#027A48;'>
              {{ props.row.verificationStatus }}
            </q-chip>
            <q-chip v-else-if="props.row.verificationStatus=='Pending Approval'" style='background-color: #FFFAEB;color:#B54708;'>
              {{ props.row.verificationStatus }}
            </q-chip>
            <q-chip v-else  style="background-color: #FEF3F2;color:#B42318;">
              {{ props.row.verificationStatus }}
            </q-chip>
          </q-td>
          <q-td key="businessType" :props="props">
            
              {{ props.row.businessType }}
          </q-td>
          <q-td key="dateCreated" :props="props">
              {{ props.row.dateCreated }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { columns, items as rows } from "../../items";
    export default {
        // created(){
        //   this.getData()
        // },
        data(){
        return{
            rows,
            columns
        }    
        },
        methods:{
            onRowClick(row){
      this.$router.push({ path: `/businesses/${row.businessName}` });

    //   to access the unique business name(which you will find arr.find()) in the business details page :this.$route.params.id

            },
            async getData(){
                try{
                    const response=await  this.$api.get('api/business/details')
                const data= await response.data
                console.log(data)
                }catch(error){
                    console.log(error)
                }
                
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>