import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return this.aFunction();
  }

  aFunction(){
    return "hello";
  }

  Suma(num1: any, num2: any){
    return num1 + num2;
  }

  Resta(num1: any, num2: any){
    return num1 - num2;
  }

  Multiplicacion(num1: any, num2: any){
    return num1 * num2;
  }

  Division(num1: any, num2: any){
    return num1 / num2;
  }
}
