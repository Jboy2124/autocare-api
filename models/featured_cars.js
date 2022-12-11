const knex = require('../config/db-config/db-config')


module.exports = {

    async list() {
        try {
            const result = await knex('featured_cars')
                .select('*')
                .leftJoin('items', 'featured_cars.car_id', 'items.id')
                .where('status', 'active')
            return result

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