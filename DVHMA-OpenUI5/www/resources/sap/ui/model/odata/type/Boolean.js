/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Core','sap/ui/model/FormatException','sap/ui/model/odata/type/ODataType','sap/ui/model/ParseException','sap/ui/model/ValidateException'],function(C,F,O,P,V){"use strict";function g(){return a("EnterYesOrNo",[b(true),b(false)]);}function a(k,p){return sap.ui.getCore().getLibraryResourceBundle().getText(k,p);}function b(v){return a(v?"YES":"NO");}function s(t,c){var n=c&&c.nullable;t.oConstraints=undefined;if(n===false||n==="false"){t.oConstraints={nullable:false};}else if(n!==undefined&&n!==true&&n!=="true"){jQuery.sap.log.warning("Illegal nullable: "+n,null,t.getName());}}var E=O.extend("sap.ui.model.odata.type.Boolean",{constructor:function(f,c){O.apply(this,arguments);s(this,c);}});E.prototype.formatValue=function(v,t){if(v===null||v===undefined){return null;}switch(t){case"any":case"boolean":return v;case"string":return b(v);default:throw new F("Don't know how to format "+this.getName()+" to "+t);}};E.prototype.parseValue=function(v,S){var c;if(v===null||v===""){return null;}switch(S){case"boolean":return v;case"string":c=jQuery.trim(v).toLowerCase();if(c===b(true).toLowerCase()){return true;}if(c===b(false).toLowerCase()){return false;}throw new P(g());default:throw new P("Don't know how to parse "+this.getName()+" from "+S);}};E.prototype.validateValue=function(v){if(v===null){if(this.oConstraints&&this.oConstraints.nullable===false){throw new V(g());}return;}if(typeof v!=="boolean"){throw new V("Illegal "+this.getName()+" value: "+v);}};E.prototype.getName=function(){return"sap.ui.model.odata.type.Boolean";};return E;});