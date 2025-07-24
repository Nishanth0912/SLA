function check(){
    let marks = Number(document.getElementById("mark").value);
    let finalExam = document.getElementById("final").checked;

    let result = checkGrade(marks,finalExam);
    document.getElementById("result").innerText = result ? "You got A+ Grade 🎉" : "Not an A+ Grade 😞" ;

}

function  checkGrade(marks,finalExam){
    if (finalExam) {
        return marks >= 90 ;
    }else{
        return marks >=89 && marks <= 100;
    } 
}