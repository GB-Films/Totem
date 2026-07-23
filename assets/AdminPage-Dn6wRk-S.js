import{c as _e,G as H,_ as Ze,I as Je,J as Qe,K as xe,M as et,N as tt,Q as nt,R as st,V as at,W as rt,Y as re,Z as it,$ as ot,k as Q,i as lt,e as ct,h as ye,r as N,a0 as ut,j as n,C as dt,x as ve,a1 as ht,a2 as mt,m as F,l as pt,s as ie,w as gt,t as ft,D as Y,y as oe,a3 as bt,a4 as _t,a5 as Ne,a6 as xt,v as yt}from"./index-XoPfAbcU.js";import{g as je}from"./reservations-DITHhaeZ.js";import{L as le}from"./lock-BlS7uYze.js";import{L as ce,S as we}from"./save-B-q6bC2e.js";import{P as vt}from"./plus-BC6woIoZ.js";import{T as Re}from"./trash-2-BBJCJkIS.js";import{C as Nt,a as jt}from"./chevron-right-m99BV0Cs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=_e("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=_e("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
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
 */const ke="firebasestorage.googleapis.com",Te="storageBucket",wt=120*1e3,Rt=600*1e3;/**
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
 */class w extends st{constructor(t,s,a=0){super(G(t),`Firebase Storage: ${s} (${G(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,w.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var j;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(j||(j={}));function G(e){return"storage/"+e}function ee(){const e="An unknown error occurred, please check the error payload for server response.";return new w(j.UNKNOWN,e)}function kt(e){return new w(j.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Tt(e){return new w(j.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ct(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new w(j.UNAUTHENTICATED,e)}function Dt(){return new w(j.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pt(e){return new w(j.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Et(){return new w(j.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function St(){return new w(j.CANCELED,"User canceled the upload/download.")}function At(e){return new w(j.INVALID_URL,"Invalid URL '"+e+"'.")}function It(e){return new w(j.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ut(){return new w(j.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Te+"' property when initializing the app?")}function Ot(){return new w(j.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Lt(){return new w(j.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Mt(e){return new w(j.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Z(e){return new w(j.INVALID_ARGUMENT,e)}function Ce(){return new w(j.APP_DELETED,"The Firebase app was deleted.")}function Bt(e){return new w(j.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $(e,t){return new w(j.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function B(e){throw new w(j.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class D{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let a;try{a=D.makeFromUrl(t,s)}catch{return new D(t,"")}if(a.path==="")return a;throw It(t)}static makeFromUrl(t,s){let a=null;const r="([A-Za-z0-9.\\-_]+)";function o(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const l="(/(.*))?$",d=new RegExp("^gs://"+r+l,"i"),m={bucket:1,path:3};function g(v){v.path_=decodeURIComponent(v.path)}const b="v[A-Za-z0-9_]+",T=s.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",k=new RegExp(`^https?://${T}/${b}/b/${r}/o${R}`,"i"),c={bucket:1,path:3},u=s===ke?"(?:storage.googleapis.com|storage.cloud.google.com)":s,p="([^?#]*)",f=new RegExp(`^https?://${u}/${r}/${p}`,"i"),h=[{regex:d,indices:m,postModify:o},{regex:k,indices:c,postModify:g},{regex:f,indices:{bucket:1,path:2},postModify:g}];for(let v=0;v<h.length;v++){const I=h[v],S=I.regex.exec(t);if(S){const z=S[I.indices.bucket];let M=S[I.indices.path];M||(M=""),a=new D(z,M),I.postModify(a);break}}if(a==null)throw At(t);return a}}class Ft{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function $t(e,t,s){let a=1,r=null,o=null,l=!1,d=0;function m(){return d===2}let g=!1;function b(...p){g||(g=!0,t.apply(null,p))}function T(p){r=setTimeout(()=>{r=null,e(k,m())},p)}function R(){o&&clearTimeout(o)}function k(p,...f){if(g){R();return}if(p){R(),b.call(null,p,...f);return}if(m()||l){R(),b.call(null,p,...f);return}a<64&&(a*=2);let h;d===1?(d=2,h=0):h=(a+Math.random())*1e3,T(h)}let c=!1;function u(p){c||(c=!0,R(),!g&&(r!==null?(p||(d=2),clearTimeout(r),T(0)):p||(d=1)))}return T(0),o=setTimeout(()=>{l=!0,u(!0)},s),u}function zt(e){e(!1)}/**
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
 */function Vt(e){return e!==void 0}function qt(e){return typeof e=="object"&&!Array.isArray(e)}function te(e){return typeof e=="string"||e instanceof String}function he(e){return ne()&&e instanceof Blob}function ne(){return typeof Blob<"u"}function me(e,t,s,a){if(a<t)throw Z(`Invalid value for '${e}'. Expected ${t} or greater.`);if(a>s)throw Z(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function se(e,t,s){let a=t;return s==null&&(a=`https://${t}`),`${s}://${a}/v0${e}`}function De(e){const t=encodeURIComponent;let s="?";for(const a in e)if(e.hasOwnProperty(a)){const r=t(a)+"="+t(e[a]);s=s+r+"&"}return s=s.slice(0,-1),s}var U;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(U||(U={}));/**
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
 */function Ht(e,t){const s=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return s||r||o}/**
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
 */class Wt{constructor(t,s,a,r,o,l,d,m,g,b,T,R=!0,k=!1){this.url_=t,this.method_=s,this.headers_=a,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=d,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=b,this.connectionFactory_=T,this.retry=R,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((c,u)=>{this.resolve_=c,this.reject_=u,this.start_()})}start_(){const t=(a,r)=>{if(r){a(!1,new V(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=d=>{const m=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const d=o.getErrorCode()===U.NO_ERROR,m=o.getStatus();if(!d||Ht(m,this.additionalRetryCodes_)&&this.retry){const b=o.getErrorCode()===U.ABORT;a(!1,new V(!1,null,b));return}const g=this.successCodes_.indexOf(m)!==-1;a(!0,new V(g,o))})},s=(a,r)=>{const o=this.resolve_,l=this.reject_,d=r.connection;if(r.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());Vt(m)?o(m):o()}catch(m){l(m)}else if(d!==null){const m=ee();m.serverResponse=d.getErrorText(),this.errorCallback_?l(this.errorCallback_(d,m)):l(m)}else if(r.canceled){const m=this.appDelete_?Ce():St();l(m)}else{const m=Et();l(m)}};this.canceled_?s(!1,new V(!1,null,!0)):this.backoffId_=$t(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&zt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class V{constructor(t,s,a){this.wasSuccessCode=t,this.connection=s,this.canceled=!!a}}function Gt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Kt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Xt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Yt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Zt(e,t,s,a,r,o,l=!0,d=!1){const m=De(e.urlParams),g=e.url+m,b=Object.assign({},e.headers);return Xt(b,t),Gt(b,s),Kt(b,o),Yt(b,a),new Wt(g,e.method,b,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,l,d)}/**
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
 */function Jt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qt(...e){const t=Jt();if(t!==void 0){const s=new t;for(let a=0;a<e.length;a++)s.append(e[a]);return s.getBlob()}else{if(ne())return new Blob(e);throw new w(j.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function en(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function tn(e){if(typeof atob>"u")throw Mt("base-64");return atob(e)}/**
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
 */const E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class K{constructor(t,s){this.data=t,this.contentType=s||null}}function nn(e,t){switch(e){case E.RAW:return new K(Pe(t));case E.BASE64:case E.BASE64URL:return new K(Ee(e,t));case E.DATA_URL:return new K(an(t),rn(t))}throw ee()}function Pe(e){const t=[];for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a<=127)t.push(a);else if(a<=2047)t.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const o=a,l=e.charCodeAt(++s);a=65536|(o&1023)<<10|l&1023,t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?t.push(239,191,189):t.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(t)}function sn(e){let t;try{t=decodeURIComponent(e)}catch{throw $(E.DATA_URL,"Malformed data URL.")}return Pe(t)}function Ee(e,t){switch(e){case E.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw $(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw $(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=tn(t)}catch(r){throw r.message.includes("polyfill")?r:$(e,"Invalid character found")}const a=new Uint8Array(s.length);for(let r=0;r<s.length;r++)a[r]=s.charCodeAt(r);return a}class Se{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw $(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=s[1]||null;a!=null&&(this.base64=on(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=t.substring(t.indexOf(",")+1)}}function an(e){const t=new Se(e);return t.base64?Ee(E.BASE64,t.rest):sn(t.rest)}function rn(e){return new Se(e).contentType}function on(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class A{constructor(t,s){let a=0,r="";he(t)?(this.data_=t,a=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),a=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),a=t.length),this.size_=a,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(he(this.data_)){const a=this.data_,r=en(a,t,s);return r===null?null:new A(r)}else{const a=new Uint8Array(this.data_.buffer,t,s-t);return new A(a,!0)}}static getBlob(...t){if(ne()){const s=t.map(a=>a instanceof A?a.data_:a);return new A(Qt.apply(null,s))}else{const s=t.map(l=>te(l)?nn(E.RAW,l).data:l.data_);let a=0;s.forEach(l=>{a+=l.byteLength});const r=new Uint8Array(a);let o=0;return s.forEach(l=>{for(let d=0;d<l.length;d++)r[o++]=l[d]}),new A(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ae(e){let t;try{t=JSON.parse(e)}catch{return null}return qt(t)?t:null}/**
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
 */function ln(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function cn(e,t){const s=t.split("/").filter(a=>a.length>0).join("/");return e.length===0?s:e+"/"+s}function Ie(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function un(e,t){return t}class C{constructor(t,s,a,r){this.server=t,this.local=s||t,this.writable=!!a,this.xform=r||un}}let q=null;function dn(e){return!te(e)||e.length<2?e:Ie(e)}function Ue(){if(q)return q;const e=[];e.push(new C("bucket")),e.push(new C("generation")),e.push(new C("metageneration")),e.push(new C("name","fullPath",!0));function t(o,l){return dn(l)}const s=new C("name");s.xform=t,e.push(s);function a(o,l){return l!==void 0?Number(l):l}const r=new C("size");return r.xform=a,e.push(r),e.push(new C("timeCreated")),e.push(new C("updated")),e.push(new C("md5Hash",null,!0)),e.push(new C("cacheControl",null,!0)),e.push(new C("contentDisposition",null,!0)),e.push(new C("contentEncoding",null,!0)),e.push(new C("contentLanguage",null,!0)),e.push(new C("contentType",null,!0)),e.push(new C("metadata","customMetadata",!0)),q=e,q}function hn(e,t){function s(){const a=e.bucket,r=e.fullPath,o=new D(a,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:s})}function mn(e,t,s){const a={};a.type="file";const r=s.length;for(let o=0;o<r;o++){const l=s[o];a[l.local]=l.xform(a,t[l.server])}return hn(a,e),a}function Oe(e,t,s){const a=Ae(t);return a===null?null:mn(e,a,s)}function pn(e,t,s,a){const r=Ae(t);if(r===null||!te(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(g=>{const b=e.bucket,T=e.fullPath,R="/b/"+l(b)+"/o/"+l(T),k=se(R,s,a),c=De({alt:"media",token:g});return k+c})[0]}function gn(e,t){const s={},a=t.length;for(let r=0;r<a;r++){const o=t[r];o.writable&&(s[o.server]=e[o.local])}return JSON.stringify(s)}class Le{constructor(t,s,a,r){this.url=t,this.method=s,this.handler=a,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Me(e){if(!e)throw ee()}function fn(e,t){function s(a,r){const o=Oe(e,r,t);return Me(o!==null),o}return s}function bn(e,t){function s(a,r){const o=Oe(e,r,t);return Me(o!==null),pn(o,r,e.host,e._protocol)}return s}function Be(e){function t(s,a){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=Dt():r=Ct():s.getStatus()===402?r=Tt(e.bucket):s.getStatus()===403?r=Pt(e.path):r=a,r.status=s.getStatus(),r.serverResponse=a.serverResponse,r}return t}function _n(e){const t=Be(e);function s(a,r){let o=t(a,r);return a.getStatus()===404&&(o=kt(e.path)),o.serverResponse=r.serverResponse,o}return s}function xn(e,t,s){const a=t.fullServerUrl(),r=se(a,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,d=new Le(r,o,bn(e,s),l);return d.errorHandler=_n(t),d}function yn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function vn(e,t,s){const a=Object.assign({},s);return a.fullPath=e.path,a.size=t.size(),a.contentType||(a.contentType=yn(null,t)),a}function Nn(e,t,s,a,r){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function d(){let h="";for(let v=0;v<2;v++)h=h+Math.random().toString().slice(2);return h}const m=d();l["Content-Type"]="multipart/related; boundary="+m;const g=vn(t,a,r),b=gn(g,s),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,R=`\r
--`+m+"--",k=A.getBlob(T,a,R);if(k===null)throw Ot();const c={name:g.fullPath},u=se(o,e.host,e._protocol),p="POST",f=e.maxUploadRetryTime,x=new Le(u,p,fn(e,s),f);return x.urlParams=c,x.headers=l,x.body=k.uploadData(),x.errorHandler=Be(t),x}class jn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,a,r,o){if(this.sent_)throw B("cannot .send() more than once");if(xe(t)&&a&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(s,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw B("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw B("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw B("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw B("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class wn extends jn{initXhr(){this.xhr_.responseType="text"}}function Fe(){return new wn}/**
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
 */class O{constructor(t,s){this._service=t,s instanceof D?this._location=s:this._location=D.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new O(t,s)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ie(this._location.path)}get storage(){return this._service}get parent(){const t=ln(this._location.path);if(t===null)return null;const s=new D(this._location.bucket,t);return new O(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw Bt(t)}}function Rn(e,t,s){e._throwIfRoot("uploadBytes");const a=Nn(e.storage,e._location,Ue(),new A(t,!0),s);return e.storage.makeRequestWithTokens(a,Fe).then(r=>({metadata:r,ref:e}))}function kn(e){e._throwIfRoot("getDownloadURL");const t=xn(e.storage,e._location,Ue());return e.storage.makeRequestWithTokens(t,Fe).then(s=>{if(s===null)throw Lt();return s})}function Tn(e,t){const s=cn(e._location.path,t),a=new D(e._location.bucket,s);return new O(e.storage,a)}/**
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
 */function Cn(e){return/^[A-Za-z]+:\/\//.test(e)}function Dn(e,t){return new O(e,t)}function $e(e,t){if(e instanceof ae){const s=e;if(s._bucket==null)throw Ut();const a=new O(s,s._bucket);return t!=null?$e(a,t):a}else return t!==void 0?Tn(e,t):e}function Pn(e,t){if(t&&Cn(t)){if(e instanceof ae)return Dn(e,t);throw Z("To use ref(service, url), the first argument must be a Storage instance.")}else return $e(e,t)}function pe(e,t){const s=t==null?void 0:t[Te];return s==null?null:D.makeFromBucketSpec(s,e)}function En(e,t,s,a={}){e.host=`${t}:${s}`;const r=xe(t);r&&et(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=r?"https":"http";const{mockUserToken:o}=a;o&&(e._overrideAuthToken=typeof o=="string"?o:tt(o,e.app.options.projectId))}class ae{constructor(t,s,a,r,o,l=!1){this.app=t,this._authProvider=s,this._appCheckProvider=a,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=ke,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wt,this._maxUploadRetryTime=Rt,this._requests=new Set,r!=null?this._bucket=D.makeFromBucketSpec(r,this._host):this._bucket=pe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=pe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new O(this,t)}_makeRequest(t,s,a,r,o=!0){if(this._deleted)return new Ft(Ce());{const l=Zt(t,this._appId,a,r,s,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,s){const[a,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,a,r).getPromise()}}const ge="@firebase/storage",fe="0.14.3";/**
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
 */const ze="storage";function Sn(e,t,s){return e=H(e),Rn(e,t,s)}function An(e){return e=H(e),kn(e)}function In(e,t){return e=H(e),Pn(e,t)}function Un(e=Qe(),t){e=H(e);const a=Ze(e,ze).getImmediate({identifier:t}),r=Je("storage");return r&&On(a,...r),a}function On(e,t,s,a={}){En(e,t,s,a)}function Ln(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ae(s,a,r,t,it)}function Mn(){at(new rt(ze,Ln,"PUBLIC").setMultipleInstances(!0)),re(ge,fe,""),re(ge,fe,"esm2020")}Mn();function Ve(e){return/^https?:\/\//.test(e)||/^data:image\//.test(e)}function Bn({image:e,onRemove:t}){const[s,a]=N.useState(!1);return n.jsxs("figure",{children:[s?n.jsx("div",{className:"admin-image-fallback",children:"Imagen no disponible"}):n.jsx("img",{src:e,alt:"",onError:()=>a(!0)}),n.jsx("button",{type:"button",onClick:t,children:"Quitar"})]})}const Fn=["Excelente","Muy bueno","Bueno","Delicado"],$n=["request_sent","payment_pending","confirmed","ready_for_pickup","active","returned","cancelled"],zn=["Disponible","Consultar","Reservado"],Vn=["brass","green","red","blue","paper","copper"],X={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function qn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images.filter(Ve),visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function L(e,t=0){const s=Number(e);return Number.isFinite(s)?s:t}function Hn(e){const t=e.rentalPricePerWeek.trim(),s=e.internalNotes.trim(),a={id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(r=>r.trim()).filter(Boolean),rentalPricePerDay:L(e.rentalPricePerDay),description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:L(e.estimatedValue),guaranteePercentage:L(e.guaranteePercentage,.3),minimumDeposit:L(e.minimumDeposit),featuredScore:L(e.featuredScore,50),images:e.images.filter(Ve),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}};return t&&(a.rentalPricePerWeek=L(t)),s&&(a.internalNotes=s),a}function Wn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Gn(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}const Kn=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];function J(e){return new Date(e.getFullYear(),e.getMonth(),1)}function be(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function Xn(e){const t=J(e),s=(t.getDay()+6)%7,a=new Date(t);return a.setDate(t.getDate()-s),Array.from({length:42},(r,o)=>{const l=new Date(a);return l.setDate(a.getDate()+o),{iso:Y(l),inMonth:l.getMonth()===t.getMonth()}})}function Yn(e){return new Intl.DateTimeFormat("es-AR",{month:"long",year:"numeric"}).format(e)}function Zn({reservation:e,productName:t,profile:s,onMessage:a}){const r=Q(),[o,l]=N.useState(e.startDate),[d,m]=N.useState(e.endDate),[g,b]=N.useState(String(e.quantity??1)),[T,R]=N.useState(e.note??""),[k,c]=N.useState(e.status??"confirmed"),[u,p]=N.useState(!1),f=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede editar desde el panel porque no viene de Firestore.");return}if(!o||!d||d<o){a("Revisá las fechas de la reserva antes de guardar.");return}try{p(!0),await xt(F(r,"reservations",e.id),{startDate:o,endDate:d,quantity:Math.max(1,Number(g)||1),rentalDays:yt(o,d),note:T.trim(),status:k}),a(`Reserva actualizada: ${t}`)}catch(h){console.error(h);const v=h;a(`No se pudo actualizar la reserva (${v.code??"error desconocido"}). ${v.message??"Revisá tus permisos de admin."}`)}finally{p(!1)}},x=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede borrar desde el panel porque no viene de Firestore.");return}if(window.confirm(`¿Borrar la reserva de ${t}?`))try{p(!0),await Ne(F(r,"reservations",e.id)),a(`Reserva borrada: ${t}`)}catch(h){console.error(h);const v=h;a(`No se pudo borrar la reserva (${v.code??"error desconocido"}). ${v.message??"Revisá tus permisos de admin."}`)}finally{p(!1)}};return n.jsxs("article",{className:"admin-reservation-row",children:[n.jsxs("div",{children:[n.jsx("strong",{children:t}),n.jsx("span",{children:s?`${s.firstName} ${s.lastName}`:e.customerName||e.customerEmail||"Cliente sin datos visibles"}),s&&n.jsxs("span",{children:["DNI: ",s.dni]}),s&&n.jsxs("span",{children:["Celular: ",s.phone]}),(s==null?void 0:s.email)&&n.jsx("span",{children:s.email}),e.paymentAlias&&n.jsxs("span",{children:["Pago: Mercado Pago alias ",e.paymentAlias]}),typeof e.reserveDeposit=="number"&&n.jsxs("span",{children:["Seña: $",e.reserveDeposit.toLocaleString("es-AR")]})]}),n.jsxs("div",{className:"admin-reservation-fields",children:[n.jsxs("label",{children:["Desde",n.jsx("input",{className:"gabinete-input",type:"date",value:o,onChange:h=>l(h.target.value)})]}),n.jsxs("label",{children:["Hasta",n.jsx("input",{className:"gabinete-input",type:"date",value:d,onChange:h=>m(h.target.value)})]}),n.jsxs("label",{children:["Cant.",n.jsx("input",{className:"gabinete-input",type:"number",min:"1",value:g,onChange:h=>b(h.target.value)})]}),n.jsxs("label",{children:["Estado",n.jsx("select",{className:"gabinete-input",value:k,onChange:h=>c(h.target.value),children:$n.map(h=>n.jsx("option",{value:h,children:je(h)},h))})]})]}),n.jsxs("label",{className:"admin-reservation-note",children:["Nota",n.jsx("input",{className:"gabinete-input",value:T,onChange:h=>R(h.target.value)})]}),n.jsxs("div",{className:"admin-reservation-actions",children:[n.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:x,disabled:u,children:[n.jsx(Re,{size:16}),"Borrar"]}),n.jsxs("button",{type:"button",className:"gabinete-button",onClick:f,disabled:u,children:[n.jsx(we,{size:16}),u?"Guardando...":"Guardar"]})]})]})}function Jn({products:e}){const{reservations:t,syncMode:s}=ye(),[a,r]=N.useState(""),[o,l]=N.useState([]),[d,m]=N.useState(()=>J(gt(ft()))),g=N.useMemo(()=>Xn(d),[d]),b=N.useMemo(()=>new Map(e.map(u=>[u.id,u])),[e]),T=N.useMemo(()=>new Map(o.map(u=>[u.uid,u])),[o]),R=Y(J(d)),k=Y(new Date(d.getFullYear(),d.getMonth()+1,0)),c=N.useMemo(()=>t.filter(u=>oe(R,k,u.startDate,u.endDate)).sort((u,p)=>u.startDate.localeCompare(p.startDate)||u.productId.localeCompare(p.productId)),[k,R,t]);return N.useEffect(()=>{const u=Q();if(u)return bt(_t(u,"userProfiles"),p=>{l(p.docs.map(f=>f.data()))})},[]),n.jsxs("section",{className:"admin-reservations parchment-panel",children:[n.jsxs("div",{className:"admin-reservations-head",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"eyebrow flex items-center gap-2",children:[n.jsx(ve,{size:15}),"Calendario admin"]}),n.jsx("h2",{children:"Pedidos y alquileres por fecha"}),n.jsxs("p",{children:["Fuente de reservas: ",s==="firebase"?"Firestore":"local",". Cada marca bloquea el objeto para futuros clientes."]})]}),n.jsxs("div",{className:"calendar-month-bar admin-calendar-nav",children:[n.jsx("button",{type:"button",onClick:()=>m(u=>be(u,-1)),children:n.jsx(Nt,{size:18})}),n.jsx("strong",{children:Yn(d)}),n.jsx("button",{type:"button",onClick:()=>m(u=>be(u,1)),children:n.jsx(jt,{size:18})})]})]}),n.jsxs("div",{className:"admin-calendar-grid",children:[Kn.map(u=>n.jsx("span",{className:"calendar-weekday",children:u},u)),g.map(({iso:u,inMonth:p})=>{const f=t.filter(x=>oe(u,u,x.startDate,x.endDate));return n.jsxs("div",{className:`admin-calendar-day ${p?"":"is-outside"} ${f.length>0?"has-reservations":""}`,children:[n.jsx("span",{className:"admin-calendar-number",children:Number(u.slice(-2))}),f.slice(0,2).map(x=>{const h=b.get(x.productId);return n.jsx("span",{className:`admin-calendar-chip status-${x.status??"confirmed"}`,title:`${(h==null?void 0:h.name)??x.productId} · ${je(x.status)}`,children:(h==null?void 0:h.name)??x.productId},x.id)}),f.length>2&&n.jsxs("span",{className:"admin-calendar-more",children:["+",f.length-2]})]},u)})]}),n.jsxs("div",{className:"admin-reservation-list",children:[n.jsx("p",{className:"eyebrow",children:"Reservas del mes"}),a&&n.jsx("p",{className:"admin-message",children:a}),c.length===0?n.jsx("p",{className:"admin-empty-reservations",children:"No hay objetos alquilados o pedidos para este mes."}):c.map(u=>{const p=b.get(u.productId);return n.jsx(Zn,{reservation:u,productName:(p==null?void 0:p.name)??u.productId,profile:u.createdByUid?T.get(u.createdByUid):void 0,onMessage:r},u.id)})]})]})}function is(){const e=ot(),t=Q(),s=e?Un(e):null,{user:a,isAdmin:r,checkingAdmin:o,loginWithGoogle:l,logout:d,authError:m}=lt(),{products:g,syncMode:b}=ct(),{reservations:T}=ye(),[R,k]=N.useState(""),[c,u]=N.useState(X),[p,f]=N.useState(""),[x,h]=N.useState(!1),[v,I]=N.useState(!1),[S,z]=N.useState("reservations"),M=N.useMemo(()=>[...g].sort((i,_)=>i.name.localeCompare(_.name)),[g]),y=(i,_)=>{u(P=>({...P,[i]:_}))},qe=async i=>{i.preventDefault(),f(""),await l()},He=()=>{u({...X,id:`EG-${String(g.length+1).padStart(3,"0")}`}),f("")},We=async i=>{if(i.preventDefault(),!t||!r)return;const _=Hn(c);if(!_.id||!_.name){f("Completá ID y nombre antes de guardar.");return}try{h(!0),await ie(F(t,"products",_.id),_),f(`Producto guardado: ${_.name}`)}catch(P){console.error(P);const W=P;f(`No se pudo guardar el producto (${W.code??"error desconocido"}). ${W.message??"Revisá los datos cargados y tus permisos de admin."}`)}finally{h(!1)}},Ge=async()=>{!t||!r||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(h(!0),await Ne(F(t,"products",c.id)),h(!1),u(X),f("Producto eliminado."))},Ke=()=>{const i=R.trim();if(!/^https?:\/\//.test(i)){f("Pegá una URL pública de imagen que empiece con http o https.");return}y("images",[i,...c.images]),k(""),f("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Xe=async i=>{if(!i||!s||!c.id){f("Completá el ID antes de subir imágenes.");return}try{I(!0);const _=In(s,`products/${c.id}/${Date.now()}-${Gn(i.name)}`);await Sn(_,i,{contentType:i.type});const P=await An(_);y("images",[P,...c.images]),f("Imagen subida. Guardá el producto para conservarla en el catálogo.")}catch(_){console.error(_);const P=_;f(`No se pudo subir la imagen (${P.code??"error desconocido"}). ${P.message??"Revisá las reglas de Storage y tus permisos de admin."}`)}finally{I(!1)}},Ye=async()=>{if(!(!t||!r||!window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")))try{h(!0);let i=0;await Promise.all(mt.map(async _=>{const P=F(t,"products",_.id);(await pt(P)).exists()||(await ie(P,_),i+=1)})),f(i>0?`Catálogo base restaurado. Se agregaron ${i} productos.`:"Firestore ya tenía todos los productos base.")}catch(i){console.error(i);const _=i;f(`No se pudo restaurar el catálogo base (${_.code??"error desconocido"}). ${_.message??"Revisá tus permisos de admin."}`)}finally{h(!1)}};return!ut||!t?n.jsx("section",{className:"admin-page",children:n.jsxs("div",{className:"admin-card",children:[n.jsx("p",{className:"eyebrow",children:"Admin"}),n.jsx("h1",{children:"Firebase no está configurado"}),n.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):a?o?n.jsx("section",{className:"admin-page",children:n.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):r?n.jsxs("section",{className:"admin-page",children:[n.jsxs("div",{className:"admin-head",children:[n.jsxs("div",{children:[n.jsx("p",{className:"eyebrow",children:"Operaciones"}),n.jsx("h1",{children:"Panel de producción"}),n.jsx("p",{children:"Reservas, disponibilidad y catálogo en un mismo lugar."})]}),n.jsxs("div",{className:"admin-actions",children:[n.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Ye,disabled:x,children:[n.jsx(ue,{size:17}),"Restaurar catálogo base"]}),n.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[n.jsx(ce,{size:17}),"Salir"]})]})]}),n.jsxs("div",{className:"admin-metrics","aria-label":"Resumen operativo",children:[n.jsxs("article",{children:[n.jsx("span",{children:"Catálogo"}),n.jsx("strong",{children:g.length}),n.jsx("p",{children:"objetos cargados"})]}),n.jsxs("article",{children:[n.jsx("span",{children:"Disponibles"}),n.jsx("strong",{children:g.filter(i=>i.availability==="Disponible").length}),n.jsx("p",{children:"listos para reservar"})]}),n.jsxs("article",{children:[n.jsx("span",{children:"Reservas"}),n.jsx("strong",{children:T.filter(i=>i.status!=="cancelled").length}),n.jsx("p",{children:"activas o en proceso"})]}),n.jsxs("article",{children:[n.jsx("span",{children:"Sincronización"}),n.jsx("strong",{className:"admin-metric-word",children:b==="firebase"?"Online":"Local"}),n.jsx("p",{children:b==="firebase"?"datos actualizados":"modo de respaldo"})]})]}),p&&n.jsxs("p",{className:"admin-message",children:[n.jsx(dt,{size:16}),p]}),n.jsxs("div",{className:"admin-tabs",role:"tablist","aria-label":"Secciones del panel",children:[n.jsxs("button",{type:"button",className:S==="reservations"?"is-active":"",onClick:()=>z("reservations"),children:[n.jsx(ve,{size:16}),"Calendario y reservas"]}),n.jsxs("button",{type:"button",className:S==="catalog"?"is-active":"",onClick:()=>z("catalog"),children:[n.jsx(ue,{size:16}),"Actualización del catálogo"]})]}),S==="reservations"&&n.jsx(Jn,{products:g}),S==="catalog"&&n.jsxs("div",{className:"admin-layout",children:[n.jsxs("aside",{className:"admin-list",children:[n.jsxs("button",{type:"button",className:"admin-new-button",onClick:He,children:[n.jsx(vt,{size:16}),"Nuevo producto"]}),M.map(i=>n.jsxs("button",{type:"button",className:c.id===i.id?"is-active":"",onClick:()=>u(qn(i)),children:[n.jsx("strong",{children:i.name}),n.jsxs("span",{children:[i.id," · ",i.category]})]},i.id))]}),n.jsxs("form",{onSubmit:We,className:"admin-editor",children:[n.jsxs("div",{className:"admin-editor-title",children:[n.jsxs("div",{children:[n.jsx("p",{className:"eyebrow",children:"Ficha editable"}),n.jsx("h2",{children:c.name||"Producto nuevo"})]}),n.jsxs("div",{className:"admin-actions",children:[n.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Ge,disabled:!c.id||x,children:[n.jsx(Re,{size:17}),"Eliminar"]}),n.jsxs("button",{type:"submit",className:"gabinete-button",disabled:x,children:[n.jsx(we,{size:17}),x?"Guardando...":"Guardar"]})]})]}),n.jsxs("div",{className:"admin-grid",children:[n.jsxs("label",{children:["ID",n.jsx("input",{className:"gabinete-input",value:c.id,onChange:i=>y("id",Wn(i.target.value).toUpperCase())})]}),n.jsxs("label",{children:["Nombre",n.jsx("input",{className:"gabinete-input",value:c.name,onChange:i=>y("name",i.target.value)})]}),n.jsxs("label",{children:["Categoría",n.jsx("select",{className:"gabinete-input",value:c.category,onChange:i=>y("category",i.target.value),children:ht.map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("label",{children:["Estado",n.jsx("select",{className:"gabinete-input",value:c.status,onChange:i=>y("status",i.target.value),children:Fn.map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("label",{children:["Disponibilidad",n.jsx("select",{className:"gabinete-input",value:c.availability,onChange:i=>y("availability",i.target.value),children:zn.map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("label",{children:["Precio diario",n.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:i=>y("rentalPricePerDay",i.target.value)})]}),n.jsxs("label",{children:["Precio semanal",n.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:i=>y("rentalPricePerWeek",i.target.value)})]}),n.jsxs("label",{children:["Valor estimado",n.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:i=>y("estimatedValue",i.target.value)})]}),n.jsxs("label",{children:["Garantía %",n.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:i=>y("guaranteePercentage",i.target.value)})]}),n.jsxs("label",{children:["Depósito mínimo",n.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:i=>y("minimumDeposit",i.target.value)})]}),n.jsxs("label",{children:["Destacado",n.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:i=>y("featuredScore",i.target.value)})]}),n.jsxs("label",{children:["Tags",n.jsx("input",{className:"gabinete-input",value:c.tags,onChange:i=>y("tags",i.target.value),placeholder:"vintage, cine, oficina"})]}),n.jsxs("label",{children:["Medidas",n.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:i=>y("measurements",i.target.value)})]}),n.jsxs("label",{children:["Material",n.jsx("input",{className:"gabinete-input",value:c.material,onChange:i=>y("material",i.target.value)})]}),n.jsxs("label",{children:["Color",n.jsx("input",{className:"gabinete-input",value:c.color,onChange:i=>y("color",i.target.value)})]}),n.jsxs("label",{children:["Época / estilo",n.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:i=>y("eraStyle",i.target.value)})]}),n.jsxs("label",{children:["Tono visual",n.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:i=>y("visualTone",i.target.value),children:Vn.map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("label",{children:["Símbolo",n.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:i=>y("visualSigil",i.target.value)})]})]}),n.jsxs("label",{className:"admin-wide",children:["Descripción",n.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:i=>y("description",i.target.value)})]}),n.jsxs("label",{className:"admin-wide",children:["Curiosidades",n.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:i=>y("curiosities",i.target.value)})]}),n.jsxs("label",{className:"admin-wide",children:["Notas internas",n.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:i=>y("internalNotes",i.target.value)})]}),n.jsxs("div",{className:"admin-images",children:[n.jsxs("label",{className:"admin-upload",children:[n.jsx(de,{size:18}),v?"Subiendo...":"Subir archivo",n.jsx("input",{type:"file",accept:"image/*",onChange:i=>{var _;return Xe((_=i.target.files)==null?void 0:_[0])}})]}),n.jsxs("div",{className:"admin-image-url",children:[n.jsxs("label",{children:["URL pública de imagen",n.jsx("input",{className:"gabinete-input",value:R,onChange:i=>k(i.target.value),placeholder:"https://..."})]}),n.jsxs("button",{type:"button",className:"admin-upload",onClick:Ke,children:[n.jsx(de,{size:18}),"Agregar imagen"]})]}),n.jsx("div",{className:"admin-image-grid",children:c.images.map(i=>n.jsx(Bn,{image:i,onRemove:()=>y("images",c.images.filter(_=>_!==i))},i))})]})]})]})]}):n.jsx("section",{className:"admin-page",children:n.jsxs("div",{className:"admin-card",children:[n.jsx("p",{className:"eyebrow",children:"Sin permiso"}),n.jsx("h1",{children:"Tu usuario no es administrador"}),n.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",n.jsx("strong",{children:a.email})]}),n.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[n.jsx(ce,{size:17}),"Salir"]})]})}):n.jsx("section",{className:"admin-page",children:n.jsxs("form",{onSubmit:qe,className:"admin-card admin-login",children:[n.jsx("span",{className:"admin-lock",children:n.jsx(le,{size:22})}),n.jsx("p",{className:"eyebrow",children:"Admin"}),n.jsx("h1",{children:"Ingresar al panel"}),n.jsx("p",{children:"Usá la cuenta de Google autorizada para gestionar reservas, pagos y catálogo."}),(p||m)&&n.jsx("p",{className:"admin-message",children:p||m}),n.jsxs("button",{type:"submit",className:"gabinete-button",children:[n.jsx(le,{size:17}),"Entrar con Google"]})]})})}export{is as AdminPage};
