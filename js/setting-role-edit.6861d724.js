(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting-role-edit"],{"1e10":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"navigator-bar"},[e._v("\n    "+e._s(this.form.id?"编辑角色":"添加角色")+"\n    "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.$router.back()}}},[e._v("返回")])],1),n("div",{staticClass:"container"},[n("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-position":"right","label-width":"80px"}},[n("el-form-item",{attrs:{label:"角色名"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入角色名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{staticClass:"role_edit-permissions",attrs:{label:"选择角色"}},[n("el-checkbox",{staticStyle:{color:"#ccc"},attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),n("el-checkbox-group",{staticClass:"role_edit-checkbox",on:{change:e.handlecheckedPermissionsChange},model:{value:e.form.cansList,callback:function(t){e.$set(e.form,"cansList",t)},expression:"form.cansList"}},e._l(e.cansList,function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}))],1)],1)],1),n("div",{staticStyle:{"text-align":"right",padding:"24px"}},[e.form.id?e._e():n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.create}},[e._v("添加")]),e.form.id?n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.update}},[e._v("更新")]):e._e()],1)])},r=[],s=(n("6762"),n("2fdb"),n("96cf"),n("1da1")),i=(n("cadf"),n("551c"),n("097d"),n("ab1c"),n("e8e1")),c=n("8e44"),o=n("73cd"),l=n("a3fb"),u={name:"EmployeeEdit",data:function(){return{token:"",form:{id:0,name:"",cansList:[]},rules:{name:[{required:!0,message:"请输入角色名",trigger:"blur"}],cansList:[{type:"array",required:!0,message:"请选择权限",trigger:"change"}]},checkAll:!1,isIndeterminate:!1,cansList:[]}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.token=Object(o["e"])(),e.next=3,Object(l["b"])();case 3:t=e.sent.kind,0==t&&(this.cansList=["订单管理","商品管理","数据分析","优惠券管理","营销规则管理","会员储值管理","用户管理","小程序模版管理","管理员管理","店铺信息管理","配送费管理","轮播图管理","小程序码管理","打印机管理","分销设置","分店管理","红包管理"]),1==t&&(this.cansList=["订单管理","商品管理","数据分析","优惠券管理","营销规则管理","会员储值管理","用户管理","小程序模版管理","管理员管理","店铺信息管理","小程序码管理","分销设置","分店管理","红包管理"]),2==t&&(this.cansList=["订单管理","商品管理","数据分析","优惠券管理","营销规则管理","会员储值管理","用户管理","小程序模版管理","管理员管理","店铺信息管理","名师名生管理","配送费管理","预约管理","报名管理","轮播图管理","小程序码管理","打印机管理","分销设置","分店管理","红包管理"]),3==t&&(this.cansList=["订单管理","商品管理","数据分析","优惠券管理","营销规则管理","会员储值管理","用户管理","小程序模版管理","管理员管理","店铺信息管理","小程序码管理","分销设置","分店管理","红包管理"]),4==t&&(this.cansList=["订单管理","商品管理","数据分析","优惠券管理","营销规则管理","会员储值管理","用户管理","小程序模版管理","管理员管理","店铺信息管理","周期购管理","配送费管理","轮播图管理","小程序码管理","打印机管理","分销设置","分店管理","红包管理"]),6==t&&(this.cansList=["订单管理","商品管理","数据分析","优惠券管理","营销规则管理","会员储值管理","用户管理","小程序模版管理","管理员管理","店铺信息管理","配送费管理","轮播图管理","打印机管理","小程序码管理","分销设置","分店管理","红包管理"]),7==t&&(this.cansList=["订单管理","商品管理","数据分析","优惠券管理","营销规则管理","会员储值管理","用户管理","小程序模版管理","管理员管理","店铺信息管理","配送费管理","打印机管理","小程序码管理","轮播图管理","分销设置","分店管理","红包管理"]),this.$route.query.id&&Object(c["a"])("StoreStoreRoleService.GetStoreRole",Object(i["a"])("IDWithTokenRequest",{token:Object(i["a"])("Token",{token:this.token}),id:this.$route.query.id})).then(function(e){e.cansList=e.cansList.filter(function(e){return n.cansList.includes(e)}),n.form=e});case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{create:function(){var e=this;this.$refs.form.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,Object(c["a"])("StoreStoreRoleService.CreateStoreRole",Object(i["a"])("StoreRoleWithTokenRequest",{token:Object(i["a"])("Token",{token:e.token}),storerole:Object(i["a"])("StoreRole",e.form)}));case 3:t.sent,e.$router.back(),e.$message({message:"保存成功",type:"success"});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},update:function(){var e=this;this.$refs.form.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,Object(c["a"])("StoreStoreRoleService.UpdateStoreRole",Object(i["a"])("StoreRoleWithTokenRequest",{token:Object(i["a"])("Token",{token:e.token}),storerole:Object(i["a"])("StoreRole",e.form)}));case 3:t.sent,e.$router.back(),e.$message({message:"保存成功",type:"success"});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},handleCheckAllChange:function(e){this.form.cansList=this.checkAll?this.cansList:[],this.isIndeterminate=!1},handlecheckedPermissionsChange:function(e){this.checkAll=e.length===this.cansList.length,this.isIndeterminate=e.length!==this.cansList.length&&0!==e.length}}},h=u,f=(n("cdea"),n("6561"),n("2877")),d=Object(f["a"])(h,a,r,!1,null,"03daa58e",null);t["default"]=d.exports},"56ee":function(e,t,n){"use strict";var a=n("bff6"),r=n.n(a);r.a},6561:function(e,t,n){"use strict";var a=n("8ae0"),r=n.n(a);r.a},"8ae0":function(e,t,n){},ab1c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab"},e._l(e.data,function(t){return n("div",{key:t.label,class:["tab-item",{active:e.value===t.value}],on:{click:function(n){e.onClickItem(t.value)}}},[e._v(e._s(t.label))])}))},r=[],s={props:{data:{type:Array,default:function(){return[{label:"test",value:0},{label:"test2",value:1}]},required:!0},value:{default:"",required:!0}},methods:{onClickItem:function(e){this.$emit("input",e)}}},i=s,c=(n("56ee"),n("2877")),o=Object(c["a"])(i,a,r,!1,null,"5e44c4ee",null);t["a"]=o.exports},bff6:function(e,t,n){},cdea:function(e,t,n){"use strict";var a=n("d1db"),r=n.n(a);r.a},d1db:function(e,t,n){}}]);
//# sourceMappingURL=setting-role-edit.6861d724.js.map