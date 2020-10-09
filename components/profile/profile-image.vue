<template>
  <div class="sticky-top" v-if="Object.keys(profileInfo).length != 0">
    <div class="profile-item flex-center flex-column">
      <input
        id="upload-photo"
        style="opacity:0;display:none"
        type="file"
        name="image"
        accept="image/*"
        @change="setImage"
      />
      <div v-if="showCrope">
        <div
          v-if="this.imageSrc"
          class="mb-2 d-flex align-items-center justify-content-center mx-auto"
        >
          <vue-cropper class="mr-2 w-100" ref="cropper" :src="imageSrc"></vue-cropper>
        </div>
        <div class="upload-buttons d-flex justify-content-between mb-5">
          <button v-if="this.imageSrc" @click="cropImage">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#crop" />
            </svg>Resmi Kırp
          </button>
          <button v-if="this.croppedImageSrc" @click="uploadImage">
            <svg class="icon mr-2">
              <use xlink:href="~/assets/images/icons.svg#download" />
            </svg>Resmi Yükle
          </button>
        </div>
      </div>
      <div class="profile-item__img position-relative">
        <label class="image-upload" for="upload-photo">
          <div>
            <svg class="icon">
              <use xlink:href="~/assets/images/icons.svg#photo" />
            </svg>
          </div>
        </label>

        <img
          v-if="!this.croppedImageSrc"
          src="https://scontent.fist7-1.fna.fbcdn.net/v/t1.0-1/p200x200/116872535_10224194667993888_7269194563706145725_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=xk6OwGW0nAwAX_eGp3w&_nc_ht=scontent.fist7-1.fna&tp=6&oh=68b719150148cdf135314f3a9e52da7a&oe=5F76AEC8"
          alt
        />
        <img v-if="this.croppedImageSrc" :src="croppedImageSrc" alt />
      </div>
      <h3 class="profile-item__name mt-4 pt-4 mb-2">{{profileInfo.userName}}</h3>
      <p class="profile-item__university">{{profileInfo.university.universityName}}</p>
      <span class="profile-item__department">{{profileInfo.university.department}}</span>
    </div>
    <div class="profile-item pt-3 pb-3 mt-3">
      <div class="profile-item__rate">
        <div class="d-flex align-items-center flex-column">
          <rate :length="1" :value="1" />
          <p>Ortalama Puanı</p>
          <span>4.2/5</span>
        </div>
      </div>
    </div>
    <div class="profile-item pt-4 mt-3">
      <div class="profile-item__info flex-between">
        <div class="d-flex align-items-center">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#heart" />
          </svg>
          <p>Tamamladığı Ders:</p>
        </div>
        <div>
          <span>3</span>
        </div>
      </div>
      <div class="profile-item__info flex-between">
        <div class="d-flex align-items-center">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#like" />
          </svg>
          <p>Olumlu Yorum:</p>
        </div>
        <div>
          <span>3</span>
        </div>
      </div>
      <div class="profile-item__info flex-between">
        <div class="d-flex align-items-center">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#garbage" />
          </svg>
          <p>Ders İptali Sayısı:</p>
        </div>
        <div>
          <span>0</span>
        </div>
      </div>
      <div class="profile-item__info flex-between">
        <div class="d-flex align-items-center">
          <svg class="icon mr-2">
            <use xlink:href="~/assets/images/icons.svg#unlike" />
          </svg>
          <p>Olumsuz Yorum:</p>
        </div>
        <div>
          <span>3</span>
        </div>
      </div>
    </div>
    <a href class="main-button mt-4 d-none">
      <div class="ico">
        <svg class="icon mr-2">
          <use xlink:href="~/assets/images/icons.svg#request" />
        </svg>
      </div>Bir görevini yapması için
      <br />istek gönder
    </a>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs"; //https://chafikgharbi.com/image-crop-upload/
import "cropperjs/dist/cropper.css";
export default {
  components: {
    VueCropper
  },
   props: ["profileInfo"],
  data() {
    return {
      showCrope: false,
      imageSrc: "",
      croppedImageSrc: ""
    };
  },
  methods: {
    setImage: function(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        this.showCrope = true;
        const reader = new FileReader();
        reader.onload = event => {
          this.imageSrc = event.target.result;

          // Rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      // Get image data for post processing, e.g. upload or setting image src
      this.croppedImageSrc = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    uploadImage() {
      this.showCrope = false;
      this.$refs.cropper.getCroppedCanvas().toBlob(function(blob) {
        let formData = new FormData();
        (this.imageSrc = false),
          (this.imageSrc = false),
          // Add name for our image
          formData.append("name", "image-name-" + new Date().getTime());

        // Append image file
        formData.append("file", blob);

        //   axios
        //     .post("/api/store", formData)
        //     .then(response => {
        //       console.log(response.data)
        //     })
        //     .catch(function (error) {
        //       console.log(error)
        //     })
      });
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
    &__wrp {
      border-bottom: 1px solid #dee2e6b0;
      padding-bottom: 25px;

      &:last-child {
        border-bottom: 0;
      }
    }
    &__img {
      flex-shrink: 0;
      img {
        box-shadow: 0 0 0 30px rgba(127, 173, 244, 0.05098),
          0 0 0 20px rgba(241, 241, 241, 0.3098),
          0 0 0 10px rgba(127, 173, 244, 0.10196);
        width: 95px;
        height: 95px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    &__name {
      font-size: 17px;
    }
    &__university {
      font-size: 14px;
      font-weight: 400;
    }
    &__department {
      font-size: 14px;
      font-weight: 400;
    }
    &__info {
      margin: 14px 25px;
      border-bottom: 1px solid #dee2e65c;
      padding-bottom: 10px;
      .icon {
        color: #002a5b;
        opacity: 0.6;
      }
      p {
        font-size: 13.5px;
        opacity: 0.8;
        font-size: 14px;
        font-weight: 500;
        color: #002a5b;
      }
      span {
        color: #5a5a5a;
        background-color: #3ad25a1c;
        padding: 7px;
        border-radius: 25px;
        font-size: 16px;
      }
    }
    &__rate {
      .Rate {
        text-align: center;
      }
      .icon {
        width: 40px;
        height: 40px;
        color: #ecbb71;
      }
      p {
        font-size: 18px;
        color: #ecbb71;
      }
      span {
        font-size: 25px;
        color: #ecbb71;
      }
    }
  }
  .image-upload {
    position: absolute;
    right: -5px;
    bottom: -5px;
    width: 33px;
    height: 31px;
    font-size: 17px;
    background-color: #f3f6f9;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 50px;
    color: #6fca83;
    cursor: pointer;
  }

  .upload-buttons {
    justify-content: space-between;
    padding: 0px 12px;
    padding-top: 7px;
    button {
      font-size: 13px;
    }
  }
}
</style>
