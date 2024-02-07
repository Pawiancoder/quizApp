let questions = [
    {//1
        question: "Wie viel Wasser pro Minute in Litern geht durch ein C-Strahlrohr mit Mundstück?",
        answers: [50, 100, 200, 350],
        correctAnswer: [1]
    },
    {//2
        question: "Was bedeutet LF16/12",
        answers: ["Pumpenleistung 1.600 Liter / min", "Pumpenleistung 1.200 Liter pro Minute", "Wassertank mit 1.600 Liter Inhalt", "Wassertank mit 1.200 Litern Inhalt"],
        correctAnswer: [0, 3]
    },
    {//3
        question: "Was bedeutet die 150 auf einem Hydrantenschild?",
        answers: ["Durchflussmenge 150 Liter / Minute", "150 bar Wasserdruck", "Leitungsdurchmesser von 150mm", "Leitungsdurchmesser von 150cm"],
        correctAnswer: [2]
    },
    {//4
        question: "Welche Frage gehört nicht zu dem 5 Ws?",
        answers: ["Was ist passiert?", "Wo ist es passiert?", "Wer ruft an?", "Wie viele Hydranten sind vor Ort?"],
        correctAnswer: [3]
    },
    {//5
        question: "Was sind die Funkrufnamen der Feuerwehr?",
        answers: ["Florian & Florentine", "Harrald und Harraldine", "Flämmchen und Flamme", "Glut und Feuer"],
        correctAnswer: [0]
    },
    {//6
        question: "Wer setzt beim Löschangriff (Löschgruppe) den Verteiler?",
        answers: ["Gruppenführer", "Angriffstrupp", "Melder", "Wassertrupp"],
        correctAnswer: [1]
    },
    {//7
        question: "Welchen Knoten gibt es nicht?",
        answers: ["Zimmermannsschlag", "Mastwurf", "Achterknoten", "Bienenstich"],
        correctAnswer: [3]
    },
    {//8
        question: "Wer setzt beim Löschangriff (Löschgruppe) den Verteiler?",
        answers: ["Gruppenführer", "Angriffstrupp", "Melder", "Wassertrupp"],
        correctAnswer: [1]
    },
    {//9
        question: "Worüber geht die Feuerwehr-Dienstvorschrift 500?",
        answers: ["Leitern aufstellen", "Verwendung von Knoten", "ABC-Einsatz", "Tierrettung"],
        correctAnswer: [2]
    },
    {//10
        question: "Was gehört nicht zur der PSA?",
        answers: ["Handschuhe", "Helm", "Feuerwehrschlauch", "Feuerwehrhaltegurt"],
        correctAnswer: [2]
    },
]

function showResultField() {
    document.getElementById("result").hidden = false;
}