<template>
  <div class="main_add">
    <router-link to="/"><img class="logo" src="../assets/logo.png"></router-link>
    <div class="center_add">
      <p class="luru">录入信息</p>
      <p class="luru" style="color: cornflowerblue;cursor: pointer;">修改已录入信息</p>
      <el-table :data="list" v-loading="loading">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="省份" prop="province"></el-table-column>
        <el-table-column label="城市" prop="city"></el-table-column>
        <el-table-column label="地区" prop="area"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
<!--            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :title="itemForm.title" :visible.sync="dialogAcDataEditVisible" width="50%">
        <el-form ref='itemForm' :model="itemForm">
          <el-form-item label="名称" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="省份" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.province"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="城市" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.city"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="地区" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.area"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="经度" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.longitude"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="纬度" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.latitude"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="类型" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.type"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="民族" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.nationality"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="等级" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.grade"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="时代" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.era"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="主要景点文物" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.things"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="文化简介" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input type="textarea" :rows="4" v-model="itemForm.introduction"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="详细地址" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.address"></el-input>
            </el-col>
          </el-form-item>
<!--          <el-form-item label="路线" size="medium" label-width="75px">-->
<!--            <el-col :span="22">-->
<!--              <el-input v-model="itemForm.nationality"></el-input>-->
<!--            </el-col>-->
<!--          </el-form-item>-->
          <el-form-item label="开放时间" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.time"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="电话" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.phone"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="票务" size="medium" label-width="100px">
            <el-col :span="22">
              <el-input v-model="itemForm.ticket"></el-input>
            </el-col>
          </el-form-item>
<!--          <el-form-item label="图片" size="medium" label-width="75px">-->
<!--            <el-col :span="22">-->
<!--              <el-input v-model="itemForm.nationality"></el-input>-->
<!--            </el-col>-->
<!--          </el-form-item>-->
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAcDataEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveAcEditInfo()">保 存</el-button>
      </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {request} from "../net/request";

  export default {
    name: "itemList",
    data () {
      return {
        list: [],
        loading: false,
        dialogAcDataEditVisible: false,
        itemForm: {
          id: 0,
          province: "",
          city: "",
          area: "",
          name: "",
          type: "",
          nationality: "",
          grade: "",
          introduction: "",
          era: "",
          things: "",
          ticket: "",
          address: "",
          phone: "",
          time: "",
          images: "",
          latitude: "",
          longitude: ""
        }
      }
    },
    mounted() {
      this.getlist()
    },
    methods: {
      handleEdit (index,row) {
        this.itemForm.title = "修改";
        this.itemForm.name = row.name;
        this.itemForm.id = row.id
        this.itemForm.province = row.province
        this.itemForm.city = row.city
        this.itemForm.area = row.area
        this.itemForm.nationality = row.nationality
        this.itemForm.type = row.type
        this.itemForm.longitude = row.longitude
        this.itemForm.latitude = row.latitude
        this.itemForm.grade = row.grade
        this.itemForm.era = row.era
        this.itemForm.things = row.things
        this.itemForm.introduction = row.introduction
        this.itemForm.address = row.address
        this.itemForm.time = row.time
        this.itemForm.phone = row.phone
        this.itemForm.ticket = row.ticket
        this.dialogAcDataEditVisible = true;
      },
      handleDelete(index, row) {
        this.$confirm("确认删除此景区吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
            this.tableData.splice(index, 1);
            // this.deleteAC(row.id);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          }).catch(() => {});
      },
      saveAcEditInfo () {
        // console.log(this.itemForm.nameString)
        this.dialogAcDataEditVisible = false
        let _this = this
        request({
          url: '/viewpoint/update',
          method: 'post',
          header: {
            Authorization: localStorage.getItem('token')
          },
          params: {
            id: _this.itemForm.id,
            address: _this.itemForm.address,
            area: _this.itemForm.area,
            city: _this.itemForm.city,
            images: _this.itemForm.images,
            introduction: _this.itemForm.intru,
            latitude: _this.itemForm.latitude,
            longitude: _this.itemForm.longitude,
            name: _this.itemForm.name,
            nationality: _this.itemForm.nationality,
            phone: _this.itemForm.phone,
            province: _this.itemForm.province,
            things: _this.itemForm.things,
            ticket: _this.itemForm.ticket,
            time: _this.itemForm.time,
            type: _this.itemForm.type,
            grade: _this.itemForm.grade,
            era: _this.itemForm.era
          }
        }).then(res => {
          console.log('修改成功')
          _this.getlist()
        }).catch(e => {
          console.log(e)
        })
      },
      getlist () {
        let _this = this
        request({
          url: '/viewpoint/getall',
          method: 'get',
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }).then(res => {
          _this.list = res.data
          console.log(res)
          console.log('获取成功！')
          // _this.reload()
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
