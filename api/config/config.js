const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://juliolopes:Mh2nCjZWYX7fs-v@api-mongo-dyuua.gcp.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'bananaQuente',
                jwt_expires_in: '7d'
            }
        case 'hml':
            return {
                bd_string: 'mongodb+srv://juliolopes:Mh2nCjZWYX7fs-v@api-mongo-dyuua.gcp.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'bananaQuente',
                jwt_expires_in: '15d'
            }
        case 'prod':
            return {
                bd_string: 'mongodb+srv://juliolopes:Mh2nCjZWYX7fs-v@api-mongo-dyuua.gcp.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'bananaQuente',
                jwt_expires_in: '1m'
            }
    }
}

console.log(`iniciando API em ambiente ${env.toUpperCase()}`);

module.exports = config();