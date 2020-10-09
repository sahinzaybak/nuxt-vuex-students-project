<template>
  <b-modal id="private-lessons-success" centered hide-header hide-footer>
    <p class="modal-title text-center mb-3 p-3">
      <strong>Tebrikler! İlanınız yayında.</strong>
      <br />
      <br />Şimdi arkanıza yaslanın ve özel dersiniz için
      <br />aday olacak öğrencileri bekleyin.
    </p>
    <div class="d-flex justify-content-center">
      <a class="main-button green color-white mt-0">Tamamdır. İlanımı göster</a>
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
#private-lessons-success {
  .modal-body {
    padding-bottom: 30px;
  }

  p {
    color: #002a5b;
    font-size: 19px;
    strong {
      font-size: 24px;
      color: #28a745;
    }
  }
}
</style>
