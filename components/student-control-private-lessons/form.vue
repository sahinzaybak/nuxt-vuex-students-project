<template>
  <div class="create-task__wrp pt-4">
    <div class="row">
      <div class="col-md-12 mb-5 create-task__main" :class="{'opacity': showSecond}">
        <h2 class="create-task__title text-center mt-4 mb-4 pb-2">Öğrenci Kontrol Formu</h2>
        <div class="d-flex justify-content-between">
          <div class="create-task__item">
            <b-form-select v-model="selected" :options="optionsCategory"></b-form-select>
          </div>
          <div class="create-task__item">
            <input type="text" placeholder="Bölümün Nedir?" />
          </div>
          <div class="create-task__item position-relative">
            <svg class="icon mr-2 position-absolute" id="tooltip-1" style="top: 18px; right:0">
              <b-tooltip target="tooltip-1" triggers="hover">
                İşlemleri tamamladıktan sonra bu girdiğin üniversite mailine
                onay maili gelecektir. Bu yüzden maili doğru
                girdiğine emin olmalısın.
              </b-tooltip>
              <use xlink:href="~/assets/images/icons.svg#info" />
            </svg>
            <input type="text" placeholder="Üniversite mail adresin?" />
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <div class="create-task__item position-relative">
            <input type="text" placeholder="Cep Telefonu Numaran" />
            <svg class="icon mr-2 position-absolute" id="tooltip-2" style="top: 18px; right:0">
              <b-tooltip
                target="tooltip-2"
                triggers="hover"
              >Görev veren kişilerin seninle birebir iletişime geçmeleri için gerekli.</b-tooltip>
              <use xlink:href="~/assets/images/icons.svg#info" />
            </svg>
          </div>
          <div class="create-task__item position-relative">
            <input type="text" placeholder="IBAN Numaran" />
            <svg class="icon mr-2 position-absolute" id="tooltip-3" style="top: 18px;right:0">
              <b-tooltip
                target="tooltip-3"
                triggers="hover"
              >Görev ödemelerinin başarıyla iletilebilmesi için kayıtlı isim bilgilerin ile banka hesap isim bilgilerin aynı olmalıdır. Profil sayfandan bilgilerini düzenleyebilirsin.</b-tooltip>
              <use xlink:href="~/assets/images/icons.svg#info" />
            </svg>
          </div>

          <div class="create-task__item position-relative">
            <input type="text" placeholder="Şu anda kaçıncı sınıftasın" />
          </div>
        </div>
        <div class="d-flex justify-content-end mt-4" v-if="!showSecond">
          <a
            class="main-button green mt-0 color-white cursor-pointer d-flex align-items-center"
            @click="showSecond=true"
          >
            Devam Et
            <svg class="icon ml-3">
              <use xlink:href="~/assets/images/icons.svg#right-arrow" />
            </svg>
          </a>
        </div>
      </div>
      <div
        class="col-md-12 mb-5 private-control create-task__main"
        v-if="showSecond"
        :class="{'opacity': showThirt}"
      >
        <h2 class="create-task__title text-center">Özel Ders Profiliniz için</h2>
        <p class="text-center private-control__title">
          Özel dersi yayınlayan insanlar adaylar arasından karar verirken
          <br />
          <strong>mutlaka adayların özel ders profillerine</strong> bakıp,
          öyle karar vereceklerdir.
          <br />Bu yüzden kendi özel ders profilin için bu kısmı doldurman oldukça önemli.
        </p>
        <div class="row">
          <div class="col-md-12" style="color: rgb(0, 42, 91);">
            <div class="row">
              <div class="col-md-4 private-control__item">
                <p class="mb-3">Özel ders vermek istediğin yerler?</p>
                <div class="create-task__choose d-flex align-items-center">
                  <toggle-button
                    :width="55"
                    :height="19"
                    :speed="300"
                    :labels="{checked: 'aktif', unchecked: 'Seç'}"
                    :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                    :value="false"
                  />
                  <p class="ml-2">Öğrenci Evi</p>
                </div>
                <div class="create-task__choose d-flex align-items-center">
                  <toggle-button
                    :width="55"
                    :height="19"
                    :speed="300"
                    :labels="{checked: 'aktif', unchecked: 'Seç'}"
                    :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                    :value="false"
                  />
                  <p class="ml-2">Kütüphane</p>
                </div>
                <div class="create-task__choose d-flex align-items-center">
                  <toggle-button
                    :width="55"
                    :height="19"
                    :speed="300"
                    :labels="{checked: 'aktif', unchecked: 'Seç'}"
                    :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                    :value="false"
                  />
                  <p class="ml-2">Cafe</p>
                </div>
              </div>
              <div class="col-md-4 private-control__item">

                <p class="mb-3">Özel ders vermek istediğin zamanlar?</p>
                <div class="d-flex justify-content-between">
                  <div class="create-task__choose d-flex align-items-center">
                    <toggle-button
                      :width="55"
                      :height="19"
                      :speed="300"
                      :labels="{checked: 'aktif', unchecked: 'Seç'}"
                      :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                      :value="false"
                    />
                    <p class="ml-2">H. içi sabah</p>
                  </div>
                  <div class="create-task__choose mr-4 d-flex align-items-center">
                    <toggle-button
                      :width="55"
                      :height="19"
                      :speed="300"
                      :labels="{checked: 'aktif', unchecked: 'Seç'}"
                      :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                      :value="false"
                    />
                    <p class="ml-2">H. içi öğlen</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="create-task__choose d-flex align-items-center">
                    <toggle-button
                      :width="55"
                      :height="19"
                      :speed="300"
                      :labels="{checked: 'aktif', unchecked: 'Seç'}"
                      :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                      :value="false"
                    />
                    <p class="ml-2">H. içi sabah</p>
                  </div>
                  <div class="create-task__choose mr-4 d-flex align-items-center">
                    <toggle-button
                      :width="55"
                      :height="19"
                      :speed="300"
                      :labels="{checked: 'aktif', unchecked: 'Seç'}"
                      :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                      :value="false"
                    />
                    <p class="ml-2">H. içi öğlen</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="create-task__choose d-flex align-items-center">
                    <toggle-button
                      :width="55"
                      :height="19"
                      :speed="300"
                      :labels="{checked: 'aktif', unchecked: 'Seç'}"
                      :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                      :value="false"
                    />
                    <p class="ml-2">H. içi sabah</p>
                  </div>
                  <div class="create-task__choose mr-4 d-flex align-items-center">
                    <toggle-button
                      :width="55"
                      :height="19"
                      :speed="300"
                      :labels="{checked: 'aktif', unchecked: 'Seç'}"
                      :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                      :value="false"
                    />
                    <p class="ml-2">H. içi öğlen</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 pl-5 private-control__item">
                <p class="mb-3">Özel ders vermek istediğin cinsiyet?</p>
                <div class="create-task__choose d-flex align-items-center">
                  <toggle-button
                    :width="55"
                    :height="19"
                    :speed="300"
                    :labels="{checked: 'aktif', unchecked: 'Seç'}"
                    :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                    :value="false"
                  />
                  <p class="ml-2">Erkek</p>
                </div>
                <div class="create-task__choose d-flex align-items-center">
                  <toggle-button
                    :width="55"
                    :height="19"
                    :speed="300"
                    :labels="{checked: 'aktif', unchecked: 'Seç'}"
                    :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
                    :value="false"
                  />
                  <p class="ml-2">Kız</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-5">
            <div class="create-task__item w-100">
              <textarea
                placeholder="Ders İşleme Yöntemin.. Bu kısmı çok detaylı doldurman gerek. Özel dersi verecek olan kişiler profiline girdiklerinde en önce bu kısma okurlar. Dilersen daha sonra profilinden değiştirebilirsin."
              />
            </div>
            <div class="d-flex justify-content-end mt-4" v-if="!showThirt">
              <a
                class="main-button green mt-0 color-white cursor-pointer d-flex align-items-center"
                @click="showThirt=true"
              >
                Profili oluştur ve özel derse aday ol.
                <svg class="icon ml-3">
                  <use xlink:href="~/assets/images/icons.svg#right-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
const FilePond = vueFilePond(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);
export default {
  components: {
    FilePond
  },
  data() {
    return {
      showSecond: false,
      showThirt: false,
      selected: null,
      iller: {},
      ilceler: [],
      selectedIl: false,
      bolge: [],
      optionsCategory: [
        { value: null, text: "Okuduğun Üniversiteyi Seç" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ]
    };
  },
  methods: {
    handleFilePondInit: function() {
      console.log("as");
      console.log(this.$refs.pond);
      // FilePond instance methods are available on `this.$refs.pond`
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/colors";

.private-control {
  &__title {
    font-size: 16px;
    margin-top: 7px;
    color: #002a5b;
    margin-bottom: 48px;
  }
  &__icon {
    font-size: 47px;
    color: #3ad25a;
    margin-bottom: 20px;
    width: 268px;
  }
  &__item {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 20px;
      width: 1px;
      height: 100%;
      background-color: #d8d8d8d4;
      right: 40px;
    }
    &:nth-child(2) {
      &:after {
        right: 0px;
      }
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
}
</style>
