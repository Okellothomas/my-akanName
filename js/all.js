// obtain data from the form. 


function getAllGender(){
    let all_d = document.getElementById("femaleDetails").value;

    let all_D = all_d.toLowerCase();

    if(all_D == 'male'){

        let all_data = document.getElementById("femaleDetails").value;

        let all_Data = all_data.toLowerCase();

        if (all_Data == 'sunday'){
            alert("Your Akan name is Akosua");
        } else if(all_Data == 'monday'){
            alert("Your Akan name is Adwoa");
        } else if(all_Data == 'tuesday'){
            alert("Your Akan name is Abenaa");
        } else if(all_Data == 'wednesday'){
            alert("Your Akan name is Akua");
        } else if(all_Data == 'thurday'){
            alert("Your Akan name is Yaa");
        }else if(all_Data == 'friday'){
            alert("Your Akan name is Afua");
        }else if(all_Data == 'saturday'){
            alert("Your Akan name is Ama");
        }else{
            alert("Invalid Input");
        }

    } else if(all_D == 'female'){


        let all_dat = document.getElementById("femaleDetails").value;

        let all_Dat = all_dat.toLowerCase();

        if (all_Dat == 'sunday'){
            alert("Your Akan name is Akosua");
        } else if(all_Dat == 'monday'){
            alert("Your Akan name is Adwoa");
        } else if(all_Dat == 'tuesday'){
            alert("Your Akan name is Abenaa");
        } else if(all_Dat == 'wednesday'){
            alert("Your Akan name is Akua");
        } else if(all_Dat == 'thurday'){
            alert("Your Akan name is Yaa");
        }else if(all_Dat == 'friday'){
            alert("Your Akan name is Afua");
        }else if(all_Dat == 'saturday'){
            alert("Your Akan name is Ama");
        }else{
            alert("Invalid Input");
        }
    }else{
        alert("Invalid Input");
    }
}

//alert(male_D);