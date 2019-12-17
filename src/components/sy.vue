<template>
  <div>
    <div class="bk"></div>
    <div class="nav">
      <div class="black_1"></div>
      <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
      <ul class="header">
        <li><router-link to="/login">用户</router-link></li>
        <li>简介</li>
        <li><router-link to="/">首页</router-link></li>
        <div style="clear: both"></div>
      </ul>
    </div>
    <div class="search"><input type="text"><div class="submit"></div></div>
    <div class="select">
      <div class="cil_li"><div class="jq cil"><router-link to="/scenic" class="acil"></router-link></div><p class="tip">景区类型</p></div>
      <div class="cil_li"><div class="dy cil"><a class="acil" href=""><div class="forbid">暂未开放</div></a></div><p class="tip">地域类型</p></div>
      <div class="cil_li"><div class="mz cil"><a class="acil" href=""><div class="forbid">暂未开放</div></a></div><p class="tip">民族类型</p></div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
    export default {
        name: "sy"
    }
</script>

<style scoped>
  *{
    margin: 0;
    border: 0;
    padding: 0;
    text-decoration: none;
  }
  .search{
    margin-top: 27vh;
    position: absolute;
  }
  .submit{
    position: absolute;
    right: 2vh;
    top: 2vh;
    background: url("../assets/submit.png");
    background-size: 100% 100%;
    width: 6vh;
    height: 6vh;
    cursor: pointer;
  }
  input{
    width: 44vw;
    padding: 5px 10px;
    height: 8vh;
    border-radius: 4.5vh;
    background-color: rgba(0,0,0,0.46);
    font-size: 16px;
    color: white;
    margin-left: 28vw;
    outline: none;
  }
  .acil{
    display: inline-block;
    width: 14vw;
    height: 14vw;
  }
  .forbid{
    color: #636363;
    font-size: 24px;
    font-weight: bolder;
    border: #636363 3px solid;
    margin-top: 10vh;
    width: 80%;
    margin-left: 5%;
  }
  .bk{
    position: absolute;
    width: 100%;
    height: 78vh;
    top: 0;
    left: 0;
    z-index: -1;
    background: url("../assets/bk1.png") no-repeat;
    background-size: 100% 100%;
  }
  .header a{
    display: inline-block;
    text-decoration: none;
    float: right;
    color: white;
  }
  .header li{
    list-style: none;
    color: white;
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
  .black_1{
    position: absolute;
    background-color: rgba(17,57,35,0.57);
    top: 0;
    left: 0;
    width: 10vw;
    height: 10vw;
    z-index: -1;
  }
  .cil_li{
    float: left;
    margin-right: 6vw;
  }
  .cil{
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    border: white 2px solid;
    overflow: hidden;
  }
  .jq{
    background: url("../assets/psb.jpg") 10% 10%;
    background-size: 100% 100%;
  }
  .dy{
    background: url("../assets/place.jpg") no-repeat;
    background-position: 60% 68%;
    background-size: 280% 160%;
  }
  .mz{
    background: url("../assets/psbe.jpg") no-repeat;
    background-position: 36% 0%;
    background-size: 140% 160%;
  }
  .select{
    margin-top: 54vh;
    margin-left:26vw;
  }
  .tip{
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
  }
</style>
