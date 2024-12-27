import { App } from "./app";

const app = new App();

app.getApp().listen(process.env.PORT, () => console.log(`server is running`));
