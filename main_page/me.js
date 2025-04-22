import {openModalWindow, closeModalWindow} from './src/modal_window.js';

const showWindowBtn = document.querySelector('.mobile_header_btn');
const mobileWindow = document.querySelector('.mobile_header');
const modalContainer = document.querySelector('.modal_btn');
const exitWindowBtn = document.querySelector('.exit_window');
const copyBtn = document.querySelector('.contact_copy');
const textToCopy = document.querySelector('.contact_info');
const gearsAndcontact = document.querySelector('.gearsAndcontact');
const contactContainer = document.querySelector('.contact_container');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(textToCopy.textContent)
    .then(() => {
      console.log('Текст скопирован!');
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 1000);
    })
    .catch(err => {
      console.error('Ошибка копирования:', err);
    });
});

if (window.innerWidth < 900) {
  contactContainer.style.display = 'none';
  gearsAndcontact.innerHTML = `
    <div class="contact_container_2">
      <div class="contact_title_2">Contact:</div> 
      <div class="contact_info_2">zharkov.danik.ua@gmail.com</div>
      <div class="contact_copy_2">Copy</div>
    </div>`;

  const copyBtn2 = document.querySelector('.contact_copy_2');
  const textToCopy2 = document.querySelector('.contact_info_2');

  copyBtn2.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy2.textContent)
      .then(() => {
        console.log('Текст скопирован!');
        copyBtn2.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn2.textContent = 'Copy';
        }, 1000);
      })
      .catch(err => {
        console.error('Ошибка копирования:', err);
      });
  });
}

showWindowBtn.addEventListener('click', () =>
  openModalWindow(modalContainer, mobileWindow)
);
exitWindowBtn.addEventListener('click', () =>
  closeModalWindow(modalContainer, mobileWindow)
);
