<template>
  <button class="py-2 px-4" :class="classes">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
    },
    classes: {
      type: String,
    },
  },
};
</script>
