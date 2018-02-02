<template lang="pug">
  .card-with-heading
    .heading(:class="[headingBackgroundColor]") {{heading}}
    slot(name="card")
</template>

<script>
export default {
  mounted() {
    this.fullWidth ? (this.$el.style.width = "100%") : false;
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    fullWidth: {
      type: Boolean
    }
  },
  computed: {
    headingBackgroundColor() {
      switch (this.color) {
        case "green":
          return "green-heading";
        case "red":
          return "red-heading";
        case "blue":
          return "blue-heading";
        default:
          return "grey-heading";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.card-with-heading {
  width: 50%;
  float: left;
}

.heading {
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding: 0px 20px;
  font-size: 1.5em;
  font-weight: bold;
  color: $darkGrey;
  text-transform: uppercase;
}

.green-heading {
  background-color: $green;
}

.red-heading {
  background-color: $red;
}

.blue-heading {
  background-color: $blue;
}

.grey-heading {
  background-color: $grey;
}
</style>
