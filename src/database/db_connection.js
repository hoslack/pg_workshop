const { Pool } require('pg');

require('env2')('config.env');


if(!process.env.DB_URL){
	throw new Error('Environment variable must be set');
}

const pool = new Pool({
	ConnectionString:process.env.DB_URL
});


module.exports = pool;

