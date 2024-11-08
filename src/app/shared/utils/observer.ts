import { HttpErrorResponse } from '@angular/common/http';
import { Observer } from 'rxjs';

export function createObserver<T>(
  onSuccess: (r: T) => void,
  onError?: (error: HttpErrorResponse) => void,
  onComplete?: () => void
): Observer<T> {
  return {
    next: (response: T) => {
      console.log('Observer next:', response);
      onSuccess(response);
    },
    error: (error: HttpErrorResponse) => {
      onError && onError(error);
    },
    complete: () => {
      onComplete && onComplete();
    },
  };
}
