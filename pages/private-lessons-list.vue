<template>
  <div class="page-task private-task">
    <section class="task">
      <div class="custom-container">
        <taskWelcome />
        <!-- Görev listesi için hoşgeldin mesajı -->
        <taskFilter />
        <!-- Görev listelerini filtreleme-->
        <taskList />
        <!-- Görev listeleri-->
      </div>
    </section>
  </div>
</template>

<script>
import taskWelcome from "../components/private-lessons-list/welcome";
import taskFilter from "../components/private-lessons-list/filter";
import taskList from "../components/private-lessons-list/task-list";
export default {
  components: { taskFilter, taskList, taskWelcome },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
