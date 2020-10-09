<template>
  <div class="create-task__info">
    <section class="sss">
      <div class="container">
        <!-- <h2 class="title">Form Hakkında Sorular</h2>  -->
        <div class="sss-wrp">
          <div class="sss-item">
            <h3 class="sss-item__title mb-4">
              <svg class="icon mr-2">
                <use xlink:href="~/assets/images/icons.svg#help-circle" />
              </svg>Formu Doldurursam Ne olacak?
            </h3>
            <p class="sss-item__desc fw-400">
              - Görev Oluşturma formunu doldurup görevini yayınlamak için herhangi bir
              <span>ödeme yapman gerekmiyor.</span>
            </p>
            <p
              class="sss-item__desc fw-400"
            >- Formu doldurduktan sonra kısa bir onay süresinin ardından ilanın yayına alınır ve öğrenciler tarafından görüntülenebilir.</p>
            <p
              class="sss-item__desc fw-400"
            >- Görevinin yayınlanmasıyla birlikte 1 gün içerisinde ortalama 30 aday gelmektedir. Gelen adaylarını ücretsiz olarak görüntüleyebilirsin ve sonrasında seçimini tamamlayabilirsin.</p>
          </div>
          <div class="sss-item">
            <h3 class="sss-item__title mb-4">
              <svg class="icon mr-2">
                <use xlink:href="~/assets/images/icons.svg#help-circle" />
              </svg>Formu Doldururken Nelere Dikkat Etmeliyim?
            </h3>
            <p
              class="sss-item__desc fw-400"
            >- Görev ile ilgili mümkün olduğunca detay paylaşabilirsin. Böylece görevin için daha uygun adaylar bulabilirsin!</p>
            <p
              class="sss-item__desc fw-400"
            >- Görev konumu, görev tarihi ve görev bütçesi bölümleri için uygun tercihler yaptığından emin olmalısın.</p>
            <p
              class="sss-item__desc fw-400"
            >- İrtibat numarası bölümünde paylaştığın telefon bilgileri, sadece görevin için geçerli olacaktır. Bu bilgileri doğru doldurman görev sürecinde iletişimini hızlandıracaktır.</p>
          </div>
          <div class="sss-item">
            <h3 class="sss-item__title mb-4">
              <svg class="icon mr-2">
                <use xlink:href="~/assets/images/icons.svg#help-circle" />
              </svg>Ödemeler Nasıl Gerçekleşiyor?
            </h3>
            <p class="sss-item__desc fw-400">
              - Adaylarını inceleyip
              <span>“Aday Seç”</span> butonu ile aday seçimini gerçekleştirdiğin adımda
              <span>ödeme ekranı karşına çıkacaktır.</span>
            </p>
            <p class="sss-item__desc fw-400">
              - Adayını seçerken ödeyeceğin tutar
              <span>Others’ın havuz hesabında bekletilir ve doğrudan adaya aktarılmaz.</span>
            </p>
            <p class="sss-item__desc fw-400">
              - Görev detay sayfası üzerinden
              <span>“Görev Tamamlandı”</span> butonunu kullanarak görevin bittiğini
              <span>onaylaman ile birlikte ödemen adayına iletilir.</span>
            </p>
            <p
              class="sss-item__desc fw-400"
            >- Aday seçimi yaparken görev için ayırdığın bütçe üzerine hizmet bedeli ve vergi tutarını içeren %20 oranında bir bedel eklenir.</p>
          </div>
        </div>
      </div>
    </section>
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
.create-task {
  background-color: #eae8e8;

  &__info {
    .nav-tabs {
      margin-bottom: 50px;
    }
    .nav-fill .nav-item {
      font-size: 15.9px;
    }
    .sss {
      &-item {
        &__desc {
          font-size: 16.5px;
          margin-bottom: 12px;
          padding-left: 26px;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            font-weight: 500;
            color: #484848;
          }
        }
      }
    }
  }
}
</style>
