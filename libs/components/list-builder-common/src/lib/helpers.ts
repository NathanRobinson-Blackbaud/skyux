import { Observable } from 'rxjs';

/**
 * @internal
 * @deprecated
 */
export function getData(item: any, selector: string): any {
  if (!selector) {
    return undefined;
  }

  const resultFieldParts = selector.split('.');
  if (resultFieldParts.length > 0 && resultFieldParts[0] === '') {
    resultFieldParts.shift();
  }

  let result = item;

  /* istanbul ignore else */
  if (resultFieldParts.length > 0) {
    for (const part of resultFieldParts) {
      /* istanbul ignore else */
      if (result[part] === null || result[part] === undefined) {
        result = null;
        break;
      }

      result = result[part];
    }
  }

  return result;
}

/**
 * @internal
 * @deprecated
 */
export function compare(value1: any, value2: any): -1 | 0 | 1 {
  if (value1 === null) {
    return 1;
  } else if (value2 === null) {
    return -1;
  }

  if (value1 && typeof value1 === 'string') {
    value1 = value1.toLowerCase();
  }

  if (value2 && typeof value2 === 'string') {
    value2 = value2.toLowerCase();
  }
  if (value1 === value2) {
    return 0;
  }

  return value1 > value2 ? 1 : -1;
}

/*
  Taken directly from rxjs's internal utility to determine whether an object is an Observable.
  See: https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/isObservable.ts
*/
/**
 * @internal
 * @deprecated
 */
export function isObservable<T>(obj: any): obj is Observable<T> {
  /* istanbul ignore next */
  return (
    !!obj &&
    (obj instanceof Observable ||
      (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'))
  );
}
