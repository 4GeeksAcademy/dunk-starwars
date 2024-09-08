const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getData: async (str) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/${str}/`);
					const data = await res.json();
					return data.results;
				} catch (err) {
					console.error(err);
				}
			},
			getDataById: async (title, id) => {
				try{
					const res = await fetch(`https://www.swapi.tech/api/${title}/${id}`);
					const data = await res.json();
					console.log(data)
					return data.result;
				} catch (err){
					console.error(err);
				}
			},
			addFavorite: (item) => {
				const store = getStore()
				const isFavorite = store.favorites.some(favorite => favorite.name === item.name)

				if(!isFavorite){
					const newFavorites = [...store.favorites, item]
					setStore({favorites: newFavorites})
				}

			},
			removeFavorite: (item) => {
				const store = getStore()

				const newFavorites = store.favorites.filter(favorite => favorite.name !== item.name )

				setStore({favorites: newFavorites})
			}
		
		}
	};
};

export default getState;
