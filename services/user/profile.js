//İlan kategorilerini listeler.
const getProfile = async function (_userSlug) {
   let setData;
   try {
      await $nuxt.$axios.$get(`/user/${_userSlug}`).then(value => setData = value.data); //başarılı
      return setData;
   }
   catch (err) { return setData = err.response.data.error }
}

export default { getProfile }