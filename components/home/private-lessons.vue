<template>
  <section class="private">
    <h2 class="title mb-4">Özel Ders Kategorileri</h2>
    <p class="text-center private-desc">
      Almak istediğiniz eğitimle ilgili kutuya tıklayıp, açılan formu
      <br />doldurarak ilanınızı <strong class="fw-600">hemen yayına koyabilirsiniz.</strong>
      <br />
      <br />İlanınız yayına alındıktan sonra, alanında uzman öğrenciler <br> özel ders ilanınıza <strong class="fw-600">saatlik bir fiyat</strong> belirleyip başvuru yaparlar.<br>
      <br />Size sadece bu adaylar arasından profillerini inceleyip, size en uygun <br> olacağını düşündüğünüz adayı seçmek kalıyor.
    </p>
    <div class="d-flex flex-wrap justify-content-between private-wrp">
      <div class="private-item" v-b-modal.modal-center-ilkogretim>
        <img src="https://www.netders.com/public/img/home-icon-ilkogretim.png" alt />
        <h2 class="private-item__name">İlköğretim Dersleri</h2>
        <b-modal id="modal-center-ilkogretim" centered hide-header hide-footer no-stacking>
          <p class="modal-title text-center mb-2 p-3">İlköğretim Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">Türkçe</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Matematik</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">Fen ve Teknoloji</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="D">Sosyal Bilgiler</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">İngilizce</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a
                v-b-modal.private-lessons-desc
                class="main-button green color-white mt-4 mb-3"
              >Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="private-item" v-b-modal.modal-center-lise>
        <img src="https://www.kadikoy.com/wp-content/uploads/2019/06/kadikoy-ozel-ders.png" alt />
        <h2 class="private-item__name">Lise Dersleri</h2>
        <b-modal id="modal-center-lise" centered hide-header hide-footer>
          <p class="modal-title text-center mb-2 p-3">Lise Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">Matematik-Geometri</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Fizik</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">Kimya</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Biyoloji</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="D">Tarih</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Edebiyat</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="F">Coğrafya</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="G">İngilizce</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a class="main-button green color-white mt-4 mb-3">Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="private-item" v-b-modal.modal-center-universite>
        <img src="https://www.netders.com/public/img/home-icon-universite.png" alt />
        <h2 class="private-item__name">Üniversite Dersleri</h2>
        <b-modal id="modal-center-universite" centered hide-header hide-footer>
          <p class="modal-title text-center mb-2 p-3">Üniversite Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">Matematik-Geometri</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Fizik</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">Kimya</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Biyoloji</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="D">Tarih</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Edebiyat</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="F">Coğrafya</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="G">İngilizce</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a class="main-button green color-white mt-4 mb-3">Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="private-item">
        <img src="https://www.netders.com/public/img/home-icon-sinavhazirlik.png" alt />
        <h2 class="private-item__name">Sınavlara Hazırlık</h2>
      </div>
      <div class="private-item" v-b-modal.modal-center-yabanci-dil>
        <img
          src="https://lanecove.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2017/08/04230359/Spanish-for-kids-Sydney-and-Melbourne.jpg"
          alt
        />
        <h2 class="private-item__name">Yabancı Dil Eğitimleri</h2>
        <b-modal id="modal-center-yabanci-dil" centered hide-header hide-footer>
          <p class="modal-title text-center mb-2 p-3">Yabancı Dil Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">İngilizce</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Almanca</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">Fransızca</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Rusça</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="F">Çince</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="H">İspanyolca</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Arapça</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="L">İtalyanca</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a class="main-button green color-white mt-4 mb-3">Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>

      <div class="private-item" v-b-modal.modal-center-web-yazilim>
        <img src="https://www.netders.com/public/img/home-icon-bilgisayar.png" alt />
        <h2 class="private-item__name">Web - Yazılım</h2>
        <b-modal id="modal-center-web-yazilim" centered hide-header hide-footer>
          <p class="modal-title text-center mb-2 p-3">Web Yazılım Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">HTML-CSS</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Javascipt-Jquery</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="H">React.js/Vue.js</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">ASP.NET</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">PHP</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Wordpress</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="F">C++, C#</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Ruby</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Phyton</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio
                v-model="selected"
                name="some-radios"
                value="L"
              >Mobil Uygulama Geliştirme</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a class="main-button green color-white mt-4 mb-3">Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="private-item" v-b-modal.modal-center-grafik-tasarim>
        <img src="https://www.netders.com/public/img/home-icon-sanat.png" alt />
        <h2 class="private-item__name">Grafik Tasarım</h2>
        <b-modal id="modal-center-grafik-tasarim" centered hide-header hide-footer>
          <p class="modal-title text-center mb-2 p-3">Grafik Tasarım Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">Photoshop</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Illustrator</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Skecth-Zeplin</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="H">Indesign</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">3D Max</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">After Effects</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">AutoCAD</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="F">Modelleme</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">SolidWorks</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a class="main-button green color-white mt-4 mb-3">Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="private-item" v-b-modal.modal-center-dans>
        <img src="https://www.netders.com/public/img/home-icon-dans.png" alt />
        <h2 class="private-item__name">Dans</h2>
        <b-modal id="modal-center-dans" centered hide-header hide-footer>
          <p class="modal-title text-center mb-2 p-3">Dans Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">Bale</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Break Dans</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Bchata</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="H">Cha Cha</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">Halk Oyunları</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Kareografi</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Tango</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="F">Salsa</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Rumba</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Waltz</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a class="main-button green color-white mt-4 mb-3">Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="private-item" v-b-modal.modal-center-muzik>
        <img src="https://www.netders.com/public/img/home-icon-muzik.png" alt />
        <h2 class="private-item__name">Müzik</h2>
        <b-modal id="modal-center-muzik" centered hide-header hide-footer>
          <p class="modal-title text-center mb-2 p-3">Müzik Dersleri için ders seçin.</p>
          <div class="modal-wrp">
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="A">Gitar</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Keman</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="B">Saz</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="H">Piyano</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="C">Bateri</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Bağlama</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="E">Flüt</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="F">Davul</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Ney</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Kemençe</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Klarnet</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Mandolin</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Saksafon</b-form-radio>
            </div>
            <div class="modal-item d-flex align-items-center">
              <b-form-radio v-model="selected" name="some-radios" value="K">Zurna</b-form-radio>
            </div>
            <div class="d-flex justify-content-center">
              <a class="main-button green color-white mt-4 mb-3">Devam Et</a>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
    <privateLessonsDesc />
    <privateLessonsSuccessPopup />
  </section>
