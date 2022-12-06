module.exports = {
    greet() {
        try {
            return greetings = 'Hello, this is a response from server!'
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}