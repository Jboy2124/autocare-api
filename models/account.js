const knex = require('../config/db-config/db-config')
const HashPassword = require('../utils/middlewares/bcrypt/bcrypt')


module.exports = {

    async list() {
        try {
            const result = await knex('account')
                .select('*')

        } catch (error) {
            console.log(error)
            throw error
        }
    }, 

    async find(payload) {
        const { email, password } = payload
        let response = ''
        try {
            const result = await knex('account')
                .select({
                    adv_id: 'adv_id',
                    firstname: 'firstname',
                    lastname: 'lastname',
                    password: 'password'
                })
                .where('email', email)           

            if(result.length > 0) {
                const isMatch = await HashPassword.verify(password, result[0].password)

                if(isMatch){
                    response = ({ response: 'Success' })
                } else {
                    response = ({ response: 'Invalid Password' })
                }
            } else {
                response = ({ response: 'Invalid Username' })
            }

            return response

        } catch (error) {
            console.log(error)
            throw error
        }
    },

    async store(payload){
        const { fname, lname, email, password } = payload

        try {
            const [id] = await knex('account')
                .insert({
                    firstname: fname,
                    lastname: lname,
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