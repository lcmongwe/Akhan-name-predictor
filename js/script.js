
function formReset(){
    document.getElementById("form_data").reset();
}




function akhanNames(){

    var gender = document.getElementById("gender").value;
    var birthday =document.getElementById("birthday").value;
    
    

    akhanArray = [
        ["Sunday" ,"Kwasi" ,"Akosua"],
        ["Monday" ,"Kwado" ,"Adwoa"],
        ["Tuesday" ,"Kwabena" ,"Abenaa"],
        ["Wednesday" ,"Kwaku" ,"Akua"],
        ["Thursday" ,"Yaw" ,"Yaa"],
        ["Friday" ,"Kofi" ,"Afua"],
        ["Saturday" ,"Kwame" ,"Ama"],
    ];

    const d = new Date(birthday);
    let day = d.getDay();
    let year = d.getFullYear;

    var dayOfTheWeek = akhanArray[day][0];
    var maleName = akhanArray[day][1];
    var femaleName = akhanArray[day][2];
    const output = document.getElementById("message");

    if (gender==""){
        alert("please selet gender");
    } else if (year > 2022){
        alert("you are not born yet");
    }else if (gender == "male"){
        output.innerHTML = "Hey! your Akhan name is " + maleName + " " + "you were born on" + " " + dayOfTheWeek;
    }else if ( gender == "female"){
        output.innerHTML = "Hey! your Akhan name is " + femaleName + " " + "you were born on" + " " + dayOfTheWeek;
    }

 formReset();

}
