YUI.add("aui-video",function(e,t){var n=e.Lang,r=e.UA,i=e.getClassName,s=i("video","node"),o=e.config.base+"aui-video/assets/player.swf?t="+n.now(),u=e.config.doc,a='<video id="{id}" controls="controls" class="'+s+'"></video>',f='<div class="'+s+'"></div>',l=e.Component.create({NAME:"video",ATTRS:{flashPlayerVersion:{validator:n.isString,value:"9,0,0,0"},flashVars:{value:{}},fixedAttributes:{value:{}},ogvUrl:{value:""},poster:{value:""},render:{value:!0},role:{validator:n.isString,value:"application",writeOnce:"initOnly"},swfUrl:{value:o},url:{value:""},useARIA:{validator:n.isBoolean,value:!0,writeOnce:"initOnly"}},BIND_UI_ATTRS:["url","poster","ogvUrl","swfUrl","fixedAttributes","flashVars"],SYNC_UI_ATTRS:["url","poster","ogvUrl"],prototype:{destructor:function(){var t=this;(new e.EventHandle(t._eventHandles)).detach()},renderUI:function(){var t=this;t._renderVideoTask=e.debounce(t._renderVideo,1,t),t._renderSwfTask=e.debounce(t._renderSwf,1,t),t._renderVideo(!t.get("ogvUrl")),t._video.on("play",function(e){t.fire("play",{cropType:e.type})}),t._video.on("pause",function(e){t.fire("pause",{cropType:e.type})}),t._setResponsiveDimensions()},bindUI:function(){var t=this;t.publish("videoReady",{fireOnce:!0}),t.publish("play"),t.publish("pause"),t._eventHandles=[e.after("windowresize",e.bind("_afterWindowResize",t))]},syncUI:function(){var t=this;t.get("useARIA")&&t.plug(e.Plugin.Aria,{roleName:t.get("role"),roleNode:t.get("contentBox")})},load:function(){var e=this;e._video.hasMethod("load")&&e._video.invoke("load")},pause:function(){var e=this;e._video.hasMethod("pause")&&e._video.invoke("pause")},play:function(){var e=this;e._video.hasMethod("play")&&e._video.invoke("play")},_afterWindowResize:function(){var e=this;e._responsiveBoundingBox(),e._setResponsiveDimensions()},_createSource:function(t){var n=new e.Node(u.createElement("source"));return n.attr("type",t),n},_renderSwf:function(){var t=this,n=t.get("swfUrl");if(n){var i=t.get("flashVars"),s=t.get("poster"),o=t.get("url");e.mix(i,{controls:!0,poster:s,src:o});var u=e.QueryString.stringify(i);t._swfId?t._video.removeChild(e.one("#"+t._swfId)):t._swfId=e.guid();var a='<object id="'+t._swfId+'" ';r.ie?a+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+t.get("flashPlayerVersion")+'" ':a+='type="application/x-shockwave-flash" data="'+n+'" ',a+='height="100%" width="100%">',r.ie&&(a+='<param name="movie" value="'+n+'"/>');var f=t.get("fixedAttributes");for(var l in f)f.hasOwnProperty(l)&&(a+='<param name="'+l+'" value="'+f[l]+'" />');u&&(a+='<param name="flashVars" value="'+u+'" />'),s!==""&&(a+='<img src="'+s+'" alt="" />'),a+="</object>",t._video.append(a)}},_renderVideo:function(t){var i,s,o,u,l,c;i=this,o=a,s=i.get("height"),c=i.get("width"),r.gecko&&t&&(o=f),u=n.sub(o,{id:e.guid()}),l=e.Node.create(u),c&&l.width(c),s&&l.height(s),i.get("contentBox").append(l),i._video=l},_responsiveBoundingBox:function(){var e=this,t=e.get("boundingBox");t.setStyles({height:"",width:""})},_setResponsiveDimensions:function(){var t,n,r,i,s,o,u,a,f;t=this,s=t.get("height"),a=t.get("width"),n=s/a,o=s,u=a,f=e.one(window),r=f.get("innerHeight"),r<s&&(o=r,u=r/n),i=f.get("innerWidth"),i<a&&(o=i*n,u=i),t._video.width(u),t._video.height(o)},_uiSetFixedAttributes:function(){var e=this;e._renderSwfTask()},_uiSetFlashVars:function(){var e=this;e._renderSwfTask()},_uiSetOgvUrl:function(e){var t=this;if(r.gecko||r.opera){var n=t._video,i=t._usingVideo();if(!e&&i||e&&!i)n.remove(!0),t._renderVideoTask(!e);if(!e)t._renderSwfTask();else{var s=t._sourceOgv;s||(s=t._createSource('video/ogg; codecs="theora, vorbis"'),n.append(s),t._sourceOgv=s),s.attr("src",e)}}},_uiSetPoster:function(e){var t=this,n=t._video;t._usingVideo()&&n.setAttribute("poster",e),t._renderSwfTask()},_uiSetSwfUrl:function(){var e=this;e._renderSwfTask()},_uiSetUrl:function(e){var t=this,n=t.get("ogvUrl"),i=t._video,s=t._sourceMp4;if(r.gecko&&!t._usingVideo())s&&(s.remove(!0),t._sourceMp4=null);else if(i||!n)s||(s=t._createSource("video/mp4;"),i.append(s),t._sourceMp4=s),s.attr("src",e);t._renderSwfTask()},_usingVideo:function(){var e=this;return e._video.get("nodeName").toLowerCase()==="video"}}});e.Video=l},"3.1.0-deprecated.28",{requires:["event-resize","node-event-html5","querystring-stringify-simple","aui-aria","aui-node","aui-component","aui-debounce"],skinnable:!0});
