
// const state = {

// 	cart_items:[],
// 	count:0,
// 	total_price:0
// };

const state = () => ({
  cart_items:[],
	count:0,
	total_price:0
})

const getters = {

};

const actions = {

	add_cart({commit}, cart) {
		commit('add_cart_item', cart);	
	},

	item_increment({commit}, id) {
		commit('increment', id);	
	},

	item_decrement({commit}, id) {
		commit('decrement', id);	
	},

	remove_cart({commit}, pd_slug) {
		commit('remove_cart_item', pd_slug);
	},

	cart_empty({commit}) {
		commit('empty_cart');
	}
};


const mutations = {

	add_cart_item(state, temp) {

		// state.cart_items.push(temp);
		// state.count++;

		// let price = state.cart_items;
  //       let new_price = 0;

		let itemsExist = state.cart_items.find(item => {
			return item.slug == temp.slug;
		})

		if(itemsExist) {
			itemsExist.units = parseInt(itemsExist.units)+parseInt(temp.units);
			itemsExist.price = parseInt(itemsExist.units)*parseInt(temp.price);
   //         	for(let i = 0; i < price.length; i++) {
   //             new_price += parseInt(price[i].price);
        } 

        else {
        	state.cart_items.push(temp);
			state.count++;
        }
         
  //       state.total_price = new_price;
		// return;
		// }
		
  //       for(let i = 0; i < price.length; i++) {
  //           new_price += parseInt(price[i].price);
  //        }

  //        state.total_price = new_price;
	},

	increment(state, id) {

		let itemsExist = state.cart_items.find(item => {
			return item.id == id;
		})

		if(itemsExist) {

			let price = parseInt(itemsExist.price)/parseInt(itemsExist.units);
			itemsExist.units++;
			itemsExist.price = parseInt(itemsExist.units)*parseInt(price);
		}

		let price = state.cart_items;
        let new_price = 0;
           	for(let i = 0; i < price.length; i++) {
               new_price += parseInt(price[i].price);
         }

         state.total_price = new_price;
	},

	decrement(state, id) {

		let itemsExist = state.cart_items.find(item => {
			return item.id == id;
		})

		if(itemsExist) {

			let price = parseInt(itemsExist.price)/parseInt(itemsExist.units);
			if(itemsExist.units == 1) {
				return false;
			}
			itemsExist.units--;
			
			itemsExist.price = parseInt(itemsExist.units)*parseInt(price);
		}

		let price = state.cart_items;
        let new_price = 0;
           	for(let i = 0; i < price.length; i++) {
               new_price += parseInt(price[i].price);
         }

         state.total_price = new_price;
	},

	remove_cart_item(state, pd_slug) {

		var index = state.cart_items.findIndex(item => item.pd_slug == pd_slug);
		state.cart_items.splice(index, 1);
		state.count--;

		// let price = state.cart_items;
  //       let new_price = 0;
  //          	for(let i = 0; i < price.length; i++) {
  //              new_price += parseInt(price[i].price);
  //        }

  //        state.total_price = new_price;
	},

	empty_cart(state) {
		state.cart_items = [];
		state.count = 0;
	}

};

export default {

	namespaced: true,
	state,
	getters,
	actions,
	mutations
}