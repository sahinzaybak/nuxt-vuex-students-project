<template>
  <section class="create-task update">
    <div class="create-task__form">
      <div class="container">
        <h3 class="title">Profilini Düzenle</h3>
        <updateProfilFrom />
        <!-- Profil Güncelleme Formu-->
      </div>
    </div>
  </section>
</template>

<script>
import updateProfilFrom from "../components/update-profile/form";
export default {
  components: { updateProfilFrom },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~/assets/colors";
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
