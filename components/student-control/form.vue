<template>
  <div class="create-task__wrp pt-4">
    <div class="row">
      <div class="col-md-12 mb-5 create-task__main">
        <h2 class="create-task__title text-center mb-5">Öğrenci Kontrol Formu</h2>
        <div class="d-flex justify-content-between">
          <div class="create-task__item">
            <b-form-select v-model="selectedUniversity" :options="optionsUniversity"></b-form-select>
          </div>
          <div class="create-task__item">
            <input type="text" v-model="department" placeholder="Bölümün Nedir?" />
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
            <input type="text" v-model="email" placeholder="Üniversite mail adresin?" />
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <div class="create-task__item position-relative">
            <input type="text" v-model="phone" placeholder="Cep Telefonu Numaran" />
            <svg class="icon mr-2 position-absolute" id="tooltip-2" style="top: 18px; right:0">
              <b-tooltip
                target="tooltip-2"
                triggers="hover"
              >Görev veren kişilerin seninle birebir iletişime geçmeleri için gerekli.</b-tooltip>
              <use xlink:href="~/assets/images/icons.svg#info" />
            </svg>
          </div>
          <div class="create-task__item position-relative">
            <input type="text" v-model="iban" placeholder="IBAN Numaran" />
            <svg class="icon mr-2 position-absolute" id="tooltip-3" style="top: 18px;right:0">
              <b-tooltip
                target="tooltip-3"
                triggers="hover"
              >Görev ödemelerinin başarıyla iletilebilmesi için kayıtlı isim bilgilerin ile banka hesap isim bilgilerin aynı olmalıdır. Profil sayfandan bilgilerini düzenleyebilirsin.</b-tooltip>
              <use xlink:href="~/assets/images/icons.svg#info" />
            </svg>
          </div>

          <div class="create-task__item position-relative">
            <input type="text" v-model="classNumber" placeholder="Şu anda kaçıncı sınıftasın" />
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <h2 class="create-task__title text-center mb-5">Görev Profili Formu</h2>
        <div class="row">
          <div class="col-md-5">
            <div class="create-task__item">
              <div class="create-task__item">
                <textarea v-model="aboutText"
                  placeholder="Hakkında. Bu kısmı çok detaylı doldurman gerek. İşi verecek olan kişiler profiline girdiklerinde en önce bu kısma okurlar. Dilersen daha sonra profilinden değiştirebilirsin."
                />
              </div>
            </div>
            <div class="create-task__item mt-3">
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
          </div>
          <div class="col-md-7">
            <p class="mb-3">Hangi kategorilerde daha çok görev yapmak istersin?</p>
            <div class="create-task__choose d-flex align-items-center" v-for="item in taskCategoryList" :key="item._id">
               <b-form-checkbox v-model="categories" :key="item.category" :value="item.category" switch>
                  {{ item.category }}
               </b-form-checkbox>
            </div>
               {{categories}}
          </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <a class="main-button green mt-0 color-white cursor-pointer" @click="send">İşlemleri tamamla ve göreve aday ol</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
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
      department: "",
      email: "",
      phone: "",
      iban: "",
      classNumber: "",
      aboutText:"",
      categories:[],
      selectedUniversity: null,
      optionsUniversity: [
        { value: null, text: "Okuduğun Üniversiteyi Seç" },
        { value: "Bahçeşehir Üniversitesi", text: "Bahçeşehir Üniversitesi" },
        { value: "Beykent Üniversitesi", text: "Beykent Üniversitesi" },
        { value: "Nişantaşı Üniversitesi", text: "Nişantaşı Üniversitesi" },
        { value: "Aydın Üniversitesi", text: "Aydın Üniversitesi" }
      ],
    };
  },
  created(){
     this.fetchTodoCategoryList
  },
  computed:{
   ...mapState({ taskCategoryList: state => state.task.taskCategoryList }), //İlan detay
   ...mapActions({ fetchTodoCategoryList: "task/fetchTodoCategoryList", }),
  },
  methods: {
    ...mapActions({ fetchUserUpdate: "fetchUserUpdate"}),
    send() {
      this.fetchUserUpdate({
        _university: this.selectedUniversity,
        _department: this.department,
        _email: this.email,
        _phone: this.phone,
        _iban: this.iban,
        _class: this.classNumber,
        _about:this.aboutText,
        _categories:this.categories
      });
    },
    handleFilePondInit: function() {
      console.log(this.$refs.pond);
      // FilePond instance methods are available on `this.$refs.pond`
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/colors";

.filepond--drop-label {
  border: 2px dotted #cfcfcf;
  border-radius: 6px;
}
</style>
