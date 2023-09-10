const { Model, DataTypes, STRING } = require("sequelize");
const DatabaseEngine = require("../utils/DatabaseEngine");

const db = new DatabaseEngine();

class User extends Model {};

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db.getConnectionManager()
    }
)

module.exports = User;
