<template>
  <trt-progressbar v-bind="$attrs" v-slot="{ progressFactor, attributes }">
    <div class="trt-progressbar-linear" v-bind="attributes">
      <div class="trt-progressbar-linear__track">
        <div
          class="trt-progressbar-linear__indicator"
          :style="`transform: scaleX(${progressFactor})`"
        ></div>
      </div>
    </div>
  </trt-progressbar>
</template>

<script>
import TrtProgressbar from "./Progressbar.vue";

export default {
  name: "TrtProgressbarLinear",
  components: {
    TrtProgressbar
  }
};
</script>

<style lang="scss" scoped>
.trt-progressbar-linear {
  margin: 0 1rem;

  &__track {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    height: 1rem;
    overflow: hidden;
    border-radius: 0.2rem;
    background: rgba(#000, 0.14);
    box-shadow: inset 0 0 0.6rem rgba(blue, 0.4);
  }

  &__indicator {
    flex: 1 1 100%;
    transform-origin: left;
    background: blue;
  }
}
</style>
