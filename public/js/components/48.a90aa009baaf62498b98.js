/*! For license information please see 48.a90aa009baaf62498b98.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"2p0E":function(t,e,a){"use strict";a.r(e);var s=a("L2JU"),l=a("Ll3F"),n=a("xuR2"),i=a("vzy+"),r=a("Ocez");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={components:{pageHeader:l.a,message:n.a,dataTable:i.a,checkValue:r.a},data:function(){return{title:"Laporan Draft",kelas:"laporanTp",titleDesc:"Mengelola data laporan dari file excel",titleIcon:"icon-stats-bars2",selectedItem:[],columnData:[{title:"No."},{title:"TP/KP"},{title:"No. TP/KP"},{title:"Periode"},{title:"Lelaki Biasa"},{title:"Lelaki L.Biasa"},{title:"Perempuan Biasa"},{title:"Perempuan L.Biasa"},{title:"Total Anggota"},{title:"Total Anggota Lalu"},{title:"Aset"},{title:"Aset Lalu"},{title:"Aset Masalah"},{title:"Aset Tdk Menghasilkan"},{title:"Aktiva Lancar"},{title:"Simp. Saham"},{title:"Simp. Saham Lalu"},{title:"Simp. Saham Des"},{title:"Simp. Nonsaham Unggulan"},{title:"Simp. Nonsaham Harian"},{title:"Hutang SPD"},{title:"Hutang Tdk Berbiaya"},{title:"Total Hutang Pihak Ke-3"},{title:"Piutang Beredar"},{title:"Piutang Bersih"},{title:"Piutang Anggota"},{title:"Piutang Lalai 1-12 Bulan"},{title:"Piutang Lalai > 12 Bulan"},{title:"Rasio Piutang Beredar"},{title:"Rasio Piutang Lalai"},{title:"DCR"},{title:"DCU"},{title:"Iuran Gedung"},{title:"Donasi"},{title:"BJS Saham"},{title:"Beban Penyisihan DCR"},{title:"Investasi Likuid"},{title:"Total Pendapatan"},{title:"Total Biaya"},{title:"SHU"},{title:"SHU Lalu"},{title:"Rata-rata Aset"},{title:"Laju Inflasi"},{title:"Harga Pasar"},{title:"Tgl. Buat"},{title:"Tgl. Ubah"}],state:"",modalShow:!1,modalState:"",modalTitle:"",modalContent:"",modalButton:""}},created:function(){this.fetch()},watch:{},methods:{fetch:function(){this.$store.dispatch(this.kelas+"/indexTpDraft",this.currentUser.id)},selectedRow:function(t){this.selectedItem=t},ubahData:function(t){this.$router.push({name:this.kelas+"EditDraft",params:{id:t}})},modalConfirmOpen:function(t,e,a){this.modalShow=!0,this.modalState="confirm-tutup",this.state=t,e&&(this.selectedItem=a),"simpan"==t?(this.modalTitle="Simpan "+this.title+" ini?",this.modalButton="Iya, Simpan"):"hapus"==t?(this.modalTitle="Hapus "+this.title+" ini?",this.modalButton="Iya, Hapus"):"hapus_semua"==t&&(this.modalTitle="Hapus semua laporan draft ini?",this.modalButton="Iya, Hapus")},modalTutup:function(){this.modalShow=!1,this.$store.dispatch(this.kelas+"/resetUpdateStat")},modalConfirmOk:function(){"hapus"==this.state?this.$store.dispatch(this.kelas+"/destroyDraft",this.selectedItem.id):"hapus_semua"==this.state?this.$store.dispatch(this.kelas+"/destroyDraftAll"):"simpan"==this.state&&this.$store.dispatch(this.kelas+"/storeDraftAll")}},computed:u(u({},Object(s.b)("auth",{currentUser:"currentUser"})),Object(s.b)("laporanTp",{itemData:"dataS",itemDataStat:"dataStatS"}))},p=a("KHd+"),v=Object(p.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header",{attrs:{title:t.title,titleDesc:t.titleDesc,titleIcon:t.titleIcon}}),t._v(" "),a("div",{staticClass:"page-content pt-0"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content"},["fail"===t.itemDataStat?a("message",{attrs:{title:"Oops terjadi kesalahan:",errorData:t.itemData}}):t._e(),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-print-none"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-lg-10 pb-2 d-none d-sm-block"},[a("button",{staticClass:"btn btn-light mb-1",on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("simpan")}}},[a("i",{staticClass:"icon-floppy-disk"}),t._v(" Simpan ke laporan statistik Tp\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("button",{staticClass:"btn btn-light mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubahData(t.selectedItem.id)}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("button",{staticClass:"btn btn-light btn-icon mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("button",{staticClass:"btn btn-light btn-icon mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus_semua")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus Semua\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"col-md-12 pb-2 d-block d-sm-none"},[a("button",{staticClass:"btn btn-light btn-block",on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("simpan")}}},[a("i",{staticClass:"icon-floppy-disk"}),t._v("Simpan ke laporan statistik Tp\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("button",{staticClass:"btn btn-light btn-block",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.ubahData(t.selectedItem.id)}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Ubah\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("button",{staticClass:"btn btn-light btn-icon btn-block mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("button",{staticClass:"btn btn-light btn-icon btn-block mb-1",attrs:{disabled:!t.selectedItem.id},on:{click:function(e){return e.preventDefault(),t.modalConfirmOpen("hapus_semua")}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Hapus Semua\n\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),a("data-table",{attrs:{items:t.itemData,columnData:t.columnData,itemDataStat:t.itemDataStat},scopedSlots:t._u([{key:"item-desktop",fn:function(e){return[e.item?a("tr",{staticClass:"text-nowrap",class:{"bg-info":t.selectedItem.id===e.item.id},on:{click:function(a){return t.selectedRow(e.item)}}},[a("td",[t._v(t._s(e.index+1))]),t._v(" "),a("td",[e.item.tp?a("check-value",{attrs:{value:e.item.tp.name}}):a("span",[t._v("-")])],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.no_tp}})],1),t._v(" "),a("td",[t._v(t._s(t._f("dateMonth")(e.item.periode)))]),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.l_biasa,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.l_lbiasa,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.p_biasa,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.p_lbiasa,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.total_anggota,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.total_anggota_lalu,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.aset,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.aset_lalu,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.aset_masalah,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.aset_tidak_menghasilkan,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.aktiva_lancar,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.simpanan_saham,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.simpanan_saham_lalu,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.simpanan_saham_des,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.nonsaham_unggulan,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.nonsaham_harian,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.hutang_spd,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.hutang_tidak_berbiaya_30hari,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.total_hutang_pihak3,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.piutang_beredar,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.piutang_bersih,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.piutang_anggota,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.piutang_lalai_1bulan,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.piutang_lalai_12bulan,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.rasio_beredar,valueType:"percentage"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.rasio_lalai,valueType:"percentage"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.dcr,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.dcu,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.dana_gedung,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.donasi,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.bjs_saham,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.beban_penyisihan_dcr,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.investasi_likuid,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.total_pendapatan,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.total_biaya,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.shu,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.shu_lalu,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.rata_aset,valueType:"currency"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.laju_inflasi,valueType:"percentage"}})],1),t._v(" "),a("td",[a("check-value",{attrs:{value:e.item.harga_pasar,valueType:"percentage"}})],1),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.$options.filters.dateTime(e.item.created_at))}}),t._v(" "),a("td",[e.item.created_at!==e.item.updated_at?a("span",{domProps:{innerHTML:t._s(t.$options.filters.dateTime(e.item.updated_at))}}):a("span",[t._v("-")])])]):t._e()]}}])})],1)],1)])]),t._v(" "),a("app-modal",{attrs:{show:t.modalShow,state:t.modalState,title:t.modalTitle,content:t.modalContent,button:t.modalButton},on:{tutup:t.modalTutup,confirmOk:t.modalConfirmOk,successOk:t.modalTutup,failOk:t.modalTutup,backgroundClick:t.modalTutup}})],1)}),[],!1,null,null,null);e.default=v.exports},Ll3F:function(t,e,a){"use strict";var s=a("L2JU");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i={props:{title:{default:""},titleIcon:{default:""},titleDesc:{default:""},level:{default:1},level2Title:{default:""},level2Route:{default:""}},methods:{level2Back:function(){this.$emit("level2Back")},route1:function(){this.btn1RouteParams?this.$router.push({name:this.btn1Route,params:{cu:this.btn1RouteParams}}):this.$router.push({name:this.btn1Route})},route2:function(){this.btn2RouteParams?this.$router.push({name:this.btn2Route,params:{cu:this.btn2RouteParams}}):this.$router.push({name:this.btn2Route})},route3:function(){this.btn3RouteParams?this.$router.push({name:this.btn3Route,params:{cu:this.btn3RouteParams}}):this.$router.push({name:this.btn3Route})}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(s.b)("auth",{currentUser:"currentUser"}))},r=a("KHd+"),c=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-header"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"mr-2",class:t.titleIcon}),t._v(" "),a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.title))]),t._v(" "),a("small",{staticClass:"d-block text-muted"},[t._v(t._s(t.titleDesc))])])]),t._v(" "),a("div",{staticClass:"header-elements d-none py-0 mb-3 mb-md-0"},[1===t.level?a("div",{staticClass:"breadcrumb"},[a("router-link",{staticClass:"breadcrumb-item",attrs:{to:{name:"dashboard"}}},[a("i",{staticClass:"icon-home4"}),t._v("  Dashboard ")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))])],1):t._e(),t._v(" "),2===t.level?a("div",{staticClass:"breadcrumb"},[a("router-link",{staticClass:"breadcrumb-item",attrs:{to:{name:"dashboard"}}},[a("i",{staticClass:"icon-home4"}),t._v(" Dashboard ")]),t._v(" "),a("a",{staticClass:"breadcrumb-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.level2Back()}}},[t._v(t._s(t.level2Title))]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))])],1):t._e(),t._v(" "),3===t.level?a("div",{staticClass:"breadcrumb"},[t._t("breadcrumb")],2):t._e()])])])])}),[],!1,null,null,null);e.a=c.exports},Ocez:function(t,e,a){"use strict";var s=a("h2y9"),l=a("8MVx"),n={components:{truncate:s.a,appModal:l.a},props:{value:{default:""},frontText:{default:""},trimLength:{default:50},valueType:{default:"trim"},empty:{default:"-"}},data:function(){return{modalShow:!1,modalState:"",modalTitle:"",modalContent:"",modalButton:""}},methods:{modalOpen:function(){this.modalShow=!0,this.modalState="content-tutup",this.modalContent=this.value,this.modalButton="Tutup"},modalTutup:function(){this.modalShow=!1},strip:function(t){var e=document.createElement("DIV");return e.innerHTML=t,e.textContent||e.innerText||""}}},i=a("KHd+"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline-block"}},[t.value?a("span",{staticStyle:{display:"inline-block"}},["trim"==t.valueType?a("span",{staticStyle:{display:"inline-block"}},[a("truncate",{staticStyle:{display:"inline-block"},attrs:{"action-class":"badge bg-blue",clamp:"selengkapnya >",length:t.trimLength,less:"< kembali",text:t.frontText+" "+t.value}})],1):"modal"==t.valueType?a("span",{staticStyle:{display:"inline-block"}},[a("button",{staticClass:"btn btn-light",on:{click:function(e){return e.preventDefault(),t.modalOpen()}}},[t._v("\n          Lihat\n      ")])]):"currency"==t.valueType?a("span",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.frontText)+" "+t._s(t._f("currency")(t.value,"",0,{thousandsSeparator:"."})))]):"percentage"==t.valueType?a("span",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.frontText)+" "+t._s(t._f("percentage")(t.value,2)))]):"decimal"==t.valueType?a("span",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.frontText)+" "+t._s(t._f("round")(t.value,2)))]):a("span",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.frontText)+" "+t._s(t.value))])]):a("span",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.frontText)+" "+t._s(t.empty))]),t._v(" "),a("app-modal",{attrs:{show:t.modalShow,state:t.modalState,title:t.modalTitle,button:t.modalButton,content:t.modalContent},on:{tutup:t.modalTutup,backgroundClick:t.modalTutup}})],1)}),[],!1,null,null,null);e.a=r.exports},VTkU:function(t,e){t.exports=function(t,e,a){var s,l,n,i,r,c=10>e?e:10,u=["img","br"],o=[],d=0,p="",v='([\\w|-]+\\s*(=\\s*"[^"]*")?\\s*)*',m=new RegExp("<\\/?\\w+\\s*"+v+"\\s*\\/\\s*>"),h=new RegExp("<\\/?\\w+\\s*"+v+"\\s*\\/?\\s*>"),_=/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w\-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g,b=new RegExp("<img\\s*"+v+"\\s*\\/?\\s*>"),f=new RegExp("\\W+","g"),y=!0;function g(t){var e=t.indexOf(" ");if(-1===e&&-1===(e=t.indexOf(">")))throw new Error("HTML tag is not well-formed : "+t);return t.substring(1,e)}function k(t,s){var l,n,i=e-d,r=i,c=i<a.slop,u=c?i:a.slop-1,o=c?0:i-a.slop,p=s||i+a.slop;if(!a.truncateLastWord){if(l=t.slice(o,p),s&&l.length<=s)r=l.length;else for(;null!==(n=f.exec(l));){if(!(n.index<u)){if(n.index===u){r=i;break}r=i+(n.index-u);break}if(r=i-(u-n.index),0===n.index&&i<=1)break}t.charAt(r-1).match(/\s$/)&&r--}return r}for((a=a||{}).ellipsis=void 0!==a.ellipsis?a.ellipsis:"...",a.truncateLastWord=void 0===a.truncateLastWord||a.truncateLastWord,a.slop=void 0!==a.slop?a.slop:c;y;){if(!(y=h.exec(t))){if(d>=e)break;if(!(y=_.exec(t))||y.index>=e){p+=t.substring(0,k(t));break}for(;y;)s=y[0],l=y.index,p+=t.substring(0,l+s.length-d),t=t.substring(l+s.length),y=_.exec(t);break}if(s=y[0],l=y.index,d+l>e){p+=t.substring(0,k(t,l));break}d+=l,p+=t.substring(0,l),"/"===s[1]?(o.pop(),i=null):(i=m.exec(s))||(n=g(s),o.push(n)),p+=i?i[0]:s,t=t.substring(l+s.length)}return t.length>e-d&&a.ellipsis&&(p+=a.ellipsis),p+=(r="",o.reverse().forEach((function(t,e){-1===u.indexOf(t)&&(r+="</"+t+">")})),r),a.keepImageTag||(p=function(t){var e,a,s=b.exec(t);return s?(e=s.index,a=s[0].length,t.substring(0,e)+t.substring(e+a)):t}(p)),p}},h2y9:function(t,e,a){"use strict";!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=" a[data-v-11b2e33f] { cursor: pointer; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}}();var s=a("VTkU"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show||"html"===t.type?t.show||"html"!==t.type?t._e():a("div",[a("span",{class:t.textClass,domProps:{innerHTML:t._s(t.truncate(t.text))}}),t._v(" "),t.text.length>=t.length?a("a",{class:t.actionClass,on:{click:function(e){t.toggle()}}},[t._v(t._s(t.clamp))]):t._e()]):a("div",[a("span",{class:t.textClass},[t._v(" "+t._s(t.truncate(t.text))+" ")]),t._v(" "),t.text.length>=t.length?a("a",{class:t.actionClass,on:{click:function(e){t.toggle()}}},[t._v(t._s(t.clamp))]):t._e()]),t._v(" "),t.show&&"html"!==t.type?a("div",[a("span",[t._v(t._s(t.text))]),t._v(" "),t.text.length>=t.length?a("a",{class:t.actionClass,on:{click:function(e){t.toggle()}}},[t._v(t._s(t.less))]):t._e()]):t.show&&"html"===t.type?a("div",[t.text.length>=t.length?a("div",{domProps:{innerHTML:t._s(t.text)}}):t._e(),t._v(" "),t.text.length>=t.length?a("a",{class:t.actionClass,on:{click:function(e){t.toggle()}}},[t._v(t._s(t.less))]):a("p",[t._v(" "+t._s(t.h2p(t.text))+" ")])]):t._e()])},staticRenderFns:[],_scopeId:"data-v-11b2e33f",name:"Truncate",props:{collapsedTextClass:{type:String,default:""},text:{type:String,required:!0},clamp:{type:String,default:"Read More"},length:{type:Number,default:100},less:{type:String,default:"Show Less"},type:{type:String,default:"text"},actionClass:{type:String,default:""}},data:function(){return{show:!1,counter:this.length}},computed:{textClass:function(){return this.text.length>this.length&&this.collapsedTextClass?this.collapsedTextClass:""}},methods:{truncate:function(t){return t?"html"===this.type?s(t,this.length,{ellipsis:""}):t.toString().substring(0,this.length):""},toggle:function(){this.show=!this.show},h2p:function(t){return s(t)}}};e.a=l},"vzy+":function(t,e,a){"use strict";a("IIPP");var s={props:["columnData","itemDataStat","items"],components:{},data:function(){return{}},methods:{}},l=a("KHd+"),n=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-responsive table-scrollable"},[a("table",{staticClass:"table table-striped"},[a("thead",{staticClass:"bg-primary"},[a("tr",{staticClass:"text-nowrap"},t._l(t.columnData,(function(e,s){return a("th",{key:s},[a("span",{domProps:{innerHTML:t._s(e.title)}})])})),0)]),t._v(" "),"loading"===t.itemDataStat?a("tbody",[a("tr",[a("td",{attrs:{colspan:t.columnData.length}},[t._m(0)])])]):"success"===t.itemDataStat?a("tbody",[t._l(t.items,(function(e,a){return t._t("item-desktop",null,{item:e,index:a})})),t._v(" "),0==t.items.length?a("tr",[a("td",{attrs:{colspan:t.columnData.length}},[t._v("Belum terdapat data...")])]):t._e()],2):"fail"===t.itemDataStat?a("tbody",[a("tr",[a("td",{attrs:{colspan:t.columnData.length}},[t._v("\n\t\t\t\t\tOops.. Terjadi kesalahan, silahkan coba lagi.\n\t\t\t\t")])])]):a("tbody",[a("tr",[a("td",{attrs:{colspan:t.columnData.length}},[t._v("-")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-info progress-bar-striped active",staticStyle:{width:"100%"}},[e("span",{staticClass:"sr-only"},[this._v("100% Complete")])])])}],!1,null,null,null);e.a=n.exports}}]);