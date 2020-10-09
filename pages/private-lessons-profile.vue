<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <profileImage />
          <!-- Profil resmi kısmı-->
        </div>
        <div class="col-md-9">
          <profileInfo />
          <!-- Kişi bilgileri-->
        </div>
        <privateLessonsApplicantPopup />
        <!-- Aday seçildiği zaman çıkacak popup-->
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from "../components/profile/profile-image";
import profileInfo from "../components/private-lessons-profile/profile-info";
import privateLessonsApplicantPopup from "../components/private-lessons-applicant/private-lessons-selected-popup";
export default {
  components: { profileImage, profileInfo, privateLessonsApplicantPopup },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.header {
  position: relative;
  background: #282929;
  background-image: url("https://epics.ieee.org/wp-content/uploads/2016/08/bigstock-Diverse-Architect-People-Group-98046365.jpg");
  background-size: cover;
  background-position-x: right;
  background-position-y: 460px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #292928e3, #000c40f0);
    left: 0;
    top: 0;
    z-index: -1;
  }
}
</style>
