import { readStaff, createStaff } from "../Controller/StaffController";
import { Router } from "express";

const router: Router = Router();

router.route("/create-staff/: companyId").post(createStaff)
router.route("/read-company-staff/:companyId").get(readStaff);

export default router;
