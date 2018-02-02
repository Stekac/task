<template lang="pug">
  .page-part-container(:class="[background]")
    slot(name="content")
</template>

<script>
export default {
  props: {
    color: {
      type: String
    }
  },
  computed: {
    background() {
      switch (this.color) {
        case "light":
          return "light-background";
        case "dark":
          return "dark-background";
        default:
          return "light-background";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.page-part-container {
  width: 100%;
  float: left;
  padding: 30px;
}
.light-background {
  background: $lighterGrey;
}
.dark-background {
  background: $grey;
}
</style>
