//İlan kategorilerini listeler.
const getCategoryList = async function (userInfo) {
   let setData;
   try {
      await $nuxt.$axios.$get("/todoCategory").then(value => setData = value.category); //başarılı
      return setData;
   }
   catch (err) { return setData = err.response.data.error } //kullanıcı bulunamadı..
}

export default { getCategoryList }