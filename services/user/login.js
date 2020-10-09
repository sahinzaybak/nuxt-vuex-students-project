//Login
const postLogin = async function (userInfo) {
   let setData;
   try {
      await $nuxt.$axios.$post("/user/login", {
         email: userInfo.email,
         password: userInfo.password,
      }).then(value => setData = value.data); //başarılı
      return setData;
   }
   catch (err) { return setData  = err.response.data.data}
}

export default { postLogin }