import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(servers: any, ...args: any[]): any {
    servers.sort((a, b) => {
      if (a['name'] > b['name']) {
        return 1;
      } else {
        return -1;
      }
    });

    return servers;

  }

}
