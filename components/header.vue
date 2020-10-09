<template>
  <div class="header sticky-top">
    <div class="container h-100">
      <div class="header-wrp d-flex align-items-center justify-content-between h-100">
        <div class="header-left">
          <!-- <a href="#" class="header-link">Hakkımızda</a> -->
          <a href="#" class="header-link">Nasıl Çalışır ?</a>
          <a href="#" class="header-link">Görevleri Gör, Para Kazan</a>
          <a href="#" class="header-link">Sıkça Sorulan Sorular</a>
          <a href="#" class="header-link">İletişim</a>
        </div>
        <div class="header-right">
          <a
            class="main-button borders mt-0 color-white fw-400" v-if="!userInfo"
            v-b-modal.modal-login
          >Giriş Yap / Üye Ol</a>
          <div class="header-right__profile" v-if="userInfo" @click="openDropdown">
            <div class="d-flex align-items-center">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
              />
              <p class="color-white ml-3 fw-400" v-if="userInfo">{{userInfo.info[0].userName}}</p>
              <svg class="icon ml-4 color-white size-12">
                <use xlink:href="~/assets/images/icons.svg#down-arrow" />
              </svg>
            </div>
            <ul class="header-right__dropdown" :class="{'active' : showDropDown}">
              <nuxt-link to="profile" class="header-right__item d-flex align-items-center">
                <svg class="icon mr-2">
                  <use xlink:href="~/assets/images/icons.svg#profile" />
                </svg>
                Profil
              </nuxt-link>
              <li class="header-right__item d-flex align-items-center">
                <svg class="icon mr-2">
                  <use xlink:href="~/assets/images/icons.svg#settings" />
                </svg>
                Ayarlar
              </li>
              <li class="header-right__item d-flex align-items-center" @click="signOut">
                <svg class="icon mr-2">
                  <use xlink:href="~/assets/images/icons.svg#logout" />
                </svg>
                Çıkış Yap
              </li>
            </ul>
          </div>
        </div>

        <b-modal id="modal-login" class="login" centered hide-header hide-footer>
          <b-tabs content-class="mt-0" justified>
            <b-tab title="Giriş Yap" active>
              <div class="login-wrp">
                <div class="login-item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#email" />
                  </svg>
                  <input type="text" v-model="email" placeholder="Kişisel Mail adresiniz" />
                </div>
                <div class="login-item d-flex">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#password" />
                  </svg>
                  <input type="text" v-model="password" placeholder="Şifre" />
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <a href="#" class="size-12" style="opacity: 0.5;">Şifremi unuttum</a>
                  <a class="main-button green mt-2 color-white cursor-pointer" @click="login">Giriş Yap</a>
                </div>
                   <h3 class="text-center pt-4" v-if="userInfo">{{userInfo.message}}</h3>
              </div>
            </b-tab>
            <b-tab title="Üye Ol">
              <div class="login-wrp">
                <div class="login-item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#user" />
                  </svg>
                  <input type="text" placeholder="Adınız Soyadınız" />
                </div>
                <div class="login-item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#email" />
                  </svg>
                  <input type="text" placeholder="Kişisel Mail adresiniz" />
                </div>
                <div class="login-item d-flex">
                  <div class="position-relative d-flex align-items-center">
                    <svg class="icon mr-2">
                      <use xlink:href="~/assets/images/icons.svg#password" />
                    </svg>
                    <input type="text" placeholder="Şifre" class="mr-4" />
                  </div>
                  <div class="position-relative d-flex align-items-center">
                    <svg class="icon mr-2">
                      <use xlink:href="~/assets/images/icons.svg#password" />
                    </svg>
                    <input type="text" placeholder="Şifre Tekrar" />
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                  <a href="#" class="main-button green mt-2">Üye Ol</a>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      showDropDown: false
    };
  },
  computed:{
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions({ fetchLogin: "fetchLogin", fetchSignOut: "fetchSignOut" }),
     login() {
      this.fetchLogin({
        email: this.email,
        password: this.password
      });
    },
    signOut(){
       this.fetchSignOut();
    },
    openDropdown() {
      this.showDropDown = !this.showDropDown;
    },
  }
};
</script>

