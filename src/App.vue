<template lang="pug">
  .container
    Header
    router-view
    Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components:{
    Header,
    Footer
  }
}
</script>


<style lang="scss">
@import "./styles/base";
@import "./styles/global";
</style>

