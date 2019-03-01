const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://admin:089235vini$@cluster0-ienac.mongodb.net/test?retryWrites=true'
    }
};
module.exports = variables;