/*
**************************************************************** 
** Able.js by forcer (at) vnet.sk
** This file is covered by GPL v2 license. 
** Please find it here: http://www.gnu.org/licenses/gpl-2.0.txt
****************************************************************
*/

var cvs, gcvs, ctx, gctx, tcvs, tctx;
var MaxX, MaxY;
var boxZoom, boxDelta;
var selectedObjs = [];
var clipboardObjs = [];
var spriteData = {};
var startmx, startmy;
var selObjInitVals = [];
var selectionInProgress = false;
var toolSetMap = {};
var buttonClicked;
var ctrlKeyPressed;

var numberOfImagesLoaded = 0;
var numberOfImages = 0;

var d = document;
var levelData = {};
var ratio = 20.7;
var ydelta = 50;

function init() {
  loadImages();
  txtEl = d.getElementById('txt');
  txtEl.focus();
  txtEl.select();
  cvs = d.getElementById("canvas");
  ctx = cvs.getContext("2d");
  MaxX = cvs.width;
  MaxY = cvs.height;
  
  cvs.onmousedown = canvasMouseDown;
  cvs.onmouseup = canvasMouseUp;

  gcvs = document.createElement('canvas');
  gcvs.width = MaxX;
  gcvs.height = MaxY;
  gctx = gcvs.getContext("2d");

  tcvs = d.getElementById("toolset");
  tctx = tcvs.getContext("2d");
  tcvs.onmousedown = toolSetMouseDown;
  
  d.onkeydown = canvasKeyDown;
  d.onkeyup = canvasKeyUp;
  
  spriteData = definitionToSpriteDataMapping();
  toolSetMap = toolSetMapping();
  
  levelData = parseLevel();
  setTimeout(preloadImagesCheck,100);
}

function help() {
  var message = "欢迎来到愤怒的小鸟关卡编辑器！\n\n"
			   +"您可以使用它来创建和编辑现有的反编译后的关卡\n"
               +"如果你想要编辑现有游戏关卡,你需要将关卡反编译为文本形式才能使用这个编辑器。\n"
			   +"所有新创建的文件可以直接使用在游戏中,无需再次编译。\n"
               +"注意：保存关卡需要覆盖现有的关卡。\n\n"
               +"支持的设备有(设备|版本)：\n"
               +"Maemo|1.3.x\n"
               +"Android|1.3.x\n"
               +"Palm|1.3.x\n"
               +"Windows|1.0.0\n"
               +"注意：暂不支持Apple设备\n\n"
               +"编辑教程：\n"
               +"在你的设备中寻找到Level1.lua并反编译此文件，"
               +"然后粘贴在编辑器的文本框中,按“加载/重载”,编辑完成之后,按“保存更改”,然后复制文本框里的内容，\n"
               +"将内容粘贴到新创建的Level1.lua文件中。\n"
               +"最后,覆盖现有的Level1.lua并保存。";
  return message;
}

function controls() {
  var message = "控制方法：\n\n"
               +"单击：\n"
               +"选取目标；\n\n"
               +"右键单击拖动或[q]/[w]键：\n"
               +"旋转目标；\n\n"
               +"[d]键：\n"
               +"复制目标；\n\n"
               +"箭头键或鼠标单击拖动：\n"
               +"移动目标；\n\n"
               +"[j]/[r]键：\n"
               +"对所选的2个对象进行关联/取消关联；\n\n"
               +"ctrl+单击：\n"
               +"多选时增加或取消选取所单击的对象；\n\n"
               +"[delete]键：\n"
               +"删除目标；\n\n"
               +"[↑]：\n"
               +"缩放数值-1\n\n"
               +"[↓]键：\n"
               +"缩放数值+1\n\n"
			   +"[←]：\n"
               +"移动画布-100\n\n"
               +"[→]键：\n"
               +"移动画布+100。"
  return message;
}

