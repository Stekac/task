<template lang="pug">
  .card-with-border(:class="[borderPositionComp, borderColorComp]")
    slot(name="card")
</template>

<script>
export default {
  props: {
    "border-color": {
      type: String,
      required: true
    },
    "border-position": {
      type: String,
      required: true
    }
  },
  computed: {
    borderColorComp() {
      switch (this.borderColor) {
        case "light":
          return "border-color-light";
        case "dark":
          return "border-color-dark";
        default:
          return "border-color-light";
      }
    },
    borderPositionComp() {
      switch (this.borderPosition) {
        case "left":
          return "left-border";
        case "right":
          return "right-border";
        case "top":
          return "top-border";
        case "bottom":
          return "bottom-border";
        default:
          return "border-none";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.card-with-border {
  width: 50%;
  float: left;
  position: relative;
}

.card-with-border:after {
}

.border-color-light:after {
  background: $lightGrey;
}
.border-color-dark:after {
  background: $grey;
}

@each $side in left, right, top, bottom {
  .#{$side}-border::after {
    content: " ";
    z-index: 9;
    position: absolute;
    height: 100%;
    width: 10px;
    @if ($side == left) {
      height: 100%;
      width: 10px;
      top: 0px;
    }
    @if ($side == right) {
      background: red;
    }
    @if ($side == top) {
      height: 10px;
      width: 100%;
      top: 0px;
    }
    @if ($side == bottom) {
      background: red;
    }
  }
}
</style>
