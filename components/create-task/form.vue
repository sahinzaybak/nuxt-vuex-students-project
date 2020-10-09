<template>
  <div class="create-task__wrp">
    <div class="row">
      <div class="col-md-6">
        <div class="create-task__item w-100">
          <input type="text" v-model="title" placeholder="Ne yaptırmak istiyorsun ?" />
        </div>
        <div class="create-task__item w-100 mb-0">
          <textarea v-model="detail" type="text" placeholder="Yaptırmak istediğin işin detaylı açıklaması"></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <div class="create-task__item w-100">
          <b-form-select v-model="selectedCategory">
            <option value="null" disabled>Kategoriler</option>
            <option v-for="(option, index) in taskCategoryList" :key="index" :value="option.category" :title="option.category || null">{{ option.category }}</option>
          </b-form-select>
        </div>
        <div class="d-flex justify-content-between">
          <div class="create-task__item w-50 mr-3">
            <input type="text" v-model="price" placeholder="Kişi başı bütçeniz (₺)" />
          </div>
          <div class="create-task__item w-50 ml-3">
            <input type="text" v-model="howMany" placeholder="Kaç kişiyle çalışacaksınız?" />
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="create-task__item w-50 mr-3">
            <date-picker v-model="startedDate" valueType="format" format="DD-MM-YYYY" placeholder="Görev Başlangıç Tarihi" class="w-100"></date-picker>
          </div>
          <div class="create-task__item w-50 ml-3">
            <date-picker v-model="finishedDate" valueType="format" placeholder="Görev Bitiş Tarihi" class="w-100"></date-picker>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="create-task__item w-50 mr-3">
            <!-- <b-form-select v-model="selected" :options="optionsCategory"></b-form-select> -->
              <input type="text" v-model="country" placeholder="İl" />
          </div>
          <div class="create-task__item w-50 ml-3">
            <!-- <b-form-select v-model="selected" :options="optionsCategory"></b-form-select> -->
             <input type="text" v-model="district" placeholder="İlçe" />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <a href class="main-button green mt-0" @click="createTask">Görevi Oluştur</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
       title:'',
       detail:'',
       selectedCategory: null,
       price:'',
       howMany:'',
       startedDate:'',
       finishedDate:'',
       country:'',
       district:'',
      
      // iller: {},
      // ilceler: [],
      // selectedIl: false,
      // bolge: [],
    };
  },
  created() {
    this.fetchTodoCategoryList;
  },
  computed: {
    ...mapState({ taskCategoryList: state => state.task.taskCategoryList }), //İlan detay
    ...mapActions({ fetchTodoCategoryList: "task/fetchTodoCategoryList" })
  },
   methods: {
      ...mapActions({ fetchCreateTask: "task/fetchCreateTask" }),
      createTask(){
         this.fetchCreateTask({
            _title:this.title,
            _detail:this.detail,
            _category:this.selectedCategory,
            _price:this.price,
            _howMany:this.howMany,
            _startedDate:this.startedDate,
            _finishedDate:this.finishedDate,
            _country:this.country,
            _district:this.district
         })
      }








      // getIl() {
		// 	  	 	fetch("http://localhost:3000/il-ilce.json")
      //             .then(result=>result.json())
      //             debugger
			  	 
      // },
      // getIlce() {
      //   this.selectedIl = true;
      //   this.ilceler = [];
      //   this.bolge = [];
      //   $axios.$get("http://localhost:3000/json/il-ilce.json").then(res => {
      //     res.data.forEach(i => {
      //       if (this.selected == i.il) {
      //         this.ilceler.push(i.ilce);
      //         this.bolge.push(i.bolge);
      //       }
      //     });
      //   });
      // }
    }
};
</script>

<style lang="scss">
</style>
