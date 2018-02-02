<template lang="pug">
  .full-width-card
    slot(name="card")
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.full-width-card{
  width: 100%;
  float: left;
}
</style>
