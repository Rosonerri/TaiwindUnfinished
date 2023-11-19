import { Request, Response } from "express";
import CompanyModel from "../Model/CompanyModel";
import StaffModel from "../Model/StaffModel";
import mongoose from "mongoose"

export const createStaff = async (req: Request, res: Response) =>{
    try {
        const {staffName, profile, taskCompleted } = req.body
        const {companyId} = req.params

        const company = await CompanyModel.findById(companyId);

        if(company){
            const staff = await StaffModel.create({
                staffName,
                images: ["cc", "cc", "cc", "cc",],
                profile,
                taskCompleted
            });

            company.staff.push(new mongoose.Types.ObjectId(staff._id))
            company.save();

            return res.status(201).json({
                message: "staff Created",
                data: staff,
            });
        } else{
            return res.status(404).json({
                message: "error"
            });
        }
    } catch (error) {
        

    }
}

export const readStaff = async (req: Request, res: Response) =>{
    try {
        const { companyId } = req.params

        const company = await CompanyModel.findById(companyId).populate({
            path: "staff",
            options: {
                sort: {
                    createdAt: -1,
                },
            },
        });

        return res.status(200).json({
            message: "view staff",
            data: company,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
};