<style lang="scss">
#modal-login___BV_modal_body_ {
  background-color: #f1f1f1;
  padding: 0;
  border-radius: 6px;
  .nav-tabs {
    margin-bottom: 0;
    background-color: #0a3f7d12;
  }
  .main-button {
    padding: 10px 20px;
  }
  .nav-link {
    display: flex;
    justify-content: center;
    padding: 15px;
    font-size: 18px;
    border: 0;
    opacity: 0.9;
  }
  .nav-tabs .nav-link.active {
    opacity: 1;
    background-color: #0a3f7d;
    color: white;
  }
  input {
    background-color: rgba(255, 255, 255, 0.90196);
    width: 100%;
    height: 47px;
    border: 1px solid gainsboro;
    padding: 0 16px;
    border-radius: 6px;
    box-shadow: 0 5px 9px 1px rgba(0, 42, 91, 0.01961);
    color: #909090;
    padding-left: 45px;
    font-size: 17.1px;
  }
  .login {
    &-wrp {
      padding: 30px;
      padding-top: 35px;
    }
    &-item {
      position: relative;
      margin-bottom: 16px;
      .icon {
        position: absolute;
        top: 15px;
        left: 17px;
        font-size: 17px;
        opacity: 0.6;
      }
    }
  }
}




.header {
  position: relative;
  width: 100%;
  padding-top: 31px;
  z-index: 99;
  height: 110px;
  &-wrp {
    border-bottom: 1px solid #ffffff1f;
    padding-bottom: 27px;
  }
  &-link {
    font-weight: 300;
    color: white;
    margin-right: 30px;
    top: 1px;
    font-size: 18px;
    &:last-child {
      margin-right: 0;
    }
  }
  &.page {
    background: #282929;
    background-image: url("https://epics.ieee.org/wp-content/uploads/2016/08/bigstock-Diverse-Architect-People-Group-98046365.jpg");
    background-size: cover;
    background-position-x: right;
    background-position-y: 460px;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #292928e3, #000c40f0);
      left: 0;
      top: 0;
      z-index: -1;
    }
  }
  &-right {
    position: relative;
    background-color: rgba(206, 206, 206, 0.18039);
    padding: 12px 22px;
    border-radius: 6px;
    // border-top-left-radius: 6px;
    // border-top-right-radius: 6px;
    &__profile {
      img {
        width: 30px;
        border-radius: 100%;
        box-shadow: 0 0 0 9px rgba(127, 173, 244, 0.05098),
          0 0 0 4px rgba(241, 241, 241, 0.3098),
          0 0 0 9px rgba(127, 173, 244, 0.10196);
        border-radius: 50%;
      }
    }
    &__dropdown {
      position: absolute;
      width: 100%;
      background-color: #639;
      box-shadow: #0c174026 0px 10px 19px -2px;
      left: 0;
      margin-top: 12px;
      z-index: 99;
      color: #525151;
      font-weight: 400;
      line-height: 2;
      height: 0;
      padding-top: 7px;
      opacity: 0;
      transition: all 0.7s;
      padding-bottom: 9px;
      background-color: #cecece2e;
      border: 1px solid #cecece2e;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;

      &.active {
        height: 200px;
        opacity: 1;
        background-color: #eae8e8;
        border: 1px solid #cccccd;
        .header-right__item {
          opacity: 1;
        }
      }
    }
    &__item {
      padding-left: 8px;
      border-bottom: 1px solid #00000017;
      padding-bottom: 15px;
      padding-top: 12px;
      margin: 0px 21px;
      margin-bottom: 3px;
      text-align: left;
      font-size: 15px;
      opacity: 0;
      transition: all 0.3s;
      transition-delay: 0.3s;
      &:last-child {
        border-bottom: 0;
      }
      .icon {
        font-size: 16px;
      }
    }
  }
}
</style>
