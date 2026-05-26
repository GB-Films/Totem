import{c as xe,g as q,_ as Qe,a as et,b as tt,i as ye,p as nt,d as st,e as at,F as rt,f as it,C as ot,r as re,S as lt,h as ct,j as Q,u as ut,k as dt,l as y,m as ht,n as s,L as ie,o as oe,q as le,s as ve,t as Ne,P as mt,T as je,v as we,w as pt,x as gt,y as F,z as ft,A as ce,B as bt,D as _t,E as xt,G as Y,H as ue,I as yt,J as Re,K as vt,M as Nt,N as ke,O as Te,Q as jt,R as wt,U as Rt,V as W,W as kt}from"./index-ODPY69II.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=xe("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=xe("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
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
 */const Ce="firebasestorage.googleapis.com",De="storageBucket",Tt=120*1e3,Ct=600*1e3;/**
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
 */class N extends rt{constructor(t,n,a=0){super(G(t),`Firebase Storage: ${n} (${G(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,N.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var v;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(v||(v={}));function G(e){return"storage/"+e}function ee(){const e="An unknown error occurred, please check the error payload for server response.";return new N(v.UNKNOWN,e)}function Dt(e){return new N(v.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Pt(e){return new N(v.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Et(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new N(v.UNAUTHENTICATED,e)}function St(){return new N(v.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function At(e){return new N(v.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function It(){return new N(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ut(){return new N(v.CANCELED,"User canceled the upload/download.")}function Ot(e){return new N(v.INVALID_URL,"Invalid URL '"+e+"'.")}function Lt(e){return new N(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ft(){return new N(v.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+De+"' property when initializing the app?")}function Bt(){return new N(v.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mt(){return new N(v.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $t(e){return new N(v.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Z(e){return new N(v.INVALID_ARGUMENT,e)}function Pe(){return new N(v.APP_DELETED,"The Firebase app was deleted.")}function zt(e){return new N(v.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function M(e,t){return new N(v.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function B(e){throw new N(v.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class P{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let a;try{a=P.makeFromUrl(t,n)}catch{return new P(t,"")}if(a.path==="")return a;throw Lt(t)}static makeFromUrl(t,n){let a=null;const r="([A-Za-z0-9.\\-_]+)";function o(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const l="(/(.*))?$",d=new RegExp("^gs://"+r+l,"i"),p={bucket:1,path:3};function g(m){m.path_=decodeURIComponent(m.path)}const x="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",c=new RegExp(`^https?://${R}/${x}/b/${r}/o${k}`,"i"),j={bucket:1,path:3},u=n===Ce?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",T=new RegExp(`^https?://${u}/${r}/${h}`,"i"),w=[{regex:d,indices:p,postModify:o},{regex:c,indices:j,postModify:g},{regex:T,indices:{bucket:1,path:2},postModify:g}];for(let m=0;m<w.length;m++){const C=w[m],A=C.regex.exec(t);if(A){const V=A[C.indices.bucket];let f=A[C.indices.path];f||(f=""),a=new P(V,f),C.postModify(a);break}}if(a==null)throw Ot(t);return a}}class qt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Vt(e,t,n){let a=1,r=null,o=null,l=!1,d=0;function p(){return d===2}let g=!1;function x(...h){g||(g=!0,t.apply(null,h))}function R(h){r=setTimeout(()=>{r=null,e(c,p())},h)}function k(){o&&clearTimeout(o)}function c(h,...T){if(g){k();return}if(h){k(),x.call(null,h,...T);return}if(p()||l){k(),x.call(null,h,...T);return}a<64&&(a*=2);let w;d===1?(d=2,w=0):w=(a+Math.random())*1e3,R(w)}let j=!1;function u(h){j||(j=!0,k(),!g&&(r!==null?(h||(d=2),clearTimeout(r),R(0)):h||(d=1)))}return R(0),o=setTimeout(()=>{l=!0,u(!0)},n),u}function Ht(e){e(!1)}/**
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
 */function Wt(e){return e!==void 0}function Gt(e){return typeof e=="object"&&!Array.isArray(e)}function te(e){return typeof e=="string"||e instanceof String}function me(e){return ne()&&e instanceof Blob}function ne(){return typeof Blob<"u"}function pe(e,t,n,a){if(a<t)throw Z(`Invalid value for '${e}'. Expected ${t} or greater.`);if(a>n)throw Z(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function se(e,t,n){let a=t;return n==null&&(a=`https://${t}`),`${n}://${a}/v0${e}`}function Ee(e){const t=encodeURIComponent;let n="?";for(const a in e)if(e.hasOwnProperty(a)){const r=t(a)+"="+t(e[a]);n=n+r+"&"}return n=n.slice(0,-1),n}var U;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(U||(U={}));/**
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
 */function Kt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Xt{constructor(t,n,a,r,o,l,d,p,g,x,R,k=!0,c=!1){this.url_=t,this.method_=n,this.headers_=a,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=x,this.connectionFactory_=R,this.retry=k,this.isUsingEmulator=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((j,u)=>{this.resolve_=j,this.reject_=u,this.start_()})}start_(){const t=(a,r)=>{if(r){a(!1,new $(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const d=o.getErrorCode()===U.NO_ERROR,p=o.getStatus();if(!d||Kt(p,this.additionalRetryCodes_)&&this.retry){const x=o.getErrorCode()===U.ABORT;a(!1,new $(!1,null,x));return}const g=this.successCodes_.indexOf(p)!==-1;a(!0,new $(g,o))})},n=(a,r)=>{const o=this.resolve_,l=this.reject_,d=r.connection;if(r.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());Wt(p)?o(p):o()}catch(p){l(p)}else if(d!==null){const p=ee();p.serverResponse=d.getErrorText(),this.errorCallback_?l(this.errorCallback_(d,p)):l(p)}else if(r.canceled){const p=this.appDelete_?Pe():Ut();l(p)}else{const p=It();l(p)}};this.canceled_?n(!1,new $(!1,null,!0)):this.backoffId_=Vt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ht(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ${constructor(t,n,a){this.wasSuccessCode=t,this.connection=n,this.canceled=!!a}}function Yt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Zt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Jt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Qt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function en(e,t,n,a,r,o,l=!0,d=!1){const p=Ee(e.urlParams),g=e.url+p,x=Object.assign({},e.headers);return Jt(x,t),Yt(x,n),Zt(x,o),Qt(x,a),new Xt(g,e.method,x,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,l,d)}/**
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
 */function tn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nn(...e){const t=tn();if(t!==void 0){const n=new t;for(let a=0;a<e.length;a++)n.append(e[a]);return n.getBlob()}else{if(ne())return new Blob(e);throw new N(v.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sn(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function an(e){if(typeof atob>"u")throw $t("base-64");return atob(e)}/**
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
 */const S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class K{constructor(t,n){this.data=t,this.contentType=n||null}}function rn(e,t){switch(e){case S.RAW:return new K(Se(t));case S.BASE64:case S.BASE64URL:return new K(Ae(e,t));case S.DATA_URL:return new K(ln(t),cn(t))}throw ee()}function Se(e){const t=[];for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);if(a<=127)t.push(a);else if(a<=2047)t.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=a,l=e.charCodeAt(++n);a=65536|(o&1023)<<10|l&1023,t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?t.push(239,191,189):t.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(t)}function on(e){let t;try{t=decodeURIComponent(e)}catch{throw M(S.DATA_URL,"Malformed data URL.")}return Se(t)}function Ae(e,t){switch(e){case S.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw M(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case S.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw M(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=an(t)}catch(r){throw r.message.includes("polyfill")?r:M(e,"Invalid character found")}const a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a}class Ie{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw M(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=n[1]||null;a!=null&&(this.base64=un(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=t.substring(t.indexOf(",")+1)}}function ln(e){const t=new Ie(e);return t.base64?Ae(S.BASE64,t.rest):on(t.rest)}function cn(e){return new Ie(e).contentType}function un(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class I{constructor(t,n){let a=0,r="";me(t)?(this.data_=t,a=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),a=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),a=t.length),this.size_=a,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(me(this.data_)){const a=this.data_,r=sn(a,t,n);return r===null?null:new I(r)}else{const a=new Uint8Array(this.data_.buffer,t,n-t);return new I(a,!0)}}static getBlob(...t){if(ne()){const n=t.map(a=>a instanceof I?a.data_:a);return new I(nn.apply(null,n))}else{const n=t.map(l=>te(l)?rn(S.RAW,l).data:l.data_);let a=0;n.forEach(l=>{a+=l.byteLength});const r=new Uint8Array(a);let o=0;return n.forEach(l=>{for(let d=0;d<l.length;d++)r[o++]=l[d]}),new I(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ue(e){let t;try{t=JSON.parse(e)}catch{return null}return Gt(t)?t:null}/**
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
 */function dn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function hn(e,t){const n=t.split("/").filter(a=>a.length>0).join("/");return e.length===0?n:e+"/"+n}function Oe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function mn(e,t){return t}class D{constructor(t,n,a,r){this.server=t,this.local=n||t,this.writable=!!a,this.xform=r||mn}}let z=null;function pn(e){return!te(e)||e.length<2?e:Oe(e)}function Le(){if(z)return z;const e=[];e.push(new D("bucket")),e.push(new D("generation")),e.push(new D("metageneration")),e.push(new D("name","fullPath",!0));function t(o,l){return pn(l)}const n=new D("name");n.xform=t,e.push(n);function a(o,l){return l!==void 0?Number(l):l}const r=new D("size");return r.xform=a,e.push(r),e.push(new D("timeCreated")),e.push(new D("updated")),e.push(new D("md5Hash",null,!0)),e.push(new D("cacheControl",null,!0)),e.push(new D("contentDisposition",null,!0)),e.push(new D("contentEncoding",null,!0)),e.push(new D("contentLanguage",null,!0)),e.push(new D("contentType",null,!0)),e.push(new D("metadata","customMetadata",!0)),z=e,z}function gn(e,t){function n(){const a=e.bucket,r=e.fullPath,o=new P(a,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function fn(e,t,n){const a={};a.type="file";const r=n.length;for(let o=0;o<r;o++){const l=n[o];a[l.local]=l.xform(a,t[l.server])}return gn(a,e),a}function Fe(e,t,n){const a=Ue(t);return a===null?null:fn(e,a,n)}function bn(e,t,n,a){const r=Ue(t);if(r===null||!te(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(g=>{const x=e.bucket,R=e.fullPath,k="/b/"+l(x)+"/o/"+l(R),c=se(k,n,a),j=Ee({alt:"media",token:g});return c+j})[0]}function _n(e,t){const n={},a=t.length;for(let r=0;r<a;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Be{constructor(t,n,a,r){this.url=t,this.method=n,this.handler=a,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Me(e){if(!e)throw ee()}function xn(e,t){function n(a,r){const o=Fe(e,r,t);return Me(o!==null),o}return n}function yn(e,t){function n(a,r){const o=Fe(e,r,t);return Me(o!==null),bn(o,r,e.host,e._protocol)}return n}function $e(e){function t(n,a){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=St():r=Et():n.getStatus()===402?r=Pt(e.bucket):n.getStatus()===403?r=At(e.path):r=a,r.status=n.getStatus(),r.serverResponse=a.serverResponse,r}return t}function vn(e){const t=$e(e);function n(a,r){let o=t(a,r);return a.getStatus()===404&&(o=Dt(e.path)),o.serverResponse=r.serverResponse,o}return n}function Nn(e,t,n){const a=t.fullServerUrl(),r=se(a,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,d=new Be(r,o,yn(e,n),l);return d.errorHandler=vn(t),d}function jn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function wn(e,t,n){const a=Object.assign({},n);return a.fullPath=e.path,a.size=t.size(),a.contentType||(a.contentType=jn(null,t)),a}function Rn(e,t,n,a,r){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function d(){let w="";for(let m=0;m<2;m++)w=w+Math.random().toString().slice(2);return w}const p=d();l["Content-Type"]="multipart/related; boundary="+p;const g=wn(t,a,r),x=_n(g,n),R="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+x+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,k=`\r
--`+p+"--",c=I.getBlob(R,a,k);if(c===null)throw Bt();const j={name:g.fullPath},u=se(o,e.host,e._protocol),h="POST",T=e.maxUploadRetryTime,b=new Be(u,h,xn(e,n),T);return b.urlParams=j,b.headers=l,b.body=c.uploadData(),b.errorHandler=$e(t),b}class kn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,a,r,o){if(this.sent_)throw B("cannot .send() more than once");if(ye(t)&&a&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw B("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw B("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw B("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw B("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Tn extends kn{initXhr(){this.xhr_.responseType="text"}}function ze(){return new Tn}/**
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
 */class O{constructor(t,n){this._service=t,n instanceof P?this._location=n:this._location=P.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new O(t,n)}get root(){const t=new P(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oe(this._location.path)}get storage(){return this._service}get parent(){const t=dn(this._location.path);if(t===null)return null;const n=new P(this._location.bucket,t);return new O(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw zt(t)}}function Cn(e,t,n){e._throwIfRoot("uploadBytes");const a=Rn(e.storage,e._location,Le(),new I(t,!0),n);return e.storage.makeRequestWithTokens(a,ze).then(r=>({metadata:r,ref:e}))}function Dn(e){e._throwIfRoot("getDownloadURL");const t=Nn(e.storage,e._location,Le());return e.storage.makeRequestWithTokens(t,ze).then(n=>{if(n===null)throw Mt();return n})}function Pn(e,t){const n=hn(e._location.path,t),a=new P(e._location.bucket,n);return new O(e.storage,a)}/**
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
 */function En(e){return/^[A-Za-z]+:\/\//.test(e)}function Sn(e,t){return new O(e,t)}function qe(e,t){if(e instanceof ae){const n=e;if(n._bucket==null)throw Ft();const a=new O(n,n._bucket);return t!=null?qe(a,t):a}else return t!==void 0?Pn(e,t):e}function An(e,t){if(t&&En(t)){if(e instanceof ae)return Sn(e,t);throw Z("To use ref(service, url), the first argument must be a Storage instance.")}else return qe(e,t)}function ge(e,t){const n=t==null?void 0:t[De];return n==null?null:P.makeFromBucketSpec(n,e)}function In(e,t,n,a={}){e.host=`${t}:${n}`;const r=ye(t);r&&nt(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=r?"https":"http";const{mockUserToken:o}=a;o&&(e._overrideAuthToken=typeof o=="string"?o:st(o,e.app.options.projectId))}class ae{constructor(t,n,a,r,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=a,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=Ce,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tt,this._maxUploadRetryTime=Ct,this._requests=new Set,r!=null?this._bucket=P.makeFromBucketSpec(r,this._host):this._bucket=ge(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=P.makeFromBucketSpec(this._url,t):this._bucket=ge(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){pe("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){pe("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new O(this,t)}_makeRequest(t,n,a,r,o=!0){if(this._deleted)return new qt(Pe());{const l=en(t,this._appId,a,r,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[a,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,a,r).getPromise()}}const fe="@firebase/storage",be="0.14.3";/**
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
 */const Ve="storage";function Un(e,t,n){return e=q(e),Cn(e,t,n)}function On(e){return e=q(e),Dn(e)}function Ln(e,t){return e=q(e),An(e,t)}function Fn(e=tt(),t){e=q(e);const a=Qe(e,Ve).getImmediate({identifier:t}),r=et("storage");return r&&Bn(a,...r),a}function Bn(e,t,n,a={}){In(e,t,n,a)}function Mn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ae(n,a,r,t,lt)}function $n(){it(new ot(Ve,Mn,"PUBLIC").setMultipleInstances(!0)),re(fe,be,""),re(fe,be,"esm2020")}$n();function He(e){return/^https?:\/\//.test(e)||/^data:image\//.test(e)}function zn({image:e,onRemove:t}){const[n,a]=y.useState(!1);return s.jsxs("figure",{children:[n?s.jsx("div",{className:"admin-image-fallback",children:"Imagen no disponible"}):s.jsx("img",{src:e,alt:"",onError:()=>a(!0)}),s.jsx("button",{type:"button",onClick:t,children:"Quitar"})]})}const qn=["Excelente","Muy bueno","Bueno","Delicado"],Vn=["request_sent","payment_pending","confirmed","ready_for_pickup","active","returned","cancelled"],Hn=["Disponible","Consultar","Reservado"],Wn=["brass","green","red","blue","paper","copper"],X={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function Gn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images.filter(He),visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function L(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Kn(e){const t=e.rentalPricePerWeek.trim(),n=e.internalNotes.trim(),a={id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(r=>r.trim()).filter(Boolean),rentalPricePerDay:L(e.rentalPricePerDay),description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:L(e.estimatedValue),guaranteePercentage:L(e.guaranteePercentage,.3),minimumDeposit:L(e.minimumDeposit),featuredScore:L(e.featuredScore,50),images:e.images.filter(He),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}};return t&&(a.rentalPricePerWeek=L(t)),n&&(a.internalNotes=n),a}function Xn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Yn(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}const Zn=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];function J(e){return new Date(e.getFullYear(),e.getMonth(),1)}function _e(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function Jn(e){const t=J(e),n=(t.getDay()+6)%7,a=new Date(t);return a.setDate(t.getDate()-n),Array.from({length:42},(r,o)=>{const l=new Date(a);return l.setDate(a.getDate()+o),{iso:Y(l),inMonth:l.getMonth()===t.getMonth()}})}function Qn(e){return new Intl.DateTimeFormat("es-AR",{month:"long",year:"numeric"}).format(e)}function es({reservation:e,productName:t,profile:n,onMessage:a}){const r=Q(),[o,l]=y.useState(e.startDate),[d,p]=y.useState(e.endDate),[g,x]=y.useState(String(e.quantity??1)),[R,k]=y.useState(e.note??""),[c,j]=y.useState(e.status??"confirmed"),[u,h]=y.useState(!1),T=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede editar desde el panel porque no viene de Firestore.");return}if(!o||!d||d<o){a("Revisá las fechas de la reserva antes de guardar.");return}try{h(!0),await W(F(r,"reservations",e.id),{startDate:o,endDate:d,quantity:Math.max(1,Number(g)||1),rentalDays:kt(o,d),note:R.trim(),status:c}),a(`Reserva actualizada: ${t}`)}catch(m){console.error(m);const C=m;a(`No se pudo actualizar la reserva (${C.code??"error desconocido"}). ${C.message??"Revisá tus permisos de admin."}`)}finally{h(!1)}},b=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede confirmar desde el panel porque no viene de Firestore.");return}try{h(!0);const m={status:"confirmed",paymentStatus:"manual_confirmed",paymentProvider:"manual",paidAmount:0,balanceDue:e.totalEstimated??0,note:R.trim()||"Confirmada por admin sin seña"};if(e.checkoutGroupId){const C=await jt(wt(Re(r,"reservations"),Rt("checkoutGroupId","==",e.checkoutGroupId)));await Promise.all(C.docs.map(A=>W(A.ref,m)))}else await W(F(r,"reservations",e.id),m);j("confirmed"),a(`Reserva confirmada sin seña: ${t}`)}catch(m){console.error(m);const C=m;a(`No se pudo confirmar sin seña (${C.code??"error desconocido"}). ${C.message??"Revisá tus permisos de admin."}`)}finally{h(!1)}},w=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede borrar desde el panel porque no viene de Firestore.");return}if(window.confirm(`¿Borrar la reserva de ${t}?`))try{h(!0),await Te(F(r,"reservations",e.id)),a(`Reserva borrada: ${t}`)}catch(m){console.error(m);const C=m;a(`No se pudo borrar la reserva (${C.code??"error desconocido"}). ${C.message??"Revisá tus permisos de admin."}`)}finally{h(!1)}};return s.jsxs("article",{className:"admin-reservation-row",children:[s.jsxs("div",{children:[s.jsx("strong",{children:t}),s.jsx("span",{children:n?`${n.firstName} ${n.lastName}`:e.customerName||e.customerEmail||"Cliente sin datos visibles"}),n&&s.jsxs("span",{children:["DNI: ",n.dni]}),n&&s.jsxs("span",{children:["Celular: ",n.phone]}),(n==null?void 0:n.email)&&s.jsx("span",{children:n.email}),e.paymentAlias&&s.jsxs("span",{children:["Pago: Mercado Pago alias ",e.paymentAlias]}),typeof e.reserveDeposit=="number"&&s.jsxs("span",{children:["Seña: $",e.reserveDeposit.toLocaleString("es-AR")]}),typeof e.balanceDue=="number"&&s.jsxs("span",{children:["Saldo: $",e.balanceDue.toLocaleString("es-AR")]})]}),s.jsxs("div",{className:"admin-reservation-fields",children:[s.jsxs("label",{children:["Desde",s.jsx("input",{className:"gabinete-input",type:"date",value:o,onChange:m=>l(m.target.value)})]}),s.jsxs("label",{children:["Hasta",s.jsx("input",{className:"gabinete-input",type:"date",value:d,onChange:m=>p(m.target.value)})]}),s.jsxs("label",{children:["Cant.",s.jsx("input",{className:"gabinete-input",type:"number",min:"1",value:g,onChange:m=>x(m.target.value)})]}),s.jsxs("label",{children:["Estado",s.jsx("select",{className:"gabinete-input",value:c,onChange:m=>j(m.target.value),children:Vn.map(m=>s.jsx("option",{value:m,children:ke(m)},m))})]})]}),s.jsxs("label",{className:"admin-reservation-note",children:["Nota",s.jsx("input",{className:"gabinete-input",value:R,onChange:m=>k(m.target.value)})]}),s.jsxs("div",{className:"admin-reservation-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:b,disabled:u,children:[s.jsx(ve,{size:16}),"Confirmar sin seña"]}),s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:w,disabled:u,children:[s.jsx(je,{size:16}),"Borrar"]}),s.jsxs("button",{type:"button",className:"gabinete-button",onClick:T,disabled:u,children:[s.jsx(we,{size:16}),u?"Guardando...":"Guardar"]})]})]})}function ts({products:e}){const{reservations:t,syncMode:n}=bt(),[a,r]=y.useState(""),[o,l]=y.useState([]),[d,p]=y.useState(()=>J(_t(xt()))),g=y.useMemo(()=>Jn(d),[d]),x=y.useMemo(()=>new Map(e.map(u=>[u.id,u])),[e]),R=y.useMemo(()=>new Map(o.map(u=>[u.uid,u])),[o]),k=Y(J(d)),c=Y(new Date(d.getFullYear(),d.getMonth()+1,0)),j=y.useMemo(()=>t.filter(u=>ue(k,c,u.startDate,u.endDate)).sort((u,h)=>u.startDate.localeCompare(h.startDate)||u.productId.localeCompare(h.productId)),[c,k,t]);return y.useEffect(()=>{const u=Q();if(u)return yt(Re(u,"userProfiles"),h=>{l(h.docs.map(T=>T.data()))})},[]),s.jsxs("section",{className:"admin-reservations parchment-panel",children:[s.jsxs("div",{className:"admin-reservations-head",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"eyebrow flex items-center gap-2",children:[s.jsx(Ne,{size:15}),"Calendario admin"]}),s.jsx("h2",{children:"Pedidos y alquileres por fecha"}),s.jsxs("p",{children:["Fuente de reservas: ",n==="firebase"?"Firestore":"local",". Cada marca bloquea el objeto para futuros clientes."]})]}),s.jsxs("div",{className:"calendar-month-bar admin-calendar-nav",children:[s.jsx("button",{type:"button",onClick:()=>p(u=>_e(u,-1)),children:s.jsx(vt,{size:18})}),s.jsx("strong",{children:Qn(d)}),s.jsx("button",{type:"button",onClick:()=>p(u=>_e(u,1)),children:s.jsx(Nt,{size:18})})]})]}),s.jsxs("div",{className:"admin-calendar-grid",children:[Zn.map(u=>s.jsx("span",{className:"calendar-weekday",children:u},u)),g.map(({iso:u,inMonth:h})=>{const T=t.filter(b=>ue(u,u,b.startDate,b.endDate));return s.jsxs("div",{className:`admin-calendar-day ${h?"":"is-outside"} ${T.length>0?"has-reservations":""}`,children:[s.jsx("span",{className:"admin-calendar-number",children:Number(u.slice(-2))}),T.slice(0,2).map(b=>{const w=x.get(b.productId);return s.jsx("span",{className:`admin-calendar-chip status-${b.status??"confirmed"}`,title:`${(w==null?void 0:w.name)??b.productId} · ${ke(b.status)}`,children:(w==null?void 0:w.name)??b.productId},b.id)}),T.length>2&&s.jsxs("span",{className:"admin-calendar-more",children:["+",T.length-2]})]},u)})]}),s.jsxs("div",{className:"admin-reservation-list",children:[s.jsx("p",{className:"eyebrow",children:"Reservas del mes"}),a&&s.jsx("p",{className:"admin-message",children:a}),j.length===0?s.jsx("p",{className:"admin-empty-reservations",children:"No hay objetos alquilados o pedidos para este mes."}):j.map(u=>{const h=x.get(u.productId);return s.jsx(es,{reservation:u,productName:(h==null?void 0:h.name)??u.productId,profile:u.createdByUid?R.get(u.createdByUid):void 0,onMessage:r},u.id)})]})]})}function ss(){const e=ct(),t=Q(),n=e?Fn(e):null,{user:a,isAdmin:r,checkingAdmin:o,loginWithGoogle:l,logout:d,authError:p}=ut(),{products:g,syncMode:x}=dt(),[R,k]=y.useState(""),[c,j]=y.useState(X),[u,h]=y.useState(""),[T,b]=y.useState(!1),[w,m]=y.useState(!1),[C,A]=y.useState("reservations"),V=y.useMemo(()=>[...g].sort((i,_)=>i.name.localeCompare(_.name)),[g]),f=(i,_)=>{j(E=>({...E,[i]:_}))},We=async i=>{i.preventDefault(),h(""),await l()},Ge=()=>{j({...X,id:`EG-${String(g.length+1).padStart(3,"0")}`}),h("")},Ke=async i=>{if(i.preventDefault(),!t||!r)return;const _=Kn(c);if(!_.id||!_.name){h("Completá ID y nombre antes de guardar.");return}try{b(!0),await ce(F(t,"products",_.id),_),h(`Producto guardado: ${_.name}`)}catch(E){console.error(E);const H=E;h(`No se pudo guardar el producto (${H.code??"error desconocido"}). ${H.message??"Revisá los datos cargados y tus permisos de admin."}`)}finally{b(!1)}},Xe=async()=>{!t||!r||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(b(!0),await Te(F(t,"products",c.id)),b(!1),j(X),h("Producto eliminado."))},Ye=()=>{const i=R.trim();if(!/^https?:\/\//.test(i)){h("Pegá una URL pública de imagen que empiece con http o https.");return}f("images",[i,...c.images]),k(""),h("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Ze=async i=>{if(!i||!n||!c.id){h("Completá el ID antes de subir imágenes.");return}try{m(!0);const _=Ln(n,`products/${c.id}/${Date.now()}-${Yn(i.name)}`);await Un(_,i,{contentType:i.type});const E=await On(_);f("images",[E,...c.images]),h("Imagen subida. Guardá el producto para conservarla en el catálogo.")}catch(_){console.error(_);const E=_;h(`No se pudo subir la imagen (${E.code??"error desconocido"}). ${E.message??"Revisá las reglas de Storage y tus permisos de admin."}`)}finally{m(!1)}},Je=async()=>{if(!(!t||!r||!window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")))try{b(!0);let i=0;await Promise.all(gt.map(async _=>{const E=F(t,"products",_.id);(await ft(E)).exists()||(await ce(E,_),i+=1)})),h(i>0?`Catálogo base restaurado. Se agregaron ${i} productos.`:"Firestore ya tenía todos los productos base.")}catch(i){console.error(i);const _=i;h(`No se pudo restaurar el catálogo base (${_.code??"error desconocido"}). ${_.message??"Revisá tus permisos de admin."}`)}finally{b(!1)}};return!ht||!t?s.jsx("section",{className:"admin-page",children:s.jsxs("div",{className:"admin-card",children:[s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Firebase no está configurado"}),s.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):a?o?s.jsx("section",{className:"admin-page",children:s.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):r?s.jsxs("section",{className:"admin-page",children:[s.jsxs("div",{className:"admin-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Panel"}),s.jsxs("p",{children:["Fuente actual: ",x==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),s.jsxs("div",{className:"admin-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Je,disabled:T,children:[s.jsx(de,{size:17}),"Restaurar catálogo base"]}),s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[s.jsx(le,{size:17}),"Salir"]})]})]}),u&&s.jsxs("p",{className:"admin-message",children:[s.jsx(ve,{size:16}),u]}),s.jsxs("div",{className:"admin-tabs",role:"tablist","aria-label":"Secciones del panel",children:[s.jsxs("button",{type:"button",className:C==="reservations"?"is-active":"",onClick:()=>A("reservations"),children:[s.jsx(Ne,{size:16}),"Calendario y reservas"]}),s.jsxs("button",{type:"button",className:C==="catalog"?"is-active":"",onClick:()=>A("catalog"),children:[s.jsx(de,{size:16}),"Actualización del catálogo"]})]}),C==="reservations"&&s.jsx(ts,{products:g}),C==="catalog"&&s.jsxs("div",{className:"admin-layout",children:[s.jsxs("aside",{className:"admin-list",children:[s.jsxs("button",{type:"button",className:"admin-new-button",onClick:Ge,children:[s.jsx(mt,{size:16}),"Nuevo producto"]}),V.map(i=>s.jsxs("button",{type:"button",className:c.id===i.id?"is-active":"",onClick:()=>j(Gn(i)),children:[s.jsx("strong",{children:i.name}),s.jsxs("span",{children:[i.id," · ",i.category]})]},i.id))]}),s.jsxs("form",{onSubmit:Ke,className:"admin-editor",children:[s.jsxs("div",{className:"admin-editor-title",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Ficha editable"}),s.jsx("h2",{children:c.name||"Producto nuevo"})]}),s.jsxs("div",{className:"admin-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Xe,disabled:!c.id||T,children:[s.jsx(je,{size:17}),"Eliminar"]}),s.jsxs("button",{type:"submit",className:"gabinete-button",disabled:T,children:[s.jsx(we,{size:17}),T?"Guardando...":"Guardar"]})]})]}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("label",{children:["ID",s.jsx("input",{className:"gabinete-input",value:c.id,onChange:i=>f("id",Xn(i.target.value).toUpperCase())})]}),s.jsxs("label",{children:["Nombre",s.jsx("input",{className:"gabinete-input",value:c.name,onChange:i=>f("name",i.target.value)})]}),s.jsxs("label",{children:["Categoría",s.jsx("select",{className:"gabinete-input",value:c.category,onChange:i=>f("category",i.target.value),children:pt.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Estado",s.jsx("select",{className:"gabinete-input",value:c.status,onChange:i=>f("status",i.target.value),children:qn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Disponibilidad",s.jsx("select",{className:"gabinete-input",value:c.availability,onChange:i=>f("availability",i.target.value),children:Hn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Precio diario",s.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:i=>f("rentalPricePerDay",i.target.value)})]}),s.jsxs("label",{children:["Precio semanal",s.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:i=>f("rentalPricePerWeek",i.target.value)})]}),s.jsxs("label",{children:["Valor estimado",s.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:i=>f("estimatedValue",i.target.value)})]}),s.jsxs("label",{children:["Garantía %",s.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:i=>f("guaranteePercentage",i.target.value)})]}),s.jsxs("label",{children:["Depósito mínimo",s.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:i=>f("minimumDeposit",i.target.value)})]}),s.jsxs("label",{children:["Destacado",s.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:i=>f("featuredScore",i.target.value)})]}),s.jsxs("label",{children:["Tags",s.jsx("input",{className:"gabinete-input",value:c.tags,onChange:i=>f("tags",i.target.value),placeholder:"vintage, cine, oficina"})]}),s.jsxs("label",{children:["Medidas",s.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:i=>f("measurements",i.target.value)})]}),s.jsxs("label",{children:["Material",s.jsx("input",{className:"gabinete-input",value:c.material,onChange:i=>f("material",i.target.value)})]}),s.jsxs("label",{children:["Color",s.jsx("input",{className:"gabinete-input",value:c.color,onChange:i=>f("color",i.target.value)})]}),s.jsxs("label",{children:["Época / estilo",s.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:i=>f("eraStyle",i.target.value)})]}),s.jsxs("label",{children:["Tono visual",s.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:i=>f("visualTone",i.target.value),children:Wn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Símbolo",s.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:i=>f("visualSigil",i.target.value)})]})]}),s.jsxs("label",{className:"admin-wide",children:["Descripción",s.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:i=>f("description",i.target.value)})]}),s.jsxs("label",{className:"admin-wide",children:["Curiosidades",s.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:i=>f("curiosities",i.target.value)})]}),s.jsxs("label",{className:"admin-wide",children:["Notas internas",s.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:i=>f("internalNotes",i.target.value)})]}),s.jsxs("div",{className:"admin-images",children:[s.jsxs("label",{className:"admin-upload",children:[s.jsx(he,{size:18}),w?"Subiendo...":"Subir archivo",s.jsx("input",{type:"file",accept:"image/*",onChange:i=>{var _;return Ze((_=i.target.files)==null?void 0:_[0])}})]}),s.jsxs("div",{className:"admin-image-url",children:[s.jsxs("label",{children:["URL pública de imagen",s.jsx("input",{className:"gabinete-input",value:R,onChange:i=>k(i.target.value),placeholder:"https://..."})]}),s.jsxs("button",{type:"button",className:"admin-upload",onClick:Ye,children:[s.jsx(he,{size:18}),"Agregar imagen"]})]}),s.jsx("div",{className:"admin-image-grid",children:c.images.map(i=>s.jsx(zn,{image:i,onRemove:()=>f("images",c.images.filter(_=>_!==i))},i))})]})]})]})]}):s.jsx("section",{className:"admin-page",children:s.jsxs("div",{className:"admin-card",children:[s.jsx("p",{className:"eyebrow",children:"Sin permiso"}),s.jsx("h1",{children:"Tu usuario no es administrador"}),s.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",s.jsx("strong",{children:a.email})]}),s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[s.jsx(le,{size:17}),"Salir"]})]})}):s.jsx("section",{className:"admin-page",children:s.jsxs("form",{onSubmit:We,className:"admin-card admin-login",children:[s.jsx("span",{className:"admin-lock",children:s.jsx(ie,{size:22})}),s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Ingresar al catálogo"}),s.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),s.jsxs("div",{className:"admin-auth-debug",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Auth domain:"})," ",oe.authDomain||"sin configurar"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Project ID:"})," ",oe.projectId||"sin configurar"]})]}),(u||p)&&s.jsx("p",{className:"admin-message",children:u||p}),s.jsxs("button",{type:"submit",className:"gabinete-button",children:[s.jsx(ie,{size:17}),"Entrar con Google"]})]})})}export{ss as AdminPage};
