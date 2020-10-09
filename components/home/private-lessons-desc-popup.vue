<template>
  <b-modal id="private-lessons-desc" centered hide-header hide-footer no-stacking>
    <p class="modal-title text-center mb-3 p-3">
      <strong style="font-size:28px">Lise Kategorisi - Kimya</strong> <br>özel dersi için aşağıdaki
      bilgileri <br /> doldurun
      ve ilanınızı
      <strong>hemen yayınlayın.</strong>
      
    </p>
    <div class="d-flex justify-content-between">
      <div class="create-task__item w-50 mr-3">
        <b-form-select v-model="selected" :options="optionsCategory"></b-form-select>
      </div>
      <div class="create-task__item w-50 ml-3">
        <b-form-select v-model="selected" :options="optionsCategory"></b-form-select>
      </div>
    </div>
    <v-date-picker
        v-model="date"
         title-position="left" 
        :select-attribute='selectAttribute'
        :input-props='{class:"mb-3 w-100 p-2", placeholder: "Başvuru için son tarih girin",readonly: true}'
      />
    <textarea
      name
      id
      cols="30"
      rows="10"
      placeholder="Adayların görebileceği detaylı bir açıklama giriniz."
    ></textarea>
    <p class="info">
      * Saatlik Fiyat, ilanınıza aday olan öğrenciler tarafından
      <br />belirlenecek ve
      siz adaylar arasından en uygun
      <br />olanının seçebileceksiniz. (75-180 ₺ arası)
      <br />
      <br />Aklına takılan başka bir soru varsa bize her zaman
      <br />
      <a href="#">Whatsapp</a> üzerinden sorabilirsin.
    </p>
    <div class="d-flex justify-content-center">
      <a
        class="main-button green color-white mt-4"
        v-b-modal.private-lessons-success
      >İlanımı yayınla</a>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      selectAttribute: {
        dot: true
      },
      selected: null,
      iller: {},
      ilceler: [],
      selectedIl: false,
      bolge: [],
      optionsCategory: [
        { value: null, text: "İl Seçiniz" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ]
    };
  }
};
</script>

<style lang="scss">
#private-lessons-desc {
  .info {
    color: #b39436;
    font-size: 13px;
    font-weight: 400;
    margin-top: 22px;
    text-align: center;
    a {
      color: #18bd3b;
      font-weight: 400;
    }
  }
  textarea::placeholder {
    color: #002a5ba6;
    font-size: 16.1px;
  }
   input::placeholder {
    color: #002a5ba6;
    font-size: 16.1px;
  }
  .modal-dialog {
    max-width: 590px;
  }
  .main-button {
    padding: 13px 25px;
  }
  .modal-body {
    padding: 20px 30px;
    padding-bottom: 30px;
    background-color: #f7f6f6;
    border-radius: 15px;
  }
  textarea {
    border: 1px solid #002a5b17;
    color: #002a5ba6;
    font-size: 16.1px;
    background-color: #fefcfcfa;
  }
  .custom-select,input {
    color: #002a5ba6;
    font-size: 16.1px;
    border: 1px solid #002a5b17;
    box-shadow: 0 5px 9px 1px rgba(0, 42, 91, 0.01961);
    height: 52px;
    background-color: #fefcfcfa;
    border-radius: 6px;
  }
}
</style>
