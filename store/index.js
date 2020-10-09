import login from '~/services/user/login'
import userUpdate from '~/services/user/userUpdate'
import userProfile from '~/services/user/profile'
import userDiscuss from '~/services/user/discuss'
import applicantListOnePerson from '~/services/applicants/applicantListOnePerson'

export const state = () => ({
   userInfo: {},
   profileInfo: {},
   profileApplicantGreenArea: {},
   discuss: {},
   userAccessToken: null,
});

export const mutations = {
   SET_LOGIN_USER_INFO(state, payload) {
      state.userInfo = payload;
   },
   SET_USER_ACCESS_TOKEN(state, _userAcessToken) {
      state.userAccessToken = _userAcessToken;
   },
   SET_LOGOUT(state) {
      state.userInfo = null;
      state.userAccessToken = null;
   },
   SET_PROFILE_INFO(state, payload) {
      state.profileInfo = payload;
   },
   SET_DISCUSS(state, payload) {
      state.discuss = payload;
   },
   SET_PROFILE__GREEN_AREA(state, payload) {
      state.profileApplicantGreenArea = payload;
   }
};

export const actions = {

   // Her sayfa YENİLENDİĞİNDE çalışır, nuxt özelinde bir fonksiyon (nuxtServerInit) => Sayfa yenilendiğinde state değerlerim(kullanıcı oturum bilgilerim) kaybolmasın..
   nuxtServerInit({ commit }) {
      commit("SET_LOGIN_USER_INFO", this.$cookies.get("userInfo"));
      commit("SET_USER_ACCESS_TOKEN", this.$cookies.get("userAccessToken"));
   },

   // Login 
   fetchLogin(vuexContext, value) {
      login.postLogin(value).then(_getLoginUserInfo => {
         $nuxt.$axios.defaults.headers.common.Authorization = 'Bearer ' + _getLoginUserInfo.token; //Axios için access token
         vuexContext.commit("SET_USER_ACCESS_TOKEN", _getLoginUserInfo.token); //Token bilgisini state yazdırdım.

         this.$cookies.set("userAccessToken", _getLoginUserInfo.token); //Apiden gelen token bilgisini "userAccessToken" isimli cookie'ye attım.
         vuexContext.commit("SET_LOGIN_USER_INFO", _getLoginUserInfo); //Giriş yapan kullanıcı bilgilerini state'e yazdırdım

         this.$cookies.set("userInfo", _getLoginUserInfo); //Giriş yapan kullanıcı bilgilerini cookiye'e yazdırdım
         $nuxt.$bvModal.hide('modal-login'); // Üye olunduğunda üyelik modal'ını kapat.
      })
   },

   //LogOut 
   fetchSignOut(vuexContext) {
      vuexContext.commit("SET_LOGOUT");
      this.$cookies.remove("userInfo");
      this.$cookies.remove("userAccessToken");
      $nuxt.$router.push('/'); // Anasayfaya yönlendir.
   },

   // Student Control sayfası
   fetchUserUpdate(vuexContext, _userNewInfo) {
      userUpdate.putUserUpdate({ userInfo: _userNewInfo, userId: vuexContext.rootGetters.userInfo.info[0]._id }).then(value => { //newInfo,userId
         console.log(value);
      });
   },

   // Profil Bilgileri
   fetchProfileInfo(vuexContext, _userSlug) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      userProfile.getProfile(_userSlug).then(_profileInfo => { //Profil bilgileri
         vuexContext.commit("SET_PROFILE_INFO", _profileInfo);
         userDiscuss.getDiscuss(_profileInfo._id).then(_discuss => { //Kullanıcıya yapılan yorumlar
            vuexContext.commit("SET_DISCUSS", _discuss)
         });
      })
   },

   // Profil sayfasındaki "öğrencinin sana mesajı" alanı (Green area)
   fetcProfileGreenArea(vuexContext, _greenAreaInfo) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      applicantListOnePerson.getOneApplicantDetail({taskId:_greenAreaInfo._taskId,userSlug:_greenAreaInfo._userSlug}).then(_applicantList => {
         vuexContext.commit("SET_PROFILE__GREEN_AREA", _applicantList)
      })
   },
};

export const getters = {
   userInfo(state) { return state.userInfo },

   accessToken(state) { return state.userAccessToken },

   universityControl(state) { // üniversite öğrencisi formu'nu doldurmuş mu?
      if (state.userInfo.info[0].university.universityName == "") return false
      else return true
   },

   profileGreenArea(state) { return state.profileApplicantGreenArea },
};
