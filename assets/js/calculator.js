const calculator = document.querySelector('#jaarprijs-calculator');

if (calculator) {
  const vehicle = calculator.querySelector('#voertuig');
  const length = calculator.querySelector('#lengte');
  const result = calculator.querySelector('#jaarprijs');
  const calculation = calculator.querySelector('#berekening');
  const error = calculator.querySelector('#lengte-fout');
  const currency = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' });
  const number = new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 2 });

  function updatePrice() {
    const valid = length.value !== '' && length.validity.valid;
    length.setAttribute('aria-invalid', String(!valid));
    error.hidden = valid;
    error.textContent = valid ? '' : 'Vul een lengte in hele centimeters in, van 1 tot en met 1200 cm.';
    if (!valid) {
      result.textContent = '—';
      calculation.textContent = 'Vul een geldige lengte in';
      return;
    }
    const meters = Math.max(4.5, Number(length.value) / 100);
    const rate = Number(vehicle.value);
    result.textContent = currency.format(meters * rate);
    calculation.textContent = `${number.format(meters)} m × ${currency.format(rate)}`;
  }

  calculator.addEventListener('submit', event => event.preventDefault());
  calculator.addEventListener('input', updatePrice);
  calculator.addEventListener('change', updatePrice);
  updatePrice();
}
