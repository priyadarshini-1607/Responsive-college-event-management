const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.event-card');
const emptyState = document.getElementById('emptyState');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  let visible = 0;
  cards.forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.hidden = !show;
    if (show) visible++;
  });
  emptyState.hidden = visible !== 0;
}));

const dialog = document.getElementById('registerDialog');
const dialogTitle = document.getElementById('dialogTitle');
const registerStatus = document.getElementById('registerStatus');
document.querySelectorAll('.register-btn').forEach(button => button.addEventListener('click', () => {
  dialogTitle.textContent = button.dataset.event;
  registerStatus.textContent = '';
  document.getElementById('registerForm').reset();
  dialog.showModal();
}));
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
document.getElementById('registerForm').addEventListener('submit', event => {
  event.preventDefault();
  const student = document.getElementById('studentName').value.trim();
  registerStatus.textContent = `Thank you, ${student}! Your interest has been recorded for ${dialogTitle.textContent}.`;
  event.target.reset();
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formStatus').textContent = `Thanks, ${name}! Your message has been received in this demo.`;
  event.target.reset();
});
