import './style.css'
import chrome21 from '/chr21.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>Chromosome 21</h1>
    <div class="selection_container">
      <h2 id="EOAD" class="selection_title">Early-Onset Alzheimer's</h2>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${chrome21}" class="logo" alt="Chromosome 21" />
      </a>
      <h2 id="AML" class="selection_title">AML</h2>
    </div>
  </div>
`
const amlHeading = document.getElementById('AML');
amlHeading?.addEventListener('click', () => {
  document.body.classList.add('animate-out');
  setTimeout(() => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
      <h1>AML</h1>
    </div>
  `
  }, 500);

  setTimeout(() => {
    document.body.classList.remove('animate-out');
    document.body.classList.add('animate-in');
  }, 500);
});

const eoadHeading = document.getElementById('EOAD');
eoadHeading?.addEventListener('click', () => {
  document.body.classList.add('animate-out');
  setTimeout(() => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
      <h1>Early-Onset Alzheimer's</h1>
    </div>
  `
  }, 500);

  setTimeout(() => {
    document.body.classList.remove('animate-out');
    document.body.classList.add('animate-in');
  }, 500);
});