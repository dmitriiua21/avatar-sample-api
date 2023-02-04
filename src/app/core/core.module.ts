import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './components/toast/toast.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { ApiHttpService } from './services/api-http.service';

@NgModule({
  declarations: [
    ToastComponent,
    TabsComponent,
    TabComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbNavModule,
  ],
  exports: [
    ToastComponent,
    TabsComponent,
    TabComponent,
  ],
  providers: [
    ToastService,
    ApiHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
