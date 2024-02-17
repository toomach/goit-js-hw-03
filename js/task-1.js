// ----------------------------розгалуження-----------------------
// const sum = 30;
// if (sum >= 100) {
//   console.log("big cocolate");
// } else if(sum >= 50) {
//   console.log("small cocolate");
// } else if (sum >= 20) {
//   console.log("very small cocolate");
// } else {
//   console.log("no money no cocolate");
// }

// --------------------------тенарний оператор-----------------------
// const balance = 100;
// let message;

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

// const message = balance >= 0 ? "Positive" : "Negative"
// console.log(message);
// тернарний оператор ? : записується в коротких (одиноких) порівняннях

// -------------------------оператор switch case-----------------------
// оператор switch case створений тільки для суворого порівняння

// const days = 1;
// switch (days) {
//     case 0:
//         console.log("Today");
//         break;
//     case 1:
//         console.log("Tomorrow");
//         break;
//     case 2:
//         console.log("Overmorrow");
//         break;
//     default:
//         console.log("Date in the future");
// }

// --------------------логічні оператори--------------
// логічне поверненя типів
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(""));
// всюди повертається false

// console.log(Boolean(true));
// console.log(Boolean(5));
// console.log(Boolean("hello"));
// все інше повертає true

// оператор &&------------------------------
// console.log(5 && 4);
// якщо true && true повертає останнній
// console.log(5 && null);
// якщо зустрічає false повертає його

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;
// const canChat = isOnline && isFriend && !isDnd;
// console.log("можна відкрити чат?", canChat);

// оператор ||----------------------------------
// console.log(5 || 4);
// якщо true || true повертає першу правду
// console.log(5 || false);
// якщо зустрічає false повертає true
// console.log(null || undefined);
// якщо зустрічає false || false повертає останній

// const sub = "vip";
// const enter = sub === "pro" || sub === "vip";
// console.log("дозволено доступ", enter);

// оператор !------------------------------------
// console.log(!true);
// console.log(!5);
// повертає протилежне бульове значення

// ----------------------методи рядків-------------------
// const message = "    Hello world!    "
// console.log(message.slice(7));
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.includes("lo"));
// console.log(message.startsWith("Hel"));
// console.log(message.endsWith("world"));
// console.log(message.indexOf("r"));
// console.log(message.indexOf("s"));
// console.log(message.indexOf("s") === -1);
// console.log(message.trim());

// ---------------------цикл---------------------
// цикл for
// console.log("before");
// for (let i = 0; i <= 3; i += 1) {
//     console.log(i);
// }
// console.log("after");

// const str = "Hello"
// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
// }



function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const pricePerOllDroid = quantity * pricePerDroid;
    const msg = pricePerOllDroid > customerCredits ? `Insufficient funds!` : `You ordered ${quantity} droids worth ${pricePerOllDroid} credits!`;
    return msg;
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
