<template>
  <div class="summary">
    <img src="https://www.othersapp.com/main/assets/images/main/main_image.jpg" alt />
    <div class="summary-wrp">
      <div class="container">
        <h2 class="title color-white">Neden Biz?</h2>
        <p class="summary-desc">
          Ek gelir kazanmak isteyen öğrencilerle, yapamadıkları veya yetiştiremedikleri işlerini üniversite öğrencilerine yaptırmak isteyenleri bir araya getiren bir pazar yeridir. Others’ta şirketler, startuplar, öğrenciler veya herhangi bir kişi görev açabilirken, görevleri sadece üniversite öğrencileri yapmaktadır.
          <br />
          <br />Öğrenci kitlelerine ulaşmakta zorluk çekiyorsanız, geçici işlerinizi hızlı bir şekilde yapabilecek yetenekli üniversite öğrencilerine ihtiyacınız varsa ve anlık olarak ihtiyacınıza cevap verebilecek bir platform arıyorsanız; öğrenciyseniz ve final, vize gibi yoğun dönemlerinizde bir başka öğrenci arkadaşınızın yardımına ihtiyaç duyuyorsanız doğru yerdesiniz!
        </p>
        <div class="d-flex">
          <a href class="main-button border-orange">Daha fazla şey mi merak ediyorsun?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.summary {
  position: relative;
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0c0c0ccc, #000c40d9);
    left: 0;
    top: 0;
  }
  &-wrp {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  &-desc {
    color: #ffffff;
    font-weight: 500;
    line-height: 1.8;
    font-size: 18px;
    opacity: 0.9;
  }
}
</style>
