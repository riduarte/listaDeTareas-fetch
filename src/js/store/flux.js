const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			title: [],
			item: 0
		},
		actions: {
			addTask: e => {
				let store = getStore();
				if (e.key === "Enter" && e.target.value != "") {
					setStore({ title: [...store.title, { label: e.target.value, done: true }] });
					setStore({ item: store.item + 1 });
					e.target.value = "";
					getActions().putTasks();
				}
			},
			removeTask: index => {
				let store = getStore();
				let removeTaks = [...store.title];
				removeTaks.splice(index, 1);
				setStore({ item: store.item - 1 });
				setStore({ title: removeTaks });
				getActions().putTasks();
			},
			getTasks: async () => {
				let store = getStore();
				let response = await fetch(`https://assets.breatheco.de/apis/fake/todos/user/richard`);
				response = await response.json();
				setStore({ title: response });
				setStore({ item: store.title.length - 1 });
			},
			putTasks: async () => {
				let response = await fetch(`https://assets.breatheco.de/apis/fake/todos/user/richard`, {
					method: "PUT",
					body: JSON.stringify(getStore().title),
					headers: {
						"Content-type": "application/json"
					}
				});
			}
		}
	};
};

export default getState;
