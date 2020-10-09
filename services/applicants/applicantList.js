//İlana aday olanların listesi
const getApplicantList = async function (todoId) {
   let setData;
   try {
      await $nuxt.$axios.$get(`/todoApplicant/${todoId}`).then(value => setData = value.data); //başarılı
      return setData;
   }
   catch (err) { return setData = err.response.data.data }
}

export default { getApplicantList }