//İlana aday ol.
const postdoAppliacant = async function (applicantInfo) {
   let setData;
   try {
      await $nuxt.$axios.$post("/todoApplicant", {
         todoId: applicantInfo.taskId,
         applicantOwner:applicantInfo.applicantOwner,
         message: applicantInfo.message,
      }).then(value => setData = value); //başarılı
      return setData;
   }
   catch (err) { return setData  = err.response.data.error} //kullanıcı bulunamadı..
}

export default { postdoAppliacant }