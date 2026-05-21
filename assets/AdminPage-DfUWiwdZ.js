import{c as z,g as V,_ as $e,a as ze,b as Ve,i as be,p as He,d as qe,e as We,F as Ge,f as Xe,C as Ke,r as ae,S as Ye,h as Ze,j as Je,u as Qe,k as et,l as D,m as tt,n as a,o as ie,L as re,q as nt,P as st,T as at,s as it,t as rt,v as W,w as ot,x as oe,y as lt,z as ct,A as ut,B as Y,D as le,E as dt,G as ht,H as pt,I as mt,J as gt}from"./index-CQnoyTcP.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=z("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=z("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=z("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
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
 */const _e="firebasestorage.googleapis.com",xe="storageBucket",_t=120*1e3,xt=600*1e3;/**
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
 */class y extends Ge{constructor(t,n,s=0){super(G(t),`Firebase Storage: ${n} (${G(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,y.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var x;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(x||(x={}));function G(e){return"storage/"+e}function Q(){const e="An unknown error occurred, please check the error payload for server response.";return new y(x.UNKNOWN,e)}function yt(e){return new y(x.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function wt(e){return new y(x.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Nt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new y(x.UNAUTHENTICATED,e)}function vt(){return new y(x.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jt(e){return new y(x.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Rt(){return new y(x.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kt(){return new y(x.CANCELED,"User canceled the upload/download.")}function Tt(e){return new y(x.INVALID_URL,"Invalid URL '"+e+"'.")}function Ct(e){return new y(x.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Pt(){return new y(x.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+xe+"' property when initializing the app?")}function Dt(){return new y(x.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Et(){return new y(x.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function At(e){return new y(x.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Z(e){return new y(x.INVALID_ARGUMENT,e)}function ye(){return new y(x.APP_DELETED,"The Firebase app was deleted.")}function It(e){return new y(x.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function F(e,t){return new y(x.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function M(e){throw new y(x.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class k{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=k.makeFromUrl(t,n)}catch{return new k(t,"")}if(s.path==="")return s;throw Ct(t)}static makeFromUrl(t,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const l="(/(.*))?$",d=new RegExp("^gs://"+i+l,"i"),h={bucket:1,path:3};function p(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",c=new RegExp(`^https?://${b}/${u}/b/${i}/o${w}`,"i"),_={bucket:1,path:3},R=n===_e?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",P=new RegExp(`^https?://${R}/${i}/${m}`,"i"),T=[{regex:d,indices:h,postModify:o},{regex:c,indices:_,postModify:p},{regex:P,indices:{bucket:1,path:2},postModify:p}];for(let N=0;N<T.length;N++){const S=T[N],g=S.regex.exec(t);if(g){const H=g[S.indices.bucket];let L=g[S.indices.path];L||(L=""),s=new k(H,L),S.postModify(s);break}}if(s==null)throw Tt(t);return s}}class Ut{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function St(e,t,n){let s=1,i=null,o=null,l=!1,d=0;function h(){return d===2}let p=!1;function u(...m){p||(p=!0,t.apply(null,m))}function b(m){i=setTimeout(()=>{i=null,e(c,h())},m)}function w(){o&&clearTimeout(o)}function c(m,...P){if(p){w();return}if(m){w(),u.call(null,m,...P);return}if(h()||l){w(),u.call(null,m,...P);return}s<64&&(s*=2);let T;d===1?(d=2,T=0):T=(s+Math.random())*1e3,b(T)}let _=!1;function R(m){_||(_=!0,w(),!p&&(i!==null?(m||(d=2),clearTimeout(i),b(0)):m||(d=1)))}return b(0),o=setTimeout(()=>{l=!0,R(!0)},n),R}function Ot(e){e(!1)}/**
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
 */function Lt(e){return e!==void 0}function Mt(e){return typeof e=="object"&&!Array.isArray(e)}function ee(e){return typeof e=="string"||e instanceof String}function de(e){return te()&&e instanceof Blob}function te(){return typeof Blob<"u"}function he(e,t,n,s){if(s<t)throw Z(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw Z(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ne(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function we(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const i=t(s)+"="+t(e[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var I;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(I||(I={}));/**
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
 */function Ft(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class Bt{constructor(t,n,s,i,o,l,d,h,p,u,b,w=!0,c=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=d,this.errorCallback_=h,this.timeout_=p,this.progressCallback_=u,this.connectionFactory_=b,this.retry=w,this.isUsingEmulator=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,R)=>{this.resolve_=_,this.reject_=R,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new B(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=d=>{const h=d.loaded,p=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,p)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const d=o.getErrorCode()===I.NO_ERROR,h=o.getStatus();if(!d||Ft(h,this.additionalRetryCodes_)&&this.retry){const u=o.getErrorCode()===I.ABORT;s(!1,new B(!1,null,u));return}const p=this.successCodes_.indexOf(h)!==-1;s(!0,new B(p,o))})},n=(s,i)=>{const o=this.resolve_,l=this.reject_,d=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(d,d.getResponse());Lt(h)?o(h):o()}catch(h){l(h)}else if(d!==null){const h=Q();h.serverResponse=d.getErrorText(),this.errorCallback_?l(this.errorCallback_(d,h)):l(h)}else if(i.canceled){const h=this.appDelete_?ye():kt();l(h)}else{const h=Rt();l(h)}};this.canceled_?n(!1,new B(!1,null,!0)):this.backoffId_=St(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ot(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class B{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function $t(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function zt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Vt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ht(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function qt(e,t,n,s,i,o,l=!0,d=!1){const h=we(e.urlParams),p=e.url+h,u=Object.assign({},e.headers);return Vt(u,t),$t(u,n),zt(u,o),Ht(u,s),new Bt(p,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l,d)}/**
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
 */function Wt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Gt(...e){const t=Wt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(te())return new Blob(e);throw new y(x.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Xt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Kt(e){if(typeof atob>"u")throw At("base-64");return atob(e)}/**
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
 */const E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class X{constructor(t,n){this.data=t,this.contentType=n||null}}function Yt(e,t){switch(e){case E.RAW:return new X(Ne(t));case E.BASE64:case E.BASE64URL:return new X(ve(e,t));case E.DATA_URL:return new X(Jt(t),Qt(t))}throw Q()}function Ne(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,l=e.charCodeAt(++n);s=65536|(o&1023)<<10|l&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Zt(e){let t;try{t=decodeURIComponent(e)}catch{throw F(E.DATA_URL,"Malformed data URL.")}return Ne(t)}function ve(e,t){switch(e){case E.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw F(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw F(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Kt(t)}catch(i){throw i.message.includes("polyfill")?i:F(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class je{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw F(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=en(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Jt(e){const t=new je(e);return t.base64?ve(E.BASE64,t.rest):Zt(t.rest)}function Qt(e){return new je(e).contentType}function en(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class A{constructor(t,n){let s=0,i="";de(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(de(this.data_)){const s=this.data_,i=Xt(s,t,n);return i===null?null:new A(i)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new A(s,!0)}}static getBlob(...t){if(te()){const n=t.map(s=>s instanceof A?s.data_:s);return new A(Gt.apply(null,n))}else{const n=t.map(l=>ee(l)?Yt(E.RAW,l).data:l.data_);let s=0;n.forEach(l=>{s+=l.byteLength});const i=new Uint8Array(s);let o=0;return n.forEach(l=>{for(let d=0;d<l.length;d++)i[o++]=l[d]}),new A(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Re(e){let t;try{t=JSON.parse(e)}catch{return null}return Mt(t)?t:null}/**
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
 */function tn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function nn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function ke(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function sn(e,t){return t}class v{constructor(t,n,s,i){this.server=t,this.local=n||t,this.writable=!!s,this.xform=i||sn}}let $=null;function an(e){return!ee(e)||e.length<2?e:ke(e)}function Te(){if($)return $;const e=[];e.push(new v("bucket")),e.push(new v("generation")),e.push(new v("metageneration")),e.push(new v("name","fullPath",!0));function t(o,l){return an(l)}const n=new v("name");n.xform=t,e.push(n);function s(o,l){return l!==void 0?Number(l):l}const i=new v("size");return i.xform=s,e.push(i),e.push(new v("timeCreated")),e.push(new v("updated")),e.push(new v("md5Hash",null,!0)),e.push(new v("cacheControl",null,!0)),e.push(new v("contentDisposition",null,!0)),e.push(new v("contentEncoding",null,!0)),e.push(new v("contentLanguage",null,!0)),e.push(new v("contentType",null,!0)),e.push(new v("metadata","customMetadata",!0)),$=e,$}function rn(e,t){function n(){const s=e.bucket,i=e.fullPath,o=new k(s,i);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function on(e,t,n){const s={};s.type="file";const i=n.length;for(let o=0;o<i;o++){const l=n[o];s[l.local]=l.xform(s,t[l.server])}return rn(s,e),s}function Ce(e,t,n){const s=Re(t);return s===null?null:on(e,s,n)}function ln(e,t,n,s){const i=Re(t);if(i===null||!ee(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(p=>{const u=e.bucket,b=e.fullPath,w="/b/"+l(u)+"/o/"+l(b),c=ne(w,n,s),_=we({alt:"media",token:p});return c+_})[0]}function cn(e,t){const n={},s=t.length;for(let i=0;i<s;i++){const o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Pe{constructor(t,n,s,i){this.url=t,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function De(e){if(!e)throw Q()}function un(e,t){function n(s,i){const o=Ce(e,i,t);return De(o!==null),o}return n}function dn(e,t){function n(s,i){const o=Ce(e,i,t);return De(o!==null),ln(o,i,e.host,e._protocol)}return n}function Ee(e){function t(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=vt():i=Nt():n.getStatus()===402?i=wt(e.bucket):n.getStatus()===403?i=jt(e.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return t}function hn(e){const t=Ee(e);function n(s,i){let o=t(s,i);return s.getStatus()===404&&(o=yt(e.path)),o.serverResponse=i.serverResponse,o}return n}function pn(e,t,n){const s=t.fullServerUrl(),i=ne(s,e.host,e._protocol),o="GET",l=e.maxOperationRetryTime,d=new Pe(i,o,dn(e,n),l);return d.errorHandler=hn(t),d}function mn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function gn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=mn(null,t)),s}function fn(e,t,n,s,i){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function d(){let T="";for(let N=0;N<2;N++)T=T+Math.random().toString().slice(2);return T}const h=d();l["Content-Type"]="multipart/related; boundary="+h;const p=gn(t,s,i),u=cn(p,n),b="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+h+`\r
Content-Type: `+p.contentType+`\r
\r
`,w=`\r
--`+h+"--",c=A.getBlob(b,s,w);if(c===null)throw Dt();const _={name:p.fullPath},R=ne(o,e.host,e._protocol),m="POST",P=e.maxUploadRetryTime,j=new Pe(R,m,un(e,n),P);return j.urlParams=_,j.headers=l,j.body=c.uploadData(),j.errorHandler=Ee(t),j}class bn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=I.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=I.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,i,o){if(this.sent_)throw M("cannot .send() more than once");if(be(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class _n extends bn{initXhr(){this.xhr_.responseType="text"}}function Ae(){return new _n}/**
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
 */class U{constructor(t,n){this._service=t,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new U(t,n)}get root(){const t=new k(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ke(this._location.path)}get storage(){return this._service}get parent(){const t=tn(this._location.path);if(t===null)return null;const n=new k(this._location.bucket,t);return new U(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw It(t)}}function xn(e,t,n){e._throwIfRoot("uploadBytes");const s=fn(e.storage,e._location,Te(),new A(t,!0),n);return e.storage.makeRequestWithTokens(s,Ae).then(i=>({metadata:i,ref:e}))}function yn(e){e._throwIfRoot("getDownloadURL");const t=pn(e.storage,e._location,Te());return e.storage.makeRequestWithTokens(t,Ae).then(n=>{if(n===null)throw Et();return n})}function wn(e,t){const n=nn(e._location.path,t),s=new k(e._location.bucket,n);return new U(e.storage,s)}/**
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
 */function Nn(e){return/^[A-Za-z]+:\/\//.test(e)}function vn(e,t){return new U(e,t)}function Ie(e,t){if(e instanceof se){const n=e;if(n._bucket==null)throw Pt();const s=new U(n,n._bucket);return t!=null?Ie(s,t):s}else return t!==void 0?wn(e,t):e}function jn(e,t){if(t&&Nn(t)){if(e instanceof se)return vn(e,t);throw Z("To use ref(service, url), the first argument must be a Storage instance.")}else return Ie(e,t)}function pe(e,t){const n=t==null?void 0:t[xe];return n==null?null:k.makeFromBucketSpec(n,e)}function Rn(e,t,n,s={}){e.host=`${t}:${n}`;const i=be(t);i&&He(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=i?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:qe(o,e.app.options.projectId))}class se{constructor(t,n,s,i,o,l=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=_e,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_t,this._maxUploadRetryTime=xt,this._requests=new Set,i!=null?this._bucket=k.makeFromBucketSpec(i,this._host):this._bucket=pe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,t):this._bucket=pe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){he("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){he("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,n,s,i,o=!0){if(this._deleted)return new Ut(ye());{const l=qt(t,this._appId,s,i,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,i).getPromise()}}const me="@firebase/storage",ge="0.14.3";/**
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
 */const Ue="storage";function kn(e,t,n){return e=V(e),xn(e,t,n)}function Tn(e){return e=V(e),yn(e)}function Cn(e,t){return e=V(e),jn(e,t)}function Pn(e=Ve(),t){e=V(e);const s=$e(e,Ue).getImmediate({identifier:t}),i=ze("storage");return i&&Dn(s,...i),s}function Dn(e,t,n,s={}){Rn(e,t,n,s)}function En(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new se(n,s,i,t,Ye)}function An(){Xe(new Ke(Ue,En,"PUBLIC").setMultipleInstances(!0)),ae(me,ge,""),ae(me,ge,"esm2020")}An();function Se(e){return/^https?:\/\//.test(e)||/^data:image\//.test(e)}function In({image:e,onRemove:t}){const[n,s]=D.useState(!1);return a.jsxs("figure",{children:[n?a.jsx("div",{className:"admin-image-fallback",children:"Imagen no disponible"}):a.jsx("img",{src:e,alt:"",onError:()=>s(!0)}),a.jsx("button",{type:"button",onClick:t,children:"Quitar"})]})}const Un=["Excelente","Muy bueno","Bueno","Delicado"],Sn=["Disponible","Consultar","Reservado"],On=["brass","green","red","blue","paper","copper"],K={id:"",name:"",category:"Utilería",tags:"",rentalPricePerDay:"",rentalPricePerWeek:"",description:"",curiosities:"",status:"Excelente",measurements:"",material:"",color:"",eraStyle:"",availability:"Disponible",estimatedValue:"",guaranteePercentage:"0.3",minimumDeposit:"",featuredScore:"50",internalNotes:"",images:[],visualTone:"paper",visualSigil:"✶"};function Ln(e){return{id:e.id,name:e.name,category:e.category,tags:e.tags.join(", "),rentalPricePerDay:String(e.rentalPricePerDay),rentalPricePerWeek:e.rentalPricePerWeek?String(e.rentalPricePerWeek):"",description:e.description,curiosities:e.curiosities,status:e.status,measurements:e.measurements,material:e.material,color:e.color,eraStyle:e.eraStyle,availability:e.availability,estimatedValue:String(e.estimatedValue),guaranteePercentage:String(e.guaranteePercentage),minimumDeposit:String(e.minimumDeposit),featuredScore:String(e.featuredScore),internalNotes:e.internalNotes??"",images:e.images.filter(Se),visualTone:e.visual.tone,visualSigil:e.visual.sigil}}function O(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Mn(e){const t=e.rentalPricePerWeek.trim(),n=e.internalNotes.trim(),s={id:e.id.trim(),name:e.name.trim(),category:e.category,tags:e.tags.split(",").map(i=>i.trim()).filter(Boolean),rentalPricePerDay:O(e.rentalPricePerDay),description:e.description.trim(),curiosities:e.curiosities.trim(),status:e.status,measurements:e.measurements.trim(),material:e.material.trim(),color:e.color.trim(),eraStyle:e.eraStyle.trim(),availability:e.availability,estimatedValue:O(e.estimatedValue),guaranteePercentage:O(e.guaranteePercentage,.3),minimumDeposit:O(e.minimumDeposit),featuredScore:O(e.featuredScore,50),images:e.images.filter(Se),visual:{tone:e.visualTone,sigil:e.visualSigil.trim()||"✶"}};return t&&(s.rentalPricePerWeek=O(t)),n&&(s.internalNotes=n),s}function Fn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Bn(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9._-]+/g,"-")}const $n=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];function J(e){return new Date(e.getFullYear(),e.getMonth(),1)}function fe(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function zn(e){const t=J(e),n=(t.getDay()+6)%7,s=new Date(t);return s.setDate(t.getDate()-n),Array.from({length:42},(i,o)=>{const l=new Date(s);return l.setDate(s.getDate()+o),{iso:Y(l),inMonth:l.getMonth()===t.getMonth()}})}function Vn(e){return new Intl.DateTimeFormat("es-AR",{month:"long",year:"numeric"}).format(e)}function Hn({products:e}){const{reservations:t,syncMode:n}=lt(),[s,i]=D.useState(()=>J(ct(ut()))),o=D.useMemo(()=>zn(s),[s]),l=D.useMemo(()=>new Map(e.map(u=>[u.id,u])),[e]),d=Y(J(s)),h=Y(new Date(s.getFullYear(),s.getMonth()+1,0)),p=D.useMemo(()=>t.filter(u=>le(d,h,u.startDate,u.endDate)).sort((u,b)=>u.startDate.localeCompare(b.startDate)||u.productId.localeCompare(b.productId)),[h,d,t]);return a.jsxs("section",{className:"admin-reservations parchment-panel",children:[a.jsxs("div",{className:"admin-reservations-head",children:[a.jsxs("div",{children:[a.jsxs("p",{className:"eyebrow flex items-center gap-2",children:[a.jsx(dt,{size:15}),"Calendario admin"]}),a.jsx("h2",{children:"Pedidos y alquileres por fecha"}),a.jsxs("p",{children:["Fuente de reservas: ",n==="firebase"?"Firestore":"local",". Cada marca bloquea el objeto para futuros clientes."]})]}),a.jsxs("div",{className:"calendar-month-bar admin-calendar-nav",children:[a.jsx("button",{type:"button",onClick:()=>i(u=>fe(u,-1)),children:a.jsx(ht,{size:18})}),a.jsx("strong",{children:Vn(s)}),a.jsx("button",{type:"button",onClick:()=>i(u=>fe(u,1)),children:a.jsx(pt,{size:18})})]})]}),a.jsxs("div",{className:"admin-calendar-grid",children:[$n.map(u=>a.jsx("span",{className:"calendar-weekday",children:u},u)),o.map(({iso:u,inMonth:b})=>{const w=t.filter(c=>le(u,u,c.startDate,c.endDate));return a.jsxs("div",{className:`admin-calendar-day ${b?"":"is-outside"} ${w.length>0?"has-reservations":""}`,children:[a.jsx("span",{className:"admin-calendar-number",children:Number(u.slice(-2))}),w.slice(0,2).map(c=>{const _=l.get(c.productId);return a.jsx("span",{className:"admin-calendar-chip",title:(_==null?void 0:_.name)??c.productId,children:(_==null?void 0:_.name)??c.productId},c.id)}),w.length>2&&a.jsxs("span",{className:"admin-calendar-more",children:["+",w.length-2]})]},u)})]}),a.jsxs("div",{className:"admin-reservation-list",children:[a.jsx("p",{className:"eyebrow",children:"Reservas del mes"}),p.length===0?a.jsx("p",{className:"admin-empty-reservations",children:"No hay objetos alquilados o pedidos para este mes."}):p.map(u=>{const b=l.get(u.productId);return a.jsxs("article",{className:"admin-reservation-row",children:[a.jsxs("div",{children:[a.jsx("strong",{children:(b==null?void 0:b.name)??u.productId}),a.jsx("span",{children:mt(u.startDate,u.endDate)})]}),a.jsxs("div",{children:[a.jsxs("span",{children:["Cantidad: ",u.quantity??1]}),a.jsx("span",{children:u.customerName||u.customerEmail||"Cliente sin datos visibles"})]}),u.note&&a.jsx("p",{children:u.note})]},u.id)})]})]})}function Wn(){const e=Ze(),t=Je(),n=e?Pn(e):null,{user:s,isAdmin:i,checkingAdmin:o,loginWithGoogle:l,logout:d,authError:h}=Qe(),{products:p,syncMode:u}=et(),[b,w]=D.useState(""),[c,_]=D.useState(K),[R,m]=D.useState(""),[P,j]=D.useState(!1),[T,N]=D.useState(!1),S=D.useMemo(()=>[...p].sort((r,f)=>r.name.localeCompare(f.name)),[p]),g=(r,f)=>{_(C=>({...C,[r]:f}))},H=async r=>{r.preventDefault(),m(""),await l()},L=()=>{_({...K,id:`EG-${String(p.length+1).padStart(3,"0")}`}),m("")},Oe=async r=>{if(r.preventDefault(),!t||!i)return;const f=Mn(c);if(!f.id||!f.name){m("Completá ID y nombre antes de guardar.");return}try{j(!0),await oe(W(t,"products",f.id),f),m(`Producto guardado: ${f.name}`)}catch(C){console.error(C);const q=C;m(`No se pudo guardar el producto (${q.code??"error desconocido"}). ${q.message??"Revisá los datos cargados y tus permisos de admin."}`)}finally{j(!1)}},Le=async()=>{!t||!i||!c.id||!window.confirm(`¿Eliminar ${c.name||c.id}?`)||(j(!0),await gt(W(t,"products",c.id)),j(!1),_(K),m("Producto eliminado."))},Me=()=>{const r=b.trim();if(!/^https?:\/\//.test(r)){m("Pegá una URL pública de imagen que empiece con http o https.");return}g("images",[r,...c.images]),w(""),m("Imagen agregada. Guardá el producto para conservarla en el catálogo.")},Fe=async r=>{if(!r||!n||!c.id){m("Completá el ID antes de subir imágenes.");return}try{N(!0);const f=Cn(n,`products/${c.id}/${Date.now()}-${Bn(r.name)}`);await kn(f,r,{contentType:r.type});const C=await Tn(f);g("images",[C,...c.images]),m("Imagen subida. Guardá el producto para conservarla en el catálogo.")}catch(f){console.error(f);const C=f;m(`No se pudo subir la imagen (${C.code??"error desconocido"}). ${C.message??"Revisá las reglas de Storage y tus permisos de admin."}`)}finally{N(!1)}},Be=async()=>{if(!(!t||!i||!window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")))try{j(!0);let r=0;await Promise.all(rt.map(async f=>{const C=W(t,"products",f.id);(await ot(C)).exists()||(await oe(C,f),r+=1)})),m(r>0?`Catálogo base restaurado. Se agregaron ${r} productos.`:"Firestore ya tenía todos los productos base.")}catch(r){console.error(r);const f=r;m(`No se pudo restaurar el catálogo base (${f.code??"error desconocido"}). ${f.message??"Revisá tus permisos de admin."}`)}finally{j(!1)}};return!tt||!t?a.jsx("section",{className:"admin-page",children:a.jsxs("div",{className:"admin-card",children:[a.jsx("p",{className:"eyebrow",children:"Admin"}),a.jsx("h1",{children:"Firebase no está configurado"}),a.jsx("p",{children:"Cargá las variables de Firebase para habilitar el panel."})]})}):s?o?a.jsx("section",{className:"admin-page",children:a.jsx("div",{className:"admin-card",children:"Verificando permisos..."})}):i?a.jsxs("section",{className:"admin-page",children:[a.jsxs("div",{className:"admin-head",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow",children:"Admin"}),a.jsx("h1",{children:"Catálogo"}),a.jsxs("p",{children:["Fuente actual: ",u==="firebase"?"Firestore":"catálogo local de respaldo"]})]}),a.jsxs("div",{className:"admin-actions",children:[a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Be,disabled:P,children:[a.jsx(ft,{size:17}),"Restaurar catálogo base"]}),a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[a.jsx(re,{size:17}),"Salir"]})]})]}),R&&a.jsxs("p",{className:"admin-message",children:[a.jsx(nt,{size:16}),R]}),a.jsx(Hn,{products:p}),a.jsxs("div",{className:"admin-layout",children:[a.jsxs("aside",{className:"admin-list",children:[a.jsxs("button",{type:"button",className:"admin-new-button",onClick:L,children:[a.jsx(st,{size:16}),"Nuevo producto"]}),S.map(r=>a.jsxs("button",{type:"button",className:c.id===r.id?"is-active":"",onClick:()=>_(Ln(r)),children:[a.jsx("strong",{children:r.name}),a.jsxs("span",{children:[r.id," · ",r.category]})]},r.id))]}),a.jsxs("form",{onSubmit:Oe,className:"admin-editor",children:[a.jsxs("div",{className:"admin-editor-title",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow",children:"Ficha editable"}),a.jsx("h2",{children:c.name||"Producto nuevo"})]}),a.jsxs("div",{className:"admin-actions",children:[a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:Le,disabled:!c.id||P,children:[a.jsx(at,{size:17}),"Eliminar"]}),a.jsxs("button",{type:"submit",className:"gabinete-button",disabled:P,children:[a.jsx(bt,{size:17}),P?"Guardando...":"Guardar"]})]})]}),a.jsxs("div",{className:"admin-grid",children:[a.jsxs("label",{children:["ID",a.jsx("input",{className:"gabinete-input",value:c.id,onChange:r=>g("id",Fn(r.target.value).toUpperCase())})]}),a.jsxs("label",{children:["Nombre",a.jsx("input",{className:"gabinete-input",value:c.name,onChange:r=>g("name",r.target.value)})]}),a.jsxs("label",{children:["Categoría",a.jsx("select",{className:"gabinete-input",value:c.category,onChange:r=>g("category",r.target.value),children:it.map(r=>a.jsx("option",{children:r},r))})]}),a.jsxs("label",{children:["Estado",a.jsx("select",{className:"gabinete-input",value:c.status,onChange:r=>g("status",r.target.value),children:Un.map(r=>a.jsx("option",{children:r},r))})]}),a.jsxs("label",{children:["Disponibilidad",a.jsx("select",{className:"gabinete-input",value:c.availability,onChange:r=>g("availability",r.target.value),children:Sn.map(r=>a.jsx("option",{children:r},r))})]}),a.jsxs("label",{children:["Precio diario",a.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerDay,onChange:r=>g("rentalPricePerDay",r.target.value)})]}),a.jsxs("label",{children:["Precio semanal",a.jsx("input",{className:"gabinete-input",type:"number",value:c.rentalPricePerWeek,onChange:r=>g("rentalPricePerWeek",r.target.value)})]}),a.jsxs("label",{children:["Valor estimado",a.jsx("input",{className:"gabinete-input",type:"number",value:c.estimatedValue,onChange:r=>g("estimatedValue",r.target.value)})]}),a.jsxs("label",{children:["Garantía %",a.jsx("input",{className:"gabinete-input",type:"number",step:"0.01",value:c.guaranteePercentage,onChange:r=>g("guaranteePercentage",r.target.value)})]}),a.jsxs("label",{children:["Depósito mínimo",a.jsx("input",{className:"gabinete-input",type:"number",value:c.minimumDeposit,onChange:r=>g("minimumDeposit",r.target.value)})]}),a.jsxs("label",{children:["Destacado",a.jsx("input",{className:"gabinete-input",type:"number",value:c.featuredScore,onChange:r=>g("featuredScore",r.target.value)})]}),a.jsxs("label",{children:["Tags",a.jsx("input",{className:"gabinete-input",value:c.tags,onChange:r=>g("tags",r.target.value),placeholder:"vintage, cine, oficina"})]}),a.jsxs("label",{children:["Medidas",a.jsx("input",{className:"gabinete-input",value:c.measurements,onChange:r=>g("measurements",r.target.value)})]}),a.jsxs("label",{children:["Material",a.jsx("input",{className:"gabinete-input",value:c.material,onChange:r=>g("material",r.target.value)})]}),a.jsxs("label",{children:["Color",a.jsx("input",{className:"gabinete-input",value:c.color,onChange:r=>g("color",r.target.value)})]}),a.jsxs("label",{children:["Época / estilo",a.jsx("input",{className:"gabinete-input",value:c.eraStyle,onChange:r=>g("eraStyle",r.target.value)})]}),a.jsxs("label",{children:["Tono visual",a.jsx("select",{className:"gabinete-input",value:c.visualTone,onChange:r=>g("visualTone",r.target.value),children:On.map(r=>a.jsx("option",{children:r},r))})]}),a.jsxs("label",{children:["Símbolo",a.jsx("input",{className:"gabinete-input",value:c.visualSigil,onChange:r=>g("visualSigil",r.target.value)})]})]}),a.jsxs("label",{className:"admin-wide",children:["Descripción",a.jsx("textarea",{className:"gabinete-input",rows:4,value:c.description,onChange:r=>g("description",r.target.value)})]}),a.jsxs("label",{className:"admin-wide",children:["Curiosidades",a.jsx("textarea",{className:"gabinete-input",rows:3,value:c.curiosities,onChange:r=>g("curiosities",r.target.value)})]}),a.jsxs("label",{className:"admin-wide",children:["Notas internas",a.jsx("textarea",{className:"gabinete-input",rows:3,value:c.internalNotes,onChange:r=>g("internalNotes",r.target.value)})]}),a.jsxs("div",{className:"admin-images",children:[a.jsxs("label",{className:"admin-upload",children:[a.jsx(ce,{size:18}),T?"Subiendo...":"Subir archivo",a.jsx("input",{type:"file",accept:"image/*",onChange:r=>{var f;return Fe((f=r.target.files)==null?void 0:f[0])}})]}),a.jsxs("div",{className:"admin-image-url",children:[a.jsxs("label",{children:["URL pública de imagen",a.jsx("input",{className:"gabinete-input",value:b,onChange:r=>w(r.target.value),placeholder:"https://..."})]}),a.jsxs("button",{type:"button",className:"admin-upload",onClick:Me,children:[a.jsx(ce,{size:18}),"Agregar imagen"]})]}),a.jsx("div",{className:"admin-image-grid",children:c.images.map(r=>a.jsx(In,{image:r,onRemove:()=>g("images",c.images.filter(f=>f!==r))},r))})]})]})]})]}):a.jsx("section",{className:"admin-page",children:a.jsxs("div",{className:"admin-card",children:[a.jsx("p",{className:"eyebrow",children:"Sin permiso"}),a.jsx("h1",{children:"Tu usuario no es administrador"}),a.jsxs("p",{children:["Pedí que agreguen este email en Firestore: ",a.jsx("strong",{children:s.email})]}),a.jsxs("button",{type:"button",className:"gabinete-button-secondary",onClick:d,children:[a.jsx(re,{size:17}),"Salir"]})]})}):a.jsx("section",{className:"admin-page",children:a.jsxs("form",{onSubmit:H,className:"admin-card admin-login",children:[a.jsx("span",{className:"admin-lock",children:a.jsx(ue,{size:22})}),a.jsx("p",{className:"eyebrow",children:"Admin"}),a.jsx("h1",{children:"Ingresar al catálogo"}),a.jsx("p",{children:"Usá la cuenta de Google autorizada para editar productos y administrar el catálogo."}),a.jsxs("div",{className:"admin-auth-debug",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Dominio actual:"})," ",window.location.hostname]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Auth domain:"})," ",ie.authDomain||"sin configurar"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Project ID:"})," ",ie.projectId||"sin configurar"]})]}),(R||h)&&a.jsx("p",{className:"admin-message",children:R||h}),a.jsxs("button",{type:"submit",className:"gabinete-button",children:[a.jsx(ue,{size:17}),"Entrar con Google"]})]})})}export{Wn as AdminPage};
