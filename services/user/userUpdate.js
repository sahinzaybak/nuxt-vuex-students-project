//Kullanıcı güncelle (student control)
const putUserUpdate = async function (getInfo) {
   debugger;
   let setData;
   try {
      await $nuxt.$axios.$put(`/user/${getInfo.userId}`, {
         university: {
            universityName: getInfo.userInfo._university,
            department: getInfo.userInfo._department,
            universityEMail: getInfo.userInfo._email,
            phone: getInfo.userInfo._phone,
            iban: getInfo.userInfo._iban,
            universityClass: getInfo.userInfo._class
         },
         about:{
            aboutText: getInfo.userInfo._about,
            wantCategories:getInfo.userInfo._categories
         }
      }).then(value => setData = value.message); //başarılı
      return setData;
   }
   catch (err) { return setData = err }
}

export default { putUserUpdate }