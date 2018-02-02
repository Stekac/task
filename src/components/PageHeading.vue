<template lang="pug">
  .page-heading
    .left-image
      img(:src="imgUrl")
    .right-content
      .header(:class="[headingColor]") {{heading}}
      .description {{description}}
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      default: "Generic Header"
    },
    description: {
      type: String,
      default: "Generic Description"
    },
    color: {
      type: String,
      default: "red"
    }
  },
  computed: {
    headingColor() {
      switch (this.color) {
        case "grey":
          return "grey-header";
        case "orange":
          return "orange-header";
        case "green":
          return "green-header";
        case "blue":
          return "blue-header";
        case "red":
          return "red-header";
        default:
          return "grey-header";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.page-heading {
  display: flex;
}
.left-image {
  float: left;
  width: 200px;
  @media only screen and (max-width: 768px) {
    width: 150px;
  }
  background: white;
  img {
    padding: 20px;
    width: 100%;
    height: 100%;
  }
}
.right-content {
  float: left;
  width: calc(100% - 200px);
  @media only screen and (max-width: 768px) {
    width: calc(100% - 150px);
  }
  .header {
    min-height: 60px;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    padding: 0px 30px;
    text-transform: uppercase;
    @media only screen and (max-width: 768px) {
      font-size: 1.15em;
      padding: 10px;
    }
  }
  .description {
    background: $backgroundGrey;
    min-height: 90px;
    font-size: 1.15em;
    line-height: 1.5em;
    padding: 15px 30px;
    @media only screen and (max-width: 768px) {
      font-size: 1.15em;
      padding: 10px;
    }
  }
}
.grey-header {
  background: $lightGrey;
}

.orange-header {
  background: $orange;
}
.green-header {
  background: $green;
}
.blue-header {
  background: $blue;
}
.red-header {
  background: $red;
}
</style>
