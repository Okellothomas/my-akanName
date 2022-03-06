// get data.

function getMale(){
    let male_d = document.getElementById("maleDetails").value;

    let male_D = male_d.toLowerCase();

    if (male_D == 'sunday'){
        // alert("Your Akan name is Kwasi")
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwasi";
    } else if(male_D == 'monday'){
        //alert("Your Akan name is Kwadwo");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwadwo";
    } else if(male_D == 'tuesday'){
        //alert("Your Akan name is Kwebena");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwebena";
    } else if(male_D == 'wednesday'){
       // alert("Your Akan name is Kwaku");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwaku";
    } else if(male_D == 'thurday'){
        //alert("Your Akan name is Yaw");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Yaw";
    }else if(male_D == 'friday'){
        //alert("Your Akan name is Kofi");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kofi";
    }else if(male_D == 'saturday'){
        //alert("Your Akan name is Kwame");
        let dateResult = document.getElementById("Mresult");
        dateResult.textContent = "Your Akan name is Kwame";
    }else{
        alert("Invalid Input");
    }
//alert(male_D);

    //return male_D;

}
//getMale();