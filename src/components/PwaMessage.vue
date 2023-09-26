<template>
  <div class="pwa-message">
    <pre>{{ isStandalone }}</pre>
  </div>
</template>

<script lang="ts" setup>
const isStandalone = window.matchMedia('(display-mode: standalone)').matches
</script>

<style lang="scss" scoped>

</style>
