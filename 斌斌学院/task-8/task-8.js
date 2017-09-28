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
function action(value,arr){
  var i=0; 
        while(i<value.childNodes.length){
            if(value.childNodes[i].nodeType==1){
                arr.push(value.childNodes[i]);
            }   
            i++;
    
        }
}
/*******前序序遍历**********/
function preOrder(node,arr){
  if (node!=null) {
    arr.push(node);
    var num = node.children;
    for (var i = 0; i < num.length; i++) {
      preOrder(num[i],arr);
    }
  }
}
/*******后序序遍历**********/
function postOrder(node,arr){
  if (node!=null) {
    var num = node.children;
    for (var i = 0; i < num.length; i++) {
      postOrder(num[i],arr);
    }
    arr.push(node);
  }
}

function changeSearch(arr,textvalue){
  var i=0;
  pause=setInterval(function(){
    if(i>=arr.length){
      alert("没有找到该元素");
      arr[length].setAttribute("style","background-color:white;"+"transform:scale(1);"+"border-radius:0px;");
      clearInterval(pause);

    }
    else{
      if(i>=1){
        arr[i-1].setAttribute("style","background-color:white;"+"transform:scale(1);"+"border-radius:0px;");
      }
      arr[i].setAttribute("style","background-color:green;"+"transform:scale(1.1);"+"border-radius:10px;");
      if(arr[i].innerText==textvalue){
        clearInterval(pause);
        alert("找到了");
      }
      i++;
    }
  },500);
}


function changeColor(arr){
  var i=0;
  pause=setInterval(function(){
    if(i>arr.length){
      arr[length-1].setAttribute("style","background-color:white;"+"transform:scale(1);"+"border-radius:0px;");
      clearInterval(pause);
    }
    else{
      if(i>=1){
        arr[i-1].setAttribute("style","background-color:white;"+"transform:scale(1);"+"border-radius:0px;");
      }
      arr[i].setAttribute("style","background-color:green;"+"transform:scale(1.1);"+"border-radius:10px;");
      i++;
    }
  },500);
}

function dose(fn){
  var root=document.getElementById("super");
  var arr=[];
  fn(root,arr);
  changeColor(arr);
}
function search(fn){
  var textvalue=document.getElementById("text").value;
  var root=document.getElementById("super");
  var arr=[];
  fn(root,arr);
  changeSearch(arr,textvalue);
}

function start(){
  document.getElementById("font").onclick=function(){
    dose(preOrder);
  };
  document.getElementById("last").onclick=function(){
    dose(postOrder);
  };
  document.getElementById("search").onclick=function(){
    search(preOrder);
  };
}
addonloadEvent(start);