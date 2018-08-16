<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <search/>
      <card
        v-for="gif in gifList"
        :gif="gif"
        :key="gifList.indexOf(gif)"
      />
    </div>
  </main>
</template>

<script>

import Card from './Card'
import Search from './Search'
import {mapGetters} from 'vuex'

export default {
  name: 'TimeLine',
  computed: {
    ...mapGetters(['gifList'])
  },
  components: {
    Card,
    Search
  }
}
</script>

<style>
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
