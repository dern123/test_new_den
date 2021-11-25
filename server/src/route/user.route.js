import { CreateUserController } from './user.controller';
import { Router } from 'express';

const route = Router();

export default function (root) {
	root.use('/users', route);

	route.get('/', CreateUserController);

	route.post('/register', CreateUserController);
}