const Joi = require('joi')
const Accounts = require('../../../models/account')
const Advertiser = require('../../../models/advertiser')
const multer = require('multer')



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

        const infoSchema = Joi.object({
            advID: Joi.number()
                .required(),
            company: Joi.string()
                .required(),
            tin: Joi.string()
                .optional(),
            regNo: Joi.string()
                .optional(),
            description: Joi.string()
                .optional(),
            address: Joi.string()
                .optional(),
            brgy: Joi.string()
                .optional(),
            city: Joi.string()
                .required(),
            zip: Joi.number()
                .optional(),
            province: Joi.string()
                .required(),
            landmark: Joi.string()
                .optional(),
            contactPerson: Joi.string()
                .required(),
            mobileNo: Joi.string()
                .required(),
            telNo: Joi.string()
                .optional()
        })
        try {
            const { 
                fname, 
                lname, 
                email, 
                password,
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
                telNo,
             } = req.body

            const data = await schema.validateAsync({fname, lname, email, password})
            const advID = await Accounts.store(data) 

            const basinInfo = await infoSchema.validateAsync({
                advID, company, tin, regNo, description, address, brgy, city, zip, province, landmark, contactPerson, mobileNo, telNo
            })
            const response = await Advertiser.store(basinInfo)
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
            const result = await Accounts.modify(data)

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
    }, 

    async auth(req, res) {
        const schema = Joi.object({
            email: Joi.string()
                .required(),
            password: Joi.string()
                .required()
        })

        try {
            const { email, password } = req.body
            const data = await schema.validateAsync({ email, password })
            const response = await Accounts.find(data)
            res.json(response)
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}