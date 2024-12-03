
const inputBox = document.getElementById("input_box")
const resultBox = document.getElementById("result_box")
const inputCategory = document.getElementById("inputCategory")
const resultCategory = document.getElementById("resultCategory")
const allClearBtn = document.querySelector("button")

// Define conversion factors
const conversionFactors = {
  meter: {
    kilometer: 0.001,
    meter: 1,
    centimeter: 100,
    millimeter: 1000,
    mile: 1 / 1609.344,
  },
  kilometer: {
    meter: 1000,
    kilometer: 1,
    centimeter: 100000,
    millimeter: 1000000,
    mile:  0.621371,
  },
  centimeter: {
    meter: 0.01,
    kilometer: 0.00001,
    centimeter: 1,
    millimeter: 10,
    mile: 1 / 160934,
  },

}


// Add event listeners
inputBox.addEventListener('input', updateResult)
inputCategory.addEventListener('change', updateResult)
resultCategory.addEventListener('change', updateResult)
allClearBtn.addEventListener('click', clearInput)


// Function to update the result
function updateResult(){
  const inputValue = parseFloat(inputBox.value)
  const inputCategoryVal = inputCategory.value
  const resultCategoryVal = resultCategory.value

  const conversionFactor = conversionFactors[inputCategoryVal][resultCategoryVal]
  resultBox.value = isNaN(inputValue) ? "" : inputValue * conversionFactor
}


// Function to clear input and result
function clearInput(){
  inputBox.value = ""
  resultBox.value = "q"
}