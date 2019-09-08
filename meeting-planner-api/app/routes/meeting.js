const express = require('express');
const router = express.Router();
const meetingController = require("./../../app/controllers/meetingController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/meetings`;

    // params: meetingTopic,hostId,hostName,participantId,participantName,participantEmail,meetingStartDate,meetingEndDate,meetingDescription,meetingPlace


    app.post(`${baseUrl}/addMeeting`, auth.isAuthorized, meetingController.addMeetingFunction);
    /**
     * @apiGroup Meetings
     * @apiVersion  1.0.0
     * @api {post} /api/v1/meetings/addMeeting api to Add Meeting.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} meetingTopic Topic of the Meeting. (body params) (required)
     * @apiParam {string} hostId User Id of the user hosting Meeting. (body params) (required)
     * @apiParam {string} hostName User Name of the user hosting Meeting. (body params) (required)
     * @apiParam {string} participantId User Id of the participant. (body params) (required)
     * @apiParam {string} participantName User Name of the participant. (body params) (required)
     * @apiParam {string} participantEmail Email of the participant. (body params) (required)
     * @apiParam {string} meetingStartDate Start date/time of Meeting. (body params) (required)
     * @apiParam {string} meetingEndDate end date/time of Meeting. (body params) (required)
     * @apiParam {string} meetingDescription Description of Meeting. (body params) (required)
     * @apiParam {string} meetingPlace Place of Meeting. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Meeting Created",
            "status": 200,
            "data": {
                "__v": 0,
                "_id": "5d6bf2fcb301c01878396e62",
                "createdOn": "2019-09-01T16:34:04.000+00:00",
                "meetingPlace": "Delhi",
                "meetingDescription": "Test Meeting for Meeting Planner App",
                "meetingEndDate": "2018-09-12T17:57:50.382Z",
                "meetingStartDate": "2018-09-11T20:30:00.000Z",
                "participantEmail": "jaspreet380@gmail.com",
                "participantName": "Ashish",
                "participantId": "WRAOdZ4LP",
                "hostName": "Jaspreet",
                "hostId": "WRAOdZ4LP",
                "meetingTopic": "Test Meeting",
                "meetingId": "zfihCBjRI"
            }
        }
    */


    // params: meetingId.
    app.put(`${baseUrl}/:meetingId/updateMeeting`, auth.isAuthorized, meetingController.updateMeetingFunction);
    /**
     * @apiGroup Meetings
     * @apiVersion  1.0.0
     * @api {put} /api/v1/meetings/:meetingId/updateMeeting api to Update Meeting Details.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} meetingId Id of the Meeting. (query params) (required)
     * @apiParam {string} meetingTopic Topic of the Meeting. (body params) (required)
     * @apiParam {string} meetingStartDate Start date/time of Meeting. (body params) (required)
     * @apiParam {string} meetingEndDate end date/time of Meeting. (body params) (required)
     * @apiParam {string} meetingDescription Description of Meeting. (body params) (required)
     * @apiParam {string} meetingPlace Place of Meeting. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Meeting Updated",
            "status": 200,
            "data": {
                "error": false,
                "message": "Meeting details Updated",
                "status": 200,
                "data": "None"
            }
        }
    */

    // params: meetingId.
    app.post(`${baseUrl}/:meetingId/delete`, auth.isAuthorized, meetingController.deleteMeetingFunction);

    /**
     * @apiGroup Meetings
     * @apiVersion  1.0.0
     * @api {post} /api/v1/meetings/:meetingId/delete api to Delete Meeting.
     *
     * @apiParam {string} meetingId meetingId of the Meeting to be deleted. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Meeting Deleted",
            "status": 200,
            "data": {
                "error": false,
                "message": "Deleted the Meeting successfully",
                "status": 200,
                 "data": {
                "__v": 0,
                "_id": "5d6bf2fcb301c01878396e62",
                "createdOn": "2019-09-01T16:34:04.000+00:00",
                "meetingPlace": "Delhi",
                "meetingDescription": "Test Meeting for Meeting Planner App",
                "meetingEndDate": "2018-09-12T17:57:50.382Z",
                "meetingStartDate": "2018-09-11T20:30:00.000Z",
                "participantEmail": "jaspreet380@gmail.com",
                "participantName": "Ashish",
                "participantId": "WRAOdZ4LP",
                "hostName": "Jaspreet",
                "hostId": "WRAOdZ4LP",
                "meetingTopic": "Test Meeting",
                "meetingId": "zfihCBjRI"
            }
            }
        }
    */


    app.get(`${baseUrl}/view/all/meetings/:userId`, auth.isAuthorized, meetingController.getAllMeetingsFunction);
    /**
     * @apiGroup Meetings
     * @apiVersion  1.0.0
     * @api {get} /api/v1/meetings/view/all/meetings/:userId api for Getting all Meetings of User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Meetings Found",
            "status": 200,
            "data": [
                 {
                "__v": 0,
                "_id": "5d6bf2fcb301c01878396e62",
                "createdOn": "2019-09-01T16:34:04.000+00:00",
                "meetingPlace": "Delhi",
                "meetingDescription": "Test Meeting for Meeting Planner App",
                "meetingEndDate": "2018-09-12T17:57:50.382Z",
                "meetingStartDate": "2018-09-11T20:30:00.000Z",
                "participantEmail": "jaspreet380@gmail.com",
                "participantName": "Ashish",
                "participantId": "WRAOdZ4LP",
                "hostName": "Jaspreet",
                "hostId": "WRAOdZ4LP",
                "meetingTopic": "Test Meeting",
                "meetingId": "zfihCBjRI"
            }
            ]
        }
    */


    // params: meetingId.
    app.get(`${baseUrl}/:meetingId/details`, auth.isAuthorized, meetingController.getMeetingDetailsFunction);
    /**
     * @apiGroup Meetings
     * @apiVersion  1.0.0
     * @api {get} /api/v1/meetings/:meetingId/details api for getting meeting details.
     *
     * @apiParam {string} meetingId meetingId of the Meeting. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            "error": false,
            "message": "Meeting Found",
            "status": 200,
             "data": {
                "__v": 0,
                "_id": "5d6bf2fcb301c01878396e62",
                "createdOn": "2019-09-01T16:34:04.000+00:00",
                "meetingPlace": "Delhi",
                "meetingDescription": "Test Meeting for Meeting Planner App",
                "meetingEndDate": "2018-09-12T17:57:50.382Z",
                "meetingStartDate": "2018-09-11T20:30:00.000Z",
                "participantEmail": "jaspreet380@gmail.com",
                "participantName": "Ashish",
                "participantId": "WRAOdZ4LP",
                "hostName": "Jaspreet",
                "hostId": "WRAOdZ4LP",
                "meetingTopic": "Test Meeting",
                "meetingId": "zfihCBjRI"
            }
        }
    */



    // params: meetingId.
    app.post(`${baseUrl}/admin-meetings/sentReminders`, auth.isAuthorized, meetingController.sendReminderForTodaysMeetings);
    /**
     * @apiGroup Meetings
     * @apiVersion  1.0.0
     * @api {post} /api/v1/meetings/admin-meetings/sentReminders api for sending reminders to the users of the meeting.
     *
     * @apiParam {string} userId userId of the User. (body params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            "error": false,
            "message": "Meetings Found and reminders sent",
            "status": 200,
            "data": null
        }
    */

}


/** Run this command : apidoc -i app/routes/ -o apidoc/ */
