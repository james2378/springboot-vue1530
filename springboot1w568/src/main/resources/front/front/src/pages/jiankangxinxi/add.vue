<template>
<div :style='{"width":"1200px","padding":"20px","margin":"0px auto","position":"relative","background":"none"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="养老院名称" prop="yanglaoyuanmingcheng">
            <el-input v-model="ruleForm.yanglaoyuanmingcheng" 
                placeholder="养老院名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="老人姓名" prop="laorenxingming">
            <el-input v-model="ruleForm.laorenxingming" 
                placeholder="老人姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="老人性别" prop="laorenxingbie">
            <el-input v-model="ruleForm.laorenxingbie" 
                placeholder="老人性别" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="老人年龄" prop="laorennianling">
            <el-input v-model="ruleForm.laorennianling" 
                placeholder="老人年龄" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="用户姓名" prop="yonghuxingming">
            <el-input v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="体温" prop="tiwen">
            <el-input v-model="ruleForm.tiwen" 
                placeholder="体温" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="心跳" prop="xintiao">
            <el-input v-model="ruleForm.xintiao" 
                placeholder="心跳" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="血压" prop="xueya">
            <el-input v-model="ruleForm.xueya" 
                placeholder="血压" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="血脂" prop="xuezhi">
            <el-input v-model="ruleForm.xuezhi" 
                placeholder="血脂" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="血糖" prop="xuetang">
            <el-input v-model="ruleForm.xuetang" 
                placeholder="血糖" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="体重" prop="tizhong">
            <el-input v-model="ruleForm.tizhong" 
                placeholder="体重" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="视力" prop="shili">
            <el-input v-model="ruleForm.shili" 
                placeholder="视力" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}'  label="听力" prop="tingli">
            <el-select v-model="ruleForm.tingli" placeholder="请选择听力"  >
              <el-option
                  v-for="(item,index) in tingliOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="测量日期" prop="celiangriqi" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.celiangriqi" 
                  type="date"
                  placeholder="测量日期">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="健康情况" prop="jiankangqingkuang">
            <editor 
                :style='{"padding":"0","boxShadow":"0 0 6px rgba(75,223,201,.5)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.jiankangqingkuang" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"cursor":"pointer","padding":"0","margin":"0 20px 0 0","borderColor":"#59b450","color":"#333","outline":"none","borderRadius":"4px","background":"#c6ecc6","borderWidth":"4px 0","width":"128px","fontSize":"14px","borderStyle":"solid","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"cursor":"pointer","padding":"0","margin":"0","borderColor":"#999999","color":"#333","outline":"none","borderRadius":"4px","background":"#dddddd","borderWidth":"4px 0","width":"128px","fontSize":"14px","borderStyle":"solid","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            yanglaoyuanmingcheng : false,
            laorenxingming : false,
            laorenxingbie : false,
            laorennianling : false,
            yonghuzhanghao : false,
            yonghuxingming : false,
            tiwen : false,
            xintiao : false,
            xueya : false,
            xuezhi : false,
            xuetang : false,
            tizhong : false,
            shili : false,
            tingli : false,
            celiangriqi : false,
            jiankangqingkuang : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yanglaoyuanmingcheng: '',
          laorenxingming: '',
          laorenxingbie: '',
          laorennianling: '',
          yonghuzhanghao: '',
          yonghuxingming: '',
          tiwen: '',
          xintiao: '',
          xueya: '',
          xuezhi: '',
          xuetang: '',
          tizhong: '',
          shili: '',
          tingli: '',
          celiangriqi: '',
          jiankangqingkuang: '',
        },
        tingliOptions: [],
        rules: {
          yanglaoyuanmingcheng: [
          ],
          laorenxingming: [
          ],
          laorenxingbie: [
          ],
          laorennianling: [
          ],
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          tiwen: [
          ],
          xintiao: [
          ],
          xueya: [
          ],
          xuezhi: [
          ],
          xuetang: [
          ],
          tizhong: [
          ],
          shili: [
          ],
          tingli: [
          ],
          celiangriqi: [
          ],
          jiankangqingkuang: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.celiangriqi = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='yanglaoyuanmingcheng'){
              this.ruleForm.yanglaoyuanmingcheng = obj[o];
              this.ro.yanglaoyuanmingcheng = true;
              continue;
            }
            if(o=='laorenxingming'){
              this.ruleForm.laorenxingming = obj[o];
              this.ro.laorenxingming = true;
              continue;
            }
            if(o=='laorenxingbie'){
              this.ruleForm.laorenxingbie = obj[o];
              this.ro.laorenxingbie = true;
              continue;
            }
            if(o=='laorennianling'){
              this.ruleForm.laorennianling = obj[o];
              this.ro.laorennianling = true;
              continue;
            }
            if(o=='yonghuzhanghao'){
              this.ruleForm.yonghuzhanghao = obj[o];
              this.ro.yonghuzhanghao = true;
              continue;
            }
            if(o=='yonghuxingming'){
              this.ruleForm.yonghuxingming = obj[o];
              this.ro.yonghuxingming = true;
              continue;
            }
            if(o=='tiwen'){
              this.ruleForm.tiwen = obj[o];
              this.ro.tiwen = true;
              continue;
            }
            if(o=='xintiao'){
              this.ruleForm.xintiao = obj[o];
              this.ro.xintiao = true;
              continue;
            }
            if(o=='xueya'){
              this.ruleForm.xueya = obj[o];
              this.ro.xueya = true;
              continue;
            }
            if(o=='xuezhi'){
              this.ruleForm.xuezhi = obj[o];
              this.ro.xuezhi = true;
              continue;
            }
            if(o=='xuetang'){
              this.ruleForm.xuetang = obj[o];
              this.ro.xuetang = true;
              continue;
            }
            if(o=='tizhong'){
              this.ruleForm.tizhong = obj[o];
              this.ro.tizhong = true;
              continue;
            }
            if(o=='shili'){
              this.ruleForm.shili = obj[o];
              this.ro.shili = true;
              continue;
            }
            if(o=='tingli'){
              this.ruleForm.tingli = obj[o];
              this.ro.tingli = true;
              continue;
            }
            if(o=='celiangriqi'){
              this.ruleForm.celiangriqi = obj[o];
              this.ro.celiangriqi = true;
              continue;
            }
            if(o=='jiankangqingkuang'){
              this.ruleForm.jiankangqingkuang = obj[o];
              this.ro.jiankangqingkuang = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.tingliOptions = "正常,轻度障碍,中度障碍,重度障碍,失聪".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('jiankangxinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('jiankangxinxi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('jiankangxinxi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('jiankangxinxi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #333;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  background: #eff8ee;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #333;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  background: #eff8ee;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #333;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  background: #eff8ee;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
