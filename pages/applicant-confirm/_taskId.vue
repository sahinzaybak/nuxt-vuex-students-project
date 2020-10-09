<template>
  <section class="confirm">
    <div class="container">
      <applicantConfirmWelcome />
      <!-- Görev bilgileri-->
      <applicantInfo :selectedPersonDetail="selectedPersonDetail" />
      <!-- Göreve seçilen adayın bilgileri-->
      <applicantDontDoPopup :selectedPersonDetail="selectedPersonDetail"/>
      <!-- Görevi yapmadıysa çıkacka olan modal -->
      <applicantDoPopup :selectedPersonDetail="selectedPersonDetail"/>
      <!-- Görevi başarıyla yaptıysa çıkacak olan modal-->
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import applicantConfirmWelcome from "~/components/applicant-confirm/welcome";
import applicantInfo from "~/components/applicant-confirm/applicant-info";
import applicantDontDoPopup from "~/components/applicant-confirm/applicant-dont-do-popup";
import applicantDoPopup from "~/components/applicant-confirm/applicant-do-popup";
export default {
  components: {
    applicantConfirmWelcome,
    applicantInfo,
    applicantDontDoPopup,
    applicantDoPopup
  },
  data() {
    return {};
  },
  created() {
    this.applicantSelectedPersonDetail();
  },
  computed: {
    ...mapState({ selectedPersonDetail: state => state.applicants.selectedPersonDetail }), //İlan detay
  },
  methods:{
     ...mapActions({ fetchApplicantSelectedPersonDetail: "applicants/fetchApplicantSelectedPersonDetail" }),
     applicantSelectedPersonDetail(){
        this.fetchApplicantSelectedPersonDetail(this.$route.params.taskId)
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

.confirm {
  .dont-forget {
    p {
      margin-bottom: 12px;
      font-size: 16px;
      line-height: 1.7;
      font-weight: 400;
      opacity: 0.9;
    }
  }
}
</style>
