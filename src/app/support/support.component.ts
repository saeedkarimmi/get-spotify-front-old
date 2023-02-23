import {ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Chat} from './chat.model';
import {HttpService} from '../shared/services/http.service';
import {NgEventBus} from 'ng-event-bus';
import {HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

    chat: Chat[];
    activeChatUser: string;
    activeChatId = 0;
    activeChatstatus = 3;
    activeChatUserImg: string;
    activeChatUserId: number;
    @ViewChild('messageInput') messageInputRef: ElementRef;
    @ViewChild('chatSidebar') sidebar: ElementRef;
    @ViewChild('contentOverlay') overlay: ElementRef;

    messages = new Array();
    item = 0;
    items = [];
    isLoading = true;
    reply = '';
    search = '';
    disableInput = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2,
                private http: HttpService, private eventBus: NgEventBus) {
        // this.chat = chatService.chat4;
        // this.activeChatUser = 'Ali M.Mirzaee';
        // this.activeChatUserImg = 'https://avatars2.githubusercontent.com/u/7364392?s=460&v=4';
    }

    ngOnInit() {
        this.getItems();
        setInterval(() => {
            this.getItems();
        }, 30000);
    }

    getItems() {
        this.http.get(this.http.withApiBase('support-threads?sort=-updated_at&per-page=50')).subscribe(data => {
            const temp_data = data.items.map(i => {
                i['messages_arr'] = JSON.parse(i['messages']);
                i['added'] = false;
                if (i.messages_arr !== null && i.messages_arr.length > 0) {
                    i['last_message'] = i['messages_arr'][i.messages_arr.length - 1].text;
                    if (i.last_message.length > 25) {
                        i.last_message = i.last_message.substring(0, 25) + ' ...';
                    }
                }
                return i;
            });

            this.items = [];

            for (let i = 0; i < temp_data.length; i++) {
                if (temp_data[i].added) {
                    continue;
                }
                temp_data[i].added = true;
                const f = temp_data[i];
                for (let j = 0; j < temp_data.length; j++) {
                    if (temp_data[j].added === false && temp_data[j].chat_id === f.chat_id) {
                        temp_data[j].added = true;
                        for (const m of temp_data[j].messages_arr) {
                            f.messages_arr.unshift(m);
                        }
                    }
                }

                if (f.messages_arr) {
                    f.messages_arr.sort((a, b) => {
                        return a.created_at - b.created_at
                    });
                    this.items.push(f);
                }
            }

            if (this.items.length > 0 && this.activeChatId === 0) {
                this.chat = this.generateChat(this.items[0].messages_arr);
                this.activeChatUser = this.items[0].display_name;
                this.activeChatId = this.items[0].id;
                this.activeChatstatus = this.items[0].status;
                this.http.get(this.http.withApiBase('shortcuts/get-accounts-by-chat-id?chat_id=' + this.items[0].chat_id))
                    .subscribe(data2 => {
                        if (data2 && data2.length > 0) {
                            this.activeChatUserId = data2[0].id;
                            this.activeChatUser = data2[0].fullname;
                        } else {
                            this.activeChatUser = this.items[0].display_name;
                            this.activeChatUserId = 0;
                        }
                    });

            }

            this.isLoading = false;
        });
    }

    onAddMessage() {

    }

    SetActive(event, id) {
        const hElement: HTMLElement = this.elRef.nativeElement;

        const allAnchors = hElement.getElementsByClassName('list-group-item');

        [].forEach.call(allAnchors, function (item: HTMLElement) {
            item.setAttribute('class', 'list-group-item no-border');
        });

        event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');

        this.messages = [];
        this.activeChatUserId = 0;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.chat = this.generateChat(this.items[i].messages_arr);
                this.activeChatId = id;
                this.activeChatUser = '';
                this.activeChatstatus = this.items[i].status;
                this.http.get(this.http.withApiBase('shortcuts/get-accounts-by-chat-id?chat_id=' + this.items[i].chat_id))
                    .subscribe(data => {
                        if (data && data.length > 0) {
                            this.activeChatUserId = data[0].id;
                            this.activeChatUser = data[0].fullname;
                        } else {
                            this.activeChatUser = this.items[i].display_name;
                            this.activeChatUserId = 0;
                        }
                    });

                break;
            }
        }


        this.disableInput = false;
        this.reply = '';


    }

    generateChat(messages) {
        const msg: Chat[] = [];
        for (let i = 0; i < messages.length; i++) {
            msg.push(
                new Chat(
                    messages[i].from == 'user' ? 'left' : 'right',
                    'chat' + (messages[i].from == 'user' ? ' chat-left' : ''),
                    (messages[i].from == 'user' ? '/assets/img/avatar.jpg' :
                        'https://getspotify.ir/wp-content/uploads/2019/03/Spotify.png'),
                    messages[i].created_at,
                    [messages[i].text],
                    'text'
                )
            );
        }

        return msg;
    }

    send() {
        if (!this.reply) {
            return;
        }
        this.disableInput = true;
        const body = new HttpParams()
            .set('text', this.reply);
        this.http.post(this.http.withApiBase('support-threads/' + this.activeChatId + '/reply'), body).subscribe(data => {
            this.reply = '';
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].id == data.id) {
                    this.items[i] = data;
                    this.items[i]['messages_arr'] = JSON.parse(this.items[i]['messages']);
                    this.items[i]['last_message'] = this.items[i]['messages_arr'][this.items[i].messages_arr.length - 1].text;
                    if (this.items[i].last_message.length > 25) {
                        this.items[i].last_message = this.items[i].last_message.substring(0, 25) + ' ...';
                    }
                    this.chat = this.generateChat(this.items[i]['messages_arr']);
                    break;
                }
            }
            this.activeChatstatus = 2;
            this.disableInput = false;
        }, err => {
            this.disableInput = false;
        });
    }

    close() {
        this.disableInput = true;
        const body = new HttpParams();
        this.http.post(this.http.withApiBase('support-threads/' + this.activeChatId + '/close'), body).subscribe(data => {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].id == data.id) {
                    this.items[i] = data;
                    this.items[i]['messages_arr'] = JSON.parse(this.items[i]['messages']);
                    this.items[i]['last_message'] = this.items[i]['messages_arr'][this.items[i].messages_arr.length - 1].text;
                    if (this.items[i].last_message.length > 25) {
                        this.items[i].last_message = this.items[i].last_message.substring(0, 25) + ' ...';
                    }
                    break;
                }
            }
            this.activeChatstatus = 3;
            this.disableInput = false;
        }, err => {
            this.disableInput = false;
        });
    }


    onSidebarToggle() {
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.overlay.nativeElement, 'show');
    }

    onContentOverlay() {
        this.renderer.removeClass(this.overlay.nativeElement, 'show');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-none');

    }

}
