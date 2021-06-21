export class ApiResponse<T> {
  statusCode: number;
  result: Array<T>;
  error: string;

  constructor(result: Array<T>, error: string, statusCode: number) {
    this.result = result;
    this.error = error;
    this.statusCode = statusCode;
  }
}
