import{c as V,g as z,_ as Ie,a as Oe,b as Le,i as he,p as Be,d as Fe,e as Me,F as $e,f as Ve,C as ze,r as te,S as He,h as We,j as qe,u as Ge,k as Xe,l as I,m as Ke,n as i,o as ne,L as se,q as Ze,P as Ye,T as Je,s as Qe,t as et,v as ie,w as W,x as tt}from"./index-B1ysD5k5.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=V("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=V("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=V("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
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
 */const pe="firebasestorage.googleapis.com",me="storageBucket",it=120*1e3,at=600*1e3;/**
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
 */class f extends $e{constructor(t,n,s=0){super(q(t),`Firebase Storage: ${n} (${q(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return q(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var g;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(g||(g={}));function q(e){return"storage/"+e}function Z(){const e="An unknown error occurred, please check the error payload for server response.";return new f(g.UNKNOWN,e)}function rt(e){return new f(g.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function ot(e){return new f(g.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new f(g.UNAUTHENTICATED,e)}function ct(){return new f(g.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ut(e){return new f(g.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function dt(){return new f(g.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ht(){return new f(g.CANCELED,"User canceled the upload/download.")}function pt(e){return new f(g.INVALID_URL,"Invalid URL '"+e+"'.")}function mt(e){return new f(g.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function gt(){return new f(g.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+me+"' property when initializing the app?")}function ft(){return new f(g.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bt(){return new f(g.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _t(e){return new f(g.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function K(e){return new f(g.INVALID_ARGUMENT,e)}function ge(){return new f(g.APP_DELETED,"The Firebase app was deleted.")}function yt(e){return new f(g.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function F(e,t){return new f(g.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function B(e){throw new f(g.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class T{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=T.makeFromUrl(t,n)}catch{return new T(t,"")}if(s.path==="")return s;throw mt(t)}static makeFromUrl(t,n){let s=null;const a="([A-Za-z0-9.\\-_]+)";function o(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+a+l,"i"),d={bucket:1,path:3};function m(y){y.path_=decodeURIComponent(y.path)}const b="v[A-Za-z0-9_]+",N=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",c=new RegExp(`^https?://${N}/${b}/b/${a}/o${x}`,"i"),w={bucket:1,path:3},k=n===pe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",P=new RegExp(`^https?://${k}/${a}/${p}`,"i"),j=[{regex:u,indices:d,postModify:o},{regex:c,indices:w,postModify:m},{regex:P,indices:{bucket:1,path:2},postModify:m}];for(let y=0;y<j.length;y++){const D=j[y],h=D.regex.exec(t);if(h){const H=h[D.indices.bucket];let L=h[D.indices.path];L||(L=""),s=new T(H,L),D.postModify(s);break}}if(s==null)throw pt(t);return s}}class xt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function wt(e,t,n){let s=1,a=null,o=null,l=!1,u=0;function d(){return u===2}let m=!1;function b(...p){m||(m=!0,t.apply(null,p))}function N(p){a=setTimeout(()=>{a=null,e(c,d())},p)}function x(){o&&clearTimeout(o)}function c(p,...P){if(m){x();return}if(p){x(),b.call(null,p,...P);return}if(d()||l){x(),b.call(null,p,...P);return}s<64&&(s*=2);let j;u===1?(u=2,j=0):j=(s+Math.random())*1e3,N(j)}let w=!1;function k(p){w||(w=!0,x(),!m&&(a!==null?(p||(u=2),clearTimeout(a),N(0)):p||(u=1)))}return N(0),o=setTimeout(()=>{l=!0,k(!0)},n),k}function vt(e){e(!1)}/**
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
 */function Nt(e){return e!==void 0}function Rt(e){return typeof e=="object"&&!Array.isArray(e)}function Y(e){return typeof e=="string"||e instanceof String}function oe(e){return J()&&e instanceof Blob}function J(){return typeof Blob<"u"}function le(e,t,n,s){if(s<t)throw K(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw K(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Q(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function fe(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const a=t(s)+"="+t(e[s]);n=n+a+"&"}return n=n.slice(0,-1),n}var A;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(A||(A={}));/**
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
 */function kt(e,t){const n=e>=500&&e<600,a=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||a||o}/**
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
 */class Tt{constructor(t,n,s,a,o,l,u,d,m,b,N,x=!0,c=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=a,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=d,this.timeout_=m,this.progressCallback_=b,this.connectionFactory_=N,this.retry=x,this.isUsingEmulator=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,k)=>{this.resolve_=w,this.reject_=k,this.start_()})}start_(){const t=(s,a)=>{if(a){s(!1,new M(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=u=>{const d=u.loaded,m=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,m)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const u=o.getErrorCode()===A.NO_ERROR,d=o.getStatus();if(!u||kt(d,this.additionalRetryCodes_)&&this.retry){const b=o.getErrorCode()===A.ABORT;s(!1,new M(!1,null,b));return}const m=this.successCodes_.indexOf(d)!==-1;s(!0,new M(m,o))})},n=(s,a)=>{const o=this.resolve_,l=this.reject_,u=a.connection;if(a.wasSuccessCode)try{const d=this.callback_(u,u.getResponse());Nt(d)?o(d):o()}catch(d){l(d)}else if(u!==null){const d=Z();d.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,d)):l(d)}else if(a.canceled){const d=this.appDelete_?ge():ht();l(d)}else{const d=dt();l(d)}};this.canceled_?n(!1,new M(!1,null,!0)):this.backoffId_=wt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&vt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class M{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function jt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Pt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ct(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Et(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function At(e,t,n,s,a,o,l=!0,u=!1){const d=fe(e.urlParams),m=e.url+d,b=Object.assign({},e.headers);return Ct(b,t),jt(b,n),Pt(b,o),Et(b,s),new Tt(m,e.method,b,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,a,l,u)}/**
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
 */function Ut(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Dt(...e){const t=Ut();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(J())return new Blob(e);throw new f(g.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function St(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function It(e){if(typeof atob>"u")throw _t("base-64");return atob(e)}/**
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
 */const C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class G{constructor(t,n){this.data=t,this.contentType=n||null}}function Ot(e,t){switch(e){case C.RAW:return new G(be(t));case C.BASE64:case C.BASE64URL:return new G(_e(e,t));case C.DATA_URL:return new G(Bt(t),Ft(t))}throw Z()}function be(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,l=e.charCodeAt(++n);s=65536|(o&1023)<<10|l&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Lt(e){let t;try{t=decodeURIComponent(e)}catch{throw F(C.DATA_URL,"Malformed data URL.")}return be(t)}function _e(e,t){switch(e){case C.BASE64:{const a=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(a||o)throw F(e,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case C.BASE64URL:{const a=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(a||o)throw F(e,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=It(t)}catch(a){throw a.message.includes("polyfill")?a:F(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}class ye{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw F(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Mt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Bt(e){const t=new ye(e);return t.base64?_e(C.BASE64,t.rest):Lt(t.rest)}function Ft(e){return new ye(e).contentType}function Mt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class E{constructor(t,n){let s=0,a="";oe(t)?(this.data_=t,s=t.size,a=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,n){if(oe(this.data_)){const s=this.data_,a=St(s,t,n);return a===null?null:new E(a)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new E(s,!0)}}static getBlob(...t){if(J()){const n=t.map(s=>s instanceof E?s.data_:s);return new E(Dt.apply(null,n))}else{const n=t.map(l=>Y(l)?Ot(C.RAW,l).data:l.data_);let s=0;n.forEach(l=>{s+=l.byteLength});const a=new Uint8Array(s);let o=0;return n.forEach(l=>{for(let u=0;u<l.length;u++)a[o++]=l[u]}),new E(a,!0)}}uploadData(){return this.data_}}/**
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
 */function xe(e){let t;try{t=JSON.parse(e)}catch{return null}return Rt(t)?t:null}/**
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
 */function $t(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Vt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function we(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function zt(e,t){return t}class v{constructor(t,n,s,a){this.server=t,this.local=n||t,this.writable=!!s,this.xform=a||zt}}let $=null;function Ht(e){return!Y(e)||e.length<2?e:we(e)}function ve(){if($)return $;const e=[];e.push(new v("bucket")),e.push(new v("generation")),e.push(new v("metageneration")),e.push(new v("name","fullPath",!0));function t(o,l){return Ht(l)}const n=new v("name");n.xform=t,e.push(n);function s(o,l){return l!==void 0?Number(l):l}const a=new v("size");return a.xform=s,e.push(a),e.push(new v("timeCreated")),e.push(new v("updated")),e.push(new v("md5Hash",null,!0)),e.push(new v("cacheControl",null,!0)),e.push(new v("contentDisposition",null,!0)),e.push(new v("contentEncoding",null,!0)),e.push(new v("contentLanguage",null,!0)),e.push(new v("contentType",null,!0)),e.push(new v("metadata","customMetadata",!0)),$=e,$}function Wt(e,t){function n(){const s=e.bucket,a=e.fullPath,o=new T(s,a);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function qt(e,t,n){const s={};s.type="file";const a=n.length;for(let o=0;o<a;o++){const l=n[o];s[l.local]=l.xform(s,t[l.server])}return Wt(s,e),s}function Ne(e,t,n){const s=xe(t);return s===null?null:qt(e,s,n)}function Gt(e,t,n,s){const a=xe(t);if(a===null||!Y(a.downloadTokens))return null;const o=a.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(m=>{const b=e.bucket,N=e.fullPath,x="/b/"+l(b)+"/o/"+l(N),c=Q(x,n,s),w=fe({alt:"media",token:m});return c+w})[0]}function Xt(e,t){const n={},s=t.length;for(let a=0;a<s;a++){const o=t[a];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Re{constructor(t,n,s,a){this.url=t,this.method=n,this.handler=s,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ke(e){if(!e)throw Z()}function Kt(e,t){function n(s,a){const o=Ne(e,a,t);return ke(o!==null),o}return n}function Zt(e,t){function n(s,a){const o=Ne(e,a,t);return ke(o!==null),Gt(o,a,e.host,e._protocol)}return n}function Te(e){function t(n,s){let a;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?a=ct():a=lt():n.getStatus()===402?a=ot(e.bucket):n.getStatus()===403?a=ut(e.path):a=s,a.status=n.getStatus(),a.serverResponse=s.serverResponse,a}return t}function Yt(e){const t=Te(e);function n(s,a){let o=t(s,a);return s.getStatus()===404&&(o=rt(e.path)),o.serverResponse=a.serverResponse,o}return n}function Jt(e,t,n){const s=t.fullServerUrl(),a=Q(s,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,u=new Re(a,o,Zt(e,n),l);return u.errorHandler=Yt(t),u}function Qt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function en(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Qt(null,t)),s}function tn(e,t,n,s,a){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function u(){let j="";for(let y=0;y<2;y++)j=j+Math.random().toString().slice(2);return j}const d=u();l["Content-Type"]="multipart/related; boundary="+d;const m=en(t,s,a),b=Xt(m,n),N="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+d+`\r
Content-Type: `+m.contentType+`\r
\r
`,x=`\r
--`+d+"--",c=E.getBlob(N,s,x);if(c===null)throw ft();const w={name:m.fullPath},k=Q(o,e.host,e._protocol),p="POST",P=e.maxUploadRetryTime,R=new Re(k,p,Kt(e,n),P);return R.urlParams=w,R.headers=l,R.body=c.uploadData(),R.errorHandler=Te(t),R}class nn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=A.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=A.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=A.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,a,o){if(this.sent_)throw B("cannot .send() more than once");if(he(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw B("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw B("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw B("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw B("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class sn extends nn{initXhr(){this.xhr_.responseType="text"}}function je(){return new sn}/**
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
 */class U{constructor(t,n){this._service=t,n instanceof T?this._location=n:this._location=T.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new U(t,n)}get root(){const t=new T(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return we(this._location.path)}get storage(){return this._service}get parent(){const t=$t(this._location.path);if(t===null)return null;const n=new T(this._location.bucket,t);return new U(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw yt(t)}}function an(e,t,n){e._throwIfRoot("uploadBytes");const s=tn(e.storage,e._location,ve(),new E(t,!0),n);return e.storage.makeRequestWithTokens(s,je).then(a=>({metadata:a,ref:e}))}function rn(e){e._throwIfRoot("getDownloadURL");const t=Jt(e.storage,e._location,ve());return e.storage.makeRequestWithTokens(t,je).then(n=>{if(n===null)throw bt();return n})}function on(e,t){const n=Vt(e._location.path,t),s=new T(e._location.bucket,n);return new U(e.storage,s)}/**
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
 */function ln(e){return/^[A-Za-z]+:\/\//.test(e)}function cn(e,t){return new U(e,t)}function Pe(e,t){if(e instanceof ee){const n=e;if(n._bucket==null)throw gt();const s=new U(n,n._bucket);return t!=null?Pe(s,t):s}else return t!==void 0?on(e,t):e}function un(e,t){if(t&&ln(t)){if(e instanceof ee)return cn(e,t);throw K("To use ref(service, url), the first argument must be a Storage instance.")}else return Pe(e,t)}function ce(e,t){const n=t==null?void 0:t[me];return n==null?null:T.makeFromBucketSpec(n,e)}function dn(e,t,n,s={}){e.host=`${t}:${n}`;const a=he(t);a&&Be(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=a?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Fe(o,e.app.options.projectId))}class ee{constructor(t,n,s,a,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=a,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=pe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=it,this._maxUploadRetryTime=at,this._requests=new Set,a!=null?this._bucket=T.makeFromBucketSpec(a,this._host):this._bucket=ce(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=T.makeFromBucketSpec(this._url,t):this._bucket=ce(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){le("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){le("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,n,s,a,o=!0){if(this._deleted)return new xt(ge());{const l=At(t,this._appId,s,a,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,a).getPromise()}}const ue="@firebase/storage",de="0.14.3";/**
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
 */const Ce="storage";function hn(e,t,n){return e=z(e),an(e,t,n)}function pn(e){return e=z(e),rn(e)}function mn(e,t){return e=z(e),un(e,t)}function gn(e=Le(),t){e=z(e);const s=Ie(e,Ce).getImmediate({identifier:t}),a=Oe("storage");return a&&fn(s,...a),s}function fn(e,t,n,s={}){dn(e,t,n,s)}function bn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new ee(n,s,a,t,He)}function _n(){Ve(new ze(Ce,bn,"PUBLIC").setMultipleInstances(!0)),te(ue,de,""),te(ue,de,"esm2020")}_n();const yn=["Excelente","Muy bueno","Bueno","Delicado"],xn=["Disponible","Consultar","Reservado"],wn=["brass","green","red","blue","paper","copper"],X={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function vn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images,visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function O(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Nn(e){const t=e.rentalPricePerWeek.trim();return{id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(n=>n.trim()).filter(Boolean),rentalPricePerDay:O(e.rentalPricePerDay),rentalPricePerWeek:t?O(t):void 0,description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:O(e.estimatedValue),guaranteePercentage:O(e.guaranteePercentage,.3),minimumDeposit:O(e.minimumDeposit),featuredScore:O(e.featuredScore,50),internalNotes:e.internalNotes.trim()||void 0,images:e.images.filter(Boolean),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}}}function Rn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function kn(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}function jn(){const e=We(),t=qe(),n=e?gn(e):null,{user:s,isAdmin:a,checkingAdmin:o,loginWithGoogle:l,logout:u,authError:d}=Ge(),{products:m,syncMode:b}=Xe(),[N,x]=I.useState(""),[c,w]=I.useState(X),[k,p]=I.useState(""),[P,R]=I.useState(!1),[j,y]=I.useState(!1),D=I.useMemo(()=>[...m].sort((r,_)=>r.name.localeCompare(_.name)),[m]),h=(r,_)=>{w(S=>({...S,[r]:_}))},H=async r=>{r.preventDefault(),p(""),await l()},L=()=>{w({...X,id:`EG-${String(m.length+1).padStart(3,"0")}`}),p("")},Ee=async r=>{if(r.preventDefault(),!t||!a)return;const _=Nn(c);if(!_.id||!_.name){p("Completá ID y nombre antes de guardar.");return}R(!0),await ie(W(t,"products",_.id),_),R(!1),p(`Producto guardado: ${_.name}`)},Ae=async()=>{!t||!a||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(R(!0),await tt(W(t,"products",c.id)),R(!1),w(X),p("Producto eliminado."))},Ue=()=>{const r=N.trim();if(!/^https?:\/\//.test(r)){p("Pegá una URL pública de imagen que empiece con http o https.");return}h("images",[r,...c.images]),x(""),p("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},De=async r=>{if(!r||!n||!c.id){p("Complet� el ID antes de subir im�genes.");return}try{y(!0);const _=mn(n,`products/${c.id}/${Date.now()}-${kn(r.name)}`);await hn(_,r,{contentType:r.type});const S=await pn(_);h("images",[S,...c.images]),p("Imagen subida. Guard� el producto para conservarla en el cat�logo.")}catch(_){console.error(_);const S=_;p(`No se pudo subir la imagen (${S.code??"error desconocido"}). ${S.message??"Revis� las reglas de Storage y tus permisos de admin."}`)}finally{y(!1)}},Se=async()=>{!t||!a||!window.confirm("¿Cargar el catálogo local actual en Firestore?")||(R(!0),await Promise.all(et.map(r=>ie(W(t,"products",r.id),r))),R(!1),p("Catálogo local cargado en Firestore."))};return!Ke||!t?i.jsx("section",{className:"admin-page",children:i.jsxs("div",{className:"admin-card",children:[i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Firebase no está configurado"}),i.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):s?o?i.jsx("section",{className:"admin-page",children:i.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):a?i.jsxs("section",{className:"admin-page",children:[i.jsxs("div",{className:"admin-head",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Catálogo"}),i.jsxs("p",{children:["Fuente actual: ",b==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),i.jsxs("div",{className:"admin-actions",children:[i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Se,disabled:P,children:[i.jsx(nt,{size:17}),"Subir catálogo local"]}),i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:u,children:[i.jsx(se,{size:17}),"Salir"]})]})]}),k&&i.jsxs("p",{className:"admin-message",children:[i.jsx(Ze,{size:16}),k]}),i.jsxs("div",{className:"admin-layout",children:[i.jsxs("aside",{className:"admin-list",children:[i.jsxs("button",{type:"button",className:"admin-new-button",onClick:L,children:[i.jsx(Ye,{size:16}),"Nuevo producto"]}),D.map(r=>i.jsxs("button",{type:"button",className:c.id===r.id?"is-active":"",onClick:()=>w(vn(r)),children:[i.jsx("strong",{children:r.name}),i.jsxs("span",{children:[r.id," · ",r.category]})]},r.id))]}),i.jsxs("form",{onSubmit:Ee,className:"admin-editor",children:[i.jsxs("div",{className:"admin-editor-title",children:[i.jsxs("div",{children:[i.jsx("p",{className:"eyebrow",children:"Ficha editable"}),i.jsx("h2",{children:c.name||"Producto nuevo"})]}),i.jsxs("div",{className:"admin-actions",children:[i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Ae,disabled:!c.id||P,children:[i.jsx(Je,{size:17}),"Eliminar"]}),i.jsxs("button",{type:"submit",className:"gabinete-button",disabled:P,children:[i.jsx(st,{size:17}),P?"Guardando...":"Guardar"]})]})]}),i.jsxs("div",{className:"admin-grid",children:[i.jsxs("label",{children:["ID",i.jsx("input",{className:"gabinete-input",value:c.id,onChange:r=>h("id",Rn(r.target.value).toUpperCase())})]}),i.jsxs("label",{children:["Nombre",i.jsx("input",{className:"gabinete-input",value:c.name,onChange:r=>h("name",r.target.value)})]}),i.jsxs("label",{children:["Categoría",i.jsx("select",{className:"gabinete-input",value:c.category,onChange:r=>h("category",r.target.value),children:Qe.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Estado",i.jsx("select",{className:"gabinete-input",value:c.status,onChange:r=>h("status",r.target.value),children:yn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Disponibilidad",i.jsx("select",{className:"gabinete-input",value:c.availability,onChange:r=>h("availability",r.target.value),children:xn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Precio diario",i.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:r=>h("rentalPricePerDay",r.target.value)})]}),i.jsxs("label",{children:["Precio semanal",i.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:r=>h("rentalPricePerWeek",r.target.value)})]}),i.jsxs("label",{children:["Valor estimado",i.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:r=>h("estimatedValue",r.target.value)})]}),i.jsxs("label",{children:["Garantía %",i.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:r=>h("guaranteePercentage",r.target.value)})]}),i.jsxs("label",{children:["Depósito mínimo",i.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:r=>h("minimumDeposit",r.target.value)})]}),i.jsxs("label",{children:["Destacado",i.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:r=>h("featuredScore",r.target.value)})]}),i.jsxs("label",{children:["Tags",i.jsx("input",{className:"gabinete-input",value:c.tags,onChange:r=>h("tags",r.target.value),placeholder:"vintage, cine, oficina"})]}),i.jsxs("label",{children:["Medidas",i.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:r=>h("measurements",r.target.value)})]}),i.jsxs("label",{children:["Material",i.jsx("input",{className:"gabinete-input",value:c.material,onChange:r=>h("material",r.target.value)})]}),i.jsxs("label",{children:["Color",i.jsx("input",{className:"gabinete-input",value:c.color,onChange:r=>h("color",r.target.value)})]}),i.jsxs("label",{children:["Época / estilo",i.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:r=>h("eraStyle",r.target.value)})]}),i.jsxs("label",{children:["Tono visual",i.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:r=>h("visualTone",r.target.value),children:wn.map(r=>i.jsx("option",{children:r},r))})]}),i.jsxs("label",{children:["Símbolo",i.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:r=>h("visualSigil",r.target.value)})]})]}),i.jsxs("label",{className:"admin-wide",children:["Descripción",i.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:r=>h("description",r.target.value)})]}),i.jsxs("label",{className:"admin-wide",children:["Curiosidades",i.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:r=>h("curiosities",r.target.value)})]}),i.jsxs("label",{className:"admin-wide",children:["Notas internas",i.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:r=>h("internalNotes",r.target.value)})]}),i.jsxs("div",{className:"admin-images",children:[i.jsxs("label",{className:"admin-upload",children:[i.jsx(ae,{size:18}),j?"Subiendo...":"Subir archivo",i.jsx("input",{type:"file",accept:"image/*",onChange:r=>{var _;return De((_=r.target.files)==null?void 0:_[0])}})]}),i.jsxs("div",{className:"admin-image-url",children:[i.jsxs("label",{children:["URL pública de imagen",i.jsx("input",{className:"gabinete-input",value:N,onChange:r=>x(r.target.value),placeholder:"https://..."})]}),i.jsxs("button",{type:"button",className:"admin-upload",onClick:Ue,children:[i.jsx(ae,{size:18}),"Agregar imagen"]})]}),i.jsx("div",{className:"admin-image-grid",children:c.images.map(r=>i.jsxs("figure",{children:[i.jsx("img",{src:r,alt:""}),i.jsx("button",{type:"button",onClick:()=>h("images",c.images.filter(_=>_!==r)),children:"Quitar"})]},r))})]})]})]})]}):i.jsx("section",{className:"admin-page",children:i.jsxs("div",{className:"admin-card",children:[i.jsx("p",{className:"eyebrow",children:"Sin permiso"}),i.jsx("h1",{children:"Tu usuario no es administrador"}),i.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",i.jsx("strong",{children:s.email})]}),i.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:u,children:[i.jsx(se,{size:17}),"Salir"]})]})}):i.jsx("section",{className:"admin-page",children:i.jsxs("form",{onSubmit:H,className:"admin-card admin-login",children:[i.jsx("span",{className:"admin-lock",children:i.jsx(re,{size:22})}),i.jsx("p",{className:"eyebrow",children:"Admin"}),i.jsx("h1",{children:"Ingresar al catálogo"}),i.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),i.jsxs("div",{className:"admin-auth-debug",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Auth domain:"})," ",ne.authDomain||"sin configurar"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Project ID:"})," ",ne.projectId||"sin configurar"]})]}),(k||d)&&i.jsx("p",{className:"admin-message",children:k||d}),i.jsxs("button",{type:"submit",className:"gabinete-button",children:[i.jsx(re,{size:17}),"Entrar con Google"]})]})})}export{jn as AdminPage};
