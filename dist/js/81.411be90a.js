"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[81],{6124:function(e,a,l){l.d(a,{Z:function(){return c}});var n=l(3396);const i={class:"MyFile"};function t(e,a,l,t,s,u){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("input",{ref:"inputRef",type:"file",onChange:a[0]||(a[0]=(...e)=>u.setValue&&u.setValue(...e))},null,544),(0,n._)("div",{onClick:a[1]||(a[1]=e=>t.inputRef.click()),class:"Myfile__slot"},[(0,n.WI)(e.$slots,"default")])])}var s=l(4870),u={setup(){return{inputRef:(0,s.iH)(null)}},methods:{setValue(e){this.$emit("fileClick",e.target.files)}}},d=l(89);const o=(0,d.Z)(u,[["render",t]]);var c=o},6081:function(e,a,l){l.r(a),l.d(a,{default:function(){return w}});var n=l(3396),i=l(5565),t=l(52),s=l(6124),u=l(7200),d=l(5978);async function o(e,a){const l=new FormData;l.append("name",e),l.append("image",a),await(0,d.e)(l)}var c=l(4870);const m={class:"Admin__modal modal-admin"},r=(0,n._)("div",{class:"modal-admin__name"},"Добавить бренд",-1),v={class:"modal-admin__addImage"},_={class:"modal-admin__imageCover"},f={key:0,class:"modal-admin__image"},p=["src"];var g={__name:"BrandModal",setup(e){const a=(0,c.iH)(null),l=(0,c.iH)(""),d=(0,c.iH)(null),g=e=>{const l=new FileReader;l.readAsDataURL(e[0]),l.onloadend=()=>{a.value=l.result},d.value=e[0]},k=()=>{o(l.value,d.value).then((()=>{l.value="",d.value=null,a.value=null,i.Z.commit("admin/setModal",!1)})).catch((e=>{console.log(e.response.data.message)}))};return(e,i)=>((0,n.wg)(),(0,n.iD)("div",m,[r,(0,n.Wm)(u.Z,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=e=>l.value=e),inputClass:"admin",placeholder:"*имя бренда",placeholderOn:!0},null,8,["modelValue"]),(0,n._)("div",v,[(0,n.Wm)(s.Z,{onFileClick:g},{default:(0,n.w5)((()=>[(0,n.Wm)(t.Z,{className:"login"},{default:(0,n.w5)((()=>[(0,n.Uk)("Выбрать изображение для бренда")])),_:1})])),_:1}),(0,n._)("div",_,[a.value?((0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("img",{src:a.value,alt:""},null,8,p)])):(0,n.kq)("",!0)]),(0,n.Wm)(t.Z,{onClick:k,className:"login"},{default:(0,n.w5)((()=>[(0,n.Uk)("Добавить")])),_:1})])]))}};const k=g;var w=k}}]);
//# sourceMappingURL=81.411be90a.js.map