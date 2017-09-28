/*******加载函数**********/
function addonloadEvent(func){
  var oldonload=window.onload;
  if(typeof window.onload !='function'){
    window.onload=func;
  }
  else{
    window.onload=function(){
      oldonload();
      func();
    }
  };
}

function disChange(){
  var In=document.getElementById("In");
  var Out=document.getElementById("Out");
  var inputText=document.getElementById("inputText");
  var Student=document.getElementById("Student");
  In.addEventListener("change",function(){
      inputText.setAttribute("style","display:none;");
      Student.setAttribute("style","display:block;");
  },false);
  Out.addEventListener("change",function(){
      inputText.setAttribute("style","display:block;");
      Student.setAttribute("style","display:none;");
  },false);
}
function modify(){
  var sec=document.getElementById("province");
  var index=sec.selectedIndex;
  var value=sec.options[index].value;
  var data=[["北京大学","清华大学","中科院","中国人民大学"],["复旦大学","上海交通大学","华东理工大学","同济大学"],["华南理工大学","中山大学","哈佛大学","耶鲁大学"],["天津大学","南开大学","华北理工大学","麻省理工学院"]];
  var school=document.getElementById("school");
  var arr=[];
  while(school.hasChildNodes()){
    school.removeChild(school.firstChild);
  }
  switch(value){
    case "B":arr=data[0];
    break;
    case "S":arr=data[1];
    break;
    case "G":arr=data[2];
    break;
    case "T":arr=data[3];
    break;
  }
  for(var i=0;i<arr.length;i++){
    var option=document.createElement("option");
    option.innerHTML=arr[i];
    school.appendChild(option);
  }
}

function selection(){
  var sec=document.getElementById("province");
  sec.addEventListener("change",modify,false);

}


addonloadEvent(disChange);
addonloadEvent(selection);