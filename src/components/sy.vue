<template>
  <div>
    <div class="bk"></div>
    <div class="nav">
      <div class="black_1"></div>
      <img class="logo" src="../assets/logo.png">
      <ul class="header">
        <li><a href="">用户</a></li>
        <li><a href="">简介</a></li>
        <li><a href="">首页</a></li>
        <div style="clear: both"></div>
      </ul>
    </div>
    <div class="search"><input type="text"><div class="submit"></div></div>
    <div class="select">
      <div class="cil_li"><div class="jq cil"><a class="acil" href=""></a></div><p class="tip">景区类型</p></div>
      <div class="cil_li"><div class="dy cil"><a class="acil" href=""></a></div><p class="tip">地域类型</p></div>
      <div class="cil_li"><div class="mz cil"><a class="acil" href=""></a></div><p class="tip">民族类型</p></div>
    </div>
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
  }
  .search{
    margin-top: 30vh;
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
  }
  input{
    width: 50vw;
    padding: 5px 10px;
    height: 9vh;
    border-radius: 4.5vh;
    background-color: rgba(0,0,0,0.46);
    font-size: 16px;
    color: white;
    margin-left: 25vw;
  }
  .header a{
    display: inline-block;
    text-decoration: none;
    float: right;
    color: white;
  }
  .acil{
    display: inline-block;
    width: 14vw;
    height: 14vw;
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
    padding: 0 10px 0 0;
  }
  .logo{
    float: left;
    width: 4vw;
    height: 4vw;
    z-index: 10;
    margin-top: 10px;
    margin-left: 25px;
  }
  .bk{
    position: absolute;
    width: 100%;
    height: 76vh;
    top: 0;
    left: 0;
    z-index: -1;
    background: url("../assets/bk1.png") no-repeat;
    background-size: 100% 100%;
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
    margin-right: 5vw;
  }
  .cil{
    width: 14vw;
    height: 14vw;
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
    margin-top: 50vh;
    margin-left:24vw;
  }
  .tip{
    margin-top: 10px;
    font-size: 14px;
  }
</style>
