

export function testFn() {
//   console.log("Immutability");

//   let str = "JS is Awesome";
// //   str[0] = "S";
//   str = "X";

//   console.log(str);

  const obj = {
    t: 'asd',
    get t() {
        console.log('trying to access t');
        return this.t;
    },
    set t(newVal) {
        console.log('trying to set t to new value');
        console.log(`old value = ${this.t}, new val=${newVal}`);
        this.t =newVal;
    }
  };
 

  console.log(obj);

  show(obj);


}

function show(o){ 
    o.t  = 'Test';
}