<template>
  <section class="task private">
    <h2 class="title">En Son Eklenen 10 Özel Ders</h2>
    <div class="task-wrp">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="mb-4" v-for="item in 10" :key="item.id">
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
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="d-flex justify-content-center">
        <nuxt-link
          to="/private-lessons-list"
          class="main-button border-orange"
        >Tüm İlanları Görmek İstiyorum</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 35,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/colors";
.home {
  .task {
    background-color: #eae8e8;
    &.private {
      .task-item {
        height: 420px;
      }
    }
    &-item {
      &__lessons {
        font-size: 30px;
        color: #eec07c;
      }
    }
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
