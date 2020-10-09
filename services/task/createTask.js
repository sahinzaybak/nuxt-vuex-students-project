//İlana oluştur.
const postCreateTask = async function (taskInfo) {
   let setData;
   try {
      await $nuxt.$axios.$post("/todo/create", {
         title: taskInfo._title,
         detail: taskInfo._detail,
         category: taskInfo._category,
         price: taskInfo._price,
         howMany: taskInfo._howMany,
         startedDate: taskInfo._startedDate,
         finishedDate: taskInfo._finishedDate,
         country: taskInfo._country,
         district: taskInfo._district,
      }).then(value => setData = value.message); //başarılı
      return setData;
   }
   catch (err) { return setData  = err.response.data.error} //kullanıcı bulunamadı..
}

export default { postCreateTask }