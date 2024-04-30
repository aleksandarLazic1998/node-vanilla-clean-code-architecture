class User {
	constructor(props) {
		const { id, firstName, lastName, email, password } = props;

		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}
}

module.exports = { User };
