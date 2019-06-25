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
	chatname: string='Group Chat'; enteredName: string='';
	errors: string=null; editstate: number=0;
	
	onMessageSent(messageData: MessageData)
	{
		const timeStr: string=new Date(messageData.msgTime).toTimeString().substring(0,5);
		const message: string=`[${timeStr}] ${messageData.username}: ${messageData.msgText}\r\n`;
		this.chatviews.toArray().forEach(view=>view.addNewMessage(message));
	}
	
	commitName()
	{
		let isValid: boolean=true;
		this.enteredName=this.enteredName.trim();
		if (this.enteredName==='')
		{
			isValid=false;
			this.errors='The name is required';
		}
		else if (this.editstate==1) this.chatname=this.enteredName;
		else if (this.editstate==2)
		{
			if (this.users.includes(this.enteredName))
			{
				isValid=false;
				this.errors='This user already exists';
			}
			else
			{
				const message: string=`User ${this.enteredName} has joined the chat.\r\n`;
				this.chatviews.toArray().forEach(view=>view.addNewMessage(message));
				this.users.push(this.enteredName);
			}
		}
		if (isValid) this.resetEditState();
	}
	
	resetEditState()
	{ this.enteredName=''; this.editstate=0; this.errors=null; }
}