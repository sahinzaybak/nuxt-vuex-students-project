<template>
  <b-modal id="modal-confirm-dont-do" centered hide-footer hide-header>
    <p class="mb-4 title-confirm text-center" style="color:#eb375c">
      <strong>{{selectedPersonDetail.applicantUserName}}</strong> isimli aday görevinizi
      <br />yapmadığı için
      adaya önce bir uyarı vereceğiz,
      <br />toplam 3 defa tekrarlaması durumunda
      <br />adayın üyeliğini iptal edeceğiz.
      <br />
    </p>
    <p class="text-center">
      Aday ile ilgili oluşan sorunu bize kısaca yazar mısınız?
      <br />(Örn. Cevap vermedi, sorumsuz davrandı, ilgilenmedi.. vs)
    </p>
    <div class="price-confirm d-flex justify-content-between">
      <textarea v-model="discussMessage" name id cols="30" rows="10"></textarea>
    </div>
    <p class="info">
      3 aday değişiklik hakkınız olduğunu
      <br />hatırlatmak isteriz.
      <br />
      <br />Formu gönderdiğinizde en kısa sürede
      <br />ücretinizi iade edeceğiz.
      <br />
      <br />Aklına takılan başka bir soru varsa bize her zaman
      <br />
      <a href="#">Whatsapp</a> üzerinden sorabilirsin.
    </p>
    <div class="flex-center mt-4">
      <b-form-checkbox
        value="true"
        unchecked-value="false"
        v-model="status"
        id="checkbox-1"
        name="checkbox-1"
        @change="checked"
      >
        <p class="pt-1 text-center">
          Sadece adaya uyarı gelmesini istiyorum, aday
          <br />değişikliği yapacağım.
          <br />
        </p>
      </b-form-checkbox>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <a href class="main-button red mt-0" @click="sendDiscuss">{{buttonText}}</a>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  props: ["selectedPersonDetail"],
  data() {
    return {
      discussMessage:'',
      status: "false",
      buttonText: "Adayı uyarın, görevi iptal edip, ücretimi iade istiyorum.."
    };
  },
    methods: {
      ...mapActions({fetchDoDiscuss: "applicants/fetchDoDiscuss",fetchTodoDoingApplicant: "applicants/fetchTodoDoingApplicant"
      }),
      sendDiscuss() {
        this.fetchDoDiscuss({ //İşi bitiren adaya yorum yap, puan ver.
          todoId: this.$route.params.taskId,
          applicantUserId: this.selectedPersonDetail.applicantUserId,
          star: 1,
          discussType: "negative",
          message: this.discussMessage
        }).then(value => { //İşi bitiren adaya yorum yapıp puan verdikten sonra "isTodoDoing" true yada false yap
          this.fetchTodoDoingApplicant({
            selectedApplicantUserId: this.selectedPersonDetail.applicantUserId,
            isTodoDoing: true
          });
        });
      },
      checked() {
         if (this.status == "false")
            this.buttonText = "Sadece adaya uyarı gönderin";
         else
            this.buttonText = "Adayı uyarın, görevi iptal edip, ücretimi iade istiyorum..";
         }
    },
 
};
</script>

<style lang="scss">
.modal {
  .modal-content {
    background-color: #f7f6f6;
  }
  .modal-dialog {
    max-width: 575px;
    color: #002a5b;
  }
  .modal-body {
    padding: 32px;
  }
  .title-confirm {
    color: #002a5b;
    font-size: 20.8px;
  }
  .main-button {
    padding: 10px 30px;
    font-size: 15.7px;
    &.red {
      background-color: #eb375c;
    }
  }
  .price-confirm {
    font-size: 16.5px;
    border-bottom: 1px solid #002a5b0a;
    padding: 14px 0;
    span {
      font-weight: 600;
      font-size: 19px;
      &.total-price {
        font-size: 24px;
        color: #18bd3b;
      }
    }
  }
  .info {
    color: #c98b1c;
    font-size: 13px;
    font-weight: 400;
    margin-top: 22px;
    text-align: center;
    a {
      color: #18bd3b;
      font-weight: 500;
    }
  }
}
.custom-control-label {
  font-size: 16px;
  color: #002a5b;
  font-weight: 500;
  &:after,
  &:before {
    top: 0.55rem;
  }
}
</style>
