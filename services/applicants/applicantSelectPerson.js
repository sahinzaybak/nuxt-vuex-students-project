//İlan için aday seç
const postApplicantSelectPerson = async function (todoInfo) {
   let setData;
   try {
      await $nuxt.$axios.$post("/todoSelectPerson", {
         todoId: todoInfo._taskId,
         userId: todoInfo._userId,
      }).then(value => setData = value.message); //başarılı
      return setData;
   }
   catch (err) { return setData  = err.response.data.error} 
}

export default { postApplicantSelectPerson }