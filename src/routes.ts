import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersControllers';


const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()

routes.post('/setings', settingsController.create)
routes.post('/users',usersController.create )

export { routes }