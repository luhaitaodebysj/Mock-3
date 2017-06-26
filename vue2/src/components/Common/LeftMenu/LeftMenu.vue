<template>
  <div class="left-menu">
   <el-tree
  :data="data"
  :props="defaultProps"
  node-key
  highlight-current
  ref="tree"
  accordion
  @node-click="handleNodeClick($event)">
</el-tree>
  </div>
</template>

<script>
	module.exports = require('./LeftMenu.js');
</script>

<style scoped lang='less'>
    @import url(./LeftMenu.less);
</style>
