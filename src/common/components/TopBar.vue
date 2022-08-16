<template>
  <div class="top-bar">
    <div class="top-bar__container">
      <button type="button" class="top-bar__button">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.top-bar {
  height: 56px;
  padding: 10px;
  background-color: rgb(29, 29, 29);
}

.top-bar__container {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
}

.top-bar__button {
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
}
</style>
