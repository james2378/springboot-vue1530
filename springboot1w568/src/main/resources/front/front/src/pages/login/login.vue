<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230104/149cce5901d247838e12d10d26caa0e4.jpg) no-repeat center top / 100% 100%","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"border":"1px solid #bdefb6","padding":"30px 40px","boxShadow":"0 0px 0px rgba(0, 0, 0, .1)","margin":"0","borderRadius":"30px","flexWrap":"wrap","background":"rgba(255,255,255,.9)","display":"flex","width":"800px","position":"relative","justifyContent":"space-between","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"boxShadow":"inset 0px 0px 32px 0px #c5f1c0","margin":"0 0 20px","borderColor":"#bdefb6","color":"#5bb450","textAlign":"center","borderWidth":"1px 4px","width":"62%","lineHeight":"44px","fontSize":"16px","borderStyle":"solid","textShadow":"0px 0px 0px rgba(64, 158, 255, .5)"}'>养老院管理系统登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"62%","margin":"0 0 10px","flexWrap":"wrap","display":"flex"}' prop="username">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>账号：</div>
				<input :style='{"border":"1px solid #bdefb6","padding":"0 10px","boxShadow":"inset 0px 0px 12px 0px #c5f1c0","outline":"0px solid #efefef","color":"#333","outlineOffset":"4px","borderRadius":"8px","flex":"1","width":"100%","fontSize":"14px","height":"40px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"62%","margin":"0 0 10px","flexWrap":"wrap","display":"flex"}' prop="password">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<input :style='{"border":"1px solid #bdefb6","padding":"0 10px","boxShadow":"inset 0px 0px 12px 0px #c5f1c0","outline":"0px solid #efefef","color":"#333","outlineOffset":"4px","borderRadius":"8px","flex":"1","width":"100%","fontSize":"14px","height":"40px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>
			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"62%","margin":"20px 0 10px"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>
			<el-form-item :style='{"border":"1px solid #bdefb6","boxShadow":"inset 0px 0px 56px 0px #c5f1c0","margin":"0 40px 0px 0","borderRadius":"20%","background":"#fff","width":"30%","position":"absolute","right":"0","height":"calc(100% - 60px)"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px 23% 0","borderColor":"#59B450","color":"#333","minWidth":"51%","outline":"none","borderRadius":"4px","background":"#c6ecc6","borderWidth":"4px 0","width":"auto","fontSize":"14px","borderStyle":"solid","height":"44px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(64, 158, 255, 1)","display":"none","width":"auto","fontSize":"14px","height":"44px"}' @click="resetForm('loginForm')">重置</el-button>
                <el-upload v-if="loginType==2" :action="baseUrl + 'file/upload'" :show-file-list="false" :on-success="faceLogin">
                    <el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px 23% 0","borderColor":"#59B450","color":"#333","minWidth":"51%","outline":"none","borderRadius":"4px","background":"#c6ecc6","borderWidth":"4px 0","width":"auto","fontSize":"14px","borderStyle":"solid","height":"44px"}'>人脸识别登录</el-button>
                </el-upload>
			</el-form-item>
			<div :style='{"margin":"0 40px 0 0","alignItems":"center","top":"104px","flexWrap":"wrap","display":"flex","width":"30%","position":"absolute","right":"4px","justifyContent":"center","height":"auto"}'>
			<router-link :style='{"cursor":"pointer","padding":"3px 10px","margin":"5px 20%","borderColor":"#999","color":"#333","textAlign":"center","background":"#eee","borderWidth":"4px 0","width":"50%","fontSize":"14px","textDecoration":"none","borderStyle":"solid"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
		</el-form>
    </div>
</div>
</template>

<script>

export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"养老院信息","menuJump":"列表","tableName":"yanglaoyuanxinxi"}],"menu":"养老院信息管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改","删除","审核","入住"],"menu":"老人信息","menuJump":"列表","tableName":"laorenxinxi"}],"menu":"老人信息管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除","健康"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除"],"menu":"健康信息","menuJump":"列表","tableName":"jiankangxinxi"}],"menu":"健康信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"养老院公告","tableName":"news"},{"appFrontIcon":"cuIcon-form","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"养老院信息列表","menuJump":"列表","tableName":"yanglaoyuanxinxi"}],"menu":"养老院信息模块"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"老人信息","menuJump":"列表","tableName":"laorenxinxi"}],"menu":"老人信息管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","支付"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"健康信息","menuJump":"列表","tableName":"jiankangxinxi"}],"menu":"健康信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"养老院信息列表","menuJump":"列表","tableName":"yanglaoyuanxinxi"}],"menu":"养老院信息模块"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}]
		}
	},
	created() {
        for(let item in this.roleMenus) {
            if(this.roleMenus[item].hasFrontLogin=='是') {
                this.roles.push(this.roleMenus[item]);
            }
        }
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
              if (res.data.code === 0) {
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('UserTableName', this.loginForm.tableName);
                localStorage.setItem('username', this.loginForm.username);
                localStorage.setItem('adminName', this.loginForm.username);
                localStorage.setItem('sessionTable', this.loginForm.tableName);
                localStorage.setItem('role', this.role);
                localStorage.setItem('keyPath', this.$config.indexNav.length+2);
                this.$router.push('/index/center');
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: 1500,
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230104/149cce5901d247838e12d10d26caa0e4.jpg) no-repeat center top / 100% 100%;
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border: 1px solid #bdefb6;
			border-radius: 8px;
			padding: 0 10px;
			box-shadow: inset 0px 0px 12px 0px #c5f1c0;
			outline: 0px solid #efefef;
			color: #333;
			flex: 1;
			width: 100%;
			font-size: 14px;
			outline-offset: 4px;
			height: 40px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border: 1px solid #bdefb6;
			border-radius: 8px;
			padding: 0 10px;
			box-shadow: inset 0px 0px 12px 0px #c5f1c0;
			outline: none;
			color: #333;
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 110px);
			font-size: 14px;
			height: 40px;
		}
		
		.list-type /deep/ .el-radio__input .el-radio__inner {
			background: rgba(53, 53, 53, 0);
			border-color: #666;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			background: #5bb450;
			border-color: #5bb450;
		}
		.list-type /deep/ .el-radio__label {
			color: #666;
			font-size: 14px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: #5bb450;
			font-size: 14px;
		}
	}
</style>
