import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProductDetailComponent } from '@app/modules/card/components/product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    exports: [CardComponent, ProductDetailComponent],
    declarations: [CardComponent, ProductDetailComponent],
    imports: [
        CommonModule,
        NgbModule,
        NgxMaskModule.forRoot()
    ],
    providers: [
    ]
})
export class CardModule { }
