'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const find = (ctx) => {
    const { users_permissions_user } = ctx;
    const model = strapi.query("cart").model;
    return model.find({ users_permissions_user }).populate([{
        path: 'producto', populate: {
            path: 'platform'
        }
    }]);
}

module.exports = {
    find,
};
