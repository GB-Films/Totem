import{c as V,g as z,_ as Le,a as Fe,b as Be,i as pe,p as Me,d as $e,e as Ve,F as ze,f as He,C as qe,r as ne,S as We,h as Ge,j as Xe,u as Ke,k as Ze,l as U,m as Ye,n as i,o as se,L as ie,q as Je,P as Qe,T as et,s as tt,t as nt,v as W,w as st,x as ae,y as it}from"./index-s4Y5p-oh.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=V("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=V("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=V("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
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
 */const me="firebasestorage.googleapis.com",ge="storageBucket",ot=120*1e3,lt=600*1e3;/**
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
 */class b extends ze{constructor(t,n,s=0){super(G(t),`Firebase Storage: ${n} (${G(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var f;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(f||(f={}));function G(e){return"storage/"+e}function Y(){const e="An unknown error occurred, please check the error payload for server response.";return new b(f.UNKNOWN,e)}function ct(e){return new b(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function ut(e){return new b(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new b(f.UNAUTHENTICATED,e)}function ht(){return new b(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pt(e){return new b(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function mt(){return new b(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gt(){return new b(f.CANCELED,"User canceled the upload/download.")}function ft(e){return new b(f.INVALID_URL,"Invalid URL '"+e+"'.")}function bt(e){return new b(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function _t(){return new b(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ge+"' property when initializing the app?")}function yt(){return new b(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xt(){return new b(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wt(e){return new b(f.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Z(e){return new b(f.INVALID_ARGUMENT,e)}function fe(){return new b(f.APP_DELETED,"The Firebase app was deleted.")}function vt(e){return new b(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function B(e,t){return new b(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function F(e){throw new b(f.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class T{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=T.makeFromUrl(t,n)}catch{return new T(t,"")}if(s.path==="")return s;throw bt(t)}static makeFromUrl(t,n){let s=null;const a="([A-Za-z0-9.\\-_]+)";function o(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+a+l,"i"),d={bucket:1,path:3};function g(y){y.path_=decodeURIComponent(y.path)}const _="v[A-Za-z0-9_]+",N=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",c=new RegExp(`^https?://${N}/${_}/b/${a}/o${x}`,"i"),w={bucket:1,path:3},k=n===me?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",E=new RegExp(`^https?://${k}/${a}/${h}`,"i"),j=[{regex:u,indices:d,postModify:o},{regex:c,indices:w,postModify:g},{regex:E,indices:{bucket:1,path:2},postModify:g}];for(let y=0;y<j.length;y++){const I=j[y],p=I.regex.exec(t);if(p){const H=p[I.indices.bucket];let L=p[I.indices.path];L||(L=""),s=new T(H,L),I.postModify(s);break}}if(s==null)throw ft(t);return s}}class Nt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Rt(e,t,n){let s=1,a=null,o=null,l=!1,u=0;function d(){return u===2}let g=!1;function _(...h){g||(g=!0,t.apply(null,h))}function N(h){a=setTimeout(()=>{a=null,e(c,d())},h)}function x(){o&&clearTimeout(o)}function c(h,...E){if(g){x();return}if(h){x(),_.call(null,h,...E);return}if(d()||l){x(),_.call(null,h,...E);return}s<64&&(s*=2);let j;u===1?(u=2,j=0):j=(s+Math.random())*1e3,N(j)}let w=!1;function k(h){w||(w=!0,x(),!g&&(a!==null?(h||(u=2),clearTimeout(a),N(0)):h||(u=1)))}return N(0),o=setTimeout(()=>{l=!0,k(!0)},n),k}function kt(e){e(!1)}/**
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
 */function Tt(e){return e!==void 0}function jt(e){return typeof e=="object"&&!Array.isArray(e)}function J(e){return typeof e=="string"||e instanceof String}function le(e){return Q()&&e instanceof Blob}function Q(){return typeof Blob<"u"}function ce(e,t,n,s){if(s<t)throw Z(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw Z(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ee(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function be(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const a=t(s)+"="+t(e[s]);n=n+a+"&"}return n=n.slice(0,-1),n}var D;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(D||(D={}));/**
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
 */function Pt(e,t){const n=e>=500&&e<600,a=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||a||o}/**
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
 */class Et{constructor(t,n,s,a,o,l,u,d,g,_,N,x=!0,c=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=a,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=d,this.timeout_=g,this.progressCallback_=_,this.connectionFactory_=N,this.retry=x,this.isUsingEmulator=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,k)=>{this.resolve_=w,this.reject_=k,this.start_()})}start_(){const t=(s,a)=>{if(a){s(!1,new M(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=u=>{const d=u.loaded,g=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,g)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const u=o.getErrorCode()===D.NO_ERROR,d=o.getStatus();if(!u||Pt(d,this.additionalRetryCodes_)&&this.retry){const _=o.getErrorCode()===D.ABORT;s(!1,new M(!1,null,_));return}const g=this.successCodes_.indexOf(d)!==-1;s(!0,new M(g,o))})},n=(s,a)=>{const o=this.resolve_,l=this.reject_,u=a.connection;if(a.wasSuccessCode)try{const d=this.callback_(u,u.getResponse());Tt(d)?o(d):o()}catch(d){l(d)}else if(u!==null){const d=Y();d.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,d)):l(d)}else if(a.canceled){const d=this.appDelete_?fe():gt();l(d)}else{const d=mt();l(d)}};this.canceled_?n(!1,new M(!1,null,!0)):this.backoffId_=Rt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&kt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class M{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Ct(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function At(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ut(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Dt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function St(e,t,n,s,a,o,l=!0,u=!1){const d=be(e.urlParams),g=e.url+d,_=Object.assign({},e.headers);return Ut(_,t),Ct(_,n),At(_,o),Dt(_,s),new Et(g,e.method,_,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,a,l,u)}/**
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
 */function It(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ot(...e){const t=It();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Q())return new Blob(e);throw new b(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Lt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Ft(e){if(typeof atob>"u")throw wt("base-64");return atob(e)}/**
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
 */const C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class X{constructor(t,n){this.data=t,this.contentType=n||null}}function Bt(e,t){switch(e){case C.RAW:return new X(_e(t));case C.BASE64:case C.BASE64URL:return new X(ye(e,t));case C.DATA_URL:return new X($t(t),Vt(t))}throw Y()}function _e(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,l=e.charCodeAt(++n);s=65536|(o&1023)<<10|l&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Mt(e){let t;try{t=decodeURIComponent(e)}catch{throw B(C.DATA_URL,"Malformed data URL.")}return _e(t)}function ye(e,t){switch(e){case C.BASE64:{const a=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(a||o)throw B(e,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case C.BASE64URL:{const a=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(a||o)throw B(e,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ft(t)}catch(a){throw a.message.includes("polyfill")?a:B(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}class xe{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw B(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=zt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function $t(e){const t=new xe(e);return t.base64?ye(C.BASE64,t.rest):Mt(t.rest)}function Vt(e){return new xe(e).contentType}function zt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class A{constructor(t,n){let s=0,a="";le(t)?(this.data_=t,s=t.size,a=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,n){if(le(this.data_)){const s=this.data_,a=Lt(s,t,n);return a===null?null:new A(a)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new A(s,!0)}}static getBlob(...t){if(Q()){const n=t.map(s=>s instanceof A?s.data_:s);return new A(Ot.apply(null,n))}else{const n=t.map(l=>J(l)?Bt(C.RAW,l).data:l.data_);let s=0;n.forEach(l=>{s+=l.byteLength});const a=new Uint8Array(s);let o=0;return n.forEach(l=>{for(let u=0;u<l.length;u++)a[o++]=l[u]}),new A(a,!0)}}uploadData(){return this.data_}}/**
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
 */function we(e){let t;try{t=JSON.parse(e)}catch{return null}return jt(t)?t:null}/**
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
 */function Ht(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function ve(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Wt(e,t){return t}class v{constructor(t,n,s,a){this.server=t,this.local=n||t,this.writable=!!s,this.xform=a||Wt}}let $=null;function Gt(e){return!J(e)||e.length<2?e:ve(e)}function Ne(){if($)return $;const e=[];e.push(new v("bucket")),e.push(new v("generation")),e.push(new v("metageneration")),e.push(new v("name","fullPath",!0));function t(o,l){return Gt(l)}const n=new v("name");n.xform=t,e.push(n);function s(o,l){return l!==void 0?Number(l):l}const a=new v("size");return a.xform=s,e.push(a),e.push(new v("timeCreated")),e.push(new v("updated")),e.push(new v("md5Hash",null,!0)),e.push(new v("cacheControl",null,!0)),e.push(new v("contentDisposition",null,!0)),e.push(new v("contentEncoding",null,!0)),e.push(new v("contentLanguage",null,!0)),e.push(new v("contentType",null,!0)),e.push(new v("metadata","customMetadata",!0)),$=e,$}function Xt(e,t){function n(){const s=e.bucket,a=e.fullPath,o=new T(s,a);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Kt(e,t,n){const s={};s.type="file";const a=n.length;for(let o=0;o<a;o++){const l=n[o];s[l.local]=l.xform(s,t[l.server])}return Xt(s,e),s}function Re(e,t,n){const s=we(t);return s===null?null:Kt(e,s,n)}function Zt(e,t,n,s){const a=we(t);if(a===null||!J(a.downloadTokens))return null;const o=a.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(g=>{const _=e.bucket,N=e.fullPath,x="/b/"+l(_)+"/o/"+l(N),c=ee(x,n,s),w=be({alt:"media",token:g});return c+w})[0]}function Yt(e,t){const n={},s=t.length;for(let a=0;a<s;a++){const o=t[a];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class ke{constructor(t,n,s,a){this.url=t,this.method=n,this.handler=s,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Te(e){if(!e)throw Y()}function Jt(e,t){function n(s,a){const o=Re(e,a,t);return Te(o!==null),o}return n}function Qt(e,t){function n(s,a){const o=Re(e,a,t);return Te(o!==null),Zt(o,a,e.host,e._protocol)}return n}function je(e){function t(n,s){let a;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?a=ht():a=dt():n.getStatus()===402?a=ut(e.bucket):n.getStatus()===403?a=pt(e.path):a=s,a.status=n.getStatus(),a.serverResponse=s.serverResponse,a}return t}function en(e){const t=je(e);function n(s,a){let o=t(s,a);return s.getStatus()===404&&(o=ct(e.path)),o.serverResponse=a.serverResponse,o}return n}function tn(e,t,n){const s=t.fullServerUrl(),a=ee(s,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,u=new ke(a,o,Qt(e,n),l);return u.errorHandler=en(t),u}function nn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function sn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=nn(null,t)),s}function an(e,t,n,s,a){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function u(){let j="";for(let y=0;y<2;y++)j=j+Math.random().toString().slice(2);return j}const d=u();l["Content-Type"]="multipart/related; boundary="+d;const g=sn(t,s,a),_=Yt(g,n),N="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+d+`\r
Content-Type: `+g.contentType+`\r
\r
`,x=`\r
--`+d+"--",c=A.getBlob(N,s,x);if(c===null)throw yt();const w={name:g.fullPath},k=ee(o,e.host,e._protocol),h="POST",E=e.maxUploadRetryTime,R=new ke(k,h,Jt(e,n),E);return R.urlParams=w,R.headers=l,R.body=c.uploadData(),R.errorHandler=je(t),R}class rn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=D.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=D.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,a,o){if(this.sent_)throw F("cannot .send() more than once");if(pe(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw F("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw F("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw F("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw F("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class on extends rn{initXhr(){this.xhr_.responseType="text"}}function Pe(){return new on}/**
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
 */class S{constructor(t,n){this._service=t,n instanceof T?this._location=n:this._location=T.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new S(t,n)}get root(){const t=new T(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ve(this._location.path)}get storage(){return this._service}get parent(){const t=Ht(this._location.path);if(t===null)return null;const n=new T(this._location.bucket,t);return new S(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw vt(t)}}function ln(e,t,n){e._throwIfRoot("uploadBytes");const s=an(e.storage,e._location,Ne(),new A(t,!0),n);return e.storage.makeRequestWithTokens(s,Pe).then(a=>({metadata:a,ref:e}))}function cn(e){e._throwIfRoot("getDownloadURL");const t=tn(e.storage,e._location,Ne());return e.storage.makeRequestWithTokens(t,Pe).then(n=>{if(n===null)throw xt();return n})}function un(e,t){const n=qt(e._location.path,t),s=new T(e._location.bucket,n);return new S(e.storage,s)}/**
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
 */function dn(e){return/^[A-Za-z]+:\/\//.test(e)}function hn(e,t){return new S(e,t)}function Ee(e,t){if(e instanceof te){const n=e;if(n._bucket==null)throw _t();const s=new S(n,n._bucket);return t!=null?Ee(s,t):s}else return t!==void 0?un(e,t):e}function pn(e,t){if(t&&dn(t)){if(e instanceof te)return hn(e,t);throw Z("To use ref(service, url), the first argument must be a Storage instance.")}else return Ee(e,t)}function ue(e,t){const n=t==null?void 0:t[ge];return n==null?null:T.makeFromBucketSpec(n,e)}function mn(e,t,n,s={}){e.host=`${t}:${n}`;const a=pe(t);a&&Me(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=a?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:$e(o,e.app.options.projectId))}class te{constructor(t,n,s,a,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=a,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=me,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ot,this._maxUploadRetryTime=lt,this._requests=new Set,a!=null?this._bucket=T.makeFromBucketSpec(a,this._host):this._bucket=ue(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=T.makeFromBucketSpec(this._url,t):this._bucket=ue(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new S(this,t)}_makeRequest(t,n,s,a,o=!0){if(this._deleted)return new Nt(fe());{const l=St(t,this._appId,s,a,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,a).getPromise()}}const de="@firebase/storage",he="0.14.3";/**
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
 */const Ce="storage";function gn(e,t,n){return e=z(e),ln(e,t,n)}function fn(e){return e=z(e),cn(e)}function bn(e,t){return e=z(e),pn(e,t)}function _n(e=Be(),t){e=z(e);const s=Le(e,Ce).getImmediate({identifier:t}),a=Fe("storage");return a&&yn(s,...a),s}function yn(e,t,n,s={}){mn(e,t,n,s)}function xn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new te(n,s,a,t,We)}function wn(){He(new qe(Ce,xn,"PUBLIC").setMultipleInstances(!0)),ne(de,he,""),ne(de,he,"esm2020")}wn();function Ae(e){return/^https?:\/\//.test(e)||/^data:image\//.test(e)}function vn({image:e,onRemove:t}){const[n,s]=U.useState(!1);return i.jsxs("figure",{children:[n?i.jsx("div",{className:"admin-image-fallback",children:"Imagen no disponible"}):i.jsx("img",{src:e,alt:"",onError:()=>s(!0)}),i.jsx("button",{type:"button",onClick:t,children:"Quitar"})]})}const Nn=["Excelente","Muy bueno","Bueno","Delicado"],Rn=["Disponible","Consultar","Reservado"],kn=["brass","green","red","blue","paper","copper"],K={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function Tn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images.filter(Ae),visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function O(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function jn(e){const t=e.rentalPricePerWeek.trim(),n=e.internalNotes.trim(),s={id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(a=>a.trim()).filter(Boolean),rentalPricePerDay:O(e.rentalPricePerDay),description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:O(e.estimatedValue),guaranteePercentage:O(e.guaranteePercentage,.3),minimumDeposit:O(e.minimumDeposit),featuredScore:O(e.featuredScore,50),images:e.images.filter(Ae),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}};return t&&(s.rentalPricePerWeek=O(t)),n&&(s.internalNotes=n),s}function Pn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function En(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}function An(){const e=Ge(),t=Xe(),n=e?_n(e):null,{user:s,isAdmin:a,checkingAdmin:o,loginWithGoogle:l,logout:u,authError:d}=Ke(),{products:g,syncMode:_}=Ze(),[N,x]=U.useState(""),[c,w]=U.useState(K),[k,h]=U.useState(""),[E,R]=U.useState(!1),[j,y]=U.useState(!1),I=U.useMemo(()=>[...g].sort((r,m)=>r.name.localeCompare(m.name)),[g]),p=(r,m)=>{w(P=>({...P,[r]:m}))},H=async r=>{r.preventDefault(),h(""),await l()},L=()=>{w({...K,id:`EG-${String(g.length+1).padStart(3,"0")}`}),h("")},Ue=async r=>{if(r.preventDefault(),!t||!a)return;const m=jn(c);if(!m.id||!m.name){h("Completá ID y nombre antes de guardar.");return}try{R(!0),await ae(W(t,"products",m.id),m),h(`Producto guardado: ${m.name}`)}catch(P){console.error(P);const q=P;h(`No se pudo guardar el producto (${q.code??"error desconocido"}). ${q.message??"Revisá los datos cargados y tus permisos de admin."}`)}finally{R(!1)}},De=async()=>{!t||!a||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(R(!0),await it(W(t,"products",c.id)),R(!1),w(K),h("Producto eliminado."))},Se=()=>{const r=N.trim();if(!/^https?:\/\//.test(r)){h("Pegá una URL pública de imagen que empiece con http o https.");return}p("images",[r,...c.images]),x(""),h("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Ie=async r=>{if(!r||!n||!c.id){h("Completá el ID antes de subir imágenes.");return}try{y(!0);const m=bn(n,`products/${c.id}/${Date.now()}-${En(r.name)}`);await gn(m,r,{contentType:r.type});const P=await fn(m);p("images",[P,...c.images]),h("Imagen subida. Guardá el producto para conservarla en el catálogo.")}catch(m){console.error(m);const P=m;h(`No se pudo subir la imagen (${P.code??"error desconocido"}). ${P.message??"Revisá las reglas de Storage y tus permisos de admin."}`)}finally{y(!1)}},Oe=async()=>{if(!(!t||!a||!window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")))try{R(!0);let r=0;await Promise.all(nt.map(async m=>{const P=W(t,"products",m.id);(await st(P)).exists()||(await ae(P,m),r+=1)})),h(r>0?`Catálogo base restaurado. Se agregaron ${r} productos.`:"Firestore ya tenía todos los productos base.")}catch(r){console.error(r);const m=r;h(`No se pudo restaurar el catálogo base (${m.code??"error desconocido"}). ${m.message??"Revisá tus permisos de admin."}`)}finally{R(!1)}};return!Ye||!t?i.jsx("section",{className:"admin-page",children:i.jsxs("div",{className:"admin-card",children:[i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Firebase no está configurado"}),i.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):s?o?i.jsx("section",{className:"admin-page",children:i.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):a?i.jsxs("section",{className:"admin-page",children:[i.jsxs("div",{className:"admin-head",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Catálogo"}),i.jsxs("p",{children:["Fuente actual: ",_==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),i.jsxs("div",{className:"admin-actions",children:[i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Oe,disabled:E,children:[i.jsx(at,{size:17}),"Restaurar catálogo base"]}),i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:u,children:[i.jsx(ie,{size:17}),"Salir"]})]})]}),k&&i.jsxs("p",{className:"admin-message",children:[i.jsx(Je,{size:16}),k]}),i.jsxs("div",{className:"admin-layout",children:[i.jsxs("aside",{className:"admin-list",children:[i.jsxs("button",{type:"button",className:"admin-new-button",onClick:L,children:[i.jsx(Qe,{size:16}),"Nuevo producto"]}),I.map(r=>i.jsxs("button",{type:"button",className:c.id===r.id?"is-active":"",onClick:()=>w(Tn(r)),children:[i.jsx("strong",{children:r.name}),i.jsxs("span",{children:[r.id," · ",r.category]})]},r.id))]}),i.jsxs("form",{onSubmit:Ue,className:"admin-editor",children:[i.jsxs("div",{className:"admin-editor-title",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Ficha editable"}),i.jsx("h2",{children:c.name||"Producto nuevo"})]}),i.jsxs("div",{className:"admin-actions",children:[i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:De,disabled:!c.id||E,children:[i.jsx(et,{size:17}),"Eliminar"]}),i.jsxs("button",{type:"submit",className:"gabinete-button",disabled:E,children:[i.jsx(rt,{size:17}),E?"Guardando...":"Guardar"]})]})]}),i.jsxs("div",{className:"admin-grid",children:[i.jsxs("label",{children:["ID",i.jsx("input",{className:"gabinete-input",value:c.id,onChange:r=>p("id",Pn(r.target.value).toUpperCase())})]}),i.jsxs("label",{children:["Nombre",i.jsx("input",{className:"gabinete-input",value:c.name,onChange:r=>p("name",r.target.value)})]}),i.jsxs("label",{children:["Categoría",i.jsx("select",{className:"gabinete-input",value:c.category,onChange:r=>p("category",r.target.value),children:tt.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Estado",i.jsx("select",{className:"gabinete-input",value:c.status,onChange:r=>p("status",r.target.value),children:Nn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Disponibilidad",i.jsx("select",{className:"gabinete-input",value:c.availability,onChange:r=>p("availability",r.target.value),children:Rn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Precio diario",i.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:r=>p("rentalPricePerDay",r.target.value)})]}),i.jsxs("label",{children:["Precio semanal",i.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:r=>p("rentalPricePerWeek",r.target.value)})]}),i.jsxs("label",{children:["Valor estimado",i.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:r=>p("estimatedValue",r.target.value)})]}),i.jsxs("label",{children:["Garantía %",i.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:r=>p("guaranteePercentage",r.target.value)})]}),i.jsxs("label",{children:["Depósito mínimo",i.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:r=>p("minimumDeposit",r.target.value)})]}),i.jsxs("label",{children:["Destacado",i.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:r=>p("featuredScore",r.target.value)})]}),i.jsxs("label",{children:["Tags",i.jsx("input",{className:"gabinete-input",value:c.tags,onChange:r=>p("tags",r.target.value),placeholder:"vintage, cine, oficina"})]}),i.jsxs("label",{children:["Medidas",i.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:r=>p("measurements",r.target.value)})]}),i.jsxs("label",{children:["Material",i.jsx("input",{className:"gabinete-input",value:c.material,onChange:r=>p("material",r.target.value)})]}),i.jsxs("label",{children:["Color",i.jsx("input",{className:"gabinete-input",value:c.color,onChange:r=>p("color",r.target.value)})]}),i.jsxs("label",{children:["Época / estilo",i.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:r=>p("eraStyle",r.target.value)})]}),i.jsxs("label",{children:["Tono visual",i.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:r=>p("visualTone",r.target.value),children:kn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Símbolo",i.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:r=>p("visualSigil",r.target.value)})]})]}),i.jsxs("label",{className:"admin-wide",children:["Descripción",i.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:r=>p("description",r.target.value)})]}),i.jsxs("label",{className:"admin-wide",children:["Curiosidades",i.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:r=>p("curiosities",r.target.value)})]}),i.jsxs("label",{className:"admin-wide",children:["Notas internas",i.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:r=>p("internalNotes",r.target.value)})]}),i.jsxs("div",{className:"admin-images",children:[i.jsxs("label",{className:"admin-upload",children:[i.jsx(re,{size:18}),j?"Subiendo...":"Subir archivo",i.jsx("input",{type:"file",accept:"image/*",onChange:r=>{var m;return Ie((m=r.target.files)==null?void 0:m[0])}})]}),i.jsxs("div",{className:"admin-image-url",children:[i.jsxs("label",{children:["URL pública de imagen",i.jsx("input",{className:"gabinete-input",value:N,onChange:r=>x(r.target.value),placeholder:"https://..."})]}),i.jsxs("button",{type:"button",className:"admin-upload",onClick:Se,children:[i.jsx(re,{size:18}),"Agregar imagen"]})]}),i.jsx("div",{className:"admin-image-grid",children:c.images.map(r=>i.jsx(vn,{image:r,onRemove:()=>p("images",c.images.filter(m=>m!==r))},r))})]})]})]})]}):i.jsx("section",{className:"admin-page",children:i.jsxs("div",{className:"admin-card",children:[i.jsx("p",{className:"eyebrow",children:"Sin permiso"}),i.jsx("h1",{children:"Tu usuario no es administrador"}),i.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",i.jsx("strong",{children:s.email})]}),i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:u,children:[i.jsx(ie,{size:17}),"Salir"]})]})}):i.jsx("section",{className:"admin-page",children:i.jsxs("form",{onSubmit:H,className:"admin-card admin-login",children:[i.jsx("span",{className:"admin-lock",children:i.jsx(oe,{size:22})}),i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Ingresar al catálogo"}),i.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),i.jsxs("div",{className:"admin-auth-debug",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Auth domain:"})," ",se.authDomain||"sin configurar"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Project ID:"})," ",se.projectId||"sin configurar"]})]}),(k||d)&&i.jsx("p",{className:"admin-message",children:k||d}),i.jsxs("button",{type:"submit",className:"gabinete-button",children:[i.jsx(oe,{size:17}),"Entrar con Google"]})]})})}export{An as AdminPage};
