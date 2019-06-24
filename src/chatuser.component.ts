import { Component,EventEmitter,Input,Output } from '@angular/core';
import { MessageData } from './message';

@Component 
({
	selector: 'chat-user',
	templateUrl: './chatuser.component.html'
})

export class ChatUserComponent
{
	chatlog: string=''; userMsg: string='';
	@Input() username: string='User';
	@Output() msgSent=new EventEmitter<MessageData>();
	
	sendMessage()
	{
		if (this.userMsg!=='')
		{
			const messageData=new MessageData(this.username,Date.now(),this.userMsg);
			this.msgSent.emit(messageData); this.userMsg='';
		}
	}
	
	addNewMessage(message: string)
	{
		if (message!==null)
			this.chatlog=this.chatlog.concat(message);
	}
}