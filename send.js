// npm install axios
const axios = require('axios');
axios.post('http://localhost:5000/chat/sendmessage/6287870884407', {
  message: 'Nomor Verifikasi Anda di Agendaspesial adalah : *781234*',
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });