import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {
  transform(num: number, unit = 'm'): any {
    if (isNaN(num)) {
      return null;
    }
    if (num === null) {
      return null;
    }
    if (num === 0) {
      return 0 + unit;
    }
    let abs = Math.abs(num);
    const rounder = Math.pow(10, 1);
    const isNegative = num < 0;
    let key = '';

    const powers = [
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'k', value: 1000 }
    ];

    for (const power of powers) {
      let reduced = abs / power.value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = power.key;
        break;
      }
    }
    return (isNegative ? '-' : '') + abs.toFixed(0) + key + unit;
  }
}
