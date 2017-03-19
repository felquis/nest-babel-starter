import { Component, Inject } from 'nest.js';
import { ChatGateway } from './chat.gateway';

@Component()
@Inject([ ChatGateway ])
export class ChatService {

    constructor(chatGateway) {
        this.chatGateway = chatGateway;
        
        const stream$ = this.chatGateway.msgStream;
        stream$.subscribe(this.storeMessage.bind(this));
    }

    storeMessage(data) {}

}