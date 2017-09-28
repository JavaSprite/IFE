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
	}
}
/*******创建新节点**********/
function create(){
	var span=document.createElement("span");
	span.style.fontWeight="600";
	return span;
}
/*******字符串转为数组**********/
function toArray(str){
	str=str.replace(/\s|,|、|，/g," ");
	str=str.split(" ");
	return str;
}
/*******按键功能函数封装**********/
var span1=[];
var span2=[];
var button={
	leftIn:function(){
		var value=document.getElementById("text").value;
		var array = document.getElementById("array");
		value= toArray(value);
		for(var i=0;i<value.length;i++){
		    span1[i]=create();
		    span1[i].innerHTML=value[i];
		    array.insertBefore(span1[i],array.firstChild);
/*******这里是个闭包**********/
            span1[i].addEventListener("click",(function(i){
            	return function(){
            		array.removeChild(span1[i]);
            	}

            })(i),false);
		}
		
	},
	rightIn:function(){
		var value=document.getElementById("text").value;
		var array = document.getElementById("array");
		value= toArray(value);
		for(var i=0;i<value.length;i++){
		    span2[i]=create();
		    span2[i].innerHTML=value[i];
		    array.appendChild(span2[i]);
		    /*******这里是个闭包**********/
            span2[i].addEventListener("click",(function(i){
            	return function(){
            		array.removeChild(span2[i]);
            	}

            })(i),false);
		}
	},
	leftOut:function(){
		var array = document.getElementById("array");
		alert("删除元素："+array.firstChild.innerHTML);
		array.removeChild(array.firstChild);
	},
	rightOut:function(){
		var array = document.getElementById("array");
		alert("删除元素："+array.lastChild.innerHTML);
		array.removeChild(array.lastChild);
	},
	searchBtn:function(){
		var value=document.getElementById("inputText").value;
		var childNodes=document.getElementById("array").childNodes;
		for(var k=0;k<childNodes.length;k++){
			if(childNodes[k].innerHTML==value){
				childNodes[k].setAttribute("style","background-color:green;"+"fontWeight:800;");
			}
		}
	}
}
/*******函数调用**********/
function click(){
	document.getElementById("left-in").onclick=button.leftIn;
	document.getElementById("right-in").onclick=button.rightIn;
	document.getElementById("left-out").onclick=button.leftOut;
	document.getElementById("right-out").onclick=button.rightOut;
	document.getElementById("searchBtn").onclick=button.searchBtn;
}
addonloadEvent(click);