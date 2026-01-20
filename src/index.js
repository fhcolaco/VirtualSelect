let op = Array.from({ length: 10 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1), // valores são strings
}));

VirtualSelect.init({
  ele: "#sample-select",
  multiple: true,
  showValueAsTags: true,
  disabledOptions: ["3", "4"], // use strings, não números
  selectedValue: ["3", "4", "5"], // idem
  options: op,
});
