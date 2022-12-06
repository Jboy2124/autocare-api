const Greetings = require('../../../models/greetings')

module.exports = {
    get(req, res) {
        try {
            const response = Greetings.greet()
            res.json(response)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}