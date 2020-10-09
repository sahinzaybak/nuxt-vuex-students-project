//İlana başvuran adaylar
const postApplicantSelectedPersonDetail = async function (_todoId) {
   let setData;
   try {
      await $nuxt.$axios.$get(`/todoSelectPerson/${_todoId}`).then(value => setData = value.data[0]); 
      return setData;
   }
   catch (err) { return setData  = err.response.data.error}
}

export default { postApplicantSelectedPersonDetail }