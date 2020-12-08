const { Schema, model } = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const commandSchema = new Schema({
    category    : String,
    data        : [
        {
            command     : String,
            description : String,
        }
    ]
}, {
    timestamps: true
});

commandSchema.plugin( mongoosePaginate );

module.exports = model( 'Command', commandSchema );