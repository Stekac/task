<template lang="pug">
  div
    PagePart(color="dark")
      div(slot="content")
        PageHeading(:imgUrl="imagePlaceholder" heading="some heading text" description="Some description for the title" color="blue")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'grey', dimmed: false}")
            span(slot="info" v-html="dummyhtmlFromServer")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'grey', dimmed: true}")
            span(slot="info") This html is hardcoded with the same <b class="red-text">colorful</b> text 

    PagePart(color="light")
      div(slot="content")
        Option(heading="Some heading Text" image="http://via.placeholder.com/100x100" preset="blue")
          div(slot="option-body")
            .two-columns
              .column Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              .column Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Option(heading="Some heading Text" image="http://via.placeholder.com/100x100" preset="green")
          div(slot="option-body")
            .three-columns
              .column Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              .column Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              .column Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    PagePart(color="dark")
      div(slot="content")
        PageHeading(:imgUrl="imagePlaceholder" heading="some heading text" description="Some description for the title" color="orange")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'orange', dimmed: false}")
            span(slot="info" v-html="dummyhtmlFromServer")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'orange', dimmed: true}")
            span(slot="info" v-html="dummyhtmlFromServer")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'grey', dimmed: false}")
            span(slot="info" v-html="dummyhtmlFromServer")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'grey', dimmed: true}")
            span(slot="info" v-html="dummyhtmlFromServer")

    PagePart(color="light")
      div(slot="content")
        PageHeading(:imgUrl="imagePlaceholder" heading="some heading text" description="Some description for the title" color="red")
        CardHolderBorder(borderColor="light" borderPosition="top")
          Card(slot="card" :imgUrl="imagePlaceholder" :circle="{text: 1, color:'red'}" :preset="{color: 'darkgrey', dimmed: false}")
            span(slot="info" v-html="dummyhtmlFromServer")
        CardHolderBorder(borderColor="light" borderPosition="top")
          Card(slot="card" :imgUrl="imagePlaceholder" :circle="{text: 2, color:'red'}" :preset="{color: 'darkgrey', dimmed: true}")
            span(slot="info" v-html="dummyhtmlFromServer")
        CardHolderBorder(borderColor="light" borderPosition="left")
          Card(slot="card" :imgUrl="imagePlaceholder" :circle="{text: 'A', color:'green'}" :preset="{color: 'light', dimmed: false}")
            span(slot="info" v-html="dummyhtmlFromServer")
        CardHolderBorder(borderColor="light" borderPosition="left")
          Card(slot="card" :imgUrl="imagePlaceholder" :circle="{text: 'C', color:'green'}" :preset="{color: 'light', dimmed: true}")
            span(slot="info" v-html="dummyhtmlFromServer")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :circle="{text: 'B', color:'green'}" :preset="{color: 'grey', dimmed: false}")
            span(slot="info" v-html="dummyhtmlFromServer")
        GenericCard
          Card(slot="card" :imgUrl="imagePlaceholder" :circle="{text: 'D', color:'green'}" :preset="{color: 'grey', dimmed: true}")
            span(slot="info" v-html="dummyhtmlFromServer")

    PagePart(color="dark")
      div(slot="content")
        PageHeading(:imgUrl="imagePlaceholder" heading="some heading text" description="Some description for the title" color="green")
        CardHolderHeading(heading="Some Header" color="green")
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'grey', dimmed: false}")
            span(slot="info" v-html="dummyhtmlFromServer")
        CardHolderHeading(heading="Some Header" color="green")
          Card(slot="card" :imgUrl="imagePlaceholder" :preset="{color: 'grey', dimmed: true}")
            span(slot="info" v-html="dummyhtmlFromServer")
        CardHolderHeading(heading="Some Header" color="blue" :fullWidth="true")
          Card(slot="card" :imgUrl="imagePlaceholder")
            span(slot="info" v-html="dummyhtmlFromServer")
        SimpleTextBox
          span(slot="text") Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            | sed do eiusmod tempor incididunt ut labore et dolore magna
            | aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            | laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            | reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            | sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
            | est laborum
      
</template>

<script>
import PagePart from "@/components/PagePart";
import PageHeading from "@/components/PageHeading";
import GenericCard from "@/components/card-holders/GenericCard";
import FullWidthCard from "@/components/card-holders/FullWidthCard";
import CardHolderBorder from "@/components/card-holders/CardHolderBorder";
import CardHolderHeading from "@/components/card-holders/CardHolderHeading";
import Card from "@/components/Card";
import Option from "@/components/Option";
import SimpleTextBox from "@/components/SimpleTextBox";

import Api from "../js/Api";
import ErrorHandler from "../js/ErrorHandler";

export default {
  mounted() {
    this.getDummyHtml();
  },
  data() {
    return {
      dummyhtmlFromServer: "",
      imagePlaceholder: 'http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg'
    };
  },
  components: {
    PagePart,
    PageHeading,
    GenericCard,
    FullWidthCard,
    CardHolderBorder,
    CardHolderHeading,
    Card,
    Option,
    SimpleTextBox
  },
  methods: {
    getDummyHtml() {
      Api.getDummyData()
        .then(data => {
          this.dummyhtmlFromServer = data;
          console.log(data);
        })
        .catch(ErrorHandler.handle);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.two-columns {
  width: 100%;
  height: 150px;
  .column {
    width: calc(100% / 2);
    height: 100%;
    float: left;
    padding: 15px;
    border-right: 1px solid $lighterGrey;
    &:last-child {
      border: none;
    }
  }
}

.three-columns {
  width: 100%;
  height: 150px;
  .column {
    width: calc(100% / 3);
    height: 100%;
    float: left;
    padding: 15px;
    border-right: 1px solid $lighterGrey;
    &:last-child {
      border: none;
    }
  }
}
</style>
