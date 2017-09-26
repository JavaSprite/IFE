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
function create(value){
	var div=document.createElement("div");
	div.setAttribute("style","width:4%;"+"background-color:red;"+"color:black"+"font-weight:600;"+"float:left;"+"margin:10px;");
	div.style.height=value*5+"px";
	return div;
}
/*******按键功能函数封装**********/
var arr=[];
var button={
	leftIn:function(){
		var value=document.getElementById("inputText").value;
		if(value>=10&&value<=100&&arr.length<=60){
			var div=create(value);
			arr.unshift(value);
		    div.innerHTML=value;
		    var array = document.getElementById("array");
		    array.insertBefore(div,array.firstChild);
		    div.addEventListener("click",function(){
                array.removeChild(div);
                arr.splice(arr.indexOf(div.innerHTML),1)
		    },false);
		}
			else{
				alert("请输入10-100之间的数字&&不要超过60个数字哦，超过也没关系啦，你又输不进去！");
			}
	},
	rightIn:function(){
		var value=document.getElementById("inputText").value;
		if(value>=10&&value<=100&&arr.length<=60){
			var div=create(value);
			arr.push(value);
		    div.innerHTML=value;
		    var array = document.getElementById("array");
		    array.appendChild(div);
		    div.addEventListener("click",function(){
               array.removeChild(div);
               arr.splice(arr.indexOf(div.innerHTML),1)
		    },false);
		}
			else{
				alert("请输入10-100之间的数字&&不要超过60个数字哦，超过也没关系啦，你又输不进去！");
			}
	},
	leftOut:function(){
		var array = document.getElementById("array");
		alert("删除元素："+array.firstChild.innerHTML);
		array.removeChild(array.firstChild);
		arr.shift();
	},
	rightOut:function(){
		var array = document.getElementById("array");
		alert("删除元素："+array.lastChild.innerHTML);
		array.removeChild(array.lastChild);
		arr.pop();
	},
	upSort:function(){
		var array = document.getElementById("array");
		while(array.hasChildNodes()){
			array.removeChild(array.firstChild)
		}
		arr.sort(function(a,b){
			return a-b;
		})
		for(var i = 0; i<arr.length;i++){
			var div=create(arr[i]);
			div.innerHTML=arr[i];
			array.appendChild(div);
		}

	},
	/*******待解决问题！！！！！！排序后，不能通过点击删除元素**********/
	downSort:function(){
		var array = document.getElementById("array");
		while(array.hasChildNodes()){
			array.removeChild(array.firstChild)
		}
		arr.sort(function(a,b){
			return b-a;
		})
		for(var i = 0; i<arr.length;i++){
			var div=create(arr[i]);
			div.innerHTML=arr[i];
			array.appendChild(div);
		}

	}

}
/*******函数调用**********/
function click(){
	document.getElementById("left-in").onclick=button.leftIn;
	document.getElementById("right-in").onclick=button.rightIn;
	document.getElementById("left-out").onclick=button.leftOut;
	document.getElementById("right-out").onclick=button.rightOut;
	document.getElementById("up").onclick=button.upSort;
	document.getElementById("down").onclick=button.downSort;
}
addonloadEvent(click);
