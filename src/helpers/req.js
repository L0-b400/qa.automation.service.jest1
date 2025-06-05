const req = require('supertest');

const baseURL = 'https://fakestoreapi.com';

async function getReq(path) {
    try {
        const res = await req(baseURL)  
            .get(path)
            .set('Acept', 'aplication/json')  
            .expect('Content-Type, aplicatio/json')
            .expect(200);
            
        return res.body;
    } catch (error) {
        console.error('erooooooou', error)
        throw(error)
    }
}


module.exports = {
    getReq
};