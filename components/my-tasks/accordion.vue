<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header class="p-3" role="tab">
        <b-button block v-b-toggle.accordion-1>Yayındaki İlanlarım (3)</b-button>
      </b-card-header>

      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="size-19">Kuşlarıma bakacak arkadaş aranıyor.</p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-3" role="tab">
        <b-button block v-b-toggle.accordion-2>Onay Bekleyen İlanlarım (2)</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-3" role="tab">
        <b-button block v-b-toggle.accordion-3>Yapılmakta Olan İlanlarım</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-3" role="tab">
        <b-button block v-b-toggle.accordion-3>Tamamlanmış İlanlarım</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-3" role="tab">
        <b-button block v-b-toggle.accordion-3>İptal Edilen Görevlerim</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
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
.accordion {
  .card-header {
    button {
      text-align: left;
      background-color: transparent;
      border: 0;
      color: #4a4a4a;
      font-size: 19px;
      &:focus {
        box-shadow: none !important;
      }
      &:active {
        color: #f0c27e !important;
        background-color: transparent !important;
        border-color: transparent !important;
      }
    }
  }
}
</style>
