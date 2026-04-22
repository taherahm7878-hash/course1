"use strict";
function checkResult() {
    var score = 0;
    // الإجابات الصحيحة (بناءً على الترتيب 0, 1, 2)
    var answers = [1, 2]; // أضف بقية أرقام الإجابات الصحيحة هنا

    for (var i = 0; i < 5; i++) {
        var selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === answers[i]) {
            score++;
        }
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `نتيجتك هي: ${score} من ${answers.length}`;
    resultDiv.style.color = score === answers.length ? "green" : "red";
}