import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProducDetailComponent } from '@card/components/produc-detail/produc-detail.component';

@NgModule({
    exports: [CardComponent, ProducDetailComponent],
    declarations: [CardComponent, ProducDetailComponent],
    imports: [
        CommonModule,
        NgxMaskModule.forRoot()
    ],
    providers: [
    ]
})
export class CardModule { }
