import { watchLocation } from './location/location_service.js'
import { initFirebase } from './database/firebase_access.js'
import { initRouter } from './router/router.js'
import { initAuthService } from './database/auth_service.js'

watchLocation()
initFirebase()
initAuthService()
initRouter()
