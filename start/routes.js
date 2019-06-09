'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
// User
Route.post('users', 'UserController.store').validator('User')
// Session
Route.post('sessions', 'SessionController.store').validator('Session')
// Recovery
Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)
// File Show
Route.get('file/:id', 'FileController.show')
// Auth
Route.group(() => {
  // File Create
  Route.post('file', 'FileController.store')
  // Project
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))
  // Task
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['projects.tasks.store'], ['Project']]]))
}).middleware(['auth'])
