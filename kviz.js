function evalQuiz(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    let score = 0;
    let totalQuestions = 5;
    for (let value of formData.values()) {
        if (value === "1") {
            score++;
        }
    }
    const resultDisplay = document.getElementById("result-" + formId);
    if (score === totalQuestions) {
        resultDisplay.innerHTML = "Gratulálok! Hibátlan: " + score + "/" + totalQuestions;
        resultDisplay.style.color = "#49ff95";
    } else {
        resultDisplay.innerHTML = "Eredményed: " + score + "/" + totalQuestions + " eltalált kérdés.";
        resultDisplay.style.color = "#ff5151";
    }
    
    resultDisplay.style.fontWeight = "bold";
    resultDisplay.style.fontSize = "30px";
    resultDisplay.style.marginTop = "10px";
    resultDisplay.style.textAlign = "center";
}