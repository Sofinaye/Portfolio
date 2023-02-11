const data = {};
document.addEventListener('keyup', () => {
  data.name = document.querySelector('.fname-input-fld').value;
  data.email = document.querySelector('.email-input-fld').value;
  data.text = document.querySelector('.text-input-fld').value;
  const dataCollected = JSON.stringify(data);
  localStorage.setItem('dataTotal', dataCollected);
});

const storeItem = () => {
  const parsedData = JSON.parse(localStorage.getItem('data'));
  const name = document.querySelector('.fname-input-fld');
  const email = document.querySelector('.email-input-fld');
  const text = document.querySelector('.text-input-fld');
  name.value = parsedData.name;
  email.value = parsedData.email;
  text.value = parsedData.text;
};