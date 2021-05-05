import { Router } from 'express';
import { MessagesController } from './controllers/MessageController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersControllers';


const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post('/setings', settingsController.create)
routes.post('/users',usersController.create )
routes.post('/messages', messagesController.create)


export { routes }