// get data.

// let date = new Date();
// let dayOfWeekNumber = date.getDay();
// let nameOfDay;
// let quote;

// switch(dayOfWeekNumber){
//     case 0: 
//         nameOfDay = 'Sunday';
//         quote = 'Time to chillax!';
//         break;
//     case 1:
//         nameOfDay = 'Monday';
//         quote = 'Monday morning blues!';
//         break;
//     case 2:
//         nameOfDay = 'Tuesday';
//         quote = 'Taco Time!';
//         break;
//     case 3:
//         nameOfDay = 'Wednesday';
//         quote = 'Two more days to the weekend.';
//         break;
//     case 4:
//         nameOfDay = 'Thursday';
//         quote = 'The weekend is almost here...';
//         break;
//     case 5:
//         nameOfDay = 'Friday';
//         quote = 'Weekend is here!';
//         break;
//     case 6:
//         nameOfDay = 'Saturday';
//         quote = 'Time to party!';
//         break;

// }
// //Display the day of the week
// let weekdayDiv = document.getElementById('weekday');
// weekdayDiv.innerHTML = `${nameOfDay}`;

// //Display quote
// let quoteDiv = document.getElementById('phrase');
// quoteDiv.innerHTML = `${quote}`






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