import "dotenv/config";
import app from "../../13Create-your-own-HTTP-server/app";

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server running at http://localhost:${port}`);
});