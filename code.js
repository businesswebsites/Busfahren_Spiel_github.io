let buzzer_1 = document.getElementById("buzzer1");
let buzzer_2 = document.getElementById("buzzer2");
let counter = 0;
let counterRight = 0;
let maincard = document.getElementById("maincard");
let card_1 = document.getElementById("card_1");
let card_2 = document.getElementById("card_2");
let card_3 = document.getElementById("card_3");
let h1 = document.getElementById("drink");
let buttons = document.getElementById("choose");
let button_1 = document.getElementById("buzz1");
let button_2 = document.getElementById("buzz2");

let first_round = document.getElementById("first_round");


//screen.orientation.lock();

function get_random_number(){
    return Math.floor(Math.random()*13)+1;
}

let symbols = ["pik", "caro", "kreuz", "herz"];
function get_symbol(arr){
    return arr[Math.floor(Math.random()*3)];
}


let lost_numbers = [];
let lost_symbol = [];

function buzzer1(){
    
    if(buzzer_1.innerHTML == "Rot"){
        counter++;
        //buzzer features
        buzzer_1.innerHTML = "höher";
        buzzer_2.innerHTML = "tiefer";
        //choose card => num and sym
        let random_number = get_random_number();
        let sym = get_symbol(symbols);
        //save last card for next step => sym and num
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        //change maincard
        maincard.src = sym + "_" + random_number.toString() + ".png";

        //if player is wrong 
        //change header text
        if(sym == "pik" || sym =="kreuz"){
            h1.innerHTML = "Falsch! Trink!";
        }else{
            h1.innerHTML = "Rot! Richtig!";
        }
    }
    else if(buzzer_1.innerHTML == "höher" && counter == 1){
        counter++;
        //buzzer features
        buzzer_1.innerHTML = "innerhalb";
        buzzer_2.innerHTML = "außerhalb";
        //choose card => num and sym
        random_number = get_random_number();
        sym = get_symbol(symbols);
        //save last card for next step => num and sym
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        maincard.src = sym + "_" + random_number.toString() + ".png";
        //change last card
        card_1.src = lost_symbol[0] + "_" + lost_numbers[0] + ".png";
        //change header text 
        if(lost_numbers[0] > random_number){
            h1.innerHTML = "Falsch! Trink!";
        }else{
            h1.innerHTML = "Höher! Richtig!";
        }
    }
    else if(buzzer_1.innerHTML == "innerhalb" && counter == 2){
        counter++;
        //buzzer features
        buzzer_1.innerHTML = "dabei";
        buzzer_2.innerHTML = "nicht dabei";
        //choose card => num and sym
        random_number = get_random_number();
        sym = get_symbol(symbols);
        //save last card for next step => num and sym
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        //change maincard
        maincard.src = sym + "_" + random_number.toString() + ".png";
        //change last card
        card_2.src = lost_symbol[1] + "_" + lost_numbers[1] + ".png";
        lost_numbers.sort(function(a, b){return a-b});
        //change header text 
        if(random_number < lost_numbers[1] && random_number > lost_numbers[0]){
            h1.innerHTML = "Innerhalb! Richtig!";
        }else{
            h1.innerHTML = "Falsch! Trink!";
        }

    }else{
        counter++;
        //choose card => num and sym
        random_number = get_random_number();
        sym = get_symbol(symbols);
        //save last card for next step => num and sym
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        //change maincard
        maincard.src = sym + "_" + random_number + ".png";
        //change last card
        card_3.src = lost_symbol[2] + "_" + lost_numbers[2] + ".png";
        //change header text
        if(sym == lost_symbol[1] || sym==lost_symbol[0] || sym == lost_symbol[2]){
            h1.innerHTML = "Dabei! Richtig!";
        }else{
            h1.innerHTML="Falsch! Trink!";
        }
        buttons.removeChild(button_1);
        buttons.removeChild(button_2);

        const start_button = document.createElement("button");
        start_button.innerText = "Starte Pyramide";
        start_button.style.color = "black";
        start_button.style.backgroundColor = "white";
        start_button.style.fontSize = "50px";
        start_button.style.borderRadius = "10px";
        start_button.style.padding = "10px";
        start_button.style.border = "2px solid black";

        start_button.addEventListener("click", ()=>{
            //location.href = "pyramide.html"
            window.location.assign("pyramide.html")
        })
        start_button.addEventListener("click", ()=>{
            first_round.removeChild(document.getElementById("first_round_values"));
            first_round.removeChild(document.getElementById("playground"));
            first_round.removeChild(document.getElementById("choose"));

        });
        buttons.appendChild(start_button);
        buttons.style.display = "flex";
        buttons.style.justifyContent ="center";
    }
}
function buzzer2(){
    if(buzzer_2.innerHTML == "Schwarz"){
        counter++;
        //buzzer feature
        buzzer_1.innerHTML = "höher";
        buzzer_2.innerHTML = "tiefer";
        //choose card => num and sym
        let random_number = get_random_number();
        let sym = get_symbol(symbols);
        //save last card for next step => sym and num
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        //change maincard
        maincard.src = sym + "_" + random_number.toString() + ".png";
        //chnage header text
        if(sym == "caro" || sym =="herz"){
            h1.innerHTML = "Falsch! Trink!";
        }else{
            h1.innerHTML = "Schwarz! Richtig!";
        }
    }
    else if(buzzer_2.innerHTML == "tiefer" && counter == 1){
        counter++;
        //buzzer feature
        buzzer_1.innerHTML = "innerhalb";
        buzzer_2.innerHTML = "außerhalb";
        //choose card => num and sym
        random_number = get_random_number();
        sym = get_symbol(symbols);
        //save last card for next step => num and sym
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        maincard.src = sym + "_" + random_number.toString() + ".png";
        //change last card
        card_1.src = lost_symbol[0] + "_" + lost_numbers[0] + ".png";
        //change header text
        if(lost_numbers[0] < random_number){
            h1.innerHTML = "Falsch! Trink!";
        }else{
            h1.innerHTML = "Tiefer! Richtig!";
        }
    }
    else if(buzzer_2.innerHTML == "außerhalb" && counter == 2){
        counter++;
        //buzzer feature
        buzzer_1.innerHTML = "dabei";
        buzzer_2.innerHTML = "nicht dabei";
        //choose card => num and sym
        random_number = get_random_number();
        sym = get_symbol(symbols);
        //save last card for next step => num and sym
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        //change maincard
        maincard.src = sym + "_" + random_number.toString() + ".png";
        //change last card
        card_2.src = lost_symbol[1] + "_" + lost_numbers[1] + ".png";

        lost_numbers.sort(function(a, b){return a-b});
        //change header text
        if(random_number > lost_numbers[1] || random_number < lost_numbers[0]){
            h1.innerHTML = "Außerhalb! Richtig!";
        }else{
            h1.innerHTML = "Falsch! Trink!";
        }
    }else{
        counter++;
        //choose card => num and sym
        random_number = get_random_number();
        sym = get_symbol(symbols);
        //save last card for next step => num and sym
        lost_numbers.push(random_number);
        lost_symbol.push(sym);
        //change maincard
        maincard.src = sym + "_" + random_number + ".png";
        //change last card
        card_3.src = lost_symbol[2] + "_" + lost_numbers[2] + ".png";
        //change header text
        if(sym != lost_symbol[1] && sym !=lost_symbol[0] && sym != lost_symbol[2]){
            h1.innerHTML = "Nicht dabei! Richtig!";
        }else{
            h1.innerHTML="Falsch! Trink!";
        }
        buttons.removeChild(button_1);
        buttons.removeChild(button_2);
        const start_button = document.createElement("button");
        start_button.innerText = "Starte Pyramide";
        start_button.style.color = "black";
        start_button.style.backgroundColor = "white";
        start_button.style.fontSize = "50px";
        start_button.style.borderRadius = "10px";
        start_button.style.padding = "10px";
        start_button.style.border = "2px solid black";

        start_button.addEventListener("click", ()=>{
            //location.href = "pyramide.html"
            window.location.assign("pyramide.html")
        })

        start_button.addEventListener("click", ()=>{
            first_round.removeChild(document.getElementById("first_round_values"));
            first_round.removeChild(document.getElementById("playground"));
            first_round.removeChild(document.getElementById("choose"));

        });
        buttons.appendChild(start_button);
        buttons.style.display = "flex";
        buttons.style.justifyContent ="center";
    }
}

