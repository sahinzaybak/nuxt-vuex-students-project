<template>
  <div class="applicant-wrp">
    <div class="applicant-item d-flex flex-column">
      <div class="row">
        <div class="applicamt-item__col col-md-6 mb-3 p-4 pb-0">
          <div class="d-flex">
            <div class="applicant-item__img cursor-pointer">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
                alt
              />
            </div>
            <div class="applicant-item__text">
              <h3 class="applicant-item__name mb-1">Şahin Z.</h3>
              <h4 class="applicant-item__department mb-2">Beykent Üniversitesi | Grafik Tasarım</h4>
              <h5 class="applicant-item__price">
                120
                <span>₺</span>
              </h5>
              <p
                class="applicant-item__desc"
              >Merhabalar :) Yaratıcı, modern ve anlaşılır bir tasarım istiyorsanız benimle iletişime geçebilirsiniz hoşçakalın :)</p>
              <div class="d-flex applicant-wrp__actions justify-content-between mt-3">
                <nuxt-link to="/private-lessons-profile" class="d-flex align-items-center item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#info" />
                  </svg>
                  <p>Adayı İncele</p>
                </nuxt-link>
                <div class="d-flex align-items-center item" v-b-modal.private-lessons-selected>
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#tick" />
                  </svg>
                  <p>Adayı Seç</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="applicamt-item__col col-md-6 mb-3 pb-3 p-4">
          <div class="d-flex">
            <div class="applicant-item__img cursor-pointer">
              <img
                src="https://scontent.fist7-1.fna.fbcdn.net/v/t1.0-1/p200x200/116872535_10224194667993888_7269194563706145725_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=xk6OwGW0nAwAX_eGp3w&_nc_ht=scontent.fist7-1.fna&tp=6&oh=68b719150148cdf135314f3a9e52da7a&oe=5F76AEC8"
                alt
              />
            </div>
            <div class="applicant-item__text">
              <h3 class="applicant-item__name mb-1">Gamze U.</h3>
              <h4
                class="applicant-item__department mb-2"
              >Kültür Üniversitesi | Bankacılık ve Sigortacılık</h4>
              <h5 class="applicant-item__price">
                120
                <span>₺</span>
              </h5>
              <p
                class="applicant-item__desc"
              >Merhabalar :) Yaratıcı, modern ve anlaşılır bir tasarım istiyorsanız benimle iletişime geçebilirsiniz hoşçakalın :)</p>
              <div class="d-flex applicant-wrp__actions justify-content-between mt-3">
                <nuxt-link to="/private-lessons-profile" class="d-flex align-items-center item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#info" />
                  </svg>
                  <p>Adayı İncele</p>
                </nuxt-link>
                <div class="d-flex align-items-center item" v-b-modal.private-lessons-selected>
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#tick" />
                  </svg>
                  <p>Adayı Seç</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="applicamt-item__col col-md-6 p-4">
          <div class="d-flex">
            <div class="applicant-item__img cursor-pointer">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
                alt
              />
            </div>
            <div class="applicant-item__text">
              <h3 class="applicant-item__name mb-1">Şahin Z.</h3>
              <h4 class="applicant-item__department mb-2">Beykent Üniversitesi | Grafik Tasarım</h4>
              <h5 class="applicant-item__price">
                120
                <span>₺</span>
              </h5>
              <p
                class="applicant-item__desc"
              >Merhabalar :) Yaratıcı, modern ve anlaşılır bir tasarım istiyorsanız benimle iletişime geçebilirsiniz hoşçakalın :)</p>
              <div class="d-flex applicant-wrp__actions justify-content-between mt-3">
                <nuxt-link to="/private-lessons-profile" class="d-flex align-items-center item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#info" />
                  </svg>
                  <p>Adayı İncele</p>
                </nuxt-link>
                <div class="d-flex align-items-center item" v-b-modal.private-lessons-selected>
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#tick" />
                  </svg>
                  <p>Adayı Seç</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="applicamt-item__col col-md-6 p-4">
          <div class="d-flex">
            <div class="applicant-item__img cursor-pointer">
              <img
                src="https://scontent.fist7-1.fna.fbcdn.net/v/t1.0-1/p200x200/116872535_10224194667993888_7269194563706145725_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=xk6OwGW0nAwAX_eGp3w&_nc_ht=scontent.fist7-1.fna&tp=6&oh=68b719150148cdf135314f3a9e52da7a&oe=5F76AEC8"
                alt
              />
            </div>
            <div class="applicant-item__text">
              <h3 class="applicant-item__name mb-1">Gamze U.</h3>
              <h4
                class="applicant-item__department mb-2"
              >Kültür Üniversitesi | Bankacılık ve Sigortacılık</h4>
              <h5 class="applicant-item__price">
                120
                <span>₺</span>
              </h5>
              <p
                class="applicant-item__desc"
              >Merhabalar :) Yaratıcı, modern ve anlaşılır bir tasarım istiyorsanız benimle iletişime geçebilirsiniz hoşçakalın :)</p>
              <div class="d-flex applicant-wrp__actions justify-content-between mt-3">
                <nuxt-link to="/private-lessons-profile" class="d-flex align-items-center item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#info" />
                  </svg>
                  <p>Adayı İncele</p>
                </nuxt-link>
                <div class="d-flex align-items-center item" v-b-modal.private-lessons-selected>
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#tick" />
                  </svg>
                  <p>Adayı Seç</p>
                </div>
              </div>
            </div>
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
.applicant {
  background-color: #eae8e8;
  &-item {
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
      height: 292px;
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
      color: #4e4e4e;
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
      font-weight: 400;
      opacity: 0.9;
    }
    &__action {
      opacity: 0.4;
      transition: all 0.3s;
    }
    &:hover {
      .applicant-item__action {
        opacity: 1;
      }
    }
    &__price {
      font-size: 46px;
      font-weight: 100;
      margin: 10px 0;
      color: #ebc071;
      margin-bottom: 8px;
      font-family: "Hind Siliguri", sans-serif;

      span {
        font-size: 22px;
      }
    }
  }
  .main-button {
    position: relative;
    padding: 10px 14px;
    font-size: 13px;
    &:after {
      content: "";
      position: absolute;
      bottom: 31px;
      transform: translateY(-50%);
      left: 33px;
      border-style: solid;
      border-top-width: 16px;
      border-right-width: 16px;
      border-left-width: 16px;
      border-top-color: #18bd3b;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      transform: rotate(180deg);
    }
  }
  &-wrp {
    &__actions {
      border-top: 1px solid #e7e7e7;
      padding-top: 15px;
      .item {
        &:first-child {
          color: #002a5b;
        }
      }
      &:last-child {
        color: #28a745;
      }
      p {
        font-size: 15.8px;
      }
    }
  }
}
</style>
