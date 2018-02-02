<template lang="pug">
  .card
    .info
      slot(name="info") 
    .image
      img(:src="imgUrl")
    .circle(v-if="circle") {{circle.text}}
</template>

<script>
export default {
  mounted() {
    let circle = this.$el.querySelector(".circle");
    if (circle) {
      circle.classList.add(`circle-${this.circle.color}`);
    }

    let { color, dimmed } = this.preset;
    this.$el.classList.add(`card-${color}-${dimmed ? "dimmed" : "normal"}`);
  },
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    preset: {
      type: Object,
      default: () => {
        return {
          color: "grey",
          dimmed: false
        };
      }
    },
    circle: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.card {
  position: relative;
  display: flex;
  align-items: center;
  height: 200px;
  @include defaultText;
  clear: both;
}
.info {
  flex-basis: 60%;
  padding: 30px;
}
.image {
  flex-basis: 40%;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    padding: 10px;
  }
}
.circle {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.15em;
  z-index: 10;
}
.circle-red {
  background: $red;
}
.circle-green {
  background: $green;
}

//type of cards
.card-light-normal {
  background: $lighterGrey;
}
.card-light-dimmed {
  background: darken($lighterGrey, $colorBrightnessChange);
}

.card-grey-normal {
  background: $lightGrey;
}
.card-grey-dimmed {
  background: darken($lightGrey, $colorBrightnessChange + 5); //so it wont be the same as page bg
}

.card-darkgrey-normal {
  background: $darkGrey;
}
.card-darkgrey-dimmed {
  background: darken($darkGrey, $colorBrightnessChange);
}

.card-orange-normal {
  background: $orange;
}
.card-orange-dimmed {
  background: darken($orange, $colorBrightnessChange);
}
</style>


