import { DeliveriesController } from "@/controllers/deliveries-controller"
import { DeliveryLogsController } from "@/controllers/delivery-logs-controllers"
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"
import { Router } from "express"

const deliveryLogsRoutes = Router()
const deliveryLogsController = new DeliveryLogsController()

deliveryLogsRoutes.post("/",
    ensureAuthenticated,
    verifyUserAuthorization(["sale"]),
    deliveryLogsController.create
)

deliveryLogsRoutes.get(
    "/:delivery_id/show",
    ensureAuthenticated,
    verifyUserAuthorization(["sale", "costumer"]),
    deliveryLogsController.show
)

export { deliveryLogsRoutes }