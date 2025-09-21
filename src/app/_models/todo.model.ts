export class TodoModel {
  constructor(
    public id: number = 0, // Public makes this id a feature of this class
    public title: string = '',
    public description: string = '',
  ) {}
}
