

function triangle() {
    let A = parseInt(document.sides.A.value), //converts input for side A to integer
        B = parseInt(document.sides.B.value), //converts for side B
        C = parseInt(document.sides.C.value); //converts for side C

    console.log(A);
    console.log(B);
    console.log(C);



    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        return alert("Not a number");
    } else {
        errorHandle(A, B, C);
    }
}



function errorHandle(A, B, C) {
    //Two of the sides has to be greater then the third side
    let AB = parseInt(document.sides.A.value) + parseInt(document.sides.B.value),//side A + B to check if a triangle can be formed
        AC = parseInt(document.sides.A.value) + parseInt(document.sides.C.value), //side A + C
        BC = parseInt(document.sides.B.value) + parseInt(document.sides.C.value); //side B + C
         
    console.log(AB);
    console.log(AC);
    console.log(BC);
    console.log(AB - C);
    console.log(AC - B);
    console.log(BC - A);


    if ((A <= 0 || B <= 0 || C <= 0)) {

        return ts.ui.Notification.error("Length of sides cannot be equal to or less than zero");

    }

    if ((AB < C) || (AC < B) || (BC < A)) {

        ts.ui.Notification.error("These numbers can not form a triangle.");
        return document.getElementById("giphy").style.display = 'block';
    } else {
        getTriangleType(A, B, C);
    }



}

function cancelation() {
    document.getElementById("giphy").style.display = 'none';
}


function getTriangleType(A, B, C) {

    if ((A == B) && (B == C)) {

        document.getElementById('answer').innerHTML = "Equilateral";



        var img = document.createElement("img");

        img.src = "images/equilateral.png";
        var src = document.getElementById("answerImg");

        src.appendChild(img);

        return alert("The Triangle is Equilateral");

    }
    if ((A == B) || (B == C)) {
        document.getElementById('answer').innerHTML = "Isosceles";


        var img = document.createElement("img");

        img.src = "images/isosceles.png";
        var src = document.getElementById("answerImg");

        src.appendChild(img);
        return alert("The Triangle is Isosceles");
    } else {
        document.getElementById('answer').innerHTML = "Scalene";


        var img = document.createElement("img");

        img.src = "images/scalene.png";
        var src = document.getElementById("answerImg");

        src.appendChild(img);
        return alert("The Triangle is Scalene.");
    }


}

