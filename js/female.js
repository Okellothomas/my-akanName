// Get data to the female 
function getFemale(){
    let female_Day = document.getElementById("femaleDetails").value;

    female_day = new Date(female_Day);
    birth_day = female_day.getDay();


    if (birth_day == 0){
        alert("Your Akan name is Akosua");
    } else if(birth_day == 1){
        alert("Your Akan name is Adwoa");
    } else if(birth_day == 2){
        alert("Your Akan name is Abenaa");
    } else if(birth_day == 3){
        alert("Your Akan name is Akua");
    } else if(birth_day == 4){
        alert("Your Akan name is Yaa");
    }else if(birth_day == 5){
        alert("Your Akan name is Afua");
    }else if(birth_day == 6){
        alert("Your Akan name is Ama");
    }else{
        alert("Invalid Date of Birth");
    }

    return birth_day;
}
