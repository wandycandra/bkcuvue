(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{m3xn:function(t,e,a){"use strict";a.r(e);var i=a("L2JU"),n=a("Ll3F"),s=a("s20v"),r=a("8MVx"),l=a("yunw"),o=a("Ocez");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={components:{DataViewer:s.a,appModal:r.a,collapseButton:l.a,checkValue:o.a},props:["title","kelas","status","itemData","itemDataStat"],data:function(){return{selectedItem:[],query:{order_column:"name",order_direction:"asc",filter_match:"and",limit:10,page:1},excelDownloadUrl:"",columnData:[{title:"No."},{title:"Foto",name:"gambar",hide:!1},{title:"Nama",name:"name",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0,filterDefault:!0},{title:"NIM Sistem",name:"nim",tipe:"string",sort:!0,hide:!1,disable:!0,filter:!0},{title:"NIM Lembaga",name:"nim_cu",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"No. KTP",name:"nik",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"NPWP",name:"npwp",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"CU",name:"pekerjaan_aktif.cu.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Tingkat",name:"pekerjaan_aktif.tingkat",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Jabatan",name:"pekerjaan_aktif.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"CU",name:"pekerjaan_tidak_aktif.cu.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Keterangan Tidak Aktif",name:"pekerjaan_tidak_aktif.keterangan_tidak_aktif",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Tingkat Terakhir",name:"pekerjaan_tidak_aktif.tingkat",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Jabatan Terakhir",name:"pekerjaan_tidak_aktif.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Pendidikan",name:"pendidikan_tertinggi.tingkat",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Jurusan",name:"pendidikan_tertinggi.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!1},{title:"Email",name:"email",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Hp",name:"hp",tipe:"numeric",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Kontak Lain",name:"kontak",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!0},{title:"Gender",name:"kelamin",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Gol. Darah",name:"darah",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Tinggi",name:"tinggi",tipe:"numeric",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Agama",name:"agama",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Status Pernikahan",name:"status",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Tgl. Lahir",name:"tanggal_lahir",tipe:"datetime",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Tempat Lahir",name:"tempat_lahir",tipe:"string",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Provinsi",name:"provinces.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!0},{title:"Kabupaten",name:"regencies.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!0},{title:"Kecamatan",name:"districts.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!0},{title:"Kelurahan",name:"villages.name",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!0},{title:"Alamat",name:"alamat",tipe:"string",sort:!1,hide:!1,disable:!1,filter:!0},{title:"Tgl. / Waktu Buat",name:"created_at",tipe:"datetime",sort:!0,hide:!1,disable:!1,filter:!0},{title:"Tgl. / Waktu Ubah",name:"updated_at",tipe:"datetime",sort:!0,hide:!1,disable:!1,filter:!0}],state:"",modalShow:!1,modalState:"",modalTitle:"",modalContent:"",modalButton:""}},created:function(){this.fetch(this.query)},watch:{$route:function(t,e){this.fetch(this.query)},updateStat:function(t){this.modalState=t,this.modalButton="Ok","success"===t?(this.modalTitle=this.updateMessage.message,this.modalContent="",this.fetch()):this.modalContent="fail"===t?this.updateMessage:""}},methods:{fetch:function(t){this.disableColumnStatus(),"semua"==this.$route.params.cu?(this.disableColumnCu(!1),this.$store.dispatch(this.kelas+"/index",[t,this.$route.params.tingkat,this.status]),this.excelDownloadUrl=this.kelas+"/index/"+this.$route.params.tingkat+"/"+this.status):(this.disableColumnCu(!0),"semua"!=this.$route.params.tingkat&&"manajemen"!=this.$route.params.tingkat?this.disableColumnTingkat(!0):this.disableColumnTingkat(!1),this.$store.dispatch(this.kelas+"/indexCu",[t,this.$route.params.cu,this.$route.params.tingkat,this.status]),this.excelDownloadUrl=this.kelas+"/indexCu/"+this.$route.params.cu+"/"+this.$route.params.tingkat+"/"+this.status)},disableColumnCu:function(t){"aktif"==this.status?this.columnData[7].disable=t:this.columnData[10].disable=t},disableColumnTingkat:function(t){"aktif"==this.status?this.columnData[8].disable=t:this.columnData[11].disable=t},disableColumnStatus:function(){"aktif"==this.status?(this.columnData[7].disable=!1,this.columnData[8].disable=!1,this.columnData[9].disable=!1,this.columnData[10].disable=!0,this.columnData[11].disable=!0,this.columnData[12].disable=!0,this.columnData[13].disable=!0):(this.columnData[7].disable=!0,this.columnData[8].disable=!0,this.columnData[9].disable=!0,this.columnData[10].disable=!1,this.columnData[11].disable=!1,this.columnData[12].disable=!1,this.columnData[13].disable=!1)},selectedRow:function(t){this.selectedItem=t},ubah:function(t,e){"identitas"==e?this.$router.push({name:this.kelas+"Edit",params:{id:t}}):"riwayat"==e&&this.$router.push({name:this.kelas+"RiwayatEdit",params:{id:t}})},modalConfirmOpen:function(t,e,a){this.modalShow=!0,this.modalState="confirm-tutup",this.state=t,e&&(this.selectedItem=a),"hapus"==t&&(this.modalTitle="Hapus "+this.title+" "+this.selectedItem.name+" ini?",this.modalButton="Iya, Hapus")},modalTutup:function(){this.modalShow=!1,this.$store.dispatch(this.kelas+"/resetUpdateStat")},modalConfirmOk:function(){"hapus"==this.state&&this.$store.dispatch(this.kelas+"/destroy",this.selectedItem.id)}},computed:u(u(u(u({},Object(i.b)("auth",{currentUser:"currentUser"})),Object(i.b)("global",{idCu:"idCu"})),Object(i.b)("cu",{modelCu:"dataS",modelCuStat:"dataStatS"})),Object(i.b)("aktivis",{updateMessage:"update",updateStat:"updateStat"}))},p=a("KHd+"),v=Object(p.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("data-viewer",{attrs:{title:t.title,columnData:t.columnData,itemData:t.itemData,query:t.query,itemDataStat:t.itemDataStat,excelDownloadUrl:t.excelDownloadUrl},on:{fetch:t.fetch},scopedSlots:t._u([{key:"item-desktop",fn:function(e){return[a("tr",{staticClass:"text-nowrap",class:{"bg-info":t.selectedItem.id===e.item.id},on:{click:function(a){return t.selectedRow(e.item)}}},[t.columnData[0].hide?t._e():a("td",[t._v("\n\t\t\t\t\t"+t._s(e.index+1+(+t.itemData.current_page-1)*+t.itemData.per_page+".")+"\n\t\t\t\t")]),t._v(" "),t.columnData[1].hide?t._e():a("td",[e.item.gambar?a("img",{staticClass:"img-rounded img-fluid wmin-sm",attrs:{src:"/images/"+t.kelas+"/"+e.item.gambar+"n.jpg"}}):a("img",{staticClass:"img-rounded img-fluid wmin-sm",attrs:{src:"/images/no_image_man.jpg"}})]),t._v(" "),t.columnData[2].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.name}})],1),t._v(" "),t.columnData[3].hide||t.columnData[3].disable?t._e():a("td",[a("check-value",{attrs:{value:e.item.nim}})],1),t._v(" "),t.columnData[4].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.nim_cu}})],1),t._v(" "),t.columnData[5].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.nik}})],1),t._v(" "),t.columnData[6].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.npwp}})],1),t._v(" "),t.columnData[7].hide||t.columnData[7].disable?t._e():a("td",[e.item.pekerjaan_aktif&&1==e.item.pekerjaan_aktif.tipe?a("span",[e.item.pekerjaan_aktif.cu?a("check-value",{attrs:{value:e.item.pekerjaan_aktif.cu.name}}):a("span",[t._v("-")])],1):e.item.pekerjaan_aktif&&2==e.item.pekerjaan_aktif.tipe?a("span",[e.item.pekerjaan_aktif.lembaga_lain?a("check-value",{attrs:{value:e.item.pekerjaan_aktif.lembaga_lain.name}}):a("span",[t._v("-")])],1):e.item.pekerjaan_aktif&&3==e.item.pekerjaan_aktif.tipe?a("span",[t._v("\n\t\t\t\t\t\tPuskopdit BKCU Kalimantan\n\t\t\t\t\t")]):a("span",[t._v("-")])]),t._v(" "),t.columnData[8].hide||t.columnData[8].disable||!e.item.pekerjaan_aktif.tingkat?t._e():a("td",{domProps:{innerHTML:t._s(t.$options.filters.checkTingkatAktivis(e.item.pekerjaan_aktif.tingkat))}}),t._v(" "),t.columnData[9].hide||t.columnData[9].disable?t._e():a("td",[e.item.pekerjaan_aktif?a("check-value",{attrs:{value:e.item.pekerjaan_aktif.name}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[10].hide||t.columnData[10].disable?t._e():a("td",[e.item.pekerjaan_tidak_aktif&&1==e.item.pekerjaan_tidak_aktif.tipe?a("span",[e.item.pekerjaan_tidak_aktif.cu?a("check-value",{attrs:{value:e.item.pekerjaan_tidak_aktif.cu.name}}):a("span",[t._v("-")])],1):e.item.pekerjaan_tidak_aktif&&2==e.item.pekerjaan_tidak_aktif.tipe?a("span",[e.item.pekerjaan_tidak_aktif.lembaga_lain?a("check-value",{attrs:{value:e.item.pekerjaan_tidak_aktif.lembaga_lain.name}}):a("span",[t._v("-")])],1):e.item.pekerjaan_tidak_aktif&&3==e.item.pekerjaan_tidak_aktif.tipe?a("span",[t._v("\n\t\t\t\t\t\tPuskopdit BKCU Kalimantan\n\t\t\t\t\t")]):a("span",[t._v("-")])]),t._v(" "),t.columnData[11].hide||t.columnData[11].disable?t._e():a("td",[e.item.pekerjaan_tidak_aktif?a("check-value",{attrs:{value:e.item.pekerjaan_tidak_aktif.keterangan_tidak_aktif}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[12].hide||t.columnData[12].disable?t._e():a("td",{domProps:{innerHTML:t._s(t.$options.filters.checkTingkatAktivis(e.item.pekerjaan_tidak_aktif.tingkat))}}),t._v(" "),t.columnData[13].hide||t.columnData[13].disable?t._e():a("td",[e.item.pekerjaan_tidak_aktif?a("check-value",{attrs:{value:e.item.pekerjaan_tidak_aktif.name}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[14].hide?t._e():a("td",[e.item.pendidikan_tertinggi?a("check-value",{attrs:{value:e.item.pendidikan_tertinggi.tingkat}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[15].hide?t._e():a("td",[e.item.pendidikan_tertinggi?a("check-value",{attrs:{value:e.item.pendidikan_tertinggi.name}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[16].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.email}})],1),t._v(" "),t.columnData[17].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.hp}})],1),t._v(" "),t.columnData[18].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.kontak}})],1),t._v(" "),t.columnData[19].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.kelamin}})],1),t._v(" "),t.columnData[20].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.darah}})],1),t._v(" "),t.columnData[21].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.tinggi}})],1),t._v(" "),t.columnData[22].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.agama}})],1),t._v(" "),t.columnData[23].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.status}})],1),t._v(" "),t.columnData[24].hide?t._e():a("td",{domProps:{innerHTML:t._s(t.$options.filters.date(e.item.tanggal_lahir))}}),t._v(" "),t.columnData[25].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.tempat_lahir}})],1),t._v(" "),t.columnData[26].hide||t.columnData[26].disable?t._e():a("td",[e.item.provinces?a("check-value",{attrs:{value:e.item.provinces.name}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[27].hide||t.columnData[27].disable?t._e():a("td",[e.item.regencies?a("check-value",{attrs:{value:e.item.regencies.name}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[28].hide||t.columnData[28].disable?t._e():a("td",[e.item.districts?a("check-value",{attrs:{value:e.item.districts.name}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[29].hide||t.columnData[29].disable?t._e():a("td",[e.item.villages?a("check-value",{attrs:{value:e.item.villages.name}}):a("span",[t._v("-")])],1),t._v(" "),t.columnData[30].hide?t._e():a("td",[a("check-value",{attrs:{value:e.item.alamat}})],1),t._v(" "),t.columnData[31].hide?t._e():a("td",{staticClass:"text-nowrap",domProps:{innerHTML:t._s(t.$options.filters.dateTime(e.item.created_at))}}),t._v(" "),t.columnData[32].hide?t._e():a("td",[e.item.created_at!==e.item.updated_at?a("span",{domProps:{innerHTML:t._s(t.$options.filters.dateTime(e.item.updated_at))}}):a("span",[t._v("-")])])])]}}])},[a("template",{slot:"button-desktop"},[t.currentUser.can&&t.currentUser.can["create_"+t.kelas]?a("router-link",{staticClass:"btn btn-light btn-icon mb-1",attrs:{to:{name:t.kelas+"Create"}}},[a("i",{staticClass:"icon-plus3"}),t._v(" Tambah\n\t\t\t")]):t._e(),t._v(" "),t.currentUser.can&&t.currentUser.can["update_"+t.kelas]?a("button",{staticClass:"btn btn-light btn-icon mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubah(t.selectedItem.id,"identitas")}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah Identitas\n\t\t\t")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-light btn-icon mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubah(t.selectedItem.id,"riwayat")}}},[t.currentUser.can&&t.currentUser.can["update_"+t.kelas]?a("span",[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah Riwayat\n\t\t\t\t")]):a("span",[a("i",{staticClass:"icon-profile"}),t._v(" Riwayat\n\t\t\t\t")])]),t._v(" "),t.currentUser.can&&t.currentUser.can["destroy_"+t.kelas]?a("button",{staticClass:"btn btn-light btn-icon mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus\n\t\t\t")]):t._e()],1),t._v(" "),a("template",{slot:"button-mobile"},[t.currentUser.can&&t.currentUser.can["create_"+t.kelas]?a("router-link",{staticClass:"btn btn-light btn-icon btn-block mb-1",attrs:{to:{name:t.kelas+"Create"}}},[a("i",{staticClass:"icon-plus3"}),t._v(" Tambah\n\t\t\t")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-light btn-icon btn-block mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubah(t.selectedItem.id,"identitas")}}},[t.currentUser.can&&t.currentUser.can["update_"+t.kelas]?a("span",[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah Riwayat\n\t\t\t\t")]):a("span",[a("i",{staticClass:"icon-profile"}),t._v(" Riwayat\n\t\t\t\t")])]),t._v(" "),t.currentUser.can&&t.currentUser.can["update_"+t.kelas]?a("button",{staticClass:"btn btn-light btn-icon btn-block mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubah(t.selectedItem.id,"riwayat")}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah Riwayat\n\t\t\t")]):t._e(),t._v(" "),t.currentUser.can&&t.currentUser.can["destroy_"+t.kelas]?a("button",{staticClass:"btn btn-light btn-icon btn-block mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus\n\t\t\t")]):t._e()],1)],2),t._v(" "),a("app-modal",{attrs:{show:t.modalShow,state:t.modalState,title:t.modalTitle,button:t.modalButton,content:t.modalContent},on:{tutup:t.modalTutup,confirmOk:t.modalConfirmOk,successOk:t.modalTutup,failOk:t.modalTutup,backgroundClick:t.modalTutup}})],1)}),[],!1,null,null,null).exports,h=a("xuR2");function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f={props:["kelas","isPus","path","itemDataStat"],data:function(){return{idCu:"",tingkat:""}},created:function(){void 0!==this.currentUser.id_pus&&this.fetchCU()},watch:{$route:function(t,e){this.fetchCU()},modelCUStat:function(t){"success"===t&&(this.idCu=this.$route.params.cu,this.tingkat=this.$route.params.tingkat)}},methods:{fetch:function(){this.$router.push({name:this.path,params:{cu:this.idCu,tingkat:this.tingkat}})},fetchCU:function(){"success"!=this.modelCuStat?this.$store.dispatch("cu/getHeader"):(this.idCu=this.$route.params.cu,this.tingkat=this.$route.params.tingkat)},changeTingkat:function(t){0!=this.currentUser&&this.fetch()}},computed:k(k({},Object(i.b)("auth",{currentUser:"currentUser"})),Object(i.b)("cu",{modelCU:"headerDataS",modelCUStat:"headerDataStatS",updateMessage:"update",updateStat:"updateStat"}))},g=Object(p.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card d-none d-md-block d-print-none"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-5"},[0===this.currentUser.id_cu?a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.idCu,expression:"idCu"}],staticClass:"form-control",attrs:{name:"idCu","data-width":"100%",disabled:"loading"===t.modelCUStat},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.idCu=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Silahkan pilih data")]),t._v(" "),t._t("default"),t._v(" "),a("option",{attrs:{value:"semua"}},[t._v("Semua CU")]),t._v(" "),t.isPus?a("option",{attrs:{value:"0"}},[t.currentUser.pus?a("span",[t._v(t._s(t.currentUser.pus.name))]):a("span",[t._v("Puskopdit")])]):t._e(),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),t._l(t.modelCU,(function(e){return e?a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-light",attrs:{disabled:"loading"===t.modelCUStat},on:{click:t.fetchCU}},[a("i",{staticClass:"icon-sync",class:{spinner:"loading"===t.modelCUStat}})])])]):t._e()]),t._v(" "),a("div",{class:{"col-sm-5":0==t.currentUser.id_cu,"col-sm-12":0!=t.currentUser.id_cu}},[a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tingkat,expression:"tingkat"}],staticClass:"form-control",attrs:{name:"tingkat","data-width":"100%",disabled:"loading"===t.modelCUStat},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.tingkat=e.target.multiple?a:a[0]},function(e){return t.changeTingkat(e.target.value)}]}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Silahkan pilih tingkat")]),t._v(" "),a("option",{attrs:{value:"semua"}},[t._v("Semua Tingkat")]),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),a("option",{attrs:{value:"pengurus"}},[t._v("Pengurus")]),t._v(" "),a("option",{attrs:{value:"pengawas"}},[t._v("Pengawas")]),t._v(" "),a("option",{attrs:{value:"komite"}},[t._v("Komite")]),t._v(" "),a("option",{attrs:{value:"penasihat"}},[t._v("Penasihat")]),t._v(" "),a("option",{attrs:{value:"manajemen"}},[t._v(" Manajemen")]),t._v(" "),a("option",{attrs:{value:"kolektor"}},[t._v("Kolektor")]),t._v(" "),a("option",{attrs:{value:"kelompok_inti"}},[t._v("Kelompok Inti")]),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),a("option",{attrs:{value:"senior_manajer"}},[t._v("Senior Manajer")]),t._v(" "),a("option",{attrs:{value:"manajer"}},[t._v("Manajer")]),t._v(" "),a("option",{attrs:{value:"supervisor"}},[t._v("Supervisor")]),t._v(" "),a("option",{attrs:{value:"staf"}},[t._v("Staf")]),t._v(" "),a("option",{attrs:{value:"kontrak"}},[t._v("Kontrak")])])])]),t._v(" "),0==this.currentUser.id_cu?a("div",{staticClass:"col-sm-2"},["loading"!=t.itemDataStat?a("button",{staticClass:"btn btn-light btn-icon btn-block",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.fetch()}}},[a("i",{staticClass:"icon-folder-open3"}),t._v("  Tampilkan\n\t\t\t\t\t")]):a("button",{staticClass:"btn btn-light btn-icon btn-block",attrs:{type:"button"}},[a("i",{staticClass:"icon-sync spinner"})])]):t._e()])])]),t._v(" "),a("div",{staticClass:"card d-block d-md-none d-print-none"},[a("div",{staticClass:"card-body"},[0==this.currentUser.id_cu?a("div",[a("div",{staticClass:"input-group"},[t._m(2),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.idCu,expression:"idCu"}],staticClass:"form-control",attrs:{name:"idCu","data-width":"100%",disabled:"loading"===t.modelCUStat},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.idCu=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Silahkan pilih data")]),t._v(" "),a("option",{attrs:{value:"semua"}},[t._v("Semua CU")]),t._v(" "),t.isPus?a("option",{attrs:{value:"0"}},[t.currentUser.pus?a("span",[t._v(t._s(t.currentUser.pus.name))]):a("span",[t._v("Puskopdit")])]):t._e(),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),t._l(t.modelCU,(function(e){return e?a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2)]),t._v(" "),a("div",{staticClass:"pt-2"},[a("button",{staticClass:"btn btn-light btn-lg btn-block",attrs:{disabled:"loading"===t.modelCUStat},on:{click:t.fetchCU}},[a("i",{staticClass:"icon-sync",class:{spinner:"loading"===t.modelCUStat}}),t._v(" Reload\n\t\t\t\t\t")])])]):t._e(),t._v(" "),a("div",{staticClass:"input-group pt-2"},[t._m(3),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tingkat,expression:"tingkat"}],staticClass:"form-control",attrs:{name:"tingkat","data-width":"100%",disabled:"loading"===t.modelCUStat},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.tingkat=e.target.multiple?a:a[0]},function(e){return t.changeTingkat(e.target.value)}]}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Silahkan pilih tingkat")]),t._v(" "),a("option",{attrs:{value:"semua"}},[t._v("Semua Tingkat")]),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),a("option",{attrs:{value:"pengurus"}},[t._v("Pengurus")]),t._v(" "),a("option",{attrs:{value:"pengawas"}},[t._v("Pengawas")]),t._v(" "),a("option",{attrs:{value:"komite"}},[t._v("Komite")]),t._v(" "),a("option",{attrs:{value:"penasihat"}},[t._v("Penasihat")]),t._v(" "),a("option",{attrs:{value:"manajemen"}},[t._v(" Manajemen")]),t._v(" "),a("option",{attrs:{value:"kolektor"}},[t._v("Kolektor")]),t._v(" "),a("option",{attrs:{value:"kelompok_inti"}},[t._v("Kelompok Inti")]),t._v(" "),a("option",{attrs:{disabled:"",value:""}},[t._v("----------------")]),t._v(" "),a("option",{attrs:{value:"senior_manajer"}},[t._v("Senior Manajer")]),t._v(" "),a("option",{attrs:{value:"manajer"}},[t._v("Manajer")]),t._v(" "),a("option",{attrs:{value:"supervisor"}},[t._v("Supervisor")]),t._v(" "),a("option",{attrs:{value:"staf"}},[t._v("Staf")]),t._v(" "),a("option",{attrs:{value:"kontrak"}},[t._v("Kontrak")])])]),t._v(" "),0==this.currentUser.id_cu?a("div",{staticClass:"pt-2"},["loading"!=t.itemDataStat?a("button",{staticClass:"btn btn-light btn-icon btn-block",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.fetch()}}},[a("i",{staticClass:"icon-folder-open3"}),t._v("  Tampilkan\n\t\t\t\t")]):a("button",{staticClass:"btn btn-light btn-icon btn-block",attrs:{type:"button"}},[a("i",{staticClass:"icon-sync spinner"})])]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Pilih Data")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Pilih Tingkat")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Pilih Data")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Pilih Tingkat")])])}],!1,null,null,null).exports;function C(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?C(Object(a),!0).forEach((function(e){j(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function j(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var w={components:{pageHeader:n.a,tableData:v,message:h.a,selectData:g},data:function(){return{title:"Aktivis CU",kelas:"aktivis",titleDesc:"Mengelola data Aktivis CU",titleIcon:"icon-user-tie",selectCuPath:"aktivisCu",tabName:"aktif",isTidakAktif:!1}},created:function(){this.checkUser("index_aktivis",this.$route.params.cu)},methods:{checkUser:function(t,e){this.currentUser&&(this.currentUser.can&&this.currentUser.can[t]||this.$router.push("/notFound"),e&&!this.currentUser.id_cu||0!=this.currentUser.id_cu&&this.currentUser.id_cu!=e&&this.$router.push("/notFound"))},changeTab:function(t){this.tabName=t,"tidakAktif"!=t||this.isTidakAktif||(this.isTidakAktif=!0)}},computed:D(D({},Object(i.b)("auth",{currentUser:"currentUser"})),Object(i.b)("aktivis",{itemData:"dataS",itemData2:"dataS2",itemDataStat:"dataStatS",itemDataStat2:"dataStatS2"}))},S=Object(p.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header",{attrs:{title:t.title,titleDesc:t.titleDesc,titleIcon:t.titleIcon}}),t._v(" "),a("div",{staticClass:"page-container"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"content-wrapper"},["fail"===t.itemDataStat?a("message",{attrs:{title:"Oops terjadi kesalahan:",errorData:t.itemData}}):t._e(),t._v(" "),a("select-data",{attrs:{kelas:t.kelas,path:t.selectCuPath,isPus:!0,itemDataStat:t.itemDataStat}}),t._v(" "),a("div",{staticClass:"nav-tabs-responsive mb-3"},[a("ul",{staticClass:"nav nav-tabs nav-tabs-solid bg-light"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"aktif"==t.tabName},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeTab("aktif")}}},[a("i",{staticClass:"icon-checkbox-checked mr-2"}),t._v(" AKTIVIS AKTIF")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"tidakAktif"==t.tabName},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeTab("tidakAktif")}}},[a("i",{staticClass:"icon-cancel-square mr-2"}),t._v(" AKTIVIS TIDAK AKTIF")])])])]),t._v(" "),a("transition",{attrs:{"enter-active-class":"animated fadeIn",mode:"out-in"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"aktif"==t.tabName,expression:"tabName == 'aktif'"}]},[a("table-data",{attrs:{title:t.title,kelas:t.kelas,status:"aktif",itemData:t.itemData,itemDataStat:t.itemDataStat}})],1)]),t._v(" "),a("transition",{attrs:{"enter-active-class":"animated fadeIn",mode:"out-in"}},[t.isTidakAktif?a("div",{directives:[{name:"show",rawName:"v-show",value:"tidakAktif"==t.tabName,expression:"tabName == 'tidakAktif'"}]},[a("table-data",{attrs:{title:t.title,kelas:t.kelas,status:"tidakAktif",itemData:t.itemData2,itemDataStat:t.itemDataStat2}})],1):t._e()])],1)])])],1)}),[],!1,null,null,null);e.default=S.exports},yunw:function(t,e,a){"use strict";var i={props:{id:{default:""}},data:function(){return{clicked:!1}},methods:{btnClick:function(){var t=this;this.clicked?setTimeout((function(){return t.clicked=!1}),400):this.clicked=!0}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"btn btn-link btn-block",attrs:{"data-toggle":"collapse","data-target":".collap"+this.id},on:{click:this.btnClick}},[this.clicked?e("span",[e("i",{staticClass:"icon-arrow-up12"}),this._v(" Kembali "),e("i",{staticClass:"icon-arrow-up12"})]):e("span",[e("i",{staticClass:"icon-arrow-down12"}),this._v(" Selengkapnya "),e("i",{staticClass:"icon-arrow-down12"})])])])}),[],!1,null,null,null);e.a=s.exports}}]);