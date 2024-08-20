"use strict";(self.webpackChunkmermaid_diagram=self.webpackChunkmermaid_diagram||[]).push([[347],{347:(e,t,s)=>{s.d(t,{diagram:()=>V});var o=s(476),i=s(772),a=s(609),r=s(7141),n=s(944);s(446),s(3755),s(6213),s(3509),s(1516);const d="rect",l="rectWithTitle",c="statediagram",p=`${c}-state`,g="transition",b=`${g} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,f="parent",m="note",w="----",x=`${w}${m}`,$=`${w}${f}`,v="fill:none",T="fill: #333",S="text",k="normal";let D={},A=0;function B(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:w;return`state-${arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}${null!==t&&t.length>0?`${s}${t}`:""}-${e}`}const L=(e,t,s,i,a,n)=>{const c=s.id,g=void 0===(w=i[c])||null===w?"":w.classes?w.classes.join(" "):"";var w;if("root"!==c){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),D[c]||(D[c]={id:c,shape:t,description:r.e.sanitizeText(c,(0,r.c)()),classes:`${g} ${p}`});const i=D[c];s.description&&(Array.isArray(i.description)?(i.shape=l,i.description.push(s.description)):i.description.length>0?(i.shape=l,i.description===c?i.description=[s.description]:i.description=[i.description,s.description]):(i.shape=d,i.description=s.description),i.description=r.e.sanitizeTextOrArray(i.description,(0,r.c)())),1===i.description.length&&i.shape===l&&(i.shape=d),!i.type&&s.doc&&(r.l.info("Setting cluster for ",c,E(s)),i.type="group",i.dir=E(s),i.shape=s.type===o.a?"divider":"roundedWithTitle",i.classes=i.classes+" "+u+" "+(n?y:""));const a={labelStyle:"",shape:i.shape,labelText:i.description,classes:i.classes,style:"",id:c,dir:i.dir,domId:B(c,A),type:i.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:c+x+"-"+A,domId:B(c,A,m),type:i.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:i.classes,style:"",id:c+$,domId:B(c,A,f),type:"group",padding:0};A++;const r=c+$;e.setNode(r,o),e.setNode(t.id,t),e.setNode(c,a),e.setParent(c,r),e.setParent(t.id,r);let n=c,d=t.id;"left of"===s.note.position&&(n=t.id,d=c),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:v,labelStyle:"",classes:b,arrowheadStyle:T,labelpos:"c",labelType:S,thickness:k})}else e.setNode(c,a)}t&&"root"!==t.id&&(r.l.trace("Setting node ",c," to be child of its parent ",t.id),e.setParent(c,t.id)),s.doc&&(r.l.trace("Adding nodes children "),C(e,s,s.doc,i,a,!n))},C=(e,t,s,i,a,n)=>{r.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:L(e,t,s,i,a,n);break;case o.S:{L(e,t,s.state1,i,a,n),L(e,t,s.state2,i,a,n);const o={id:"edge"+A,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:v,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:T,labelpos:"c",labelType:S,thickness:k,classes:g};e.setEdge(s.state1.id,s.state2.id,o,A),A++}}}))},E=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.c;if(e.doc)for(let s=0;s<e.doc.length;s++){const o=e.doc[s];"dir"===o.stmt&&(t=o.value)}return t},R={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){r.l.info("Drawing state diagram (v2)",t),D={},o.db.getDirection();const{securityLevel:l,state:p}=(0,r.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;r.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),r.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new i.T({multigraph:!0,compound:!0}).setGraph({rankdir:E(o.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;L(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===l&&(y=(0,a.Ltv)("#i"+t));const f="sandbox"===l?(0,a.Ltv)(y.nodes()[0].contentDocument.body):(0,a.Ltv)("body"),m=f.select(`[id="${t}"]`),w=f.select("#"+t+" g");await(0,n.r)(w,u,["barb"],c,t);r.u.insertTitle(m,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const x=m.node().getBBox(),$=x.width+16,v=x.height+16;m.attr("class",c);const T=m.node().getBBox();(0,r.i)(m,v,$,p.useMaxWidth);const S=`${T.x-8} ${T.y-8} ${$} ${v}`;r.l.debug(`viewBox ${S}`),m.attr("viewBox",S);const k=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const i of k){const e=i.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),i.insertBefore(t,i.firstChild)}}},V={parser:o.p,db:o.d,renderer:R,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);
//# sourceMappingURL=347.ba2b7a30.chunk.js.map