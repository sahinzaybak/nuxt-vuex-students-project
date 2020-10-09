import applicantList from '~/services/applicants/applicantList'
import applicantSelectPerson from '~/services/applicants/applicantSelectPerson'
import applicantSelectedPersonDetail from '~/services/applicants/applicantSelectedPersonDetail'
import doDiscuss from '~/services/user/doDiscuss'
import isTodoDoingApplicant from '~/services/user/isTodoDoingApplicant'

export const state = () => ({
   applicantList: {},
   selectedPersonDetail: {}
});

export const mutations = {
   SET_APPLICANT_LIST(state, payload) {
      state.applicantList = payload
   },
   SET_SELECTED_PERSON_DETAIL(state, payload) {
      state.selectedPersonDetail = payload
   }
};


export const actions = {
   //İlana aday olanların listesi
   fetchApplicantList(vuexContext, todoId) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      applicantList.getApplicantList(todoId).then(_applicantList => {
         vuexContext.commit("SET_APPLICANT_LIST", _applicantList)
      })
   },

   //İlana aday olanlardan birini seç
   fetchApplicantSelectPerson(vuexContext, _selectPersonInfo) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      applicantSelectPerson.postApplicantSelectPerson({ _taskId: _selectPersonInfo._taskId, _userId: _selectPersonInfo._userId }).then(value => {
      });
   },

   //Aday seçip ödeme yaptıktan sonra adayın durumu(işi yaptı,yapmadı ..vs) için aday olunan bilgileri getir. Üstteki postu getir..
   fetchApplicantSelectedPersonDetail(vuexContext, _todoId) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      applicantSelectedPersonDetail.postApplicantSelectedPersonDetail(_todoId).then(_selectedPersonDetail => {
         vuexContext.commit("SET_SELECTED_PERSON_DETAIL", _selectedPersonDetail)
      });
   },

   //İşi bitiren adaya yorum yap, puan ver.
   fetchDoDiscuss(vuexContext, _discussInfo) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      doDiscuss.postDoDiscusss(_discussInfo).then(value => {
      });
   },

    //İşi bitiren adaya yorum yapıp puan verdikten sonra "isTodoDoing" true yada false yap
    fetchTodoDoingApplicant(vuexContext, _isDoingInfo) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      isTodoDoingApplicant.putisTodoDoingApplicant(_isDoingInfo);
   },
};

export const getters = {

};
