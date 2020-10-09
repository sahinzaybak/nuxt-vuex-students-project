<template>
  <div class="create-task__wrp pt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="create-task__item">
          <p class="info mt-1">Adın Soyadın</p>
          <input type="text" placeholder="Adın Soyadın" value="Şahin Zaybak" />
        </div>
        <div class="create-task__item">
          <p class="info mt-1">Okuduğun Üniversite</p>
          <b-form-select v-model="selected" :options="optionsCategory"></b-form-select>
        </div>
        <div class="create-task__item">
          <p class="info mt-1">Okuduğun Bölüm</p>
          <input type="text" placeholder="Bölümün Nedir?" value="Bilgisayar Mühendisliği" />
        </div>
        <div class="create-task__item">
          <p class="info mt-1">Üniversite Mail Adresin</p>
          <input
            type="text"
            disabled
            placeholder="Üniversite mail adresin? (Örn: blabla@bau.edu.tr)"
            value="sahinzaybak@beu.edu.tr"
          />
        </div>
        <div class="create-task__item">
          <p class="info mt-1">Bildirimleri alacağın kişisel mail adresi</p>
          <input
            type="text"
            placeholder="Üniversite mail adresin? (Örn: blabla@bau.edu.tr)"
            value="sahinzaybak@gmail.com"
          />
        </div>
        <div class="create-task__item">
          <p
            class="info mt-1"
          >Görev veren kişilerin seninle iletişime geçmeleri için telefon numarası</p>
          <input type="text" placeholder="Cep Telefonu Numaran" value="0539 506 69 51" />
        </div>
        <div class="create-task__item">
          <p class="info mt-1">IBAN Numaran</p>
          <input type="text" placeholder="IBAN Numaran" value="TR07 8985 29959 58 47" />
        </div>
        <div class="create-task__item">
          <p class="info mt-1">Hakkında</p>
          <textarea
            placeholder="Hakkında. Bu kısmı çok detaylı doldurman gerek. İşi verecek olan kişiler profiline girdiklerinde en önce bu kısma okurlar. Dilersen daha sonra profilinden değiştirebilirsin."
            text="as"
          >Ben Bahçeşehir Üniversitesinde okuyorum, 2.sınıfım inşallah buradan çok para kazanırım ve 3.sınıfta kendime bir porche araba alabilirim. Amiiiin. </textarea>
        </div>
      </div>
      <div class="col-md-6">
        <div class="create-task__item"></div>
        <div class="create-task__item">
          <p class="mb-3">Hangi kategorilerden görev teklifi almak istersin?</p>
          <div class="create-task__choose d-flex align-items-center">
            <toggle-button
              :width="55"
              :height="19"
              :speed="300"
              :labels="{checked: 'aktif', unchecked: 'Seç'}"
              :color="{checked: '#18bd3b', unchecked: '#dcdcdc'}"
              :value="false"
            />
            <p class="ml-2">Ders çeviri</p>
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
            <p class="ml-2">İçerik Hazırlama</p>
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
            <p class="ml-2">Getir/Götür</p>
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
            <p class="ml-2">Grafik/Tasarım/Video</p>
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
            <p class="ml-2">Sosyal Medya/Ürün Tanıtımı</p>
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
            <p class="ml-2">Eğlenceli İlginç Şeyler</p>
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
            <p class="ml-2">Etkinlik/Organizasyon</p>
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
            <p class="ml-2">Web/Yazılım</p>
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
            <p class="ml-2">Fotoğraf Çekimi</p>
          </div>
        </div>
        <div class="create-task__item mt-5">
          <p
            class="mb-3"
          >Portfolioların var ise buradan ekleyebilirsin. Görev verenlerin seni seçmelerinde porftolionun etkisi büyük olacaktır.</p>
          <no-ssr>
            <file-pond
              name="test"
              ref="pond"
              label-idle="Bir resim seçin veya sürükleyip bırakın.."
              v-bind:allow-multiple="true"
              accepted-file-types="image/jpeg, image/png"
              server="/api"
              v-on:init="handleFilePondInit"
            />
          </no-ssr>
        </div>
        <div class="d-flex justify-content-end">
          <a href class="main-button green mt-0">İşlemleri tamamla ve göreve aday ol</a>
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
      selected: "a",
      iller: {},
      ilceler: [],
      selectedIl: false,
      bolge: [],
      optionsCategory: [
        { value: "", text: "Okuduğun Üniversiteyi Seç" },
        { value: "a", text: "Bahçeşehir Üniversitesi" },
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
.filepond--drop-label {
  border: 2px dotted #cfcfcf;
  border-radius: 6px;
}
</style>
