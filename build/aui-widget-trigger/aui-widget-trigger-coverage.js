if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-widget-trigger/aui-widget-trigger.js']) {
   __coverage__['build/aui-widget-trigger/aui-widget-trigger.js'] = {"path":"build/aui-widget-trigger/aui-widget-trigger.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}},"2":{"name":"WidgetTrigger","line":13,"loc":{"start":{"line":13,"column":0},"end":{"line":13,"column":25}}},"3":{"name":"(anonymous_3)","line":102,"loc":{"start":{"line":102,"column":17},"end":{"line":102,"column":28}}},"4":{"name":"(anonymous_4)","line":116,"loc":{"start":{"line":116,"column":16},"end":{"line":116,"column":27}}},"5":{"name":"(anonymous_5)","line":129,"loc":{"start":{"line":129,"column":22},"end":{"line":129,"column":33}}},"6":{"name":"(anonymous_6)","line":142,"loc":{"start":{"line":142,"column":25},"end":{"line":142,"column":41}}},"7":{"name":"(anonymous_7)","line":155,"loc":{"start":{"line":155,"column":19},"end":{"line":155,"column":33}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":198,"column":50}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":18}},"3":{"start":{"line":13,"column":0},"end":{"line":13,"column":27}},"4":{"start":{"line":23,"column":0},"end":{"line":91,"column":2}},"5":{"start":{"line":93,"column":0},"end":{"line":193,"column":3}},"6":{"start":{"line":103,"column":8},"end":{"line":103,"column":28}},"7":{"start":{"line":105,"column":8},"end":{"line":105,"column":65}},"8":{"start":{"line":107,"column":8},"end":{"line":107,"column":70}},"9":{"start":{"line":117,"column":8},"end":{"line":117,"column":28}},"10":{"start":{"line":119,"column":8},"end":{"line":119,"column":68}},"11":{"start":{"line":130,"column":8},"end":{"line":130,"column":28}},"12":{"start":{"line":132,"column":8},"end":{"line":132,"column":56}},"13":{"start":{"line":143,"column":8},"end":{"line":143,"column":28}},"14":{"start":{"line":145,"column":8},"end":{"line":145,"column":45}},"15":{"start":{"line":156,"column":8},"end":{"line":163,"column":28}},"16":{"start":{"line":165,"column":8},"end":{"line":165,"column":68}},"17":{"start":{"line":167,"column":8},"end":{"line":191,"column":9}},"18":{"start":{"line":168,"column":12},"end":{"line":168,"column":62}},"19":{"start":{"line":170,"column":12},"end":{"line":170,"column":64}},"20":{"start":{"line":171,"column":12},"end":{"line":171,"column":64}},"21":{"start":{"line":172,"column":12},"end":{"line":172,"column":68}},"22":{"start":{"line":173,"column":12},"end":{"line":173,"column":58}},"23":{"start":{"line":174,"column":12},"end":{"line":174,"column":58}},"24":{"start":{"line":175,"column":12},"end":{"line":175,"column":62}},"25":{"start":{"line":177,"column":12},"end":{"line":180,"column":13}},"26":{"start":{"line":178,"column":16},"end":{"line":179,"column":105}},"27":{"start":{"line":182,"column":12},"end":{"line":185,"column":13}},"28":{"start":{"line":183,"column":16},"end":{"line":184,"column":105}},"29":{"start":{"line":187,"column":12},"end":{"line":190,"column":13}},"30":{"start":{"line":188,"column":16},"end":{"line":189,"column":109}},"31":{"start":{"line":195,"column":0},"end":{"line":195,"column":32}}},"branchMap":{"1":{"line":167,"type":"if","locations":[{"start":{"line":167,"column":8},"end":{"line":167,"column":8}},{"start":{"line":167,"column":8},"end":{"line":167,"column":8}}]},"2":{"line":167,"type":"binary-expr","locations":[{"start":{"line":167,"column":12},"end":{"line":167,"column":15}},{"start":{"line":167,"column":19},"end":{"line":167,"column":48}}]},"3":{"line":177,"type":"if","locations":[{"start":{"line":177,"column":12},"end":{"line":177,"column":12}},{"start":{"line":177,"column":12},"end":{"line":177,"column":12}}]},"4":{"line":182,"type":"if","locations":[{"start":{"line":182,"column":12},"end":{"line":182,"column":12}},{"start":{"line":182,"column":12},"end":{"line":182,"column":12}}]},"5":{"line":187,"type":"if","locations":[{"start":{"line":187,"column":12},"end":{"line":187,"column":12}},{"start":{"line":187,"column":12},"end":{"line":187,"column":12}}]}},"code":["(function () { YUI.add('aui-widget-trigger', function (A, NAME) {","","var Lang = A.Lang;","","/**"," * Widget extension, which can be used to add trigger support to the"," * base Widget class, through the [Base.build](Base.html#method_build) method."," *"," * @class A.WidgetTrigger"," * @param {Object} The user configuration object"," */","","function WidgetTrigger() {}","","/**"," * Static property used to define the default attribute"," * configuration."," *"," * @property ATTRS"," * @type Object"," * @static"," */","WidgetTrigger.ATTRS = {","    /**","     * Determine if the Toggler should bind DOM events or not.","     *","     * @attribute bindDOMEvents","     * @default true","     * @type Boolean","     * @writeOnce","     */","    bindDOMEvents: {","        validator: Lang.isBoolean,","        value: true,","        writeOnce: true","    },","","    /**","     * Trigger node to change widget visibility state.","     *","     * @attribute trigger","     */","    trigger: {","        setter: A.one","    },","","    /**","     * DOM event to hide the tooltip.","     *","     * @attribute triggerHideEvent","     * @type String","     */","    triggerHideEvent: {","        value: null","    },","","    /**","     * DOM event to show the tooltip.","     *","     * @attribute triggerShowEvent","     * @type String","     */","    triggerShowEvent: {","        value: null","    },","","    triggerShowFn: {","        validator: Lang.isString,","        value: 'show'","    },","","    triggerHideFn: {","        validator: Lang.isString,","        value: 'hide'","    },","","    triggerToggleFn: {","        validator: Lang.isString,","        value: 'toggle'","    },","","    /**","     * DOM event to toggle the tooltip.","     *","     * @attribute triggerToggleEvent","     * @type String","     */","    triggerToggleEvent: {","        value: null","    }","};","","A.mix(WidgetTrigger.prototype, {","    _triggerEventHandles: null,","","    /**","     * Construction logic executed during WidgetTrigger","     * instantiation. Lifecycle.","     *","     * @method initializer","     */","    initializer: function() {","        var instance = this;","","        A.after(instance._afterRenderUIWT, instance, 'renderUI');","","        instance.after('triggerChange', instance._afterTriggerChange);","    },","","    /**","     * Destructor lifecycle implementation for the `WidgetTrigger` class.","     *","     * @method destructor","     * @protected","     */","    destructor: function() {","        var instance = this;","","        (new A.EventHandle(instance._triggerEventHandles)).detach();","    },","","    /**","     * Fire after `renderUI`.","     *","     * @method _afterRenderUIWT","     * @param event","     * @protected","     */","    _afterRenderUIWT: function() {","        var instance = this;","","        instance._uiSetTrigger(instance.get('trigger'));","    },","","    /**","     * Fire after `trigger` changes.","     *","     * @method _afterTriggerChange","     * @param event","     * @protected","     */","    _afterTriggerChange: function(event) {","        var instance = this;","","        instance._uiSetTrigger(event.newVal);","    },","","    /**","     * Set the `trigger` UI.","     *","     * @method _uiSetTrigger","     * @param val","     * @protected","     */","    _uiSetTrigger: function(val) {","        var instance = this,","            eventHandles,","            triggerHideEvent,","            triggerShowEvent,","            triggerToggleEvent,","            triggerHideFn,","            triggerShowFn,","            triggerToggleFn;","","        (new A.EventHandle(instance._triggerEventHandles)).detach();","","        if (val && instance.get('bindDOMEvents')) {","            eventHandles = instance._triggerEventHandles = [];","","            triggerHideEvent = instance.get('triggerHideEvent');","            triggerShowEvent = instance.get('triggerShowEvent');","            triggerToggleEvent = instance.get('triggerToggleEvent');","            triggerHideFn = instance.get('triggerHideFn');","            triggerShowFn = instance.get('triggerShowFn');","            triggerToggleFn = instance.get('triggerToggleFn');","","            if (triggerHideEvent) {","                eventHandles.push(","                    val.on(instance.get('triggerHideEvent'), A.bind(instance[triggerHideFn], instance)));","            }","","            if (triggerShowEvent) {","                eventHandles.push(","                    val.on(instance.get('triggerShowEvent'), A.bind(instance[triggerShowFn], instance)));","            }","","            if (triggerToggleEvent) {","                eventHandles.push(","                    val.on(instance.get('triggerToggleEvent'), A.bind(instance[triggerToggleFn], instance)));","            }","        }","    }","});","","A.WidgetTrigger = WidgetTrigger;","","","}, '3.1.0-deprecated.28', {\"requires\": [\"node\"]});","","}());"]};
}
var __cov_r8K8HeYGqKO397ZHtHRG_Q = __coverage__['build/aui-widget-trigger/aui-widget-trigger.js'];
__cov_r8K8HeYGqKO397ZHtHRG_Q.s['1']++;YUI.add('aui-widget-trigger',function(A,NAME){__cov_r8K8HeYGqKO397ZHtHRG_Q.f['1']++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['2']++;var Lang=A.Lang;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['3']++;function WidgetTrigger(){__cov_r8K8HeYGqKO397ZHtHRG_Q.f['2']++;}__cov_r8K8HeYGqKO397ZHtHRG_Q.s['4']++;WidgetTrigger.ATTRS={bindDOMEvents:{validator:Lang.isBoolean,value:true,writeOnce:true},trigger:{setter:A.one},triggerHideEvent:{value:null},triggerShowEvent:{value:null},triggerShowFn:{validator:Lang.isString,value:'show'},triggerHideFn:{validator:Lang.isString,value:'hide'},triggerToggleFn:{validator:Lang.isString,value:'toggle'},triggerToggleEvent:{value:null}};__cov_r8K8HeYGqKO397ZHtHRG_Q.s['5']++;A.mix(WidgetTrigger.prototype,{_triggerEventHandles:null,initializer:function(){__cov_r8K8HeYGqKO397ZHtHRG_Q.f['3']++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['6']++;var instance=this;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['7']++;A.after(instance._afterRenderUIWT,instance,'renderUI');__cov_r8K8HeYGqKO397ZHtHRG_Q.s['8']++;instance.after('triggerChange',instance._afterTriggerChange);},destructor:function(){__cov_r8K8HeYGqKO397ZHtHRG_Q.f['4']++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['9']++;var instance=this;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['10']++;new A.EventHandle(instance._triggerEventHandles).detach();},_afterRenderUIWT:function(){__cov_r8K8HeYGqKO397ZHtHRG_Q.f['5']++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['11']++;var instance=this;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['12']++;instance._uiSetTrigger(instance.get('trigger'));},_afterTriggerChange:function(event){__cov_r8K8HeYGqKO397ZHtHRG_Q.f['6']++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['13']++;var instance=this;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['14']++;instance._uiSetTrigger(event.newVal);},_uiSetTrigger:function(val){__cov_r8K8HeYGqKO397ZHtHRG_Q.f['7']++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['15']++;var instance=this,eventHandles,triggerHideEvent,triggerShowEvent,triggerToggleEvent,triggerHideFn,triggerShowFn,triggerToggleFn;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['16']++;new A.EventHandle(instance._triggerEventHandles).detach();__cov_r8K8HeYGqKO397ZHtHRG_Q.s['17']++;if((__cov_r8K8HeYGqKO397ZHtHRG_Q.b['2'][0]++,val)&&(__cov_r8K8HeYGqKO397ZHtHRG_Q.b['2'][1]++,instance.get('bindDOMEvents'))){__cov_r8K8HeYGqKO397ZHtHRG_Q.b['1'][0]++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['18']++;eventHandles=instance._triggerEventHandles=[];__cov_r8K8HeYGqKO397ZHtHRG_Q.s['19']++;triggerHideEvent=instance.get('triggerHideEvent');__cov_r8K8HeYGqKO397ZHtHRG_Q.s['20']++;triggerShowEvent=instance.get('triggerShowEvent');__cov_r8K8HeYGqKO397ZHtHRG_Q.s['21']++;triggerToggleEvent=instance.get('triggerToggleEvent');__cov_r8K8HeYGqKO397ZHtHRG_Q.s['22']++;triggerHideFn=instance.get('triggerHideFn');__cov_r8K8HeYGqKO397ZHtHRG_Q.s['23']++;triggerShowFn=instance.get('triggerShowFn');__cov_r8K8HeYGqKO397ZHtHRG_Q.s['24']++;triggerToggleFn=instance.get('triggerToggleFn');__cov_r8K8HeYGqKO397ZHtHRG_Q.s['25']++;if(triggerHideEvent){__cov_r8K8HeYGqKO397ZHtHRG_Q.b['3'][0]++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['26']++;eventHandles.push(val.on(instance.get('triggerHideEvent'),A.bind(instance[triggerHideFn],instance)));}else{__cov_r8K8HeYGqKO397ZHtHRG_Q.b['3'][1]++;}__cov_r8K8HeYGqKO397ZHtHRG_Q.s['27']++;if(triggerShowEvent){__cov_r8K8HeYGqKO397ZHtHRG_Q.b['4'][0]++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['28']++;eventHandles.push(val.on(instance.get('triggerShowEvent'),A.bind(instance[triggerShowFn],instance)));}else{__cov_r8K8HeYGqKO397ZHtHRG_Q.b['4'][1]++;}__cov_r8K8HeYGqKO397ZHtHRG_Q.s['29']++;if(triggerToggleEvent){__cov_r8K8HeYGqKO397ZHtHRG_Q.b['5'][0]++;__cov_r8K8HeYGqKO397ZHtHRG_Q.s['30']++;eventHandles.push(val.on(instance.get('triggerToggleEvent'),A.bind(instance[triggerToggleFn],instance)));}else{__cov_r8K8HeYGqKO397ZHtHRG_Q.b['5'][1]++;}}else{__cov_r8K8HeYGqKO397ZHtHRG_Q.b['1'][1]++;}}});__cov_r8K8HeYGqKO397ZHtHRG_Q.s['31']++;A.WidgetTrigger=WidgetTrigger;},'3.1.0-deprecated.28',{'requires':['node']});
