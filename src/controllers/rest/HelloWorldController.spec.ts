import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("retornar un valor", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    expect(instance.aFunction()).toBe("hello")
  });

  it("una suma simple", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance, "Suma").mockReturnValueOnce(70)
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    expect(instance.Suma(3,4)).toBe(70)
    expect(instance.Suma(3,4)).toBe(7)
  });

  it("una resta simple", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance, "Resta").mockReturnValueOnce(1000)
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    expect(instance.Resta(600,50)).toBe(1000)
    expect(instance.Resta(600,50)).toBe(550)
  });

  //

});
