//İlan detay bilgilerini getirir.
const getTaskDetail = async function (slug) {
   let setData;
   try {
      await $nuxt.$axios.$get(`/todo/list/${slug}`).then(value => setData = value.data[0]); //başarılı
      return setData;
   }
   catch (err) { return setData = err.response.data.data } //kullanıcı bulunamadı..
}

export default { getTaskDetail }