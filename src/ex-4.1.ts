type User = {
  id: string;
  name: string;
  age?: any;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
