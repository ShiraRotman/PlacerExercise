import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GroupChatModule } from './chat.module';

platformBrowserDynamic().bootstrapModule(GroupChatModule).catch(err => console.log(err));