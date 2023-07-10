import { isAdmin } from "./isAdmin.middleware";
import { idExists } from "./idExists.middleware";
import handleError from "./handleErrors.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { validateBody } from "./validateBody.middleware";
import { isAdminOrOwner } from "./isAdminOrOwner.middleware";
import { uniqueCategoryName } from "./uniqueCategoryName.middleware";
import { verifyDay } from "./verifyDay.middleware";
import { verifyHour } from "./verifyHour.middleware";
import { verifyRealEstate } from "./verifyRealEstate.middleware";

export default {
  isAdmin,
  verifyDay,
  verifyHour,
  idExists,
  handleError,
  validateBody,
  uniqueEmail,
  verifyToken,
  isAdminOrOwner,
  verifyRealEstate,
  uniqueCategoryName,
};
