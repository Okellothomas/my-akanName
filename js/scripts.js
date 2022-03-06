// obtain the date from the form html.

function getUserDate(){
    var getdate = document.getElementById("getUserDate").value;
    return getdate;
}

function getNumber(){
    var dd = parseInt(getdate.substr(0, 1));
    var mm = parseInt(getdate.substr(2, 4));
    var cc = parseInt(getdate.substr(5, 7));
    var yy = parseInt(getdate.substr(8, 9));

    if(dd <= 0 || dd > 31 && mm <= 0 || mm > 12){
        alert("Invalid date or month");
    }else{
        var dayOfWeek= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

        if(dayOfWeek == 0){
            alert("Your Akan name is Kwasi");
        } else if(dayOfWeek == 1){
            alert("Your Akan name is Kwadwo");
        }else if (dayOfWeek == 2){
            alert("Your Akan name is Kwebena");
        }else if(dayOfWeek == 3){
            alert("Your Akan name is Kwaku");
        }else if(dayOfWeek == 4){
            alert("Your Akan name is Yaw");
        }else if(dayOfWeek == 5){
            alert("Your Akan name is Kofi");
        } else if(dayOfWeek == 6){
            alert("Your Akan name is Kwame");
        }else{
            alert("Do not include / or . or any special character in your input");
        }
    }

}