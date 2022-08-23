const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

function loop(obj) {
  for (const element in obj) {
    if (typeof obj[element] == "object") {
      loop(obj[element]);
    } else {
      obj[element] = Number(!obj[element]);
    }
  }
}

console.log(d);
loop(d);
console.log(d);

// run command
//$ node 2.object_revers_value.js
