
function getMale(){

    var male_Day = document.getElementById("maleDetails").value;

    ma_day = new Date(male_Day);
    bird_day = ma_day.getDay();

    if (bird_day == 0){
        // alert("Your Akan name is Kwasi")
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwasi";
    } else if(bird_day == 1){
        //alert("Your Akan name is Kwadwo");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwadwo";
    } else if(bird_day == 2){
        //alert("Your Akan name is Kwebena");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwebena";
    } else if(bird_day == 3){
       // alert("Your Akan name is Kwaku");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwaku";
    } else if(bird_day == 4){
        //alert("Your Akan name is Yaw");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Yaw";
    }else if(bird_day == 5){
        //alert("Your Akan name is Kofi");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kofi";
    }else if(bird_day == 6){
        //alert("Your Akan name is Kwame");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwame";
    }else{
        alert("Invalid Date of Birth");
    }

    return bird_day;
}