import {openModalWindow, closeModalWindow} from './src/modalWindow.js';

const showWindowBtn = document.querySelector('.mobile_header_btn');
const mobileWindow = document.querySelector('.mobile_header')
const modalContainer = document.querySelector('.modal_btn')
const exitWindowBtn = document.querySelector('.exit_window')

showWindowBtn.addEventListener('click', () => openModalWindow(modalContainer, mobileWindow))
exitWindowBtn.addEventListener('click', () => closeModalWindow(modalContainer, mobileWindow))