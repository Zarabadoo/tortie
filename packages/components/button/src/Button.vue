<template>
  <button class="trt-button" type="button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "TrtButton",
  inheritAttrs: false
};
</script>

<style lang="scss" scoped>
.trt-button {
  padding: 0.6rem 1rem;
  font: {
    size: 1rem;
    weight: bold;
  }
  line-height: 1.5;
  vertical-align: baseline;
  color: rgba(#fff, 0.92);
  border: 0.1rem solid darken(blue, 4);
  border-radius: 0.2rem;
  background: darken(blue, 3);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover,
  &:focus {
    &:not([disabled]) {
      color: #fff;
      border-color: blue;
      background: blue;
    }
  }

  &:focus:not([disabled]) {
    outline: none;
    box-shadow: 0 0 0.6rem rgba(blue, 0.8);
  }

  &:active {
    transform: scale(0.98) translateY(0.01rem);
  }

  &[disabled] {
    opacity: 0.4;
    filter: grayscale(60%);
    cursor: not-allowed;
  }

  svg {
    display: inline-block;
    margin: 0 0 -0.2rem 0.2rem;
    fill: currentColor;
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
