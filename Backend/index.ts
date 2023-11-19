console.clear()
import express, {Application} from "express"
import cors from "cors"
import { dbConfig } from "./dbConfig";
import staff from "./Router/StaffRouter"
import company from "./Router/CompanyRouter"


const app: Application = express()
const Port: number = 2299;

app.use(cors());
app.use(express.json());
app.use("/", company)
app.use("/", staff)

app.listen(Port, ()=>{
    dbConfig()
})