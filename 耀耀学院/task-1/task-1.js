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

function test(){
  var value=document.getElementById("text").value;
  value=value.split("");
  for(var i=0,L=0;i<value.length;i++){
    var code=value[i].charCodeAt(0);
    if(code>=0x00&&code<=0xFF){
      L+=1;
    }
    else{
      L+=2;
    }
  }
  if(L>=4&&L<=16){
    document.getElementById("result").innerHTML="输入正确!";
  }
  else{
    document.getElementById("result").innerHTML="必填，长度为4~16个字符"
    document.getElementById("result").style.color="red";
  }

}
function btn(){
  document.getElementById("btn1").addEventListener("click",test,false);
}
addonloadEvent(btn);