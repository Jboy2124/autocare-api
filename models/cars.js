const knex = require('../config/db-config/db-config')


module.exports = {

    async list() {
        try {

            const result = await knex('posting')
                .select('*')
                .leftJoin('items', 'posting.id', 'items.posting_id')
                .leftJoin('vehicle_type', 'posting.vehicle_type_id', 'vehicle_type.id')
                .leftJoin('payment_type', 'posting.payment_type', 'payment_type.id')
            const count = await knex('posting').count({count: '*'})
            
            return [{ count: count }, {result: result}]

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