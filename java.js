function bai3_CatChuoi(x)
{
	return x.slice(0,9) + "..."

}
function bai4_VietHoaKyTuDau(x)
{
	return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() //charAt: get ra ky tu dau, slice cat chuoi thanh 2 phan
}
function bai5_MinFromArray(x)
{
	var x = [];
	return x.sort(function(a, b){return a-b})[0]; 

}
function bai6_InTenHocVienAbc(x)
{
	x = x.sort();
document.write(x.join().replace(/,/g, "<br>")); //ham join bien 1 arr = 1 string
}
function inTenHocVienAbcC2(x)
{
	for (var i = 0; i <= 4; i+=1)
	{
		document.write(x[i] + "<br>");
	}
}
function inTenHocVienAbcC3(x)
{
	var i = 0;
	while (i <= 4)
	{
		document.write(x[i] + "<br>");
		i++;
	}
}
function tuoi()
{
	for ( var i = 0; i < 18; i = prompt("Nhap tuoi vao:"))
	{
		console.log(i);
	}
}
function loaiTru(x)
{
	for (var i = 0; i <= 9; i++)
	{
		if (i == x) {
			continue;		//đến giá tri = x nó sẽ bỏ qua và tiếp tục chạy giá trị tiếp theo
		}
		console.log(i);
	}
/*	return i; 					//se có output = 10 vì đến khi i = 10 hàm for dừng, chạy tiếp đến return i = 10;
*/
}
function loaiTru2(x)
{
	for (var i = 0; i <= 9; i++)
	{
		if (i != x) {			//!= để loại trừ TH x ra output là break còn các TH khác bt
			break;			
		}
		console.log(i);
	}
/*	return i; 					//se có output = 10 vì đến khi i = 10 hàm for dừng, chạy tiếp đến return i = 10;
*/
}
										//Vòng lặp - Giải bài tập về nhà
										function bai1_CoppyString(x)
										{
											for (var i = 0; i <= 8; i++) {
												console.log(x + '-')
												document.write(x + '-')
											}
return document.write(x);			//lần cuối cùng là lần vòng lặp for dừng lại tại số 9
}
/////////////////////////////////////////////BÀI TẬP PHẦN VÒNG LẶP/////////////////////////////////
/////////////////////////////////////////////BÀI TẬP PHẦN VÒNG LẶP/////////////////////////////////
/////////////////////////////////////////////BÀI TẬP PHẦN VÒNG LẶP/////////////////////////////////
function bai1_CoppyStringRepeat(x)
{
	y = x.toString() + '-';
	var y = y.repeat(9);				//repeat chỉ chạy với dạng x = string, nếu ở dạng số thì bó tay >> thêm 1 hàm 
// convert
return y + x;
}
//factorial: Tức giai thừa
function bai2_Factorial(x)				// đây cũng là một kiểu lặp đê giải bài giai thừa
{
	if (x==0) {
		return 1;
	}
	return x*bai2_Factorial(x-1);
}
function bai2_FactorialC2(x)				
{
		var z = 1;					//biến z thay đổi qua các mỗi lần lặp >>> ra KQ 
		for (var i = 1; i < x; i++) 
		{
			z = z*(i+1);
		}
		return z;
	}
function bai3_Reserve(x)			//Đảo ngược
{
	x = x.split("");
y = x.reverse();					//Hàm reserve chỉ sử dụng để đảo cho 1 mảng
for (var i = 0; i < y.length	; i++)
{
	console.log(y[i])
}
}
function bai4_SortName(x)
{
	x = x.sort();				//ham sort có function a-b chỉ dùng cho dữ liệu mảng dạng số để so sánh số trước và số sau
	var i = 0;
	while(i < x.length)
	{
		document.write(i+1 + ":"+ x[i] + "<br>");
		i++;
	}
}
function bai4_SortNameC2(x)
{
	x = x.sort();				//ham sort có function a-b chỉ dùng cho dữ liệu mảng dạng số để so sánh số trước và số sau
	var i = 0;
	for (var i = 0; i < x.length; i++)
	{
		document.write(i+1 + ":"+ x[i] + "<br>");
	}
}
function bai5_Surplus(x)			//Số dư
{
	return Array.from(x, y => y%2);				//Sử dụng hàm Array.from để tạo ra 1 mảng mới là y với value là số dư phép
	//phep chia 2
}
function bai6_SoChanSoLe()						
{
	for (var i = 1; i <= 100; i++)
	{
		if (i%2 == 0) 				// Nếu chia cho 2 dư = 0 thì in ra như này
		{
			document.write("<font color = blue>" + i  + "</font>");
		}
		else
		{
			document.write("<font color = red>" + i  + "</font>");
		}
	}
}


