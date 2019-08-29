import "jest";
import { Greeter } from "../src/Greeter";

test("it greets", async () => {
  let greeter = new Greeter("Damian");
  expect(await greeter.greet()).toEqual("Hello, Damian");
});
