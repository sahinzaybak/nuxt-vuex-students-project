<template>
  <div class="welcome text-center mb-5 pb-4" v-if="Object.keys(applicantList).length != 0">
    <h3 class="title mb-4">{{applicantList[0].todoName}} ({{applicantList[0].todoPrice}} ₺)</h3>
    <h3 class="mb-2 pt-2" style="font-size: 33px;color: rgb(236, 187, 113);">Adaylarını Seç</h3>
    <p style="font-size: 17.8px;margin-top: 7px;color: rgb(0, 42, 91);">
      Haydi Şahin, verdiğin göreve başvuran
      <strong>50 aday</strong> arasından
      <br />en uygun adayını seç bakalım.
      <br />
    </p>
  </div>
</template>

<script>
export default {
  props: ["applicantList"],
  data() {
    return {};
  }
};
</script>

