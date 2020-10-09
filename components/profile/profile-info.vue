<template>
  <div v-if="Object.keys(profileInfo).length != 0">
    <div>
      <div class="selected-lessons sticky-top">
        <h3>{{profileGreenArea.todoName}}</h3>
        <a class="main-button green mt-0" v-b-modal.applicant-confirm>Öğrenciyi Seç</a>
      </div>
      <div class="profile-item p-5 selected-lessons__message">
        <h4 class="profile-item__title d-flex align-items-center mb-3">Öğrencinin sana özel mesajı</h4>
        <p
          class="profile-item__desc"
        >{{profileGreenArea.message}}</p>
      </div>
    </div>
    <div class="profile-item p-5">
      <div class="profile-item__wrp mb-4">
        <h4 class="profile-item__title d-flex align-items-center mb-2">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#about" />
          </svg>
          Hakkında
        </h4>
        <p class="profile-item__desc">{{profileInfo.about.aboutText}}</p>
      </div>

      <div class="profile-item__wrp mb-4">
        <h4 class="profile-item__title d-flex align-items-center mb-3">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#categories" />
          </svg>
          Görev yapmak istediği kategoriler
        </h4>
        <div class="d-flex">
          <p
            class="profile-item__tag"
            v-for="item in profileInfo.about.wantCategories"
            :key="item.id"
          >{{item}}</p>
        </div>
      </div>

      <div class="profile-item__wrp mb-0 pb-0">
        <h4 class="profile-item__title d-flex align-items-center mb-3">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#portfolio" />
          </svg>Portfoliosu
        </h4>
        <div class="profile-item__portfolio">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="mb-4" v-for="item in 4" :key="item.id">
              <div class="portfolio-img">
                <img
                  src="https://bgcp.bionluk.com/images/order/526x296/a08b64fb-21cd-4bdd-a4ef-0441aa6b0ce9.png"
                  alt
                />
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="profile-item comments p-5 mt-4">
      <div class="profile-item__wrp mb-4 pb-0">
        <h4 class="profile-item__title d-flex align-items-center mb-3">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#about" />
          </svg>
          {{profileInfo.userName}} için yapılan yorumlar ({{discuss.count}})
        </h4>
      </div>
      <div class="comments-item" v-for="item in discuss.data" :key="item.id">
        <div class="d-flex">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
            alt
          />
          <div class="mt-1 ml-3 w-100">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="profile-item__name mb-1">{{item.todo}}</h3>
                <p class="profile-item__university mb-2">{{item.discussOwner}}</p>
              </div>
              <div>
                <p class="discuss-type green" v-if="item.star > 1">Olumlu Yorum</p>
                <p class="discuss-type red" v-if="item.star == 1">Olumsuz Yorum</p>
              </div>
            </div>

            <div class="rate-item d-flex align-items-center">
              Verdiği Puan:
              <rate :length="5" :value="item.star" />
            </div>

            <h4
              class="comments-item__desc mt-3"
            >{{item.message}}</h4>
          </div>
        </div>
      </div>
    </div>
    <applicantSelectedPopup :applicantUserName="profileInfo.userName" :applicantUserId="profileGreenArea.applicantUserId" :taskId="this.$route.query.taskId" :taskPrice="profileGreenArea.todoPrice"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import applicantSelectedPopup from "~/components/applicant/applicant-selected-popup";
export default {
  components: {applicantSelectedPopup},
  props: ["profileInfo","discuss"],
  data() {
    return {
       taskId:'',
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: true,
        speed: 1200,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
   created(){
      this.greenArea();
   },
   computed:{
   ...mapGetters(['profileGreenArea'])
   },
   methods:{
      ...mapActions({ fetcProfileGreenArea: "fetcProfileGreenArea" }),
      greenArea(){
         this.fetcProfileGreenArea({
            _userSlug: this.$route.params.userSlug,
            _taskId:  this.$route.query.taskId
         })
      }
   }

};
</script>

<style lang="scss">
.profile {
  padding-top: 50px;
  background-color: #eae8e8;
  &-item {
    background-color: #fdfdfd;
    box-shadow: 0 5px 8px 0px #e2e2e2;
    padding: 61px 0;
    border-radius: 6px;
    padding-bottom: 26px;
    &__title {
      font-size: 16.9px;
      font-weight: 600;
      color: #565656;
      .icon {
        font-size: 25px;
        color: #626262;
        opacity: 0.5;
      }
    }
    &__desc {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.8;
      color: #002a5b;
      opacity: 0.9;
    }
    &__tag {
      padding: 8px 11px;
      background-color: #76d78b;
      border-radius: 6px;
      border: 1px solid #76d78b;
      margin-right: 13px;
      font-size: 13.8px;
      /* font-weight: 400; */
      color: #fdfdfd;
    }
    &__portfolio {
      .swiper-wrapper {
        padding-top: 14px;
      }
      .portfolio-img {
        position: relative;
        border-radius: 10px;
        box-shadow: 0 1px 8px 0px #002a5b1a;
        background-color: #fdfdfd;
        padding: 12px;
        margin-bottom: 30px;
      }
    }
  }
  .main-button {
    padding: 9px 16px;
    margin-top: 35px;
    display: inline-block;
    border-radius: 4px;
    transition: all 0.3s;
    color: white;
    text-align: center;
    border: 1px solid #ea3a5a;
    color: #ea3a5a;
    font-size: 14px;
    width: 100%;
    .icon {
      font-size: 24px;
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
      .discuss-type {
       color: white;
       padding: 6px 11px;
       font-size: 10.5px;
       letter-spacing: 0.4px;
       padding-bottom: 5px;
       border-radius: 6px;
        &.green{
         background-color: #2fc44f;
        }
        &.red{
         background-color: #eb375c;
        }
      }
    }
    .Rate {
       pointer-events: none;
      .icon {
        width: 20px;
        height: 20px;
      }

      &__star {
        padding: 1px;
        &:first-child {
          padding-left: 0;
        }
        &.filled{
           .icon{
                color: #ecbb71;
           }
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
