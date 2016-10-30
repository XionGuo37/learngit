function $(elementId)
{
	return document.getElementById(elementId);		
}

//登录名验证
function checkUser()
{
	var user=$("user").value;
	var userId=$("user_prompt");
	userId.innerHTML=""
	var reg=/^[a-zA-Z][a-zA-Z_]$/;
	if(reg.test(user)==false)
	{
		userId.innerHTML="用户名不正确";
		return false;
	}
	return true;
}

//密码验证
function checkPwd()
{
	var pwd=$("pwd").value;
	var pwdId=$("pwd_prompt");
	pwdId.innerHTML="";
	//var reg=/((?=[\x21-\x7e]+)[^A-Za-z0-9]){6,}$/;
	var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@!~%^&*/]).{6,}$/;
	if(reg.test(pwd)==false)
	{
		pwdId.innerHTML="密码必须同时具备大小写字母、数字、特殊符号，且长度至少为6";
		return false;	
	}
	return true;
}

//确认密码验证
function checkRepwd()
{
	var pwd=$("pwd").value;
	var repwd=$("repwd").value;
	var repwdId=$("repwd_prompt");
	repwdId.innerHTML="";
	if(pwd!=repwd)
	{
		repwdId.innerHTML="两个密码不一致";
		return false;
	}
	return true;	
}

//邮箱验证
function checkEmail()
{
	var email=$("email").value;
	var emailId=$("email_prompt");
	emailId.innerHTML="";
	var reg=/^\w+@\w+\.(com|cn)$/;
	if(reg.test(email)==false)
	{
		emailId.innerHTML="Email格式不正确，例如XXX@XX.com或XXX@XX.cn";	
		return false;
	}
	return true;
}
