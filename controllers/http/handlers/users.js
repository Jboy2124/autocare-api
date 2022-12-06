const Joi = require('joi')
const Users = require('../../../models/users')


module.exports = {
    async get(req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    async post(req, res) {
        const schema = Joi.object({
            fname: Joi.string()
                .required(),
            lname: Joi.string()
                .required(),
            email: Joi.string()
                .required(),
            password: Joi.string()
                .required()
        })

        try {
            
            const data = await schema.validateAsync(req.body)
            const response = await Users.store(data)
            res.json(response)

        } catch (error) {
            console.log(error)
            throw error
        }
    },

    async patch(req, res) {
        const schema = Joi.object({
            id: Joi.number()
                .required(),
            fname: Joi.string()
                .optional(),
            lname: Joi.string()
                .optional(),
            email: Joi.email()
                .optional()
        })

        try {

            const data = await schema.validateAsync(req.body)
            const result = await Users.modify(data)
            res.json(result)
            
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    async delete(req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}