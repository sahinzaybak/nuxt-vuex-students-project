<template>
  <b-modal id="applicant-confirm" centered hide-footer hide-header >
    <p class="mb-4 title-confirm text-center">
      <strong>{{applicantUserName}}</strong> isimli adayı göreviniz için
      <br />seçmek istediğinizden
      emin misiniz ?
    </p>
    <div class="price-confirm d-flex justify-content-between">
      <p>- Belirlediğiniz Görev Fiyatı :</p>
      <span>{{taskPrice}} ₺</span>
    </div>
    <div class="price-confirm d-flex justify-content-between" >
      <p>- Hizmet Bedeli + KDV :</p>
      <span>+ {{servicesPrice}} ₺</span>
    </div>
    <div class="price-confirm d-flex justify-content-between">
      <p>- Toplam Fiyat :</p>
      <span class="total-price">{{lastPrice}} ₺</span>
    </div>

    <p class="info">
      Ödemeniz bizim havuz hesabında bekletilecek ve
      <br />aday görevini tamamladığı takdirde adayınıza iletilecektir.
      <br />
      <br />Ödemeyi tamamladıktan sonra, adayın iletişim bilgilerini
      <br />görebilecek,
      ve adayla iletişim kurabileceksin.
      <br />
      <br />Görev iptal olduğu taktirde veya aday görevini yapmaktan
      <br />vazgeçtiği taktirde ödemen iade edileceltir.
      <br />
      <br />Aklına takılan başka bir soru varsa bize her zaman
      <br />
      <a href="#">Whatsapp</a>üzerinden sorabilirsin.
    </p>
    <div class="d-flex justify-content-center mt-4">
      <a class="main-button green mt-0 color-white cursor-pointer" @click="selectPerson">Herşey tamam, adayı seç ve ödeme ekranına yönlendir</a>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
   props:['applicantUserName','applicantUserId','taskId','taskPrice'],
  data() {
    return {
       servicesPrice:'',
       lastPrice:''
    };
  },
  mounted(){
     this.servicesPrice = (this.taskPrice * 20) / 100;
     this.lastPrice = this.taskPrice + this.servicesPrice;
  },
  methods:{
      ...mapActions({ fetchApplicantSelectPerson: "applicants/fetchApplicantSelectPerson" }),
     selectPerson(){
        this.fetchApplicantSelectPerson({
           _taskId: this.taskId,
           _userId:this.applicantUserId
        }).then(value => {
           this.$router.push({ path: `/applicant-confirm/${this.taskId}` }); //Adayı seçtiken sonra sayfaya yönlendir..
        })
     }
  }
};
</script>

<style lang="scss">
#applicant-confirm {
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
    padding: 10px 17px;
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
</style>
