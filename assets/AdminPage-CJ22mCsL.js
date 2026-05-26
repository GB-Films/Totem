import{c as _e,g as V,_ as Xe,a as Ye,b as Ze,i as xe,p as Je,d as Qe,e as et,F as tt,f as nt,C as st,r as ae,S as at,h as rt,j as J,u as it,k as ot,l as w,m as lt,n as s,L as re,o as ie,q as oe,s as ct,t as ye,P as ut,T as ve,v as Ne,w as dt,x as ht,y as M,z as mt,A as le,B as pt,D as gt,E as ft,G as X,H as ce,I as bt,J as _t,K as xt,M as yt,N as we,O as vt,Q as Nt}from"./index-Bm58xX44.js";/**
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
 */const je="firebasestorage.googleapis.com",Re="storageBucket",wt=120*1e3,jt=600*1e3;/**
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
 */class N extends tt{constructor(t,n,a=0){super(W(t),`Firebase Storage: ${n} (${W(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,N.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return W(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var v;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(v||(v={}));function W(e){return"storage/"+e}function Q(){const e="An unknown error occurred, please check the error payload for server response.";return new N(v.UNKNOWN,e)}function Rt(e){return new N(v.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function kt(e){return new N(v.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Tt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new N(v.UNAUTHENTICATED,e)}function Ct(){return new N(v.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Dt(e){return new N(v.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Pt(){return new N(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Et(){return new N(v.CANCELED,"User canceled the upload/download.")}function At(e){return new N(v.INVALID_URL,"Invalid URL '"+e+"'.")}function St(e){return new N(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function It(){return new N(v.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Re+"' property when initializing the app?")}function Ut(){return new N(v.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ot(){return new N(v.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Lt(e){return new N(v.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Y(e){return new N(v.INVALID_ARGUMENT,e)}function ke(){return new N(v.APP_DELETED,"The Firebase app was deleted.")}function Ft(e){return new N(v.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function B(e,t){return new N(v.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function F(e){throw new N(v.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class D{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let a;try{a=D.makeFromUrl(t,n)}catch{return new D(t,"")}if(a.path==="")return a;throw St(t)}static makeFromUrl(t,n){let a=null;const r="([A-Za-z0-9.\\-_]+)";function o(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+r+l,"i"),m={bucket:1,path:3};function g(T){T.path_=decodeURIComponent(T.path)}const x="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),j="(/([^?#]*).*)?$",c=new RegExp(`^https?://${R}/${x}/b/${r}/o${j}`,"i"),y={bucket:1,path:3},d=n===je?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",p=new RegExp(`^https?://${d}/${r}/${h}`,"i"),k=[{regex:u,indices:m,postModify:o},{regex:c,indices:y,postModify:g},{regex:p,indices:{bucket:1,path:2},postModify:g}];for(let T=0;T<k.length;T++){const A=k[T],O=A.regex.exec(t);if(O){const q=O[A.indices.bucket];let b=O[A.indices.path];b||(b=""),a=new D(q,b),A.postModify(a);break}}if(a==null)throw At(t);return a}}class Mt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Bt(e,t,n){let a=1,r=null,o=null,l=!1,u=0;function m(){return u===2}let g=!1;function x(...h){g||(g=!0,t.apply(null,h))}function R(h){r=setTimeout(()=>{r=null,e(c,m())},h)}function j(){o&&clearTimeout(o)}function c(h,...p){if(g){j();return}if(h){j(),x.call(null,h,...p);return}if(m()||l){j(),x.call(null,h,...p);return}a<64&&(a*=2);let k;u===1?(u=2,k=0):k=(a+Math.random())*1e3,R(k)}let y=!1;function d(h){y||(y=!0,j(),!g&&(r!==null?(h||(u=2),clearTimeout(r),R(0)):h||(u=1)))}return R(0),o=setTimeout(()=>{l=!0,d(!0)},n),d}function $t(e){e(!1)}/**
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
 */function zt(e){return e!==void 0}function Vt(e){return typeof e=="object"&&!Array.isArray(e)}function ee(e){return typeof e=="string"||e instanceof String}function he(e){return te()&&e instanceof Blob}function te(){return typeof Blob<"u"}function me(e,t,n,a){if(a<t)throw Y(`Invalid value for '${e}'. Expected ${t} or greater.`);if(a>n)throw Y(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ne(e,t,n){let a=t;return n==null&&(a=`https://${t}`),`${n}://${a}/v0${e}`}function Te(e){const t=encodeURIComponent;let n="?";for(const a in e)if(e.hasOwnProperty(a)){const r=t(a)+"="+t(e[a]);n=n+r+"&"}return n=n.slice(0,-1),n}var I;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(I||(I={}));/**
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
 */function qt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Ht{constructor(t,n,a,r,o,l,u,m,g,x,R,j=!0,c=!1){this.url_=t,this.method_=n,this.headers_=a,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=x,this.connectionFactory_=R,this.retry=j,this.isUsingEmulator=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,d)=>{this.resolve_=y,this.reject_=d,this.start_()})}start_(){const t=(a,r)=>{if(r){a(!1,new $(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=u=>{const m=u.loaded,g=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const u=o.getErrorCode()===I.NO_ERROR,m=o.getStatus();if(!u||qt(m,this.additionalRetryCodes_)&&this.retry){const x=o.getErrorCode()===I.ABORT;a(!1,new $(!1,null,x));return}const g=this.successCodes_.indexOf(m)!==-1;a(!0,new $(g,o))})},n=(a,r)=>{const o=this.resolve_,l=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const m=this.callback_(u,u.getResponse());zt(m)?o(m):o()}catch(m){l(m)}else if(u!==null){const m=Q();m.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,m)):l(m)}else if(r.canceled){const m=this.appDelete_?ke():Et();l(m)}else{const m=Pt();l(m)}};this.canceled_?n(!1,new $(!1,null,!0)):this.backoffId_=Bt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&$t(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ${constructor(t,n,a){this.wasSuccessCode=t,this.connection=n,this.canceled=!!a}}function Wt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Gt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Kt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Xt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Yt(e,t,n,a,r,o,l=!0,u=!1){const m=Te(e.urlParams),g=e.url+m,x=Object.assign({},e.headers);return Kt(x,t),Wt(x,n),Gt(x,o),Xt(x,a),new Ht(g,e.method,x,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,l,u)}/**
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
 */function Zt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Jt(...e){const t=Zt();if(t!==void 0){const n=new t;for(let a=0;a<e.length;a++)n.append(e[a]);return n.getBlob()}else{if(te())return new Blob(e);throw new N(v.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Qt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function en(e){if(typeof atob>"u")throw Lt("base-64");return atob(e)}/**
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
 */const E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class G{constructor(t,n){this.data=t,this.contentType=n||null}}function tn(e,t){switch(e){case E.RAW:return new G(Ce(t));case E.BASE64:case E.BASE64URL:return new G(De(e,t));case E.DATA_URL:return new G(sn(t),an(t))}throw Q()}function Ce(e){const t=[];for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);if(a<=127)t.push(a);else if(a<=2047)t.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=a,l=e.charCodeAt(++n);a=65536|(o&1023)<<10|l&1023,t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?t.push(239,191,189):t.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(t)}function nn(e){let t;try{t=decodeURIComponent(e)}catch{throw B(E.DATA_URL,"Malformed data URL.")}return Ce(t)}function De(e,t){switch(e){case E.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw B(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw B(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=en(t)}catch(r){throw r.message.includes("polyfill")?r:B(e,"Invalid character found")}const a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a}class Pe{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw B(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=n[1]||null;a!=null&&(this.base64=rn(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=t.substring(t.indexOf(",")+1)}}function sn(e){const t=new Pe(e);return t.base64?De(E.BASE64,t.rest):nn(t.rest)}function an(e){return new Pe(e).contentType}function rn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class S{constructor(t,n){let a=0,r="";he(t)?(this.data_=t,a=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),a=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),a=t.length),this.size_=a,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(he(this.data_)){const a=this.data_,r=Qt(a,t,n);return r===null?null:new S(r)}else{const a=new Uint8Array(this.data_.buffer,t,n-t);return new S(a,!0)}}static getBlob(...t){if(te()){const n=t.map(a=>a instanceof S?a.data_:a);return new S(Jt.apply(null,n))}else{const n=t.map(l=>ee(l)?tn(E.RAW,l).data:l.data_);let a=0;n.forEach(l=>{a+=l.byteLength});const r=new Uint8Array(a);let o=0;return n.forEach(l=>{for(let u=0;u<l.length;u++)r[o++]=l[u]}),new S(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ee(e){let t;try{t=JSON.parse(e)}catch{return null}return Vt(t)?t:null}/**
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
 */function on(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function ln(e,t){const n=t.split("/").filter(a=>a.length>0).join("/");return e.length===0?n:e+"/"+n}function Ae(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function cn(e,t){return t}class C{constructor(t,n,a,r){this.server=t,this.local=n||t,this.writable=!!a,this.xform=r||cn}}let z=null;function un(e){return!ee(e)||e.length<2?e:Ae(e)}function Se(){if(z)return z;const e=[];e.push(new C("bucket")),e.push(new C("generation")),e.push(new C("metageneration")),e.push(new C("name","fullPath",!0));function t(o,l){return un(l)}const n=new C("name");n.xform=t,e.push(n);function a(o,l){return l!==void 0?Number(l):l}const r=new C("size");return r.xform=a,e.push(r),e.push(new C("timeCreated")),e.push(new C("updated")),e.push(new C("md5Hash",null,!0)),e.push(new C("cacheControl",null,!0)),e.push(new C("contentDisposition",null,!0)),e.push(new C("contentEncoding",null,!0)),e.push(new C("contentLanguage",null,!0)),e.push(new C("contentType",null,!0)),e.push(new C("metadata","customMetadata",!0)),z=e,z}function dn(e,t){function n(){const a=e.bucket,r=e.fullPath,o=new D(a,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function hn(e,t,n){const a={};a.type="file";const r=n.length;for(let o=0;o<r;o++){const l=n[o];a[l.local]=l.xform(a,t[l.server])}return dn(a,e),a}function Ie(e,t,n){const a=Ee(t);return a===null?null:hn(e,a,n)}function mn(e,t,n,a){const r=Ee(t);if(r===null||!ee(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(g=>{const x=e.bucket,R=e.fullPath,j="/b/"+l(x)+"/o/"+l(R),c=ne(j,n,a),y=Te({alt:"media",token:g});return c+y})[0]}function pn(e,t){const n={},a=t.length;for(let r=0;r<a;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Ue{constructor(t,n,a,r){this.url=t,this.method=n,this.handler=a,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Oe(e){if(!e)throw Q()}function gn(e,t){function n(a,r){const o=Ie(e,r,t);return Oe(o!==null),o}return n}function fn(e,t){function n(a,r){const o=Ie(e,r,t);return Oe(o!==null),mn(o,r,e.host,e._protocol)}return n}function Le(e){function t(n,a){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ct():r=Tt():n.getStatus()===402?r=kt(e.bucket):n.getStatus()===403?r=Dt(e.path):r=a,r.status=n.getStatus(),r.serverResponse=a.serverResponse,r}return t}function bn(e){const t=Le(e);function n(a,r){let o=t(a,r);return a.getStatus()===404&&(o=Rt(e.path)),o.serverResponse=r.serverResponse,o}return n}function _n(e,t,n){const a=t.fullServerUrl(),r=ne(a,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,u=new Ue(r,o,fn(e,n),l);return u.errorHandler=bn(t),u}function xn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function yn(e,t,n){const a=Object.assign({},n);return a.fullPath=e.path,a.size=t.size(),a.contentType||(a.contentType=xn(null,t)),a}function vn(e,t,n,a,r){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function u(){let k="";for(let T=0;T<2;T++)k=k+Math.random().toString().slice(2);return k}const m=u();l["Content-Type"]="multipart/related; boundary="+m;const g=yn(t,a,r),x=pn(g,n),R="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+x+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,j=`\r
--`+m+"--",c=S.getBlob(R,a,j);if(c===null)throw Ut();const y={name:g.fullPath},d=ne(o,e.host,e._protocol),h="POST",p=e.maxUploadRetryTime,f=new Ue(d,h,gn(e,n),p);return f.urlParams=y,f.headers=l,f.body=c.uploadData(),f.errorHandler=Le(t),f}class Nn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=I.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=I.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,a,r,o){if(this.sent_)throw F("cannot .send() more than once");if(xe(t)&&a&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw F("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw F("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw F("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw F("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class wn extends Nn{initXhr(){this.xhr_.responseType="text"}}function Fe(){return new wn}/**
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
 */class U{constructor(t,n){this._service=t,n instanceof D?this._location=n:this._location=D.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new U(t,n)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ae(this._location.path)}get storage(){return this._service}get parent(){const t=on(this._location.path);if(t===null)return null;const n=new D(this._location.bucket,t);return new U(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ft(t)}}function jn(e,t,n){e._throwIfRoot("uploadBytes");const a=vn(e.storage,e._location,Se(),new S(t,!0),n);return e.storage.makeRequestWithTokens(a,Fe).then(r=>({metadata:r,ref:e}))}function Rn(e){e._throwIfRoot("getDownloadURL");const t=_n(e.storage,e._location,Se());return e.storage.makeRequestWithTokens(t,Fe).then(n=>{if(n===null)throw Ot();return n})}function kn(e,t){const n=ln(e._location.path,t),a=new D(e._location.bucket,n);return new U(e.storage,a)}/**
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
 */function Tn(e){return/^[A-Za-z]+:\/\//.test(e)}function Cn(e,t){return new U(e,t)}function Me(e,t){if(e instanceof se){const n=e;if(n._bucket==null)throw It();const a=new U(n,n._bucket);return t!=null?Me(a,t):a}else return t!==void 0?kn(e,t):e}function Dn(e,t){if(t&&Tn(t)){if(e instanceof se)return Cn(e,t);throw Y("To use ref(service, url), the first argument must be a Storage instance.")}else return Me(e,t)}function pe(e,t){const n=t==null?void 0:t[Re];return n==null?null:D.makeFromBucketSpec(n,e)}function Pn(e,t,n,a={}){e.host=`${t}:${n}`;const r=xe(t);r&&Je(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=r?"https":"http";const{mockUserToken:o}=a;o&&(e._overrideAuthToken=typeof o=="string"?o:Qe(o,e.app.options.projectId))}class se{constructor(t,n,a,r,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=a,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=je,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wt,this._maxUploadRetryTime=jt,this._requests=new Set,r!=null?this._bucket=D.makeFromBucketSpec(r,this._host):this._bucket=pe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=pe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,n,a,r,o=!0){if(this._deleted)return new Mt(ke());{const l=Yt(t,this._appId,a,r,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[a,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,a,r).getPromise()}}const ge="@firebase/storage",fe="0.14.3";/**
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
 */const Be="storage";function En(e,t,n){return e=V(e),jn(e,t,n)}function An(e){return e=V(e),Rn(e)}function Sn(e,t){return e=V(e),Dn(e,t)}function In(e=Ze(),t){e=V(e);const a=Xe(e,Be).getImmediate({identifier:t}),r=Ye("storage");return r&&Un(a,...r),a}function Un(e,t,n,a={}){Pn(e,t,n,a)}function On(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new se(n,a,r,t,at)}function Ln(){nt(new st(Be,On,"PUBLIC").setMultipleInstances(!0)),ae(ge,fe,""),ae(ge,fe,"esm2020")}Ln();function $e(e){return/^https?:\/\//.test(e)||/^data:image\//.test(e)}function Fn({image:e,onRemove:t}){const[n,a]=w.useState(!1);return s.jsxs("figure",{children:[n?s.jsx("div",{className:"admin-image-fallback",children:"Imagen no disponible"}):s.jsx("img",{src:e,alt:"",onError:()=>a(!0)}),s.jsx("button",{type:"button",onClick:t,children:"Quitar"})]})}const Mn=["Excelente","Muy bueno","Bueno","Delicado"],Bn=["Disponible","Consultar","Reservado"],$n=["brass","green","red","blue","paper","copper"],K={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function zn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images.filter($e),visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function L(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Vn(e){const t=e.rentalPricePerWeek.trim(),n=e.internalNotes.trim(),a={id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(r=>r.trim()).filter(Boolean),rentalPricePerDay:L(e.rentalPricePerDay),description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:L(e.estimatedValue),guaranteePercentage:L(e.guaranteePercentage,.3),minimumDeposit:L(e.minimumDeposit),featuredScore:L(e.featuredScore,50),images:e.images.filter($e),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}};return t&&(a.rentalPricePerWeek=L(t)),n&&(a.internalNotes=n),a}function qn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Hn(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}const Wn=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];function Z(e){return new Date(e.getFullYear(),e.getMonth(),1)}function be(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function Gn(e){const t=Z(e),n=(t.getDay()+6)%7,a=new Date(t);return a.setDate(t.getDate()-n),Array.from({length:42},(r,o)=>{const l=new Date(a);return l.setDate(a.getDate()+o),{iso:X(l),inMonth:l.getMonth()===t.getMonth()}})}function Kn(e){return new Intl.DateTimeFormat("es-AR",{month:"long",year:"numeric"}).format(e)}function Xn({reservation:e,productName:t,profile:n,onMessage:a}){const r=J(),[o,l]=w.useState(e.startDate),[u,m]=w.useState(e.endDate),[g,x]=w.useState(String(e.quantity??1)),[R,j]=w.useState(e.note??""),[c,y]=w.useState(!1),d=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede editar desde el panel porque no viene de Firestore.");return}if(!o||!u||u<o){a("Revisá las fechas de la reserva antes de guardar.");return}try{y(!0),await vt(M(r,"reservations",e.id),{startDate:o,endDate:u,quantity:Math.max(1,Number(g)||1),rentalDays:Nt(o,u),note:R.trim()}),a(`Reserva actualizada: ${t}`)}catch(p){console.error(p);const f=p;a(`No se pudo actualizar la reserva (${f.code??"error desconocido"}). ${f.message??"Revisá tus permisos de admin."}`)}finally{y(!1)}},h=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede borrar desde el panel porque no viene de Firestore.");return}if(window.confirm(`¿Borrar la reserva de ${t}?`))try{y(!0),await we(M(r,"reservations",e.id)),a(`Reserva borrada: ${t}`)}catch(p){console.error(p);const f=p;a(`No se pudo borrar la reserva (${f.code??"error desconocido"}). ${f.message??"Revisá tus permisos de admin."}`)}finally{y(!1)}};return s.jsxs("article",{className:"admin-reservation-row",children:[s.jsxs("div",{children:[s.jsx("strong",{children:t}),s.jsx("span",{children:n?`${n.firstName} ${n.lastName}`:e.customerName||e.customerEmail||"Cliente sin datos visibles"}),n&&s.jsxs("span",{children:["DNI: ",n.dni]}),n&&s.jsxs("span",{children:["Celular: ",n.phone]}),(n==null?void 0:n.email)&&s.jsx("span",{children:n.email})]}),s.jsxs("div",{className:"admin-reservation-fields",children:[s.jsxs("label",{children:["Desde",s.jsx("input",{className:"gabinete-input",type:"date",value:o,onChange:p=>l(p.target.value)})]}),s.jsxs("label",{children:["Hasta",s.jsx("input",{className:"gabinete-input",type:"date",value:u,onChange:p=>m(p.target.value)})]}),s.jsxs("label",{children:["Cant.",s.jsx("input",{className:"gabinete-input",type:"number",min:"1",value:g,onChange:p=>x(p.target.value)})]})]}),s.jsxs("label",{className:"admin-reservation-note",children:["Nota",s.jsx("input",{className:"gabinete-input",value:R,onChange:p=>j(p.target.value)})]}),s.jsxs("div",{className:"admin-reservation-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:h,disabled:c,children:[s.jsx(ve,{size:16}),"Borrar"]}),s.jsxs("button",{type:"button",className:"gabinete-button",onClick:d,disabled:c,children:[s.jsx(Ne,{size:16}),c?"Guardando...":"Guardar"]})]})]})}function Yn({products:e}){const{reservations:t,syncMode:n}=pt(),[a,r]=w.useState(""),[o,l]=w.useState([]),[u,m]=w.useState(()=>Z(gt(ft()))),g=w.useMemo(()=>Gn(u),[u]),x=w.useMemo(()=>new Map(e.map(d=>[d.id,d])),[e]),R=w.useMemo(()=>new Map(o.map(d=>[d.uid,d])),[o]),j=X(Z(u)),c=X(new Date(u.getFullYear(),u.getMonth()+1,0)),y=w.useMemo(()=>t.filter(d=>ce(j,c,d.startDate,d.endDate)).sort((d,h)=>d.startDate.localeCompare(h.startDate)||d.productId.localeCompare(h.productId)),[c,j,t]);return w.useEffect(()=>{const d=J();if(d)return bt(_t(d,"userProfiles"),h=>{l(h.docs.map(p=>p.data()))})},[]),s.jsxs("section",{className:"admin-reservations parchment-panel",children:[s.jsxs("div",{className:"admin-reservations-head",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"eyebrow flex items-center gap-2",children:[s.jsx(ye,{size:15}),"Calendario admin"]}),s.jsx("h2",{children:"Pedidos y alquileres por fecha"}),s.jsxs("p",{children:["Fuente de reservas: ",n==="firebase"?"Firestore":"local",". Cada marca bloquea el objeto para futuros clientes."]})]}),s.jsxs("div",{className:"calendar-month-bar admin-calendar-nav",children:[s.jsx("button",{type:"button",onClick:()=>m(d=>be(d,-1)),children:s.jsx(xt,{size:18})}),s.jsx("strong",{children:Kn(u)}),s.jsx("button",{type:"button",onClick:()=>m(d=>be(d,1)),children:s.jsx(yt,{size:18})})]})]}),s.jsxs("div",{className:"admin-calendar-grid",children:[Wn.map(d=>s.jsx("span",{className:"calendar-weekday",children:d},d)),g.map(({iso:d,inMonth:h})=>{const p=t.filter(f=>ce(d,d,f.startDate,f.endDate));return s.jsxs("div",{className:`admin-calendar-day ${h?"":"is-outside"} ${p.length>0?"has-reservations":""}`,children:[s.jsx("span",{className:"admin-calendar-number",children:Number(d.slice(-2))}),p.slice(0,2).map(f=>{const k=x.get(f.productId);return s.jsx("span",{className:"admin-calendar-chip",title:(k==null?void 0:k.name)??f.productId,children:(k==null?void 0:k.name)??f.productId},f.id)}),p.length>2&&s.jsxs("span",{className:"admin-calendar-more",children:["+",p.length-2]})]},d)})]}),s.jsxs("div",{className:"admin-reservation-list",children:[s.jsx("p",{className:"eyebrow",children:"Reservas del mes"}),a&&s.jsx("p",{className:"admin-message",children:a}),y.length===0?s.jsx("p",{className:"admin-empty-reservations",children:"No hay objetos alquilados o pedidos para este mes."}):y.map(d=>{const h=x.get(d.productId);return s.jsx(Xn,{reservation:d,productName:(h==null?void 0:h.name)??d.productId,profile:d.createdByUid?R.get(d.createdByUid):void 0,onMessage:r},d.id)})]})]})}function Jn(){const e=rt(),t=J(),n=e?In(e):null,{user:a,isAdmin:r,checkingAdmin:o,loginWithGoogle:l,logout:u,authError:m}=it(),{products:g,syncMode:x}=ot(),[R,j]=w.useState(""),[c,y]=w.useState(K),[d,h]=w.useState(""),[p,f]=w.useState(!1),[k,T]=w.useState(!1),[A,O]=w.useState("reservations"),q=w.useMemo(()=>[...g].sort((i,_)=>i.name.localeCompare(_.name)),[g]),b=(i,_)=>{y(P=>({...P,[i]:_}))},ze=async i=>{i.preventDefault(),h(""),await l()},Ve=()=>{y({...K,id:`EG-${String(g.length+1).padStart(3,"0")}`}),h("")},qe=async i=>{if(i.preventDefault(),!t||!r)return;const _=Vn(c);if(!_.id||!_.name){h("Completá ID y nombre antes de guardar.");return}try{f(!0),await le(M(t,"products",_.id),_),h(`Producto guardado: ${_.name}`)}catch(P){console.error(P);const H=P;h(`No se pudo guardar el producto (${H.code??"error desconocido"}). ${H.message??"Revisá los datos cargados y tus permisos de admin."}`)}finally{f(!1)}},He=async()=>{!t||!r||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(f(!0),await we(M(t,"products",c.id)),f(!1),y(K),h("Producto eliminado."))},We=()=>{const i=R.trim();if(!/^https?:\/\//.test(i)){h("Pegá una URL pública de imagen que empiece con http o https.");return}b("images",[i,...c.images]),j(""),h("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Ge=async i=>{if(!i||!n||!c.id){h("Completá el ID antes de subir imágenes.");return}try{T(!0);const _=Sn(n,`products/${c.id}/${Date.now()}-${Hn(i.name)}`);await En(_,i,{contentType:i.type});const P=await An(_);b("images",[P,...c.images]),h("Imagen subida. Guardá el producto para conservarla en el catálogo.")}catch(_){console.error(_);const P=_;h(`No se pudo subir la imagen (${P.code??"error desconocido"}). ${P.message??"Revisá las reglas de Storage y tus permisos de admin."}`)}finally{T(!1)}},Ke=async()=>{if(!(!t||!r||!window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")))try{f(!0);let i=0;await Promise.all(ht.map(async _=>{const P=M(t,"products",_.id);(await mt(P)).exists()||(await le(P,_),i+=1)})),h(i>0?`Catálogo base restaurado. Se agregaron ${i} productos.`:"Firestore ya tenía todos los productos base.")}catch(i){console.error(i);const _=i;h(`No se pudo restaurar el catálogo base (${_.code??"error desconocido"}). ${_.message??"Revisá tus permisos de admin."}`)}finally{f(!1)}};return!lt||!t?s.jsx("section",{className:"admin-page",children:s.jsxs("div",{className:"admin-card",children:[s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Firebase no está configurado"}),s.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):a?o?s.jsx("section",{className:"admin-page",children:s.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):r?s.jsxs("section",{className:"admin-page",children:[s.jsxs("div",{className:"admin-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Panel"}),s.jsxs("p",{children:["Fuente actual: ",x==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),s.jsxs("div",{className:"admin-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Ke,disabled:p,children:[s.jsx(ue,{size:17}),"Restaurar catálogo base"]}),s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:u,children:[s.jsx(oe,{size:17}),"Salir"]})]})]}),d&&s.jsxs("p",{className:"admin-message",children:[s.jsx(ct,{size:16}),d]}),s.jsxs("div",{className:"admin-tabs",role:"tablist","aria-label":"Secciones del panel",children:[s.jsxs("button",{type:"button",className:A==="reservations"?"is-active":"",onClick:()=>O("reservations"),children:[s.jsx(ye,{size:16}),"Calendario y reservas"]}),s.jsxs("button",{type:"button",className:A==="catalog"?"is-active":"",onClick:()=>O("catalog"),children:[s.jsx(ue,{size:16}),"Actualización del catálogo"]})]}),A==="reservations"&&s.jsx(Yn,{products:g}),A==="catalog"&&s.jsxs("div",{className:"admin-layout",children:[s.jsxs("aside",{className:"admin-list",children:[s.jsxs("button",{type:"button",className:"admin-new-button",onClick:Ve,children:[s.jsx(ut,{size:16}),"Nuevo producto"]}),q.map(i=>s.jsxs("button",{type:"button",className:c.id===i.id?"is-active":"",onClick:()=>y(zn(i)),children:[s.jsx("strong",{children:i.name}),s.jsxs("span",{children:[i.id," · ",i.category]})]},i.id))]}),s.jsxs("form",{onSubmit:qe,className:"admin-editor",children:[s.jsxs("div",{className:"admin-editor-title",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Ficha editable"}),s.jsx("h2",{children:c.name||"Producto nuevo"})]}),s.jsxs("div",{className:"admin-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:He,disabled:!c.id||p,children:[s.jsx(ve,{size:17}),"Eliminar"]}),s.jsxs("button",{type:"submit",className:"gabinete-button",disabled:p,children:[s.jsx(Ne,{size:17}),p?"Guardando...":"Guardar"]})]})]}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("label",{children:["ID",s.jsx("input",{className:"gabinete-input",value:c.id,onChange:i=>b("id",qn(i.target.value).toUpperCase())})]}),s.jsxs("label",{children:["Nombre",s.jsx("input",{className:"gabinete-input",value:c.name,onChange:i=>b("name",i.target.value)})]}),s.jsxs("label",{children:["Categoría",s.jsx("select",{className:"gabinete-input",value:c.category,onChange:i=>b("category",i.target.value),children:dt.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Estado",s.jsx("select",{className:"gabinete-input",value:c.status,onChange:i=>b("status",i.target.value),children:Mn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Disponibilidad",s.jsx("select",{className:"gabinete-input",value:c.availability,onChange:i=>b("availability",i.target.value),children:Bn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Precio diario",s.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:i=>b("rentalPricePerDay",i.target.value)})]}),s.jsxs("label",{children:["Precio semanal",s.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:i=>b("rentalPricePerWeek",i.target.value)})]}),s.jsxs("label",{children:["Valor estimado",s.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:i=>b("estimatedValue",i.target.value)})]}),s.jsxs("label",{children:["Garantía %",s.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:i=>b("guaranteePercentage",i.target.value)})]}),s.jsxs("label",{children:["Depósito mínimo",s.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:i=>b("minimumDeposit",i.target.value)})]}),s.jsxs("label",{children:["Destacado",s.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:i=>b("featuredScore",i.target.value)})]}),s.jsxs("label",{children:["Tags",s.jsx("input",{className:"gabinete-input",value:c.tags,onChange:i=>b("tags",i.target.value),placeholder:"vintage, cine, oficina"})]}),s.jsxs("label",{children:["Medidas",s.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:i=>b("measurements",i.target.value)})]}),s.jsxs("label",{children:["Material",s.jsx("input",{className:"gabinete-input",value:c.material,onChange:i=>b("material",i.target.value)})]}),s.jsxs("label",{children:["Color",s.jsx("input",{className:"gabinete-input",value:c.color,onChange:i=>b("color",i.target.value)})]}),s.jsxs("label",{children:["Época / estilo",s.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:i=>b("eraStyle",i.target.value)})]}),s.jsxs("label",{children:["Tono visual",s.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:i=>b("visualTone",i.target.value),children:$n.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Símbolo",s.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:i=>b("visualSigil",i.target.value)})]})]}),s.jsxs("label",{className:"admin-wide",children:["Descripción",s.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:i=>b("description",i.target.value)})]}),s.jsxs("label",{className:"admin-wide",children:["Curiosidades",s.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:i=>b("curiosities",i.target.value)})]}),s.jsxs("label",{className:"admin-wide",children:["Notas internas",s.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:i=>b("internalNotes",i.target.value)})]}),s.jsxs("div",{className:"admin-images",children:[s.jsxs("label",{className:"admin-upload",children:[s.jsx(de,{size:18}),k?"Subiendo...":"Subir archivo",s.jsx("input",{type:"file",accept:"image/*",onChange:i=>{var _;return Ge((_=i.target.files)==null?void 0:_[0])}})]}),s.jsxs("div",{className:"admin-image-url",children:[s.jsxs("label",{children:["URL pública de imagen",s.jsx("input",{className:"gabinete-input",value:R,onChange:i=>j(i.target.value),placeholder:"https://..."})]}),s.jsxs("button",{type:"button",className:"admin-upload",onClick:We,children:[s.jsx(de,{size:18}),"Agregar imagen"]})]}),s.jsx("div",{className:"admin-image-grid",children:c.images.map(i=>s.jsx(Fn,{image:i,onRemove:()=>b("images",c.images.filter(_=>_!==i))},i))})]})]})]})]}):s.jsx("section",{className:"admin-page",children:s.jsxs("div",{className:"admin-card",children:[s.jsx("p",{className:"eyebrow",children:"Sin permiso"}),s.jsx("h1",{children:"Tu usuario no es administrador"}),s.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",s.jsx("strong",{children:a.email})]}),s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:u,children:[s.jsx(oe,{size:17}),"Salir"]})]})}):s.jsx("section",{className:"admin-page",children:s.jsxs("form",{onSubmit:ze,className:"admin-card admin-login",children:[s.jsx("span",{className:"admin-lock",children:s.jsx(re,{size:22})}),s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Ingresar al catálogo"}),s.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),s.jsxs("div",{className:"admin-auth-debug",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Auth domain:"})," ",ie.authDomain||"sin configurar"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Project ID:"})," ",ie.projectId||"sin configurar"]})]}),(d||m)&&s.jsx("p",{className:"admin-message",children:d||m}),s.jsxs("button",{type:"submit",className:"gabinete-button",children:[s.jsx(re,{size:17}),"Entrar con Google"]})]})})}export{Jn as AdminPage};
