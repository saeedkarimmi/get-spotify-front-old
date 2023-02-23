import {Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import {ChartType, ChartEvent} from 'ng-chartist';
import {HttpService} from '../../shared/services/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgEventBus} from 'ng-event-bus';
import {EditAccountComponent, ViewAccountComponent} from '../../accounts/accounts.component';
import {ViewPaymentComponent} from '../../payments/payments.component';
import {RegisterationCheckComponent} from '../../todos/todos.component';

declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component implements OnInit {

    todos = [];
    support = [];
    dash = {
        total_day: 0,
        total_month: 0,
        total_year: 0,
    };

    // Line chart configuration Starts
    lineChart: Chart = {
        type: 'Line', data: data['LineDashboard'],
        options: {
            axisX: {
                showGrid: false
            },
            axisY: {
                showGrid: false,
                showLabel: false,
                low: 0,
                high: 100,
                offset: 0,
            },
            fullWidth: true,
            offset: 0,
        },
        events: {
            draw(data: any): void {
                var circleRadius = 4;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: 'ct-point-circle'
                    });

                    data.element.replace(circle);
                } else if (data.type === 'label') {
                    // adjust label position for rotation
                    const dX = data.width / 2 + (30 - data.width)
                    data.element.attr({x: data.element.attr('x') - dX})
                }
            }
        },

    };
    // Line chart configuration Ends

    //  Bar chart configuration Starts
    BarChart: Chart = {
        type: 'Bar', data: data['DashboardBar'], options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
            },
            low: 0,
            high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        },
        responsiveOptions: [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ],
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'gradient4',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(238, 9, 121,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(255, 106, 0, 1)'
                });
                defs.elem('linearGradient', {
                    id: 'gradient5',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 75, 145,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(120, 204, 55, 1)'
                });

                defs.elem('linearGradient', {
                    id: 'gradient6',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(132, 60, 247,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(56, 184, 242, 1)'
                });
                defs.elem('linearGradient', {
                    id: 'gradient7',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(155, 60, 183,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(255, 57, 111, 1)'
                });

            },
            draw(data: any): void {
                var barHorizontalCenter, barVerticalCenter, label, value;
                if (data.type === 'bar') {

                    data.element.attr({
                        y1: 195,
                        x1: data.x1 + 0.001
                    });

                }
            }
        },

    };

    // Bar chart configuration Ends

    constructor(private http: HttpService, private modalService: NgbModal, private eventBus: NgEventBus) {
        this.eventBus.on('todos:renew').subscribe((message) => {
            this.getItems();
        });
        this.eventBus.on('accounts:add').subscribe((message) => {
            this.getItems();
        });
    }

    ngOnInit() {
        this.getItems();
    }


    getItems() {
        this.http.get(this.http.withApiBase('shortcuts/todos')).subscribe(data2 => {
            this.todos = [];
            for (const t of data2) {
                if (t.status == 'todo') {
                    this.todos.push(t);
                }
            }

            this.todos.sort((a, b) => {
                return b['created_at'] - a['created_at']
            });
        }, error => {
            console.log(error)
        });

        this.http.get(this.http.withApiBase('support-threads?sort=-id&per-page=50&filter[status]=1')).subscribe(data2 => {
            this.support = data2.items
                .map(i => {
                    i['messages_arr'] = JSON.parse(i['messages']);
                    if (i.messages_arr !== null && i.messages_arr.length > 0) {
                        i['last_message'] = i['messages_arr'][i.messages_arr.length - 1].text;
                        if (i.last_message.length > 25) {
                            i.last_message = i.last_message.substring(0, 25) + ' ...';
                        }
                    }
                    return i;
                });
        }, error => {
            console.log(error)
        });

        this.http.get(this.http.withApiBase('shortcuts/dashboard')).subscribe(data2 => {
            this.dash = data2;
        }, error => {
            console.log(error)
        });
    }

    action(item) {
        switch (item.type) {
            case 'first payment':
            case 'late payment':
                const editModal1 = this.modalService.open(EditAccountComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal1.componentInstance.id = item.account_id;
                break;
            case 'payment':
                const editModal2 = this.modalService.open(ViewPaymentComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal2.componentInstance.id = item.data.id;
                break;
            case 'kick':
                const editModal3 = this.modalService.open(ViewAccountComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal3.componentInstance.id = item.account_id;
                break;
            case 'registeration':
                const editModal4 = this.modalService.open(RegisterationCheckComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal4.componentInstance.data = item.data.account;
                editModal4.componentInstance.id = item.data.id;
                break;
        }

    }
}
