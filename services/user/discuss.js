//Profiline girilen kullanıya yapılan yorumlar
const getDiscuss = async function (_userId) {
   let setData;
   try {
      await $nuxt.$axios.$get(`/userDiscuss/${_userId}`).then(value => setData = value); //başarılı
      return setData;
   }
   catch (err) { return setData = err.response.data.error }
}

export default { getDiscuss }