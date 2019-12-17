<template>
  <div class="main_add">
    <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
    <div class="center_add">
      <p class="luru">录入信息</p>
      <ul>
        <li>名&emsp;称<input type="text" class=""></li>
        <li>省&emsp;份<input type="text"></li>
        <li>城&emsp;市<input type="text"></li>
        <li>地&emsp;区<input type="text"></li>
        <li>类&emsp;型<input type="text"></li>
        <li>民&emsp;族<input type="text"></li>
        <li><p class="jj">简&emsp;介</p><textarea name="" id="" cols="30" rows="10" class="long"></textarea><div style="clear: both"></div></li>
        <li>详细地址<input type="text"></li>
        <li>路&emsp;线<input type="text"></li>
        <li>时&emsp;间<input type="text"></li>
        <li>电&emsp;话<input type="text"></li>
        <li>票&emsp;务<input type="text"></li>
        <li>图&emsp;片<el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog></li>
        <button type="submit" class="sub">提交</button>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "addMes",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
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
  }
  .long{
    height: 5vh;
  }
  li{
    font-size: 14px;
    margin-top: 3vh;
  }
  .jj{
    margin-left: 20vw;
    font-size: 14px;
    float: left;
  }
  textarea{
    float: left;
  }
  input{
    width: 40%;
    padding: 1em;
    line-height: 1em;
    background-color: #f3f2f2;
    border-radius: 8px;
    margin-left: 10px;
  }
  .long{
    width: 40%;
    height: auto;
    padding: 1em;
    background-color: #f3f2f2;
    border-radius: 10px;
    margin-left: 10px;
    border: none;
    outline: none;
  }
  .center_add{
    width: 80%;
    background-color: white;
    margin-left: 10vw;
  }
  .luru{
    font-size: 16px;
    font-weight: bold;
    padding-top: 5vh;
  }
  .sub{
    font-size: 20px;
    width: 12em;
    line-height: 1em;
    background-color: #42b983;
    color: white;
    padding: 0.6em 0;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 2vh;
    margin-bottom: 5vh;
  }
  .logo{
    float: left;
    width: 4vw;
    height: 4vw;
    z-index: 10;
    margin-top: 10px;
    margin-left: 25px;
  }
</style>
