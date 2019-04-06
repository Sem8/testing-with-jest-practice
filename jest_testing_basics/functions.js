const axios = require('axios');
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => undefined,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad' }
        user['lastName'] = 'Traversy';
        return user;
    },
    fetchUser: () => axios.get('http://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => `error: ${err}`)
};

module.exports = functions