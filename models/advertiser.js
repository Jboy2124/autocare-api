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
        const { 
            advID,
            company, 
            tin, 
            regNo, 
            description,
            address,
            brgy,
            city,
            zip,
            province,
            landmark,
            contactPerson,
            mobileNo,
            telNo } = payload

        try {
            const [id] = await knex('advertiser')
                .insert({
                    adv_id: advID,
                    company: company,
                    tin: tin,
                    regNo: regNo,
                    description: description,
                    address: address,
                    brgy: brgy,
                    city_municipality: city,
                    zip_code: zip,
                    province: province,
                    landmark: landmark,
                    contact_person: contactPerson,
                    mobile_no: mobileNo,
                    landline: telNo
                })
            return ({ message: 'Account created successfully!' })
            
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