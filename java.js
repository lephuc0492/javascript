console.log("Chào a e");
function binhphuong(x)
{
	return x*x;
}


function tinhtheky(y)
{
	return Math.ceil(y/100);
}
function tinhtheky3() 
{
  var x = document.getElementById("fname").value;
  document.getElementById("demo").innerHTML = Math.ceil(x/100);
}
function binhphuong1()
{
  var x = document.getElementById("fname1").value;
  document.getElementById("demo1").innerHTML = x*x;
}
