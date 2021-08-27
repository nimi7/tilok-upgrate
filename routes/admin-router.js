const express = require('express');
const adminCtrl = require('../controllers/admin-ctrl');
const db = require('../db');

const router = express.Router();


router.post('/admin', adminCtrl.createAdmin)
router.get('/admins',adminCtrl.getAdmins)
router.delete('/admin/:id',adminCtrl.deleteAdmin)
router.get('/admin/:id', adminCtrl.getadminById);
router.put('/adminput/:id',adminCtrl.updateadmin)

module.exports = router;