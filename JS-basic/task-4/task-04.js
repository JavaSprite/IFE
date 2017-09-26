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
	var div=document.createElement("div");
	div.setAttribute("style","width:50px;"+"height:50px;"+"background-color:red;"+"color:black"+"font-weight:600;"+"float:left;"+"margin:10px;");
	return div;
}
/*******按键功能函数封装**********/
var button={
	leftIn:function(){
		var value=document.getElementById("inputText").value;
		var div=create();
		div.innerHTML=value;
		var array = document.getElementById("array");
		array.insertBefore(div,array.firstChild);
		div.addEventListener("click",function(){
            array.removeChild(div);
		},false);
	},
	rightIn:function(){
		var value=document.getElementById("inputText").value;
		var div=create();
		div.innerHTML=value;
		var array = document.getElementById("array");
		array.appendChild(div);
		div.addEventListener("click",function(){
            array.removeChild(div);
		},false);
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
	}
}
/*******函数调用**********/
function click(){
	document.getElementById("left-in").onclick=button.leftIn;
	document.getElementById("right-in").onclick=button.rightIn;
	document.getElementById("left-out").onclick=button.leftOut;
	document.getElementById("right-out").onclick=button.rightOut;
}
addonloadEvent(click);