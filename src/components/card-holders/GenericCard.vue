<template lang="pug">
  .generic-card
    slot(name="card")
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.generic-card{
  width: 50%;
  float: left;
}
</style>
