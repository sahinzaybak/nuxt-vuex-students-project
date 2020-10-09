<template>
  <b-modal id="modal-confirm-do" class="confirm-star" centered hide-footer hide-header>
    <p class="mb-4 title-confirm text-center" style="color: #18bd3b;">
      <strong>{{selectedPersonDetail.applicantUserName}}</strong> isimli aday görevinizi başarıyla tamamladıysa
      onu değerlendirebilirsiniz.
    </p>
    <p class="text-center mb-2">
      Adayın yaptığı işe puan ver
      <br />
    </p>
    <rate v-model="rate" :length="5" />
    <div class="price-confirm d-flex justify-content-between">
      <textarea name id cols="30" rows="10" v-model="discussMessage" placeholder="Aday ile ilgili görüş bildir."></textarea>
    </div>
    <p class="info">
      Formu gönderdiğinizde en kısa sürede
      <br />adaya ücretini göndereceğiz.
      <br />
      <br />Aklına takılan başka bir soru varsa bize her zaman
      <br />
      <a href="#">Whatsapp</a> üzerinden sorabilirsin.
    </p>
    <div class="d-flex justify-content-center mt-4">
      <a class="main-button green mt-0" @click="sendDiscuss">Aday görevimi tamamladı, ücretini gönderebilirsiniz</a>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  props: ["selectedPersonDetail"],
  data() {
    return {
      rate: '',
      discussMessage:''
    };
  },
  methods:{
      ...mapActions({ fetchDoDiscuss: "applicants/fetchDoDiscuss" , fetchTodoDoingApplicant: "applicants/fetchTodoDoingApplicant" }),
     sendDiscuss(){
        this.fetchDoDiscuss({  //İşi bitiren adaya yorum yap, puan ver.
           todoId:this.$route.params.taskId,
           applicantUserId: this.selectedPersonDetail.applicantUserId,
           star:this.rate,
           discussType:"positive",
           message:this.discussMessage
        }).then(value => { //İşi bitiren adaya yorum yapıp puan verdikten sonra "isTodoDoing" true yada false yap
           this.fetchTodoDoingApplicant({
              selectedApplicantUserId: this.selectedPersonDetail.applicantUserId,
              isTodoDoing:true
           })
        })
     }
  }

};
</script>

<style lang="scss">
#modal-confirm-do {
  .Rate {
    text-align: center;
    .icon {
      width: 45px;
      height: 40px;
    }
  }
}
</style>
