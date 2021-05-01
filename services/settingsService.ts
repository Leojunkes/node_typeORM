import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../src/repositories/settingsRepository"
import { Request, Response } from 'express'

interface SettingsProps {
    chat: boolean;
    username: string;
}

class SettingsService {
    async create({ chat, username }: SettingsProps) {

        const settingsRepository = getCustomRepository(SettingsRepository)

        const userExists = await settingsRepository.findOne({ 
            username
        })

        const settings = settingsRepository.create({
            chat,
            username
        })

        if(userExists){
            throw new Error('Usuário já cadastrado!')
        }

        await settingsRepository.save(settings)

        return settings

    }
}

export { SettingsService }