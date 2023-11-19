import { Request, Response } from "express";
import CompanyModel from "../Model/CompanyModel";

export const createCompany = async (req: Request, res: Response) =>{
    try {
        const {companyName, logo} = req.body

        const company = await CompanyModel.create({
            companyName,
            logo
        });
        return res.status(201).json({
            message: "Company Created Succesfully",
            data: company
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
};

export const readCompanies = async(req: Request, res: Response) =>{
    try {
        const company = await CompanyModel.find()
          
        return res.status(201).json({
            message: "Company Found",
            data: company,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
};

export const readCompany = async (req: Request, res: Response) =>{
    try {
        const {companyId} = req.params;
        const company = await CompanyModel.findById(companyId)
        return res.status(201).json({
            message: "Company Found",
            data: company
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
};
