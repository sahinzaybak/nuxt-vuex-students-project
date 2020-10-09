<template>
  <div class="page-task">
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
import taskWelcome from "../components/task/welcome";
import taskFilter from "../components/task/filter";
import taskList from "../components/task/task-list";
export default {
  components: { taskFilter, taskList, taskWelcome },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
