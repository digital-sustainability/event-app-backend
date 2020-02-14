import { MatTableDataSource, MatSort } from '@angular/material';

export class MatTableDataSourceWithPositionSort<T> extends MatTableDataSource<T> {

  _compareFn = new Intl.Collator('pl', {sensitivity: 'base', numeric: true}).compare;

  sortData: ((data: T[], sort: MatSort) => T[]) = (data: T[], sort: MatSort): T[] => {
    const active = sort.active;
    const direction = sort.direction;
    if (!active || direction === '') { return data; }

    if (active !== 'position') {
      // default sorting
      return data.sort((a, b) => {
        const valueA = this.sortingDataAccessor(a, active);
        const valueB = this.sortingDataAccessor(b, active);

        // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
        // one value exists while the other doesn't. In this case, existing value should come last.
        // This avoids inconsistent results when comparing values to undefined/null.
        // If neither value exists, return 0 (equal).
        let comparatorResult = 0;
        if (valueA != null && valueB != null) {
          // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }

        return comparatorResult * (direction === 'asc' ? 1 : -1);
      });
    } else {
      // sort on position, but if position = 0, then sort with ID
      return data.sort((a, b) => {
        const valueA = this.sortingDataAccessor(a, 'position');
        const idA = this.sortingDataAccessor(a, 'id');
        const valueB = this.sortingDataAccessor(b, 'position');
        const idB = this.sortingDataAccessor(b, 'id');

        // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
        // one value exists while the other doesn't. In this case, existing value should come last.
        // This avoids inconsistent results when comparing values to undefined/null.
        // If neither value exists, return 0 (equal).
        let comparatorResult = 0;
        if (valueA !== 0 && valueB !== 0) {
          // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          } else {
            if (idA > idB) {
              comparatorResult = 1;
            } else if (idA < idB) {
              comparatorResult = -1;
            }
          }
        } else if (valueA !== 0) {
          comparatorResult = -1;
        } else if (valueB !== 0) {
          comparatorResult = 1;
        } else {
          if (idA > idB) {
            comparatorResult = 1;
          } else if (idA < idB) {
            comparatorResult = -1;
          }
        }

        return comparatorResult * (direction === 'asc' ? 1 : -1);
      });
    }
  }
}
