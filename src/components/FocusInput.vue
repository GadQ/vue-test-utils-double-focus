<template>
    <div>
        <input type="text" id="input1" @focus="focused = true" @blur="focused = false" />
        <input type="text" id="input2" @focus="focused = true" @blur="focused = false" />
        {{ focused }}
    </div>
</template>

<script>
export default {
  name: "FocusInput",
  data() {
    return {
      focused: false,
    };
  },
};
</script>
