<template>
  <section class="create-task">
    <div class="create-task__form">
      <div class="container">
        <studentFormWelcome />
        <!-- Öğrenci kayıt için ön bilgiler-->
        <studentControlForm />
        <!-- Öğenci kayıt formu -->
      </div>
    </div>
  </section>
</template>

<script>
import studentControlForm from "../components/student-control/form";
import studentFormWelcome from "../components/student-control/welcome";
export default {
  components: { studentControlForm, studentFormWelcome },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
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
