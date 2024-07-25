let d = document.getElementById("main");


function onSubmit(){
    
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let g=document.getElementById("m");

    let obj={};
    if(name.value !=="" && age.value !==""  && g.value!==""){
        let gender="";
        if(m.checked) {
            gender = "Male";
        } else if(f.checked) {
            gender = "Female";
        }
        obj = {
            name:name.value,
            age:age.value,
            g: gender
        }

       localStorage.setItem("details", JSON.stringify(obj));
       name.value="";
       age.value ="";
       g.value="";
    }
    let d = localStorage.getItem("details");
    if(d) {
        window.location.href="./cmplt.html";
    }
   
}
   