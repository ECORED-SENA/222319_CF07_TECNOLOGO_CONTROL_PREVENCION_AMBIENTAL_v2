(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eaa1fac2","chunk-55d286b8"],{"0d26":function(t,e,a){"use strict";e["a"]={data:()=>({uid:Math.floor(Math.random()*10**10)}),methods:{dialogoMerge(t,e=!1){return t.dialogo?t.dialogo.map((a,s)=>({...a,id:this.uid+s+1,textoIng:e?this.splitPhrase(a.textoIng):a.textoIng,textoEsp:e?this.splitPhrase(a.textoEsp):a.textoEsp,personaje:t.personajes&&t.personajes.find(t=>t.nombre===a.personaje)})):[]},splitPhrase(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},"3b23":function(t,e,a){t.exports=a.p+"img/red-x.76179c7f.svg"},"3bff":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogo"},[a("div",{staticClass:"dialogo__header px-3 px-lg-4 py-2 py-lg-3"},[a("div",{staticClass:"mb-1"},[t._t("nombre-actividad",(function(){return[t._v("Arrastrar y soltar")]}))],2),a("div",{staticClass:"h3 mb-0"},[t._t("titulo-actividad",(function(){return[t._v("Titulo de actividad - Completa la conversación")]}))],2)]),a("div",{staticClass:"px-2 py-3 p-lg-4"},[a("div",{staticClass:"row g-0"},[a("div",{ref:"chat-"+t.uid,staticClass:"col-md-8 dialogo__chat"},t._l(t.dialogoComputed,(function(e,s){return a("div",{staticClass:"row g-0 flex-nowrap dialogo__chat__item mb-3"},[a("div",{staticClass:"col-auto dialogo__chat__item__person"},[a("img",{attrs:{src:e.personaje.img}}),a("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.personaje.nombre)}})]),a("div",{staticClass:"col dialogo__chat__item__message__container"},[a("div",{staticClass:"dialogo__chat__item__message"},[a("div",{staticClass:"row g-0 align-items-center dialogo__chat__item__message__bubble dialogo__chat__item__message__bubble--tail"},[a("div",{staticClass:"col dialogo__chat__item__message__text me-2"},[a("div",{staticClass:"dialogo__chat__item__message__text__eng h5 mb-0"},[t._l(e.textoIng,(function(s,i){return["*"===s?a("div",{key:"phrase-"+e.id+"-"+i,ref:"phrase-"+e.id,refInFor:!0,staticClass:"d-inline dialogo__chat__item__message__text__drop",class:{"is-active":t.dropId===e.id},on:{drop:function(a){return a.preventDefault(),t.onDrop(e.id)},dragenter:function(a){return a.preventDefault(),t.onDragEnter(e.id)},dragleave:function(e){return e.preventDefault(),t.onDragLeave()},dragover:function(t){t.preventDefault()}}},[t.answers[e.id]?a("span",{staticClass:"dialogo__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[e.id].palabra)}}):a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{key:"phrase-"+e.id+"-"+i,domProps:{innerHTML:t._s(s)}})]}))],2),t.translations.includes(e.id)?a("div",{staticClass:"dialogo__chat__item__message__text__esp text-small"},[a("hr",{staticClass:"my-2"}),t._l(e.textoEsp,(function(e){return["*"===e?a("div",{staticClass:"d-inline dialogo__chat__item__message__text__drop"},[a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{domProps:{innerHTML:t._s(e)}})]}))],2):t._e()]),a("div",{staticClass:"col-auto dialogo__chat__item__message__audio"},[a("Audio",{attrs:{audio:e.audio},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}})],1)]),a("div",{staticClass:"d-flex justify-content-end me-3"},[a("button",{staticClass:"dialogo__chat__item__message__translate-btn text-small",on:{click:function(a){return t.toggleTranslate(e.id)}}},[t._v("Ver traducción")])])])]),a("div",{staticClass:"col-1"})])})),0),t._m(0),a("div",{staticClass:"col dialogo__words"},[a("div",{staticClass:"dialogo__words__content"},[a("div",{staticClass:"dialogo__words__content__explanation"},[t._t("descripcion-actividad",(function(){return[t._v("Arrastra y suelta las palabras en la conversación")]}))],2),t.wordsToShow.length?a("div",{staticClass:"dialogo__words__content__words__container mt-md-3 mb-3 mb-md-0"},[t.touchScreen?t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,ref:"word-"+e.id,refInFor:!0,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},domProps:{innerHTML:t._s(e.palabra)},on:{touchstart:function(a){return a.preventDefault(),t.onTouchStart(e.id)},touchmove:function(a){return a.preventDefault(),t.onTouchMove(a,e.id)},touchend:function(a){return a.preventDefault(),t.onTouchEnd(a,e.id)},touchcancel:function(a){return a.preventDefault(),t.onTouchCancel(a,e.id)}}})})):t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},attrs:{draggable:""},domProps:{innerHTML:t._s(e.palabra)},on:{dragstart:function(a){return t.onStartDrag(e.id)},dragend:function(e){return t.onEndDrag()}}})}))],2):t._e()]),a("div",{staticClass:"dialogo__words__footer"},[t.score?a("div",{staticClass:"dialogo__score mt-3"},["approved"===t.score?a("div",{staticClass:"dialogo__score p-3 approved"},[a("div",{staticClass:"row align-items-center"},[t._m(1),a("div",{staticClass:"col"},[t._t("feedback-correcto",(function(){return[t._v("¡Muy bien!")]}))],2)])]):t._e(),"disapproved"===t.score?a("div",{staticClass:"dialogo__score px-3 py-2 disapproved"},[a("div",{staticClass:"row align-items-center"},[t._m(2),a("div",{staticClass:"col"},[t._t("feedback-incorrecto",(function(){return[t._v("Incorrecto")]}))],2)])]):t._e()]):t._e(),Object.values(t.answers).length===t.words.length?a("div",{staticClass:"dialogo__words__footer__actions text-end mt-3"},[null===t.score?a("button",{on:{click:t.onCheck}},[t._v("Comprobar")]):"disapproved"===t.score?a("button",{on:{click:t.reset}},[t._v("Prueba otra vez")]):t._e()]):t._e()])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-md-none"},[a("hr",{staticClass:"mb-3 mt-4"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("div",{staticClass:"dialogo__score__icon"},[s("img",{attrs:{src:a("86bd")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("div",{staticClass:"dialogo__score__icon"},[s("img",{attrs:{src:a("3b23")}})])])}],o=a("b2ea"),r=a("0d26"),n={name:"DialogoActividad",components:{Audio:o["default"]},mixins:[r["a"]],props:{dialogo:{type:Object,default:()=>({})}},data:()=>({uid:Math.floor(Math.random()*10**10),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}),computed:{dialogoComputed(){return this.dialogoMerge(this.dialogo,!0)},words(){return this.shuffle(this.dialogoComputed.map(t=>({palabra:t.palabra,id:t.id})).filter(t=>t.palabra))},answerWordsIds(){return Object.values(this.answers).map(t=>t.dragId)},wordsToShow(){return this.words.filter(t=>!this.answerWordsIds.includes(t.id))}},created(){this.touchScreen="ontouchstart"in document.documentElement},methods:{onStartDrag(t){this.dragId=t},onEndDrag(){this.dragId=null},onDrop(t){this.dragId&&(this.$set(this.answers,t,{dragId:this.dragId,dropId:t,palabra:this.words.find(t=>t.id===this.dragId).palabra}),this.dropId=null)},onDragEnter(t){this.dropId=t},onDragLeave(){this.dropId=null},onTouchStart(t){const e=this.$refs["word-"+t][0];e.classList.add("touch-drag")},onTouchMove(t,e){const a=this.$refs["word-"+e][0],s=a.getBoundingClientRect(),i=t.touches[0];a.style.top=i.clientY-s.height/2+"px",a.style.left=i.clientX-s.width/2+"px"},onTouchEnd(t,e){if(t.changedTouches.length>1)return void this.resetDragElm(e);const a=this.$refs["chat-"+this.uid],s=a.getBoundingClientRect(),i=t.changedTouches[0],o=i.clientX>s.x&&i.clientX<s.x+s.width,r=i.clientY>s.y&&i.clientY<s.y+s.height;if(!o||!r)return void this.resetDragElm(e);let n;const d=this.words.some(t=>{const e=this.$refs["phrase-"+t.id][0],a=e.getBoundingClientRect(),s=25,o=i.clientX>a.x-s&&i.clientX<a.x+a.width+s,r=i.clientY>a.y-s&&i.clientY<a.y+a.height+s;return o&&r&&(n=t.id),o&&r});d&&this.$set(this.answers,n,{dragId:e,dropId:n,palabra:this.words.find(t=>t.id===e).palabra}),this.resetDragElm(e)},onTouchCancel(t){this.resetDragElm(t)},resetDragElm(t){const e=this.$refs["word-"+t][0];e.classList.remove("touch-drag")},toggleTranslate(t){this.translations.includes(t)?this.translations=this.translations.filter(e=>e!==t):this.translations.push(t)},onCheck(){const t=Object.values(this.answers).every(t=>t.dragId===t.dropId);this.score=t?"approved":"disapproved"},reset(){this.answers={},this.score=null},shuffle(t){for(let e=t.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t}}},d=n,l=a("2877"),c=Object(l["a"])(d,s,i,!1,null,null,null);e["default"]=c.exports},"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"86bd":function(t,e,a){t.exports=a.p+"img/green-check.f4a3fa01.svg"},"8fb3":function(t,e,a){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},b2ea:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?s("button",{staticClass:"audio__btn",on:{click:t.play}},[s("img",{attrs:{src:a("5ccd")}})]):s("button",{staticClass:"audio__btn",on:{click:t.pause}},[s("img",{attrs:{src:a("f034")}})]):s("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},i=[],o=a("8fb3"),r={name:"Audio",mixins:[o["a"]]},n=r,d=a("2877"),l=Object(d["a"])(n,s,i,!1,null,null,null);e["default"]=l.exports},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-eaa1fac2.c03abc36.js.map