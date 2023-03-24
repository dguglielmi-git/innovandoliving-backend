const jwtDecode = require("jwt-decode");

module.exports = {
	async deleteByUsername(ctx) {
		// constole.log(ctx.request.body)
		// const { users_permissions_user } = ctx.request.body;
		// const entity = await strapi.services.cart.delete({ Users_permissions_user: users_permissions_user });
		// await next();
		// return sanitizeEntity(entity, { model: strapi.models.cart });
		// const model = await strapi.query("user").model;
		// const user = await model.find({ id: ctx.request.header.authorization.id })
		// console.log(user)
		//const users_permissions_user = jwtDecode(ctx.request.header.authorization.id)
		
		console.log(jwtDecode(ctx.request.header.authorization));
		const { id } = await jwtDecode(ctx.request.header.authorization);
		strapi.query('cart').delete({ users_permissions_user: id });
	},
};
