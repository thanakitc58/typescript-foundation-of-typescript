type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
//age เป็น Optional 