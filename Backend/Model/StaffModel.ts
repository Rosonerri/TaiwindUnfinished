import { Schema, Types, Document, model } from "mongoose";

interface iStaff{
    staffName: string;
    profile: string;
    taskCompleted: number;
    images: Array<string>
    company: {}
}

interface isStaffData extends iStaff, Document {}

const staffModel = new Schema<isStaffData>(
    {
        staffName: {
        type: String, 
          },
          profile: {
               type: String,
            },
            taskCompleted: {
                type: Number,
            },
        images: [
            {
                type: String,
            },
        ],
        company: {
            type: Types.ObjectId,
            ref: "companies",
        },
    },
    {timestamps: true}
);

export default model<isStaffData>("staffs", staffModel)