function update() {
  var message = "更新说明：\n\n"
               +"1.0c：\n"
               +"最初的版本；\n\n"
               +"1.0.1：\n"
               +"修复编码问题；\n\n"
               +"1.1：\n"
               +"1.修改文本框大小；\n"
               +"2.缩放和画布调整为为拖动式；\n"
			   +"3.增加编辑区域为1024x768；\n"
               +"4.移动控制方法到加载和保存中间的按钮；\n"
               +"5.增加4个快捷键；\n"
               +"6.所有文字居中，选择框设置为自适应分辨率；\n\n"
			   +"1.2：\n"
               +"1.添加编辑区域背景；\n"
               +"2.增加神鹰和南瓜等物品；\n"
			   +"3.略微缩小编辑区域适应背景；\n"
               +"4.修正移动画布大小；\n"
               +"5.增加下载链接；\n"
               +"6.调整选择框大小；\n\n"
  return message;
}

function loadImages() {
  for(var sec in images) {
    if(sec == "theme_grounds") {
      theme = images[sec];
      for(var tsec in theme) {
        theme[tsec].img = new Image();
        theme[tsec].img.onload = function() { ++numberOfImagesLoaded };
        theme[tsec].img.src = 'images/'+theme[tsec].src+'.png';
        ++numberOfImages;
      }
    }
    else {
      images[sec].img = new Image();
      images[sec].img.onload = function() { ++numberOfImagesLoaded };
      images[sec].img.src = 'images/'+images[sec].src+'.png';
      ++numberOfImages;
    } 
  }
  
}

function preloadImagesCheck() {
  var ilDiv = d.getElementById('loading');
  if(numberOfImagesLoaded < numberOfImages) {
    ilDiv.innerHTML = "<h1>小喵正在玩命加载图片资源中"+((numberOfImagesLoaded/numberOfImages)*100 >> 1)+"%，请稍等...</h1>";
    setTimeout(preloadImagesCheck,100);
  } else {
    drawToolSet();
    setInterval(drawCanvas,100);
    ilDiv.style.display = "none";
  }
}

function toolSetMapping() {
  var tMaxX = tcvs.width;
  var tMaxY = tcvs.height;  
  var scale = 1/2.6;
  var currentWidth = 0;
  var currentHeight = 0;
  var maxHeight = 0;
  var result = {};
  for(var blname in blocks) {
    var sprd = spriteData[blname];  
    if(sprd == null) continue;

    if(currentWidth + sprd.data.width * scale > tMaxX) {
      currentHeight += maxHeight;
      currentWidth = 0;
    }
    
    result[blname] = {};
    result[blname].data = sprd.data;
    result[blname].img = sprd.img;
    result[blname].x = currentWidth;
    result[blname].y = currentHeight;
    result[blname].w = sprd.data.width*scale;
    result[blname].h = sprd.data.height*scale;
    
    maxHeight = maxHeight < sprd.data.height*scale ? sprd.data.height*scale : maxHeight;
    currentWidth += sprd.data.width*scale;
  }
  return result;
}

function drawToolSet() {
  for(var def in toolSetMap) {
    var tsm = toolSetMap[def];
    var sd = tsm.data;
    tctx.drawImage(tsm.img, sd.pvrX, sd.pvrY, sd.width, sd.height, tsm.x, tsm.y, tsm.w, tsm.h);
  }
}

function toolSetMouseDown(e) {
  var tsc = d.getElementById('tscontainer');
  var mx = e.pageX + tsc.scrollLeft - tsc.offsetLeft;
  var my = e.pageY + tsc.scrollTop - tsc.offsetTop;
  
  for(var def in toolSetMap) {
    var tsm = toolSetMap[def];
    if(mx < (tsm.x + tsm.w) && my < (tsm.y + tsm.h) && mx > tsm.x && my > tsm.y) {
      //console.info("added "+def);
      addNewObject(def);
      break;
    }
  }
}


