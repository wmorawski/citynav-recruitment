(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jD90:function(t,e,i){"use strict";i.r(e);var r=i("PCNd"),n=i("ofXK"),s=i("fXoL"),o=i("AytR"),a=i("tk/3");let c=(()=>{class t{constructor(t){this.http=t}getBikeStations(){const t=(new a.c).set("mtype","pub_transport").set("co","stacje_rowerowe");return this.http.get(o.a.poznanApi,{params:t})}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(a.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=i("tyNb"),h=i("8LU1"),d=i("XNiG"),u=i("LRne"),f=i("HDdC"),p=i("DH7j"),_=i("n6bG"),g=i("lJxs");function m(t,e,i,r){return Object(_.a)(i)&&(r=i,i=void 0),r?m(t,e,i).pipe(Object(g.a)(t=>Object(p.a)(t)?r(...t):r(t))):new f.a(r=>{!function t(e,i,r,n,s){let o;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){const t=e;e.addEventListener(i,r,s),o=()=>t.removeEventListener(i,r,s)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){const t=e;e.on(i,r),o=()=>t.off(i,r)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){const t=e;e.addListener(i,r),o=()=>t.removeListener(i,r)}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(let o=0,a=e.length;o<a;o++)t(e[o],i,r,n,s)}n.add(o)}(t,e,(function(t){r.next(arguments.length>1?Array.prototype.slice.call(arguments):t)}),r,i)})}var b=i("VRyK"),w=i("3N8a");class v extends w.a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t.scheduled||(t.scheduled=requestAnimationFrame(()=>t.flush(null))))}recycleAsyncId(t,e,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(t,e,i);0===t.actions.length&&(cancelAnimationFrame(e),t.scheduled=void 0)}}var S=i("IjjT");class x extends S.a{flush(t){this.active=!0,this.scheduled=void 0;const{actions:e}=this;let i,r=-1,n=e.length;t=t||e.shift();do{if(i=t.execute(t.state,t.delay))break}while(++r<n&&(t=e.shift()));if(this.active=!1,i){for(;++r<n&&(t=e.shift());)t.unsubscribe();throw i}}}const C=new x(v);let k=1;const y=(()=>Promise.resolve())(),O={};function z(t){return t in O&&(delete O[t],!0)}const R={setImmediate(t){const e=k++;return O[e]=!0,y.then(()=>z(e)&&t()),e},clearImmediate(t){z(t)}};class V extends w.a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t.scheduled||(t.scheduled=R.setImmediate(t.flush.bind(t,null))))}recycleAsyncId(t,e,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(t,e,i);0===t.actions.length&&(R.clearImmediate(e),t.scheduled=void 0)}}class I extends S.a{flush(t){this.active=!0,this.scheduled=void 0;const{actions:e}=this;let i,r=-1,n=e.length;t=t||e.shift();do{if(i=t.execute(t.state,t.delay))break}while(++r<n&&(t=e.shift()));if(this.active=!1,i){for(;++r<n&&(t=e.shift());)t.unsubscribe();throw i}}}const T=new I(V);var L=i("quSY");function N(t){return!!t&&(t instanceof f.a||"function"==typeof t.lift&&"function"==typeof t.subscribe)}var P=i("7o/Q");class E{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new B(t,this.compare,this.keySelector))}}class B extends P.a{constructor(t,e,i){super(t),this.keySelector=i,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:i}=this;e=i?i(t):t}catch(r){return this.destination.error(r)}let i=!1;if(this.hasKey)try{const{compare:t}=this;i=t(this.key,e)}catch(r){return this.destination.error(r)}else this.hasKey=!0;i||(this.key=e,this.destination.next(t))}}var j=i("D0XW"),F=i("l7GE"),D=i("ZUHj");class A{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new W(t,this.durationSelector))}}class W extends F.a{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1}_next(t){if(this.value=t,this.hasValue=!0,!this.throttled){let i;try{const{durationSelector:e}=this;i=e(t)}catch(e){return this.destination.error(e)}const r=Object(D.a)(this,i);!r||r.closed?this.clearThrottle():this.add(this.throttled=r)}}clearThrottle(){const{value:t,hasValue:e,throttled:i}=this;i&&(this.remove(i),this.throttled=null,i.unsubscribe()),e&&(this.value=null,this.hasValue=!1,this.destination.next(t))}notifyNext(t,e,i,r){this.clearThrottle()}notifyComplete(){this.clearThrottle()}}function M(t){return!Object(p.a)(t)&&t-parseFloat(t)+1>=0}var G=i("z+Ro");function H(t){const{index:e,period:i,subscriber:r}=t;if(r.next(e),!r.closed){if(-1===i)return r.complete();t.index=e+1,this.schedule(t,i)}}function Y(t,e=j.a){return i=()=>function(t=0,e,i){let r=-1;return M(e)?r=Number(e)<1?1:Number(e):Object(G.a)(e)&&(i=e),Object(G.a)(i)||(i=j.a),new f.a(e=>{const n=M(t)?t:+t-i.now();return i.schedule(H,n,{index:0,period:r,subscriber:e})})}(t,e),function(t){return t.lift(new A(i))};var i}var Z=i("pLZG");function q(t){return e=>e.lift(new $(t))}class ${constructor(t){this.notifier=t}call(t,e){const i=new U(t),r=Object(D.a)(i,this.notifier);return r&&!i.seenValue?(i.add(r),e.subscribe(i)):i}}class U extends F.a{constructor(t){super(t),this.seenValue=!1}notifyNext(t,e,i,r,n){this.seenValue=!0,this.complete()}notifyComplete(){}}var X=i("JX91");class J{call(t,e){return e.subscribe(new K(t))}}class K extends P.a{constructor(t){super(t),this.hasPrev=!1}_next(t){let e;this.hasPrev?e=[this.prev,t]:this.hasPrev=!0,this.prev=t,e&&this.destination.next(e)}}var Q=i("eIep");class tt extends w.a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}schedule(t,e=0){return e>0?super.schedule(t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}execute(t,e){return e>0||this.closed?super.execute(t,e):this._execute(t,e)}requestAsyncId(t,e,i=0){return null!==i&&i>0||null===i&&this.delay>0?super.requestAsyncId(t,e,i):t.flush(this)}}class et extends S.a{}const it=new et(tt);var rt=i("EY2u"),nt=i("z6cu");let st=(()=>{class t{constructor(t,e,i){this.kind=t,this.value=e,this.error=i,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,i){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}}accept(t,e,i){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,i)}toObservable(){switch(this.kind){case"N":return Object(u.a)(this.value);case"E":return Object(nt.a)(this.error);case"C":return Object(rt.b)()}throw new Error("unexpected notification kind value")}static createNext(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}}return t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t})();class ot extends P.a{constructor(t,e,i=0){super(t),this.scheduler=e,this.delay=i}static dispatch(t){const{notification:e,destination:i}=t;e.observe(i),this.unsubscribe()}scheduleMessage(t){this.destination.add(this.scheduler.schedule(ot.dispatch,this.delay,new at(t,this.destination)))}_next(t){this.scheduleMessage(st.createNext(t))}_error(t){this.scheduleMessage(st.createError(t)),this.unsubscribe()}_complete(){this.scheduleMessage(st.createComplete()),this.unsubscribe()}}class at{constructor(t,e){this.notification=t,this.destination=e}}var ct=i("9ppp"),lt=i("Ylt2");class ht extends d.a{constructor(t=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,i){super(),this.scheduler=i,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=t<1?1:t,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(t){const e=this._events;e.push(t),e.length>this._bufferSize&&e.shift(),super.next(t)}nextTimeWindow(t){this._events.push(new dt(this._getNow(),t)),this._trimBufferThenGetEvents(),super.next(t)}_subscribe(t){const e=this._infiniteTimeWindow,i=e?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,n=i.length;let s;if(this.closed)throw new ct.a;if(this.isStopped||this.hasError?s=L.a.EMPTY:(this.observers.push(t),s=new lt.a(this,t)),r&&t.add(t=new ot(t,r)),e)for(let o=0;o<n&&!t.closed;o++)t.next(i[o]);else for(let o=0;o<n&&!t.closed;o++)t.next(i[o].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),s}_getNow(){return(this.scheduler||it).now()}_trimBufferThenGetEvents(){const t=this._getNow(),e=this._bufferSize,i=this._windowTime,r=this._events,n=r.length;let s=0;for(;s<n&&!(t-r[s].time<i);)s++;return n>e&&(s=Math.max(s,n-e)),s>0&&r.splice(0,s),r}}class dt{constructor(t,e){this.time=t,this.value=e}}var ut=i("nLfN"),ft=i("cH1L");class pt extends class{}{constructor(t){super(),this._data=t}connect(){return N(this._data)?this._data:Object(u.a)(this._data)}disconnect(){}}const _t=["contentWrapper"],gt=["*"],mt=new s.q("VIRTUAL_SCROLL_STRATEGY");class bt{constructor(t,e,i){this._scrolledIndexChange=new d.a,this.scrolledIndexChange=this._scrolledIndexChange.pipe(t=>t.lift(new E(void 0,void 0))),this._viewport=null,this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i}attach(t){this._viewport=t,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(t,e,i){if(i<e)throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(t,e){this._viewport&&this._viewport.scrollToOffset(t*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const t=this._viewport.measureScrollOffset(),e=t/this._itemSize,i=this._viewport.getRenderedRange(),r={start:i.start,end:i.end},n=this._viewport.getViewportSize(),s=this._viewport.getDataLength(),o=t-r.start*this._itemSize;if(o<this._minBufferPx&&0!=r.start){const t=Math.ceil((this._maxBufferPx-o)/this._itemSize);r.start=Math.max(0,r.start-t),r.end=Math.min(s,Math.ceil(e+(n+this._minBufferPx)/this._itemSize))}else{const i=r.end*this._itemSize-(t+n);if(i<this._minBufferPx&&r.end!=s){const t=Math.ceil((this._maxBufferPx-i)/this._itemSize);t>0&&(r.end=Math.min(s,r.end+t),r.start=Math.max(0,Math.floor(e-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(r),this._viewport.setRenderedContentOffset(this._itemSize*r.start),this._scrolledIndexChange.next(Math.floor(e))}}function wt(t){return t._scrollStrategy}let vt=(()=>{class t{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new bt(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=Object(h.c)(t)}get minBufferPx(){return this._minBufferPx}set minBufferPx(t){this._minBufferPx=Object(h.c)(t)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(t){this._maxBufferPx=Object(h.c)(t)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Gb({type:t,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[s.Ab([{provide:mt,useFactory:wt,deps:[Object(s.T)(()=>t)]}]),s.zb()]}),t})(),St=(()=>{class t{constructor(t,e){this._ngZone=t,this._platform=e,this._scrolled=new d.a,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){const e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=20){return this._platform.isBrowser?new f.a(e=>{this._globalSubscription||this._addGlobalListener();const i=t>0?this._scrolled.pipe(Y(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Object(u.a)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){const i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Object(Z.a)(t=>!t||i.indexOf(t)>-1))}getAncestorScrollContainers(t){const e=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let i=e.nativeElement,r=t.getElementRef().nativeElement;do{if(i==r)return!0}while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>m(window.document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(s.z),s.Sb(ut.a))},t.\u0275prov=Object(s.Hb)({factory:function(){return new t(Object(s.Sb)(s.z),Object(s.Sb)(ut.a))},token:t,providedIn:"root"}),t})(),xt=(()=>{class t{constructor(t,e,i,r){this.elementRef=t,this.scrollDispatcher=e,this.ngZone=i,this.dir=r,this._destroyed=new d.a,this._elementScrolled=new f.a(t=>this.ngZone.runOutsideAngular(()=>m(this.elementRef.nativeElement,"scroll").pipe(q(this._destroyed)).subscribe(t)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){const e=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==t.left&&(t.left=i?t.end:t.start),null==t.right&&(t.right=i?t.start:t.end),null!=t.bottom&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),i&&0!=Object(ut.c)()?(null!=t.left&&(t.right=e.scrollWidth-e.clientWidth-t.left),2==Object(ut.c)()?t.left=t.right:1==Object(ut.c)()&&(t.left=t.right?-t.right:t.right)):null!=t.right&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){const e=this.elementRef.nativeElement;Object(ut.e)()?e.scrollTo(t):(null!=t.top&&(e.scrollTop=t.top),null!=t.left&&(e.scrollLeft=t.left))}measureScrollOffset(t){const e=this.elementRef.nativeElement;if("top"==t)return e.scrollTop;if("bottom"==t)return e.scrollHeight-e.clientHeight-e.scrollTop;const i=this.dir&&"rtl"==this.dir.value;return"start"==t?t=i?"right":"left":"end"==t&&(t=i?"left":"right"),i&&2==Object(ut.c)()?"left"==t?e.scrollWidth-e.clientWidth-e.scrollLeft:e.scrollLeft:i&&1==Object(ut.c)()?"left"==t?e.scrollLeft+e.scrollWidth-e.clientWidth:-e.scrollLeft:"left"==t?e.scrollLeft:e.scrollWidth-e.clientWidth-e.scrollLeft}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(St),s.Lb(s.z),s.Lb(ft.b,8))},t.\u0275dir=s.Gb({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),t})(),Ct=(()=>{class t{constructor(t,e){this._platform=t,e.runOutsideAngular(()=>{this._change=t.isBrowser?Object(b.a)(m(window,"resize"),m(window,"orientationchange")):Object(u.a)(),this._invalidateCache=this.change().subscribe(()=>this._updateViewportSize())})}ngOnDestroy(){this._invalidateCache.unsubscribe()}getViewportSize(){this._viewportSize||this._updateViewportSize();const t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){const t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const t=document.documentElement,e=t.getBoundingClientRect();return{top:-e.top||document.body.scrollTop||window.scrollY||t.scrollTop||0,left:-e.left||document.body.scrollLeft||window.scrollX||t.scrollLeft||0}}change(t=20){return t>0?this._change.pipe(Y(t)):this._change}_updateViewportSize(){this._viewportSize=this._platform.isBrowser?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0}}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(ut.a),s.Sb(s.z))},t.\u0275prov=Object(s.Hb)({factory:function(){return new t(Object(s.Sb)(ut.a),Object(s.Sb)(s.z))},token:t,providedIn:"root"}),t})();const kt="undefined"!=typeof requestAnimationFrame?C:T;let yt=(()=>{class t extends xt{constructor(t,e,i,r,n,s,o){if(super(t,s,i,n),this.elementRef=t,this._changeDetectorRef=e,this._scrollStrategy=r,this._detachedSubject=new d.a,this._renderedRangeSubject=new d.a,this._orientation="vertical",this.scrolledIndexChange=new f.a(t=>this._scrollStrategy.scrolledIndexChange.subscribe(e=>Promise.resolve().then(()=>this.ngZone.run(()=>t.next(e))))),this.renderedRangeStream=this._renderedRangeSubject.asObservable(),this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=L.a.EMPTY,!r)throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');o&&(this._viewportChanges=o.change().subscribe(()=>{this.checkViewportSize()}))}get orientation(){return this._orientation}set orientation(t){this._orientation!==t&&(this._orientation=t,this._calculateSpacerSize())}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe(Object(X.a)(null),Y(0,kt)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(t){if(this._forOf)throw Error("CdkVirtualScrollViewport is already attached.");this.ngZone.runOutsideAngular(()=>{this._forOf=t,this._forOf.dataStream.pipe(q(this._detachedSubject)).subscribe(t=>{const e=t.length;e!==this._dataLength&&(this._dataLength=e,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(t){this._totalContentSize!==t&&(this._totalContentSize=t,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(t){var e,i;((e=this._renderedRange).start!=(i=t).start||e.end!=i.end)&&(this._renderedRangeSubject.next(this._renderedRange=t),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(t,e="to-start"){const i="horizontal"==this.orientation,r=i?"X":"Y";let n=`translate${r}(${Number((i&&this.dir&&"rtl"==this.dir.value?-1:1)*t)}px)`;this._renderedContentOffset=t,"to-end"===e&&(n+=` translate${r}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=n&&(this._renderedContentTransform=n,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(t,e="auto"){const i={behavior:e};"horizontal"===this.orientation?i.start=t:i.top=t,this.scrollTo(i)}scrollToIndex(t,e="auto"){this._scrollStrategy.scrollToIndex(t,e)}measureScrollOffset(t){return super.measureScrollOffset(t||("horizontal"===this.orientation?"start":"top"))}measureRenderedContentSize(){const t=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?t.offsetWidth:t.offsetHeight}measureRangeSize(t){return this._forOf?this._forOf.measureRangeSize(t,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const t=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?t.clientWidth:t.clientHeight}_markChangeDetectionNeeded(t){t&&this._runAfterChangeDetection.push(t),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const t=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const e of t)e()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(s.h),s.Lb(s.z),s.Lb(mt,8),s.Lb(ft.b,8),s.Lb(St),s.Lb(Ct,8))},t.\u0275cmp=s.Fb({type:t,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,e){var i;1&t&&s.jc(_t,!0),2&t&&s.fc(i=s.Xb())&&(e._contentWrapper=i.first)},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,e){2&t&&s.Db("cdk-virtual-scroll-orientation-horizontal","horizontal"===e.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==e.orientation)},inputs:{orientation:"orientation"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[s.Ab([{provide:xt,useExisting:t}]),s.yb],ngContentSelectors:gt,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,e){1&t&&(s.cc(),s.Ob(0,"div",0,1),s.bc(2),s.Nb(),s.Mb(3,"div",2)),2&t&&(s.Bb(3),s.kc("width",e._totalContentWidth)("height",e._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0}),t})();function Ot(t,e){if(!e.getBoundingClientRect)return 0;const i=e.getBoundingClientRect();return"horizontal"==t?i.width:i.height}let zt=(()=>{class t{constructor(t,e,i,r,n){this._viewContainerRef=t,this._template=e,this._differs=i,this._viewport=r,this.viewChange=new d.a,this._dataSourceChanges=new d.a,this.cdkVirtualForTemplateCacheSize=20,this.dataStream=this._dataSourceChanges.pipe(Object(X.a)(null),t=>t.lift(new J),Object(Q.a)(([t,e])=>this._changeDataSource(t,e)),function(t,e,i){let r;return r={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},t=>t.lift(function({bufferSize:t=Number.POSITIVE_INFINITY,windowTime:e=Number.POSITIVE_INFINITY,refCount:i,scheduler:r}){let n,s,o=0,a=!1,c=!1;return function(l){o++,n&&!a||(a=!1,n=new ht(t,e,r),s=l.subscribe({next(t){n.next(t)},error(t){a=!0,n.error(t)},complete(){c=!0,s=void 0,n.complete()}}));const h=n.subscribe(this);this.add(()=>{o--,h.unsubscribe(),s&&!c&&i&&0===o&&(s.unsubscribe(),s=void 0,n=void 0)})}}(r))}()),this._differ=null,this._templateCache=[],this._needsUpdate=!1,this._destroyed=new d.a,this.dataStream.subscribe(t=>{this._data=t,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(q(this._destroyed)).subscribe(t=>{this._renderedRange=t,n.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(t){this._cdkVirtualForOf=t,function(t){return t&&"function"==typeof t.connect}(t)?this._dataSourceChanges.next(t):this._dataSourceChanges.next(new pt(N(t)?t:Array.prototype.slice.call(t||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(t){this._needsUpdate=!0,this._cdkVirtualForTrackBy=t?(e,i)=>t(e+(this._renderedRange?this._renderedRange.start:0),i):void 0}set cdkVirtualForTemplate(t){t&&(this._needsUpdate=!0,this._template=t)}measureRangeSize(t,e){if(t.start>=t.end)return 0;if(t.start<this._renderedRange.start||t.end>this._renderedRange.end)throw Error("Error: attempted to measure an item that isn't rendered.");const i=t.start-this._renderedRange.start;let r=0,n=t.end-t.start;for(;n--;){const t=this._viewContainerRef.get(n+i);let s=t?t.rootNodes.length:0;for(;s--;)r+=Ot(e,t.rootNodes[s])}return r}ngDoCheck(){if(this._differ&&this._needsUpdate){const t=this._differ.diff(this._renderedItems);t?this._applyChanges(t):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete();for(let t of this._templateCache)t.destroy()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy)),this._needsUpdate=!0)}_changeDataSource(t,e){return t&&t.disconnect(this),this._needsUpdate=!0,e?e.connect(this):Object(u.a)()}_updateContext(){const t=this._data.length;let e=this._viewContainerRef.length;for(;e--;){let i=this._viewContainerRef.get(e);i.context.index=this._renderedRange.start+e,i.context.count=t,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(t){t.forEachOperation((t,e,i)=>{if(null==t.previousIndex)this._insertViewForNewItem(i).context.$implicit=t.item;else if(null==i)this._cacheView(this._detachView(e));else{const r=this._viewContainerRef.get(e);this._viewContainerRef.move(r,i),r.context.$implicit=t.item}}),t.forEachIdentityChange(t=>{this._viewContainerRef.get(t.currentIndex).context.$implicit=t.item});const e=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const t=this._viewContainerRef.get(i);t.context.index=this._renderedRange.start+i,t.context.count=e,this._updateComputedContextProperties(t.context)}}_cacheView(t){if(this._templateCache.length<this.cdkVirtualForTemplateCacheSize)this._templateCache.push(t);else{const e=this._viewContainerRef.indexOf(t);-1===e?t.destroy():this._viewContainerRef.remove(e)}}_insertViewForNewItem(t){return this._insertViewFromCache(t)||this._createEmbeddedViewAt(t)}_updateComputedContextProperties(t){t.first=0===t.index,t.last=t.index===t.count-1,t.even=t.index%2==0,t.odd=!t.even}_createEmbeddedViewAt(t){return this._viewContainerRef.createEmbeddedView(this._template,{$implicit:null,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},t)}_insertViewFromCache(t){const e=this._templateCache.pop();return e&&this._viewContainerRef.insert(e,t),e||null}_detachView(t){return this._viewContainerRef.detach(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.O),s.Lb(s.L),s.Lb(s.s),s.Lb(yt,4),s.Lb(s.z))},t.\u0275dir=s.Gb({type:t,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize",cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate"}}),t})(),Rt=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[ft.a,ut.b],ft.a]}),t})();var Vt=i("Wp6s"),It=i("G7vZ");function Tt(t,e){if(1&t){const t=s.Pb();s.Ob(0,"mat-card",2),s.Wb("click",(function(){s.gc(t);const i=e.$implicit;return s.Yb().navigateWithData(i)})),s.Mb(1,"app-bike-station-details",3),s.Nb()}if(2&t){const t=e.$implicit;s.Bb(1),s.dc("bikeStation",t)}}const Lt=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,e){this.bikeService=t,this.router=e}ngOnInit(){this.bikeStations=this.bikeService.getBikeStations()}navigateWithData(t){this.router.navigate(["/details"],{state:Object.assign({},t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(c),s.Lb(l.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-list"]],decls:3,vars:3,consts:[["itemSize","153",1,"virtual-scroll"],["class","bike-card",3,"click",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"bike-card",3,"click"],[3,"bikeStation"]],template:function(t,e){if(1&t&&(s.Ob(0,"cdk-virtual-scroll-viewport",0),s.lc(1,Tt,2,1,"mat-card",1),s.Zb(2,"async"),s.Nb()),2&t){var i;const t=null==(i=s.ac(2,1,e.bikeStations))?null:i.features;s.Bb(1),s.dc("cdkVirtualForOf",t)}},directives:[yt,vt,zt,Vt.a,It.a],pipes:[n.b],styles:[".bike-card[_ngcontent-%COMP%]{margin:10px 0;box-shadow:0 8px 16px rgba(0,0,0,.05),0 1px 2px rgba(0,0,0,.04);-webkit-transition:box-shadow .3s ease-in-out;transition:box-shadow .3s ease-in-out}.bike-card[_ngcontent-%COMP%]:hover{box-shadow:0 10px 20px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.08)}.virtual-scroll[_ngcontent-%COMP%]{height:calc(100vh - 64px)}@media (max-width:599px){.virtual-scroll[_ngcontent-%COMP%]{height:calc(100vh - 56px)}}"]}),t})()}];let Nt=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[l.c.forChild(Lt)],l.c]}),t})();var Pt=i("NFeN");i.d(e,"ListModule",(function(){return Et}));let Et=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[n.c,Nt,r.a,Vt.c,Pt.b,Rt]]}),t})()}}]);