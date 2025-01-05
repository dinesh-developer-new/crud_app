import { model, Schema } from "mongoose";

// write the schema
const crudSchema = new Schema({
    title: String,
    desc: String
})

const Crud = model("list", crudSchema)

export default Crud;