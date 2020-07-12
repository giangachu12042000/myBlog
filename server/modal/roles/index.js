
const mongose = require('mongoose');
const Schema = mongose.Schema;

const RoleSchema = new Schema(
    {
        name: { type: String },
        type: { type: String,  enum: ["user", "staff"], default: "user" },
        status: { type: Boolean, default: true },
        permissions: {
          type: String,
          enum: ["admin", "user"],
          default: "user"
        }
    }
)
module.exports = mongoose.model('roles',RoleSchema)