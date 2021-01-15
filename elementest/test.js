/* Generated by the Nim Compiler v1.4.2 */
const api = new mxwidgets.WidgetApi(null);

// Before doing anything else, request capabilities:
api.requestCapability(mxwidgets.MatrixCapabilities.AlwaysOnScreen);
api.requestCapability(mxwidgets.MatrixCapabilities.Screenshots);
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI1194408 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1194728 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI1188015 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI1194723 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI1194617 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1194619 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1194649 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1188013 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI1194649 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194649.node = NNI1194649;
var NNI1194619 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194619.node = NNI1194619;
NTI1194723.base = NTI1194617;
NTI1194728.base = NTI1194617;
var NNI1194617 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI1194723, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI1188015, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI1188013, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI1188013, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI1194728, name: "up", sons: null}]};
NTI1194617.node = NNI1194617;
var NNI1194408 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1194408.node = NNI1194408;
NTI1194617.base = NTI1194408;
NTI1194619.base = NTI1194617;
NTI1194649.base = NTI1194619;
function makeNimstrLit(c_1455062) {
      var ln = c_1455062.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_1455062.charCodeAt(i);
  }
  return result;
  

  
}
function cstrToNimstr(c_1455079) {
      var ln = c_1455079.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_1455079.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_1455079.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}
function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);
function nimCopy(dest_1470023, src_1470024, ti_1470025) {
  var result_1475219 = null;

    switch (ti_1470025.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_1465401(ti_1470025))) {
      result_1475219 = src_1470024;
      }
      else {
        result_1475219 = [src_1470024[0], src_1470024[1]];
      }
      
      break;
    case 19:
            if (dest_1470023 === null || dest_1470023 === undefined) {
        dest_1470023 = {};
      }
      else {
        for (var key in dest_1470023) { delete dest_1470023[key]; }
      }
      for (var key in src_1470024) { dest_1470023[key] = src_1470024[key]; }
      result_1475219 = dest_1470023;
    
      break;
    case 18:
    case 17:
      if (!((ti_1470025.base == null))) {
      result_1475219 = nimCopy(dest_1470023, src_1470024, ti_1470025.base);
      }
      else {
      if ((ti_1470025.kind == 17)) {
      result_1475219 = (dest_1470023 === null || dest_1470023 === undefined) ? {m_type: ti_1470025} : dest_1470023;
      }
      else {
        result_1475219 = (dest_1470023 === null || dest_1470023 === undefined) ? {} : dest_1470023;
      }
      }
      nimCopyAux(result_1475219, src_1470024, ti_1470025.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_1470024 === null) {
        result_1475219 = null;
      }
      else {
        if (dest_1470023 === null || dest_1470023 === undefined) {
          dest_1470023 = new Array(src_1470024.length);
        }
        else {
          dest_1470023.length = src_1470024.length;
        }
        result_1475219 = dest_1470023;
        for (var i = 0; i < src_1470024.length; ++i) {
          result_1475219[i] = nimCopy(result_1475219[i], src_1470024[i], ti_1470025.base);
        }
      }
    
      break;
    case 28:
            if (src_1470024 !== null) {
        result_1475219 = src_1470024.slice(0);
      }
    
      break;
    default: 
      result_1475219 = src_1470024;
      break;
    }

  return result_1475219;

}
function toJSStr(s_1455096) {
                    var Tmp5;
            var Tmp7;

  var result_1455097 = null;

    var res_1455170 = newSeq_1455128((s_1455096).length);
    var i_1455172 = 0;
    var j_1455174 = 0;
    L1: do {
        L2: while (true) {
        if (!(i_1455172 < (s_1455096).length)) break L2;
          var c_1455175 = s_1455096[i_1455172];
          if ((c_1455175 < 128)) {
          res_1455170[j_1455174] = String.fromCharCode(c_1455175);
          i_1455172 += 1;
          }
          else {
            var helper_1455198 = newSeq_1455128(0);
            L3: do {
                L4: while (true) {
                if (!true) break L4;
                  var code_1455199 = c_1455175.toString(16);
                  if (((code_1455199).length == 1)) {
                  helper_1455198.push("%0");;
                  }
                  else {
                  helper_1455198.push("%");;
                  }
                  
                  helper_1455198.push(code_1455199);;
                  i_1455172 += 1;
                    if (((s_1455096).length <= i_1455172)) Tmp5 = true; else {                      Tmp5 = (s_1455096[i_1455172] < 128);                    }                  if (Tmp5) {
                  break L3;
                  }
                  
                  c_1455175 = s_1455096[i_1455172];
                }
            } while(false);
++excHandler;
            Tmp7 = framePtr;
            try {
            res_1455170[j_1455174] = decodeURIComponent(helper_1455198.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
            framePtr = Tmp7;
            res_1455170[j_1455174] = helper_1455198.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Tmp7;
            }
          }
          
          j_1455174 += 1;
        }
    } while(false);
    if (res_1455170.length < j_1455174) { for (var i=res_1455170.length;i<j_1455174;++i) res_1455170.push(null); }
               else { res_1455170.length = j_1455174; };
    result_1455097 = res_1455170.join("");

  return result_1455097;

}
function raiseException(e_1420218, ename_1420219) {
    e_1420218.name = ename_1420219;
    if ((excHandler == 0)) {
    unhandledException(e_1420218);
    }
    
    throw e_1420218;

  
}
function chckIndx(i_1480086, a_1480087, b_1480088) {
      var Tmp1;

  var result_1480089 = 0;

  BeforeRet: do {
      if (!(a_1480087 <= i_1480086)) Tmp1 = false; else {        Tmp1 = (i_1480086 <= b_1480088);      }    if (Tmp1) {
    result_1480089 = i_1480086;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_1480086, a_1480087, b_1480088);
    }
    
  } while (false);

  return result_1480089;

}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var objectID_2085031 = [0];
var onSoundRecorderMade = null;
var onScreenRecorderMade = null;
var onSourceData = null;
function GetAudioRecorder(name, constraints)
{
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream)
  {
    if (onSoundRecorderMade){
      let mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = function(e) {
        var chunks = [];
        chunks.push(e.data);
        onSourceData(name, chunks[0]);
      }
      mediaRecorder.onstop = function(e){
      }
      onSoundRecorderMade(name, mediaRecorder);
    }
  });
}

