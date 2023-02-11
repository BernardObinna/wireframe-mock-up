<template>
  <div class="page">
    <div class="row mb-5">
      <div class="col-lg-6">
        <div class="d-flex justify-content-between">
          <h1>Products</h1>
          <input
            type="text"
            class="px-2 ms-4 search-bar"
            placeholder="Search for keywords...."
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
            <tr v-for="(item, index) in state.tableItems" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <div class="d-flex justify-content-center">
                  <ButtonComponent text="Edit" /><ButtonComponent
                    classes="ms-2 text-dark fw-bold bg-white"
                    text="Delete"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-6">
        <form action="" class="form text-center ms-lg-auto">
          <h4>Header text</h4>
          <p class="text mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <div>
            <input type="text" class="" placeholder="Name" />
          </div>

          <div>
            <input type="text" class="my-4" placeholder="Price" />
          </div>

          <ButtonComponent classes="w-100" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { onMounted, reactive } from "vue";

const state = reactive({ tableItems: [] });

//mounted
onMounted(async () => {
  if (!localStorage?.tableItems?.length && !state.tableItems.length) {
    state.tableItems = [
      {
        name: "Lorem Ipsum",
        price: "Lorem Ipsum",
      },
      {
        name: "Lorem Ipsum",
        price: "Lorem Ipsum",
      },
      {
        name: "Lorem Ipsum",
        price: "Lorem Ipsum",
      },
      {
        name: "Lorem Ipsum",
        price: "Lorem Ipsum",
      },
    ];
    localStorage.tableItems = JSON.stringify(state.tableItems);
  } else {
    console.log("hii", localStorage.getItem("tableItems"));
    state.tableItems = JSON.parse(localStorage.tableItems);
  }
});
// components: {
//   ButtonComponent;
// }
// export default {
//   components: { ButtonComponent },
// };
</script>

<style lang="scss" scoped>
@import "@/assets/scss/core/mixins";
@import "@/assets/scss/core/variables";

.page {
  margin-bottom: 10em;

  .search-bar {
    border-radius: 4px;
    // min-width: toRem(300px);
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
