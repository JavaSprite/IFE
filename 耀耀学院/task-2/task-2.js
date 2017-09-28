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
function output(Name,Text,Color){
  document.getElementById(Name).innerHTML=Text;
  document.getElementById(Name).style.color=Color;
}
var Arrary=[];
var testInput={
  /****测试名称*****/
  name:function(){  
      var nameText=document.getElementById("nameText").value;
      nameText=nameText.split("");
      for(var i=0,L=0;i<nameText.length;i++){
        var code=nameText[i].charCodeAt(0);
        if(code>=0x00&&code<=0xFF){
          L+=1;
        }
        else{
          L+=2;
        }
      }
      if(L>=4&&L<=16){
        output("name","输入正确!","green");
        Arrary[0]=1;
      }
      else{
        output("name","必填，长度为4~16个字符!","red");
        Arrary[0]=0;
      }
  },
   /****测试邮箱*****/
  Email:function(){
    var mailText=document.getElementById("mailText").value;
    var Reg=/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
    if(Reg.test(mailText)){
      output("email","邮箱可用！","green");
      Arrary[1]=1;
    }
    else{
      output("email","请输入正确的邮箱","red");
      Arrary[1]=0;
    }
  },
  /****测试密码*****/
  Password:function(){
    var passwordText=document.getElementById("passwordText").value;
    passwordText=passwordText.split("");
    if(passwordText.length>6&&passwordText.length<10){
      output("password","密码安全性较低！","green");
      Arrary[2]=1;
    }
    else if(passwordText.length>=10&&passwordText.length<=16){
      output("password","密码安全性中等！","green");
      Arrary[2]=1;
    }
    else if(passwordText.length>16){
      output("password","密码安全性高！","green");
      Arrary[2]=1;
    }
    else{
      output("password","请输入6位字符以上密码！","red");
      Arrary[2]=0;
    }

  },
    /****测试确认密码*****/
  check:function(){
    var passwordText=document.getElementById("passwordText").value;
    var checkPasswordText=document.getElementById("checkPasswordText").value;
    if(passwordText==checkPasswordText&&passwordText!=""){
      output("checkPassword","确认成功！","green");
      Arrary[3]=1;
    }
    else{
      output("checkPassword","请再正确输入密码！","red");
      Arrary[3]=0;
    }

  },
      /****测试手机号*****/
  Telephone:function(){
    var telephoneText=document.getElementById("telephoneText").value;
    telephoneText=telephoneText.split("");
    if(telephoneText.length==11){
      output("telephone","手机号码可用！","green");
      Arrary[4]=1;
    }
    else{
      output("telephone","请正确输入手机号码！","red");
      Arrary[4]=0;
    }
  },
  /****测试提交*****/
  submit:function(){
    var index=0;
    for(var i=0;i<Arrary.length;i++){
      if(Arrary[i]!=1){
        alert("第"+(i+1)+"项填写错误，请重新填写！");
        break;
      }
      else{
        index++;
      }

    }
    if(index==5){
      alert("提交成功");
    }
    else{
      alert("信息未正确填写，请填写完整");
    }
    
  }

}

function Event(){
  document.getElementById("nameText").addEventListener("blur",testInput.name,false);
  document.getElementById("mailText").addEventListener("blur",testInput.Email,false);
  document.getElementById("passwordText").addEventListener("blur",testInput.Password,false);
  document.getElementById("checkPasswordText").addEventListener("blur",testInput.check,false);
  document.getElementById("telephoneText").addEventListener("blur",testInput.Telephone,false);

  document.getElementById("Button").addEventListener("click",testInput.name,false);
  document.getElementById("Button").addEventListener("click",testInput.Email,false);
  document.getElementById("Button").addEventListener("click",testInput.Password,false);
  document.getElementById("Button").addEventListener("click",testInput.check,false);
  document.getElementById("Button").addEventListener("click",testInput.Telephone,false);
  document.getElementById("Button").addEventListener("click",testInput.submit,false);
}
addonloadEvent(Event);