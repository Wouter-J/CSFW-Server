const express = require("express");
const router = express.Router();
const authMiddleware = require('./middleware/auth');

//Routes
const hardwareRoute = require('./routes/hardware.route');
const specsRoute = require('./routes/specs.route');
const clientsRoute = require('./routes/clients.route');
const subscriptionRoute = require('./routes/subscriptions.route');
const usersRoute = require('./routes/users.route');

router.use('/api/hardware', hardwareRoute);
router.use('/api/specs', specsRoute);
router.use('/api/clients', clientsRoute);
router.use('/api/subscriptions', subscriptionRoute);
router.use('/api/user', usersRoute);

router.use("/tokens", authMiddleware, usersRoute);
router.use("/login", usersRoute);

module.exports = router;