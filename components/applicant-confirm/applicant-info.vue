<template>
  <div class="confirm-wrp">
    <div class="confirm-item position-relative d-flex flex-column">
      <div class="d-flex">
        <div class="confirm-item__img cursor-pointer">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
            alt
          />
        </div>
        <div class="confirm-item__text">
          <h3 class="confirm-item__name mb-1">{{selectedPersonDetail.applicantUserName}}</h3>
          <h4 class="confirm-item__department mb-2">{{selectedPersonDetail.applicantUniversity}} | {{selectedPersonDetail.applicanDepartment}}</h4>
          <p class="confirm-item__desc">
            Merhaba Gamze. Görevin için bana güvenip beni seçtiğin için teşekkür ederim. Detayları konuşabilmek için benimle iletişime geçebilirsin.
            <br />
          </p>
          <p class="confirm-item__desc confirm d-flex justify-content-between mt-3 size-17">
            <span class="d-flex align-items-center">
              <svg class="icon mr-2">
                <use xlink:href="~/assets/images/icons.svg#whatsapp" />
              </svg>{{selectedPersonDetail.applicantPhone}}
            </span>
            <span class="d-flex align-items-center">
              <svg class="icon mr-2">
                <use xlink:href="~/assets/images/icons.svg#email" />
              </svg> gamze@hotmail.com
            </span>
          </p>
        </div>
        <div class="confirm-item__change">
          <svg
            class="icon mr-2 cursor-pointer"
            v-b-tooltip.hover.v-success.bottom
            title="Aday Değiştir"
          >
            <use xlink:href="~/assets/images/icons.svg#change" />
          </svg>
        </div>
      </div>
      <div class="d-flex justify-content-end confirm-item__action">
        <a
          class="main-button red mt-3 color-white mr-3"
          v-b-modal.modal-confirm-dont-do
        >Aday Görevimi Yapmadı</a>
        <a
          class="main-button green mt-3 color-white"
          v-b-modal.modal-confirm-do
        >Aday Görevimi Başarıyla Tamamladı</a>
      </div>
    </div>

    <div class="dont-forget mt-4">
      <h4 class="mb-3">Şunları unutma;</h4>
      <p>- Aday ile iletişim kurduktan sonra, eğer adayın işinizi yapacağınıza emin olamadıysanız, veya aday bekleneni karşılaşmıyor ise ek ücret ödemeden diğer adaylara dönüp dilediğini seçebilirsin. Yalnız bunun 2 hakkın olduğunu da unutma.</p>
      <p>- Şu an ödediğin ücret bizim havuz hesabında bekletiliyor. Seçtiğin aday senin işini yaptıktan sonra yukarıdaki "Aday görevimi başarı ile tamamladı" butonuna baasıp çıkan mesajı onayladıktan sonra, ödeme adaya iletilecektir.</p>
      <p>- Eğer aday görevini yapmadıysa ve sorumsuz davrandıysa yukarıdaki "Aday görevimi yapmadı" butonuna basıp çıkan mesaja detay yazıp onayladıktan sonra, ödemeniz geri iade edilecektir ve adaya uyarı gidecektir. Bir daha tekrarlaması durumunda adayın üyeliği iptal edilecektir.</p>
    </div>
  </div>
</template>

<script>
export default {
   props:['selectedPersonDetail'],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.confirm {
  background-color: #eae8e8;
  &-item {
    width: 780px;
    margin-bottom: 70px;
    &:nth-child(2) {
      margin-left: auto;
      margin-bottom: 10px;
    }
    &__img {
      flex-shrink: 0;
      img {
        box-shadow: 0 0 0 30px rgba(127, 173, 244, 0.05098),
          0 0 0 20px rgba(241, 241, 241, 0.3098),
          0 0 0 10px rgba(127, 173, 244, 0.10196);
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
    &__text {
      position: relative;
      background-color: white;
      border-radius: 6px;
      padding: 25px;
      margin-left: 50px;
      margin-top: -20px;
      background-color: #fdfdfd;
      box-shadow: 0 5px 8px 0px #e2e2e2;
      &:after {
        content: "";
        position: absolute;
        top: 27%;
        transform: translateY(-50%);
        left: -15px;
        border-style: solid;
        border-top-width: 23px;
        border-right-width: 10px;
        border-left-width: 10px;
        border-top-color: #fdfdfd;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        transform: rotate(90deg);
      }
    }
    &__name {
      font-size: 17px;
      color: #ecbb71;
    }
    &__department {
      font-size: 12px;
      color: #5d5d5d;
      font-weight: 400;
      letter-spacing: 0.5px;
    }
    &__desc {
      font-size: 16px;
      line-height: 1.7;
      color: #002a5b;
      font-weight: 500;
      opacity: 0.9;
      background-color: transparent;
      &.confirm {
        .icon {
          color: #44b949;
          font-size: 21px;
        }
        span {
          color: #44b949;
          font-size: 18px;
        }
      }
    }
    &__action {
      opacity: 0.4;
      transition: all 0.3s;
    }
    &:hover {
      .confirm-item__action {
        opacity: 1;
      }
    }
    &__change {
      .icon {
        font-size: 45px;
        position: absolute;
        right: -70px;
        top: -15px;
        color: #002a5b;
      }
    }
  }
  .main-button {
    position: relative;
    padding: 10px 25px;
    font-size: 14px;
  }
}
</style>
