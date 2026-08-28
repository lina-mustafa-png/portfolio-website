function calculateCost(){
    let weightInput = document.getElementById("weight").value;
    let distanceInput = document.getElementById("distance").value;
    let shippingType = document.getElementById("type").value;
    let size = document.getElementById("size").value;

    let result = document.getElementById("result");

    if (weightInput === "" && distanceInput === "" && shippingType === "Option" && size === "Option") {
        result.innerHTML = "No data entered.";
        result.className = "error";
        return;
    }

    let weight = Number(weightInput);
    let distance = Number(distanceInput);
    let insurance = document.getElementById("insurance").checked;

    let cost = 3.50 + (weight * 1.20) + (distance * 0.05); // Base cost: weight + distance, with small base fee

    //Parcel.java
    if(insurance){
        cost += Math.max(1.50, 0.02 * cost); // compare $1.50 and 2% of the shipping cost then use whichever is hight multiplied by the base cost
    }

    //StandardParcel.java
    if(shippingType === "standard" || shippingType === "express"){
        if (size === "S"){
            cost += 0.75;
        }
        if (size === "M"){
            cost += 1.25;
        }
        if (size === "L"){
            cost += 1.75;
        }
    }

    //ExpressParcel.java
    document.getElementById("type").addEventListener("change", function () {
        const sameDayContainer = document.getElementById("sameDayContainer");
        const sameDay = document.getElementById("sameDayDel");

        if (this.value === "express"){
            sameDayContainer.style.display = "block";
        } else {
            sameDayConatiner.style.display = "none";
            sameDay.checked = false;
        }
    });

    if(shippingType === "express"){
        cost *= 1.35;

        if(document.getElementById("sameDayDel").checked){
            cost += 7.50;
        }
    }

    //InternationalParcel.java
    if(shippingType === "international"){
        cost += 8.00;
        cost += cost * 0.12;
    }

    result.innerHTML = "Shipping Cost: $" + cost.toFixed(2);
    result.className = "";
}
