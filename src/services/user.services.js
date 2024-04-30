const Entities = require("../entities/index.entities");

const findAll = async (dependencies) => {
	const { userRepo } = dependencies;

	if (!userRepo) throw Error("Need to have user repo");

	const execute = async () => userRepo.findAll();
	return { execute };
};

const findById = async (dependencies) => {
	const { userRepo } = dependencies;

	if (!userRepo) throw Error("Need to have user repo");
	const execute = async (id) => userRepo.findById(id);
	return { execute };
};

const create = async (dependencies) => {
	const { userRepo } = dependencies;

	if (!userRepo) throw Error("Need to have user repo");
	const execute = async (user) => {
		const newUser = new Entities.User(user);
		return userRepo.create(newUser);
	};
	return { execute };
};

const update = async (dependencies) => {
	const { userRepo } = dependencies;

	if (!userRepo) throw Error("Need to have user repo");
	const execute = async (user) => {
		const newUser = new Entities.User(user);
		return userRepo.update(newUser);
	};
	return { execute };
};
const deleteUser = async (dependencies) => {
	const { userRepo } = dependencies;

	if (!userRepo) throw Error("Need to have user repo");
	const execute = async (id) => userRepo.deleteUser(id);
	return { execute };
};

export { findAll, findById, update, deleteUser, create };
