document.body.addEventListener(
  "click",
  () => {
    console.log("Captured at body");
  },
  true // 👈 this 'true' enables capture phase in the log
);
 