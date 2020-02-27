const db = require('../database/connection')

module.exports = {
    all,
}

function all() {
    return db('cohorts');
}