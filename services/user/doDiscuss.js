//İşi bitiren adaya yorum yap, puan ver.
const postDoDiscusss = async function (discussInfo) {
   debugger;
   let setData;
   try {
      await $nuxt.$axios.$post("/userDiscuss", {
         todoId: discussInfo.todoId,
         applicantUserId: discussInfo.applicantUserId,
         star:discussInfo.star,
         discussType:discussInfo.discussType,
         message:discussInfo.message,
      }).then(value => setData = value.data); //başarılı
      return setData;
   }
   catch (err) { return setData  = err.response.data.data}
}

export default { postDoDiscusss }