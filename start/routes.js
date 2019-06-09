'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
// User
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
// Session
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')
// Auth
Route.group(() => {
  // File Create
  Route.post('file', 'FileController.store')
  // Project
  Route.resource('projects', 'ProjectController').apiOnly()
}).middleware(['auth'])
// File Show
Route.get('file/:id', 'FileController.show')
