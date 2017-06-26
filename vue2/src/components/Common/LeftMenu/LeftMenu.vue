<template>
  <div class="left-menu">
   <el-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
</el-tree>
  </div>
</template>

<script>
	module.exports = require('./LeftMenu.js');
</script>

<style scoped lang='less'>
    @import url(./LeftMenu.less);
</style>
