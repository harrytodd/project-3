const express = require('express')
const userController = require('./controllers/userController')
const profileController = require('./controllers/profileController')
const eventController = require('./controllers/eventController')
const secureRoute = require('./middleware/secureRoute')
const router = express.Router()
  
router.route('/login')
  .post(userController.logIn)

router.route('/register')
  .post(userController.createUser)

router.route('/users')
  .get(secureRoute, userController.getAllUsers)

router.route('/profile/:userId')
  .put(secureRoute, userController.uploadImage)
  .post(secureRoute, profileController.setProfile)
  .put(secureRoute, profileController.editProfile)
  .get(secureRoute, profileController.getProfile)

router.route('/profile/:userId/friends')
  .put(secureRoute, profileController.addFriend)
  .delete(secureRoute, profileController.removeFriend)

router.route('/profile/:userId/top-friends')
  .put(secureRoute, profileController.addTopFriend)
  .delete(secureRoute, profileController.removeTopFriend)

router.route('/profiles')
  .get(secureRoute, profileController.getAllProfiles)

router.route('/events')
  .get(eventController.getAllEvents)

router.route('/events/public')
  .get(secureRoute, eventController.getPublicEvents)

router.route('/events/:userId')
  .get(secureRoute, eventController.getUsersEvents)

router.route('/events/:userId/recent-events')
  .get(secureRoute, eventController.getRecentEvents)

router.route('/events/new-event')
  .post(secureRoute, eventController.newEvent)

router.route('/events/:eventId')
  .put(secureRoute, eventController.editEvent)
  .get(secureRoute, eventController.getEvent)

router.route('/events/:userId/my-events')
  .get(secureRoute, eventController.getMyEvents)

router.route('/events/:eventId/comments')
  .post(secureRoute, eventController.newComment)

router.route('/events/:eventId/comments/:commentId')
  .put(secureRoute, eventController.editComment)
  .delete(secureRoute, eventController.deleteComment)

router.route('/events/:eventId/likes/remove')
  .put(secureRoute, eventController.removeLike)

router.route('/events/:eventId/likes/add')
  .put(secureRoute, eventController.addLike)

router.route('/events/:eventId/attendance/add')
  .put(secureRoute, eventController.addAttendance)

router.route('/events/:eventId/attendance/remove')
  .put(secureRoute, eventController.removeAttendance)


module.exports = router