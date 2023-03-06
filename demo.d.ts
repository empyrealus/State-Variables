// global type interface, global variable definition
interface state_variables{
    variable: string,
    v1: number,
    v2: string,
    v3: void,
    scope: number;
}
// set type to any and return undefined to maintain properties undefined nature.
function  error_rep(report_mode: string, e: string): any{
   switch(report_mode){
     case "silent":
      console.log(e);
      break;
     default:
      throw new Error(e);
     }
   return undefined;
}
/*
    # State variables
    # 0 = global scope (var)
    # 1 = local scope (let)
*/
class state_variable_composer_container
{
  variable: string;v1: number;v2: string;v3: void;scope: number;
  constructor(scope: number,variable_name: string, v1?: number, v2?: string, v3?: void)
  {
    this.variable = variable_name;
    this.v1 = (v1 == undefined)? 0 : error_rep("silent","Not defined");
    this.v2 = (v2 == undefined)? 0 : error_rep("silent","Not defined");
    this.v3 = (v1 == undefined)? 0 : error_rep("silent","Not defined");
    this.scope = scope;
  }
  
}
const varCreator: state_variables = new state_variable_composer_container(0,"myString",undefined,"This is my string for the variable \"MyString\"",undefined);
console.log(varCreator);
