// Trio programmed with @Linh095 and @BilliMorgan

process.stdout.write("hello from spinner1.js... \rheyyy\n");

const interval = 200;
let timeout = 0;

for (let i = 0; i < 2; i++) {
  setTimeout(() => process.stdout.write("\r|   "), timeout += interval);
  setTimeout(() => process.stdout.write("\r/   "), timeout += interval);
  setTimeout(() => process.stdout.write("\r-   "), timeout += interval);
  setTimeout(() => process.stdout.write("\r\\   "), timeout += interval);
}
setTimeout(() => process.stdout.write("\n"), timeout += interval);

console.log("Done queueing up timeouts.");
