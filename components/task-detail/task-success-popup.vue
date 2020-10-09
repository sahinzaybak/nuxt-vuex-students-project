<template>
  <b-modal id="modal-success" centered hide-footer hide-header>
    <h4 class="mb-4 mt-3 text-center" style="color: #18bd3b;">Tebrikler! Göreve aday oldunuz.</h4>
    <p>
      Görevi veren kişi sizi seçtiğinde sizi bildirim ve
      <br />mail ile bilgilendireceğiz.
    </p>
    <p>Görev ile ilgili durumu buradan takip edebilirsin</p>
    <div class="d-flex justify-content-center mt-4">
      <a class="main-button green mt-0 color-white">Anladım</a>
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
#modal-success {
  text-align: center;
  h4 {
    font-size: 22px;
  }
  p {
    font-size: 16px;
    line-height: 1.7;
    color: #002a5b;
    font-weight: 500;
    opacity: 0.9;
    text-align: center;
    margin-bottom: 18px;
  }
  .main-button {
    padding: 10px 27px;
  }
}
</style>
