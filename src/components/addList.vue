<template>
  <div  class="main_add">
    <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
    <div class="new_li">＋新增景区</div>
    <div class="addTable">
      <el-table
        :data="tableData"
        border
        style="width: 100%;height: 100%;">
        <el-table-column
          fixed
          prop="name"
          label="名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="provice"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="城市"
          width="120">
        </el-table-column>
        <el-table-column
          prop="area"
          label="地区"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="400">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "addList",
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },
      data() {
          return {
              tableData: [{
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  area: '上海市普陀区金沙江路 1518 弄',
              }, {
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  area: '上海市普陀区金沙江路 1518 弄',
              },{
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  area: '上海市普陀区金沙江路 1518 弄',
              },{
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  area: '上海市普陀区金沙江路 1518 弄',
              },{
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  area: '上海市普陀区金沙江路 1518 弄',
              },{
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  area: '上海市普陀区金沙江路 1518 弄',
              },
              ]
          }
      }
    }
</script>

<style scoped>
  *{
    list-style: none;
    border: none;
    outline: none;
  }
  .main_add{
    background-color: #f1f1f1;
    height: auto;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    margin: 0;
  },
  .logo{
    float: left;
    width: 4vw;
    height: 4vw;
    z-index: 10;
    margin-top: 10px;
    margin-left: 25px;
  }
  .addTable{
    width: 80vw;
    height: auto;
    margin: 10vh auto;
  }
  .new_li{
    padding: 4px;
    height: 15px;
    width: 80px;
    background-color: #3584EB;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    position: absolute;
    top: 5vh;
    right: 11vw;
  }
</style>
