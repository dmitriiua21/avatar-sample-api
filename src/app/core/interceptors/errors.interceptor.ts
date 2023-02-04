import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  public constructor(public readonly toastService: ToastService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        error: (errorResponse: HttpErrorResponse): void => {
          this.toastService.show({
            text: errorResponse.statusText,
            className: 'bg-danger text-light',
            delay: 500
          })
        },
      })
    );
  }
}
