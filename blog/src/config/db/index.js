const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/web123');
        console.log('thanh cong');
    } catch (error) {
        console.log('khong thanh cong');
    }
}

module.exports = { connect };