//pyramide
//fourth row
let card1_row4 = document.getElementById("card1_row4");
let card2_row4 = document.getElementById("card2_row4");
let card3_row4 = document.getElementById("card3_row4");
let card1_row1 = document.getElementById("card1_row1");
let card_bg = "card background.jpg";

function button_styling(element, text){
        element.innerText = text;
        element.style.color = "black";
        element.style.backgroundColor = "white";
        element.style.fontSize = "50px";
        element.style.borderRadius = "10px";
        element.style.padding = "10px";
        element.style.border = "2px solid black";
}

//function to change background to random card
let pyramide_counter = 0;
function change_pyramide(){
    pyramide_counter++;
        //get sym and number of the new card to change 
        let sym = get_symbol(symbols);
        let num = get_random_number();
        //try to get id of the card to change by click 
        let id = event.target.id
        document.getElementById(id).src = sym + "_" + num.toString() + ".png";

        if(pyramide_counter == 10){
            setTimeout(function(){
                //remove fourth row
                let pyramide = document.getElementById("pyramide");
                document.getElementById("fourthrow").removeChild(document.getElementById("card1_row4"));
                document.getElementById("fourthrow").removeChild(document.getElementById("card2_row4"));
                document.getElementById("fourthrow").removeChild(document.getElementById("card3_row4"));
                document.getElementById("fourthrow").removeChild(document.getElementById("card4_row4"));
                pyramide.removeChild(document.getElementById("schluck_4"));

                //remove third row
                document.getElementById("thirdrow").removeChild(document.getElementById("card1_row3"));
                document.getElementById("thirdrow").removeChild(document.getElementById("card2_row3"));
                document.getElementById("thirdrow").removeChild(document.getElementById("card3_row3"));
                pyramide.removeChild(document.getElementById("schluck_3"));

                //remove second row
                document.getElementById("secondrow").removeChild(document.getElementById("card1_row2"));
                document.getElementById("secondrow").removeChild(document.getElementById("card2_row2"));
                pyramide.removeChild(document.getElementById("schluck_2"));
                //remove first row
                document.getElementById("firstrow").removeChild(document.getElementById("card1_row1"));

                pyramide.removeChild(document.getElementById("schluck_1"));
                //change styles
                
                let new_bus = document.createElement("button");
                let old_bus = document.createElement("button");

                button_styling(new_bus, "Neuer Bus");
                button_styling(old_bus, "Alter Bus");
                new_bus.addEventListener("click", ()=>{
                    //location.href = "pyramide.html"
                    window.location.assign("bus.html")
                })
                pyramide.appendChild(new_bus);
                pyramide.appendChild(old_bus);
                pyramide.style.gap = "2%";
                
                
            }, 5000);
        }
}
let bus_counter = 0;
function change_bus(){
    bus_counter++;
    //get sym and number of the new card to change 
    let sym = get_symbol(symbols);
    let num = get_random_number();
    //try to get id of the card to change by click 
    let id = event.target.id
    document.getElementById(id).src = sym + "_" + num.toString() + ".png";
}

function check_pyramide(){
    if(card1_row1.src.toString() !== card_bg){
        document.getElementById("busfahren").style.visibility = "visible";
    }
}