const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

    let user = sequelize.define('user', {
        firstname: {
            type: DataTypes.STRING,
            required: true,
        },
        lastname: {
            type: DataTypes.STRING,
            required: true,
        },
        email: {
            type: DataTypes.STRING,
            required: true,
        },
    },

    return user;
};
