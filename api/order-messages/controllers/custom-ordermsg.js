

const findLastMessageId = (ctx) => {
    const { order } = ctx;
    const model = strapi.query("cart").model;
    return model.find({ order }).select({ id_message }).sort({ id_message }, -1).limit(1).exec(function (err, ord) {
        let max_order = ord[0].price;
    })
}

module.exports = {
    findLastMessageId,
};