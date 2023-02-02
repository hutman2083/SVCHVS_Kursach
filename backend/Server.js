
const http = require('http');

const server = http.createServer();

const axios = require('axios');

const listUsers = async () => {
    try {
        const res = await axios.get('https://localhost:3000/services');
        console.log(res.data.data);
    } catch (err) {
        console.error(err);
    }
};

listUsers();

const createUser = async () => {
    try {
      const res = await axios.post('https://localhost:3000/services', {
        firstname: 'John',
        lastname: 'Smith',
        price: '50',
        trainername: 'Khalif'
      })
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }
  
  createUser()


server.listen(5000, () => console.log('Сервер работает по адресу localhost:5000'));