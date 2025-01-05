import Crud from "../models/crudModel.js";

export const crudIndex = (req, res) => {
  res.send("Read a list");
};

export const crudCreate = async (req, res) => {
  console.log(req.body);

//   validate the data
const newCrud = new Crud({
    title: req.body.name,
    desc: req.body.desc
})

try {
    const crud = await newCrud.save()
    return res.status(201).json(crud)
} catch (error) {
    return res.status(400).json({message: error.message})
}
  
};

export const crudUpdate = (req, res) => {
  res.send("Update a list");
};

export const crudDelete = (req, res) => {
  res.send("Delete a list");
};
