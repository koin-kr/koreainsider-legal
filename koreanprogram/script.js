const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(item.getAttribute('aria-controls'));
    if (panel) panel.hidden = !active;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next]); tabs[next].focus(); }
  });
});

const currencyButtons = [...document.querySelectorAll('[data-currency]')];
const prices = {
  usd: { symbol: 'US $', regular: 'US $830', sale: 'US $380', total: 830, discount: '54.2% OFF · SAVE US $450 / MONTH' },
  eur: { symbol: '€',    regular: '€720',    sale: '€330',    total: 720, discount: '54.2% OFF · SAVE €390 / MONTH' }
};
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
currencyButtons.forEach(button => button.addEventListener('click', () => {
  const cur = button.dataset.currency;
  const price = prices[cur];
  if (!price) return;
  currencyButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  setText('regular-price', price.regular);
  setText('sale-price', price.sale);
  setText('discount-label', price.discount);
  setText('total-value', price.symbol + price.total);
  setText('pay-price', price.sale);
  document.querySelectorAll('.value-price[data-usd]').forEach(el => {
    el.textContent = price.symbol + el.dataset[cur];
  });
}));
