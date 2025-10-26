export class TodoModel {
  constructor(
    public id: number = 0, // Public makes this id a feature of this class
    public documentId: string,
    public title: string = '',
    public description: string = '',
  ) {}
}
// Todo for create does not need an ID because backend creates one
export class TodoForCreateModel {
  constructor(
    public title: string = '',
    public description: string = '',
  ) {
  }
}
