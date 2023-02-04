import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { Toast } from '../../types';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  host: {
    class: 'toast-container position-absolute top-0 start-50 translate-middle-x p-3',
  }
})
export class ToastComponent {
  public constructor(public readonly toastService: ToastService) {}

  public get toasts(): Toast[] {
    return this.toastService.toasts;
  }

  public remove(toast: Toast): void {
    this.toastService.remove(toast);
  }
}
