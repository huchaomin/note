import{L as C,F as L,e as w,d as P,t as D,B as T,C as R,W as I}from"./Index.eYgxhKOc.js";import"../bigScreen_index.md.CdVD_ECR.js";import"./framework.yfsRM9mo.js";import"./theme.Bvy8fpr0.js";import"./map_side.CEnqE4HE.js";import"./rotation_border_1.DfgmZj8c.js";import"./rotation_border_3.6BD6Ww5o.js";import"./circle_1.C_TJZFuM.js";import"./circle_2.5mFKZtXn.js";import"./halo.K30zxU1n.js";import"./grid.BoIUtDzU.js";import"./grid_black.Baf8g4kP.js";import"./bg_light_1.Dfeo2CZc.js";import"./stroke_line_1.DIK3zp3H.js";import"./arrow_down.CA-b8YP-.js";const _=new WeakMap;class V extends C{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,s,o,r){const n=new L(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,t=>{this.parse(t,s,r)},o,r)}parse(e,s,o=()=>{}){this.decodeDracoFile(e,s,null,null,w,o).catch(o)}decodeDracoFile(e,s,o,r,n=P,t=()=>{}){const i={attributeIDs:o||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!o,vertexColorSpace:n};return this.decodeGeometry(e,i).then(s).catch(t)}decodeGeometry(e,s){const o=JSON.stringify(s);if(_.has(e)){const a=_.get(e);if(a.key===o)return a.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const n=this.workerNextTaskID++,t=e.byteLength,i=this._getWorker(n,t).then(a=>(r=a,new Promise((h,d)=>{r._callbacks[n]={resolve:h,reject:d},r.postMessage({type:"decode",id:n,taskConfig:s,buffer:e},[e])}))).then(a=>this._createGeometry(a.geometry));return i.catch(()=>!0).then(()=>{r&&n&&this._releaseTask(r,n)}),_.set(e,{key:o,promise:i}),i}_createGeometry(e){const s=new D;e.index&&s.setIndex(new T(e.index.array,1));for(let o=0;o<e.attributes.length;o++){const r=e.attributes[o],n=r.name,t=r.array,i=r.itemSize,a=new T(t,i);n==="color"&&(this._assignVertexColorSpace(a,r.vertexColorSpace),a.normalized=!(t instanceof Float32Array)),s.setAttribute(n,a)}return s}_assignVertexColorSpace(e,s){if(s!==w)return;const o=new R;for(let r=0,n=e.count;r<n;r++)o.fromBufferAttribute(e,r),I.toWorkingColorSpace(o,w),e.setXYZ(r,o.r,o.g,o.b)}_loadLibrary(e,s){const o=new L(this.manager);return o.setPath(this.decoderPath),o.setResponseType(s),o.setWithCredentials(this.withCredentials),new Promise((r,n)=>{o.load(e,r,void 0,n)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",s=[];return e?s.push(this._loadLibrary("draco_decoder.js","text")):(s.push(this._loadLibrary("draco_wasm_wrapper.js","text")),s.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(s).then(o=>{const r=o[0];e||(this.decoderConfig.wasmBinary=o[1]);const n=S.toString(),t=["/* draco decoder */",r,"","/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([t]))}),this.decoderPending}_getWorker(e,s){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(n){const t=n.data;switch(t.type){case"decode":r._callbacks[t.id].resolve(t);break;case"error":r._callbacks[t.id].reject(t);break;default:}},this.workerPool.push(r)}else this.workerPool.sort(function(r,n){return r._taskLoad>n._taskLoad?-1:1});const o=this.workerPool[this.workerPool.length-1];return o._taskCosts[e]=s,o._taskLoad+=s,o})}_releaseTask(e,s){e._taskLoad-=e._taskCosts[s],delete e._callbacks[s],delete e._taskCosts[s]}debug(){}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function S(){let b,e;onmessage=function(t){const i=t.data;switch(i.type){case"init":b=i.decoderConfig,e=new Promise(function(d){b.onModuleLoaded=function(u){d({draco:u})},DracoDecoderModule(b)});break;case"decode":const a=i.buffer,h=i.taskConfig;e.then(d=>{const u=d.draco,c=new u.Decoder;try{const l=s(u,c,new Int8Array(a),h),f=l.attributes.map(m=>m.array.buffer);l.index&&f.push(l.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:l},f)}catch(l){self.postMessage({type:"error",id:i.id,error:l.message})}finally{u.destroy(c)}});break}};function s(t,i,a,h){const d=h.attributeIDs,u=h.attributeTypes;let c,l;const f=i.GetEncodedGeometryType(a);if(f===t.TRIANGULAR_MESH)c=new t.Mesh,l=i.DecodeArrayToMesh(a,a.byteLength,c);else if(f===t.POINT_CLOUD)c=new t.PointCloud,l=i.DecodeArrayToPointCloud(a,a.byteLength,c);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!l.ok()||c.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+l.error_msg());const m={index:null,attributes:[]};for(const p in d){const y=self[u[p]];let g,k;if(h.useUniqueIDs)k=d[p],g=i.GetAttributeByUniqueId(c,k);else{if(k=i.GetAttributeId(c,t[d[p]]),k===-1)continue;g=i.GetAttribute(c,k)}const A=r(t,i,c,p,y,g);p==="color"&&(A.vertexColorSpace=h.vertexColorSpace),m.attributes.push(A)}return f===t.TRIANGULAR_MESH&&(m.index=o(t,i,c)),t.destroy(c),m}function o(t,i,a){const d=a.num_faces()*3,u=d*4,c=t._malloc(u);i.GetTrianglesUInt32Array(a,u,c);const l=new Uint32Array(t.HEAPF32.buffer,c,d).slice();return t._free(c),{array:l,itemSize:1}}function r(t,i,a,h,d,u){const c=u.num_components(),f=a.num_points()*c,m=f*d.BYTES_PER_ELEMENT,p=n(t,d),y=t._malloc(m);i.GetAttributeDataArrayForAllPoints(a,u,p,m,y);const g=new d(t.HEAPF32.buffer,y,f).slice();return t._free(y),{name:h,array:g,itemSize:c}}function n(t,i){switch(i){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32}}}export{V as DRACOLoader};