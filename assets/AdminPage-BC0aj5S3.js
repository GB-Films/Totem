import{c as _e,g as V,_ as Ye,a as Ze,b as Je,i as xe,p as Qe,d as et,e as tt,F as nt,f as st,C as at,r as ae,S as rt,h as it,j as J,u as ot,k as lt,l as v,m as ct,n as s,L as re,o as ie,q as oe,s as ut,t as ye,P as dt,T as ve,v as Ne,w as ht,x as mt,y as F,z as pt,A as le,B as gt,D as ft,E as bt,G as X,H as ce,I as _t,J as xt,K as yt,M as vt,N as je,O as we,Q as Nt,R as jt}from"./index-DE3-gDvK.js";/**
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
 */const Re="firebasestorage.googleapis.com",ke="storageBucket",wt=120*1e3,Rt=600*1e3;/**
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
 */class j extends nt{constructor(t,n,a=0){super(W(t),`Firebase Storage: ${n} (${W(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,j.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return W(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var N;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(N||(N={}));function W(e){return"storage/"+e}function Q(){const e="An unknown error occurred, please check the error payload for server response.";return new j(N.UNKNOWN,e)}function kt(e){return new j(N.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Tt(e){return new j(N.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ct(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new j(N.UNAUTHENTICATED,e)}function Dt(){return new j(N.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pt(e){return new j(N.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Et(){return new j(N.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function At(){return new j(N.CANCELED,"User canceled the upload/download.")}function St(e){return new j(N.INVALID_URL,"Invalid URL '"+e+"'.")}function It(e){return new j(N.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ut(){return new j(N.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ke+"' property when initializing the app?")}function Ot(){return new j(N.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Lt(){return new j(N.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Mt(e){return new j(N.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Y(e){return new j(N.INVALID_ARGUMENT,e)}function Te(){return new j(N.APP_DELETED,"The Firebase app was deleted.")}function Ft(e){return new j(N.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function B(e,t){return new j(N.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function M(e){throw new j(N.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class D{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let a;try{a=D.makeFromUrl(t,n)}catch{return new D(t,"")}if(a.path==="")return a;throw It(t)}static makeFromUrl(t,n){let a=null;const r="([A-Za-z0-9.\\-_]+)";function o(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const l="(/(.*))?$",d=new RegExp("^gs://"+r+l,"i"),m={bucket:1,path:3};function g(y){y.path_=decodeURIComponent(y.path)}const x="v[A-Za-z0-9_]+",T=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",c=new RegExp(`^https?://${T}/${x}/b/${r}/o${w}`,"i"),R={bucket:1,path:3},u=n===Re?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",k=new RegExp(`^https?://${u}/${r}/${h}`,"i"),p=[{regex:d,indices:m,postModify:o},{regex:c,indices:R,postModify:g},{regex:k,indices:{bucket:1,path:2},postModify:g}];for(let y=0;y<p.length;y++){const A=p[y],O=A.regex.exec(t);if(O){const q=O[A.indices.bucket];let f=O[A.indices.path];f||(f=""),a=new D(q,f),A.postModify(a);break}}if(a==null)throw St(t);return a}}class Bt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function $t(e,t,n){let a=1,r=null,o=null,l=!1,d=0;function m(){return d===2}let g=!1;function x(...h){g||(g=!0,t.apply(null,h))}function T(h){r=setTimeout(()=>{r=null,e(c,m())},h)}function w(){o&&clearTimeout(o)}function c(h,...k){if(g){w();return}if(h){w(),x.call(null,h,...k);return}if(m()||l){w(),x.call(null,h,...k);return}a<64&&(a*=2);let p;d===1?(d=2,p=0):p=(a+Math.random())*1e3,T(p)}let R=!1;function u(h){R||(R=!0,w(),!g&&(r!==null?(h||(d=2),clearTimeout(r),T(0)):h||(d=1)))}return T(0),o=setTimeout(()=>{l=!0,u(!0)},n),u}function zt(e){e(!1)}/**
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
 */function Vt(e){return e!==void 0}function qt(e){return typeof e=="object"&&!Array.isArray(e)}function ee(e){return typeof e=="string"||e instanceof String}function he(e){return te()&&e instanceof Blob}function te(){return typeof Blob<"u"}function me(e,t,n,a){if(a<t)throw Y(`Invalid value for '${e}'. Expected ${t} or greater.`);if(a>n)throw Y(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ne(e,t,n){let a=t;return n==null&&(a=`https://${t}`),`${n}://${a}/v0${e}`}function Ce(e){const t=encodeURIComponent;let n="?";for(const a in e)if(e.hasOwnProperty(a)){const r=t(a)+"="+t(e[a]);n=n+r+"&"}return n=n.slice(0,-1),n}var I;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(I||(I={}));/**
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
 */function Ht(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Wt{constructor(t,n,a,r,o,l,d,m,g,x,T,w=!0,c=!1){this.url_=t,this.method_=n,this.headers_=a,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=d,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=x,this.connectionFactory_=T,this.retry=w,this.isUsingEmulator=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,u)=>{this.resolve_=R,this.reject_=u,this.start_()})}start_(){const t=(a,r)=>{if(r){a(!1,new $(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=d=>{const m=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const d=o.getErrorCode()===I.NO_ERROR,m=o.getStatus();if(!d||Ht(m,this.additionalRetryCodes_)&&this.retry){const x=o.getErrorCode()===I.ABORT;a(!1,new $(!1,null,x));return}const g=this.successCodes_.indexOf(m)!==-1;a(!0,new $(g,o))})},n=(a,r)=>{const o=this.resolve_,l=this.reject_,d=r.connection;if(r.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());Vt(m)?o(m):o()}catch(m){l(m)}else if(d!==null){const m=Q();m.serverResponse=d.getErrorText(),this.errorCallback_?l(this.errorCallback_(d,m)):l(m)}else if(r.canceled){const m=this.appDelete_?Te():At();l(m)}else{const m=Et();l(m)}};this.canceled_?n(!1,new $(!1,null,!0)):this.backoffId_=$t(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&zt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ${constructor(t,n,a){this.wasSuccessCode=t,this.connection=n,this.canceled=!!a}}function Gt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Kt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Xt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Yt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Zt(e,t,n,a,r,o,l=!0,d=!1){const m=Ce(e.urlParams),g=e.url+m,x=Object.assign({},e.headers);return Xt(x,t),Gt(x,n),Kt(x,o),Yt(x,a),new Wt(g,e.method,x,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,l,d)}/**
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
 */function Jt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qt(...e){const t=Jt();if(t!==void 0){const n=new t;for(let a=0;a<e.length;a++)n.append(e[a]);return n.getBlob()}else{if(te())return new Blob(e);throw new j(N.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function en(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */const E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class G{constructor(t,n){this.data=t,this.contentType=n||null}}function nn(e,t){switch(e){case E.RAW:return new G(De(t));case E.BASE64:case E.BASE64URL:return new G(Pe(e,t));case E.DATA_URL:return new G(an(t),rn(t))}throw Q()}function De(e){const t=[];for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);if(a<=127)t.push(a);else if(a<=2047)t.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=a,l=e.charCodeAt(++n);a=65536|(o&1023)<<10|l&1023,t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?t.push(239,191,189):t.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(t)}function sn(e){let t;try{t=decodeURIComponent(e)}catch{throw B(E.DATA_URL,"Malformed data URL.")}return De(t)}function Pe(e,t){switch(e){case E.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw B(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw B(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tn(t)}catch(r){throw r.message.includes("polyfill")?r:B(e,"Invalid character found")}const a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a}class Ee{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw B(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=n[1]||null;a!=null&&(this.base64=on(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=t.substring(t.indexOf(",")+1)}}function an(e){const t=new Ee(e);return t.base64?Pe(E.BASE64,t.rest):sn(t.rest)}function rn(e){return new Ee(e).contentType}function on(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class S{constructor(t,n){let a=0,r="";he(t)?(this.data_=t,a=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),a=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),a=t.length),this.size_=a,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(he(this.data_)){const a=this.data_,r=en(a,t,n);return r===null?null:new S(r)}else{const a=new Uint8Array(this.data_.buffer,t,n-t);return new S(a,!0)}}static getBlob(...t){if(te()){const n=t.map(a=>a instanceof S?a.data_:a);return new S(Qt.apply(null,n))}else{const n=t.map(l=>ee(l)?nn(E.RAW,l).data:l.data_);let a=0;n.forEach(l=>{a+=l.byteLength});const r=new Uint8Array(a);let o=0;return n.forEach(l=>{for(let d=0;d<l.length;d++)r[o++]=l[d]}),new S(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ln(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function cn(e,t){const n=t.split("/").filter(a=>a.length>0).join("/");return e.length===0?n:e+"/"+n}function Se(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function un(e,t){return t}class C{constructor(t,n,a,r){this.server=t,this.local=n||t,this.writable=!!a,this.xform=r||un}}let z=null;function dn(e){return!ee(e)||e.length<2?e:Se(e)}function Ie(){if(z)return z;const e=[];e.push(new C("bucket")),e.push(new C("generation")),e.push(new C("metageneration")),e.push(new C("name","fullPath",!0));function t(o,l){return dn(l)}const n=new C("name");n.xform=t,e.push(n);function a(o,l){return l!==void 0?Number(l):l}const r=new C("size");return r.xform=a,e.push(r),e.push(new C("timeCreated")),e.push(new C("updated")),e.push(new C("md5Hash",null,!0)),e.push(new C("cacheControl",null,!0)),e.push(new C("contentDisposition",null,!0)),e.push(new C("contentEncoding",null,!0)),e.push(new C("contentLanguage",null,!0)),e.push(new C("contentType",null,!0)),e.push(new C("metadata","customMetadata",!0)),z=e,z}function hn(e,t){function n(){const a=e.bucket,r=e.fullPath,o=new D(a,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function mn(e,t,n){const a={};a.type="file";const r=n.length;for(let o=0;o<r;o++){const l=n[o];a[l.local]=l.xform(a,t[l.server])}return hn(a,e),a}function Ue(e,t,n){const a=Ae(t);return a===null?null:mn(e,a,n)}function pn(e,t,n,a){const r=Ae(t);if(r===null||!ee(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(g=>{const x=e.bucket,T=e.fullPath,w="/b/"+l(x)+"/o/"+l(T),c=ne(w,n,a),R=Ce({alt:"media",token:g});return c+R})[0]}function gn(e,t){const n={},a=t.length;for(let r=0;r<a;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Oe{constructor(t,n,a,r){this.url=t,this.method=n,this.handler=a,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Le(e){if(!e)throw Q()}function fn(e,t){function n(a,r){const o=Ue(e,r,t);return Le(o!==null),o}return n}function bn(e,t){function n(a,r){const o=Ue(e,r,t);return Le(o!==null),pn(o,r,e.host,e._protocol)}return n}function Me(e){function t(n,a){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Dt():r=Ct():n.getStatus()===402?r=Tt(e.bucket):n.getStatus()===403?r=Pt(e.path):r=a,r.status=n.getStatus(),r.serverResponse=a.serverResponse,r}return t}function _n(e){const t=Me(e);function n(a,r){let o=t(a,r);return a.getStatus()===404&&(o=kt(e.path)),o.serverResponse=r.serverResponse,o}return n}function xn(e,t,n){const a=t.fullServerUrl(),r=ne(a,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,d=new Oe(r,o,bn(e,n),l);return d.errorHandler=_n(t),d}function yn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function vn(e,t,n){const a=Object.assign({},n);return a.fullPath=e.path,a.size=t.size(),a.contentType||(a.contentType=yn(null,t)),a}function Nn(e,t,n,a,r){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function d(){let p="";for(let y=0;y<2;y++)p=p+Math.random().toString().slice(2);return p}const m=d();l["Content-Type"]="multipart/related; boundary="+m;const g=vn(t,a,r),x=gn(g,n),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+x+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,w=`\r
--`+m+"--",c=S.getBlob(T,a,w);if(c===null)throw Ot();const R={name:g.fullPath},u=ne(o,e.host,e._protocol),h="POST",k=e.maxUploadRetryTime,b=new Oe(u,h,fn(e,n),k);return b.urlParams=R,b.headers=l,b.body=c.uploadData(),b.errorHandler=Me(t),b}class jn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=I.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=I.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,a,r,o){if(this.sent_)throw M("cannot .send() more than once");if(xe(t)&&a&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class wn extends jn{initXhr(){this.xhr_.responseType="text"}}function Fe(){return new wn}/**
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
 */class U{constructor(t,n){this._service=t,n instanceof D?this._location=n:this._location=D.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new U(t,n)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Se(this._location.path)}get storage(){return this._service}get parent(){const t=ln(this._location.path);if(t===null)return null;const n=new D(this._location.bucket,t);return new U(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ft(t)}}function Rn(e,t,n){e._throwIfRoot("uploadBytes");const a=Nn(e.storage,e._location,Ie(),new S(t,!0),n);return e.storage.makeRequestWithTokens(a,Fe).then(r=>({metadata:r,ref:e}))}function kn(e){e._throwIfRoot("getDownloadURL");const t=xn(e.storage,e._location,Ie());return e.storage.makeRequestWithTokens(t,Fe).then(n=>{if(n===null)throw Lt();return n})}function Tn(e,t){const n=cn(e._location.path,t),a=new D(e._location.bucket,n);return new U(e.storage,a)}/**
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
 */function Cn(e){return/^[A-Za-z]+:\/\//.test(e)}function Dn(e,t){return new U(e,t)}function Be(e,t){if(e instanceof se){const n=e;if(n._bucket==null)throw Ut();const a=new U(n,n._bucket);return t!=null?Be(a,t):a}else return t!==void 0?Tn(e,t):e}function Pn(e,t){if(t&&Cn(t)){if(e instanceof se)return Dn(e,t);throw Y("To use ref(service, url), the first argument must be a Storage instance.")}else return Be(e,t)}function pe(e,t){const n=t==null?void 0:t[ke];return n==null?null:D.makeFromBucketSpec(n,e)}function En(e,t,n,a={}){e.host=`${t}:${n}`;const r=xe(t);r&&Qe(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=r?"https":"http";const{mockUserToken:o}=a;o&&(e._overrideAuthToken=typeof o=="string"?o:et(o,e.app.options.projectId))}class se{constructor(t,n,a,r,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=a,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=Re,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wt,this._maxUploadRetryTime=Rt,this._requests=new Set,r!=null?this._bucket=D.makeFromBucketSpec(r,this._host):this._bucket=pe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=pe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,n,a,r,o=!0){if(this._deleted)return new Bt(Te());{const l=Zt(t,this._appId,a,r,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[a,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,a,r).getPromise()}}const ge="@firebase/storage",fe="0.14.3";/**
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
 */const $e="storage";function An(e,t,n){return e=V(e),Rn(e,t,n)}function Sn(e){return e=V(e),kn(e)}function In(e,t){return e=V(e),Pn(e,t)}function Un(e=Je(),t){e=V(e);const a=Ye(e,$e).getImmediate({identifier:t}),r=Ze("storage");return r&&On(a,...r),a}function On(e,t,n,a={}){En(e,t,n,a)}function Ln(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new se(n,a,r,t,rt)}function Mn(){st(new at($e,Ln,"PUBLIC").setMultipleInstances(!0)),ae(ge,fe,""),ae(ge,fe,"esm2020")}Mn();function ze(e){return/^https?:\/\//.test(e)||/^data:image\//.test(e)}function Fn({image:e,onRemove:t}){const[n,a]=v.useState(!1);return s.jsxs("figure",{children:[n?s.jsx("div",{className:"admin-image-fallback",children:"Imagen no disponible"}):s.jsx("img",{src:e,alt:"",onError:()=>a(!0)}),s.jsx("button",{type:"button",onClick:t,children:"Quitar"})]})}const Bn=["Excelente","Muy bueno","Bueno","Delicado"],$n=["request_sent","payment_pending","confirmed","ready_for_pickup","active","returned","cancelled"],zn=["Disponible","Consultar","Reservado"],Vn=["brass","green","red","blue","paper","copper"],K={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function qn(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images.filter(ze),visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function L(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Hn(e){const t=e.rentalPricePerWeek.trim(),n=e.internalNotes.trim(),a={id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(r=>r.trim()).filter(Boolean),rentalPricePerDay:L(e.rentalPricePerDay),description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:L(e.estimatedValue),guaranteePercentage:L(e.guaranteePercentage,.3),minimumDeposit:L(e.minimumDeposit),featuredScore:L(e.featuredScore,50),images:e.images.filter(ze),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}};return t&&(a.rentalPricePerWeek=L(t)),n&&(a.internalNotes=n),a}function Wn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Gn(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}const Kn=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];function Z(e){return new Date(e.getFullYear(),e.getMonth(),1)}function be(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function Xn(e){const t=Z(e),n=(t.getDay()+6)%7,a=new Date(t);return a.setDate(t.getDate()-n),Array.from({length:42},(r,o)=>{const l=new Date(a);return l.setDate(a.getDate()+o),{iso:X(l),inMonth:l.getMonth()===t.getMonth()}})}function Yn(e){return new Intl.DateTimeFormat("es-AR",{month:"long",year:"numeric"}).format(e)}function Zn({reservation:e,productName:t,profile:n,onMessage:a}){const r=J(),[o,l]=v.useState(e.startDate),[d,m]=v.useState(e.endDate),[g,x]=v.useState(String(e.quantity??1)),[T,w]=v.useState(e.note??""),[c,R]=v.useState(e.status??"confirmed"),[u,h]=v.useState(!1),k=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede editar desde el panel porque no viene de Firestore.");return}if(!o||!d||d<o){a("Revisá las fechas de la reserva antes de guardar.");return}try{h(!0),await Nt(F(r,"reservations",e.id),{startDate:o,endDate:d,quantity:Math.max(1,Number(g)||1),rentalDays:jt(o,d),note:T.trim(),status:c}),a(`Reserva actualizada: ${t}`)}catch(p){console.error(p);const y=p;a(`No se pudo actualizar la reserva (${y.code??"error desconocido"}). ${y.message??"Revisá tus permisos de admin."}`)}finally{h(!1)}},b=async()=>{if(!r||e.source!=="firebase"){a("Esta reserva no se puede borrar desde el panel porque no viene de Firestore.");return}if(window.confirm(`¿Borrar la reserva de ${t}?`))try{h(!0),await we(F(r,"reservations",e.id)),a(`Reserva borrada: ${t}`)}catch(p){console.error(p);const y=p;a(`No se pudo borrar la reserva (${y.code??"error desconocido"}). ${y.message??"Revisá tus permisos de admin."}`)}finally{h(!1)}};return s.jsxs("article",{className:"admin-reservation-row",children:[s.jsxs("div",{children:[s.jsx("strong",{children:t}),s.jsx("span",{children:n?`${n.firstName} ${n.lastName}`:e.customerName||e.customerEmail||"Cliente sin datos visibles"}),n&&s.jsxs("span",{children:["DNI: ",n.dni]}),n&&s.jsxs("span",{children:["Celular: ",n.phone]}),(n==null?void 0:n.email)&&s.jsx("span",{children:n.email}),e.paymentAlias&&s.jsxs("span",{children:["Pago: Mercado Pago alias ",e.paymentAlias]}),typeof e.reserveDeposit=="number"&&s.jsxs("span",{children:["Seña: $",e.reserveDeposit.toLocaleString("es-AR")]})]}),s.jsxs("div",{className:"admin-reservation-fields",children:[s.jsxs("label",{children:["Desde",s.jsx("input",{className:"gabinete-input",type:"date",value:o,onChange:p=>l(p.target.value)})]}),s.jsxs("label",{children:["Hasta",s.jsx("input",{className:"gabinete-input",type:"date",value:d,onChange:p=>m(p.target.value)})]}),s.jsxs("label",{children:["Cant.",s.jsx("input",{className:"gabinete-input",type:"number",min:"1",value:g,onChange:p=>x(p.target.value)})]}),s.jsxs("label",{children:["Estado",s.jsx("select",{className:"gabinete-input",value:c,onChange:p=>R(p.target.value),children:$n.map(p=>s.jsx("option",{value:p,children:je(p)},p))})]})]}),s.jsxs("label",{className:"admin-reservation-note",children:["Nota",s.jsx("input",{className:"gabinete-input",value:T,onChange:p=>w(p.target.value)})]}),s.jsxs("div",{className:"admin-reservation-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:b,disabled:u,children:[s.jsx(ve,{size:16}),"Borrar"]}),s.jsxs("button",{type:"button",className:"gabinete-button",onClick:k,disabled:u,children:[s.jsx(Ne,{size:16}),u?"Guardando...":"Guardar"]})]})]})}function Jn({products:e}){const{reservations:t,syncMode:n}=gt(),[a,r]=v.useState(""),[o,l]=v.useState([]),[d,m]=v.useState(()=>Z(ft(bt()))),g=v.useMemo(()=>Xn(d),[d]),x=v.useMemo(()=>new Map(e.map(u=>[u.id,u])),[e]),T=v.useMemo(()=>new Map(o.map(u=>[u.uid,u])),[o]),w=X(Z(d)),c=X(new Date(d.getFullYear(),d.getMonth()+1,0)),R=v.useMemo(()=>t.filter(u=>ce(w,c,u.startDate,u.endDate)).sort((u,h)=>u.startDate.localeCompare(h.startDate)||u.productId.localeCompare(h.productId)),[c,w,t]);return v.useEffect(()=>{const u=J();if(u)return _t(xt(u,"userProfiles"),h=>{l(h.docs.map(k=>k.data()))})},[]),s.jsxs("section",{className:"admin-reservations parchment-panel",children:[s.jsxs("div",{className:"admin-reservations-head",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"eyebrow flex items-center gap-2",children:[s.jsx(ye,{size:15}),"Calendario admin"]}),s.jsx("h2",{children:"Pedidos y alquileres por fecha"}),s.jsxs("p",{children:["Fuente de reservas: ",n==="firebase"?"Firestore":"local",". Cada marca bloquea el objeto para futuros clientes."]})]}),s.jsxs("div",{className:"calendar-month-bar admin-calendar-nav",children:[s.jsx("button",{type:"button",onClick:()=>m(u=>be(u,-1)),children:s.jsx(yt,{size:18})}),s.jsx("strong",{children:Yn(d)}),s.jsx("button",{type:"button",onClick:()=>m(u=>be(u,1)),children:s.jsx(vt,{size:18})})]})]}),s.jsxs("div",{className:"admin-calendar-grid",children:[Kn.map(u=>s.jsx("span",{className:"calendar-weekday",children:u},u)),g.map(({iso:u,inMonth:h})=>{const k=t.filter(b=>ce(u,u,b.startDate,b.endDate));return s.jsxs("div",{className:`admin-calendar-day ${h?"":"is-outside"} ${k.length>0?"has-reservations":""}`,children:[s.jsx("span",{className:"admin-calendar-number",children:Number(u.slice(-2))}),k.slice(0,2).map(b=>{const p=x.get(b.productId);return s.jsx("span",{className:`admin-calendar-chip status-${b.status??"confirmed"}`,title:`${(p==null?void 0:p.name)??b.productId} · ${je(b.status)}`,children:(p==null?void 0:p.name)??b.productId},b.id)}),k.length>2&&s.jsxs("span",{className:"admin-calendar-more",children:["+",k.length-2]})]},u)})]}),s.jsxs("div",{className:"admin-reservation-list",children:[s.jsx("p",{className:"eyebrow",children:"Reservas del mes"}),a&&s.jsx("p",{className:"admin-message",children:a}),R.length===0?s.jsx("p",{className:"admin-empty-reservations",children:"No hay objetos alquilados o pedidos para este mes."}):R.map(u=>{const h=x.get(u.productId);return s.jsx(Zn,{reservation:u,productName:(h==null?void 0:h.name)??u.productId,profile:u.createdByUid?T.get(u.createdByUid):void 0,onMessage:r},u.id)})]})]})}function es(){const e=it(),t=J(),n=e?Un(e):null,{user:a,isAdmin:r,checkingAdmin:o,loginWithGoogle:l,logout:d,authError:m}=ot(),{products:g,syncMode:x}=lt(),[T,w]=v.useState(""),[c,R]=v.useState(K),[u,h]=v.useState(""),[k,b]=v.useState(!1),[p,y]=v.useState(!1),[A,O]=v.useState("reservations"),q=v.useMemo(()=>[...g].sort((i,_)=>i.name.localeCompare(_.name)),[g]),f=(i,_)=>{R(P=>({...P,[i]:_}))},Ve=async i=>{i.preventDefault(),h(""),await l()},qe=()=>{R({...K,id:`EG-${String(g.length+1).padStart(3,"0")}`}),h("")},He=async i=>{if(i.preventDefault(),!t||!r)return;const _=Hn(c);if(!_.id||!_.name){h("Completá ID y nombre antes de guardar.");return}try{b(!0),await le(F(t,"products",_.id),_),h(`Producto guardado: ${_.name}`)}catch(P){console.error(P);const H=P;h(`No se pudo guardar el producto (${H.code??"error desconocido"}). ${H.message??"Revisá los datos cargados y tus permisos de admin."}`)}finally{b(!1)}},We=async()=>{!t||!r||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(b(!0),await we(F(t,"products",c.id)),b(!1),R(K),h("Producto eliminado."))},Ge=()=>{const i=T.trim();if(!/^https?:\/\//.test(i)){h("Pegá una URL pública de imagen que empiece con http o https.");return}f("images",[i,...c.images]),w(""),h("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Ke=async i=>{if(!i||!n||!c.id){h("Completá el ID antes de subir imágenes.");return}try{y(!0);const _=In(n,`products/${c.id}/${Date.now()}-${Gn(i.name)}`);await An(_,i,{contentType:i.type});const P=await Sn(_);f("images",[P,...c.images]),h("Imagen subida. Guardá el producto para conservarla en el catálogo.")}catch(_){console.error(_);const P=_;h(`No se pudo subir la imagen (${P.code??"error desconocido"}). ${P.message??"Revisá las reglas de Storage y tus permisos de admin."}`)}finally{y(!1)}},Xe=async()=>{if(!(!t||!r||!window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")))try{b(!0);let i=0;await Promise.all(mt.map(async _=>{const P=F(t,"products",_.id);(await pt(P)).exists()||(await le(P,_),i+=1)})),h(i>0?`Catálogo base restaurado. Se agregaron ${i} productos.`:"Firestore ya tenía todos los productos base.")}catch(i){console.error(i);const _=i;h(`No se pudo restaurar el catálogo base (${_.code??"error desconocido"}). ${_.message??"Revisá tus permisos de admin."}`)}finally{b(!1)}};return!ct||!t?s.jsx("section",{className:"admin-page",children:s.jsxs("div",{className:"admin-card",children:[s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Firebase no está configurado"}),s.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):a?o?s.jsx("section",{className:"admin-page",children:s.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):r?s.jsxs("section",{className:"admin-page",children:[s.jsxs("div",{className:"admin-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Panel"}),s.jsxs("p",{children:["Fuente actual: ",x==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),s.jsxs("div",{className:"admin-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Xe,disabled:k,children:[s.jsx(ue,{size:17}),"Restaurar catálogo base"]}),s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[s.jsx(oe,{size:17}),"Salir"]})]})]}),u&&s.jsxs("p",{className:"admin-message",children:[s.jsx(ut,{size:16}),u]}),s.jsxs("div",{className:"admin-tabs",role:"tablist","aria-label":"Secciones del panel",children:[s.jsxs("button",{type:"button",className:A==="reservations"?"is-active":"",onClick:()=>O("reservations"),children:[s.jsx(ye,{size:16}),"Calendario y reservas"]}),s.jsxs("button",{type:"button",className:A==="catalog"?"is-active":"",onClick:()=>O("catalog"),children:[s.jsx(ue,{size:16}),"Actualización del catálogo"]})]}),A==="reservations"&&s.jsx(Jn,{products:g}),A==="catalog"&&s.jsxs("div",{className:"admin-layout",children:[s.jsxs("aside",{className:"admin-list",children:[s.jsxs("button",{type:"button",className:"admin-new-button",onClick:qe,children:[s.jsx(dt,{size:16}),"Nuevo producto"]}),q.map(i=>s.jsxs("button",{type:"button",className:c.id===i.id?"is-active":"",onClick:()=>R(qn(i)),children:[s.jsx("strong",{children:i.name}),s.jsxs("span",{children:[i.id," · ",i.category]})]},i.id))]}),s.jsxs("form",{onSubmit:He,className:"admin-editor",children:[s.jsxs("div",{className:"admin-editor-title",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Ficha editable"}),s.jsx("h2",{children:c.name||"Producto nuevo"})]}),s.jsxs("div",{className:"admin-actions",children:[s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:We,disabled:!c.id||k,children:[s.jsx(ve,{size:17}),"Eliminar"]}),s.jsxs("button",{type:"submit",className:"gabinete-button",disabled:k,children:[s.jsx(Ne,{size:17}),k?"Guardando...":"Guardar"]})]})]}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("label",{children:["ID",s.jsx("input",{className:"gabinete-input",value:c.id,onChange:i=>f("id",Wn(i.target.value).toUpperCase())})]}),s.jsxs("label",{children:["Nombre",s.jsx("input",{className:"gabinete-input",value:c.name,onChange:i=>f("name",i.target.value)})]}),s.jsxs("label",{children:["Categoría",s.jsx("select",{className:"gabinete-input",value:c.category,onChange:i=>f("category",i.target.value),children:ht.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Estado",s.jsx("select",{className:"gabinete-input",value:c.status,onChange:i=>f("status",i.target.value),children:Bn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Disponibilidad",s.jsx("select",{className:"gabinete-input",value:c.availability,onChange:i=>f("availability",i.target.value),children:zn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Precio diario",s.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:i=>f("rentalPricePerDay",i.target.value)})]}),s.jsxs("label",{children:["Precio semanal",s.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:i=>f("rentalPricePerWeek",i.target.value)})]}),s.jsxs("label",{children:["Valor estimado",s.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:i=>f("estimatedValue",i.target.value)})]}),s.jsxs("label",{children:["Garantía %",s.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:i=>f("guaranteePercentage",i.target.value)})]}),s.jsxs("label",{children:["Depósito mínimo",s.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:i=>f("minimumDeposit",i.target.value)})]}),s.jsxs("label",{children:["Destacado",s.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:i=>f("featuredScore",i.target.value)})]}),s.jsxs("label",{children:["Tags",s.jsx("input",{className:"gabinete-input",value:c.tags,onChange:i=>f("tags",i.target.value),placeholder:"vintage, cine, oficina"})]}),s.jsxs("label",{children:["Medidas",s.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:i=>f("measurements",i.target.value)})]}),s.jsxs("label",{children:["Material",s.jsx("input",{className:"gabinete-input",value:c.material,onChange:i=>f("material",i.target.value)})]}),s.jsxs("label",{children:["Color",s.jsx("input",{className:"gabinete-input",value:c.color,onChange:i=>f("color",i.target.value)})]}),s.jsxs("label",{children:["Época / estilo",s.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:i=>f("eraStyle",i.target.value)})]}),s.jsxs("label",{children:["Tono visual",s.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:i=>f("visualTone",i.target.value),children:Vn.map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("label",{children:["Símbolo",s.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:i=>f("visualSigil",i.target.value)})]})]}),s.jsxs("label",{className:"admin-wide",children:["Descripción",s.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:i=>f("description",i.target.value)})]}),s.jsxs("label",{className:"admin-wide",children:["Curiosidades",s.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:i=>f("curiosities",i.target.value)})]}),s.jsxs("label",{className:"admin-wide",children:["Notas internas",s.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:i=>f("internalNotes",i.target.value)})]}),s.jsxs("div",{className:"admin-images",children:[s.jsxs("label",{className:"admin-upload",children:[s.jsx(de,{size:18}),p?"Subiendo...":"Subir archivo",s.jsx("input",{type:"file",accept:"image/*",onChange:i=>{var _;return Ke((_=i.target.files)==null?void 0:_[0])}})]}),s.jsxs("div",{className:"admin-image-url",children:[s.jsxs("label",{children:["URL pública de imagen",s.jsx("input",{className:"gabinete-input",value:T,onChange:i=>w(i.target.value),placeholder:"https://..."})]}),s.jsxs("button",{type:"button",className:"admin-upload",onClick:Ge,children:[s.jsx(de,{size:18}),"Agregar imagen"]})]}),s.jsx("div",{className:"admin-image-grid",children:c.images.map(i=>s.jsx(Fn,{image:i,onRemove:()=>f("images",c.images.filter(_=>_!==i))},i))})]})]})]})]}):s.jsx("section",{className:"admin-page",children:s.jsxs("div",{className:"admin-card",children:[s.jsx("p",{className:"eyebrow",children:"Sin permiso"}),s.jsx("h1",{children:"Tu usuario no es administrador"}),s.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",s.jsx("strong",{children:a.email})]}),s.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[s.jsx(oe,{size:17}),"Salir"]})]})}):s.jsx("section",{className:"admin-page",children:s.jsxs("form",{onSubmit:Ve,className:"admin-card admin-login",children:[s.jsx("span",{className:"admin-lock",children:s.jsx(re,{size:22})}),s.jsx("p",{className:"eyebrow",children:"Admin"}),s.jsx("h1",{children:"Ingresar al catálogo"}),s.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),s.jsxs("div",{className:"admin-auth-debug",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Auth domain:"})," ",ie.authDomain||"sin configurar"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Project ID:"})," ",ie.projectId||"sin configurar"]})]}),(u||m)&&s.jsx("p",{className:"admin-message",children:u||m}),s.jsxs("button",{type:"submit",className:"gabinete-button",children:[s.jsx(re,{size:17}),"Entrar con Google"]})]})})}export{es as AdminPage};