function definitionToSpriteDataMapping() {
  var result = {};
  for(var definition in blocks) {
    var sprite = blocks[definition].sprite;
    if(!sprite) continue;
    for(var secnm in images) {
      if(secnm == "theme_grounds") {
        for(var tsprite in images[secnm]) {
          if(tsprite == sprite) {
            theme = images[secnm];
            result[definition] = {};
            result[definition].img = theme[sprite].img;
            result[definition].data = theme[sprite];
          }
        }
      }
      else {
        section = images[secnm];
        for(var spritenm in section) {
          if(sprite == spritenm) {
            //console.info(section);
            result[definition] = {};
            result[definition].img = section.img;
            result[definition].data = section[spritenm];
          }
        }
      } 
    }
  }
  return result;
}

function dumpLevel(arr,level) {
  function isNumber(x) 
  { 
    return ( (typeof x === typeof 1) && (null !== x) && isFinite(x) );
  }
  var i = 0;
  var len = 0;
  var dumpedText = "";
  if(!level) level = 0;
  
  var levelPadding = "";
  for(var j=0;j<level;j++) levelPadding += "    ";
  
  if(typeof(arr) == 'object') { 
    for(var item in arr) { len++ }
    //alert(len);
    for(var item in arr) {
      i++;
      var value = arr[item];
      if(typeof(value) == 'object') { 
        dumpedText += levelPadding + item + " = {\n";
        dumpedText += dumpLevel(value,level+1);
        dumpedText += levelPadding + "}";
        if(level > 0 && i < len) dumpedText += ",\n";
        else dumpedText += "\n";
      } else {
        value = isNumber(value) ? value : '"'+value+'"';
        dumpedText += levelPadding + item + " = " + value;
        if (level > 0 && i < len)  dumpedText += ",\n";
        else dumpedText += "\n";
      }
    } 
  } 
  return dumpedText;
} 

function getNextAvailableObjectName(definition) {
  var i = 0;
  
  while(levelData.world[definition+'_'+ ++i]) { if(i > 999) break;}
  
  return definition + '_' + i;
}

function addNewObject(definition, x, y, angle) {
  if(!levelData) return undefined;
  var objName = getNextAvailableObjectName(definition)
  levelData.world[objName] = {};
  var obj = levelData.world[objName];
  var loc = {};
  
  if(x === undefined || y === undefined) {
    loc = untransform(MaxX/2,MaxY/4);
  } else {
    loc.x = x;
    loc.y = y;
  }
  
  obj.x = loc.x;
  obj.y = loc.y;
  
  obj.name = objName;
  obj.definition = definition;
  obj.angle = angle === undefined ? 0 : angle;
  if(levelData.counts[definition]) {
    levelData.counts[definition] = parseInt(levelData.counts[definition]) + 1;
  } else {
    levelData.counts[definition] = 1;
  }
  return obj;
}

function saveLevel() {
  txtEl = d.getElementById('txt');
  txtEl.value = dumpLevel(levelData);
  txtEl.focus();
  txtEl.select();
}

function parseLevel() {
  var txt = d.getElementById('txt').value;
  txt = txt.replace(/--.*?\n/g,'\n');
  txt = txt.replace(/([\n\s]*)((physicsToWorld|theme|joints|birdCameraData|castleCameraData|counts|world)\s*=)/g,",$1$2");
  txt = txt.replace(/^[\s\n]*,/,'');
  txt = txt.replace(/=/g,':');
  //console.info(txt);
  try {
    eval("var res = {"+txt+"}");
    return res;
  } catch(err) {
    alert("无法解析关卡数据: "+err+"\n请发送错误信息至1204074991@qq.com");
    return null;
  }
}

function canvasMouseDown(e) {
  var mx = e.pageX - cvs.offsetLeft;
  var my = e.pageY - cvs.offsetTop;
  
  buttonClicked = e.button;
  sloc = untransform(mx,my);
  startmx = mx;
  startmy = my;
  var selObj = getObjectByPixel(mx,my);
  if(selObj == null) {
    if(!ctrlKeyPressed) {
      selectedObjs = [];
      selObjInitVals = [];
    }
    selectionInProgress = true;
  } else if(selectedObjs.length > 1 && !ctrlKeyPressed) {
      syncObjInitValsWithSelObjs();
  } else {
    if(ctrlKeyPressed) {
      if(isObjectSelected(selObj)) {
        deleteObjectFromArray(selectedObjs,selObj);
        syncObjInitValsWithSelObjs();
      } else {
        selectedObjs.push(selObj);
        syncObjInitValsWithSelObjs();
      }
    } else {
      selObjInitVals[0] = {};
      selObjInitVals[0].x = selObj.x;
      selObjInitVals[0].y = selObj.y;
      selObjInitVals[0].angle = selObj.angle;
      selectedObjs = [selObj];
    }
  } 
  cvs.onmousemove = canvasMouseMove;
  return false;
}

