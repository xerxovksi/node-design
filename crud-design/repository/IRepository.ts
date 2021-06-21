export interface IRepository<T> {
  getAll(): Array<T>;
  create(item: T): T;
}
