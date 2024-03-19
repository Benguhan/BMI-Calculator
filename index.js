let weight;
let height;

const categories = [
    {
        name: "Underweight",
        min : 0,
        max : 18.5,
        color : "red"
    },
    {
        name: "Normal weight",
        min : 18.5,
        max : 24.9,
        color : "green"
    },
    {
        name: "Overweight",
        min : 25,
        max : 29.9,
        color : "orange"
    },
    {
        name: "Obesity",
        min : 30,
        max : 100,
        color : "red"
    }
]


const findCategory = (bmi) => {
    return categories.find( category => bmi >= category.min && bmi <= category.max);
}

document.getElementById("mySubmit").onclick = function () {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    weight = Number(weight);
    height = Number(height);
    let bmi = weight / (height * height);
    console.log(bmi);

    //document.getElementById("result").textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    document.getElementById("result").innerHTML = bmi.toFixed(2);
    const status = findCategory(bmi);
    document.getElementById("status").innerHTML = status.name;
    document.getElementById("status").style.color = status.color;

    if (bmi) {
        console.log("bmi", bmi);
        document.getElementById("resultBox").style.display = "block";
   
    }

    /*if (bmi < 18.5) {
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
    }*/
    
}
