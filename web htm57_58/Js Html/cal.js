function cal()
{
          var  Number=document.getElementById("x1").value;
          num=parseInt(Number);
        //   document.getElementById("result").innerHTML= x;
          if(Number==""||Number==0)
         {
        alert("Plzz Pass the  validValue")
         }
        else
         {
                  var k="";
var e=num;
var o=num;
var n=num;
var prime=num;

var x="";
    if(e%2==0)
    {
    x="Even no"
    }else{
    x="Not even"
    }

    var a="";
    if(o%2!=0)
    {
         a="Odd no"
    }else{
         a="Not Odd"
    }


    var R=num;
    var count=0;
    var y= parseInt(count)
while(R>0)
{
     R=Math.floor(R/10);
    count= Math.floor(count+1);
      
} 
console.log(count);



var reminder=0;
var rev=0;
       
       while(a>0)
     {
          reminder =n%10;
        rev=rev*10+reminder;
        n=Math.floor(n/10);
       }

       console.log(rev);




    k=k + `
                <tr>
                    <td>${num}</td>
                    <td>${x}</td>
                    <td>${a}</td>
                    <td>${count}</td>
                    <td>${rev}</td>
        
                </tr>
            `
    
        document.getElementById("result").innerHTML= k;

        // document.getElementById("xyz").innerHTML = 9000;

    }
}
