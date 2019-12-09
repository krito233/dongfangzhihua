<template>
  <div class="main_add">
    <div class="center_add">
      <p class="luru">录入信息</p>
      <ul>
        <li>名&emsp;称<input type="text"></li>
        <li>名&emsp;称<input type="text"></li>
        <li>名&emsp;称<input type="text"></li>
        <li>名&emsp;称<input type="text"></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "addMes"
    }
</script>

<style scoped>
  *{
    list-style: none;
  }
  .main_add{
    background-color: #f1f1f1;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
  .center_add{
    width: 80%;
    background-color: white;
    margin-left: 10vw;
  }
  .luru{
    font-size: 16px;
    font-weight: bold;
  }
</style>
