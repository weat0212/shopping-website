export class Utils {

  /*
   * Turn snake_case to camelCase
   */
  static toCamel(s: string): string {
    return s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  }

  // static keysToCamel(o: any): any {
  //   if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
  //     const n = {};
  //     Object.keys(o)
  //       .forEach((k) => {
  //         n[this.toCamel(k)] = this.keysToCamel(o[k]);
  //       });
  //     return n;
  //   } else if (Array.isArray(o)) {
  //     return o.map((i) => {
  //       return this.keysToCamel(i);
  //     });
  //   }
  //   return o;
  // }

  static keysToCamel(o: any): any {
    if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
      const n: { [key: string]: any } = {};
      Object.keys(o).forEach((k) => {
        n[this.toCamel(k)] = this.keysToCamel(o[k]);
      });
      return n;
    } else if (Array.isArray(o)) {
      return o.map((i) => {
        return this.keysToCamel(i);
      });
    }
    return o;
  }
}
