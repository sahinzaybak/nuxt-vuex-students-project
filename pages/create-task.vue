<template>
  <section class="create-task">
    <div class="create-task__form">
      <div class="container">
        <h2 class="title mb-4">Görev Oluştur</h2>
        <p class="create-task__desc">
          Aşağıdaki görev formunu doldur, ve görevine aday olan
          <br />öğrencilerden birini seç ve işini kolayca yaptır.
        </p>
        <createTaskForm />
        <!-- Yeni göerv oluşturma formu-->
      </div>
    </div>
    <formInfo />
    <!-- "Formu doldurursam ne olacak" bilgileri-->
  </section>
</template>

<script>
import createTaskForm from "../components/create-task/form";
import formInfo from "../components/create-task/form-info";
export default {
  components: { createTaskForm, formInfo },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/colors";
// .header {
//   position: relative;
//   background: #282929;
//   background-image: url("https://epics.ieee.org/wp-content/uploads/2016/08/bigstock-Diverse-Architect-People-Group-98046365.jpg");
//   background-size: cover;
//   background-position-x: right;
//   background-position-y: 460px;
//   &:after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(to right, #292928e3, #000c40f0);
//     left: 0;
//     top: 0;
//     z-index: -1;
//   }
// }
</style>
