<template>
  <section class="create-task">
    <div class="create-task__form">
      <div class="custom-container">
        <privateLessonsApplicantWelcome />
        <!-- Özel Ders kategorisi ve dersi için ön bilgiler-->
        <privateLessonsApplicantStudents />
        <!-- Seçilen dersi veren öğrencilerin listesi -->
        <privateLessonsApplicantPopup />
        <!-- Aday seçildiği zaman çıkacak popup-->
      </div>
    </div>
  </section>
</template>

<script>
import privateLessonsApplicantWelcome from "../components/private-lessons-applicant/welcome";
import privateLessonsApplicantStudents from "../components/private-lessons-applicant/list";
import privateLessonsApplicantPopup from "../components/private-lessons-applicant/private-lessons-selected-popup";
export default {
  components: {
    privateLessonsApplicantWelcome,
    privateLessonsApplicantStudents,
    privateLessonsApplicantPopup
  },
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
