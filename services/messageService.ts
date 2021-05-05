import { getCustomRepository } from "typeorm";

import { MessageRepository } from "../src/repositories/messageRepository";

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessageService {
    async create({ admin_id,user_id, text  }: IMessageCreate) {
        const messagesRepository = getCustomRepository(MessageRepository);

        const message = messagesRepository.create({
            admin_id,
            user_id,
            text
        })

        await messagesRepository.save(message);
        return message;
    }
}

export { MessageService }