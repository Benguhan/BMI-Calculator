let weight;
let height;

document.getElementById("mySubmit").onclick = function () {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    console.log(weight);
    console.log(height);
    weight = Number(weight);
    height = Number(height);
    let bmi = weight / (height * height);
    console.log(bmi);

    //document.getElementById("result").textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    document.getElementById("result").innerHTML = bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById("status").innerHTML = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("status").innerHTML = "Normal weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("status").innerHTML = "Overweight";
    }
    else if (bmi >= 30) {
        document.getElementById("status").innerHTML = "Obesity";
    }
    else {
        document.getElementById("result").innerHTML = "Error";
    }
    
}
