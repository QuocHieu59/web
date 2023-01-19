module.exports = {
    mutipleMongooseToObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.ToObject());
    },
    mongooseToObiect: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}