(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"NC/S":function(t,e,a){"use strict";a.r(e);var i=a("L2JU"),s=a("Ll3F"),n=a("xuR2"),r=a("TVBs"),l=a("s20v"),u=a("8MVx"),c=a("Ocez");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={components:{DataViewer:l.a,appModal:u.a,checkValue:c.a},props:["title","kelas"],data:function(){return{selectedItem:[],query:{order_column:"name",order_direction:"asc",filter_match:"and",limit:10,page:1},excelDownloadUrl:"",columnData:[{title:"No.",name:"No."},{title:"Foto",name:"gambar",hide:!1},{title:"Nama",name:"name",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0,filterDefault:!0},{title:"Deskripsi",name:"deskripsi",tipe:"string",sort:!0,hide:!1,disable:!1},{title:"CU",name:"cu.name",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Artikel",name:"has_artikel_count",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Tgl. Buat",name:"created_at",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Tgl. Ubah",name:"updated_at",sort:!0,hide:!1,disable:!1,filter:!0}],state:"",modalShow:!1,modalState:"",modalTitle:"",modalButton:""}},created:function(){this.fetch(this.query)},watch:{$route:function(t,e){this.fetch(this.query)},updateStat:function(t){this.modalState=t,this.modalButton="Ok","success"===t?(this.modalTitle=this.updateMessage.message,this.modalContent="",this.fetch()):this.modalContent="fail"===t?this.updateMessage:""}},methods:{fetch:function(t){"semua"==this.$route.params.cu?(this.disableColumnCu(!1),this.$store.dispatch(this.kelas+"/index",t),this.excelDownloadUrl=this.kelas):(this.disableColumnCu(!0),this.$store.dispatch(this.kelas+"/indexCu",[t,this.$route.params.cu]),this.excelDownloadUrl=this.kelas+"/indexCu/"+this.$route.params.cu)},disableColumnCu:function(t){this.columnData[4].disable=t},resetParams:function(){this.params.search_column="name",this.params.search_query_1="",this.extSearchColumn="name",this.extSearchQuery1=""},selectedRow:function(t){this.selectedItem=t},ubahData:function(t,e){this.$router.push({name:this.kelas+"Edit",params:{id:t}})},lihatArtikel:function(t,e){this.$store.dispatch(this.kelas+"/resetDataStat"),this.$router.push({name:"artikelFilterPenulisCu",params:{cu:e,penulis:t}})},modalConfirmOpen:function(t,e,a){this.modalShow=!0,this.modalState="confirm-tutup",this.state=t,e&&(this.selectedItem=a),"hapus"==t&&(this.modalTitle="Hapus "+this.title+" "+this.selectedItem.name+" ?",this.modalButton="Iya, Hapus")},modalTutup:function(){this.modalShow=!1,this.$store.dispatch(this.kelas+"/resetUpdateStat")},modalConfirmOk:function(){"hapus"==this.state&&this.$store.dispatch(this.kelas+"/destroy",this.selectedItem.id)}},computed:d(d(d(d({},Object(i.b)("auth",{currentUser:"currentUser"})),Object(i.b)("global",{idCu:"idCu"})),Object(i.b)("cu",{modelCu:"dataS",modelCuStat:"dataStatS"})),Object(i.b)("artikelPenulis",{itemData:"dataS",itemDataStat:"dataStatS",updateMessage:"update",updateStat:"updateStat"}))},h=a("KHd+"),b=Object(h.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("data-viewer",{attrs:{title:t.title,columnData:t.columnData,itemData:t.itemData,query:t.query,itemDataStat:t.itemDataStat,excelDownloadUrl:t.excelDownloadUrl,isUploadExcel:!1},on:{fetch:t.fetch},scopedSlots:t._u([{key:"item-desktop",fn:function(e){return[a("tr",{staticClass:"text-nowrap",class:{"bg-info":t.selectedItem.id===e.item.id},on:{click:function(a){return t.selectedRow(e.item)}}},[t.columnData[0].hide?t._e():a("td",[t._v("\n\t\t\t\t\t"+t._s(e.index+1+(+t.itemData.current_page-1)*+t.itemData.per_page+".")+"\n\t\t\t\t")]),t._v(" "),t.columnData[1].hide?t._e():a("td",[e.item.gambar?a("img",{staticClass:"img-rounded img-fluid wmin-sm",attrs:{src:"/images/penulis/"+e.item.gambar+"n.jpg",width:"40"}}):a("img",{staticClass:"img-rounded img-fluid wmin-sm",attrs:{src:"/images/no_image.jpg",width:"40"}})]),t._v(" "),t.columnData[2].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.name}})],1),t._v(" "),t.columnData[3].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.deskripsi}})],1),t._v(" "),t.columnData[4].hide||t.columnData[4].disable?t._e():a("td",[e.item.cu?a("check-value",{attrs:{value:e.item.cu.name,empty:t.columnData[4].groupNoKey}}):a("span",[t._v(t._s(t.columnData[4].groupNoKey))])],1),t._v(" "),t.columnData[5].hide?t._e():a("td",[t._v(t._s(e.item.has_artikel_count))]),t._v(" "),t.columnData[6].hide?t._e():a("td",{domProps:{innerHTML:t._s(t.$options.filters.dateTime(e.item.created_at))}}),t._v(" "),t.columnData[7].hide?t._e():a("td",[e.item.created_at!==e.item.updated_at?a("span",{domProps:{innerHTML:t._s(t.$options.filters.dateTime(e.item.updated_at))}}):a("span",[t._v("-")])])])]}}])},[a("template",{slot:"button-desktop"},[t.currentUser.can&&t.currentUser.can.create_artikel_penulis?a("router-link",{staticClass:"btn btn-light mb-1",attrs:{to:{name:t.kelas+"Create"}}},[a("i",{staticClass:"icon-plus3"}),t._v(" Tambah\n\t\t\t")]):t._e(),t._v(" "),t.currentUser.can&&t.currentUser.can.update_artikel_penulis?a("button",{staticClass:"btn btn-light mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubahData(t.selectedItem.id)}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah\n\t\t\t")]):t._e(),t._v(" "),t.currentUser.can&&t.currentUser.can.destroy_artikel_penulis?a("button",{staticClass:"btn btn-light mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus\n\t\t\t")]):t._e()],1),t._v(" "),a("template",{slot:"button-mobile"},[t.currentUser.can&&t.currentUser.can.create_artikel_penulis?a("router-link",{staticClass:"btn btn-light btn-block mb-1",attrs:{to:{name:t.kelas+"Create"}}},[a("i",{staticClass:"icon-plus3"}),t._v(" Tambah\n\t\t\t")]):t._e(),t._v(" "),t.currentUser.can&&t.currentUser.can.update_artikel_penulis?a("button",{staticClass:"btn btn-light btn-block mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubahData(t.selectedItem.id)}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah\n\t\t\t")]):t._e(),t._v(" "),t.currentUser.can&&t.currentUser.can.destroy_artikel_penulis?a("button",{staticClass:"btn btn-light btn-block mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus\n\t\t\t")]):t._e()],1)],2),t._v(" "),a("app-modal",{attrs:{show:t.modalShow,state:t.modalState,title:t.modalTitle,button:t.modalButton},on:{tutup:t.modalTutup,confirmOk:t.modalConfirmOk,successOk:t.modalTutup,failOk:t.modalTutup,backgroundClick:t.modalTutup}})],1)}),[],!1,null,null,null).exports;function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var C={components:{pageHeader:s.a,message:n.a,selectCu:r.a,tableData:b},data:function(){return{title:"Penulis Artikel",kelas:"artikelPenulis",titleDesc:"Mengelola data penulis artikel",titleIcon:"icon-pencil6",selectCuPath:"artikelPenulisCu"}},created:function(){this.checkUser("index_artikel_penulis",this.$route.params.cu)},methods:{checkUser:function(t,e){this.currentUser&&(this.currentUser.can&&this.currentUser.can[t]||this.$router.push("/notFound"),e&&!this.currentUser.id_cu||0!=this.currentUser.id_cu&&this.currentUser.id_cu!=e&&this.$router.push("/notFound"))}},computed:f(f({},Object(i.b)("auth",{currentUser:"currentUser"})),Object(i.b)("artikelPenulis",{itemData:"dataS",itemDataStat:"dataStatS"}))},g=Object(h.a)(C,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header",{attrs:{title:t.title,titleDesc:t.titleDesc,titleIcon:t.titleIcon}}),t._v(" "),a("div",{staticClass:"page-content pt-0"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content"},["fail"===t.itemDataStat?a("message",{attrs:{title:"Oops terjadi kesalahan:",errorData:t.itemData}}):t._e(),t._v(" "),0==t.currentUser.id_cu?a("select-cu",{attrs:{kelas:t.kelas,path:t.selectCuPath,isPus:!0}}):t._e(),t._v(" "),a("table-data",{attrs:{title:t.title,kelas:t.kelas}})],1)])])],1)}),[],!1,null,null,null);e.default=g.exports},TVBs:function(t,e,a){"use strict";var i=a("L2JU");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={props:["kelas","isPus","path"],data:function(){return{idCu:""}},created:function(){void 0!==this.currentUser.id_pus&&this.fetchCU()},watch:{$route:function(t,e){this.fetchCU()},modelCuStat:function(t){"success"===t&&(this.idCu=this.$route.params.cu)}},methods:{fetchCU:function(){0==this.modelCu.length?this.$store.dispatch("cu/getHeader",this.currentUser.id_pus):this.idCu=this.$route.params.cu},changeCU:function(t){this.$router.push({name:this.path,params:{cu:t}})}},computed:n(n({},Object(i.b)("auth",{currentUser:"currentUser"})),Object(i.b)("cu",{modelCu:"headerDataS",modelCuStat:"headerDataStatS",updateMessage:"update",updateStat:"updateStat"}))},u=a("KHd+"),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card d-none d-md-block d-print-none"},[a("div",{staticClass:"card-body"},[0===this.currentUser.id_cu?a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.idCu,expression:"idCu"}],staticClass:"form-control",attrs:{name:"idCu","data-width":"100%",disabled:"loading"===t.modelCuStat},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.idCu=e.target.multiple?a:a[0]},function(e){return t.changeCU(e.target.value)}]}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Silahkan pilih data")]),t._v(" "),t._t("default"),t._v(" "),a("option",{attrs:{value:"semua"}},[t._v("Semua CU")]),t._v(" "),t.isPus?a("option",{attrs:{value:"0"}},[t.currentUser.pus?a("span",[t._v(t._s(t.currentUser.pus.name))]):a("span",[t._v("Puskopdit")])]):t._e(),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),t._l(t.modelCu,(function(e){return e?a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-light",attrs:{disabled:"loading"===t.modelCuStat},on:{click:t.fetchCU}},[a("i",{staticClass:"icon-sync",class:{spinner:"loading"===t.modelCuStat}})])])]):t._e()])]),t._v(" "),a("div",{staticClass:"card d-block d-md-none d-print-none"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.idCu,expression:"idCu"}],staticClass:"form-control",attrs:{name:"idCu","data-width":"100%",disabled:"loading"===t.modelCuStat},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.idCu=e.target.multiple?a:a[0]},function(e){return t.changeCU(e.target.value)}]}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Silahkan pilih data")]),t._v(" "),a("option",{attrs:{value:"semua"}},[t._v("Semua CU")]),t._v(" "),t.isPus?a("option",{attrs:{value:"0"}},[t.currentUser.pus?a("span",[t._v(t._s(t.currentUser.pus.name))]):a("span",[t._v("Puskopdit")])]):t._e(),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),t._l(t.modelCu,(function(e){return e?a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2)]),t._v(" "),a("div",{staticClass:"pt-2"},[a("button",{staticClass:"btn btn-light btn-lg btn-block",attrs:{disabled:"loading"===t.modelCuStat},on:{click:t.fetchCU}},[a("i",{staticClass:"icon-sync",class:{spinner:"loading"===t.modelCuStat}}),t._v(" Reload\n\t\t\t\t")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Pilih Data")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Pilih Data")])])}],!1,null,null,null);e.a=c.exports}}]);