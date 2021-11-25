import { createUser } from '../service/user.service';
import UserMapper from './user.mapper';

export const CreateUserController = async (request, response) => {
	console.log('REQUEST', request.body);
	const {
		userName,
		userAge,
	} = request.body;

	const { user } = await createUser({
		userName,
		userAge,
	});

	response.status(201).json({
		status: true,
		// user,
		user: UserMapper(user),
	});
};
