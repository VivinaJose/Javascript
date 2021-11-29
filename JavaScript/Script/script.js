function autofill(){
    if(document.getElementById("check").checked==true){
        var dum=document.getElementById("caddress").value;
        var copydum= dum;
        document.getElementById("paddress").value=copydum;
         
        var dum1=document.getElementById("district").value;
        var copydum1= dum1;
        document.getElementById("city").value=copydum1;

        var dum2=document.getElementById("pincode").value;
        var copydum2= dum2;
        document.getElementById("pin").value=copydum2;

        var dum3=document.getElementById("state").value;
        var copydum3= dum3;
        document.getElementById("pstate").value=copydum3;


    }

}



function validate(){

//First name 
    var fname= document.getElementById("name").value;
    if(fname.trim()=="")
    {
          document.getElementById("name").style.border="2px solid red";
          document.getElementById("name2").style.visibility="visible";

         
    }
    else{
        var regx=/^[A-Z]{1}[a-z A-Z]+$/;
        if(regx.test(fname))
        {
            document.getElementById("name").style.border="1px solid black";
            document.getElementById("name1").style.visibility="hidden";
            document.getElementById("name2").style.visibility="hidden";
            
        }
        else{
            document.getElementById("name").style.border="2px solid red";
            document.getElementById("name1").style.visibility="visible";
            
        }
    }


//FATHER NAME
    var faname= document.getElementById("fathername").value;
    if(faname.trim()=="")
    {
          document.getElementById("fathername").style.border="2px solid red";
          document.getElementById("fathername2").style.visibility="visible";
        
    }
    else{
        var regx=/^[A-Z]{1}[a-z A-Z]+$/;
        if(regx.test(faname))
        {
            document.getElementById("fathername").style.border="1px solid black";
            document.getElementById("fathername1").style.visibility="hidden";
            document.getElementById("fathername2").style.visibility="hidden";
           
        }
        else{
            document.getElementById("fathername").style.border="2px solid red";
            document.getElementById("fathername1").style.visibility="visible";
            
        }
    }


//EMAIL
    var mail= document.getElementById("email").value;
    if(mail.trim()=="")
    {
          document.getElementById("email").style.border="2px solid red";
          document.getElementById("email2").style.visibility="visible";
          

    }
    else{
        var regx=/^(([a-z A-z 0-9 \. -]+)@([a-z A-Z 0-9]+).([a-z A-Z]{1,20})(.[a-z A-Z 0-9 \. -]))$/;
        if(regx.test(mail))
        {
            document.getElementById("email").style.border="1px solid black";
            document.getElementById("email1").style.visibility="hidden";
            document.getElementById("email2").style.visibility="hidden";
           
        }
        else{
            document.getElementById("name").style.border="2px solid red";
            document.getElementById("email1").style.visibility="visible";
            
        }
    }

//Date of birth

    var birth= document.getElementById("dob").value;
    if(birth.trim()=="")
    {
          document.getElementById("dob").style.border="2px solid red";
          document.getElementById("dob2").style.visibility="visible";
          

    }
    else{
        var regx=/([0-3])([0-9]-([0-1])([0-9])-([0-2])([0-9]){3})$/;
        if(regx.test(birth))
        {
            document.getElementById("dob").style.border="1px solid black";
            document.getElementById("dob1").style.visibility="hidden";
            document.getElementById("dob2").style.visibility="hidden";
           
        }
        else{
            document.getElementById("dob").style.border="2px solid red";
            document.getElementById("dob1").style.visibility="visible";
            
        }
    }


//MOBILE NUMBER
    var numb= document.getElementById("mobile").value;
    if(numb.trim()=="")
    {
          document.getElementById("mobile").style.border="2px solid red";
          document.getElementById("mobile2").style.visibility="visible";
          

    }
    else{
        var regx=/^[6-9]{1}[0-9]{9}$/;
        if(regx.test(numb))
        {
            document.getElementById("mobile").style.border="1px solid black";
            document.getElementById("mobile1").style.visibility="hidden";
            document.getElementById("mobile2").style.visibility="hidden";
           
        }
        else{
            document.getElementById("mobile").style.border="2px solid red";
            document.getElementById("mobile1").style.visibility="visible";
            
        }
    }


//CURRENT ADDRESS
    var addr= document.getElementById("caddress").value;
    if(addr.trim()=="")
    {
          document.getElementById("caddress").style.border="2px solid red";
          document.getElementById("caddress2").style.visibility="visible";
          

    }
    else{
        var regx=/^[a-z A-Z 0-9 \. - \w]+$/;
        if(regx.test(addr))
        {
            document.getElementById("caddress").style.border="1px solid black";
            document.getElementById("caddress1").style.visibility="hidden";
            document.getElementById("caddress2").style.visibility="hidden";
           
        }
        else{
            document.getElementById("caddress").style.border="2px solid red";
            document.getElementById("caddress1").style.visibility="visible";
            
        }
    }



//DISTRICT
    var dst= document.getElementById("district").value;
    if(dst.trim()=="")
    {
          document.getElementById("district").style.border="2px solid red";
          document.getElementById("district2").style.visibility="visible";
          

    }
    else{
        var regx=/^[a-z]{1}[a-z A-Z \.]+$/;
        if(regx.test(dst))
        {
            document.getElementById("district").style.border="1px solid black";
            document.getElementById("district1").style.visibility="hidden";
            document.getElementById("district2").style.visibility="hidden";
           
        }
        else{
            document.getElementById("district").style.border="2px solid red";
            document.getElementById("district1").style.visibility="visible";
            
        }
    }



//PINCODE
var code= document.getElementById("pincode").value;
if(code.trim()=="")
{
      document.getElementById("pincode").style.border="2px solid red";
      document.getElementById("pincode2").style.visibility="visible";
      

}
else{
    var regx=/^[^0]{1}[0-9]{5}$/;
    if(regx.test(code))
    {
        document.getElementById("pincode").style.border="1px solid black";
        document.getElementById("pincode1").style.visibility="hidden";
        document.getElementById("pincode2").style.visibility="hidden";
       
    }
    else{
        document.getElementById("pincode").style.border="2px solid red";
        document.getElementById("pincode1").style.visibility="visible";
        
    }
}  


}
    
 
    


