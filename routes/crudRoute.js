import express from 'express'

const router = express.Router()

// C - For creating
router.post("/", (req, res) => {
    res.send("Create a list")
});

// R - For reading
router.get("/", (req, res) => {
    res.send("Read a list")
});

// U - For updating
router.put("/:id", (req, res) => {
    res.send("Update a list")
});

// D - For deleting
router.delete("/:id", (req, res) => {
    res.send("Delete a list")
});

export default router;