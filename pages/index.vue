<template>
  <div class="home">
    <slider />
    <howDoIt />
    <tasks />
    <sliderLessons />
    <privateLessons />
    <privateLessonsList />
    <summaryComp />
    <sss />
  </div>
</template>

<script>
import slider from "../components/home/slider";
import howDoIt from "../components/home/how-do-it";
import tasks from "../components/home/tasks";
import sliderLessons from "../components/home/slider-lessons";
import privateLessons from "../components/home/private-lessons";
import privateLessonsList from "../components/home/private-lessons-list";
import sss from "../components/home/sss";
import summaryComp from "../components/home/summary";
export default {
  components: { slider, howDoIt, tasks, sss, summaryComp, sliderLessons, privateLessons, privateLessonsList },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
