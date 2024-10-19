import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Correct import from app.routes
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig = {
  providers: [
    provideRouter(routes),  // Ensure routes are passed correctly
    provideClientHydration(),
  ]
};
