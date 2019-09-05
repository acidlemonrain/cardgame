<template>
  <div>
      <enemy></enemy>
      <enemy-table></enemy-table>
        <div id="table-range">
                <mine-table></mine-table>
       <mine></mine>
        </div>
  </div>
</template>

<script>
import enemy from './../components/table/enemy'
import enemyTable from './../components/table/enemyTable'
import mine from './../components/table/mine'
import mineTable from './../components/table/mineTable'
export default {
    components: {
        enemy,mine,enemyTable,mineTable
    },
}
</script>

<style>

</style>