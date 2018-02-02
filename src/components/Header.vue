<template lang="pug">
  .header
    .quick-guide A quick guide to
    .container
      h1 Binary Trading
      .line
      .info 
        | Binary options are considered exotic options, but they're some of the easiest
        | to navitate. You can trade in anything from stocks and foreign currencies to
        | commodities like oil, gold, silver. Based solely on your knowledge of an asset's 
        | value at a given time, this is a quick way to turn a potential profit.
    
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.header {
  background: $darkGrey;
  padding: 0px 30px 30px 30px;
  text-align: center;

  .quick-guide {
    background: $lightGrey;
    transform: translateY(50%);
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    padding: 0px 15px;
    color: $lighterGrey;
  }
  .container {
    border: 3px solid $mediumGrey;

    h1 {
      font-size: 4.5em;
      font-weight: bold;
      color: $blue;
      text-transform: uppercase;
      margin-bottom: 0px;
    }

    .line{
      background: $mediumGrey;
      height: 3px;
      width: 50%;
      margin-left: 25%;
    }

    .info{
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 0px 30px;
      @include defaultText;
    }
  }
}
</style>

