<template>
  <div class="detail">
    <div class="detail-wrp">
      <div class="container">
        <div class="row flex-column">
          <taskInfo /> <!-- Görev bilgileri -->
          <taskForm /> <!-- Adaylık için form doldurma -->
        </div>
      </div>
    </div>
    <taskSuccessForm /> <!--Aday olunca çıkan "başarılı" mesajı -->
  </div>
</template>

<script>
import taskInfo from "../components/task-detail/task-info";
import taskForm from "../components/task-detail/task-form";
import taskSuccessForm from "../components/task-detail/task-success-popup";
export default {
  components: { taskInfo, taskForm, taskSuccessForm },
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

.detail {
  position: relative;
  background-color: #eae8e8;
  padding: 60px 0;
  padding-bottom: 20px;
  &:after {
    content: "";
    position: absolute;
    background-image: url(https://assets.sikayetvar.com/public/images/banner-image.png);
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    height: 100%;
    top: 10vw;
    opacity: 0.4;
    background-position-x: 58vw;
    pointer-events: none;
  }
}
</style>