function canvasMouseMove(e) {
  var mx = e.pageX - cvs.offsetLeft;
  var my = e.pageY - cvs.offsetTop;
  var mouseOffsetX = mx - startmx;
  var mouseOffsetY = my - startmy;
  var loc = untransform(mx,my);

  if(selectionInProgress) {
    ctx.strokeStyle = "rgba(255,0,0,0.5)";
    ctx.strokeRect(startmx,startmy,mouseOffsetX,mouseOffsetY);
    var rectObjs = getObjectsByRect(startmx,startmy,mouseOffsetX,mouseOffsetY);
    if(ctrlKeyPressed) {
      for(var i in rectObjs) {
        var obj = rectObjs[i];
        if(!isObjectSelected(obj)) selectedObjs.push(obj);
      }
    } else {
      selectedObjs = rectObjs;
    }
    //console.info(selectedObjs);
  } else if(selectedObjs[0] != null) {
    if(buttonClicked == 2) {
      for(var i in selectedObjs) {
        selectedObjs[i].angle = selObjInitVals[i].angle + (loc.y - sloc.y)/5;
      }        
    } else {
      for(var i in selectedObjs) {
        selectedObjs[i].x = selObjInitVals[i].x + (loc.x - sloc.x);
        selectedObjs[i].y = selObjInitVals[i].y + (loc.y - sloc.y);
      }
    }
  }
  return false;
}

function syncObjInitValsWithSelObjs() {
  selObjInitVals = [];
  for(var i in selectedObjs) {
    selObjInitVals[i] = {};
    selObjInitVals[i].x = selectedObjs[i].x;
    selObjInitVals[i].y = selectedObjs[i].y;
    selObjInitVals[i].angle = selectedObjs[i].angle;
  }  
}

function deleteObjectFromArray(arr, obj) {
  for(var i in arr) {
    if(arr[i] === obj) delete(arr[i]);
  }
}

function isObjectSelected(obj) {
  for(var i in selectedObjs) {
    if(selectedObjs[i] === obj) return true;
  }
  return false;
}

function getObjectsByRect(x, y, w, h) {
  var result = [];
  for(var obname in levelData.world) {
    //if(obname == 'ExtraBlockTNT_1') { console.info("found"); }
    var obj = levelData.world[obname];
    var loc = transform(obj.x,obj.y,0,0);
    if(!spriteData[obj.definition]) continue;
    if(loc.x > x && loc.y > y && loc.x < (w+x) && loc.y < (h+y)) {
      result.push(obj);
    } 
  }
  return result;
}

function getObjectByPixel(x,y) {
  gctx.clearRect(0,0,MaxX,MaxY);
  //alert(levelData.world['ExtraBlockTNT_1'].name);
  for (var objname in levelData.world) {
    var obj = levelData.world[objname];
    var sprd = spriteData[obj.definition];
    if(!sprd) continue;
    var tr = transform(obj.x, obj.y, sprd.data.width, sprd.data.height);

    gctx.save();
    gctx.translate(tr.x,tr.y);      
    gctx.rotate(obj.angle);

    gctx.fillRect(-tr.w/2, -tr.h/2, tr.w, tr.h);
    gctx.restore();
    //console.info(x,y);
    var imageData = gctx.getImageData(x, y, 1, 1);
    if (imageData.data[3] > 0) {
      return obj;
    }
  }
  return null;
}

