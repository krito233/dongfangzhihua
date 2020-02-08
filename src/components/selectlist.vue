<template>
  <div class="s">
    <div class="nav">
      <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
      <ul class="header">
        <li><router-link to="/login">用户</router-link></li>
        <li><router-link to="/about">简介</router-link></li>
        <li><router-link to="/">首页</router-link></li>
        <div style="clear: both"></div>
      </ul>
      <div style="clear: both"></div>
    </div>
    <div class="r1"></div>
    <div class="r2"></div>
    <div class="r3"></div>
    <div class="pic_s">
      <div class="pic_show"></div>
    </div>
    <div class="time_line">
      <el-steps :active="active" align-center>
        <el-step title="步骤1" description="选择民族"></el-step>
        <el-step title="步骤2" description="选择景点"></el-step>
      </el-steps>
<!--      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
    </div>
    <ul class="pick_ul">
      <li class="pick_li" @click="next" v-for="item in showData">{{item}}</li>
    </ul>
    <div class="control">
      <div class="last" @click="last">上一步</div>
      <div class="in" :class="{ enter: active==2}">进入</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "selectlist",
        data() {
            return{
                showData:['汉族','回族','维吾尔族','汉族','回族','维吾尔族','汉族','回族','维吾尔族','汉族','回族','维吾尔族','汉族','回族','维吾尔族'],
                //showData要显示的数组,1为进行到选择民族数据 2为选择该民族具体景点数据
                active: 1, //1为进行到选择民族 2为选择具体景点 每选择一次右面半圆背景图随之变化
            }
        },
        methods: {
            next() {
                this.active = 2;
            },
            last() {
                this.active = 1;
            }
        },
    }
</script>

<style scoped>
  .s{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .header a{
    display: inline-block;
    text-decoration: none;
    float: right;
    color: #636363;
  }
  .header li{
    list-style: none;
    color: black;
    margin-left: 20px;
    width: 3vw;
    height: auto;
    padding: 10px;
    font-size: 16px;
    float: right;
  }
  .header{
    padding: 10px 10px 0 0;
    margin-right: 2vw;
  }
  .nav{
    z-index: 10;
  }
  .logo{
    float: left;
    width: 4vw;
    height: 4vw;
    z-index: 10;
    margin-top: 10px;
    margin-left: 25px;
  }
  .r1{
    position: absolute;
    top: 6vh;
    width: 85vw;
    height: 6px;
    background-color: #D79E90;
    right: 0;
    z-index: -1;
  }
  .r2{
    position: absolute;
    top: 10vh;
    width: 80vw;
    height: 6px;
    background-color: #D79E90;
    right: 0;
    z-index: -1;
  }
  .r3{
    position: absolute;
    top: 14vh;
    width: 75vw;
    height: 6px;
    background-color: #D79E90;
    right: 0;
    z-index: -1;
  }
  .pic_s{
    width: 60vw;
    height: 100vh;
    right: 0;
    top: 0;
    position: absolute;
    overflow: hidden;
    z-index: -1;
  }
  .pic_show{
    width: 120vh;
    height: 120vh;
    border-radius: 50%;
    background-color: #D79E90;
    position: absolute;
    top: -5vw;
    right: -20vw;
    z-index: -1;
  }
  .time_line{
    width: 20vw;
    margin-top: 15vh;
    margin-left: 10vw;
  }
  .control{
    margin-left: 10vw;
    width: 100%;
  }
  .last{
    line-height: 20px;
    border: 1px solid #636363;
    cursor: pointer;
    width: 5vw;
    float: left;
  }
  .last:hover{
    border: 1px solid #D79E90;
    color: #D79E90;
  }
  .pick_ul{
    width: 50vw;
    height: 50vh;
    margin-left: 10vw;
    margin-top: 10px;
  }
  .pick_li{
    list-style: none;
    float: left;
    width: 10%;
    line-height: 50px;
    cursor: pointer;
  }
  .pick_li:hover{
    color: #409EFF;
  }
  .in{
    display: none;
  }
  .enter{
    line-height: 20px;
    border: 1px solid #636363;
    cursor: pointer;
    width: 5vw;
    display: block;
    float: left;
    margin-left: 40vw;
  }
  .in:hover{
    border: 1px solid #D79E90;
    color: #D79E90;
  }
</style>
