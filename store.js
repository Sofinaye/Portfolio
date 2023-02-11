const data = {};
document.addEventListener('keyup', () => {
  data.name = document.querySelector('.fullName').value;
  data.email = document.querySelector('.email').value;
  data.text = document.querySelector('.textArea').value;
  const dataCollected = JSON.stringify(data);
  localStorage.setItem('dataTotal', dataCollected);
});

const storeItem = () => {
  const parsedData = JSON.parse(localStorage.getItem('data'));
  const name = document.querySelector('.fullName');
  const email = document.querySelector('.email');
  const text = document.querySelector('.textArea');
  name.value = parsedData.name;
  email.value = parsedData.email;
  text.value = parsedData.text;
};