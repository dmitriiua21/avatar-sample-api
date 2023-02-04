import { Injectable } from '@angular/core';
import { Toast } from '../types';

@Injectable()
export class ToastService {
  public toasts: Toast[] = [];

  public show(toast: Toast): void {
    this.toasts.push(toast);
  }

  public remove(toast: Toast): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  public clear(): void {
    this.toasts.splice(0, this.toasts.length);
  }
}
