<template>
  <div class="col-md-6 detail-right" v-if="taskDetail.createdUserId != userInfo.info[0]._id">
    <div class="detail-form mt-1">
      <p class="mb-2 fw-600">Bu görevi yapmak istiyorum, Çünkü;</p>
      <textarea v-model="applicantMessage" placeholder="Bu alanı doldurman seçilme şansını 100% etkiler."></textarea>
      <a class="main-button green mt-2 color-white" @click="doApplicant" v-b-modal.modal-success v-if="universityControl">Adaylık İsteği Gönder</a>
      <nuxt-link to="/student-control" class="main-button green mt-2 color-white" v-if="!universityControl">Adaylık İsteği Gönder</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
     props:["taskDetail","userInfo","universityControl"],
  data() {
    return {
       applicantMessage:''
    };
  },
  methods:{
      ...mapActions({ fetchDoApplicant: "task/fetchDoApplicant"}),
     doApplicant(){
       this.fetchDoApplicant({
          taskId:this.$store.state.task.taskDetail._id, //taskId
          applicantOwner: this.$store.state.task.taskDetail.createdUserId,
          message: this.applicantMessage
       });
     },
  }
};
</script>

<style lang="scss">
.detail {
  &-form {
    transition: all 0.3s;
    p {
      font-size: 14px;
    }
    input {
      background-color: rgba(255, 255, 255, 0.90196);
      width: 100%;
      height: 47px;
      border: 0;
      padding: 0 16px;
      font-size: 14.1px;
      border-radius: 6px;
      box-shadow: 0 5px 9px 1px rgba(0, 42, 91, 0.01961);
      color: #909090;
    }
    textarea {
      width: 100%;
      height: 150px;
      border-radius: 6px;
      border-color: #e6e6e6;
      background-color: #fbfbfb;
      font-size: 14px;
      padding: 17px;
    }
    &:hover {
      opacity: 1;
    }
    .main-button {
      padding: 11px 26px;
      float: right;
      margin-top: 0;
      font-size: 14px;
    }
    &__title {
      font-size: 30px;
      font-weight: 500;
      color: #282929;
      border-bottom: 1px solid #d2d2d2;
      padding-bottom: 7px;
    }
  }
}
</style>
