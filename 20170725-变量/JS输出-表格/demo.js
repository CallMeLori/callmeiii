/**
 * Created by THINK on 2017/7/25.
 */


document.write("3*3表格");
document.write("<table> " +
      "<tr> <th>姓名</th> " +
      "<th>年龄</th> " +
      "<th>班级</th> </tr> " +
      "<tr> <td></td> <td></td> <td></td> </tr> <tr> <td></td> " +
      "<td></td> <td></td> </tr> " +
      "</table>");
document.write("<br>");


document.write("声明出js的7种变量类型");
document.write("<br>");


document.write("1.字符串");
document.write("<br>");
var name="李大喵";
var Lage="22";
document.write(name + Lage);
document.write("<br>");


document.write("2.数值型");
document.write("<br>");
var a=11;
var b=23;
var sum=a+b;
document.write(a+ "+" +b + "=" +sum);
document.write("<br>");

document.write("3.布尔类型");
var boolOne =true;
var boolTwo =false;
document.write("<br>");

document.write("4.undefined型");
var z;
document.write(z);
 //null类型
var obj1 =null;
document.write(obj1);

//数组类型
var arr = [1,2,3,4,5];
var brr = new Array(["红会","信息","啊啊"]);
document.write(arr);

//对象 类型
var ob = {name:"肚肚", sex:"女",age:"23",hobby:"唱歌",children:["依依","扣扣"],

      dept:{
            'xx':[],'jj':[{ s:123, d:222}]
      }

};

var ob2 = new Object();
ob2.name = "肚肚";
ob2={name:"肚肚"}

document.write(ob2.name);
document.write(ob2["name"]);





