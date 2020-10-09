//Tüm ilan listesini getirir.
const getTaskList = async function (userInfo) {
   let setData;
   try {
      await $nuxt.$axios.$get("/todo/list").then(value => setData = value.data); //başarılı
      return setData;
   }
   catch (err) { return setData = err.response.data.data } //kullanıcı bulunamadı..
}

export default { getTaskList }