<template>
  <div id="app">
    <FocusInput />
  </div>
</template>

<script>
import FocusInput from "./components/FocusInput";

export default {
  name: "App",
  components: {
    FocusInput,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
