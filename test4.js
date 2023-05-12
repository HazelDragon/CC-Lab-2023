document.addEventListener("DOMContentLoaded", function() {
    const countButton = document.getElementById("hi");
    
    document.getElementById("quizform").addEventListener("submit", e => {
        e.preventDefault();
        var score = 0;
        const elements= e.target.elements
        const isNamedItemChecked = e.target.elements.namedItem("q1").checked
        const isNamedItemChecked1 = e.target.elements.namedItem("q2").checked
        const isNamedItemChecked2 = e.target.elements.namedItem("q3").checked
        const isNamedItemChecked3 = e.target.elements.namedItem("q4").checked
        const isNamedItemChecked4 = e.target.elements.namedItem("q5").checked
        const isNamedItemChecked5 = e.target.elements.namedItem("q6").checked        
        const isNamedItemChecked6 = e.target.elements.namedItem("q7").checked
        const isNamedItemChecked7 = e.target.elements.namedItem("q8").checked

        persDesc = document.getElementsByClassName("resColor")[0];
        persDesc.textContent = "";

        if (isNamedItemChecked == true){
            score +=1;
        }
        if(isNamedItemChecked1 == true){
            score +=1;
        }

        if(isNamedItemChecked2 == true){
            score +=1;
        }

        if(isNamedItemChecked3 == true){
            score +=1;
        }

        if(isNamedItemChecked4 == true){
            score +=1;
        }

        if(isNamedItemChecked5 == true){
            score +=1;
        }

        if(isNamedItemChecked6 == true){
            score +=1;
        }

        if(isNamedItemChecked7 == true){
            score +=1;
        }


        if (score < 2 ){
            document.getElementsByClassName("resColor")[0].style.backgroundColor = "red";
            persDesc.textContent = "You are a narcissist. Wow, always thinking of yourself huh? We get honoring your inner child, but not everything has to be about you. Seek professional help.";
        }

        if (score >=6 && score <= 8){
            document.getElementsByClassName("resColor")[0].style.backgroundColor = "green";
            persDesc.textContent = "You're a lovebomber. You're a walking red flag. Stop talking to people."
        }

        if (score >= 2 && score < 4){
            document.getElementsByClassName("resColor")[0].style.backgroundColor = "blue";
            persDesc.textContent = "you are a gaslighter. This text result is yellow, it is. You think you're great and you're good a making other people think that too, but it's far from the truth.";
        }

        if (score >= 4 && score < 6){
            document.getElementsByClassName("resColor")[0].style.backgroundColor = "yellow";
            persDesc.textContent ="You are a breadcrumber. Wow, always giving the people what they want, so original. Get over your fear of confrontation and actually be honest with yourself."
        }

        console.log(score)




    });
    });