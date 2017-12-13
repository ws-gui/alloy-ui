if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-tooltip-deprecated/aui-tooltip-deprecated.js']) {
   __coverage__['build/aui-tooltip-deprecated/aui-tooltip-deprecated.js'] = {"path":"build/aui-tooltip-deprecated/aui-tooltip-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"(anonymous_2)","line":163,"loc":{"start":{"line":163,"column":16},"end":{"line":163,"column":27}}},"3":{"name":"(anonymous_3)","line":176,"loc":{"start":{"line":176,"column":14},"end":{"line":176,"column":25}}},"4":{"name":"(anonymous_4)","line":195,"loc":{"start":{"line":195,"column":35},"end":{"line":195,"column":57}}},"5":{"name":"(anonymous_5)","line":221,"loc":{"start":{"line":221,"column":26},"end":{"line":221,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":235,"column":101}},"2":{"start":{"line":9,"column":0},"end":{"line":23,"column":24}},"3":{"start":{"line":52,"column":0},"end":{"line":230,"column":3}},"4":{"start":{"line":164,"column":12},"end":{"line":164,"column":32}},"5":{"start":{"line":166,"column":12},"end":{"line":166,"column":65}},"6":{"start":{"line":177,"column":12},"end":{"line":177,"column":32}},"7":{"start":{"line":178,"column":12},"end":{"line":178,"column":57}},"8":{"start":{"line":180,"column":12},"end":{"line":180,"column":63}},"9":{"start":{"line":182,"column":12},"end":{"line":184,"column":13}},"10":{"start":{"line":183,"column":16},"end":{"line":183,"column":79}},"11":{"start":{"line":196,"column":12},"end":{"line":196,"column":32}},"12":{"start":{"line":197,"column":12},"end":{"line":197,"column":48}},"13":{"start":{"line":199,"column":12},"end":{"line":204,"column":13}},"14":{"start":{"line":200,"column":16},"end":{"line":200,"column":55}},"15":{"start":{"line":203,"column":16},"end":{"line":203,"column":43}},"16":{"start":{"line":206,"column":12},"end":{"line":211,"column":13}},"17":{"start":{"line":207,"column":16},"end":{"line":207,"column":57}},"18":{"start":{"line":208,"column":16},"end":{"line":208,"column":52}},"19":{"start":{"line":210,"column":16},"end":{"line":210,"column":50}},"20":{"start":{"line":222,"column":12},"end":{"line":222,"column":32}},"21":{"start":{"line":224,"column":12},"end":{"line":224,"column":71}},"22":{"start":{"line":227,"column":12},"end":{"line":227,"column":36}},"23":{"start":{"line":232,"column":0},"end":{"line":232,"column":20}}},"branchMap":{"1":{"line":182,"type":"if","locations":[{"start":{"line":182,"column":12},"end":{"line":182,"column":12}},{"start":{"line":182,"column":12},"end":{"line":182,"column":12}}]},"2":{"line":199,"type":"if","locations":[{"start":{"line":199,"column":12},"end":{"line":199,"column":12}},{"start":{"line":199,"column":12},"end":{"line":199,"column":12}}]},"3":{"line":206,"type":"if","locations":[{"start":{"line":206,"column":12},"end":{"line":206,"column":12}},{"start":{"line":206,"column":12},"end":{"line":206,"column":12}}]}},"code":["(function () { YUI.add('aui-tooltip-deprecated', function (A, NAME) {","","/**"," * The Tooltip Utility - A standard tooltip implementation for providing additional information when hovering over a target element."," *"," * @module aui-tooltip"," */","","var L = A.Lang,","    isString = L.isString,","    isUndefined = L.isUndefined,","    isBoolean = L.isBoolean,","","    BL = 'bl',","    TR = 'tr',","    BLANK = '',","    ATTR = 'attr',","    TITLE = 'title',","    CURRENT_NODE = 'currentNode',","    SECTION = 'section',","    TRIGGER = 'trigger',","    BODY_CONTENT = 'bodyContent',","    TOOLTIP = 'tooltip';","","/**"," * <p><img src=\"assets/images/aui-tooltip/main.png\"/></p>"," *"," * A base class for Tooltip, providing:"," * <ul>"," *    <li>Widget Lifecycle (initializer, renderUI, bindUI, syncUI, destructor)</li>"," *    <li>Additional information when hovering over a target element</li>"," * </ul>"," *"," * Quick Example:<br/>"," *"," * <pre><code>var instance = new A.Tooltip({"," *\ttrigger: '#element',"," *\talign: { points: [ 'lc', 'rc' ] },"," *\tbodyContent: 'Simple tooltip'"," * }).render();"," * </code></pre>"," *"," * Check the list of <a href=\"Tooltip.html#configattributes\">Configuration Attributes</a> available for"," * Tooltip."," *"," * @param config {Object} Object literal specifying widget configuration properties."," *"," * @class Tooltip"," * @constructor"," * @extends OverlayContextPanel"," */","var Tooltip = A.Component.create({","    /**","     * Static property provides a string to identify the class.","     *","     * @property Tooltip.NAME","     * @type String","     * @static","     */","    NAME: TOOLTIP,","","    /**","     * Static property used to define the default attribute","     * configuration for the Tooltip.","     *","     * @property Tooltip.ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * See <a href=\"OverlayContextPanel.html#config_anim\">OverlayContextPanel anim</a>.","         *","         * @attribute anim","         * @default { show: false }","         * @type Object","         */","        anim: {","            value: {","                show: false","            }","        },","","        /**","         * See <a href=\"Overlay.html#config_align\">OverlayContextPanel align</a>.","         *","         * @attribute align","         * @default { node: null, points: [ BL, TR ] }","         * @type Object","         */","        align: {","            value: {","                node: null,","                points: [BL, TR]","            }","        },","","        /**","         * See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>.","         *","         * @attribute showOn","         * @default mouseover","         * @type String","         */","        showOn: {","            value: 'mouseover'","        },","","        /**","         * See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>.","         *","         * @attribute hideOn","         * @default mouseout","         * @type String","         */","        hideOn: {","            value: 'mouseout'","        },","","        /**","         * Prevents display:none from being applied to the tooltip when it is hidden because we","         * cannot properly align a hidden tooltip with display:none since we can't accurately","         * get its computed x and y position.","         */","        hideClass: {","            value: false","        },","","        /**","         * See <a href=\"OverlayContext.html#config_hideDelay\">OverlayContext hideDelay</a>.","         *","         * @attribute hideDelay","         * @default 500","         * @type Number","         */","        hideDelay: {","            value: 500","        },","","        /**","         * Use the content of the <code>title</code> attribute as the Tooltip","         * content.","         *","         * @attribute title","         * @default false","         * @type boolean","         */","        title: {","            value: false,","            validator: isBoolean","        }","    },","","    EXTENDS: A.OverlayContextPanel,","","    prototype: {","        /**","         * Bind the events on the Tooltip UI. Lifecycle.","         *","         * @method bindUI","         * @protected","         */","        bindUI: function() {","            var instance = this;","","            Tooltip.superclass.bindUI.apply(instance, arguments);","        },","","        /**","         * Over-ride the <code>show</code> to invoke the","         * <a href=\"Tooltip.html#method__loadBodyContentFromTitle\">_loadBodyContentFromTitle</a>.","         * See <a href=\"OverlayContext.html#config_show\">OverlayContext show</a>.","         *","         * @method show","         */","        show: function() {","            var instance = this;","            var bodyContent = instance.get(BODY_CONTENT);","","            Tooltip.superclass.show.apply(instance, arguments);","","            if (instance.get(TITLE)) {","                instance._loadBodyContentFromTitle(instance.get(CURRENT_NODE));","            }","        },","","        /**","         * Use the <code>title</code> content of the <code>currentNode</code> as","         * the content of the Tooltip.","         *","         * @method _loadBodyContentFromTitle","         * @param {Node} currentNode Current node being used by the Tooltip","         * @protected","         */","        _loadBodyContentFromTitle: function(currentNode) {","            var instance = this;","            var trigger = instance.get(TRIGGER);","","            if (!instance._titles) {","                instance._titles = trigger.attr(TITLE);","","                // prevent default browser tooltip for title","                trigger.attr(TITLE, BLANK);","            }","","            if (currentNode) {","                var index = trigger.indexOf(currentNode);","                var title = instance._titles[index];","","                instance.set(BODY_CONTENT, title);","            }","        },","","        /**","         * Fires after the attribute <code>bodyContent</code> change.","         *","         * @method _afterBodyChange","         * @param {EventFacade} e","         * @protected","         */","        _afterBodyChange: function(e) {","            var instance = this;","","            Tooltip.superclass._afterBodyChange.apply(this, arguments);","","            // need to refreshAlign() after body change","            instance.refreshAlign();","        }","    }","});","","A.Tooltip = Tooltip;","","","}, '3.0.3-deprecated.72', {\"requires\": [\"aui-overlay-context-panel-deprecated\"], \"skinnable\": true});","","}());"]};
}
var __cov_G7nuQIW5TfSGy5QYkfJl8w = __coverage__['build/aui-tooltip-deprecated/aui-tooltip-deprecated.js'];
__cov_G7nuQIW5TfSGy5QYkfJl8w.s['1']++;YUI.add('aui-tooltip-deprecated',function(A,NAME){__cov_G7nuQIW5TfSGy5QYkfJl8w.f['1']++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['2']++;var L=A.Lang,isString=L.isString,isUndefined=L.isUndefined,isBoolean=L.isBoolean,BL='bl',TR='tr',BLANK='',ATTR='attr',TITLE='title',CURRENT_NODE='currentNode',SECTION='section',TRIGGER='trigger',BODY_CONTENT='bodyContent',TOOLTIP='tooltip';__cov_G7nuQIW5TfSGy5QYkfJl8w.s['3']++;var Tooltip=A.Component.create({NAME:TOOLTIP,ATTRS:{anim:{value:{show:false}},align:{value:{node:null,points:[BL,TR]}},showOn:{value:'mouseover'},hideOn:{value:'mouseout'},hideClass:{value:false},hideDelay:{value:500},title:{value:false,validator:isBoolean}},EXTENDS:A.OverlayContextPanel,prototype:{bindUI:function(){__cov_G7nuQIW5TfSGy5QYkfJl8w.f['2']++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['4']++;var instance=this;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['5']++;Tooltip.superclass.bindUI.apply(instance,arguments);},show:function(){__cov_G7nuQIW5TfSGy5QYkfJl8w.f['3']++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['6']++;var instance=this;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['7']++;var bodyContent=instance.get(BODY_CONTENT);__cov_G7nuQIW5TfSGy5QYkfJl8w.s['8']++;Tooltip.superclass.show.apply(instance,arguments);__cov_G7nuQIW5TfSGy5QYkfJl8w.s['9']++;if(instance.get(TITLE)){__cov_G7nuQIW5TfSGy5QYkfJl8w.b['1'][0]++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['10']++;instance._loadBodyContentFromTitle(instance.get(CURRENT_NODE));}else{__cov_G7nuQIW5TfSGy5QYkfJl8w.b['1'][1]++;}},_loadBodyContentFromTitle:function(currentNode){__cov_G7nuQIW5TfSGy5QYkfJl8w.f['4']++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['11']++;var instance=this;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['12']++;var trigger=instance.get(TRIGGER);__cov_G7nuQIW5TfSGy5QYkfJl8w.s['13']++;if(!instance._titles){__cov_G7nuQIW5TfSGy5QYkfJl8w.b['2'][0]++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['14']++;instance._titles=trigger.attr(TITLE);__cov_G7nuQIW5TfSGy5QYkfJl8w.s['15']++;trigger.attr(TITLE,BLANK);}else{__cov_G7nuQIW5TfSGy5QYkfJl8w.b['2'][1]++;}__cov_G7nuQIW5TfSGy5QYkfJl8w.s['16']++;if(currentNode){__cov_G7nuQIW5TfSGy5QYkfJl8w.b['3'][0]++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['17']++;var index=trigger.indexOf(currentNode);__cov_G7nuQIW5TfSGy5QYkfJl8w.s['18']++;var title=instance._titles[index];__cov_G7nuQIW5TfSGy5QYkfJl8w.s['19']++;instance.set(BODY_CONTENT,title);}else{__cov_G7nuQIW5TfSGy5QYkfJl8w.b['3'][1]++;}},_afterBodyChange:function(e){__cov_G7nuQIW5TfSGy5QYkfJl8w.f['5']++;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['20']++;var instance=this;__cov_G7nuQIW5TfSGy5QYkfJl8w.s['21']++;Tooltip.superclass._afterBodyChange.apply(this,arguments);__cov_G7nuQIW5TfSGy5QYkfJl8w.s['22']++;instance.refreshAlign();}}});__cov_G7nuQIW5TfSGy5QYkfJl8w.s['23']++;A.Tooltip=Tooltip;},'3.0.3-deprecated.72',{'requires':['aui-overlay-context-panel-deprecated'],'skinnable':true});
