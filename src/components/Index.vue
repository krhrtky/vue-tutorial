<template>
    <div id="root">
      <vue-header/>
      <time-line/>
    </div>
</template>

<script>
import VueHeader from './Header'
import TimeLine from './page/TimeLine'

export default {
  name: 'Index',
  components: {
    VueHeader,
    TimeLine
  }
}
</script>

<style scoped>

</style>
