<template>
  <div>
    <div class="selected-lessons sticky-top">
      <h3>Lise Takviye - Matematik</h3>
      <p>130 ₺/Saat</p>
      <a class="main-button green mt-0" v-b-modal.private-lessons-selected>Öğrenciyi Seç</a>
    </div>
    <div class="profile-item p-5 selected-lessons__message">
      <h4 class="profile-item__title d-flex align-items-center mb-3">Öğrencinin sana özel mesajı</h4>
      <p
        class="profile-item__desc"
      >Ege Üniversitesi Amerikan Kültür ve Edebiyatı mezunuyum. Pedagojik formasyon eğitimi aldım. Üniversite hayatım boyunca 2 kez Amerika’da çalıştım. Aynı zamanda Portekiz’de Erasmus yaptım. Yabancı dili çok seviyorum. Bu sebepten ötürü lise yıllarımda Londra’da dil eğitimi aldım. Şimdi ise, İngiliz Dil ve Edebiyatı bölümünden yüksek lisansa başlayacağım ve kariyerime akademisyen olarak devam etmek istiyorum. Eğer ingilizceyi keyifli bir şekilde öğrenmek istiyorsanız seve seve yardım ederim.</p>
    </div>
    <div class="profile-item p-5">
      <div class="profile-item__wrp mb-4">
        <h4 class="profile-item__title d-flex align-items-center mb-3">Ders İşleme Yöntemi</h4>
        <p
          class="profile-item__desc"
        >Ege Üniversitesi Amerikan Kültür ve Edebiyatı mezunuyum. Pedagojik formasyon eğitimi aldım. Üniversite hayatım boyunca 2 kez Amerika’da çalıştım. Aynı zamanda Portekiz’de Erasmus yaptım. Yabancı dili çok seviyorum. Bu sebepten ötürü lise yıllarımda Londra’da dil eğitimi aldım. Şimdi ise, İngiliz Dil ve Edebiyatı bölümünden yüksek lisansa başlayacağım ve kariyerime akademisyen olarak devam etmek istiyorum. Eğer ingilizceyi keyifli bir şekilde öğrenmek istiyorsanız seve seve yardım ederim.</p>
      </div>

      <!-- <div class="profile-item__wrp mb-5 pb-0">
        <h4 class="profile-item__title d-flex align-items-center mb-3">Verdiği Özel Dersler</h4>

        <div class="profile-item__lessons">
          <b-table :items="items" :fields="fields"></b-table>
        </div>
      </div>-->

      <div class="profile-item__wrp pb-0">
        <div class="profile-item__others d-flex justify-content-between">
          <div class="flex-center flex-column">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#address" />
            </svg>
            <h5 class="text-center mb-3">
              Özel Ders Vermek İstediği
              <br />Yerler
            </h5>
            <p>- Öğrenci Evinde</p>
            <p>- Kütüphane</p>
          </div>
          <div class="flex-center flex-column">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#clock-2" />
            </svg>
            <h5 class="text-center mb-3">
              Özel Ders Vermek İstediği
              <br />Zamanlar
            </h5>
            <p>- Haftasonu gündüz</p>
            <p>- Haftaiçi gündüz</p>
          </div>
          <div class="flex-center flex-column">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#gender" />
            </svg>
            <h5 class="text-center mb-3">
              Özel Ders Vermek İstediği
              <br />Cinsiyet
            </h5>
            <p>- Erkek</p>
            <p>- Kadın</p>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-item comments p-5 mt-4">
      <div class="profile-item__wrp mb-4 pb-0">
        <h4 class="profile-item__title d-flex align-items-center mb-3">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#about" />
          </svg>
          Gamze'ye yapılan yorumlar (5)
        </h4>
      </div>
      <div class="comments-item" v-for="item in 5" :key="item.id">
        <div class="d-flex">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
            alt
          />
          <div class="mt-1 ml-3">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="profile-item__name mb-1">Şahin Z.</h3>
                <p class="profile-item__university mb-2">Lise Takviye - Matematik</p>
              </div>
              <div>
                <p class="green">Olumlu Yorum</p>
              </div>
            </div>

            <div class="rate-item d-flex align-items-center">
              Verdiği Puan:
              <rate :length="5" :value="5" />
            </div>

            <h4
              class="comments-item__desc mt-3"
            >Gerçekten işinde usta birisi. Söz verdiği zamanda harika bir logo çıkardı teşekkür ediyorum kendisine.</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.table {
  th {
    border: 0 !important;
    padding-left: 0;
    padding-right: 0;
  }
  td {
    padding-left: 0;
    padding-right: 0;
  }
}
table {
  .main-button {
    border: 0 !important;
    padding: 4px 0px !important;
    display: inline-block;
    border-radius: 4px;
    transition: all 0.3s;
    color: white;
    text-align: center;
    color: #ea3a5a;
    font-size: 14px;
    width: 100%;
  }
}

.profile {
  padding-top: 50px;
  height: inherit !important;
  background-color: #eae8e8;
  &-item {
    background-color: #fdfdfd;
    box-shadow: 0 5px 8px 0px #e2e2e2;
    padding: 61px 0;
    border-radius: 6px;
    padding-bottom: 26px;
    &__title {
      font-size: 15.5px;
      font-weight: 600;
      color: #565656;
      .icon {
        font-size: 25px;
        color: #626262;
        opacity: 0.8 !important;
      }
    }
    &__desc {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.8;
      color: #002a5b;
      opacity: 0.9;
    }
    &__lessons {
      table {
        font-size: 16px;
        font-weight: 500;
        color: #002a5b;
        opacity: 0.9;
      }
    }
    &__others {
      h5 {
        font-size: 15px;
        margin-bottom: 5px;
        padding-bottom: 2px;
        color: #3ad25a;
      }
      p {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.8;
        color: #002a5b;
        opacity: 0.9;
        margin-bottom: 4px;
      }
      div {
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 1px;
          height: 100%;
          background-color: #dee2e6b0;
          right: -30px;
        }
        &:last-child {
          &:after {
            display: none;
          }
        }
      }
      .icon {
        font-size: 47px;
        color: #3ad25a;
        margin-bottom: 20px;
      }
    }
  }
  .comments {
    &-item {
      margin-bottom: 26px;
      border-bottom: 1px solid #dee2e6b0;
      padding-bottom: 25px;
      img {
        border-radius: 100%;
        width: 55px;
        height: 55px;
      }
      &__desc {
        font-size: 15.8px;
        font-weight: 500;
        line-height: 1.8;
        color: #002a5b;
        opacity: 0.9;
      }
      .green {
        background-color: #2fc44f;
        color: white;
        padding: 6px 11px;
        font-size: 11.6px;
        letter-spacing: 0.4px;
      }
    }
    .Rate {
      .icon {
        width: 20px;
        height: 20px;
        color: #ecbb71;
      }
      &__star {
        padding: 1px;
        &:first-child {
          padding-left: 0;
        }
      }
    }
    .rate-item {
      font-size: 13px;
      color: #212f3d;
      font-weight: 400;
    }
  }
  .selected-lessons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3ad25a;
    color: white;
    padding: 18px 38px;
    margin-bottom: 1px;
    box-shadow: #3ad25a52 0px 6px 12px 3px;
    .main-button {
      border: 0;
      color: white;
      font-size: 14px;
      width: auto;
      border-radius: 4px;
    }
    &__message {
      border-radius: 0;
      background-color: #3ad25a;
      color: white;
      margin-bottom: 20px;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      h4,
      p {
        color: white;
      }
    }
  }
}
</style>
