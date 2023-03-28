const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);
const supertest = require("supertest");


test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
   

  .expect(response.body).toEqual("<html><body><h1>Welcome to the World Wide Web!</h1></body></html>");
});




