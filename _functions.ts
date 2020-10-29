let _anyType: any;
_anyType = 20;

function add(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
add(5, 10);
add(5);

function add2(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
add2(5, 10);
add2(5);
