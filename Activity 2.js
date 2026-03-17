// Participation Activity 2 
function compute_rank () {
    let math_score = Number(document.getElementById('math_score').value);

    if(math_score > 94) {
        window.alert('Gold')
    }
    else if(math_score > 90-94) {
        window.alert('Silver')
    }
    else if(math_score > 85-89) {
        window.alert('Bronze')
    }
    else if(math_score > 80-84) {
        window.alert('Merit')
    }
}