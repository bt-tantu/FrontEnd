import axios from "axios";
import cookie from "react-cookies";

export default endpointsauth = {
    'courses': '/courses/',
    'mark': '/mark/',
    'users':'/users/',
    'upload':'/upload/',
    'login':'/o/token/',
    'current-user': '/user/current-user/',
    'check-teacher': '/check-teacher/',
    'create-forum': '/forum/',
    'forum-detail': (forumId) => `/forum/${forumId}`,
    'export':'/export/',
    'register':'/register/',
    'marks': (userId) => `/users/${userId}/mark/`,
}

