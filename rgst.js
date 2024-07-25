let d = document.getElementById("main");


let doctorsList = {
    "physicians": [
        {
        name: "Abhijit Pa",
        degree: "MBBS, MD",
        image: "https://static.vecteezy.com/system/resources/previews/027/308/947/original/doctor-with-ai-generated-free-png.png",
        id: "1"
        },
        {
            name: "Ajahar",
            degree: "MBBS, MD",
            image: "https://img.freepik.com/premium-photo/portrait-confident-male-doctor-standing-with-arms-crossed-hospital-corridor-ai-generated_632984-111.jpg",
            id: "2"
        },

        {
            name: "Katrina",
            degree: "MBBS, MD",
            image: "https://media.licdn.com/dms/image/D4E12AQFYwQ1_cTTvZA/article-cover_image-shrink_720_1280/0/1684330273020?e=2147483647&v=beta&t=ZORQQMOyUicuP10xDvkGXvjQGfBNKBe-8xwGLXh5cMc",
            id: "3"
        },

    ]
}



function getDoctorsDetails(param) {
    let d1 = document.getElementById("doctorList");

    const doctorValue = param.value;
    if(doctorValue === "physicians") {
        let physiciansLst = doctorsList[doctorValue];
        physiciansLst.forEach(p => {

            let mainDiv = document.createElement("div");
            let f = document.createElement("figure");
            let n = document.createElement("figcaption");
            n.innerHTML = p.name + "," +  p.degree;
            let im = document.createElement("img");
            im.src =p.image;
            im.style.height= "150px";
            im.style.width= "150px"
            im.style.borderRadius= "50%";
            let btn =document.createElement("button");
            btn.innerHTML ="Book Appointment";
            btn.style.width= "100px"
            btn.style.height = "40px"
            btn.style.borderRadius ="10px";
            btn.style.cursor ="pointer";
            btn.style.backgroundColor = "green"
            f.appendChild(im);
            f.appendChild(n);
            f.appendChild(btn);

            mainDiv.appendChild(f);
            d1.appendChild(mainDiv);
        });

    } else {
        d1.innerHTML =""
    }
    // alert(param.value);
}


function onSubmit(){
    
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let g=document.getElementById("m");

    let obj={};
    // if(name.value !=="" && age.value !==""  && g.value!==""){
    //     let gender="";
    //     if(m.checked) {
    //         gender = "Male";
    //     } else if(f.checked) {
    //         gender = "Female";
    //     }
    //     obj = {
    //         name:name.value,
    //         age:age.value,
    //         g: gender
    //     }

    //    localStorage.setItem("details", JSON.stringify(obj));
    //    name.value="";
    //    age.value ="";
    //    g.value="";
    // }
    // let d = localStorage.getItem("details");
    // if(d) {
    //     window.location.href="./cmplt.html";
    // }
   
}
   