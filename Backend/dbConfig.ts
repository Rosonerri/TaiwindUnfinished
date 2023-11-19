import {connect} from "mongoose"

const URL = "mongodb://127.0.0.1:27017/CompDB"

export const dbConfig = () =>{
    try {
        connect(URL).then(()=>{
            console.log()
            console.log("DataBase Is Connected on Port.....")
        })
    } catch (error) {
        console.log("error:", error)
    }
}