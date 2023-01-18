var array=[];
function stud() {
   
 
    var rollno = document.getElementById("x1").value;//1
    var name = document.getElementById("x2").value;//2
    var address = document.getElementById("x3").value;//3
    var location = document.getElementById("x4").value;//4
    var city = document.getElementById("x5").value;//5
    var mob = document.getElementById("x6").value;//6
    var email= document.getElementById("x7").value; //7

    var exp_roll = /^[0-9][0-9]{5,}$/;//roll
    var exp_name = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;///name 
    var exp_Address = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;//adress
    var exp_Location = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;//loc
    var exp_city = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;//city
    var exp_mob = /^[6-9][0-9]{9}$/;//mob
    var exp_email = /^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])@([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;

    num1 = parseInt(rollno);///converting to number
    num2 = parseInt(mob);///converting to number
        

    if (!exp_roll.test(num1)) {
        alert("Enter Roll no ");
    }//1
    if (!exp_name.test(name)) {
        alert("Enter Name ")
    }//2
    if (!exp_Address.test(address)) {
        alert("Enter Add")
    }//3
    if (!exp_Location.test(location)) {
        alert("Location");
    }//4
    if (!exp_city.test(city)) {
        alert("Enter City");
    }//5
    if (!exp_mob.test(num2)) {
        alert("Mob Number 9digits");
    }//6
    if (!exp_mob.test( exp_email )) {
        alert("Mob Number 9digits");
    }//7
    else {
       
        var record = {
                r:num1,
                na:name,
                add:address,
                l:location,
                c:city,
                m:num2,
                e:email
            }
            array[array.length]=record;
var k="";
for(val of array){
        
                        k = k + `
                         <tr>
                             <td>${num1}</td>
                             <td>${name}</td>
                             <td>${address}</td>
                             <td>${location}</td>
                             <td>${city}</td>
                             <td>${num2}</td>
                 
                         </tr>
                     `
}
       document.getElementById("result").innerHTML = k;

    }


  }  // document.getElementById("xyz").innerHTML = 9000;

    

