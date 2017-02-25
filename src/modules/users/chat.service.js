import { Component } from 'nest.js';
import { ChatGateway } from './chat.gateway';

@Component()
export class ChatService {

    constructor(chatGateway) {
        this.chatGateway = chatGateway;
        
        const stream$ = this.chatGateway.msgStream;
        stream$.subscribe(this.storeMessage.bind(this));
    }

    static get dependencies() {
        return [ ChatGateway ];
    }

    storeMessage(data) {}

}