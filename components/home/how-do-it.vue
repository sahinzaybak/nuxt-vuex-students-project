<template>
  <section class="howdo">
    <div class="container">
      <h2 class="title">Sistem Nasıl Çalışıyor?</h2>
      <div class="d-flex flex-column">
        <div class="howdo-wrp mb-5">
          <h3 class="howdo-title mb-4 color-green"> <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#plus"/></svg>Eğer Görev Oluşturup, İşini Yaptırmak İstiyorsan</h3>
          <div class="d-flex justify-content-between">
            <div class="howdo-item">
              <div class="howdo-item__icon mr-3">
                <span class="howdo-item__count">1</span>
                <svg class="icon">
                  <use xlink:href="~/assets/images/icons.svg#tasks" />
                </svg>
              </div>
              <p class="howdo-item__desc">Vereceğin görevin bütçesini, konumu, tarihini belirle, görevini ilana koy.
              </p>
            </div>
            <div class="howdo-item">
              <div class="howdo-item__icon mr-3">
                <span class="howdo-item__count">2</span>
                <svg class="icon">
                  <use xlink:href="~/assets/images/icons.svg#student" />
                </svg>
              </div>
              <p class="howdo-item__desc">Görevine aday olan üniversite öğrencilerinin profilleri arasından dilediğini seç.
              </p>
            </div>
            <div class="howdo-item">
              <div class="howdo-item__icon mr-3">
                <span class="howdo-item__count">3</span>
                <svg class="icon">
                  <use xlink:href="~/assets/images/icons.svg#money" />
                </svg>
              </div>
              <p class="howdo-item__desc">İşin bitsin, puanını ver, sen zaman kazan öğrenci para kazansın.
              </p>
            </div>
          </div>
        </div>
        <div class="howdo-wrp mt-4">
          <h3 class="howdo-title mb-4 color-blue"><svg class="icon mr-2 color-blue"><use xlink:href="~/assets/images/icons.svg#create"/></svg>Eğer Öğrenciysen</h3>
          <div class="d-flex justify-content-between">
            <div class="howdo-item">
              <div class="howdo-item__icon mr-3">
                <span class="howdo-item__count">1</span>
                <svg class="icon">
                  <use xlink:href="~/assets/images/icons.svg#search-job" />
                </svg>
              </div>
              <p class="howdo-item__desc">Görevleri görüntüle, dilediğine aday ol.</p>
            </div>
            <div class="howdo-item">
              <div class="howdo-item__icon mr-3">
                <span class="howdo-item__count">2</span>
                <svg class="icon">
                  <use xlink:href="~/assets/images/icons.svg#select" />
                </svg>
              </div>
              <p class="howdo-item__desc">Görevi açan kişi adaylar arasından seçimini yaptığı gibi göreve başla!</p>
            </div>
            <div class="howdo-item">
              <div class="howdo-item__icon mr-3">
                <span class="howdo-item__count">3</span>
                <svg class="icon">
                  <use xlink:href="~/assets/images/icons.svg#economic" />
                </svg>
              </div>
              <p class="howdo-item__desc">Görevini tamamla, paranı kazan!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.howdo {
  background-color: #f1f1f1;
  &-title {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid #18bd3b3b;
    padding-bottom: 15px;
    .icon{
        font-size: 40px;
    }
  }
  &-wrp {
    &:last-child {
      .howdo-item__count {
        color: #0a376b57;
      }
      .icon {
        color: #0b4992a8;
      }
      .howdo-title {
        border-bottom: 1px solid #0b49923b;
      }
      .howdo-item {
        box-shadow: #4978ae24 3px 9px 19px 3px;
        border: 1px solid #0b499238;
      }
    }
  }
  &-item {
    position: relative;
    background-color: #ffffffad;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 270px;
    overflow: hidden;
    border: 1px solid #18bd3b38;
    box-shadow: #19bb3b14 3px 9px 19px 3px;
    .icon {
      font-size: 80px;
      color: #18bd3b94;
    }
    &__icon {
      width: max-content;
      padding: 27px;
      padding-top: 0;
      border-radius: 100px;
    }
    &__count {
        font-family: "Knewave", cursive;
        position: absolute;
        font-size: 298px;
        color: rgba(24,189,59,0.43137);
        left: -8px;
        opacity: 0.1;
        top: -101px;
    }
    &__desc {
      max-width: 315px;
      font-size: 17px;
      text-align: center;
      color: #525252;
      padding: 0 18px;
    }
  }
}
</style>
