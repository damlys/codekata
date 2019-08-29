export class Greeter {
  protected name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public async greet(): Promise<string> {
    return "Hello, " + this.name;
  }
}
