// Get data to the female 
function getFemale(){
    let male_d = document.getElementById("femaleDetails").value;

    let male_D = male_d.toLowerCase();

    if (male_D == 'sunday'){
        alert("Your Akan name is Akosua");
    } else if(male_D == 'monday'){
        alert("Your Akan name is Adwoa");
    } else if(male_D == 'tuesday'){
        alert("Your Akan name is Abenaa");
    } else if(male_D == 'wednesday'){
        alert("Your Akan name is Akua");
    } else if(male_D == 'thurday'){
        alert("Your Akan name is Yaa");
    }else if(male_D == 'friday'){
        alert("Your Akan name is Afua");
    }else if(male_D == 'saturday'){
        alert("Your Akan name is Ama");
    }else{
        alert("Invalid Input");
    }

}
    alert(male_D);