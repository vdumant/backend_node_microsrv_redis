module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post:{
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'sql3.freesqldatabase.com',
        user: process.env.MYSQL_USER || 'sql3650816',
        password: process.env.MYSQL_PASS || 'pY4JrEajAQ',
        database: process.env.MYSQL_DB || 'sql3650816',
    },
    mysqlService:{
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService:{
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-11552.c93.us-east-1-3.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 11552,
        password: process.env.REDIS_PASS || '1wm712hvjHe8zb1vsldeCieawZBx9pmm',
        user: process.env.REDIS_PASS || 'default',
    }
}