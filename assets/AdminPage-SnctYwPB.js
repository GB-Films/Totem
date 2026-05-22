import{c as V,g as q,_ as He,a as We,b as Ge,i as be,p as Ke,d as Xe,e as Ye,F as Ze,f as Je,C as Qe,r as ae,S as et,h as tt,j as _e,u as nt,k as st,l as R,m as at,n as a,o as re,L as ie,q as rt,P as it,T as ye,s as ot,t as lt,v as F,w as ct,x as oe,y as ut,z as dt,A as ht,B as Y,D as le,E as mt,G as pt,H as gt,I as xe,J as ft,K as bt}from"./index-DCwf8Bee.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=V("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=V("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=V("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="firebasestorage.googleapis.com",we="storageBucket",yt=120*1e3,xt=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Ze{constructor(t,n,s=0){super(G(t),`Firebase Storage: ${n} (${G(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,v.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var x;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(x||(x={}));function G(e){return"storage/"+e}function Q(){const e="An unknown error occurred, please check the error payload for server response.";return new v(x.UNKNOWN,e)}function vt(e){return new v(x.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Nt(e){return new v(x.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new v(x.UNAUTHENTICATED,e)}function jt(){return new v(x.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Rt(e){return new v(x.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function kt(){return new v(x.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Tt(){return new v(x.CANCELED,"User canceled the upload/download.")}function Ct(e){return new v(x.INVALID_URL,"Invalid URL '"+e+"'.")}function Dt(e){return new v(x.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Et(){return new v(x.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+we+"' property when initializing the app?")}function Pt(){return new v(x.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function At(){return new v(x.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function St(e){return new v(x.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Z(e){return new v(x.INVALID_ARGUMENT,e)}function je(){return new v(x.APP_DELETED,"The Firebase app was deleted.")}function It(e){return new v(x.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function B(e,t){return new v(x.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function M(e){throw new v(x.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=C.makeFromUrl(t,n)}catch{return new C(t,"")}if(s.path==="")return s;throw Dt(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const l="(/(.*))?$",m=new RegExp("^gs://"+r+l,"i"),h={bucket:1,path:3};function p(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",N=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",c=new RegExp(`^https?://${N}/${f}/b/${r}/o${d}`,"i"),y={bucket:1,path:3},_=n===Ne?"(?:storage.googleapis.com|storage.cloud.google.com)":n,u="([^?#]*)",w=new RegExp(`^https?://${_}/${r}/${u}`,"i"),D=[{regex:m,indices:h,postModify:o},{regex:c,indices:y,postModify:p},{regex:w,indices:{bucket:1,path:2},postModify:p}];for(let j=0;j<D.length;j++){const U=D[j],g=U.regex.exec(t);if(g){const H=g[U.indices.bucket];let L=g[U.indices.path];L||(L=""),s=new C(H,L),U.postModify(s);break}}if(s==null)throw Ct(t);return s}}class Ut{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t,n){let s=1,r=null,o=null,l=!1,m=0;function h(){return m===2}let p=!1;function f(...u){p||(p=!0,t.apply(null,u))}function N(u){r=setTimeout(()=>{r=null,e(c,h())},u)}function d(){o&&clearTimeout(o)}function c(u,...w){if(p){d();return}if(u){d(),f.call(null,u,...w);return}if(h()||l){d(),f.call(null,u,...w);return}s<64&&(s*=2);let D;m===1?(m=2,D=0):D=(s+Math.random())*1e3,N(D)}let y=!1;function _(u){y||(y=!0,d(),!p&&(r!==null?(u||(m=2),clearTimeout(r),N(0)):u||(m=1)))}return N(0),o=setTimeout(()=>{l=!0,_(!0)},n),_}function Lt(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return e!==void 0}function Ft(e){return typeof e=="object"&&!Array.isArray(e)}function ee(e){return typeof e=="string"||e instanceof String}function de(e){return te()&&e instanceof Blob}function te(){return typeof Blob<"u"}function he(e,t,n,s){if(s<t)throw Z(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw Z(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Re(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var S;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(S||(S={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,n,s,r,o,l,m,h,p,f,N,d=!0,c=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=m,this.errorCallback_=h,this.timeout_=p,this.progressCallback_=f,this.connectionFactory_=N,this.retry=d,this.isUsingEmulator=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,_)=>{this.resolve_=y,this.reject_=_,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new $(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=m=>{const h=m.loaded,p=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,p)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const m=o.getErrorCode()===S.NO_ERROR,h=o.getStatus();if(!m||Bt(h,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===S.ABORT;s(!1,new $(!1,null,f));return}const p=this.successCodes_.indexOf(h)!==-1;s(!0,new $(p,o))})},n=(s,r)=>{const o=this.resolve_,l=this.reject_,m=r.connection;if(r.wasSuccessCode)try{const h=this.callback_(m,m.getResponse());Mt(h)?o(h):o()}catch(h){l(h)}else if(m!==null){const h=Q();h.serverResponse=m.getErrorText(),this.errorCallback_?l(this.errorCallback_(m,h)):l(h)}else if(r.canceled){const h=this.appDelete_?je():Tt();l(h)}else{const h=kt();l(h)}};this.canceled_?n(!1,new $(!1,null,!0)):this.backoffId_=Ot(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Lt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ${constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function zt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Vt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function qt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ht(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Wt(e,t,n,s,r,o,l=!0,m=!1){const h=Re(e.urlParams),p=e.url+h,f=Object.assign({},e.headers);return qt(f,t),zt(f,n),Vt(f,o),Ht(f,s),new $t(p,e.method,f,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,l,m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Kt(...e){const t=Gt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(te())return new Blob(e);throw new v(x.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Xt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){if(typeof atob>"u")throw St("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class K{constructor(t,n){this.data=t,this.contentType=n||null}}function Zt(e,t){switch(e){case P.RAW:return new K(ke(t));case P.BASE64:case P.BASE64URL:return new K(Te(e,t));case P.DATA_URL:return new K(Qt(t),en(t))}throw Q()}function ke(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,l=e.charCodeAt(++n);s=65536|(o&1023)<<10|l&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Jt(e){let t;try{t=decodeURIComponent(e)}catch{throw B(P.DATA_URL,"Malformed data URL.")}return ke(t)}function Te(e,t){switch(e){case P.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw B(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw B(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Yt(t)}catch(r){throw r.message.includes("polyfill")?r:B(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ce{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw B(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=tn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Qt(e){const t=new Ce(e);return t.base64?Te(P.BASE64,t.rest):Jt(t.rest)}function en(e){return new Ce(e).contentType}function tn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,n){let s=0,r="";de(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(de(this.data_)){const s=this.data_,r=Xt(s,t,n);return r===null?null:new A(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new A(s,!0)}}static getBlob(...t){if(te()){const n=t.map(s=>s instanceof A?s.data_:s);return new A(Kt.apply(null,n))}else{const n=t.map(l=>ee(l)?Zt(P.RAW,l).data:l.data_);let s=0;n.forEach(l=>{s+=l.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(l=>{for(let m=0;m<l.length;m++)r[o++]=l[m]}),new A(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){let t;try{t=JSON.parse(e)}catch{return null}return Ft(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function sn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Ee(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t){return t}class k{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||an}}let z=null;function rn(e){return!ee(e)||e.length<2?e:Ee(e)}function Pe(){if(z)return z;const e=[];e.push(new k("bucket")),e.push(new k("generation")),e.push(new k("metageneration")),e.push(new k("name","fullPath",!0));function t(o,l){return rn(l)}const n=new k("name");n.xform=t,e.push(n);function s(o,l){return l!==void 0?Number(l):l}const r=new k("size");return r.xform=s,e.push(r),e.push(new k("timeCreated")),e.push(new k("updated")),e.push(new k("md5Hash",null,!0)),e.push(new k("cacheControl",null,!0)),e.push(new k("contentDisposition",null,!0)),e.push(new k("contentEncoding",null,!0)),e.push(new k("contentLanguage",null,!0)),e.push(new k("contentType",null,!0)),e.push(new k("metadata","customMetadata",!0)),z=e,z}function on(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new C(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function ln(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const l=n[o];s[l.local]=l.xform(s,t[l.server])}return on(s,e),s}function Ae(e,t,n){const s=De(t);return s===null?null:ln(e,s,n)}function cn(e,t,n,s){const r=De(t);if(r===null||!ee(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(p=>{const f=e.bucket,N=e.fullPath,d="/b/"+l(f)+"/o/"+l(N),c=ne(d,n,s),y=Re({alt:"media",token:p});return c+y})[0]}function un(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Se{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){if(!e)throw Q()}function dn(e,t){function n(s,r){const o=Ae(e,r,t);return Ie(o!==null),o}return n}function hn(e,t){function n(s,r){const o=Ae(e,r,t);return Ie(o!==null),cn(o,r,e.host,e._protocol)}return n}function Ue(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=jt():r=wt():n.getStatus()===402?r=Nt(e.bucket):n.getStatus()===403?r=Rt(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function mn(e){const t=Ue(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=vt(e.path)),o.serverResponse=r.serverResponse,o}return n}function pn(e,t,n){const s=t.fullServerUrl(),r=ne(s,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,m=new Se(r,o,hn(e,n),l);return m.errorHandler=mn(t),m}function gn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function fn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=gn(null,t)),s}function bn(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function m(){let D="";for(let j=0;j<2;j++)D=D+Math.random().toString().slice(2);return D}const h=m();l["Content-Type"]="multipart/related; boundary="+h;const p=fn(t,s,r),f=un(p,n),N="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+h+`\r
Content-Type: `+p.contentType+`\r
\r
`,d=`\r
--`+h+"--",c=A.getBlob(N,s,d);if(c===null)throw Pt();const y={name:p.fullPath},_=ne(o,e.host,e._protocol),u="POST",w=e.maxUploadRetryTime,T=new Se(_,u,dn(e,n),w);return T.urlParams=y,T.headers=l,T.body=c.uploadData(),T.errorHandler=Ue(t),T}class _n{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=S.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=S.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r,o){if(this.sent_)throw M("cannot .send() more than once");if(be(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class yn extends _n{initXhr(){this.xhr_.responseType="text"}}function Oe(){return new yn}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,n){this._service=t,n instanceof C?this._location=n:this._location=C.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new I(t,n)}get root(){const t=new C(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ee(this._location.path)}get storage(){return this._service}get parent(){const t=nn(this._location.path);if(t===null)return null;const n=new C(this._location.bucket,t);return new I(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw It(t)}}function xn(e,t,n){e._throwIfRoot("uploadBytes");const s=bn(e.storage,e._location,Pe(),new A(t,!0),n);return e.storage.makeRequestWithTokens(s,Oe).then(r=>({metadata:r,ref:e}))}function vn(e){e._throwIfRoot("getDownloadURL");const t=pn(e.storage,e._location,Pe());return e.storage.makeRequestWithTokens(t,Oe).then(n=>{if(n===null)throw At();return n})}function Nn(e,t){const n=sn(e._location.path,t),s=new C(e._location.bucket,n);return new I(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e){return/^[A-Za-z]+:\/\//.test(e)}function jn(e,t){return new I(e,t)}function Le(e,t){if(e instanceof se){const n=e;if(n._bucket==null)throw Et();const s=new I(n,n._bucket);return t!=null?Le(s,t):s}else return t!==void 0?Nn(e,t):e}function Rn(e,t){if(t&&wn(t)){if(e instanceof se)return jn(e,t);throw Z("To use ref(service, url), the first argument must be a Storage instance.")}else return Le(e,t)}function me(e,t){const n=t==null?void 0:t[we];return n==null?null:C.makeFromBucketSpec(n,e)}function kn(e,t,n,s={}){e.host=`${t}:${n}`;const r=be(t);r&&Ke(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=r?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Xe(o,e.app.options.projectId))}class se{constructor(t,n,s,r,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=Ne,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yt,this._maxUploadRetryTime=xt,this._requests=new Set,r!=null?this._bucket=C.makeFromBucketSpec(r,this._host):this._bucket=me(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,t):this._bucket=me(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){he("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){he("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new I(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Ut(je());{const l=Wt(t,this._appId,s,r,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const pe="@firebase/storage",ge="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="storage";function Tn(e,t,n){return e=q(e),xn(e,t,n)}function Cn(e){return e=q(e),vn(e)}function Dn(e,t){return e=q(e),Rn(e,t)}function En(e=Ge(),t){e=q(e);const s=He(e,Me).getImmediate({identifier:t}),r=We("storage");return r&&Pn(s,...r),s}function Pn(e,t,n,s={}){kn(e,t,n,s)}function An(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new se(n,s,r,t,et)}function Sn(){Je(new Qe(Me,An,"PUBLIC").setMultipleInstances(!0)),ae(pe,ge,""),ae(pe,ge,"esm2020")}Sn();function Fe(e){return/^https?:\/\//.test(e)||/^data:image\//.test(e)}function In({image:e,onRemove:t}){const[n,s]=R.useState(!1);return a.jsxs("figure",{children:[n?a.jsx("div",{className:"admin-image-fallback",children:"Imagen no disponible"}):a.jsx("img",{src:e,alt:"",onError:()=>s(!0)}),a.jsx("button",{type:"button",onClick:t,children:"Quitar"})]})}const Un=["Excelente","Muy bueno","Bueno","Delicado"],On=["Disponible","Consultar","Reservado"],Ln=["brass","green","red","blue","paper","copper"],X={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function Mn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images.filter(Fe),visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function O(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Fn(e){const t=e.rentalPricePerWeek.trim(),n=e.internalNotes.trim(),s={id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(r=>r.trim()).filter(Boolean),rentalPricePerDay:O(e.rentalPricePerDay),description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:O(e.estimatedValue),guaranteePercentage:O(e.guaranteePercentage,.3),minimumDeposit:O(e.minimumDeposit),featuredScore:O(e.featuredScore,50),images:e.images.filter(Fe),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}};return t&&(s.rentalPricePerWeek=O(t)),n&&(s.internalNotes=n),s}function Bn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function $n(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}const zn=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];function J(e){return new Date(e.getFullYear(),e.getMonth(),1)}function fe(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function Vn(e){const t=J(e),n=(t.getDay()+6)%7,s=new Date(t);return s.setDate(t.getDate()-n),Array.from({length:42},(r,o)=>{const l=new Date(s);return l.setDate(s.getDate()+o),{iso:Y(l),inMonth:l.getMonth()===t.getMonth()}})}function qn(e){return new Intl.DateTimeFormat("es-AR",{month:"long",year:"numeric"}).format(e)}function Hn({reservation:e,productName:t,onMessage:n}){const s=_e(),[r,o]=R.useState(e.startDate),[l,m]=R.useState(e.endDate),[h,p]=R.useState(String(e.quantity??1)),[f,N]=R.useState(e.note??""),[d,c]=R.useState(!1),y=async()=>{if(!s||e.source!=="firebase"){n("Esta reserva no se puede editar desde el panel porque no viene de Firestore.");return}if(!r||!l||l<r){n("Revisá las fechas de la reserva antes de guardar.");return}try{c(!0),await ft(F(s,"reservations",e.id),{startDate:r,endDate:l,quantity:Math.max(1,Number(h)||1),rentalDays:bt(r,l),note:f.trim()}),n(`Reserva actualizada: ${t}`)}catch(u){console.error(u);const w=u;n(`No se pudo actualizar la reserva (${w.code??"error desconocido"}). ${w.message??"Revisá tus permisos de admin."}`)}finally{c(!1)}},_=async()=>{if(!s||e.source!=="firebase"){n("Esta reserva no se puede borrar desde el panel porque no viene de Firestore.");return}if(window.confirm(`¿Borrar la reserva de ${t}?`))try{c(!0),await xe(F(s,"reservations",e.id)),n(`Reserva borrada: ${t}`)}catch(u){console.error(u);const w=u;n(`No se pudo borrar la reserva (${w.code??"error desconocido"}). ${w.message??"Revisá tus permisos de admin."}`)}finally{c(!1)}};return a.jsxs("article",{className:"admin-reservation-row",children:[a.jsxs("div",{children:[a.jsx("strong",{children:t}),a.jsx("span",{children:e.customerName||e.customerEmail||"Cliente sin datos visibles"})]}),a.jsxs("div",{className:"admin-reservation-fields",children:[a.jsxs("label",{children:["Desde",a.jsx("input",{className:"gabinete-input",type:"date",value:r,onChange:u=>o(u.target.value)})]}),a.jsxs("label",{children:["Hasta",a.jsx("input",{className:"gabinete-input",type:"date",value:l,onChange:u=>m(u.target.value)})]}),a.jsxs("label",{children:["Cant.",a.jsx("input",{className:"gabinete-input",type:"number",min:"1",value:h,onChange:u=>p(u.target.value)})]})]}),a.jsxs("label",{className:"admin-reservation-note",children:["Nota",a.jsx("input",{className:"gabinete-input",value:f,onChange:u=>N(u.target.value)})]}),a.jsxs("div",{className:"admin-reservation-actions",children:[a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:_,disabled:d,children:[a.jsx(ye,{size:16}),"Borrar"]}),a.jsxs("button",{type:"button",className:"gabinete-button",onClick:y,disabled:d,children:[a.jsx(ve,{size:16}),d?"Guardando...":"Guardar"]})]})]})}function Wn({products:e}){const{reservations:t,syncMode:n}=ut(),[s,r]=R.useState(""),[o,l]=R.useState(()=>J(dt(ht()))),m=R.useMemo(()=>Vn(o),[o]),h=R.useMemo(()=>new Map(e.map(d=>[d.id,d])),[e]),p=Y(J(o)),f=Y(new Date(o.getFullYear(),o.getMonth()+1,0)),N=R.useMemo(()=>t.filter(d=>le(p,f,d.startDate,d.endDate)).sort((d,c)=>d.startDate.localeCompare(c.startDate)||d.productId.localeCompare(c.productId)),[f,p,t]);return a.jsxs("section",{className:"admin-reservations parchment-panel",children:[a.jsxs("div",{className:"admin-reservations-head",children:[a.jsxs("div",{children:[a.jsxs("p",{className:"eyebrow flex items-center gap-2",children:[a.jsx(mt,{size:15}),"Calendario admin"]}),a.jsx("h2",{children:"Pedidos y alquileres por fecha"}),a.jsxs("p",{children:["Fuente de reservas: ",n==="firebase"?"Firestore":"local",". Cada marca bloquea el objeto para futuros clientes."]})]}),a.jsxs("div",{className:"calendar-month-bar admin-calendar-nav",children:[a.jsx("button",{type:"button",onClick:()=>l(d=>fe(d,-1)),children:a.jsx(pt,{size:18})}),a.jsx("strong",{children:qn(o)}),a.jsx("button",{type:"button",onClick:()=>l(d=>fe(d,1)),children:a.jsx(gt,{size:18})})]})]}),a.jsxs("div",{className:"admin-calendar-grid",children:[zn.map(d=>a.jsx("span",{className:"calendar-weekday",children:d},d)),m.map(({iso:d,inMonth:c})=>{const y=t.filter(_=>le(d,d,_.startDate,_.endDate));return a.jsxs("div",{className:`admin-calendar-day ${c?"":"is-outside"} ${y.length>0?"has-reservations":""}`,children:[a.jsx("span",{className:"admin-calendar-number",children:Number(d.slice(-2))}),y.slice(0,2).map(_=>{const u=h.get(_.productId);return a.jsx("span",{className:"admin-calendar-chip",title:(u==null?void 0:u.name)??_.productId,children:(u==null?void 0:u.name)??_.productId},_.id)}),y.length>2&&a.jsxs("span",{className:"admin-calendar-more",children:["+",y.length-2]})]},d)})]}),a.jsxs("div",{className:"admin-reservation-list",children:[a.jsx("p",{className:"eyebrow",children:"Reservas del mes"}),s&&a.jsx("p",{className:"admin-message",children:s}),N.length===0?a.jsx("p",{className:"admin-empty-reservations",children:"No hay objetos alquilados o pedidos para este mes."}):N.map(d=>{const c=h.get(d.productId);return a.jsx(Hn,{reservation:d,productName:(c==null?void 0:c.name)??d.productId,onMessage:r},d.id)})]})]})}function Kn(){const e=tt(),t=_e(),n=e?En(e):null,{user:s,isAdmin:r,checkingAdmin:o,loginWithGoogle:l,logout:m,authError:h}=nt(),{products:p,syncMode:f}=st(),[N,d]=R.useState(""),[c,y]=R.useState(X),[_,u]=R.useState(""),[w,T]=R.useState(!1),[D,j]=R.useState(!1),U=R.useMemo(()=>[...p].sort((i,b)=>i.name.localeCompare(b.name)),[p]),g=(i,b)=>{y(E=>({...E,[i]:b}))},H=async i=>{i.preventDefault(),u(""),await l()},L=()=>{y({...X,id:`EG-${String(p.length+1).padStart(3,"0")}`}),u("")},Be=async i=>{if(i.preventDefault(),!t||!r)return;const b=Fn(c);if(!b.id||!b.name){u("Completá ID y nombre antes de guardar.");return}try{T(!0),await oe(F(t,"products",b.id),b),u(`Producto guardado: ${b.name}`)}catch(E){console.error(E);const W=E;u(`No se pudo guardar el producto (${W.code??"error desconocido"}). ${W.message??"Revisá los datos cargados y tus permisos de admin."}`)}finally{T(!1)}},$e=async()=>{!t||!r||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(T(!0),await xe(F(t,"products",c.id)),T(!1),y(X),u("Producto eliminado."))},ze=()=>{const i=N.trim();if(!/^https?:\/\//.test(i)){u("Pegá una URL pública de imagen que empiece con http o https.");return}g("images",[i,...c.images]),d(""),u("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Ve=async i=>{if(!i||!n||!c.id){u("Completá el ID antes de subir imágenes.");return}try{j(!0);const b=Dn(n,`products/${c.id}/${Date.now()}-${$n(i.name)}`);await Tn(b,i,{contentType:i.type});const E=await Cn(b);g("images",[E,...c.images]),u("Imagen subida. Guardá el producto para conservarla en el catálogo.")}catch(b){console.error(b);const E=b;u(`No se pudo subir la imagen (${E.code??"error desconocido"}). ${E.message??"Revisá las reglas de Storage y tus permisos de admin."}`)}finally{j(!1)}},qe=async()=>{if(!(!t||!r||!window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")))try{T(!0);let i=0;await Promise.all(lt.map(async b=>{const E=F(t,"products",b.id);(await ct(E)).exists()||(await oe(E,b),i+=1)})),u(i>0?`Catálogo base restaurado. Se agregaron ${i} productos.`:"Firestore ya tenía todos los productos base.")}catch(i){console.error(i);const b=i;u(`No se pudo restaurar el catálogo base (${b.code??"error desconocido"}). ${b.message??"Revisá tus permisos de admin."}`)}finally{T(!1)}};return!at||!t?a.jsx("section",{className:"admin-page",children:a.jsxs("div",{className:"admin-card",children:[a.jsx("p",{className:"eyebrow",children:"Admin"}),a.jsx("h1",{children:"Firebase no está configurado"}),a.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):s?o?a.jsx("section",{className:"admin-page",children:a.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):r?a.jsxs("section",{className:"admin-page",children:[a.jsxs("div",{className:"admin-head",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow",children:"Admin"}),a.jsx("h1",{children:"Catálogo"}),a.jsxs("p",{children:["Fuente actual: ",f==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),a.jsxs("div",{className:"admin-actions",children:[a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:qe,disabled:w,children:[a.jsx(_t,{size:17}),"Restaurar catálogo base"]}),a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:m,children:[a.jsx(ie,{size:17}),"Salir"]})]})]}),_&&a.jsxs("p",{className:"admin-message",children:[a.jsx(rt,{size:16}),_]}),a.jsx(Wn,{products:p}),a.jsxs("div",{className:"admin-layout",children:[a.jsxs("aside",{className:"admin-list",children:[a.jsxs("button",{type:"button",className:"admin-new-button",onClick:L,children:[a.jsx(it,{size:16}),"Nuevo producto"]}),U.map(i=>a.jsxs("button",{type:"button",className:c.id===i.id?"is-active":"",onClick:()=>y(Mn(i)),children:[a.jsx("strong",{children:i.name}),a.jsxs("span",{children:[i.id," · ",i.category]})]},i.id))]}),a.jsxs("form",{onSubmit:Be,className:"admin-editor",children:[a.jsxs("div",{className:"admin-editor-title",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow",children:"Ficha editable"}),a.jsx("h2",{children:c.name||"Producto nuevo"})]}),a.jsxs("div",{className:"admin-actions",children:[a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:$e,disabled:!c.id||w,children:[a.jsx(ye,{size:17}),"Eliminar"]}),a.jsxs("button",{type:"submit",className:"gabinete-button",disabled:w,children:[a.jsx(ve,{size:17}),w?"Guardando...":"Guardar"]})]})]}),a.jsxs("div",{className:"admin-grid",children:[a.jsxs("label",{children:["ID",a.jsx("input",{className:"gabinete-input",value:c.id,onChange:i=>g("id",Bn(i.target.value).toUpperCase())})]}),a.jsxs("label",{children:["Nombre",a.jsx("input",{className:"gabinete-input",value:c.name,onChange:i=>g("name",i.target.value)})]}),a.jsxs("label",{children:["Categoría",a.jsx("select",{className:"gabinete-input",value:c.category,onChange:i=>g("category",i.target.value),children:ot.map(i=>a.jsx("option",{children:i},i))})]}),a.jsxs("label",{children:["Estado",a.jsx("select",{className:"gabinete-input",value:c.status,onChange:i=>g("status",i.target.value),children:Un.map(i=>a.jsx("option",{children:i},i))})]}),a.jsxs("label",{children:["Disponibilidad",a.jsx("select",{className:"gabinete-input",value:c.availability,onChange:i=>g("availability",i.target.value),children:On.map(i=>a.jsx("option",{children:i},i))})]}),a.jsxs("label",{children:["Precio diario",a.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:i=>g("rentalPricePerDay",i.target.value)})]}),a.jsxs("label",{children:["Precio semanal",a.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:i=>g("rentalPricePerWeek",i.target.value)})]}),a.jsxs("label",{children:["Valor estimado",a.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:i=>g("estimatedValue",i.target.value)})]}),a.jsxs("label",{children:["Garantía %",a.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:i=>g("guaranteePercentage",i.target.value)})]}),a.jsxs("label",{children:["Depósito mínimo",a.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:i=>g("minimumDeposit",i.target.value)})]}),a.jsxs("label",{children:["Destacado",a.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:i=>g("featuredScore",i.target.value)})]}),a.jsxs("label",{children:["Tags",a.jsx("input",{className:"gabinete-input",value:c.tags,onChange:i=>g("tags",i.target.value),placeholder:"vintage, cine, oficina"})]}),a.jsxs("label",{children:["Medidas",a.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:i=>g("measurements",i.target.value)})]}),a.jsxs("label",{children:["Material",a.jsx("input",{className:"gabinete-input",value:c.material,onChange:i=>g("material",i.target.value)})]}),a.jsxs("label",{children:["Color",a.jsx("input",{className:"gabinete-input",value:c.color,onChange:i=>g("color",i.target.value)})]}),a.jsxs("label",{children:["Época / estilo",a.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:i=>g("eraStyle",i.target.value)})]}),a.jsxs("label",{children:["Tono visual",a.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:i=>g("visualTone",i.target.value),children:Ln.map(i=>a.jsx("option",{children:i},i))})]}),a.jsxs("label",{children:["Símbolo",a.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:i=>g("visualSigil",i.target.value)})]})]}),a.jsxs("label",{className:"admin-wide",children:["Descripción",a.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:i=>g("description",i.target.value)})]}),a.jsxs("label",{className:"admin-wide",children:["Curiosidades",a.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:i=>g("curiosities",i.target.value)})]}),a.jsxs("label",{className:"admin-wide",children:["Notas internas",a.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:i=>g("internalNotes",i.target.value)})]}),a.jsxs("div",{className:"admin-images",children:[a.jsxs("label",{className:"admin-upload",children:[a.jsx(ce,{size:18}),D?"Subiendo...":"Subir archivo",a.jsx("input",{type:"file",accept:"image/*",onChange:i=>{var b;return Ve((b=i.target.files)==null?void 0:b[0])}})]}),a.jsxs("div",{className:"admin-image-url",children:[a.jsxs("label",{children:["URL pública de imagen",a.jsx("input",{className:"gabinete-input",value:N,onChange:i=>d(i.target.value),placeholder:"https://..."})]}),a.jsxs("button",{type:"button",className:"admin-upload",onClick:ze,children:[a.jsx(ce,{size:18}),"Agregar imagen"]})]}),a.jsx("div",{className:"admin-image-grid",children:c.images.map(i=>a.jsx(In,{image:i,onRemove:()=>g("images",c.images.filter(b=>b!==i))},i))})]})]})]})]}):a.jsx("section",{className:"admin-page",children:a.jsxs("div",{className:"admin-card",children:[a.jsx("p",{className:"eyebrow",children:"Sin permiso"}),a.jsx("h1",{children:"Tu usuario no es administrador"}),a.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",a.jsx("strong",{children:s.email})]}),a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:m,children:[a.jsx(ie,{size:17}),"Salir"]})]})}):a.jsx("section",{className:"admin-page",children:a.jsxs("form",{onSubmit:H,className:"admin-card admin-login",children:[a.jsx("span",{className:"admin-lock",children:a.jsx(ue,{size:22})}),a.jsx("p",{className:"eyebrow",children:"Admin"}),a.jsx("h1",{children:"Ingresar al catálogo"}),a.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),a.jsxs("div",{className:"admin-auth-debug",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Auth domain:"})," ",re.authDomain||"sin configurar"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Project ID:"})," ",re.projectId||"sin configurar"]})]}),(_||h)&&a.jsx("p",{className:"admin-message",children:_||h}),a.jsxs("button",{type:"submit",className:"gabinete-button",children:[a.jsx(ue,{size:17}),"Entrar con Google"]})]})})}export{Kn as AdminPage};
