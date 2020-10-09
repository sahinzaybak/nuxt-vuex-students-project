import taskList from '~/services/task/taskList'
import taskDetail from '~/services/task/taskDetail'
import taskCategory from '~/services/task/taskCategory'
import doApplicant from '~/services/task/doApplicant'
import createTask from '~/services/task/createTask'

export const state = () => ({
   taskList: {},
   taskDetail: {},
   taskCategoryList: {}
});

export const mutations = {
   SET_TASK_LİST(state, payload) {
      state.taskList = payload;
   },
   SET_TASK_DETAIL(state, payload) {
      state.taskDetail = payload;
   },
   SET_TASK_CATEGORY_LIST(state, payload) {
      state.taskCategoryList = payload;
   },
   SET_TASK_DETAIL_REMOVE(state){
      state.taskDetail = {}
   }
};

export const actions = {
   // Bütün ilan listesini getirir
   fetchTaskList(vuexContext) {
      taskList.getTaskList().then(_taskList => {
         vuexContext.commit("SET_TASK_LİST", _taskList)
      })
   },

   // İlan detay bilgilerini getirir (_taskSlug)
   fetchTaskDetail(vuexContext, _slug) {
      taskDetail.getTaskDetail(_slug).then(_taskDetail => {
         vuexContext.commit("SET_TASK_DETAIL", _taskDetail)
      })
   },

   // Bütün ilan kategorilerini getirir
   fetchTodoCategoryList(vuexContext) {
      taskCategory.getCategoryList().then(_taskCategoryList => {
         vuexContext.commit("SET_TASK_CATEGORY_LIST", _taskCategoryList)
      })
   },

   // İlana aday ol
   fetchDoApplicant(vuexContext, applicantInfo) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      doApplicant.postdoAppliacant(applicantInfo);
   },

   // Bütün ilan kategorilerini getirir
   fetchCreateTask(vuexContext, createTaskInfo) {
      let token = vuexContext.rootGetters.accessToken; //Postman Bearer Token işlevi görüyor.
      this.$axios.setToken(token, 'Bearer');
      createTask.postCreateTask(createTaskInfo).then(value => {
         console.log(value)
      })
   },

   //Sayfadan çıkıldığı zaman state'i temizle.
   fetchTaskDetailRemove(vuexContext){
      vuexContext.commit("SET_TASK_DETAIL_REMOVE")
   }
};

export const getters = {

};
