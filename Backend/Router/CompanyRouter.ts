import { Router } from "express";
import { createCompany, readCompanies, readCompany } from "../Controller/CompanyController";

const router: Router = Router();

router.route("/create-company").post(createCompany);
router.route("/read-company").get(readCompanies);
router.route("/read-one-company/: companyId").get(readCompany)

export default router;