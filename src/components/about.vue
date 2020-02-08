<template>
  <div class="main_log">
    <div class="nav">
      <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
      <ul class="header">
        <li><router-link to="/login">用户</router-link></li>
        <li><router-link to="/about">简介</router-link></li>
        <li><router-link to="/">首页</router-link></li>
        <div style="clear: both"></div>
      </ul>
    </div>
    <div class="abt_con">
      <img class="pic" src="../assets/sky.jpeg">
      <div class="abt_main">
        <div class="abt_title">东方之华</div>
        <div class="abt_E">ABOUT US</div>
        <div class="abt_content">    我们专注于传统文化载体的推广，通过比较直观的传统文化载体分布地图，希望让更多的人更方便地了解中华文化在古建筑、古村落古镇、历史遗迹、非遗、博物馆、宗教等六大类上的体现。
          这里有你想去的古庙、古村落古镇等的信息，包括图片、位置、文化简介、主要文物等。我们通过分地域归属、民族归属、类别归属三种检索方式希望满足大家不同的检索需求。
          真切希望我们的这个平台能为您了解传统文化提供帮助，为了更好的满足大家的需求，希望各位留下您宝贵的意见！</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about",
        data: {

        },
        methods: {

        }
    }
</script>

<style scoped>
  .header a{
    display: inline-block;
    text-decoration: none;
    float: right;
    color: black;
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
  .logo{
    float: left;
    width: 4vw;
    height: 4vw;
    z-index: 10;
    margin-top: 10px;
    margin-left: 25px;
  }
  .main_log{
    background-color: #f1f1f1;
    height: auto;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
  .pic{
    width: 100%;
    margin-top: -320px;
  }
  .abt_con{
    width: 1000px;
    height: 100vh;
    margin: 20px auto;
    overflow: hidden;
    border-radius: 20px;
    background-color: white;
  }
  .abt_title{
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 10px;
    font-family: 方正兰亭超细黑简体;
    color: #636363;
    margin-top: 40px;
  }
  .abt_E{
    font-size: 20px;
    margin-top: 10px;
    letter-spacing: 7px;
    font-family: "Arial Narrow";
    color: #636363;
  }
  .abt_main{
    width: 80%;
    margin: 0 auto;
  }
  .abt_content{
    margin-top: 40px;
    line-height: 30px;
    letter-spacing: 2px;
    text-align: left;
  }
</style>
