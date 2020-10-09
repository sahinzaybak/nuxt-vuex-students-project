<template>
<section class="sss">
    <div class="container">
        <h2 class="title">Sıkça Sorulan Sorular</h2>
        <div class="sss-wrp">
            <b-tabs content-class="mt-3" fill>
                <b-tab title="Görev oluşturup işini yaptırmak isteyenler için" active>
                    <div class="sss-item">
                        <h3 class="sss-item__title mb-3"> 
                        <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#help-circle" /></svg>Görev oluşturmak için size bir ücret ödemem gerekiyor mu?</h3>
                        <p class="sss-item__desc fw-400">Hayır. Görev oluşturmak için bir ödeme yapmanız gerekmez. Görevinizi oluşturduktan sonra göreviniz için uygun olduğunu düşünen adayları inceleyebilir ve seçiminizi tamamlayabilirsiniz. Aday seçiminizi tamamlarken görevi yayınladığınız bütçe ve bir hizmet bedeli ödemesi alınır. Bu ödeme görev tamamlanana kadar havuz hesabında bekletilir. Göreviniz tamamlandığında sizin onayınızla birlikte adayınıza iletilir. Göreviniz sizin ya da adayınız tarafından iptal edildiği takdirde ödemeniz alınan hizmet bedeli ile birlikte size iade edilir.</p>
                    </div>
                    <div class="sss-item">
                        <h3 class="sss-item__title mb-3"> <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#help-circle" /></svg>İş yaptırmak istiyorum, nasıl görev oluşturacağım?</h3>
                        <p class="sss-item__desc fw-400">Others üzerinden görev açmak için ana sayfa üzerinden “Görev Oluştur” butonu aracılığı ile görev detaylarınızı girebilir ve görevinizi yayınlayabilirsiniz.
                        Göreviniz kısa bir onay sürecinin ardından yayına alınacaktır. Uygun adaylar bulabilmeniz ve görevinizin daha hızlı onaylanabilmesi ve daha uygun adaylar bulabilmeniz için görev içeriğinizi (görev süresi, görevde neler yapılması gerektiği) mümkün olduğunca detaylı yazmaya dikkat edin.</p>
                    </div>
                    <div class="sss-item">
                        <h3 class="sss-item__title mb-3"> <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#help-circle" /></svg>Adaylarımla nasıl iletişime geçebilirim?</h3>
                        <p class="sss-item__desc fw-400">Adaylarınız ile iletişime geçebilmeniz için ödemenizi provizyon altına almamız gerekir. Bu süreçte ödemeniz adaya iletilmez ancak ödeme güvenliğinin sağlanabilmesi için bloke edilir. Adayınızla anlaşamadığınız takdirde ödemeniz size iade edilir.</p>
                    </div>
                    <div class="sss-item">
                        <h3 class="sss-item__title mb-3"> <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#help-circle" /></svg>Ödemeler adaylara nasıl ulaşıyor ? </h3>
                        <p class="sss-item__desc fw-400">Tek Seferlik olarak belirlenmiş görevlerinizde, görevinizin tamamlanmasıyla birlikte görev detayı sayfanızdan görevin tamamlandığını sağ üstteki Görev Tamamlandı butonuna tıklayarak onaylamanız gerekmekte. Görev onayınız ile birlikte en fazla 4-7 gün içerisinde ödemeniz adayınıza iletilmiş olacaktır.</p>
                    </div>
                </b-tab>

                <b-tab title="Öğrenciler için">
                    <div class="sss-item">
                        <h3 class="sss-item__title mb-3"> <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#help-circle" /></svg>Görev yapmak istiyorum. Nasıl görev yapabilirim?</h3>
                        <p class="sss-item__desc fw-400">Görevlere aday olmak için öncelikle Öğrencilik Formu’nu eksiksiz doldurmanız gerekir. Öğrenci olarak sisteme tanımlandığınızda görev detayı sayfasından adaylık yazınızı yazarak görevlere adaylık isteği gönderebilirsiniz.
                        *Öğrencilik Formu’nda alınan kişisel bilgilerin gizliliği tarafımızdan korunmaktadır.</p>
                    </div>
                    <div class="sss-item">
                        <h3 class="sss-item__title mb-3"> <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#help-circle" /></svg>Aday olarak seçildiğimde bana nasıl haber veriliyor?</h3>
                        <p class="sss-item__desc fw-400">Others üzerinden aday olduğunuz görevlere seçildiğinizde site içi bildirimler ve email aracılığıyla otomatik olarak bilgilendirilirsiniz. Bu süreçte seçilmenizle birlikte iletişim bilgileriniz görevi açan kişiye görünür hale gelir ve görevi açan kişi sizinle en kısa sürede iletişime geçer. Görevi açan kişinin iletişim bilgilerini siz de görüntüleyerek iletişime geçebilirsiniz.</p>
                    </div>
                    <div class="sss-item">
                        <h3 class="sss-item__title mb-3"> <svg class="icon mr-2"><use xlink:href="~/assets/images/icons.svg#help-circle" /></svg>Bir görev tamamladığımda ödemem nasıl iletiliyor?</h3>
                        <p class="sss-item__desc fw-400">Tamamlanan görevler ile ilgili ödemeler, görevin tamamlandığına dair görev açan kişi tarafından onay verilmesi itibarıyla 4-7 gün içerisinde otomatik olarak iletilir. Bu süreçte öncelikle görevi açan kişinin görevi onayladığından emin olmalısınız.
                        Eğer onayın verilmiş olmasına rağmen ödemen hesabınıza en fazla 7 gün içerisinde iletilmediyse Others’a kayıtlı isim bilgileriniz ile banka hesabına kayıtlı bilgilerinizin aynı olup olmadığını kontrol edebilirsiniz.</p>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">

</style>
