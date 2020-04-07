// Repetitive functional code snippets should be placed into the lib file.
// Example below. Cent values are formatted into USD values.

export default function(amount) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  };
  // if its a whole, dollar amount, leave off the .00
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
}
