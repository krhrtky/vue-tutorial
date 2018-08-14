<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <search></search>
      <card v-for="n in 10"/>
    </div>
  </main>
</template>

<script>

import Card from './Card'
import Search from './Search'

export default {
  name: 'TimeLine',
  components: {
    Card,
    Search
  }
}
</script>

<style scoped>
  main {
    background-color: #f6f6f6;
    width: 100%;
    margin: 0 auto;
  }
  .page-content {
    display: flex;
    flex-direction: column;
  }
</style>
