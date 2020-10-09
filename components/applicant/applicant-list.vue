<template>
  <div class="applicant-wrp">
    <div class="applicant-item d-flex flex-column">
      <div class="row" v-if="Object.keys(applicantList).length != 0">
        <div class="applicamt-item__col col-md-6 mb-3 p-4 pb-0" v-for="item in applicantList" :key="item.id">
          <div class="d-flex">
            <div class="applicant-item__img cursor-pointer">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFFAaEL1phEVg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Av12ss2s2oJIxnNJm0EdmQQfeZrWeqsQ48q3fPzNiko"
                alt 
              />
            </div>
            <div class="applicant-item__text">
              <h3 class="applicant-item__name mb-1">{{item.applicantUser}}</h3>
              <h4 class="applicant-item__department mb-3">{{item.applicantUniversity}} | {{item.applicantDepartment}}</h4>
              <p
                class="applicant-item__desc"
              >{{item.message}}</p>
              <div class="d-flex applicant-wrp__actions justify-content-between mt-3">
                <nuxt-link :to="{path: `/profile/${item.slug}`, query : {taskId: $nuxt.$route.params.taskId}}" class="d-flex align-items-center item">
                  <svg class="icon mr-2">
                    <use xlink:href="~/assets/images/icons.svg#info" />
                  </svg>
                  <p>Adayı İncele</p>
                </nuxt-link>
                <div class="d-flex align-items-center item" @click="modalSend(item.applicantUser,item.applicantUserId,$nuxt.$route.params.taskId,item.todoPrice)" v-b-modal.applicant-confirm>
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
     <!-- Aday seçildiği zaman çıkaacak olan modal-->
   <applicantSelectedPopup :applicantUserName="applicantUserName" :applicantUserId="applicantUserId" :taskId="taskId" :taskPrice="taskPrice"/>
     
  </div>
</template>

<script>
import applicantSelectedPopup from "~/components/applicant/applicant-selected-popup";
export default {
   components: {applicantSelectedPopup},
   props:["applicantList"],
  data() {
    return {
      applicantUserName:'',
      applicantUserId:'',
      taskId:'',
      taskPrice:''
    };
  },
  methods:{
     modalSend(_applicantUserName,_applicantUserId,_taskId,_taskPrice){
        this.applicantUserName =  _applicantUserName;
        this.applicantUserId =  _applicantUserId;
        this.taskId = _taskId
        this.taskPrice = _taskPrice
     }
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
      height: 235px;
      width: 100%;
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
