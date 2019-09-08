const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

  
    

    // params: firstName, lastName, email, password , telephone.
    app.post(`${baseUrl}/signup`, userController.signUpFunction);
    /**
     * @apiGroup users  
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for Registering User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} userName userName of the user. (body params) (required)
     * @apiParam {string} country country Name of the user. (body params) (required)
     * @apiParam {string} telephone Mobile Number of the user. (body params) (required)
     * @apiParam {string} isAdmin String(true/false) true-if user is admin and false-if user is not admin. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "User Addded",
        "status": 200,
        "data": [
            {
                "createdOn": "2019-08-29T23:47:53.000+00:00",
                "emailVerified": "Yes",
                "validationToken": "Null",
                "email": "jaspreet3480@gmail.com",
                "password": "$2b$10$lgUysYyA471D1MMJDmtB/uZ4TbtRpgFtzSUz4dnZx2spDepo1wsV.",
                "isAdmin": "true",
                "telephone": "+91 8725838433",
                "country": "India",
                "userName": "Jass5220-admin",
                "lastName": "Preet",
                "firstName": "Jass",
                "userId": "KXy-n6z0i"
            }
        }
    */


    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
               "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjNEVFEtNGU5WSIsImlhdCI6MTU2NzM1ODEwNjM5MywiZXhwIjoxNTY3NDQ0NTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsidXNlcklkIjoiN0xiOXVKeVdFIiwiZmlyc3ROYW1lIjoicm9oYW4iLCJsYXN0TmFtZSI6InNoYXJtYSIsInVzZXJOYW1lIjoicm9oYW4xMjMtYWRtaW4iLCJjb3VudHJ5IjoiIiwidGVsZXBob25lIjoiIiwiaXNBZG1pbiI6InRydWUiLCJzdGF0dXMiOiJvZmZsaW5lIiwiZW1haWwiOiJyb2hhbnNoYXJtYUBnbWFpbC5jb20iLCJ2YWxpZGF0aW9uVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcWQzUnBaQ0k2SW10TFZ6RnNNbFkxZHlJc0ltbGhkQ0k2TVRVMk56STROVE13T0RBNE1pd2laWGh3SWpveE5UWTNNemN4TnpBNExDSnpkV0lpT2lKaGRYUm9WRzlyWlc0aUxDSnBjM01pT2lKc1pYUnpUV1ZsZEVGd2NDSXNJbVJoZEdFaU9uc2lkWE5sY2tsa0lqb2lOMHhpT1hWS2VWZEZJaXdpWm1seWMzUk9ZVzFsSWpvaWNtOW9ZVzRpTENKc1lYTjBUbUZ0WlNJNkluTm9ZWEp0WVNJc0luVnpaWEpPWVcxbElqb2ljbTlvWVc0eE1qTXRZV1J0YVc0aUxDSmpiM1Z1ZEhKNUlqb2lJaXdpZEdWc1pYQm9iMjVsSWpvaUlpd2lhWE5CWkcxcGJpSTZJblJ5ZFdVaUxDSnpkR0YwZFhNaU9pSnZabVpzYVc1bElpd2ljR0Z6YzNkdmNtUWlPaUlrTW1Ja01UQWtSakZSUW01aWQzaFVURlkzYWxwMFZXbHFRa0ZGTG1KTGVHWkhTMHBsT1hKbGVVbEdOVkJ1Vm5sSVdtaHpkalZuWjFsVWFtMGlMQ0psYldGcGJDSTZJbkp2YUdGdWMyaGhjbTFoUUdkdFlXbHNMbU52YlNJc0luWmhiR2xrWVhScGIyNVViMnRsYmlJNklpSXNJbVZ0WVdsc1ZtVnlhV1pwWldRaU9pSlpaWE1pTENKamNtVmhkR1ZrVDI0aU9pSXlNREU1TFRBNExUTXhWREV3T2pBd09qQXpMakF3TUZvaUxDSmZhV1FpT2lJMVpEWmhORFV5TXpaa1pHVTBOVEV3WVRCa01HRXdNRE1pTENKZlgzWWlPakI5ZlEuMWlZY3ppMHNoS1BtT3hyYjBZbWhLSk9BZklvaDNHT3FNTl9jTzl2UlpCcyIsImVtYWlsVmVyaWZpZWQiOiJZZXMifX0.QGd4G1TowQASAwJwK1eF8L1KgozYm0h-0LxvmCs4GPU",
            "userDetails": {
                    "emailVerified": "Yes",
                    "validationToken": "Null",
                    "email": "jaspreet3480@gmail.com",
                    "isAdmin": "true",
                    "telephone": "+91 8725838433",
                    "country": "India",
                    "userName": "jass5220-admin",
                    "lastName": "Preet",
                    "firstName": "Jass",
                    "userId": "KXy-n6z0i"
                }
            }
        }    
    */

    // params: email.
    app.post(`${baseUrl}/resetPassword`, userController.resetPasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api for Password Reset.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password reset instructions sent successfully",
            "status": 200,
            "data": None
        }    
    */

    // params: validationToken,password.
    app.put(`${baseUrl}/updatePassword`, userController.updatePasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} validationToken validationToken of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
            
        }
    */

    // params: userId, oldPassword,newPassword.
    app.post(`${baseUrl}/changePassword`, auth.isAuthorized, userController.changePasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/changePassword api for Changing Password.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} oldPassword old Password of the user. (body params) (required)
     * @apiParam {string} newPassword new Password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
        }
    */


    // params: userId.
    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/:userId/edit api for Updating User Details.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} firstName First Name of the user. (body params) (optional)
     * @apiParam {string} lastname Last Name of the user. (body params) (optional)
     * @apiParam {string} telephone Mobile Number of the user. (body params) (optional)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User details Updated",
            "status": 200,
            "data": "None"
        }
    */


    // params: userId.
    app.put(`${baseUrl}/verifyEmail`, userController.verifyEmailFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/verifyEmail api for Verifying User Email Id.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User email verified",
            "status": 200,
            "data": "None"
        }
    */

    // params: userId.
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/delete api to Delete User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the user successfully",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjNEVFEtNGU5WSIsImlhdCI6MTU2NzM1ODEwNjM5MywiZXhwIjoxNTY3NDQ0NTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsidXNlcklkIjoiN0xiOXVKeVdFIiwiZmlyc3ROYW1lIjoicm9oYW4iLCJsYXN0TmFtZSI6InNoYXJtYSIsInVzZXJOYW1lIjoicm9oYW4xMjMtYWRtaW4iLCJjb3VudHJ5IjoiIiwidGVsZXBob25lIjoiIiwiaXNBZG1pbiI6InRydWUiLCJzdGF0dXMiOiJvZmZsaW5lIiwiZW1haWwiOiJyb2hhbnNoYXJtYUBnbWFpbC5jb20iLCJ2YWxpZGF0aW9uVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcWQzUnBaQ0k2SW10TFZ6RnNNbFkxZHlJc0ltbGhkQ0k2TVRVMk56STROVE13T0RBNE1pd2laWGh3SWpveE5UWTNNemN4TnpBNExDSnpkV0lpT2lKaGRYUm9WRzlyWlc0aUxDSnBjM01pT2lKc1pYUnpUV1ZsZEVGd2NDSXNJbVJoZEdFaU9uc2lkWE5sY2tsa0lqb2lOMHhpT1hWS2VWZEZJaXdpWm1seWMzUk9ZVzFsSWpvaWNtOW9ZVzRpTENKc1lYTjBUbUZ0WlNJNkluTm9ZWEp0WVNJc0luVnpaWEpPWVcxbElqb2ljbTlvWVc0eE1qTXRZV1J0YVc0aUxDSmpiM1Z1ZEhKNUlqb2lJaXdpZEdWc1pYQm9iMjVsSWpvaUlpd2lhWE5CWkcxcGJpSTZJblJ5ZFdVaUxDSnpkR0YwZFhNaU9pSnZabVpzYVc1bElpd2ljR0Z6YzNkdmNtUWlPaUlrTW1Ja01UQWtSakZSUW01aWQzaFVURlkzYWxwMFZXbHFRa0ZGTG1KTGVHWkhTMHBsT1hKbGVVbEdOVkJ1Vm5sSVdtaHpkalZuWjFsVWFtMGlMQ0psYldGcGJDSTZJbkp2YUdGdWMyaGhjbTFoUUdkdFlXbHNMbU52YlNJc0luWmhiR2xrWVhScGIyNVViMnRsYmlJNklpSXNJbVZ0WVdsc1ZtVnlhV1pwWldRaU9pSlpaWE1pTENKamNtVmhkR1ZrVDI0aU9pSXlNREU1TFRBNExUTXhWREV3T2pBd09qQXpMakF3TUZvaUxDSmZhV1FpT2lJMVpEWmhORFV5TXpaa1pHVTBOVEV3WVRCa01HRXdNRE1pTENKZlgzWWlPakI5ZlEuMWlZY3ppMHNoS1BtT3hyYjBZbWhLSk9BZklvaDNHT3FNTl9jTzl2UlpCcyIsImVtYWlsVmVyaWZpZWQiOiJZZXMifX0.QGd4G1TowQASAwJwK1eF8L1KgozYm0h-0LxvmCs4GPU",
             "userDetails": {
                    "emailVerified": "Yes",
                    "validationToken": "Null",
                    "email": "jaspreet3480@gmail.com",
                    "isAdmin": "true",
                    "telephone": "+91 8725838433",
                    "country": "India",
                    "userName": "jass5220-admin",
                    "lastName": "Preet",
                    "firstName": "Jass",
                    "userId": "KXy-n6z0i"
                }
                   }        
        }
    */


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api for Getting all users.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
               
                    "emailVerified": "Yes",
                    "validationToken": "Null",  
                    "email": "jaspreet3480@gmail.com",
                    "isAdmin": "true",
                    "telephone": "+91 8725838433",
                    "country": "India",
                    "userName": "jass5220-admin",
                    "lastName": "Preet",
                    "firstName": "Jass",
                    "userId": "KXy-n6z0i"
              
            ]
        }
    */


    // params: userId.
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/:userId/details api for getting user details.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User Details Found",
            "status": 200,
            "data": {
             
                    "emailVerified": "Yes",
                    "validationToken": "Null",
                    "email": "jaspreet3480@gmail.com",
                    "isAdmin": "true",
                    "telephone": "+91 8725838433",
                    "country": "India",
                    "userName": "jass5220-admin",
                    "lastName": "Preet",
                    "firstName": "Jass",
                    "userId": "KXy-n6z0i"
            
            }
        }
    */


    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/logout api to logout from application.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */

}

/** Run this command : apidoc -i routes/ -o apidoc/ */
