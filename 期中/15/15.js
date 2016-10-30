window.onload=function ()
{
	var aImg=document.getElementsByTagName('img');
	var oDiv1=document.getElementById('right1');
	var oDiv2=document.getElementById('right2');
	var aA=document.getElementsByTagName('a');
	
	
	aImg[1].onmouseover=function ()
	{
		aImg[1].src='../images/15/resum1.jpg';
		aImg[0].src='../images/15/job2.jpg';
		oDiv1.style.display='none';
		oDiv2.style.display='block';		
	};
	
	aImg[0].onmouseover=function ()
	{
		aImg[1].src='../images/15/resum2.jpg';
		aImg[0].src='../images/15/job1.jpg';
		oDiv1.style.display='block';
		oDiv2.style.display='none';		
	};
	
	aA[0].onclick=function ()
	{
		window.open('/E:/JavaScript与jQuery/期中/12/12.html');
	};
	
};