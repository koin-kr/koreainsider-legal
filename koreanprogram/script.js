const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
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
  usd: { regular: 'US $800', sale: 'US $380', discount: '52.5% OFF · SAVE US $420 / MONTH' },
  eur: { regular: '€700', sale: '€330', discount: '52.9% OFF · SAVE €370 / MONTH' }
};
currencyButtons.forEach(button => button.addEventListener('click', () => {
  const price = prices[button.dataset.currency];
  currencyButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.getElementById('regular-price').textContent = price.regular;
  document.getElementById('sale-price').textContent = price.sale;
  document.getElementById('discount-label').textContent = price.discount;
}));
