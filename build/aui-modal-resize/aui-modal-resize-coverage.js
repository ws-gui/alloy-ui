if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-modal-resize/aui-modal-resize.js']) {
   __coverage__['build/aui-modal-resize/aui-modal-resize.js'] = {"path":"build/aui-modal-resize/aui-modal-resize.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":47}}},"2":{"name":"ModalResize","line":9,"loc":{"start":{"line":9,"column":0},"end":{"line":9,"column":23}}},"3":{"name":"(anonymous_3)","line":19,"loc":{"start":{"line":19,"column":17},"end":{"line":19,"column":28}}},"4":{"name":"(anonymous_4)","line":38,"loc":{"start":{"line":38,"column":27},"end":{"line":38,"column":43}}},"5":{"name":"(anonymous_5)","line":56,"loc":{"start":{"line":56,"column":36},"end":{"line":56,"column":47}}},"6":{"name":"(anonymous_6)","line":70,"loc":{"start":{"line":70,"column":17},"end":{"line":70,"column":28}}},"7":{"name":"(anonymous_7)","line":88,"loc":{"start":{"line":88,"column":27},"end":{"line":88,"column":43}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":125,"column":72}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":25}},"3":{"start":{"line":11,"column":0},"end":{"line":105,"column":2}},"4":{"start":{"line":20,"column":8},"end":{"line":20,"column":28}},"5":{"start":{"line":22,"column":8},"end":{"line":26,"column":10}},"6":{"start":{"line":28,"column":8},"end":{"line":28,"column":52}},"7":{"start":{"line":39,"column":8},"end":{"line":39,"column":28}},"8":{"start":{"line":41,"column":8},"end":{"line":46,"column":9}},"9":{"start":{"line":42,"column":12},"end":{"line":42,"column":56}},"10":{"start":{"line":45,"column":12},"end":{"line":45,"column":45}},"11":{"start":{"line":57,"column":8},"end":{"line":57,"column":28}},"12":{"start":{"line":59,"column":8},"end":{"line":61,"column":9}},"13":{"start":{"line":60,"column":12},"end":{"line":60,"column":38}},"14":{"start":{"line":71,"column":8},"end":{"line":72,"column":50}},"15":{"start":{"line":74,"column":8},"end":{"line":78,"column":9}},"16":{"start":{"line":75,"column":12},"end":{"line":75,"column":82}},"17":{"start":{"line":77,"column":12},"end":{"line":77,"column":111}},"18":{"start":{"line":89,"column":8},"end":{"line":91,"column":32}},"19":{"start":{"line":93,"column":8},"end":{"line":97,"column":75}},"20":{"start":{"line":99,"column":8},"end":{"line":103,"column":77}},"21":{"start":{"line":107,"column":0},"end":{"line":120,"column":2}},"22":{"start":{"line":122,"column":0},"end":{"line":122,"column":35}}},"branchMap":{"1":{"line":41,"type":"if","locations":[{"start":{"line":41,"column":8},"end":{"line":41,"column":8}},{"start":{"line":41,"column":8},"end":{"line":41,"column":8}}]},"2":{"line":59,"type":"if","locations":[{"start":{"line":59,"column":8},"end":{"line":59,"column":8}},{"start":{"line":59,"column":8},"end":{"line":59,"column":8}}]},"3":{"line":74,"type":"if","locations":[{"start":{"line":74,"column":8},"end":{"line":74,"column":8}},{"start":{"line":74,"column":8},"end":{"line":74,"column":8}}]},"4":{"line":74,"type":"binary-expr","locations":[{"start":{"line":74,"column":12},"end":{"line":74,"column":21}},{"start":{"line":74,"column":25},"end":{"line":74,"column":57}}]}},"code":["(function () { YUI.add('aui-modal-resize', function (A, NAME) {","","/**"," * The Modal Resize Component."," *"," * @module aui-modal-resize"," */","","function ModalResize() {}","","ModalResize.prototype = {","    /**","     * Construction logic executed during instantiation.","     * Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var instance = this;","","        instance._eventHandles.push(","            A.after(instance._plugResize, instance, '_plugDrag'),","            instance.after('resizableChange', instance._afterResizableChange),","            instance.after('resize:end', A.bind(instance._syncResizeDimensions, instance))","        );","","        instance._applyPlugin(instance._plugResize);","    },","","    /**","     * Fire after resize changes.","     *","     * @method _afterResizableChange","     * @param event","     * @protected","     */","    _afterResizableChange: function(event) {","        var instance = this;","","        if (event.newVal) {","            instance._applyPlugin(instance._plugResize);","        }","        else {","            instance.unplug(A.Plugin.Resize);","        }","    },","","    /**","     * Fire before resizing to the correct dimensions.","     *","     * @method _beforeResizeCorrectDimensions","     * @param event","     * @protected","     */","    _beforeResizeCorrectDimensions: function() {","        var instance = this;","","        if (instance.resize.proxy) {","            return new A.Do.Prevent();","        }","    },","","    /**","     * Plug the resize Plugin","     *","     * @method _plugResize","     * @protected","     */","    _plugResize: function() {","        var instance = this,","            resizable = instance.get('resizable');","","        if (resizable && !instance.hasPlugin('resizable')) {","            instance.plug(A.Plugin.Resize, instance._addBubbleTargets(resizable));","","            A.before(instance._beforeResizeCorrectDimensions, instance.resize, '_correctDimensions', instance);","        }","    },","","    /**","     * Sync width/height dimensions on resize.","     *","     * @method _syncResizeDimensions","     * @param event","     * @protected","     */","    _syncResizeDimensions: function(event) {","        var instance = this,","            boundingBox = instance.get('boundingBox'),","            resize = event.info;","","        instance.set(","            'width',","            resize.offsetWidth -","            parseInt(boundingBox.getComputedStyle('borderRightWidth'), 10) -","            parseInt(boundingBox.getComputedStyle('borderLeftWidth'), 10));","","        instance.set(","            'height',","            resize.offsetHeight -","            parseInt(boundingBox.getComputedStyle('borderTopWidth'), 10) -","            parseInt(boundingBox.getComputedStyle('borderBottomWidth'), 10));","    }","};","","ModalResize.ATTRS = {","    /**","     * Determine if Modal should be resizable or not.","     *","     * @attribute resizable","     * @type Object","     * @writeOnce","     */","    resizable: {","        value: {","            handles: 'br'","        }","    }","};","","A.Base.mix(A.Modal, [ModalResize]);","","","}, '3.1.0-deprecated.28', {\"requires\": [\"aui-modal\", \"resize-plugin\"]});","","}());"]};
}
var __cov_DIo_YY3JO97TzVXJllOWdA = __coverage__['build/aui-modal-resize/aui-modal-resize.js'];
__cov_DIo_YY3JO97TzVXJllOWdA.s['1']++;YUI.add('aui-modal-resize',function(A,NAME){__cov_DIo_YY3JO97TzVXJllOWdA.f['1']++;__cov_DIo_YY3JO97TzVXJllOWdA.s['2']++;function ModalResize(){__cov_DIo_YY3JO97TzVXJllOWdA.f['2']++;}__cov_DIo_YY3JO97TzVXJllOWdA.s['3']++;ModalResize.prototype={initializer:function(){__cov_DIo_YY3JO97TzVXJllOWdA.f['3']++;__cov_DIo_YY3JO97TzVXJllOWdA.s['4']++;var instance=this;__cov_DIo_YY3JO97TzVXJllOWdA.s['5']++;instance._eventHandles.push(A.after(instance._plugResize,instance,'_plugDrag'),instance.after('resizableChange',instance._afterResizableChange),instance.after('resize:end',A.bind(instance._syncResizeDimensions,instance)));__cov_DIo_YY3JO97TzVXJllOWdA.s['6']++;instance._applyPlugin(instance._plugResize);},_afterResizableChange:function(event){__cov_DIo_YY3JO97TzVXJllOWdA.f['4']++;__cov_DIo_YY3JO97TzVXJllOWdA.s['7']++;var instance=this;__cov_DIo_YY3JO97TzVXJllOWdA.s['8']++;if(event.newVal){__cov_DIo_YY3JO97TzVXJllOWdA.b['1'][0]++;__cov_DIo_YY3JO97TzVXJllOWdA.s['9']++;instance._applyPlugin(instance._plugResize);}else{__cov_DIo_YY3JO97TzVXJllOWdA.b['1'][1]++;__cov_DIo_YY3JO97TzVXJllOWdA.s['10']++;instance.unplug(A.Plugin.Resize);}},_beforeResizeCorrectDimensions:function(){__cov_DIo_YY3JO97TzVXJllOWdA.f['5']++;__cov_DIo_YY3JO97TzVXJllOWdA.s['11']++;var instance=this;__cov_DIo_YY3JO97TzVXJllOWdA.s['12']++;if(instance.resize.proxy){__cov_DIo_YY3JO97TzVXJllOWdA.b['2'][0]++;__cov_DIo_YY3JO97TzVXJllOWdA.s['13']++;return new A.Do.Prevent();}else{__cov_DIo_YY3JO97TzVXJllOWdA.b['2'][1]++;}},_plugResize:function(){__cov_DIo_YY3JO97TzVXJllOWdA.f['6']++;__cov_DIo_YY3JO97TzVXJllOWdA.s['14']++;var instance=this,resizable=instance.get('resizable');__cov_DIo_YY3JO97TzVXJllOWdA.s['15']++;if((__cov_DIo_YY3JO97TzVXJllOWdA.b['4'][0]++,resizable)&&(__cov_DIo_YY3JO97TzVXJllOWdA.b['4'][1]++,!instance.hasPlugin('resizable'))){__cov_DIo_YY3JO97TzVXJllOWdA.b['3'][0]++;__cov_DIo_YY3JO97TzVXJllOWdA.s['16']++;instance.plug(A.Plugin.Resize,instance._addBubbleTargets(resizable));__cov_DIo_YY3JO97TzVXJllOWdA.s['17']++;A.before(instance._beforeResizeCorrectDimensions,instance.resize,'_correctDimensions',instance);}else{__cov_DIo_YY3JO97TzVXJllOWdA.b['3'][1]++;}},_syncResizeDimensions:function(event){__cov_DIo_YY3JO97TzVXJllOWdA.f['7']++;__cov_DIo_YY3JO97TzVXJllOWdA.s['18']++;var instance=this,boundingBox=instance.get('boundingBox'),resize=event.info;__cov_DIo_YY3JO97TzVXJllOWdA.s['19']++;instance.set('width',resize.offsetWidth-parseInt(boundingBox.getComputedStyle('borderRightWidth'),10)-parseInt(boundingBox.getComputedStyle('borderLeftWidth'),10));__cov_DIo_YY3JO97TzVXJllOWdA.s['20']++;instance.set('height',resize.offsetHeight-parseInt(boundingBox.getComputedStyle('borderTopWidth'),10)-parseInt(boundingBox.getComputedStyle('borderBottomWidth'),10));}};__cov_DIo_YY3JO97TzVXJllOWdA.s['21']++;ModalResize.ATTRS={resizable:{value:{handles:'br'}}};__cov_DIo_YY3JO97TzVXJllOWdA.s['22']++;A.Base.mix(A.Modal,[ModalResize]);},'3.1.0-deprecated.28',{'requires':['aui-modal','resize-plugin']});
