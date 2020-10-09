//Profil yeşil alan - ilana başvuran adayların detayları
const getOneApplicantDetail = async function (_greenAreaInfo) {
   let setData;
   try {
      await $nuxt.$axios.$get(`/todoApplicant/${_greenAreaInfo.taskId}/${_greenAreaInfo.userSlug}`).then(value => setData = value.data[0]); //başarılı
      return setData;
   }
   catch (err) { return setData = err.response.data.data }
}

export default { getOneApplicantDetail }