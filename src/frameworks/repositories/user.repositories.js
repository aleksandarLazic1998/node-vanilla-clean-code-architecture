const uuid4 = require("uuid4");
const { inMemoryDb } = require("../database/inMemory.db");

const findAll = async () => {
	return inMemoryDb.users;
};

const findById = async (id) => {
	return inMemoryDb.users.find((x) => x.id === id);
};

const create = async (user) => {
	if (!user.id) user.id = uuid4();

	return inMemoryDb.users.push(user);
};

const update = async (user) => {
	const foundIndexOfUser = inMemoryDb.users.findIndex(
		(userInDb) => userInDb.id === user.id
	);

	if (foundIndexOfUser < 0) return null;

	inMemoryDb.users[foundIndexOfUser] = user;

	return inMemoryDb.users[foundIndexOfUser];
};
const deleteUser = async (id) => {
	const foundIndexOfUser = inMemoryDb.users.findIndex(
		(userInDb) => userInDb.id === id
	);

	if (foundIndexOfUser < 0) return null;
	inMemoryDb.users.splice(foundIndexOfUser, 1);

	return inMemoryDb.users;
};

export { findAll, findById, update, deleteUser, create };
