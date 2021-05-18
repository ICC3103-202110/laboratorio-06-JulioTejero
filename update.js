function update(input,model){
    const {validateLeft} = input
    const {initTemperature} = input
    const {fromUnit} = input
    const {toUnit} = input
    if(validateLeft){
        if(fromUnit === "Celsius") {
            if(toUnit === "Fahrenheit"){
                const newTemp = ((initTemperature*(9/5))+32)
                return {
                    leftValue: initTemperature,
                    leftUnit: fromUnit,
                    rightValue: newTemp,
                    rightUnit: toUnit
                }
            }else if(toUnit === "Kelvin"){
                const newTemp = initTemperature + 273.15
                return {
                    leftValue: initTemperature,
                    leftUnit: fromUnit,
                    rightValue: newTemp,
                    rightUnit: toUnit
                }
            }
        }
        if(fromUnit === "Fahrenheit") {
            if(toUnit === "Celsius"){
                const newTemp = (initTemperature-32)*(5/9)
                return {
                    leftValue: initTemperature,
                    leftUnit: fromUnit,
                    rightValue: newTemp,
                    rightUnit: toUnit
                }
            }else if(toUnit === "Kelvin"){
                const newTemp = ((initTemperature-32)*(5/9)) + 273.15
                return {
                    leftValue: initTemperature,
                    leftUnit: fromUnit,
                    rightValue: newTemp,
                    rightUnit: toUnit
                }
            }
        }
        if(fromUnit === "Kelvin") {
            if(toUnit === "Celsius"){
                const newTemp = (initTemperature-273.15)
                return {
                    leftValue: initTemperature,
                    leftUnit: fromUnit,
                    rightValue: newTemp,
                    rightUnit: toUnit
                }
            }else if(toUnit === "Fahrenheit"){
                const newTemp = ((initTemperature-273.15)*(9/5)) + 32
                return {
                    leftValue: initTemperature,
                    leftUnit: fromUnit,
                    rightValue: newTemp,
                    rightUnit: toUnit
                }
            }
        }
    }else{
        if(fromUnit === "Celsius") {
            if(toUnit === "Fahrenheit"){
                const newTemp = ((initTemperature*(9/5))+32)
                return {
                    leftValue: newTemp,
                    leftUnit: toUnit,
                    rightValue: initTemperature,
                    rightUnit: fromUnit
                }
            }else if(toUnit === "Kelvin"){
                const newTemp = initTemperature + 273.15
                return {
                    leftValue: newTemp,
                    leftUnit: toUnit,
                    rightValue: initTemperature,
                    rightUnit: fromUnit
                }
            }
        }
        if(fromUnit === "Fahrenheit") {
            if(toUnit === "Celsius"){
                const newTemp = (initTemperature-32)*(5/9)
                return {
                    leftValue: newTemp,
                    leftUnit: toUnit,
                    rightValue: initTemperature,
                    rightUnit: fromUnit
                }
            }else if(toUnit === "Kelvin"){
                const newTemp = ((initTemperature-32)*(5/9)) + 273.15
                return {
                    leftValue: newTemp,
                    leftUnit: toUnit,
                    rightValue: initTemperature,
                    rightUnit: fromUnit
                }
            }
        }
        if(fromUnit === "Kelvin") {
            if(toUnit === "Celsius"){
                const newTemp = (initTemperature-273.15)
                return {
                    leftValue: newTemp,
                    leftUnit: toUnit,
                    rightValue: initTemperature,
                    rightUnit: fromUnit
                }
            }else if(toUnit === "Fahrenheit"){
                const newTemp = ((initTemperature-273.15)*(9/5)) + 32
                return {
                    leftValue: newTemp,
                    leftUnit: toUnit,
                    rightValue: initTemperature,
                    rightUnit: fromUnit
                }
            }
        }
    }
}

module.exports = {
    update
}