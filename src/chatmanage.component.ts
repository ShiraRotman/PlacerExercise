import { Component,ViewChildren } from '@angular/core';
import { ChatUserComponent } from './chatuser.component';
import { MessageData } from './message';

@Component
({
	selector: 'chat-manage',
	templateUrl: './chatmanage.component.html'
})

export class ChatManageComponent
{
	@ViewChildren(ChatUserComponent) chatviews;
	users: string[]=["User1","User2"];
	
	chatname: string='Group Chat';
	enteredName: string='';
	errors: string=null; editstate: number=0;
	
	onMessageSent(messageData: MessageData)
	{
		const timeStr: string=new Date(messageData.msgTime).toTimeString().substring(0,5);
		const message: string='[' + timeStr + '] ' + messageData.username + ': ' + 
				messageData.msgText + '\r\n';
		this.chatviews.toArray().forEach(view=>view.addNewMessage(message));
	}
	
	commitName()
	{
		this.enteredName=this.enteredName.trim();
		if (this.enteredName!=='')
		{
			this.chatname=this.enteredName;
			this.resetEditState();
		}
		else this.errors='The name is required';
	}
	
	resetEditState()
	{ this.enteredName=''; this.editstate=0; this.errors=null; }
}