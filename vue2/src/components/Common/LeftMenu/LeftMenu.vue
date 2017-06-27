<template>
  <div class="left-menu">
    <el-row class="tac">
      <el-col >
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
          <template slot="title">项目列表</template>
          <template v-for='(item,index) in data'>
           <el-menu-item-group>
              <template slot="title">{{item.name}} <el-button @click='addpage' >添加页面</el-button>  </template>
              <el-submenu :index="index+'1111'" v-for='(item2,index) in item.children'>
                <template slot="title">{{item2.name}} <el-button @click='addapi' >添加接口</el-button> </template>
                <el-menu-item :index="index+'222'" v-for='(item3,index) in item2.children' @click="showMock(index)">{{item3.name}}</el-menu-item>
              </el-submenu>
           </el-menu-item-group>
          </template>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
  name: 'left-menu',
  data() {
    return {
      data: [{
        name:"项目1",
        children:[{
          name:'页面1',
        },{
          name:'页面2',
          children:[{
            name:'接口1'
          },{
            name:'接口2'
          }]
        }]
      }]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    showMock(index){
      console.log(index);
      this.$router.push('/demo/mock');
    },
    addpage(){
     this.$prompt('请输入页面名', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    }).then(({ value }) => {
      if(value){
       this.$message({
        type: 'success',
        message: '页面名: ' + value
      });
      }
    });
    },
    addapi(){
      this.$prompt('请输入接口名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        if(value){
          this.$message({
            type: 'success',
            message: '接口名: ' + value
          });
        }
      });
    }
  }
}

</script>

<style scoped lang='less'>
    @import url(./LeftMenu.less);
</style>