function GetScreenRecorder(name, constraint)
{
  navigator.mediaDevices.getDisplayMedia(constraint).then(function(stream){
    if(onScreenRecorderMade){
      onScreenRecorderMade(name, stream);
    }
  });
}

function GetAudioSource(){
  let audio = new Audio;
  var mediaSource = new MediaSource;
  audio.src = URL.createObjectURL(mediaSource);
  let audioSource =  {"audio": audio, "mediasource": mediaSource}
  mediaSource.onsourceopen = () => audioSource.buffer = mediaSource.addSourceBuffer("audio/webm;codecs=opus");
  return audioSource;
}


function PlayBlob(blob, audioSource)
{
  let fileReader = new FileReader();
  fileReader.readAsArrayBuffer(blob);

  fileReader.onload = function(event) {
    let arrayBuffer = fileReader.result;
    if(audioSource.audio.error != null) console.log(audioSource.audio.error);
    audioSource.buffer.appendBuffer(arrayBuffer);
    audioSource.audio.play();
  };
}

function PlayVideoStream(stream, element)
{
  element.srcObject = stream;
}

function StartRecorder(recorder)
{
  recorder.start(100);
}

function StopRecorder(recorder)
{
  recorder.stop();
}


var microphone_2706014 = [null];
var screen_2706015 = [null];
var audioSource_2706016 = [GetAudioSource()];
function onSoundRecMade_2706030(name_2706032, rec_2706033) {
    microphone_2706014[0] = rec_2706033;
    StartRecorder(microphone_2706014[0]);

  
}
function isFatPointer_1465401(ti_1465403) {
  var result_1465404 = false;

  BeforeRet: do {
    result_1465404 = !((ConstSet1[ti_1465403.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_1465404;

}
function nimCopyAux(dest_1470028, src_1470029, n_1470031) {
    switch (n_1470031.kind) {
    case 0:
      break;
    case 1:
            dest_1470028[n_1470031.offset] = nimCopy(dest_1470028[n_1470031.offset], src_1470029[n_1470031.offset], n_1470031.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_1470031.sons.length; i++) {
      nimCopyAux(dest_1470028, src_1470029, n_1470031.sons[i]);
    }
    
      break;
    case 3:
            dest_1470028[n_1470031.offset] = nimCopy(dest_1470028[n_1470031.offset], src_1470029[n_1470031.offset], n_1470031.typ);
      for (var i = 0; i < n_1470031.sons.length; ++i) {
        nimCopyAux(dest_1470028, src_1470029, n_1470031.sons[i][1]);
      }
    
      break;
    }

  
}
function add_1357211(x_1357214, x_1357214_Idx, y_1357215) {
          if (x_1357214[x_1357214_Idx] === null) { x_1357214[x_1357214_Idx] = []; }
      var off = x_1357214[x_1357214_Idx].length;
      x_1357214[x_1357214_Idx].length += y_1357215.length;
      for (var i = 0; i < y_1357215.length; ++i) {
        x_1357214[x_1357214_Idx][off+i] = y_1357215.charCodeAt(i);
      }
    

  
}
function newSeq_1455128(len_1455131) {
  var result_1455133 = [];

    result_1455133 = new Array(len_1455131); for (var i=0;i<len_1455131;++i) {result_1455133[i]=null;}
  return result_1455133;

}
function unhandledException(e_1415059) {
    var buf_1415060 = [[]];
    if (!(((e_1415059.message).length == 0))) {
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_1415060[0].push.apply(buf_1415060[0], e_1415059.message);;
    }
    else {
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit(" ["));;
    add_1357211(buf_1415060, 0, e_1415059.name);
    buf_1415060[0].push.apply(buf_1415060[0], makeNimstrLit("]\x0A"));;
    var cbuf_1420201 = toJSStr(buf_1415060[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_1420201);
  }
  else {
    throw cbuf_1420201;
  }
  

  
}
function raiseIndexError(i_1440047, a_1440048, b_1440049) {
    var Tmp1;

    if ((b_1440049 < a_1440048)) {
    Tmp1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Tmp1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_1440047)+"") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_1440048)+"") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_1440049)+"") || []);
    }
    
    raiseException({message: nimCopy(null, Tmp1, NTI1188013), parent: null, m_type: NTI1194649, name: null, trace: [], up: null}, "IndexDefect");

  
}
function onScreenRecMade_2706047(name_2706049, rec_2706050) {
    var Tmp1;

    screen_2706015[0] = rec_2706050;
    PlayVideoStream(screen_2706015[0], (Tmp1 = document.getElementsByTagName("video"), Tmp1)[chckIndx(0, 0, (Tmp1).length-1)]);

  
}
function onData_2706079(name_2706081, blob_2706082) {
    PlayBlob(blob_2706082, audioSource_2706016[0]);

  
}
function audioConstraint_2686037() {
  var result_2686039 = null;

    result_2686039 = {};
    result_2686039.audio = true;

  return result_2686039;

}
function videoConstraint_2690025() {
  var result_2690027 = null;

    result_2690027 = {};
    result_2690027.video = true;
    result_2690027.audio = true;
    result_2690027.cursor = makeNimstrLit("always");

  return result_2690027;

}
onSoundRecorderMade = onSoundRecMade_2706030;
onScreenRecorderMade = onScreenRecMade_2706047;
onSourceData = onData_2706079;
GetAudioRecorder(makeNimstrLit("microphone"), audioConstraint_2686037());
GetScreenRecorder(makeNimstrLit("screen"), videoConstraint_2690025());