</template>

<script>
import privateLessonsDesc from "./private-lessons-desc-popup";
import privateLessonsSuccessPopup from "./private-lessons-success-popup";
export default {
  components: { privateLessonsDesc, privateLessonsSuccessPopup },
  data() {
    return {
      selected: ""
    };
  }
};
</script>

<style lang="scss">
.modal {
  &-wrp {
    // display: flex;
    // flex-wrap: wrap;
  }
  &-dialog {
    max-width: 590px;
  }
  &-title {
    color: #002a5b;
    font-size: 20.8px;
  }
  &-item {
    padding: 15px;
    background-color: #f7f7f7;
    margin: 11px;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #e7e7e7;
    cursor: pointer;
    .custom-radio {
      width: 100%;
      font-size: 20px;
      color: #002a5b;
    }
    .custom-control-label {
      width: 100%;
    }
  }
  .custom-control-label::before,
  .custom-control-label::after {
    top: 7px;
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: #18bd3b;
    background-color: #18bd3b;
  }
}
.private {
  background-color: #f1f1f1;
  &-wrp {
    margin: 0 6%;
  }
  &-desc {
    font-size: 16px;
    color: #002a5b;
    width: 720px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  &-item {
    width: 290px;
    display: inline-block;
    height: 286px;
    border: 4px solid #f0c27e;
    border-radius: 100%;
    padding: 12px;
    margin-right: 20px;
    margin-bottom: 100px;
    transition: all 0.5s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
    &__name {
      text-align: center;
      font-size: 20px;
      margin-top: 38px;
    }
    &:hover {
      background-color: #f0c27e;
    }
  }
}
</style>
