<template>
<div class="main_log">
  <div class="center_log">
    <img src="../assets/log.jpg" alt="" class="bk_log">
    <ul>
      <li>账&emsp;号<input type="text" class="put"></li>
      <li>密&emsp;码<input type="text" class="put"></li>
      <li class="rem"><input type="checkbox" style="cursor: pointer">记住我</li>
      <li><button type="submit" class="go_go_go">登&emsp;录</button></li>
      <router-link to="/add">登录成功</router-link>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  *{
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .main_log{
    background-color: #f1f1f1;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
  .center_log{
    width: 40vw;
    height: 80vh;
    margin-left: 30vw;
    margin-top: 10vh;
    position: relative;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
  }
  .bk_log{
    width: 100%;
    height: 50%;
  }
  li{
    line-height: 3em;
    font-size: 14px;
    margin-top: 1.6vh;
  }
  .put{
    width: 40%;
    padding: 1em;
    line-height: 1em;
    background-color: #f3f2f2;
    border-radius: 8px;
    margin-left: 10px;
  }
  .go_go_go{
    font-size: 20px;
    width: 12em;
    line-height: 1em;
    background-color: #42b983;
    color: white;
    padding: 0.6em 0;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
