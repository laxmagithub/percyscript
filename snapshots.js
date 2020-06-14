const PercyScript = require("@percy/script");

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  const takeShots = async (name) => {
    await percySnapshot(name, { widths: [768, 992, 1200] });
  };

  await page.goto("http://localhost:8000");
  await takeShots("TodoMVC home page");

  // Enter a new to-do.
  await page.type(".new-todo", "A really important todo");
  await page.keyboard.press("Enter");
  await takeShots("TodoMVC with a new todo");
});
