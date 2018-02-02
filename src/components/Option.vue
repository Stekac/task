<template lang="pug">
  .option(:class="[selectedPreset]")
    .option-heading
      .icon
        img(:src="image")
        .arrow-down
      span {{heading}}
    .option-body
      slot(name="option-body")
</template>

<script>
export default {
  props: {
    preset: {
      type: String,
      required: true
    },
    heading: {
      type: String
    },
    image: {
      type: String
    }
  },
  computed: {
    selectedPreset() {
      switch (this.preset) {
        case "green":
          return "green-preset";
        case "blue":
          return "blue-preset";
        default:
          return "green-preset";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.option {
  position: relative;
  width: 100%;
  background: $backgroundGrey;
  display: inline-block;
}
.green-preset {
  .option-heading {
    background: $green;
  }
  .icon {
    background: lighten($green, $colorBrightnessChange);
  }
  .arrow-down {
    border-top: 20px solid lighten($green, $colorBrightnessChange);
  }
}

.blue-preset {
  .option-heading {
    background: $blue;
  }
  .icon {
    background: lighten($blue, $colorBrightnessChange);
  }
  .arrow-down {
    border-top: 20px solid lighten($blue, $colorBrightnessChange);
  }
}

.option-heading {
  min-height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  color: $darkGrey;
  font-size: 1.5em;
  text-transform: uppercase;
  padding-left: 150px;
  .icon {
    position: absolute;
    display: inline-block;
    left: 0px;
    top: 0px;
    width: 120px;
    height: 100px;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      padding: 10px;
    }
    .arrow-down {
      position: absolute;
      top: 100%;
      width: 0;
      height: 0;
      border-left: 60px solid transparent;
      border-right: 60px solid transparent;
      border-top: 20px solid none;
    }
  }
}
.option-body {
  padding: 15px;
  font-size: 1.15em;
  line-height: 1.5em;
  color: $darkGrey;
}
</style>
