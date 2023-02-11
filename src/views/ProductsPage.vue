<template>
  <ContentLayout>
    <div class="page">
      <div class="row mb-5">
        <div class="col-lg-6">
          <div class="d-flex justify-content-between">
            <h1>Products</h1>
            <input
              type="text"
              class="px-2 ms-4 search-bar"
              placeholder="Search for keywords...."
              v-model="state.searchTerm"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in displayedEntries" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <div class="d-flex justify-content-center">
                    <ButtonComponent
                      text="Edit"
                      @click="selectEntry(index, item)"
                    /><ButtonComponent
                      classes="ms-2 text-dark fw-bold bg-white"
                      text="Delete"
                      @click="deleteEntry(index)"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            class="text-center"
            v-if="
              state.searchTerm &&
              state?.tableItems?.length &&
              !displayedEntries?.length
            "
          >
            No search result
          </p>
          <p class="text-center" v-if="!state?.tableItems?.length">
            No entries. Create some or refresh the page
          </p>
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0">
          <form
            @submit.prevent="submitForm"
            class="form text-center ms-lg-auto"
          >
            <h4>Header text</h4>
            <p class="text mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <div>
              <input
                type="text"
                class=""
                placeholder="Name"
                v-model="state.formData.name"
                required
              />
            </div>

            <div>
              <input
                type="number"
                class="my-4"
                placeholder="Price"
                v-model="state.formData.price"
                required
              />
            </div>

            <ButtonComponent
              classes="w-100"
              :text="state.isEdit ? 'Save' : 'Create'"
            />
          </form>
        </div>
      </div>
    </div>
  </ContentLayout>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import ContentLayout from "@/layouts/ContentLayout.vue";

import { onMounted, reactive, computed } from "vue";

const state = reactive({
  tableItems: [],
  searchTerm: "",
  isEdit: false,
  selectedEntryIndex: null,
  formData: {
    name: "",
    price: "",
  },
});

//mounted
onMounted(async () => {
  if (
    (!localStorage?.tableItems ||
      !JSON.parse(localStorage?.tableItems)?.length) &&
    !state.tableItems.length
  ) {
    state.tableItems = [
      {
        name: "Lorem Ipsum",
        price: "1",
      },
      {
        name: "Lorem Ipsum",
        price: "2",
      },
      {
        name: "Lorem Ipsum",
        price: "3",
      },
      {
        name: "Lorem Ipsum",
        price: "4",
      },
    ];
    updateLocalStorage();
  } else {
    state.tableItems = localStorage?.tableItems
      ? JSON.parse(localStorage?.tableItems)
      : [];
  }
});

const displayedEntries = computed(() => {
  let data = state.tableItems;
  if (state.searchTerm) {
    data = state.tableItems.filter(
      (item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        String(item.price).includes(state.searchTerm.toLowerCase())
    );
  }
  return data;
});

// methods
const submitForm = () => {
  state.isEdit ? editEntry() : createEntry();
  updateLocalStorage();
  resetForm();
  state.isEdit = false;
};

const resetForm = () => {
  state.formData = {
    name: "",
    price: "",
  };
};

const createEntry = () => {
  state.tableItems.push(state.formData);
};

const editEntry = () => {
  state.tableItems[state.selectedEntryIndex] = state.formData;
  state.selectEntry = null;
};
const updateLocalStorage = () => {
  localStorage.tableItems = JSON.stringify(state.tableItems);
};

const deleteEntry = (index) => {
  state.tableItems.splice(index, 1);
  updateLocalStorage();
  state.isEdit = false;
  resetForm();
};

const selectEntry = (index, item) => {
  state.isEdit = true;
  state.selectedEntryIndex = index;
  state.formData = { ...item };
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/core/mixins";
@import "@/assets/scss/core/variables";

.page {
  margin-bottom: 10em;

  .search-bar {
    border-radius: 4px;
    width: 100%;
    max-width: toRem(300px);
  }

  .form {
    background: $color-bg-lgt-grey;
    max-width: toRem(400px);
    padding: toRem(40px) 4% toRem(40px);

    input {
      width: 100%;
      background: white;
      padding: toRem(8px) toRem(18px);
      border: none;
      border-radius: 4px;
    }
  }
}
</style>
