<template>
  <div class="col-md-6" v-if="Object.keys(taskDetail).length != 0">
    <div class="detail-top">
      <h1 class="detail-title mb-4">{{taskDetail.title}}</h1>
      <div class="d-flex align-content-center justify-content-between">

         <!-- Eğer ilan giriş yapan kullanıcıya aitse ona aday listesini görmesi için butonu göster -->
         <div v-if="taskDetail.createdUserId == userInfo.info[0]._id"> 
            <nuxt-link :to="(`/applicant/${taskDetail._id}`)"> GİT </nuxt-link>
         </div>
          <!-- Eğer ilan giriş yapan kullanıcıya aitse ona aday listesini görmesi için butonu göster -->

        <div class="d-flex align-items-center detail-info__item">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#marker" />
          </svg>
          <p>
            Konum:
            <span class="fw-600">{{taskDetail.country}}-{{taskDetail.district}}</span>
          </p>
        </div>
        <div class="d-flex align-items-center detail-info__item">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#task" />
          </svg>
          <p>
            Kategori:
            <span class="fw-600">{{taskDetail.category}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="detail-info">
      <div class="detail-info__profile d-flex align-items-center">
        <div class="detail-info__img mr-5">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
          />
        </div>
        <div class="d-flex flex-column">
          <p class="mb-2">
            <span class="fw-600">{{taskDetail.userName}}</span> tarafından oluşturuldu.
          </p>
          <div class="d-flex align-items-center detail-info__item mb-2">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#clock" />
            </svg>
            <p>
              Görev Başlangıç Tarihi:
              <span class="fw-600">{{taskDetail.startedDate}}</span>
            </p>
          </div>
          <div class="d-flex align-items-center detail-info__item">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#clock" />
            </svg>
            <p>
              Görev Bitiş Tarihi:
              <span class="fw-600">{{taskDetail.finishedDate}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <p class="mb-1 fw-600" style="font-size:14px">Görev Detayı</p>
    <p
      class="detail-desc fw-400"
    >{{taskDetail.detail}}</p>
    <div class="d-flex justify-content-between mt-3 mb-4">
      <div class="detail-header">
        <p>
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#money-single" />
          </svg>Bütçe :
          <span class="fw-600">{{taskDetail.price}} ₺</span>
        </p>
      </div>
      <div class="detail-header">
        <p>
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#nominee" />
          </svg>Aday Sayısı :
          <span class="fw-600">{{taskDetail.applicantCount}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
   props:["taskDetail","userInfo"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.detail {
  position: relative;
  background-color: #eae8e8;
  padding: 60px 0;
  padding-bottom: 20px;
  &:after {
    content: "";
    position: absolute;
    background-image: url(https://assets.sikayetvar.com/public/images/banner-image.png);
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    height: 100%;
    top: 10vw;
    opacity: 0.4;
    background-position-x: 58vw;
    pointer-events: none;
  }
  &-category {
    display: inline-block;
    padding: 6px 0px;
    border-radius: 6px;
    color: #e4a13c;
    margin-bottom: 10px;
    font-size: 14px;
  }
  &-title {
    font-size: 29px;
    font-weight: 500;
    color: #3e3c3a;
    border-bottom: 1px solid #d2d2d2;
    padding-bottom: 12px;
    font-weight: 600;
  }
  &-desc {
    font-size: 15.8px;
    border-bottom: 1px solid #d6d6d6;
    padding-bottom: 26px;
    font-weight: 400;
    opacity: 0.9;
    line-height: 1.6;
  }
  &-header {
    font-size: 18px;
    color: #4caf50;
    span {
      font-size: 21px;
    }
  }
  &-info {
    &__profile {
      margin: 50px 0;
    }
    &__img {
      img {
        box-shadow: 0 0 0 30px #7fadf40d, 0 0 0 20px #f1f1f14f,
          0 0 0 10px #7fadf41a;
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      p {
        font-size: 14px;
      }
    }
    &__item {
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
