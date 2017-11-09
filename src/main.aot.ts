import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app.module";
import "hammerjs";

enableProdMode();
platformBrowser().bootstrapModule(AppModule);
