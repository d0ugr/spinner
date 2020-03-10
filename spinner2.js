// Trio programmed with @Linh095 and @BilliMorgan

process.stdout.write("hello from spinner2.js... \ryoooo\n");

const spinnerama = "|/-\\";
const interval = 200;
let timeout = 0;

for (let i = 0; i < 2; i++) {
  for (const char of spinnerama) {
    setTimeout(() => process.stdout.write(`\r${char}   `), timeout += interval);
  }
}
setTimeout(() => process.stdout.write("\n"), timeout);

console.log("Done queueing up timeouts.");
