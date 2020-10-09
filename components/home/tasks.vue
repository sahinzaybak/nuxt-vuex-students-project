<template>
  <section class="task">
    <h2 class="title">En Son Eklenen 10 Görev</h2>
    <div class="task-wrp">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="mb-4" v-for="task in taskList.list" :key="task.id">
          <nuxt-link :to="(`/task-detail/${task.slug}`)">
            <div class="task-item">
              <h2 class="task-item__title">{{task.title}}</h2>
              <h3 class="task-item__price">
                {{task.price}}
                <span>₺</span>
              </h3>
              <p class="task-item__desc">{{task.detail}}</p>
              <div class="task-item__endtime mt-3 d-flex align-items-center">
                <p class="d-flex align-items-center justify-content-between w-100">
                  Başvuru için kalan zaman:
                  <span>2 Gün</span>
                </p>
              </div>
              <div class="d-flex">
                <nuxt-link to="/task-detail" class="main-button cursor-pointer">Göreve Aday Ol</nuxt-link>
              </div>
            </div>
          </nuxt-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="d-flex justify-content-center">
        <a href class="main-button border-orange">Tüm Görevleri Görmek İstiyorum</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
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
  },
  created() {
    this.fetchTaskList;
  },
  computed: {
    ...mapState({ taskList: state => state.task.taskList }), //Tüm task listesini getirir.
    ...mapActions({ fetchTaskList: "task/fetchTaskList" }) //Tüm task listesini getirmesi için çağrılan action..
  }
};
</script>

<style lang="scss">
@import "~/assets/colors";
.home {
  .task {
    background-color: #eae8e8;
    &-item {
      position: relative;
      border-radius: 10px;
      box-shadow: 0 6px 8px 0px rgba(0, 42, 91, 0.1);
      background-color: #fdfdfd;
      padding: 30px;
      height: 400px;
      margin-bottom: 0;
      &__title {
        font-size: 18px;
        color: #002a5b;
        font-weight: 700;
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
          left: -7px;
        }
      }
      &__desc {
        font-size: 15px;
        line-height: 1.7;
        color: #002a5b;
        font-weight: 400;
        opacity: 0.9;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
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
        //   z-index: -1;
      }
    }
    .swiper-container {
      padding: 0 120px;
      padding-bottom: 60px;
    }
  }
}
</style>
