(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae3b550a"],{"0ccb":function(t,e,i){var n=i("50c4"),a=i("1148"),s=i("1d80"),r=Math.ceil,l=function(t){return function(e,i,l){var o,c,d=String(s(e)),u=d.length,h=void 0===l?" ":String(l),p=n(i);return p<=u||""==h?d:(o=p-u,c=a.call(h,r(o/h.length)),c.length>o&&(c=c.slice(0,o)),t?d+c:c+d)}};t.exports={start:l(!1),end:l(!0)}},6544:function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.components=t.exports.options.components),i.components=i.components||{},e)i.components[n]=i.components[n]||e[n]}},7496:function(t,e,i){"use strict";var n=i("5530"),a=(i("df86"),i("2b0e")),s=a["default"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),r=s;function l(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return a["default"].extend({mixins:e})}e["a"]=l(r).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(n["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},"843c":function(t,e,i){"use strict";var n=i("23e7"),a=i("0ccb").end,s=i("9a0c");n({target:"String",proto:!0,forced:s},{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"9a0c":function(t,e,i){var n=i("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},c559:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card card-custom gutter-b"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[i("h3",{staticClass:"card-label"},[t._v(" Sinyal ")])]),i("div",{staticClass:"card-toolbar"},[t.threshold>0?i("span",{staticClass:"mr-2"},[i("span",{staticClass:"badge",staticStyle:{"background-color":"#00ff00"}},[t._v(t._s(t.threshold))]),t._v(" Sinyal Ditemukan ")]):t._e(),t.running_request>0?t._e():i("button",{staticClass:"btn btn-primary mr-1",attrs:{disabled:t.sinyal.fetching,title:"Klik reset untuk menerapkan perubahan modal ke semua coin"},on:{click:function(e){return t.registerAndStartFetchSinyal()}}},[i("b-icon-back"),t._v(" Setup ")],1),t.running_request>0?i("span",{staticClass:"text-muted"},[i("b-spinner",{attrs:{small:""}}),t._v(" Update Harga Koin "+t._s(t.running_request)+" ")],1):i("button",{staticClass:"btn btn-primary",attrs:{disabled:t.sinyal.fetching,title:"Klik refresh untuk memperbarui data"},on:{click:function(e){return t.startFetchSinyal()}}},[i("b-icon-clock"),t._v(" Update Harga")],1)])]),i("div",{staticClass:"card-body"},[i("b-row"),i("b-row",[i("b-col",{attrs:{md:"3"}},[i("b-form-group",{attrs:{id:"modal_kiri",label:"Modal Binance:","label-cols-sm":"6","label-align-sm":"right","label-for":"modal_kiri"}},[i("b-form-input",{attrs:{id:"modal_kiri",type:"number",placeholder:"Modal Binance",value:t.modal_kiri,required:""},on:{input:t.updateModalKiri}})],1)],1),i("b-col",{attrs:{md:"3"}},[i("b-form-group",{attrs:{id:"modal_kanan",label:"Modal 1Inch:","label-cols-sm":"6","label-align-sm":"right","label-for":"modal_kanan"}},[i("b-form-input",{attrs:{id:"modal_kanan",type:"number",placeholder:"Modal 1Inch",value:t.modal_kanan,required:""},on:{input:t.updateModalKanan}})],1)],1),i("b-col",{attrs:{md:"3"}},[i("b-form-group",{attrs:{id:"limit_threshold",label:"Filter PNL:","label-cols-sm":"6","label-align-sm":"right","label-for":"limit_threshold"}},[i("b-input-group",[i("b-form-input",{attrs:{id:"limit_threshold",type:"number",placeholder:"Filter PNL",required:""},model:{value:t.limit_threshold,callback:function(e){t.limit_threshold=e},expression:"limit_threshold"}}),i("b-input-group-append",{attrs:{"is-text":"",title:"Sembunyikan yg tidak masuk kriteria"}},[i("b-form-checkbox",{staticClass:"mr-n2",attrs:{switch:"",value:"y","unchecked-value":""},model:{value:t.sinyal.table_filter,callback:function(e){t.$set(t.sinyal,"table_filter",e)},expression:"sinyal.table_filter"}})],1)],1)],1)],1),i("b-col",{staticClass:"text-center font-weight-bold",attrs:{md:"3"}},[i("span",{},[t._v("Last Fetch:"+t._s(t.lastFetchSinyal))])])],1),i("b-table",{attrs:{bordered:"","sticky-header":"900px","head-variant":"dark",responsive:"",hover:"",items:t.listSinyal,fields:t.sinyal.fields,"tbody-tr-class":t.rowClass,"filter-function":t.filterTable,filter:t.sinyal.table_filter},scopedSlots:t._u([{key:"cell(symbol)",fn:function(e){return[i("a",{attrs:{href:t.listSettings.url_coin+e.item.coin_address,target:"_pasar"}},[t._v(t._s(e.value))]),i("span",{class:"ml-2 badge badge-pill badge-pair-"+e.item.pair},[t._v(t._s(e.item.pair))]),i("br"),i("small",{staticStyle:{cursor:"copy"},attrs:{id:"coin_address_"+e.item.symbol},on:{click:function(i){return t.CopyToClipboard("coin_address_"+e.item.symbol)}}},[t._v(t._s(e.item.coin_address))])]}},{key:"cell(binance_ask_price)",fn:function(e){return[i("span",{attrs:{id:"binance_ask_price_"+e.item.symbol},domProps:{innerHTML:t._s(parseFloat(e.value).toFixed(8))}})]}},{key:"cell(binance_bid_price)",fn:function(e){return[i("span",{attrs:{id:"binance_bid_price_"+e.item.symbol},domProps:{innerHTML:t._s(parseFloat(e.value).toFixed(8))}})]}},{key:"cell(inch_usdt)",fn:function(e){return[i("span",{attrs:{id:"inch_usdt"+e.item.symbol},domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(selisih_pnl_kiri)",fn:function(e){return[i("span",{class:{"bg-primary text-white p-2":parseFloat(e.value)>=parseFloat(t.limit_threshold)},domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(selisih_pnl_kiri_persen)",fn:function(e){return[i("span",{domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(inch_price)",fn:function(e){return[i("span",{attrs:{id:"inch_price"+e.item.symbol},domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(selisih_pnl_kanan)",fn:function(e){return[i("span",{class:{"bg-primary text-white p-2":parseFloat(e.value)>=parseFloat(t.limit_threshold)},domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(selisih_pnl_kanan_persen)",fn:function(e){return[i("span",{domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(modal_kiri)",fn:function(e){return[i("input",{staticClass:"form-control",attrs:{type:"number",title:"Ketikkan modal, tekan enter untuk memuat."},domProps:{value:e.value},on:{change:function(i){return t.indvModal(i,e.item.symbol,"kiri")}}})]}},{key:"cell(modal_kanan)",fn:function(e){return[i("input",{staticClass:"form-control",attrs:{type:"number",title:"Ketikkan modal, tekan enter untuk memuat."},domProps:{value:e.value},on:{change:function(i){return t.indvModal(i,e.item.symbol,"kanan")}}})]}},{key:"cell(num)",fn:function(e){return[i("span",{domProps:{innerHTML:t._s(e.index+1)}})]}}])},[i("template",{staticStyle:{position:"sticky"},slot:"thead-top"},[i("b-tr",[i("b-th",[t._v("Modal")]),i("b-th",{attrs:{colspan:"2"}},[t._v("PRICE")]),i("b-th",{attrs:{colspan:"2",variant:"primary"}},[t._v("SELISIH")]),i("b-th",[t._v("SYMBOL")]),i("b-th",[t._v("Modal")]),i("b-th",{attrs:{colspan:"2"}},[t._v("PRICE")]),i("b-th",{attrs:{colspan:"2",variant:"primary"}},[t._v("SELISIH")]),i("b-th")],1)],1)],2)],1)])])])])},a=[],s=i("ade3"),r=i("5530"),l=(i("159b"),i("843c"),i("b680"),i("a9e3"),i("7db0"),i("d3b7"),i("25f0"),i("0bce")),o=i("2f62"),c=i("bc3a"),d=i.n(c),u=i("3d20"),h=i.n(u),p={data:function(){return{sinyal:{fetching:!1,totalRows:1,currentPage:1,perPage:200,filter:null,filterOn:["symbol"],table_filter:"",fields:[{key:"modal_kiri",label:"Binance",sortable:!1,tdClass:"text-center font-weight-bold",thStyle:{width:"10%"}},{key:"binance_ask_price",label:"Binance(Ask)",sortable:!1,tdClass:"text-center font-weight-bold bg-price-binance"},{key:"inch_usdt",label:"1Inch",sortable:!1,tdClass:"text-center font-weight-bold bg-price-1inch"},{key:"selisih_pnl_kiri",label:"PNL",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"selisih_pnl_kiri_persen",label:"%",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"symbol",label:"Coin",sortable:!0,tdClass:"text-center font-weight-bold bg-grey-100 text-dinamis",thStyle:{width:"40%"}},{key:"modal_kanan",label:"1Inch",sortable:!1,tdClass:"text-center font-weight-bold",thStyle:{width:"10%"}},{key:"binance_bid_price",label:"Binance(Bid)",sortable:!1,tdClass:"text-center font-weight-bold bg-price-binance"},{key:"inch_price",label:"1Inch",sortable:!1,tdClass:"text-center font-weight-bold bg-price-1inch"},{key:"selisih_pnl_kanan",label:"PNL",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"selisih_pnl_kanan_persen",label:"%",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"num",label:"#",sortable:!1,tdClass:"text-center font-weight-bold bg-ireng text-white"}],items:[]},modal_kiri:0,modal_kanan:0,running_request:0,threshold:0,limit_threshold:3}},components:{},watch:{limit_threshold:function(){this.recalculateThreshold()}},computed:Object(r["a"])({},Object(o["b"])(["listSinyal","lastFetchSinyal","listSettings"])),mounted:function(){this.modal_kiri=null==this.listSettings?0:this.listSettings.modal_kiri,this.modal_kanan=null==this.listSettings?0:this.listSettings.modal_kanan,this.$store.dispatch(l["a"],[{title:"Market Watch"}]),this.recalculateThreshold()},methods:{recalculateThreshold:function(){var t=this;this.threshold=0,this.listSinyal.forEach((function(e){(parseFloat(e.selisih_pnl_kanan)>=t.limit_threshold||parseFloat(e.selisih_pnl_kiri)>=t.limit_threshold)&&t.threshold++}))},filterTable:function(t,e){if(""!=e)return parseFloat(t.selisih_pnl_kanan)>=this.limit_threshold||parseFloat(t.selisih_pnl_kiri)>=this.limit_threshold},indvModal:function(t,e,i){this.fetchSinyal(e,Object(s["a"])({},"modal_"+i,t.target.value))},updateModalKiri:function(t){this.$store.dispatch("settingSet",{name:"modal_kiri",value:t})},updateModalKanan:function(t){this.$store.dispatch("settingSet",{name:"modal_kanan",value:t})},rowClass:function(t,e){if(t&&"row"===e)return parseFloat(t.selisih_pnl_kanan)>=this.limit_threshold||parseFloat(t.selisih_pnl_kiri)>=this.limit_threshold?"bg-green":void 0},refreshSinyal:function(){this.$store.dispatch("registerSinyal")},test2:function(){var t=400,e=BigInt("358516543755854128279"),i=BigInt("1".padEnd(19,"0")),n=(Number(100n*e/i)/100-t).toFixed(2);console.log(i),console.log(n)},test3:function(){var t="1INCH",e=this.$store.state.coin.coins.find((function(e){return e.nama_coin==t})),i=400,n=5.2024,a=i/n*Math.pow(10,parseInt(e.desimal));console.log(a.toString())},test4:function(){var t=this.modal_kanan*Math.pow(10,18);console.log(t)},registerAndStartFetchSinyal:function(){var t=this;if(null==this.$store.state.coin.coins)return h.a.fire({title:"Belum ada koin yg didaftarkan!",text:"Silahkan impor settingan dahulu",icon:"error",heightAuto:!1}),!1;this.threshold=0,this.$store.dispatch("clearSinyal").then((function(){t.running_request++,t.$store.dispatch("updateBookTicker").then((function(e){console.log("respon",e),"ok"!=e.status?h.a.fire({title:"Gagal memuat book ticker!",text:e.message,icon:"error",heightAuto:!1}):(t.running_request-=1,t.$store.dispatch("registerSinyal").then((function(){t.listSinyal.forEach((function(e){t.fetchSinyal(e.symbol)}))})),t.$bvToast.toast("Book Ticker berhasil binance di update",{title:"Binance Book Ticker",variant:"success",solid:!0}))}))}))},startFetchSinyal:function(){var t=this;this.threshold=0,this.$store.dispatch("clearSinyal").then((function(){t.running_request++,t.$store.dispatch("updateBookTicker").then((function(e){"ok"!=e.status?h.a.fire({title:"Gagal memuat book ticker!",text:e.message,icon:"error",heightAuto:!1}):(t.running_request-=1,t.listSinyal.forEach((function(e){t.fetchSinyal(e.symbol)})),t.$bvToast.toast("Book Ticker berhasil binance di update",{title:"Binance Book Ticker",variant:"success",solid:!0}))}))}))},fetchSinyal:function(t,e){var i=this;this.running_request+=2;var n=this.listSinyal.find((function(e){return e.symbol==t})),a=this.$store.state.coin.coins.find((function(e){return e.nama_coin==t}));void 0==e&&(e={});var s=this.$store.getters.getBookCoinPriceAsk(t),l=this.$store.getters.getBookCoinPriceBid(t);this.$store.dispatch("updateSinyal",{symbol:t,value:Object(r["a"])(Object(r["a"])({},e),{},{binance_ask_price:s.price,binance_bid_price:l.price,selisih_pnl_kiri:"<div class='spinner-border spinner-border-sm'></div>",inch_usdt:"<div class='spinner-border spinner-border-sm'></div>",selisih_pnl_kiri_persen:"<div class='spinner-border spinner-border-sm'></div>",inch_sum:"<div class='spinner-border spinner-border-sm'></div>",inch_price:"<div class='spinner-border spinner-border-sm'></div>",selisih_pnl_kanan:"<div class='spinner-border spinner-border-sm'></div>",selisih_pnl_kanan_persen:"<div class='spinner-border spinner-border-sm'></div>"})}).then((function(){if(0==n.binance_ask_price)return i.$store.dispatch("updateSinyal",{symbol:t,value:Object(r["a"])(Object(r["a"])({},e),{},{selisih_pnl_kiri:0,inch_usdt:0,selisih_pnl_kiri_persen:0,inch_sum:0,inch_price:0,selisih_pnl_kanan:0,selisih_pnl_kanan_persen:0})}),i.running_request-=2,!0;var o=void 0!=e.modal_kiri?e.modal_kiri:n.modal_kiri,c=void 0!=e.modal_kanan?e.modal_kanan:n.modal_kanan,u=(o/s.price*Math.pow(10,parseInt(a.desimal))).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:0});d.a.get("https://api.1inch.exchange/v3.0/56/quote",{params:{fromTokenAddress:a.coin_address,toTokenAddress:i.$store.state.setting.settings.busd_address,amount:u}}).then((function(e){i.running_request-=1;var n=e.data,r=BigInt(n.toTokenAmount),u=BigInt("1".padEnd(19,"0")),h=Number(100n*r/u)/100-o,p=(parseInt(o)+h)/(parseInt(o)/s.price),m=(p-s.price)/s.price*100;i.$store.dispatch("updateSinyal",{symbol:t,value:{selisih_pnl_kiri:h.toFixed(2),inch_usdt:p.toFixed(7),selisih_pnl_kiri_persen:m.toFixed(2)}});var _=BigInt(c*Math.pow(10,18)).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:0});d.a.get("https://api.1inch.exchange/v3.0/56/quote",{params:{fromTokenAddress:i.$store.state.setting.settings.busd_address,toTokenAddress:a.coin_address,amount:_}}).then((function(e){i.running_request-=1;var n=e.data,s=BigInt(n.toTokenAmount),r=BigInt("1".padEnd(parseInt(a.desimal)+1,"0")),o=Number(100n*s/r)/100,d=0==o?0:c/o,u=o*l.price-c,p=0==o?0:(l.price-d)/d*100;(u>=i.limit_threshold||h>=i.limit_threshold)&&i.threshold++,i.$store.dispatch("updateSinyal",{symbol:t,value:{inch_sum:o.toFixed(2),inch_price:d.toFixed(7),selisih_pnl_kanan:u.toFixed(2),selisih_pnl_kanan_persen:p.toFixed(2)}})})).catch((function(e){i.running_request-=1,i.$bvToast.toast("Error saat menghubungi 1INCH untuk koin "+t,{title:"API Error",variant:"danger",solid:!1}),i.$store.dispatch("updateSinyal",{symbol:t,value:{inch_sum:0,inch_price:0,selisih_pnl_kanan:0,selisih_pnl_kanan_persen:0}}),console.log("Fetching 1inch error",e)}))})).catch((function(e){i.running_request-=2,i.$bvToast.toast("Error saat menghubungi 1INCH untuk koin "+t,{title:"API Error",variant:"danger",solid:!1}),i.$store.dispatch("updateSinyal",{symbol:t,value:{selisih_pnl_kiri:"error",inch_usdt:"error",selisih_pnl_kiri_persen:"error",inch_sum:"error",inch_price:"error",selisih_pnl_kanan:"error",selisih_pnl_kanan_persen:"error"}}),console.log("Fetching 1inch error",e)}))}))},CopyToClipboard:function(t){console.log(t);var e=document.createRange();e.selectNode(document.getElementById(t)),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.$bvToast.toast("data dicopy",{title:"Clipboard",variant:"info",solid:!1})}}},m=p,_=i("2877"),b=i("6544"),f=i.n(b),k=i("7496"),g=Object(_["a"])(m,n,a,!1,null,null,null);e["default"]=g.exports;f()(g,{VApp:k["a"]})},df86:function(t,e,i){}}]);
//# sourceMappingURL=chunk-ae3b550a.0d26e7ac.js.map