<template>
  <section class="applicant">
    <div class="custom-container">
      <taskInfo :applicantList="applicantList" />
      <!-- Görevin adı ve fiyat bilgisi-->
      <applicantList :applicantList="applicantList" />
      <!-- Aday listesi -->
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import taskInfo from "~/components/applicant/task-info";
import applicantList from "~/components/applicant/applicant-list";

export default {
  components: { applicantList, taskInfo },
  data() {
    return {};
  },
   created(){
     this.applicantLists();
  },
   computed: {
    ...mapState({ applicantList: state => state.applicants.applicantList }), //İlan detay
  },
   methods: {
    ...mapActions({ fetchApplicantList: "applicants/fetchApplicantList" }),
    applicantLists() {
      this.fetchApplicantList(this.$route.params.taskId);
    }
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