function canvasMouseUp(e) {
  cvs.onmousemove = null;
  selectionInProgress = false;
  buttonClicked = undefined;
}

function canvasKeyDown(e) {
  ctrlKeyPressed = e.ctrlKey;
  var catchKeyPress = true;
  var canDeleteObject = false;
  var canMakeJoint = false;
  var canDeleteJoint = false;
  //console.info(e.keyCode);  
  if(selectedObjs.length == 0) {
    switch(e.keyCode) {
      case 38: //up
        chgval('zoom',-1);
        return false;
        break;
      case 40: //down
        chgval('zoom',1);
        return false;
        break;
      case 37: //left
        chgval('delta',30);
        return false;
        break;
      case 39: //right
        chgval('delta',-30);
        return false;
        break;
    }
  } else {
    var angleDelta = 0;
    var xDelta = 0;
    var yDetla = 0;
    switch(e.keyCode) {
      case 38: //up
        yDetla = -0.1;
        catchKeyPress = false;
        break;
      case 40: //down
        yDetla = 0.1;
        catchKeyPress = false;
        break;
      case 37: //left
        xDelta = -0.1;
        catchKeyPress = false;
        break;
      case 39: //right
        xDelta = 0.1;
        catchKeyPress = false;
        break;
      case 81: //q
        angleDelta = -0.01;
        catchKeyPress = false;
        break;
      case 87: //w
        angleDelta = 0.01;
        catchKeyPress = false;
        break;
      case 46: //delete key
        canDeleteObject = true;
        break;
      case 74: // j
        canMakeJoint = true;
        break;
      case 82: // r
        canDeleteJoint = true;
        break;
      case 68: // d
        copySelectedObjects();
        pasteClipboardObjects();
        return false;
        break;
    }    
    for(var i in selectedObjs) {
      if(canDeleteObject) {
        deleteObject(selectedObjs[i]);
        catchKeyPress = false;
      } else {
        if(selectedObjs[i] == null) continue;
        selectedObjs[i].x += xDelta;
        selectedObjs[i].y += yDetla;
        selectedObjs[i].angle += angleDelta;
      }
    }
    
    if(selectedObjs.length == 2) {
      if(canMakeJoint) {
        makeJoint(selectedObjs[0],selectedObjs[1],1);
      } else if(canDeleteJoint) {
        deleteJoint(selectedObjs[0],selectedObjs[1]);
      }
    }
  }
  return catchKeyPress;
}

function makeJoint(obj1, obj2, type) {
  if(!typeof(levelData['joints']) === Object) levelData['joints'] = {};
  levelData.joints[obj1.name+obj2.name] = {
    coordType: 2,
    name: obj1.name + obj2.name,
    end1: obj1.name,
    end2: obj2.name,
    type: type,
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  }
}

function deleteJoint(obj1, obj2) {
  if(!typeof(levelData['joints']) === Object) return false;
  var joints = levelData.joints;
  for(var jName in levelData.joints) {
    if((joints[jName].end1 == obj1.name && joints[jName].end2 == obj2.name) ||
       (joints[jName].end2 == obj1.name && joints[jName].end1 == obj2.name)) return(delete(joints[jName]));
  }
  return false;
}

function drawJoints() {
  if(!typeof(levelData['joints']) === Object) return;
  var joints = levelData.joints;
  
  ctx.strokeStyle = "rgba(255,0,255,0.5)";

  for(var jName in joints) {
    var obj1 = levelData.world[joints[jName].end1];
    var obj2 = levelData.world[joints[jName].end2];
    var loc1 = transform(obj1.x,obj1.y,0,0);
    var loc2 = transform(obj2.x,obj2.y,0,0);
    ctx.beginPath();
    ctx.moveTo(loc1.x,loc1.y);
    ctx.lineTo(loc2.x,loc2.y);
    ctx.closePath();
    ctx.stroke();
  }
  
}

function deleteJointByObj(obj) {
  if(!typeof(levelData['joints']) === Object) return false;
  var joints = levelData.joints;
  for(var jName in levelData.joints) {
    if(joints[jName].end1 == obj.name || joints[jName].end2 == obj.name) delete(joints[jName]);
  }
  return true;
}


