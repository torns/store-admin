(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signin"],{"0461":function(t,e,o){},2449:function(t,e,o){"use strict";var n=o("416a"),i=o.n(n);i.a},"416a":function(t,e,o){},"9d98":function(t,e,o){"use strict";var n=o("0461"),i=o.n(n);i.a},ac9e:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("comp-header"),o("el-row",{staticClass:"sign-content",attrs:{align:"middle",justify:"center",type:"flex"}},[o("el-col",{attrs:{sm:{span:6},xs:{span:22}}},[o("el-form",{ref:"form",attrs:{model:t.form}},[o("div",{staticStyle:{"padding-bottom":"30px",display:"flex","flex-direction":"row","justify-content":"center","align-items":"center"}},[o("span",{staticStyle:{color:"#666"}},[t._v("当前服务端:")]),o("el-tag",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.domain))]),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(e){t.$router.push({name:"config"})}}},[t._v("切换")])],1),o("el-form-item",{attrs:{label:"手机号"}},[o("el-input",{attrs:{placeholder:"输入您的手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}},[o("span",{directives:[{name:"show",rawName:"v-show",value:0===t.authcodeStatus,expression:"authcodeStatus === 0"}],staticClass:"sign-verify_code",attrs:{slot:"suffix"},on:{click:t.getValidCode},slot:"suffix"},[t._v(t._s(t.countDown>0?t.countDown:"获取验证码"))]),o("i",{directives:[{name:"show",rawName:"v-show",value:1===t.authcodeStatus,expression:"authcodeStatus === 1"}],staticClass:"el-icon-loading",attrs:{slot:"suffix"},slot:"suffix"})])],1),o("el-form-item",{attrs:{label:"短信验证码"}},[o("el-input",{attrs:{placeholder:"输入收到的短信验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),o("el-form-item",[o("el-button",{ref:"signinButton",staticStyle:{width:"100%"},attrs:{disabled:t.disableButton,type:"primary",loading:t.singinLoading},on:{click:t.onSubmit}},[t._v("登录")])],1)],1)],1)],1)],1)},i=[],s=(o("cadf"),o("551c"),o("097d"),o("8e44")),a=o("e8e1"),r=o("73cd"),c=o("5118"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"bdb"},[o("el-col",{attrs:{sm:{span:4,push:2},xs:{span:24}}},[o("div",{staticClass:"comp-header_logo",on:{click:function(e){t.$router.push({name:"index"})}}})])],1)},u=[],d={data:function(){return{token:Object(r["e"])()}}},m=d,f=(o("2449"),o("2877")),h=Object(f["a"])(m,l,u,!1,null,null,null),b=h.exports,p={components:{"comp-header":b},data:function(){return{domain:localStorage.getItem("domain"),form:{mobile:"",code:""},authcodeStatus:0,countDown:0,singinLoading:!1}},computed:{disableButton:function(){var t=this.form,e=t.code,o=t.mobile;return!e||!o}},created:function(){Object(r["e"])()&&this.$router.push({name:"dashboard"})},methods:{stopCountDown:function(){Object(c["clearTimeout"])(this.timer),this.timer=null},startCountDown:function(){if(0===this.countDown)return this.stopCountDown();this.countDown=this.countDown-1,this.timer=Object(c["setTimeout"])(this.startCountDown,1e3)},validMobile:function(){return 11===this.form.mobile.length},validAuthCode:function(){return/^\d{4}$/.test(this.form.code)},errorMessage:function(t){this.$message({message:t,type:"error"})},onSubmit:function(){var t=this;return this.validMobile()?this.validAuthCode()?(this.singinLoading=!0,void Object(s["b"])("StoreAuthService.Auth",Object(a["a"])("MobileAuthRequest",{token:Object(a["a"])("Token",{token:this.token}),code:this.form.code,mobile:this.form.mobile})).then(function(e){Object(r["f"])(e.token),t.singinLoading=!1,t.$router.push({name:"home"})}).catch(function(e){t.singinLoading=!1})):this.errorMessage("请输入正确的验证码"):this.errorMessage("请输入正确的手机号码")},getValidCode:function(){var t=this;if(!this.validMobile())return this.errorMessage("请输入正确的手机号码");this.authcodeStatus=1,Object(s["b"])("StoreAuthService.SigninSendCode",Object(a["a"])("CodeRequest",{mobile:this.form.mobile})).then(function(e){t.token=e.token,t.countDown=60,t.startCountDown(),t.authcodeStatus=0}).catch(function(e){t.authcodeStatus=0})}}},g=p,v=(o("9d98"),Object(f["a"])(g,n,i,!1,null,null,null));e["default"]=v.exports}}]);
//# sourceMappingURL=signin.78a0c619.js.map