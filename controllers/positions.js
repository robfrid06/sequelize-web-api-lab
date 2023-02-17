const { Position, Applicant } = require("../models")

const create = async (req, res) => {
  try {
    const position = await Position.create(req.body)
    res.status(200).json(position)
  } catch (err) {
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const positions = await Position.findAll({ include: [{ model: Applicant, as: "applicants" }]})
    res.status(200).json(positions)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

// const update = async (req, res) => {
//   try {
//     const position = await Position.update(req.body, { where: { id: req.params.id }, returning: true })
//     res.status(200).json(position)
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err)
//   }
// }

const update = async (req, res) => {
  try {
    const position = await Position.findByPk(req.params.id)
    position.set(req.body)
    await position.save()
    res.status(200).json(position)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

// const deletePosition = async (req, res) => {
//   try {
//     const numberOfRowsRemoved = await Position.destroy({ where: { id: req.params.id } })
//     res.status(200).json(numberOfRowsRemoved)
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err)
//   }
// }

const deletePosition = async (req, res) => {
  try {
    const position = await Position.findByPk(req.params.id)
    await position.destroy()
    res.status(200). json(position)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const addApplicant = async (req, res) => {
  try {
    req.body.positionId = req.params.id
    const applicant = await Applicant.create(req.body)
    res.status(200).json(applicant)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deletePosition,
  addApplicant,
}