<template lang="pug">
  .footer
    .logo
      img(:src="footerLogo")
    .sources
      h3 Sources
      ul.links
        li(v-for="link in links")
          a(:href="link") {{link}}
</template>

<script>
export default {
  data() {
    return {
      footerLogo: "https://www.returndates.com/backgrounds/blacklist.logo.png",
      links: [
        "https://www.investopedia.com/taxes/how-gop-tax-bill-affects-you/",
        "https://www.investopedia.com/university/economics/",
        "https://www.investopedia.com/university/stocks/",
        "https://www.investopedia.com/news/"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.footer {
  background: $reallyDark;
  text-align: center;
  img {
    height: 150px;
    margin: 40px 0px 80px 0px;
    max-width: 100%;
    padding: 0px 20px;
  }
  .sources {
    padding: 20px 100px;
    text-align: left;
    h3 {
      display: inline-block;
      color: $darkGrey;
      margin: 0px;
      padding: 10px 25px;
      background: $blue;
      text-transform: uppercase;
    }
    ul {
      list-style: none;
      padding-left: 30px;
      li {
        a {
          @include defaultText;
          text-decoration: none;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
