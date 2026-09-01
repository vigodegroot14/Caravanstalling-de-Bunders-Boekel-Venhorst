function calculate(input, pricePerMeter, minimumPrice){

  let lengthCm = parseFloat(input.value);

  if(isNaN(lengthCm) || lengthCm < 0){
    lengthCm = 0;
  }

  if(lengthCm > 1200){
    input.value = 1200;
    lengthCm = 1200;
  }

  let lengthMeters = lengthCm / 100;

  let total = lengthMeters * pricePerMeter;

  if(total < minimumPrice){
    total = minimumPrice;
  }

  const result = input.parentElement.nextElementSibling;
  result.setAttribute("aria-live", "polite");
  result.textContent =
    "€" + total.toFixed(2).replace(".", ",");
}
