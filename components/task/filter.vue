<template>
  <div class="task-filter d-flex mb-5 pt-3">
    <div class="task-filter__item mr-4">
      <b-form-select v-model="selected" :options="optionsCategory"></b-form-select>
    </div>
    <div class="task-filter__item mr-4">
      <b-form-select v-model="selected" :options="optionsMoney"></b-form-select>
    </div>
    <div class="task-filter__item">
      <b-form-select v-model="selected" :options="optionsCountry"></b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
       return {
      selected: null,
      optionsCategory: [
        { value: null, text: "Kategori" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ],
      optionsMoney: [
        { value: null, text: "Bütçe" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ],
      optionsCountry: [
        { value: null, text: "Konum" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ]
    };
  },
  methods: {
    openDropdown() {
      this.showDropDown = !this.showDropDown;
    }
  }
};
</script>

<style lang="scss">
.task {
  position: relative;
  background-color: #eae8e8;
  &-filter {
    &__item {
      select {
        background-color: #f1efef;
        height: 47px;
        border-color: #d4d4d4;
        border-radius: 6px;
        box-shadow: 0 9px 12px 2px #2323230a;
        color: #002a5b;
      }
    }
  }
}
</style>
