!function(a){"function"==typeof define&&define.amd?define(["react","backbone","underscore","jquery"],a):a(React,Backbone,_,$)}(function(a,b,c,d){"use strict";return b.React||(b.React={}),b.React.Component=function(a){a=a||{},this.cid=c.uniqueId(),(c.isElement(a.el)||a.el instanceof d)&&(this.setElement(a.el),delete a.el),(a.model instanceof b.Model||a.model instanceof Array&&a.model[0]instanceof b.Model)&&(this.model=a.model,delete a.model),(a.collection instanceof b.Collection||a.collection instanceof Array&&a.collection[0]instanceof b.Collection)&&(this.collection=a.collection,delete a.collection),this.initialize&&this.initialize(a)},b.React.Component.extend=function(){var d,e=arguments[0],f=function(){var a=new d(arguments[0],arguments[1]);return b.React.Component.apply(a,arguments),a};return f.extend=function(){return b.React.Component.extend(c.extend({},e,arguments[0]))},c.extend(f.prototype,b.React.Component.prototype,e),d=a.createClass(f.prototype),f},c.extend(b.React.Component.prototype,b.Events,{mixins:[{componentDidMount:function(){this.setElement(this.getDOMNode()).startModelListeners().startCollectionListeners()},componentDidUpdate:function(){this.setElement(this.getDOMNode())},componentWillUnmount:function(){this.stopListening()}}],$:function(){return this.$el?this.$el.find.apply(this.$el,arguments):void 0},getCollection:function(){return this.getOwner().collection},getModel:function(){return this.getOwner().model},getOwner:function(){for(var a=this;a.props.__owner__;)a=a.props.__owner__;return a},mount:function(b,c){if(!b&&!this.el)throw new Error("No element to mount on");return b||(b=this.el),c||(this.model&&this.collection?c=function(){this.setPropsModel(),this.setPropsCollection()}.bind(this):this.model?c=this.setPropsModel.bind(this):this.collection&&(c=this.setPropsCollection.bind(this))),a.renderComponent(this,b,c),this.isRendered=!0,this},onError:function(){return this.setProps({isRequesting:!1,hasError:!0})},onRequest:function(){this.setProps({isRequesting:!0})},onSync:function(a,c){this.setProps({isRequesting:!1}),a instanceof b.Model?this.setPropsModel(a,c):a instanceof b.Collection&&this.setPropsCollection(a,c)},remove:function(){return this.unmount(),this.el.remove(),this},setElement:function(a){if(a&&a instanceof d){if(a.length>1)throw new Error("You can only assign one element to a component");this.el=a[0],this.$el=a}else a&&(this.el=a,this.$el=d(a));return this},setPropsCollection:function(a,c){if(a||(a=this.collection,a instanceof b.Collection)){var d=arguments[arguments.length-1];if(!d||!d.xhr){var e={};c?e[c]=a.toJSON():e.collection=a.toJSON(),this.setProps(e)}}else for(c in a)this.setPropsCollection(a[c],c)},setPropsModel:function(a,c){if(a||(a=this.model,a instanceof b.Model)){var d=arguments[arguments.length-1];if(!d||!d.xhr){var e={};c?e[c]=a.toJSON():e=a.toJSON(),this.setProps(e)}}else for(c in a)this.setPropsModel(a[c],c)},startCollectionListeners:function(a,c){if(a||(a=this.collection),a instanceof b.Collection)this.listenTo(a,"add remove change",this.setPropsCollection.bind(this,a,c)).listenTo(a,"error",this.onError.bind(this,a,c)).listenTo(a,"request",this.onRequest.bind(this,a,c)).listenTo(a,"sync",this.onSync.bind(this,a,c));else if(a)for(c in a)this.startCollectionListeners(a[c]);return this},startModelListeners:function(a,c){if(a||(a=this.model),a instanceof b.Model)this.listenTo(a,"change",this.setPropsModel.bind(this,a,c)).listenTo(a,"error",this.onError.bind(this,a,c)).listenTo(a,"request",this.onRequest.bind(this,a,c)).listenTo(a,"sync",this.onSync.bind(this,a,c));else if(a)for(c in a)this.startModelListeners(a[c],c);return this},unmount:function(){var b=this.el.parentNode;if(!a.unmountComponentAtNode(b))throw new Error("There was an error unmounting the component");this.setElement(b),delete this.isRendered}}),b.React.Component});