import { watchLocation } from "./location/live_location.js";
import { initFirebase } from "./database/firebase_access.js";
import { initRouter } from "./routing/router.js";
import { initAuthService } from "./database/auth_service.js";

watchLocation();
initFirebase();
initAuthService();
initRouter();
