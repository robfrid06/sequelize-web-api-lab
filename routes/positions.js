const router = require('express').Router()
const positionsCtrl = require('../controllers/positions.js')

router.post('/', positionsCtrl.create)
router.get('/', positionsCtrl.index)
router.put('/:id', positionsCtrl.update)
router.delete('/:id', positionsCtrl.delete)

router.post('/:id/applicants', positionsCtrl.addApplicant)

module.exports = router