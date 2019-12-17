<template>
  <div class="main_add">
    <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
    <div class="center_add">
      <p class="luru">录入信息</p>
      <ul v-model="info">
        <li>名&emsp;称<input type="text" class="" v-model="info.name"></li>
        <li>省&emsp;份<input type="text" v-model="info.province"></li>
        <li>城&emsp;市<input type="text" v-model="info.city"></li>
        <li>地&emsp;区<input type="text" v-model="info.area"></li>
        <li>类&emsp;型<input type="text"  v-model="info.type"></li>
        <li>民&emsp;族<input type="text"  v-model="info.nationality"></li>
        <li><p class="jj">简&emsp;介</p><textarea name="" id="" cols="30" rows="10" class="long" v-model="info.intru"></textarea><div style="clear: both"></div></li>
        <li>详细地址<input type="text" v-model="info.address"></li>
        <li>路&emsp;线<input type="text" v-model="info.route"></li>
        <li>时&emsp;间<input type="text" v-model="info.time"></li>
        <li>电&emsp;话<input type="text"  v-model="info.phone"></li>
        <li>票&emsp;务<input type="text" v-model="info.ticket"></li>
        <li>图&emsp;片<el-upload
          action="http://106.15.248.47:8080/file/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :auto-upload="true"
          :http-request="uploadimg"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog></li>
        <button type="submit" class="sub" @click="updata">提交</button>
      </ul>
    </div>
  </div>
</template>

<script>
  import {request,head} from '../net/request'
  export default {
    name: "addMes",
    inject: ['reload'],
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        // imgurl: '',
        info: {
          name: '',
          province: '',
          city: '',
          area: '',
          type: '',
          nationality: '',
          intru: '',
          address: '',
          route: '',
          time: '',
          phone: '',
          ticket: '',
          images: ''
        }
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.info.images = file.url
        this.dialogVisible = true
        console.log(this.info.images)
      },
      updata () {
        let _this = this
        request({
          url: '/viewpoint',
          method: 'post',
          headers: {
            Authorization: localStorage.getItem('token')
          },
          params: {
            addressString: _this.info.address,
            areaString: _this.info.area,
            cityString: _this.info.city,
            imagesString: _this.info.images,
            introductionString: _this.info.intru,
            nameString: _this.info.name,
            nationalityString: _this.info.nationality,
            phoneString: _this.info.phone,
            provinceString: _this.info.province,
            routeString: _this.info.route,
            ticketString: _this.info.ticket,
            timeString: _this.info.time,
            typeString: _this.info.type
          }
        }).then(res => {
          console.log(res)
          alert('上传成功！')
          _this.reload()
        }).catch(e => {
          console.log(e)
        })
      },
      uploadimg (f) {
        console.log(this.info.images)
        let _this = this
        this.info.images = f.url
        // console.log(f.url)
        // console.log(localStorage.getItem('token'))
        let param = new FormData()
        param.append('file', f.file)
        this.$http.post(head + '/file',param,{
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }).then(res => {
          // console.log(res)
          if(_this.info.images) {
            _this.info.images = _this.info.images + ',' + res.data
          } else {
            _this.info.images = res.data
          }
        }).catch(e => {
          console.log(e)
        })
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
