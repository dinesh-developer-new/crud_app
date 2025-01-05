export const crudIndex = (req, res) => {
  res.send("Read a list");
};

export const crudCreate = (req, res) => {
  console.log(req.body);

  return res.json(req.body)
  
};

export const crudUpdate = (req, res) => {
  res.send("Update a list");
};

export const crudDelete = (req, res) => {
  res.send("Delete a list");
};
