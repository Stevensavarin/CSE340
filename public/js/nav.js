document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('#menu-button');
  const navigation = document.querySelector('#top-header nav ul');
  const tools = document.querySelector('#tools'); // Select the tools div

  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    tools.classList.toggle('open'); // Also toggle the class on the tools div
  });
});