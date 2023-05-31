<template>
  <div class="q-pa-md">
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <q-td key="businessName" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="businessId" :props="props">
              {{ props.row.businessId }}
          </q-td>
          <q-td key="verificationStatus" :props="props" >
            <q-badge class="approved"  v-if="props.row.verificationStatus=='Approved'">
              {{ props.row.verificationStatus }}
            </q-badge>
            <q-badge class="pending"  v-else-if="props.row.verificationStatus=='Pending Approval'">
              {{ props.row.verificationStatus }}
            </q-badge>
            <q-badge class="queried" v-else>
              {{ props.row.verificationStatus }}
            </q-badge>
          </q-td>
          <q-td key="businessType" :props="props">
              {{ props.row.businessType }}
          </q-td>
          <q-td key="dateRequested" :props="props">
              {{ props.row.dateRequested }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
// import {rows} from '../../baseRow.js'
const columns = [
  {
    name: 'businessName',
    required: true,
    label: 'Business Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'businessId', align: 'left', label: 'Business ID', field: 'business Id', sortable: true },
  { name: 'verificationStatus', align:"center", label: 'Verification Status', field: 'Verification Status', sortable: true },
  { name: 'businessType', align:"center", label: 'Business Type', field: 'Business Type' },
  { name: 'dateRequested', align:"center", label: 'Date requested', field: 'Date Requested' },
]


const router=useRouter()
export default {

  data(){
    return{
      columns,
    }
  },
  methods:{
    onRowClick(props){
      this.$router.push({path:`businesspage/${props.name}`})
    }
  },
  props:{
     rows:{
      type:Array,
      default:()=>[]
     }
  }

  }

 
</script>

<style lang="scss" scoped>
.queried{
  color: #B42318;
  background-color: #FEF3F2;
}
.approved{
  color: #027A48;
  background-color: #ECFDF3;
}
.pending{
  color: #B54708;
  background-color: #FFFAEB;
}
</style>