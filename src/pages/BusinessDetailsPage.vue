<template>
    <div>
    <h1>Business details Page</h1>
    </div>
</template>

<script>

export default({
    mounted() {
      this.getid()
},
     methods:{
        getid(){
        console.log(this.$route)
        }
     }
})
</script>

<style lang="scss" scoped>

</style>