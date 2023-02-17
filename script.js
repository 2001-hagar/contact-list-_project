var row=1;

function deleteRow(r)
{
var i=r.parentNode.parentNode.rowIndex;
document.getElementById('display').deleteRow(i);
   
}
function myfunction(){
     var Name = document.getElementById("Name").value;
     var phone = document.getElementById("phone").value;
     if (!Name || !phone){
        alert("Please make sure all fields are filled in correctly.");
        return;
     }
     document.getElementById('list_contact').style.display='block';
     document.getElementById('newcontact').style.marginTop=0;
     var x=document.getElementById('display').insertRow(document.getElementById('display').rows.length);
     var y= x.insertCell(0);
     var z= x.insertCell(1);
     var p= x.insertCell(2);
     y.innerHTML=document.getElementById("Name").value;
     z.innerHTML=document.getElementById("phone").value;
     p.innerHTML='<input type="button" value="x" onclick="deleteRow(this)" style="background-color:red; width:20px; left:1500px;"/>';
     row++;
}
   
    

         
      


