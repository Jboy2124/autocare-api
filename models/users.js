const knex = require('../config/db-config/db-config')
const HashPassword = require('../utils/middlewares/bcrypt/bcrypt')

module.exports = {

    async list() {
        try {

        } catch (error) {
            console.log(error)
            throw error
        }
    }, 

    async find(payload) {
        try {
            
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    async store(payload){
        const { fname, lname, email, password } = payload

        try {
            const [id] = await knex('users')
                .insert({
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: await HashPassword.hash(password)
                })
            return id
            
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    async modify(id) {
        try {
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }

}