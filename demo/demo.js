// Independent showcase: all labels and amounts below are fictional.
const expenses = [
  {label: 'Vivienda de ejemplo / Example housing', category: 'Vivienda', cents: 24000000},
  {label: 'Servicio ficticio / Fictional utility', category: 'Servicios', cents: 1800000},
  {label: 'Compra de ejemplo / Example groceries', category: 'Comida', cents: 1250000},
  {label: 'Viaje ficticio / Fictional trip', category: 'Transporte', cents: 350000},
];
const money = new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'});
function render() {
  const category = document.querySelector('#category').value;
  const filtered = expenses.filter(item => category === 'all' || item.category === category);
  document.querySelector('#total').textContent = money.format(filtered.reduce((sum, item) => sum + item.cents, 0) / 100);
  document.querySelector('#count').textContent = String(filtered.length);
  document.querySelector('#rows').replaceChildren(...filtered.map(item => {
    const row = document.createElement('tr');
    for (const value of [item.label, item.category, money.format(item.cents / 100)]) {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.append(cell);
    }
    return row;
  }));
}
document.querySelector('#category').addEventListener('change', render);
render();
