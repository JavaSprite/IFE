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


function inOrder(node,arr){
   	if(node!==null){
	inOrder(node.firstChild,arr);
       arr.push(node);
	inOrder(node.lastChild,arr);
    }
}

function preOrder(node,arr){
   	if(node!==null){
   	arr.push(node);
	inOrder(node.firstChild,arr);
	inOrder(node.lastChild,arr);
    }
}
function postOrder(node,arr){
   	if(node!==null){
	inOrder(node.firstChild,arr);
	inOrder(node.lastChild,arr);
    arr.push(node);
    }
}

function changeColor(arr){
	var i=0;
	pause=setInterval(function(){
		if(i>arr.length-1){
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
    var root=document.getElementById("root");
	var arr=[];
	fn(root,arr);
	changeColor(arr);
}

function start(){
	document.getElementById("middle").onclick=function(){
		dose(inOrder);
	};
	document.getElementById("front").onclick=function(){
		dose(preOrder);
	};
	document.getElementById("last").onclick=function(){
		dose(postOrder);
	};
}
addonloadEvent(start);