function copySelectedObjects() {
  clipboardObjs = [];
  for(var i in selectedObjs) {
    clipboardObjs.push(selectedObjs[i])
  }
}

function pasteClipboardObjects() {
  selectedObjs = [];
  for(var i in clipboardObjs) {
    var obj = clipboardObjs[i];
    selectedObjs.push(
      addNewObject(obj.definition, obj.x - 5, obj.y - 5, clipboardObjs[i].angle)
    )
  }
}

function canvasKeyUp(e) {
  ctrlKeyPressed = false;
}

function deleteObject(obj) {
  var definition = obj.definition;
  if(delete(levelData.world[obj.name]) == false) {
    alert("删除" + name + "时发生错误，请联系网站管理员(1204074991@qq.com")
  } else {
    deleteJointByObj(obj);
    levelData.counts[definition] -= 1;
    if(levelData.counts[definition] == 0) delete(levelData.counts[definition]);
  }
}

function drawCanvas() {
  boxZoom = parseInt(document.getElementById('zoom').value);
  boxDelta = parseInt(document.getElementById('delta').value);
  clearScreen();

  if(levelData != null && levelData.world) {
    for(var obname in levelData.world) {
      drawObject(levelData.world[obname]);
    }
    drawJoints();
    drawGround();
  }
}

function drawGround() {
  var y = levelData.world.ground.y;
  var theme = levelData.theme.toUpperCase().replace(/[A-Z]+(\d+)/,"FOREGROUND_$1_LAYER_1").replace(/8/,7);
  //alert(theme);
  var img = images.grounds.img;
  var iD = images.grounds[theme];
  var tr = transform(0,y,iD.width,iD.height);
  //console.info(imageData.img);
  ctx.save();
  ctx.translate(0,(MaxY-54)+(y*(boxZoom/ratio)));  
  for(var w = 0; w < MaxX; w += tr.w) {
    //console.info(imageData.img);
    ctx.drawImage(img, iD.pvrX, iD.pvrY, iD.width, iD.height,
                       w, 0, tr.w, tr.h);
    //ctx.drawImage(img,w,y*boxZoom,imageData.width,imageData.height);
    //console.info(img,w,tr.y,w,w)
  }
  ctx.restore();
}

function transform(objx,objy,width,height) {
  var ret = {};
  ret.x = boxDelta + (objx * boxZoom);
  ret.y = (MaxY - ydelta) + objy * boxZoom;
  ret.w = width * (boxZoom / ratio);
  ret.h = height * (boxZoom / ratio);
  return ret;
}

function untransform(cx,cy) {
  var ret = {};
  ret.x = (cx - boxDelta)/boxZoom;
  ret.y = (cy - (MaxY-ydelta))/boxZoom;
  return ret;
}


function drawObject(obj) {
  var angle = obj.angle;
  var sprd = spriteData[obj.definition];
  if(!sprd) return;
  
  var tr = transform(obj.x, obj.y, sprd.data.width, sprd.data.height); 
  
  ctx.save();
  ctx.translate(tr.x,tr.y);      
  ctx.rotate(angle);
  
  with(sprd) {
    ctx.drawImage(img, data.pvrX, data.pvrY, data.width, data.height,
                  -tr.w/2, -tr.h/2, tr.w, tr.h
    );
  }
  for(var i in selectedObjs) {
    if(obj == selectedObjs[i]) {
      ctx.fillStyle = "rgba(255,0,0,0.5)";
      ctx.fillRect(-tr.w/2,-tr.h/2,tr.w,tr.h);
    }
  }
  //ctx.drawImage()
  ctx.restore();
}
      
function chgval(id,i) {
  if(parseInt(d.getElementById(id).value)+i == 1) return;
  d.getElementById(id).value = parseInt(d.getElementById(id).value)+i;

}

function clearScreen() {
  cvs.clear = true;
  ctx.clearRect(0,0,MaxX,MaxY);
}
