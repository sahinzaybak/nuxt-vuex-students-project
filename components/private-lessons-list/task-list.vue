<template>
  <div class="task-wrp">
    <div class="row">
      <div class="col-md-4" v-for="item in 12" :key="item.id">
        <div class="task-item">
          <h2 class="task-item__title">İlköğretim Takviye</h2>
          <h4 class="task-item__lessons mt-1 mb-4">Matematik Dersi</h4>
          <div class="d-flex author align-items-center mb-4">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
              alt
            />
            <p>Şahin Zaybak</p>
          </div>

          <p
            class="task-item__desc"
          >Merhaba, Bir araştırma için elimizdeki yaklaşık 30-45 dakikada tamamlanabilen, yetenek değerlendirme ile ilgili anketin görevi alacak kişi tarafından 5 kişiye...</p>
          <div class="task-item__endtime mt-3 d-flex align-items-center">
            <p class="d-flex align-items-center justify-content-between w-100">
              Başvuru için kalan zaman:
              <span>
                2 Gün
                <svg
                  title="İş verenler kalan son süre'den önce de bir aday seçebilirler, bu yüzden son başvuru süresini beklemeden, başvurunu yapmanı öneririz."
                  class="icon cursor-pointer"
                >
                  <use xlink:href="/_nuxt/assets/images/icons.svg#info" />
                </svg>
              </span>
            </p>
          </div>
          <div class="d-flex">
            <nuxt-link to="/task-detail" class="main-button cursor-pointer">Fiyat teklifi ver</nuxt-link>
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
  },
  methods: {
    openDropdown() {
      this.showDropDown = !this.showDropDown;
    }
  }
};
</script>

<style lang="scss">
.page-task {
  .task {
    position: relative;
    background-color: #eae8e8;
    &-item {
      position: relative;
      border-radius: 10px;
      box-shadow: 0 6px 8px 0px rgba(0, 42, 91, 0.1);
      background-color: #fdfdfd;
      padding: 30px;
      margin-bottom: 30px;
      height: 420px;
      &__lessons {
        font-size: 30px;
        color: #eec07c;
      }
      &__title {
        font-size: 18px;
        color: #002a5b;
        font-weight: 600;
        height: 22px;
        line-height: 1.2;
      }
      &__price {
        font-size: 60px;
        font-weight: 100;
        margin: 20px 0;
        color: #efbc70;
        margin-bottom: 14px;
        font-family: "Hind Siliguri", sans-serif;
        span {
          font-size: 26px;
          opacity: 0.8;
          position: relative;
          left: 0px;
        }
      }
      &__desc {
        font-size: 15px;
        line-height: 1.7;
        color: #002a5b;
        font-weight: 400;
        opacity: 0.9;
      }
      &__profile {
        width: 37px;
        border-radius: 100%;
      }
      &__location {
        font-size: 14px;
        color: #002a5b;
        opacity: 0.9;
        p {
          font-size: 12px;
        }
      }
      .main-button {
        position: relative;
        z-index: 9;
        padding: 10px 22px;
        width: 100%;
        text-align: center;
        margin-top: 22px;
        color: #ecbb71;
        border: 1px solid #ecbb71;
        font-weight: 600;
      }
      &:after {
        content: "";
        position: absolute;
        background-image: url(https://img.pngio.com/free-download-texture-mapping-clip-art-transparent-dirt-texture-texture-for-art-png-260_260.jpg);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
      }
      &__endtime {
        border-bottom: 1px solid #e7e7e7;
        padding-bottom: 8px;
        p {
          font-size: 14px;
          line-height: 1.7;
          color: #002a5b;
          font-size: 12px;
          opacity: 0.9;
          span {
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
      &__button {
        position: absolute;
        bottom: 29px;
        width: 322px;
      }
    }
  }
  &.private-task {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .author {
      p {
        font-size: 14px;
        font-size: 15px;
        line-height: 1.7;
        color: #002a5b;
        font-weight: 400;
        opacity: 0.9;
        margin-left: 10px;
      }
    }
  }
}
</style>
