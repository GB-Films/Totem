import{c as z,g as q,_ as Le,a as Be,b as Fe,i as pe,p as Me,d as ze,e as Ve,F as $e,f as He,C as qe,r as te,S as We,h as Ge,j as Xe,k as Ke,u as Ze,l as E,o as Ye,m as Je,n as i,q as ne,s as se,t as Qe,P as et,T as tt,v as nt,w as st,G as it,x as at,y as ie,z as V,A as rt,B as ot}from"./index-Cx-suDR6.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=z("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=z("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=z("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=z("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
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
 */const me="firebasestorage.googleapis.com",ge="storageBucket",ut=120*1e3,dt=600*1e3;/**
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
 */class f extends $e{constructor(t,n,s=0){super(W(t),`Firebase Storage: ${n} (${W(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return W(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var g;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(g||(g={}));function W(e){return"storage/"+e}function Z(){const e="An unknown error occurred, please check the error payload for server response.";return new f(g.UNKNOWN,e)}function ht(e){return new f(g.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function pt(e){return new f(g.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new f(g.UNAUTHENTICATED,e)}function gt(){return new f(g.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ft(e){return new f(g.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function bt(){return new f(g.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _t(){return new f(g.CANCELED,"User canceled the upload/download.")}function yt(e){return new f(g.INVALID_URL,"Invalid URL '"+e+"'.")}function xt(e){return new f(g.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function wt(){return new f(g.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ge+"' property when initializing the app?")}function vt(){return new f(g.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Nt(){return new f(g.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Rt(e){return new f(g.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function K(e){return new f(g.INVALID_ARGUMENT,e)}function fe(){return new f(g.APP_DELETED,"The Firebase app was deleted.")}function kt(e){return new f(g.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function M(e,t){return new f(g.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function F(e){throw new f(g.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class j{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=j.makeFromUrl(t,n)}catch{return new j(t,"")}if(s.path==="")return s;throw xt(t)}static makeFromUrl(t,n){let s=null;const a="([A-Za-z0-9.\\-_]+)";function o(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const l="(/(.*))?$",d=new RegExp("^gs://"+a+l,"i"),u={bucket:1,path:3};function p(v){v.path_=decodeURIComponent(v.path)}const b="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),N="(/([^?#]*).*)?$",k=new RegExp(`^https?://${w}/${b}/b/${a}/o${N}`,"i"),c={bucket:1,path:3},T=n===me?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",y=new RegExp(`^https?://${T}/${a}/${_}`,"i"),x=[{regex:d,indices:u,postModify:o},{regex:k,indices:c,postModify:p},{regex:y,indices:{bucket:1,path:2},postModify:p}];for(let v=0;v<x.length;v++){const S=x[v],L=S.regex.exec(t);if(L){const h=L[S.indices.bucket];let B=L[S.indices.path];B||(B=""),s=new j(h,B),S.postModify(s);break}}if(s==null)throw yt(t);return s}}class Tt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function jt(e,t,n){let s=1,a=null,o=null,l=!1,d=0;function u(){return d===2}let p=!1;function b(..._){p||(p=!0,t.apply(null,_))}function w(_){a=setTimeout(()=>{a=null,e(k,u())},_)}function N(){o&&clearTimeout(o)}function k(_,...y){if(p){N();return}if(_){N(),b.call(null,_,...y);return}if(u()||l){N(),b.call(null,_,...y);return}s<64&&(s*=2);let x;d===1?(d=2,x=0):x=(s+Math.random())*1e3,w(x)}let c=!1;function T(_){c||(c=!0,N(),!p&&(a!==null?(_||(d=2),clearTimeout(a),w(0)):_||(d=1)))}return w(0),o=setTimeout(()=>{l=!0,T(!0)},n),T}function Pt(e){e(!1)}/**
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
 */function Ct(e){return e!==void 0}function Et(e){return typeof e=="object"&&!Array.isArray(e)}function Y(e){return typeof e=="string"||e instanceof String}function le(e){return J()&&e instanceof Blob}function J(){return typeof Blob<"u"}function ce(e,t,n,s){if(s<t)throw K(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw K(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Q(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function be(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const a=t(s)+"="+t(e[s]);n=n+a+"&"}return n=n.slice(0,-1),n}var D;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(D||(D={}));/**
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
 */function At(e,t){const n=e>=500&&e<600,a=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||a||o}/**
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
 */class Ut{constructor(t,n,s,a,o,l,d,u,p,b,w,N=!0,k=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=a,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=d,this.errorCallback_=u,this.timeout_=p,this.progressCallback_=b,this.connectionFactory_=w,this.retry=N,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((c,T)=>{this.resolve_=c,this.reject_=T,this.start_()})}start_(){const t=(s,a)=>{if(a){s(!1,new $(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=d=>{const u=d.loaded,p=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,p)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const d=o.getErrorCode()===D.NO_ERROR,u=o.getStatus();if(!d||At(u,this.additionalRetryCodes_)&&this.retry){const b=o.getErrorCode()===D.ABORT;s(!1,new $(!1,null,b));return}const p=this.successCodes_.indexOf(u)!==-1;s(!0,new $(p,o))})},n=(s,a)=>{const o=this.resolve_,l=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const u=this.callback_(d,d.getResponse());Ct(u)?o(u):o()}catch(u){l(u)}else if(d!==null){const u=Z();u.serverResponse=d.getErrorText(),this.errorCallback_?l(this.errorCallback_(d,u)):l(u)}else if(a.canceled){const u=this.appDelete_?fe():_t();l(u)}else{const u=bt();l(u)}};this.canceled_?n(!1,new $(!1,null,!0)):this.backoffId_=jt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Pt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ${constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function St(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Dt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function It(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ot(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Lt(e,t,n,s,a,o,l=!0,d=!1){const u=be(e.urlParams),p=e.url+u,b=Object.assign({},e.headers);return It(b,t),St(b,n),Dt(b,o),Ot(b,s),new Ut(p,e.method,b,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,a,l,d)}/**
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
 */function Bt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ft(...e){const t=Bt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(J())return new Blob(e);throw new f(g.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Mt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function zt(e){if(typeof atob>"u")throw Rt("base-64");return atob(e)}/**
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
 */const A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class G{constructor(t,n){this.data=t,this.contentType=n||null}}function Vt(e,t){switch(e){case A.RAW:return new G(_e(t));case A.BASE64:case A.BASE64URL:return new G(ye(e,t));case A.DATA_URL:return new G(Ht(t),qt(t))}throw Z()}function _e(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,l=e.charCodeAt(++n);s=65536|(o&1023)<<10|l&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function $t(e){let t;try{t=decodeURIComponent(e)}catch{throw M(A.DATA_URL,"Malformed data URL.")}return _e(t)}function ye(e,t){switch(e){case A.BASE64:{const a=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(a||o)throw M(e,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{const a=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(a||o)throw M(e,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zt(t)}catch(a){throw a.message.includes("polyfill")?a:M(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}class xe{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw M(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Wt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Ht(e){const t=new xe(e);return t.base64?ye(A.BASE64,t.rest):$t(t.rest)}function qt(e){return new xe(e).contentType}function Wt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class U{constructor(t,n){let s=0,a="";le(t)?(this.data_=t,s=t.size,a=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,n){if(le(this.data_)){const s=this.data_,a=Mt(s,t,n);return a===null?null:new U(a)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new U(s,!0)}}static getBlob(...t){if(J()){const n=t.map(s=>s instanceof U?s.data_:s);return new U(Ft.apply(null,n))}else{const n=t.map(l=>Y(l)?Vt(A.RAW,l).data:l.data_);let s=0;n.forEach(l=>{s+=l.byteLength});const a=new Uint8Array(s);let o=0;return n.forEach(l=>{for(let d=0;d<l.length;d++)a[o++]=l[d]}),new U(a,!0)}}uploadData(){return this.data_}}/**
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
 */function we(e){let t;try{t=JSON.parse(e)}catch{return null}return Et(t)?t:null}/**
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
 */function Gt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Xt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function ve(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Kt(e,t){return t}class R{constructor(t,n,s,a){this.server=t,this.local=n||t,this.writable=!!s,this.xform=a||Kt}}let H=null;function Zt(e){return!Y(e)||e.length<2?e:ve(e)}function Ne(){if(H)return H;const e=[];e.push(new R("bucket")),e.push(new R("generation")),e.push(new R("metageneration")),e.push(new R("name","fullPath",!0));function t(o,l){return Zt(l)}const n=new R("name");n.xform=t,e.push(n);function s(o,l){return l!==void 0?Number(l):l}const a=new R("size");return a.xform=s,e.push(a),e.push(new R("timeCreated")),e.push(new R("updated")),e.push(new R("md5Hash",null,!0)),e.push(new R("cacheControl",null,!0)),e.push(new R("contentDisposition",null,!0)),e.push(new R("contentEncoding",null,!0)),e.push(new R("contentLanguage",null,!0)),e.push(new R("contentType",null,!0)),e.push(new R("metadata","customMetadata",!0)),H=e,H}function Yt(e,t){function n(){const s=e.bucket,a=e.fullPath,o=new j(s,a);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Jt(e,t,n){const s={};s.type="file";const a=n.length;for(let o=0;o<a;o++){const l=n[o];s[l.local]=l.xform(s,t[l.server])}return Yt(s,e),s}function Re(e,t,n){const s=we(t);return s===null?null:Jt(e,s,n)}function Qt(e,t,n,s){const a=we(t);if(a===null||!Y(a.downloadTokens))return null;const o=a.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(p=>{const b=e.bucket,w=e.fullPath,N="/b/"+l(b)+"/o/"+l(w),k=Q(N,n,s),c=be({alt:"media",token:p});return k+c})[0]}function en(e,t){const n={},s=t.length;for(let a=0;a<s;a++){const o=t[a];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class ke{constructor(t,n,s,a){this.url=t,this.method=n,this.handler=s,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Te(e){if(!e)throw Z()}function tn(e,t){function n(s,a){const o=Re(e,a,t);return Te(o!==null),o}return n}function nn(e,t){function n(s,a){const o=Re(e,a,t);return Te(o!==null),Qt(o,a,e.host,e._protocol)}return n}function je(e){function t(n,s){let a;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?a=gt():a=mt():n.getStatus()===402?a=pt(e.bucket):n.getStatus()===403?a=ft(e.path):a=s,a.status=n.getStatus(),a.serverResponse=s.serverResponse,a}return t}function sn(e){const t=je(e);function n(s,a){let o=t(s,a);return s.getStatus()===404&&(o=ht(e.path)),o.serverResponse=a.serverResponse,o}return n}function an(e,t,n){const s=t.fullServerUrl(),a=Q(s,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,d=new ke(a,o,nn(e,n),l);return d.errorHandler=sn(t),d}function rn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function on(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=rn(null,t)),s}function ln(e,t,n,s,a){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function d(){let x="";for(let v=0;v<2;v++)x=x+Math.random().toString().slice(2);return x}const u=d();l["Content-Type"]="multipart/related; boundary="+u;const p=on(t,s,a),b=en(p,n),w="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+u+`\r
Content-Type: `+p.contentType+`\r
\r
`,N=`\r
--`+u+"--",k=U.getBlob(w,s,N);if(k===null)throw vt();const c={name:p.fullPath},T=Q(o,e.host,e._protocol),_="POST",y=e.maxUploadRetryTime,P=new ke(T,_,tn(e,n),y);return P.urlParams=c,P.headers=l,P.body=k.uploadData(),P.errorHandler=je(t),P}class cn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=D.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=D.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,a,o){if(this.sent_)throw F("cannot .send() more than once");if(pe(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw F("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw F("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw F("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw F("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class un extends cn{initXhr(){this.xhr_.responseType="text"}}function Pe(){return new un}/**
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
 */class I{constructor(t,n){this._service=t,n instanceof j?this._location=n:this._location=j.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new I(t,n)}get root(){const t=new j(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ve(this._location.path)}get storage(){return this._service}get parent(){const t=Gt(this._location.path);if(t===null)return null;const n=new j(this._location.bucket,t);return new I(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw kt(t)}}function dn(e,t,n){e._throwIfRoot("uploadBytes");const s=ln(e.storage,e._location,Ne(),new U(t,!0),n);return e.storage.makeRequestWithTokens(s,Pe).then(a=>({metadata:a,ref:e}))}function hn(e){e._throwIfRoot("getDownloadURL");const t=an(e.storage,e._location,Ne());return e.storage.makeRequestWithTokens(t,Pe).then(n=>{if(n===null)throw Nt();return n})}function pn(e,t){const n=Xt(e._location.path,t),s=new j(e._location.bucket,n);return new I(e.storage,s)}/**
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
 */function mn(e){return/^[A-Za-z]+:\/\//.test(e)}function gn(e,t){return new I(e,t)}function Ce(e,t){if(e instanceof ee){const n=e;if(n._bucket==null)throw wt();const s=new I(n,n._bucket);return t!=null?Ce(s,t):s}else return t!==void 0?pn(e,t):e}function fn(e,t){if(t&&mn(t)){if(e instanceof ee)return gn(e,t);throw K("To use ref(service, url), the first argument must be a Storage instance.")}else return Ce(e,t)}function ue(e,t){const n=t==null?void 0:t[ge];return n==null?null:j.makeFromBucketSpec(n,e)}function bn(e,t,n,s={}){e.host=`${t}:${n}`;const a=pe(t);a&&Me(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=a?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:ze(o,e.app.options.projectId))}class ee{constructor(t,n,s,a,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=a,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=me,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ut,this._maxUploadRetryTime=dt,this._requests=new Set,a!=null?this._bucket=j.makeFromBucketSpec(a,this._host):this._bucket=ue(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=j.makeFromBucketSpec(this._url,t):this._bucket=ue(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new I(this,t)}_makeRequest(t,n,s,a,o=!0){if(this._deleted)return new Tt(fe());{const l=Lt(t,this._appId,s,a,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,a).getPromise()}}const de="@firebase/storage",he="0.14.3";/**
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
 */const Ee="storage";function _n(e,t,n){return e=q(e),dn(e,t,n)}function yn(e){return e=q(e),hn(e)}function xn(e,t){return e=q(e),fn(e,t)}function wn(e=Fe(),t){e=q(e);const s=Le(e,Ee).getImmediate({identifier:t}),a=Be("storage");return a&&vn(s,...a),s}function vn(e,t,n,s={}){bn(e,t,n,s)}function Nn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new ee(n,s,a,t,We)}function Rn(){He(new qe(Ee,Nn,"PUBLIC").setMultipleInstances(!0)),te(de,he,""),te(de,he,"esm2020")}Rn();const kn=["Excelente","Muy bueno","Bueno","Delicado"],Tn=["Disponible","Consultar","Reservado"],jn=["brass","green","red","blue","paper","copper"],X={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function Pn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images,visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function O(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Cn(e){const t=e.rentalPricePerWeek.trim();return{id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(n=>n.trim()).filter(Boolean),rentalPricePerDay:O(e.rentalPricePerDay),rentalPricePerWeek:t?O(t):void 0,description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:O(e.estimatedValue),guaranteePercentage:O(e.guaranteePercentage,.3),minimumDeposit:O(e.minimumDeposit),featuredScore:O(e.featuredScore,50),internalNotes:e.internalNotes.trim()||void 0,images:e.images.filter(Boolean),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}}}function En(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function An(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}function Sn(){const e=Ge(),t=e?Xe(e):null,n=Ke(),s=e?wn(e):null,{products:a,syncMode:o}=Ze(),[l,d]=E.useState(null),[u,p]=E.useState(!1),[b,w]=E.useState(!0),[N,k]=E.useState(""),[c,T]=E.useState(X),[_,y]=E.useState(""),[P,x]=E.useState(!1),[v,S]=E.useState(!1),L=E.useMemo(()=>[...a].sort((r,m)=>r.name.localeCompare(m.name)),[a]);E.useEffect(()=>{if(!t||!n){w(!1);return}return Ye(t,async r=>{if(d(r),p(!1),w(!!r),!r){w(!1);return}const m=r.email??"",C=m?await ot(V(n,"adminEmails",m)):null;p(!!(C!=null&&C.exists()&&C.data().active===!0)),w(!1)})},[t,n]);const h=(r,m)=>{T(C=>({...C,[r]:m}))},B=async r=>{if(r.preventDefault(),!!t){y("");try{await st(t,new it)}catch(m){console.error(m);const C=m;y(`No se pudo abrir el login de Google (${C.code??"error desconocido"}). ${C.message??"Revisá que el dominio esté autorizado en Firebase Auth."}`)}}},Ae=()=>{T({...X,id:`EG-${String(a.length+1).padStart(3,"0")}`}),y("")},Ue=async r=>{if(r.preventDefault(),!n||!u)return;const m=Cn(c);if(!m.id||!m.name){y("Completá ID y nombre antes de guardar.");return}x(!0),await ie(V(n,"products",m.id),m),x(!1),y(`Producto guardado: ${m.name}`)},Se=async()=>{!n||!u||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(x(!0),await rt(V(n,"products",c.id)),x(!1),T(X),y("Producto eliminado."))},De=()=>{const r=N.trim();if(!/^https?:\/\//.test(r)){y("Pegá una URL pública de imagen que empiece con http o https.");return}h("images",[r,...c.images]),k(""),y("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Ie=async r=>{if(!r||!s||!c.id){y("Completá el ID antes de subir imágenes.");return}S(!0);const m=xn(s,`products/${c.id}/${Date.now()}-${An(r.name)}`);await _n(m,r,{contentType:r.type});const C=await yn(m);h("images",[C,...c.images]),S(!1),y("Imagen subida. Guardá el producto para conservarla en el catálogo.")},Oe=async()=>{!n||!u||!window.confirm("¿Cargar el catálogo local actual en Firestore?")||(x(!0),await Promise.all(at.map(r=>ie(V(n,"products",r.id),r))),x(!1),y("Catálogo local cargado en Firestore."))};return!Je||!t||!n?i.jsx("section",{className:"admin-page",children:i.jsxs("div",{className:"admin-card",children:[i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Firebase no está configurado"}),i.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):l?b?i.jsx("section",{className:"admin-page",children:i.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):u?i.jsxs("section",{className:"admin-page",children:[i.jsxs("div",{className:"admin-head",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Catálogo"}),i.jsxs("p",{children:["Fuente actual: ",o==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),i.jsxs("div",{className:"admin-actions",children:[i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Oe,disabled:P,children:[i.jsx(lt,{size:17}),"Subir catálogo local"]}),i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:()=>t&&se(t),children:[i.jsx(oe,{size:17}),"Salir"]})]})]}),_&&i.jsxs("p",{className:"admin-message",children:[i.jsx(Qe,{size:16}),_]}),i.jsxs("div",{className:"admin-layout",children:[i.jsxs("aside",{className:"admin-list",children:[i.jsxs("button",{type:"button",className:"admin-new-button",onClick:Ae,children:[i.jsx(et,{size:16}),"Nuevo producto"]}),L.map(r=>i.jsxs("button",{type:"button",className:c.id===r.id?"is-active":"",onClick:()=>T(Pn(r)),children:[i.jsx("strong",{children:r.name}),i.jsxs("span",{children:[r.id," · ",r.category]})]},r.id))]}),i.jsxs("form",{onSubmit:Ue,className:"admin-editor",children:[i.jsxs("div",{className:"admin-editor-title",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Ficha editable"}),i.jsx("h2",{children:c.name||"Producto nuevo"})]}),i.jsxs("div",{className:"admin-actions",children:[i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Se,disabled:!c.id||P,children:[i.jsx(tt,{size:17}),"Eliminar"]}),i.jsxs("button",{type:"submit",className:"gabinete-button",disabled:P,children:[i.jsx(ct,{size:17}),P?"Guardando...":"Guardar"]})]})]}),i.jsxs("div",{className:"admin-grid",children:[i.jsxs("label",{children:["ID",i.jsx("input",{className:"gabinete-input",value:c.id,onChange:r=>h("id",En(r.target.value).toUpperCase())})]}),i.jsxs("label",{children:["Nombre",i.jsx("input",{className:"gabinete-input",value:c.name,onChange:r=>h("name",r.target.value)})]}),i.jsxs("label",{children:["Categoría",i.jsx("select",{className:"gabinete-input",value:c.category,onChange:r=>h("category",r.target.value),children:nt.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Estado",i.jsx("select",{className:"gabinete-input",value:c.status,onChange:r=>h("status",r.target.value),children:kn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Disponibilidad",i.jsx("select",{className:"gabinete-input",value:c.availability,onChange:r=>h("availability",r.target.value),children:Tn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Precio diario",i.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:r=>h("rentalPricePerDay",r.target.value)})]}),i.jsxs("label",{children:["Precio semanal",i.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:r=>h("rentalPricePerWeek",r.target.value)})]}),i.jsxs("label",{children:["Valor estimado",i.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:r=>h("estimatedValue",r.target.value)})]}),i.jsxs("label",{children:["Garantía %",i.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:r=>h("guaranteePercentage",r.target.value)})]}),i.jsxs("label",{children:["Depósito mínimo",i.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:r=>h("minimumDeposit",r.target.value)})]}),i.jsxs("label",{children:["Destacado",i.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:r=>h("featuredScore",r.target.value)})]}),i.jsxs("label",{children:["Tags",i.jsx("input",{className:"gabinete-input",value:c.tags,onChange:r=>h("tags",r.target.value),placeholder:"vintage, cine, oficina"})]}),i.jsxs("label",{children:["Medidas",i.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:r=>h("measurements",r.target.value)})]}),i.jsxs("label",{children:["Material",i.jsx("input",{className:"gabinete-input",value:c.material,onChange:r=>h("material",r.target.value)})]}),i.jsxs("label",{children:["Color",i.jsx("input",{className:"gabinete-input",value:c.color,onChange:r=>h("color",r.target.value)})]}),i.jsxs("label",{children:["Época / estilo",i.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:r=>h("eraStyle",r.target.value)})]}),i.jsxs("label",{children:["Tono visual",i.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:r=>h("visualTone",r.target.value),children:jn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Símbolo",i.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:r=>h("visualSigil",r.target.value)})]})]}),i.jsxs("label",{className:"admin-wide",children:["Descripción",i.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:r=>h("description",r.target.value)})]}),i.jsxs("label",{className:"admin-wide",children:["Curiosidades",i.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:r=>h("curiosities",r.target.value)})]}),i.jsxs("label",{className:"admin-wide",children:["Notas internas",i.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:r=>h("internalNotes",r.target.value)})]}),i.jsxs("div",{className:"admin-images",children:[i.jsxs("label",{className:"admin-upload",children:[i.jsx(ae,{size:18}),v?"Subiendo...":"Subir archivo",i.jsx("input",{type:"file",accept:"image/*",onChange:r=>{var m;return Ie((m=r.target.files)==null?void 0:m[0])}})]}),i.jsxs("div",{className:"admin-image-url",children:[i.jsxs("label",{children:["URL pública de imagen",i.jsx("input",{className:"gabinete-input",value:N,onChange:r=>k(r.target.value),placeholder:"https://..."})]}),i.jsxs("button",{type:"button",className:"admin-upload",onClick:De,children:[i.jsx(ae,{size:18}),"Agregar imagen"]})]}),i.jsx("div",{className:"admin-image-grid",children:c.images.map(r=>i.jsxs("figure",{children:[i.jsx("img",{src:r,alt:""}),i.jsx("button",{type:"button",onClick:()=>h("images",c.images.filter(m=>m!==r)),children:"Quitar"})]},r))})]})]})]})]}):i.jsx("section",{className:"admin-page",children:i.jsxs("div",{className:"admin-card",children:[i.jsx("p",{className:"eyebrow",children:"Sin permiso"}),i.jsx("h1",{children:"Tu usuario no es administrador"}),i.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",i.jsx("strong",{children:l.email})]}),i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:()=>t&&se(t),children:[i.jsx(oe,{size:17}),"Salir"]})]})}):i.jsx("section",{className:"admin-page",children:i.jsxs("form",{onSubmit:B,className:"admin-card admin-login",children:[i.jsx("span",{className:"admin-lock",children:i.jsx(re,{size:22})}),i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Ingresar al catálogo"}),i.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),i.jsxs("div",{className:"admin-auth-debug",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Auth domain:"})," ",ne.authDomain||"sin configurar"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Project ID:"})," ",ne.projectId||"sin configurar"]})]}),_&&i.jsx("p",{className:"admin-message",children:_}),i.jsxs("button",{type:"submit",className:"gabinete-button",children:[i.jsx(re,{size:17}),"Entrar con Google"]})]})})}export{Sn as AdminPage};
