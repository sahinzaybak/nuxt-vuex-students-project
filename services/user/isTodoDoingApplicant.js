//Aday görevini başarı ile tamamladıysa "isTodoDoing" true yada false yap
const putisTodoDoingApplicant = async function (isDoingInfo) {
   debugger;
   let setData;
   try {
      await $nuxt.$axios.$put(`/todoSelectPerson/confirm`, {
         selectedApplicantId: isDoingInfo.selectedApplicantUserId,
         isTodoDoing: isDoingInfo.isTodoDoing
      }).then(value => setData = value.message); //başarılı
      return setData;
   }
   catch (err) { return setData = err } 
}

export default { putisTodoDoingApplicant }