function akhanNames(){
    var gender = document.getElementById("gender").value;
    var birthday = document.getElementById("birthday").value;

    akhanArray = [
        ["Sunday" ,"Kwasi" ,"Akosua"]
        ["Monday" ,"Kwado" ,"Adwoa"]
        ["Tuesday" ,"Kwabena" ,"Abenaa"]
        ["Wednesday" ,"Kwaku" ,"Akua"]
        ["Thursday" ,"Yaw" ,"Yaa"]
        ["Friday" ,"Kofi" ,"Afua"]
        ["Saturday" ,"Kwame" ,"Ama"]
    ]

    const d = new Date(birthday);
    let day = d.getDay();
    dayOfTheWeek = akhanArray[day][0];
    maleName = akhanArray[day][1];
    femaleName = akhanArray[day][2];
}
