import { isAdmin } from "./isAdmin.middleware";
import { idExists } from "./idExists.middleware";
import handleError from "./handleErrors.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { validateBody } from "./validateBody.middleware";
import { isAdminOrOwner } from "./isAdminOrOwner.middleware";
import { uniqueCategoryName } from "./uniqueCategoryName.middleware"; 

export default { 
    isAdmin, 
    idExists, 
    handleError, 
    validateBody,
    uniqueEmail,
    verifyToken, 
    isAdminOrOwner,
    uniqueCategoryName
 };
