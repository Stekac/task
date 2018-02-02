<template lang="pug">
  .text-box
    slot(name="text")
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.text-box {
  width: 100%;
  background: $lighterGrey;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.35em;
}
</style>
