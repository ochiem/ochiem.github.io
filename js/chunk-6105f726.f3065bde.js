(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6105f726"],{aeb1:function(t,e,i){var n,s,a;(function(i,o){s=[],n=o,a="function"===typeof n?n.apply(e,s):n,void 0===a||(t.exports=a)})(0,(function(){return function t(e,i,n){var s,a,o=window,r="application/octet-stream",l=n||r,c=e,d=!i&&!n&&c,u=document.createElement("a"),m=function(t){return String(t)},_=o.Blob||o.MozBlob||o.WebKitBlob||m,f=i||"download";if(_=_.call?_.bind(o):Blob,"true"===String(this)&&(c=[c,l],l=c[0],c=c[1]),d&&d.length<2048&&(f=d.split("/").pop().split("?")[0],u.href=d,-1!==u.href.indexOf(d))){var b=new XMLHttpRequest;return b.open("GET",d,!0),b.responseType="blob",b.onload=function(e){t(e.target.response,f,r)},setTimeout((function(){b.send()}),0),b}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)){if(!(c.length>2096103.424&&_!==m))return navigator.msSaveBlob?navigator.msSaveBlob(v(c),f):C(c);c=v(c),l=c.type||r}else if(/([\x80-\xff])/.test(c)){var g=0,p=new Uint8Array(c.length),h=p.length;for(g;g<h;++g)p[g]=c.charCodeAt(g);c=new _([p],{type:l})}function v(t){var e=t.split(/[:;,]/),i=e[1],n="base64"==e[2]?atob:decodeURIComponent,s=n(e.pop()),a=s.length,o=0,r=new Uint8Array(a);for(o;o<a;++o)r[o]=s.charCodeAt(o);return new _([r],{type:i})}function C(t,e){if("download"in u)return u.href=t,u.setAttribute("download",f),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===e&&setTimeout((function(){o.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,r)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var i=document.createElement("iframe");document.body.appendChild(i),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,r)),i.src=t,setTimeout((function(){document.body.removeChild(i)}),333)}if(s=c instanceof _?c:new _([c],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(s,f);if(o.URL)C(o.URL.createObjectURL(s),!0);else{if("string"===typeof s||s.constructor===m)try{return C("data:"+l+";base64,"+o.btoa(s))}catch(k){return C("data:"+l+","+encodeURIComponent(s))}a=new FileReader,a.onload=function(t){C(this.result)},a.readAsDataURL(s)}return!0}}))},c3ee:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-row",[i("b-col",{attrs:{md:"7"}},[i("div",{staticClass:"card card-custom gutter-b"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[i("h3",{staticClass:"card-label"},[t._v("Setting Coin")])]),i("div",{staticClass:"card-toolbar"},[i("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.is_admin},on:{click:function(e){return t.formModalCoin(null)}}},[i("b-icon-plus-circle"),t._v(" Add")],1)])]),t.is_admin?i("div",{staticClass:"card-body"},[i("b-form-group",{staticClass:"mb-3",attrs:{label:"Pencarian","label-for":"filter-input","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-input-group",{attrs:{size:"sm"}},[i("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Ketikkan untuk pencarian"},model:{value:t.setting_coin.filter,callback:function(e){t.$set(t.setting_coin,"filter",e)},expression:"setting_coin.filter"}}),i("b-input-group-append",[i("b-button",{attrs:{disabled:!t.setting_coin.filter},on:{click:function(e){t.setting_coin.filter=""}}},[t._v("Clear")])],1)],1)],1),i("b-table",{attrs:{striped:"",hover:"",items:t.listCoins,fields:t.setting_coin.fields,filter:t.setting_coin.filter,"filter-included-fields":t.setting_coin.filterOn,"current-page":t.setting_coin.currentPage,"per-page":t.setting_coin.perPage},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[i("div",{staticClass:"text-right"},[1==t.currentUser.level_akses?i("b-button-group",[i("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(i){return t.formModalCoin(e.item.nama_coin)}}},[i("b-icon-pencil")],1),i("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(i){return t.hapusCoin(e.item.nama_coin)}}},[i("b-icon-trash")],1)],1):t._e()],1)]}}])})],1):i("div",{staticClass:"card-body"},[t._v("Admin Only")]),t.is_admin?i("div",{staticClass:"card-footer"},[i("b-row",[i("b-col",{attrs:{md:"8"}}),i("b-col",{attrs:{md:"4"}},[i("b-pagination",{staticClass:"my-0",attrs:{"total-rows":null==t.listCoins?0:t.listCoins.length,"per-page":t.setting_coin.perPage,align:"fill",size:"sm"},model:{value:t.setting_coin.currentPage,callback:function(e){t.$set(t.setting_coin,"currentPage",e)},expression:"setting_coin.currentPage"}})],1)],1)],1):t._e()]),i("div",{staticClass:"card card-custom gutter-b"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[i("h3",{staticClass:"card-label"},[t._v("Setting Coin ERC")])]),i("div",{staticClass:"card-toolbar"},[i("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.is_admin},on:{click:function(e){return t.formModalCoin_erc(null)}}},[i("b-icon-plus-circle"),t._v(" Add")],1)])]),t.is_admin?i("div",{staticClass:"card-body"},[i("b-form-group",{staticClass:"mb-3",attrs:{label:"Pencarian","label-for":"filter-input","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-input-group",{attrs:{size:"sm"}},[i("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Ketikkan untuk pencarian"},model:{value:t.setting_coin_erc.filter,callback:function(e){t.$set(t.setting_coin_erc,"filter",e)},expression:"setting_coin_erc.filter"}}),i("b-input-group-append",[i("b-button",{attrs:{disabled:!t.setting_coin_erc.filter},on:{click:function(e){t.setting_coin_erc.filter=""}}},[t._v("Clear")])],1)],1)],1),i("b-table",{attrs:{striped:"",hover:"",items:t.listCoins_erc,fields:t.setting_coin_erc.fields,filter:t.setting_coin_erc.filter,"filter-included-fields":t.setting_coin_erc.filterOn,"current-page":t.setting_coin_erc.currentPage,"per-page":t.setting_coin_erc.perPage},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[i("div",{staticClass:"text-right"},[1==t.currentUser.level_akses?i("b-button-group",[i("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(i){return t.formModalCoin_erc(e.item.nama_coin)}}},[i("b-icon-pencil")],1),i("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(i){return t.hapusCoin_erc(e.item.nama_coin)}}},[i("b-icon-trash")],1)],1):t._e()],1)]}}])})],1):i("div",{staticClass:"card-body"},[t._v("Admin Only")]),t.is_admin?i("div",{staticClass:"card-footer"},[i("b-row",[i("b-col",{attrs:{md:"8"}}),i("b-col",{attrs:{md:"4"}},[i("b-pagination",{staticClass:"my-0",attrs:{"total-rows":null==t.listCoins_erc?0:t.listCoins_erc.length,"per-page":t.setting_coin_erc.perPage,align:"fill",size:"sm"},model:{value:t.setting_coin_erc.currentPage,callback:function(e){t.$set(t.setting_coin_erc,"currentPage",e)},expression:"setting_coin_erc.currentPage"}})],1)],1)],1):t._e()])]),i("b-col",{attrs:{md:"5"}},[i("div",{staticClass:"card card-custom gutter-b"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[i("h3",{staticClass:"card-label"},[t._v("Setting App")])])]),i("div",{staticClass:"card-body"},[t.is_admin?i("b-form-group",{staticClass:"mb-3",attrs:{label:"Link BSD","label-for":"setting_url_coin","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-form-input",{attrs:{disabled:!t.is_admin,id:"setting_url_coin",type:"text",placeholder:"Url"},model:{value:t.setting_url_coin,callback:function(e){t.setting_url_coin=e},expression:"setting_url_coin"}})],1):t._e(),t.is_admin?i("b-form-group",{staticClass:"mb-3",attrs:{label:"Link ERC","label-for":"setting_url_coin_erc","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-form-input",{attrs:{disabled:!t.is_admin,id:"setting_url_coin_erc",type:"text",placeholder:"Url"},model:{value:t.setting_url_coin_erc,callback:function(e){t.setting_url_coin_erc=e},expression:"setting_url_coin_erc"}})],1):t._e(),t.is_admin?i("b-form-group",{staticClass:"mb-3",attrs:{label:"BUSD Address (BSC)","label-for":"setting_busd_address","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-form-input",{attrs:{disabled:!t.is_admin,id:"setting_busd_address",type:"text",placeholder:"Token address BUSD"},model:{value:t.setting_busd_address,callback:function(e){t.setting_busd_address=e},expression:"setting_busd_address"}})],1):t._e(),t.is_admin?i("b-form-group",{staticClass:"mb-3",attrs:{label:"USDT Address (ERC)","label-for":"setting_usdt_address","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-form-input",{attrs:{disabled:!t.is_admin,id:"setting_usdt_address",type:"text",placeholder:"Token address USDT"},model:{value:t.setting_usdt_address,callback:function(e){t.setting_usdt_address=e},expression:"setting_usdt_address"}})],1):t._e(),i("b-form-group",{staticClass:"mb-3",attrs:{label:"Timeout Request","label-for":"timeout_request","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-form-input",{attrs:{id:"timeout_request",type:"number",placeholder:"Timeout Request"},model:{value:t.setting_timeout_request,callback:function(e){t.setting_timeout_request=e},expression:"setting_timeout_request"}})],1)],1)]),i("div",{staticClass:"card card-custom gutter-b"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[i("h3",{staticClass:"card-label"},[t._v("Import / Export Setting")])])]),i("div",{staticClass:"card-body"},[i("h4",[t._v("Import")]),i("b-form-group",{staticClass:"mb-3",attrs:{label:"Import","label-for":"setting_import","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-form-file",{attrs:{id:"setting_import",placeholder:"Url"},on:{change:t.onFileChange}})],1),i("b-form-group",{staticClass:"mb-3",attrs:{label:"","label-for":"setting_import_btn","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-button",{attrs:{variant:"primary",id:"setting_import_btn"},on:{click:function(e){return t.importSetting()}}},[i("b-icon-download"),t._v(" Import")],1)],1),t.is_admin?i("h4",[t._v("Export")]):t._e(),t.is_admin?i("b-form-group",{staticClass:"mb-3",attrs:{label:"Export","label-for":"setting_export_btn","label-cols-sm":"2","label-align-sm":"right","label-size":"sm"}},[i("b-button",{attrs:{disabled:!t.is_admin,variant:"primary",id:"setting_export_btn"},on:{click:function(e){return t.exportSetting()}}},[i("b-icon-upload"),t._v(" Export")],1)],1):t._e()],1)])])],1),i("b-modal",{ref:"modal-form-coin",attrs:{title:0==t.form_coin.edit?"Edit Coin":"Add Coin"},on:{ok:function(e){return e.preventDefault(),t.simpanCoin()}}},[i("b-form",[i("b-form-group",{attrs:{id:"ig_nama_coin",label:"Nama Coin:","label-for":"input_nama_coin"}},[i("b-form-input",{attrs:{id:"input_nama_coin",type:"text",placeholder:"Nama Coin",required:""},model:{value:t.form_coin.nama_coin,callback:function(e){t.$set(t.form_coin,"nama_coin",e)},expression:"form_coin.nama_coin"}})],1),i("b-form-group",{attrs:{id:"ig_coin_address",label:"Coin Address:","label-for":"input_coin_address"}},[i("b-form-input",{attrs:{id:"input_coin_address",type:"text",placeholder:"Coin Address",required:""},model:{value:t.form_coin.coin_address,callback:function(e){t.$set(t.form_coin,"coin_address",e)},expression:"form_coin.coin_address"}})],1),i("b-form-group",{attrs:{id:"ig_desimal",label:"Desimal:","label-for":"input_desimal"}},[i("b-form-input",{attrs:{id:"input_desimal",type:"number",placeholder:"Desimal",required:""},model:{value:t.form_coin.desimal,callback:function(e){t.$set(t.form_coin,"desimal",e)},expression:"form_coin.desimal"}})],1)],1)],1),i("b-modal",{ref:"modal-form-coin-erc",attrs:{title:0==t.form_coin_erc.edit?"Edit Coin ERC":"Add Coin ERC"},on:{ok:function(e){return e.preventDefault(),t.simpanCoin_erc()}}},[i("b-form",[i("b-form-group",{attrs:{id:"ig_nama_coin",label:"Nama Coin:","label-for":"input_nama_coin"}},[i("b-form-input",{attrs:{id:"input_nama_coin",type:"text",placeholder:"Nama Coin",required:""},model:{value:t.form_coin_erc.nama_coin,callback:function(e){t.$set(t.form_coin_erc,"nama_coin",e)},expression:"form_coin_erc.nama_coin"}})],1),i("b-form-group",{attrs:{id:"ig_coin_address",label:"Coin Address:","label-for":"input_coin_address"}},[i("b-form-input",{attrs:{id:"input_coin_address",type:"text",placeholder:"Coin Address",required:""},model:{value:t.form_coin_erc.coin_address,callback:function(e){t.$set(t.form_coin_erc,"coin_address",e)},expression:"form_coin_erc.coin_address"}})],1),i("b-form-group",{attrs:{id:"ig_desimal",label:"Desimal:","label-for":"input_desimal"}},[i("b-form-input",{attrs:{id:"input_desimal",type:"number",placeholder:"Desimal",required:""},model:{value:t.form_coin_erc.desimal,callback:function(e){t.$set(t.form_coin_erc,"desimal",e)},expression:"form_coin_erc.desimal"}})],1)],1)],1)],1)},s=[],a=i("5530"),o=(i("159b"),i("7db0"),i("0bce")),r=i("2f62"),l=i("3d20"),c=i.n(l),d=i("aeb1"),u=i.n(d),m={data:function(){return{setting_coin:{totalRows:1,currentPage:1,perPage:5,filter:null,filterOn:["nama_coin","coin_address","desimal"],fields:[{key:"nama_coin",label:"Nama Coin",sortable:!0},{key:"coin_address",label:"Coin Address",sortable:!0},{key:"desimal",label:"Desimal",sortable:!0},{key:"action",label:"",sortable:!1}],items:[]},setting_coin_erc:{totalRows:1,currentPage:1,perPage:5,filter:null,filterOn:["nama_coin","coin_address","desimal"],fields:[{key:"nama_coin",label:"Nama Coin",sortable:!0},{key:"coin_address",label:"Coin Address",sortable:!0},{key:"desimal",label:"Desimal",sortable:!0},{key:"action",label:"",sortable:!1}],items:[]},form_coin:{edit:!1,oriinal:null,nama_coin:null,coin_address:null,desimal:null},form_coin_erc:{edit:!1,oriinal:null,nama_coin:null,coin_address:null,desimal:null},imported_setting:null,is_admin:!0}},computed:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["listCoins","listCoins_erc","currentUser"])),{},{setting_url_coin:{get:function(){return null==this.$store.state.setting.settings?null:this.$store.state.setting.settings.url_coin||null},set:function(t){this.$store.dispatch("settingSet",{name:"url_coin",value:t})}},setting_url_coin_erc:{get:function(){return null==this.$store.state.setting.settings?null:this.$store.state.setting.settings.url_coin_erc||null},set:function(t){this.$store.dispatch("settingSet",{name:"url_coin_erc",value:t})}},setting_busd_address:{get:function(){return null==this.$store.state.setting.settings?null:this.$store.state.setting.settings.busd_address||null},set:function(t){this.$store.dispatch("settingSet",{name:"busd_address",value:t})}},setting_usdt_address:{get:function(){return null==this.$store.state.setting.settings?null:this.$store.state.setting.settings.usdt_address||null},set:function(t){this.$store.dispatch("settingSet",{name:"usdt_address",value:t})}},setting_timeout_request:{get:function(){return null==this.$store.state.setting.settings?null:this.$store.state.setting.settings.timeout_request||15},set:function(t){this.$store.dispatch("settingSet",{name:"timeout_request",value:t})}}}),components:{},methods:{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.readFile(e[0])},readFile:function(t){var e=this,i=new FileReader;i.onload=function(t){e.imported_setting=JSON.parse(t.target.result)},i.readAsText(t)},importSetting:function(){var t=this;if(null==this.imported_setting)c.a.fire({title:"File kosong / Tidak valid!",text:"File json untuk import kosong atau format json tidak valid",icon:"error",heightAuto:!1});else{var e=this.imported_setting;if(void 0==e.coin||void 0==e.coin_erc||void 0==e.settings)return this.swalFormatSalah("coin dan settings tidak ditemukan");var i=0;if(e.coin.forEach((function(t){void 0!=t.nama_coin&&void 0!=t.coin_address&&void 0!=t.desimal||i++})),e.coin_erc.forEach((function(t){void 0!=t.nama_coin&&void 0!=t.coin_address&&void 0!=t.desimal||i++})),i>0)return this.swalFormatSalah("json coin salah");if(void 0==e.settings.url_coin||void 0==e.settings.busd_address)return this.swalFormatSalah("json setting salah");this.$store.dispatch("setSetting",e.settings).then((function(){t.$store.dispatch("importCoin",{coin:e.coin,coin_erc:e.coin_erc}).then((function(){c.a.fire({title:"Import sukses!",text:"Import setting berhasil",icon:"success",heightAuto:!1})}))}))}},swalFormatSalah:function(t){return c.a.fire({title:"Format salah!",text:"Format json salah. "+t,icon:"error",heightAuto:!1}),!1},exportSetting:function(){var t={settings:this.$store.state.setting.settings,coin:this.listCoins,coin_erc:this.listCoins_erc};u()(JSON.stringify(t),"mw_setting.json","text/plain")},formModalCoin:function(t){if(null==t)this.form_coin.edit=!1,this.form_coin.original=null,this.form_coin.nama_coin="",this.form_coin.coin_address="",this.form_coin.desimal="";else{var e=this.listCoins.find((function(e){return e.nama_coin==t}));this.form_coin.edit=!0,this.form_coin.original=e.nama_coin,this.form_coin.nama_coin=e.nama_coin,this.form_coin.coin_address=e.coin_address,this.form_coin.desimal=e.desimal}this.$refs["modal-form-coin"].show()},formModalCoin_erc:function(t){if(null==t)this.form_coin_erc.edit=!1,this.form_coin_erc.original=null,this.form_coin_erc.nama_coin="",this.form_coin_erc.coin_address="",this.form_coin_erc.desimal="";else{var e=this.listCoins_erc.find((function(e){return e.nama_coin==t}));this.form_coin_erc.edit=!0,this.form_coin_erc.original=e.nama_coin,this.form_coin_erc.nama_coin=e.nama_coin,this.form_coin_erc.coin_address=e.coin_address,this.form_coin_erc.desimal=e.desimal}this.$refs["modal-form-coin-erc"].show()},simpanCoin:function(){var t=this;if(""==this.form_coin.nama_coin||""==this.form_coin.coin_address||""==this.form_coin.desimal)return c.a.fire({title:"Salah!",text:"Data tidak lengkap",icon:"error",heightAuto:!1}),!1;this.$store.dispatch("saveCoin",this.form_coin).then((function(){t.$refs["modal-form-coin"].hide(),c.a.fire({title:"Berhasil!",text:"Coin berhasil disimpan",icon:"success",heightAuto:!1})}))},simpanCoin_erc:function(){var t=this;if(""==this.form_coin_erc.nama_coin||""==this.form_coin_erc.coin_address||""==this.form_coin_erc.desimal)return c.a.fire({title:"Salah!",text:"Data tidak lengkap",icon:"error",heightAuto:!1}),!1;this.$store.dispatch("saveCoin_erc",this.form_coin_erc).then((function(){t.$refs["modal-form-coin-erc"].hide(),c.a.fire({title:"Berhasil!",text:"Coin berhasil disimpan",icon:"success",heightAuto:!1})}))},hapusCoin:function(t){var e=this;c.a.fire({title:"Apakah anda yakin?",text:"Data "+t+" akan dihapus permanen",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(i){i.isConfirmed&&e.$store.dispatch("deleteCoin",t).then((function(){c.a.fire({title:"Berhasil!",text:"Coin berhasil dihapus",icon:"success",heightAuto:!1})}))}))},hapusCoin_erc:function(t){var e=this;c.a.fire({title:"Apakah anda yakin?",text:"Data "+t+" akan dihapus permanen",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(i){i.isConfirmed&&e.$store.dispatch("deleteCoin_erc",t).then((function(){c.a.fire({title:"Berhasil!",text:"Coin berhasil dihapus",icon:"success",heightAuto:!1})}))}))}},mounted:function(){this.$store.dispatch(o["a"],[{title:"Market Watch"},{title:"Setting"}]),this.is_admin=1==this.currentUser.level_akses}},_=m,f=i("2877"),b=Object(f["a"])(_,n,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-6105f726.f3065bde.js.map