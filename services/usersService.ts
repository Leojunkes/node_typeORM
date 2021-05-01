import { UsersRepository } from "../src/repositories/usersRepository"
import { getCustomRepository } from "typeorm";

class UserService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository)
        //Verificar se usuario existe
        const userExists = await usersRepository.findOne({
            email
        })


        //se existir, retornar user
        if (userExists) {
            return userExists
        }
        const user = usersRepository.create({
            email
        })
        await usersRepository.save(user)


        //se não existir, salvar no db
        return user
    }
}

export { UserService }