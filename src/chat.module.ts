import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ChatManageComponent } from './chatmanage.component';
import { ChatUserComponent } from './chatuser.component';

@NgModule 
({
	declarations: [ChatManageComponent,ChatUserComponent],
	imports: [BrowserModule,FormsModule], providers: [],
	bootstrap: [ChatManageComponent]
})
export class GroupChatModule { }