(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{IIPP:function(e,t,i){var r;"undefined"!=typeof self&&self,e.exports=(r=i("f9mo"),function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=r},function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var o={name:"cleave",render:function(e){return e("input",{attrs:{type:"text",value:this.value},on:{blur:this.onBlur}})},props:{value:{default:null,required:!0,validator:function(e){return null===e||"string"==typeof e||e instanceof String||"number"==typeof e}},options:{type:Object,default:function(){return{}}},raw:{type:Boolean,default:!0}},data:function(){return{cleave:null,onValueChangedFn:null}},mounted:function(){this.cleave||(this.cleave=new n.a(this.$el,this.getOptions(this.options)))},methods:{getOptions:function(e){return this.onValueChangedFn=e.onValueChanged,a({},e,{onValueChanged:this.onValueChanged})},onValueChanged:function(e){var t=this.raw?e.target.rawValue:e.target.value;this.$emit("input",t),"function"==typeof this.onValueChangedFn&&this.onValueChangedFn.call(this,e)},onBlur:function(e){this.$emit("blur",this.value)}},watch:{options:{deep:!0,handler:function(e){this.cleave.destroy(),this.cleave=new n.a(this.$el,this.getOptions(e)),this.cleave.setRawValue(this.value)}},value:function(e){this.cleave&&(this.raw&&e===this.cleave.getRawValue()||(this.raw||e!==this.$el.value)&&this.cleave.setRawValue(e))}},beforeDestroy:function(){this.cleave&&(this.cleave.destroy(),this.cleave=null,this.onValueChangedFn=null)}};i.d(t,"plugin",(function(){return s})),i.d(t,"component",(function(){return o}));var s=function(e,t){var i="cleave";"string"==typeof t&&(i=t),e.component(i,o)};o.install=s,t.default=o}]).default)},f9mo:function(e,t,i){"use strict";i.r(t),function(e){var i="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},r=function(e,t,i,n,a,o,s,l,u){this.numeralDecimalMark=e||".",this.numeralIntegerScale=t>0?t:0,this.numeralDecimalScale=i>=0?i:2,this.numeralThousandsGroupStyle=n||r.groupStyle.thousand,this.numeralPositiveOnly=!!a,this.stripLeadingZeroes=!1!==o,this.prefix=s||""===s?s:"",this.signBeforePrefix=!!l,this.delimiter=u||""===u?u:",",this.delimiterRE=u?new RegExp("\\"+u,"g"):""};r.groupStyle={thousand:"thousand",lakh:"lakh",wan:"wan",none:"none"},r.prototype={getRawValue:function(e){return e.replace(this.delimiterRE,"").replace(this.numeralDecimalMark,".")},format:function(e){var t,i,n,a,o="";switch(e=e.replace(/[A-Za-z]/g,"").replace(this.numeralDecimalMark,"M").replace(/[^\dM-]/g,"").replace(/^\-/,"N").replace(/\-/g,"").replace("N",this.numeralPositiveOnly?"":"-").replace("M",this.numeralDecimalMark),this.stripLeadingZeroes&&(e=e.replace(/^(-)?0+(?=\d)/,"$1")),i="-"===e.slice(0,1)?"-":"",n=void 0!==this.prefix?this.signBeforePrefix?i+this.prefix:this.prefix+i:i,a=e,e.indexOf(this.numeralDecimalMark)>=0&&(a=(t=e.split(this.numeralDecimalMark))[0],o=this.numeralDecimalMark+t[1].slice(0,this.numeralDecimalScale)),"-"===i&&(a=a.slice(1)),this.numeralIntegerScale>0&&(a=a.slice(0,this.numeralIntegerScale)),this.numeralThousandsGroupStyle){case r.groupStyle.lakh:a=a.replace(/(\d)(?=(\d\d)+\d$)/g,"$1"+this.delimiter);break;case r.groupStyle.wan:a=a.replace(/(\d)(?=(\d{4})+$)/g,"$1"+this.delimiter);break;case r.groupStyle.thousand:a=a.replace(/(\d)(?=(\d{3})+$)/g,"$1"+this.delimiter)}return n+a.toString()+(this.numeralDecimalScale>0?o.toString():"")}};var n=r,a=function(e,t,i){this.date=[],this.blocks=[],this.datePattern=e,this.dateMin=t.split("-").reverse().map((function(e){return parseInt(e,10)})),2===this.dateMin.length&&this.dateMin.unshift(0),this.dateMax=i.split("-").reverse().map((function(e){return parseInt(e,10)})),2===this.dateMax.length&&this.dateMax.unshift(0),this.initBlocks()};a.prototype={initBlocks:function(){var e=this;e.datePattern.forEach((function(t){"Y"===t?e.blocks.push(4):e.blocks.push(2)}))},getISOFormatDate:function(){var e=this.date;return e[2]?e[2]+"-"+this.addLeadingZero(e[1])+"-"+this.addLeadingZero(e[0]):""},getBlocks:function(){return this.blocks},getValidatedDate:function(e){var t=this,i="";return e=e.replace(/[^\d]/g,""),t.blocks.forEach((function(r,n){if(e.length>0){var a=e.slice(0,r),o=a.slice(0,1),s=e.slice(r);switch(t.datePattern[n]){case"d":"00"===a?a="01":parseInt(o,10)>3?a="0"+o:parseInt(a,10)>31&&(a="31");break;case"m":"00"===a?a="01":parseInt(o,10)>1?a="0"+o:parseInt(a,10)>12&&(a="12")}i+=a,e=s}})),this.getFixedDateString(i)},getFixedDateString:function(e){var t,i,r,n=this,a=n.datePattern,o=[],s=0,l=0,u=0,c=0,h=0,d=0,m=!1;return 4===e.length&&"y"!==a[0].toLowerCase()&&"y"!==a[1].toLowerCase()&&(h=2-(c="d"===a[0]?0:2),t=parseInt(e.slice(c,c+2),10),i=parseInt(e.slice(h,h+2),10),o=this.getFixedDate(t,i,0)),8===e.length&&(a.forEach((function(e,t){switch(e){case"d":s=t;break;case"m":l=t;break;default:u=t}})),d=2*u,c=s<=u?2*s:2*s+2,h=l<=u?2*l:2*l+2,t=parseInt(e.slice(c,c+2),10),i=parseInt(e.slice(h,h+2),10),r=parseInt(e.slice(d,d+4),10),m=4===e.slice(d,d+4).length,o=this.getFixedDate(t,i,r)),4!==e.length||"y"!==a[0]&&"y"!==a[1]||(d=2-(h="m"===a[0]?0:2),i=parseInt(e.slice(h,h+2),10),r=parseInt(e.slice(d,d+2),10),m=2===e.slice(d,d+2).length,o=[0,i,r]),6!==e.length||"Y"!==a[0]&&"Y"!==a[1]||(d=2-.5*(h="m"===a[0]?0:4),i=parseInt(e.slice(h,h+2),10),r=parseInt(e.slice(d,d+4),10),m=4===e.slice(d,d+4).length,o=[0,i,r]),o=n.getRangeFixedDate(o),n.date=o,0===o.length?e:a.reduce((function(e,t){switch(t){case"d":return e+(0===o[0]?"":n.addLeadingZero(o[0]));case"m":return e+(0===o[1]?"":n.addLeadingZero(o[1]));case"y":return e+(m?n.addLeadingZeroForYear(o[2],!1):"");case"Y":return e+(m?n.addLeadingZeroForYear(o[2],!0):"")}}),"")},getRangeFixedDate:function(e){var t=this.datePattern,i=this.dateMin||[],r=this.dateMax||[];return!e.length||i.length<3&&r.length<3||t.find((function(e){return"y"===e.toLowerCase()}))&&0===e[2]?e:r.length&&(r[2]<e[2]||r[2]===e[2]&&(r[1]<e[1]||r[1]===e[1]&&r[0]<e[0]))?r:i.length&&(i[2]>e[2]||i[2]===e[2]&&(i[1]>e[1]||i[1]===e[1]&&i[0]>e[0]))?i:e},getFixedDate:function(e,t,i){return e=Math.min(e,31),t=Math.min(t,12),i=parseInt(i||0,10),(t<7&&t%2==0||t>8&&t%2==1)&&(e=Math.min(e,2===t?this.isLeapYear(i)?29:28:30)),[e,t,i]},isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},addLeadingZero:function(e){return(e<10?"0":"")+e},addLeadingZeroForYear:function(e,t){return t?(e<10?"000":e<100?"00":e<1e3?"0":"")+e:(e<10?"0":"")+e}};var o=a,s=function(e,t){this.time=[],this.blocks=[],this.timePattern=e,this.timeFormat=t,this.initBlocks()};s.prototype={initBlocks:function(){var e=this;e.timePattern.forEach((function(){e.blocks.push(2)}))},getISOFormatTime:function(){var e=this.time;return e[2]?this.addLeadingZero(e[0])+":"+this.addLeadingZero(e[1])+":"+this.addLeadingZero(e[2]):""},getBlocks:function(){return this.blocks},getTimeFormatOptions:function(){return"12"===String(this.timeFormat)?{maxHourFirstDigit:1,maxHours:12,maxMinutesFirstDigit:5,maxMinutes:60}:{maxHourFirstDigit:2,maxHours:23,maxMinutesFirstDigit:5,maxMinutes:60}},getValidatedTime:function(e){var t=this,i="";e=e.replace(/[^\d]/g,"");var r=t.getTimeFormatOptions();return t.blocks.forEach((function(n,a){if(e.length>0){var o=e.slice(0,n),s=o.slice(0,1),l=e.slice(n);switch(t.timePattern[a]){case"h":parseInt(s,10)>r.maxHourFirstDigit?o="0"+s:parseInt(o,10)>r.maxHours&&(o=r.maxHours+"");break;case"m":case"s":parseInt(s,10)>r.maxMinutesFirstDigit?o="0"+s:parseInt(o,10)>r.maxMinutes&&(o=r.maxMinutes+"")}i+=o,e=l}})),this.getFixedTimeString(i)},getFixedTimeString:function(e){var t,i,r,n=this,a=n.timePattern,o=[],s=0,l=0,u=0,c=0,h=0,d=0;return 6===e.length&&(a.forEach((function(e,t){switch(e){case"s":s=2*t;break;case"m":l=2*t;break;case"h":u=2*t}})),d=u,h=l,c=s,t=parseInt(e.slice(c,c+2),10),i=parseInt(e.slice(h,h+2),10),r=parseInt(e.slice(d,d+2),10),o=this.getFixedTime(r,i,t)),4===e.length&&n.timePattern.indexOf("s")<0&&(a.forEach((function(e,t){switch(e){case"m":l=2*t;break;case"h":u=2*t}})),d=u,h=l,t=0,i=parseInt(e.slice(h,h+2),10),r=parseInt(e.slice(d,d+2),10),o=this.getFixedTime(r,i,t)),n.time=o,0===o.length?e:a.reduce((function(e,t){switch(t){case"s":return e+n.addLeadingZero(o[2]);case"m":return e+n.addLeadingZero(o[1]);case"h":return e+n.addLeadingZero(o[0])}}),"")},getFixedTime:function(e,t,i){return i=Math.min(parseInt(i||0,10),60),t=Math.min(t,60),[e=Math.min(e,60),t,i]},addLeadingZero:function(e){return(e<10?"0":"")+e}};var l=s,u=function(e,t){this.delimiter=t||""===t?t:" ",this.delimiterRE=t?new RegExp("\\"+t,"g"):"",this.formatter=e};u.prototype={setFormatter:function(e){this.formatter=e},format:function(e){this.formatter.clear();for(var t,i="",r=!1,n=0,a=(e=(e=(e=e.replace(/[^\d+]/g,"")).replace(/^\+/,"B").replace(/\+/g,"").replace("B","+")).replace(this.delimiterRE,"")).length;n<a;n++)t=this.formatter.inputDigit(e.charAt(n)),/[\s()-]/g.test(t)?(i=t,r=!0):r||(i=t);return i=(i=i.replace(/[()]/g,"")).replace(/[\s-]/g,this.delimiter)}};var c=u,h={blocks:{uatp:[4,5,6],amex:[4,6,5],diners:[4,6,4],discover:[4,4,4,4],mastercard:[4,4,4,4],dankort:[4,4,4,4],instapayment:[4,4,4,4],jcb15:[4,6,5],jcb:[4,4,4,4],maestro:[4,4,4,4],visa:[4,4,4,4],mir:[4,4,4,4],unionPay:[4,4,4,4],general:[4,4,4,4]},re:{uatp:/^(?!1800)1\d{0,14}/,amex:/^3[47]\d{0,13}/,discover:/^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,diners:/^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,mastercard:/^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,dankort:/^(5019|4175|4571)\d{0,12}/,instapayment:/^63[7-9]\d{0,13}/,jcb15:/^(?:2131|1800)\d{0,11}/,jcb:/^(?:35\d{0,2})\d{0,12}/,maestro:/^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,mir:/^220[0-4]\d{0,12}/,visa:/^4\d{0,15}/,unionPay:/^62\d{0,14}/},getStrictBlocks:function(e){var t=e.reduce((function(e,t){return e+t}),0);return e.concat(19-t)},getInfo:function(e,t){var i=h.blocks,r=h.re;for(var n in t=!!t,r)if(r[n].test(e)){var a=i[n];return{type:n,blocks:t?this.getStrictBlocks(a):a}}return{type:"unknown",blocks:t?this.getStrictBlocks(i.general):i.general}}},d=h,m={noop:function(){},strip:function(e,t){return e.replace(t,"")},getPostDelimiter:function(e,t,i){if(0===i.length)return e.slice(-t.length)===t?t:"";var r="";return i.forEach((function(t){e.slice(-t.length)===t&&(r=t)})),r},getDelimiterREByDelimiter:function(e){return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),"g")},getNextCursorPosition:function(e,t,i,r,n){return t.length===e?i.length:e+this.getPositionOffset(e,t,i,r,n)},getPositionOffset:function(e,t,i,r,n){var a,o,s;return a=this.stripDelimiters(t.slice(0,e),r,n),o=this.stripDelimiters(i.slice(0,e),r,n),0!==(s=a.length-o.length)?s/Math.abs(s):0},stripDelimiters:function(e,t,i){var r=this;if(0===i.length){var n=t?r.getDelimiterREByDelimiter(t):"";return e.replace(n,"")}return i.forEach((function(t){t.split("").forEach((function(t){e=e.replace(r.getDelimiterREByDelimiter(t),"")}))})),e},headStr:function(e,t){return e.slice(0,t)},getMaxLength:function(e){return e.reduce((function(e,t){return e+t}),0)},getPrefixStrippedValue:function(e,t,i,r,n,a,o){if(0===i)return e;if(r.slice(0,i)!==t)return o&&!r&&e?e:"";var s=this.stripDelimiters(r,n,a);return e.slice(0,i)!==t?s.slice(i):e.slice(i)},getFirstDiffIndex:function(e,t){for(var i=0;e.charAt(i)===t.charAt(i);)if(""===e.charAt(i++))return-1;return i},getFormattedValue:function(e,t,i,r,n,a){var o,s="",l=n.length>0;return 0===i?e:(t.forEach((function(t,u){if(e.length>0){var c=e.slice(0,t),h=e.slice(t);o=l?n[a?u-1:u]||o:r,a?(u>0&&(s+=o),s+=c):(s+=c,c.length===t&&u<i-1&&(s+=o)),e=h}})),s)},fixPrefixCursor:function(e,t,i,r){if(e){var n=e.value,a=i||r[0]||" ";if(e.setSelectionRange&&t&&!(t.length+a.length<n.length)){var o=2*n.length;setTimeout((function(){e.setSelectionRange(o,o)}),1)}}},checkFullSelection:function(e){try{return(window.getSelection()||document.getSelection()||{}).toString().length===e.length}catch(e){}return!1},setSelection:function(e,t,i){if(e===this.getActiveElement(i)&&!(e&&e.value.length<=t))if(e.createTextRange){var r=e.createTextRange();r.move("character",t),r.select()}else try{e.setSelectionRange(t,t)}catch(e){console.warn("The input element type does not support selection")}},getActiveElement:function(e){var t=e.activeElement;return t&&t.shadowRoot?this.getActiveElement(t.shadowRoot):t},isAndroid:function(){return navigator&&/android/i.test(navigator.userAgent)},isAndroidBackspaceKeydown:function(e,t){return!!(this.isAndroid()&&e&&t)&&t===e.slice(0,-1)}},p={assign:function(e,t){return t=t||{},(e=e||{}).creditCard=!!t.creditCard,e.creditCardStrictMode=!!t.creditCardStrictMode,e.creditCardType="",e.onCreditCardTypeChanged=t.onCreditCardTypeChanged||function(){},e.phone=!!t.phone,e.phoneRegionCode=t.phoneRegionCode||"AU",e.phoneFormatter={},e.time=!!t.time,e.timePattern=t.timePattern||["h","m","s"],e.timeFormat=t.timeFormat||"24",e.timeFormatter={},e.date=!!t.date,e.datePattern=t.datePattern||["d","m","Y"],e.dateMin=t.dateMin||"",e.dateMax=t.dateMax||"",e.dateFormatter={},e.numeral=!!t.numeral,e.numeralIntegerScale=t.numeralIntegerScale>0?t.numeralIntegerScale:0,e.numeralDecimalScale=t.numeralDecimalScale>=0?t.numeralDecimalScale:2,e.numeralDecimalMark=t.numeralDecimalMark||".",e.numeralThousandsGroupStyle=t.numeralThousandsGroupStyle||"thousand",e.numeralPositiveOnly=!!t.numeralPositiveOnly,e.stripLeadingZeroes=!1!==t.stripLeadingZeroes,e.signBeforePrefix=!!t.signBeforePrefix,e.numericOnly=e.creditCard||e.date||!!t.numericOnly,e.uppercase=!!t.uppercase,e.lowercase=!!t.lowercase,e.prefix=e.creditCard||e.date?"":t.prefix||"",e.noImmediatePrefix=!!t.noImmediatePrefix,e.prefixLength=e.prefix.length,e.rawValueTrimPrefix=!!t.rawValueTrimPrefix,e.copyDelimiter=!!t.copyDelimiter,e.initValue=void 0!==t.initValue&&null!==t.initValue?t.initValue.toString():"",e.delimiter=t.delimiter||""===t.delimiter?t.delimiter:t.date?"/":t.time?":":t.numeral?",":(t.phone," "),e.delimiterLength=e.delimiter.length,e.delimiterLazyShow=!!t.delimiterLazyShow,e.delimiters=t.delimiters||[],e.blocks=t.blocks||[],e.blocksLength=e.blocks.length,e.root="object"==typeof i&&i?i:window,e.document=t.document||e.root.document,e.maxLength=0,e.backspace=!1,e.result="",e.onValueChanged=t.onValueChanged||function(){},e}},g=function(e,t){var i=!1;if("string"==typeof e?(this.element=document.querySelector(e),i=document.querySelectorAll(e).length>1):void 0!==e.length&&e.length>0?(this.element=e[0],i=e.length>1):this.element=e,!this.element)throw new Error("[cleave.js] Please check the element");if(i)try{console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.")}catch(e){}t.initValue=this.element.value,this.properties=g.DefaultProperties.assign({},t),this.init()};g.prototype={init:function(){var e=this.properties;e.numeral||e.phone||e.creditCard||e.time||e.date||0!==e.blocksLength||e.prefix?(e.maxLength=g.Util.getMaxLength(e.blocks),this.isAndroid=g.Util.isAndroid(),this.lastInputValue="",this.onChangeListener=this.onChange.bind(this),this.onKeyDownListener=this.onKeyDown.bind(this),this.onFocusListener=this.onFocus.bind(this),this.onCutListener=this.onCut.bind(this),this.onCopyListener=this.onCopy.bind(this),this.element.addEventListener("input",this.onChangeListener),this.element.addEventListener("keydown",this.onKeyDownListener),this.element.addEventListener("focus",this.onFocusListener),this.element.addEventListener("cut",this.onCutListener),this.element.addEventListener("copy",this.onCopyListener),this.initPhoneFormatter(),this.initDateFormatter(),this.initTimeFormatter(),this.initNumeralFormatter(),(e.initValue||e.prefix&&!e.noImmediatePrefix)&&this.onInput(e.initValue)):this.onInput(e.initValue)},initNumeralFormatter:function(){var e=this.properties;e.numeral&&(e.numeralFormatter=new g.NumeralFormatter(e.numeralDecimalMark,e.numeralIntegerScale,e.numeralDecimalScale,e.numeralThousandsGroupStyle,e.numeralPositiveOnly,e.stripLeadingZeroes,e.prefix,e.signBeforePrefix,e.delimiter))},initTimeFormatter:function(){var e=this.properties;e.time&&(e.timeFormatter=new g.TimeFormatter(e.timePattern,e.timeFormat),e.blocks=e.timeFormatter.getBlocks(),e.blocksLength=e.blocks.length,e.maxLength=g.Util.getMaxLength(e.blocks))},initDateFormatter:function(){var e=this.properties;e.date&&(e.dateFormatter=new g.DateFormatter(e.datePattern,e.dateMin,e.dateMax),e.blocks=e.dateFormatter.getBlocks(),e.blocksLength=e.blocks.length,e.maxLength=g.Util.getMaxLength(e.blocks))},initPhoneFormatter:function(){var e=this.properties;if(e.phone)try{e.phoneFormatter=new g.PhoneFormatter(new e.root.Cleave.AsYouTypeFormatter(e.phoneRegionCode),e.delimiter)}catch(e){throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")}},onKeyDown:function(e){var t=this.properties,i=e.which||e.keyCode,r=g.Util,n=this.element.value;this.hasBackspaceSupport=this.hasBackspaceSupport||8===i,!this.hasBackspaceSupport&&r.isAndroidBackspaceKeydown(this.lastInputValue,n)&&(i=8),this.lastInputValue=n;var a=r.getPostDelimiter(n,t.delimiter,t.delimiters);t.postDelimiterBackspace=!(8!==i||!a)&&a},onChange:function(){this.onInput(this.element.value)},onFocus:function(){var e=this.properties;g.Util.fixPrefixCursor(this.element,e.prefix,e.delimiter,e.delimiters)},onCut:function(e){g.Util.checkFullSelection(this.element.value)&&(this.copyClipboardData(e),this.onInput(""))},onCopy:function(e){g.Util.checkFullSelection(this.element.value)&&this.copyClipboardData(e)},copyClipboardData:function(e){var t=this.properties,i=g.Util,r=this.element.value,n="";n=t.copyDelimiter?r:i.stripDelimiters(r,t.delimiter,t.delimiters);try{e.clipboardData?e.clipboardData.setData("Text",n):window.clipboardData.setData("Text",n),e.preventDefault()}catch(e){}},onInput:function(e){var t=this.properties,i=g.Util,r=i.getPostDelimiter(e,t.delimiter,t.delimiters);return t.numeral||!t.postDelimiterBackspace||r||(e=i.headStr(e,e.length-t.postDelimiterBackspace.length)),t.phone?(!t.prefix||t.noImmediatePrefix&&!e.length?t.result=t.phoneFormatter.format(e):t.result=t.prefix+t.phoneFormatter.format(e).slice(t.prefix.length),void this.updateValueState()):t.numeral?(t.prefix&&t.noImmediatePrefix&&0===e.length?t.result="":t.result=t.numeralFormatter.format(e),void this.updateValueState()):(t.date&&(e=t.dateFormatter.getValidatedDate(e)),t.time&&(e=t.timeFormatter.getValidatedTime(e)),e=i.stripDelimiters(e,t.delimiter,t.delimiters),e=i.getPrefixStrippedValue(e,t.prefix,t.prefixLength,t.result,t.delimiter,t.delimiters,t.noImmediatePrefix),e=t.numericOnly?i.strip(e,/[^\d]/g):e,e=t.uppercase?e.toUpperCase():e,e=t.lowercase?e.toLowerCase():e,!t.prefix||t.noImmediatePrefix&&!e.length||(e=t.prefix+e,0!==t.blocksLength)?(t.creditCard&&this.updateCreditCardPropsByValue(e),e=i.headStr(e,t.maxLength),t.result=i.getFormattedValue(e,t.blocks,t.blocksLength,t.delimiter,t.delimiters,t.delimiterLazyShow),void this.updateValueState()):(t.result=e,void this.updateValueState()))},updateCreditCardPropsByValue:function(e){var t,i=this.properties,r=g.Util;r.headStr(i.result,4)!==r.headStr(e,4)&&(t=g.CreditCardDetector.getInfo(e,i.creditCardStrictMode),i.blocks=t.blocks,i.blocksLength=i.blocks.length,i.maxLength=r.getMaxLength(i.blocks),i.creditCardType!==t.type&&(i.creditCardType=t.type,i.onCreditCardTypeChanged.call(this,i.creditCardType)))},updateValueState:function(){var e=this,t=g.Util,i=e.properties;if(e.element){var r=e.element.selectionEnd,n=e.element.value,a=i.result;r=t.getNextCursorPosition(r,n,a,i.delimiter,i.delimiters),e.isAndroid?window.setTimeout((function(){e.element.value=a,t.setSelection(e.element,r,i.document,!1),e.callOnValueChanged()}),1):(e.element.value=a,t.setSelection(e.element,r,i.document,!1),e.callOnValueChanged())}},callOnValueChanged:function(){var e=this.properties;e.onValueChanged.call(this,{target:{value:e.result,rawValue:this.getRawValue()}})},setPhoneRegionCode:function(e){this.properties.phoneRegionCode=e,this.initPhoneFormatter(),this.onChange()},setRawValue:function(e){var t=this.properties;e=null!=e?e.toString():"",t.numeral&&(e=e.replace(".",t.numeralDecimalMark)),t.postDelimiterBackspace=!1,this.element.value=e,this.onInput(e)},getRawValue:function(){var e=this.properties,t=g.Util,i=this.element.value;return e.rawValueTrimPrefix&&(i=t.getPrefixStrippedValue(i,e.prefix,e.prefixLength,e.result,e.delimiter,e.delimiters)),i=e.numeral?e.numeralFormatter.getRawValue(i):t.stripDelimiters(i,e.delimiter,e.delimiters)},getISOFormatDate:function(){var e=this.properties;return e.date?e.dateFormatter.getISOFormatDate():""},getISOFormatTime:function(){var e=this.properties;return e.time?e.timeFormatter.getISOFormatTime():""},getFormattedValue:function(){return this.element.value},destroy:function(){this.element.removeEventListener("input",this.onChangeListener),this.element.removeEventListener("keydown",this.onKeyDownListener),this.element.removeEventListener("focus",this.onFocusListener),this.element.removeEventListener("cut",this.onCutListener),this.element.removeEventListener("copy",this.onCopyListener)},toString:function(){return"[Cleave Object]"}},g.NumeralFormatter=n,g.DateFormatter=o,g.TimeFormatter=l,g.PhoneFormatter=c,g.CreditCardDetector=d,g.Util=m,g.DefaultProperties=p,("object"==typeof i&&i?i:window).Cleave=g;var f=g;t.default=f}.call(this,i("yLpj"))}}]);