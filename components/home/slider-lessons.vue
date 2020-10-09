<template>
  <div class="slider private mt-0">
    <div class="slider-img">
      <img
        src="https://trainingindustry.com/content/uploads/2020/05/Cross-cultural-Communication-in-a-Remote-Workplace-5.12.20.jpg"
      />
      <div class="slider-center">
        <h1 class="slider-center__title mb-3 fw-400">
          <strong>Özel ders</strong> vermek için alanında uzman
          <br />öğrenciler burada seni bekliyor !
        </h1>
        <p class="slider-center__desc fw-300">
          Hemen bir özel ders oluştur işini gör veya öğrenciysen
          <br />özel derse saatlik teklif ver, paranı kazan.
        </p>
        <div class="d-flex align-items-center justify-content-center">
          <nuxt-link
            to="/create-task"
            href="#"
            class="main-button green mr-4 d-flex align-items-center"
          >
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#plus" />
            </svg>
            <p>Görev Oluştur, İşini Gör</p>
          </nuxt-link>
          <p class="mt-4 mr-4 pt-2">veya</p>
          <nuxt-link to="/tasks" class="main-button blue d-flex align-items-center">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#create" />
            </svg>
            <p>Görev Yap, Para Kazan</p>
          </nuxt-link>
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
.slider {
  margin-top: -124px;
  &.private {
    .slider-img {
      height: 500px;
    }
    .slider-center{
       top: 51%;
    }
  }
  &-img {
    position: relative;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #0c0c0ca1, #000c40d9);
      left: 0;
      top: 0;
    }
  }
  &-center {
    position: absolute;
    top: 56%;
    transform: translateY(-50%);
    color: white;
    z-index: 9;
    text-align: center;
    width: 100%;
    &__title {
      line-height: 1.3;
    }
    &__desc {
      font-size: 18px;
      font-weight: 300;
    }
    .icon {
      font-size: 29px;
      color: white;
    }
  }
}
</style>
