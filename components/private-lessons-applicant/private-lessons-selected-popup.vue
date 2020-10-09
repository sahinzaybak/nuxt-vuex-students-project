<template>
  <b-modal id="private-lessons-selected" centered hide-footer hide-header>
    <p class="mb-4 title-confirm text-center">
      <strong>Gamze U.</strong> isimli öğrenciyi özel dersiniz için
      <br />seçmek istediğinizden
      emin misiniz ?
    </p>
    <div class="price-confirm d-flex justify-content-between">
      <p>- Özel Ders Fiyatı (Saatlik):</p>
      <span>130 ₺</span>
    </div>
    <div class="price-confirm d-flex justify-content-between">
      <p>- Hizmet Bedeli + KDV :</p>
      <span>+ 14 ₺</span>
    </div>
    <div class="price-confirm d-flex justify-content-between">
      <p>- Toplam Fiyat :</p>
      <span class="total-price">144 ₺</span>
    </div>

    <p class="info">
      Biz sadece 1 saat üzerinden hizmet bedeli alıyoruz,
      <br />siz adayınızla ne kadar saat özel ders almak
      istediğinizi konuşabilirsiniz.
      <br />
      <br />Ödemeniz bizim havuz hesabında bekletilecek ve
      <br />öğrenci özel dersi tamamladığı takdirde öğrenciye iletilecektir.
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
      <a href="#">Whatsapp</a> üzerinden sorabilirsin.
    </p>
    <div class="d-flex justify-content-center mt-4">
      <a href class="main-button green mt-0">Herşey tamam, adayı seç ve ödeme ekranına yönlendir</a>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#private-lessons-selected {
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
