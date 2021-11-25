import User from '../models/Users';

export const createUser = async ({
	userName,
    userAge
}) => {
    const user = User.create({
		userName,
        userAge
	});

    return{
        user
    }
}