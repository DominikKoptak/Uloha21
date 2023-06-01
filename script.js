
https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js


function calcBirthday(){
    let date = document.getElementById("narodeniny").value.split("-");
    let d = moment().set({'month': date[1] -1, 'date': date[2]});
    let ms = moment();
    let dif = d - ms;
    let vypis = document.getElementById("pocetDni");
    let p = document.createElement("p");
    vypis.innerHTML ="";

    if (dif < 0) {
        d = moment().add(1, 'year').set({'month': date[1] -1, 'date': date[2]});
        meh = d.valueOf();
        let bb = Math.round((d - ms) /86400000);
    console.log("Za " + bb + " dní máš narodeniny");
    p.innerText = "Počet dní do najbližších narodenín: " + bb;
    vypis.append(p);
    }else{let bb = Math.round((d - ms) /86400000);
        if(bb == 0){console.log("Všetko najlepšie!");
            }else{console.log("Za " + bb + " dní máš narodeniny");
            p.innerText = "Počet dní do najbližších narodenín: " + bb;
            vypis.append(p);}
    }

    switch (date[1]) {
        case "03":
        case "04":
        case "05": 
        console.log("JAR");
        let three = document.querySelectorAll(".three");
        for (const season of three) {
            season.style.display ="none";
        }
        document.getElementById("spring").style.display ="block";
            
            break;
        case "06":
        case "07":
        case "08": 
        console.log("LETO");
        let four = document.querySelectorAll(".four");
        for (const season of four) {
            season.style.display ="none";
        }
        document.getElementById("summer").style.display ="block";
            
            break;
        case "09":
        case "10":
        case "11": 
        console.log("JESEŇ");
        let two = document.querySelectorAll(".two");
        for (const season of two) {
            season.style.display ="none";
        }
        document.getElementById("autumn").style.display ="block";
            
            break;
        case "12":
        case "01":
        case "02": 
        console.log("ZIMA");
        let one = document.querySelectorAll(".one");
        for (const season of one) {
            season.style.display ="none";
        }
        document.getElementById("winter").style.display ="block";
            
            break;
    
        default:
            break;
    }
}