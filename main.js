// Participation Activity 2 
function compute_rank () {
    let math_score = Number(document.getElementById('math_score').value);

    if(math_score > 95) {
        window.alert('Gold')
    }
    else if(math_score > 94) {
        window.alert('Silver')
    }
    else if(math_score > 89) {
        window.alert('Bronze')
    }
    else if(math_score > 84) {
        window.alert('Merit')
    }
   else if (math_score > other) {
    window.alert("Invalid");
}
}