////////////////////////////////////////ĐIỀU KIỆN - RẼ NHÁNH 1//////////////////////////////////
function bai1_TestNumber(x,y)
{
	if (typeof x == "number" && typeof y == "number") 
	{
		if (x - y == 0) 
		{
			return "Giá trị x = y";
		}
		else
		{
			return Math.max(x,y)
		}
	}
	else
	{
		return "1 trong 2 biến x, y không phải là number";
	}
}

function bai2_FactorialInteger(x)
{
	if (Number.isInteger(x) == true && x > 0) 				//hàm number is integer xác định xem số phải số nguyên dương khôg
	{
		document.write(bai2_Factorial(x));
	}
	else if(x < 0)
	{
		document.write(x + "<" + "0");
	}
	else
	{
	}
}
function bai3_ArrayByNewArray(x)
{
var y = x.filter(function(value, index, arr){					//filer trong javascripts cho phép lọc các giá trị
	// trong mảng đó tạo ra 1 mạng mới theo điều kiện tương ứng, VD vakue % 2 == 0
    return value % 2 == 0;
    });
	return y.sort(function(a,b) {return b-a;});				// hàm này để sắp xếp theo 1 thứ tự giảm dần từ b >>> a
}

function bai4_Register(user1)
{				

if (typeof(user1["username"]) == "string" && typeof(user1["password"]) == "string" && typeof(user1["confirm"]) == "string") 
{
	if (user1["username"] != "")
	{

		if (user1["username"].length <= 20 && user1["password"].length >= 6 && user1["password"].length <= 32
			&& user1["confirm"] == user1["password"])
		{
			alert("Pass");
		}
		else
		{
			alert("Fail (Kiểm tra lại điều kiện xem có bị vượt quá số lượng hay pass khác confirm" );
		}
	}
	else
	{
			alert("Fail do không nhập username");	
	}
	
}

else
{
	alert("Fail");
}
}
//////////////////////ĐIỀU KIỆN RẼ NHÁNH PART 2///////////////////////
function Bai1_GetDateMonthYear()
{
	var x = new Date();
	document.write(x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear())
}
function Bai1_GetDateMonthYearSeason()
{
	var x = new Date();				// bắt buộc phải là new Date không là ko gọi được các lệnh ngày tháng năm ... đâu
	y = x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
	if (x.getMonth() >= 2 && x.getMonth() <= 4)
	{
			document.write("Mùa xuân " + y);
	}
	else if (x.getMonth() >= 5 && x.getMonth() <= 7) 
	{
			document.write("Mùa hè " + y);			
	}
	else if (x.getMonth() >= 8 && x.getMonth() <= 10) 
	{
			document.write("Mùa thu " + y);			
	}
	else
	{
			document.write("Mùa đông " + y);			
	}
}

function bai2_XepLoaiTheoDiem(x)
{
if (x >= 8.5 && x <= 10)
 {
 	console.log("Điểm A")
 }
 else if (x >= 7 && x < 8.5) 
 {
 	console.log("Điểm B")
 }
 else if (x >= 5.5 && x < 7) 
 {
 	console.log("Điểm C")
 }
 else if (x >= 4 && x < 5.5) 
 {
 	console.log("Điểm D")
 }
 else if (x >= 0 && x < 4) 
 {
 	console.log("Điểm E")
 }
 else
 {
 	console.log("Điền sai x")
 }
}
////////
function bai3_Translate(x)
{
	switch (x)					//khi gán 1 giá trị mặc định cho x thì không ra kết quả >> ko gán var x mặc định
	{
		case "Hello":
			console.log("Tiếng Anh");
			break;
		case "hi":
			console.log("Tiếng Albania");
			break;
		case "안녕하세요.":
			console.log("Tiếng Hàn");
			break;
		case "γεια":
			console.log("Tiếng Hy Lạp");
			break;
		default:
			console.log("Tiếng Việt");					
	}
}
function bai4_TestTrueIndex(x) // x là 1 mảng gồm true và false
{
for (var i = 0; i < x.length; i++)
{
	if (x[i] == "true") 
	{
		console.log("True ở vị trí " + (i + 1));
		break;
	}
}
}
