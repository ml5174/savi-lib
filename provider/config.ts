export const LOGIN_URI = '/rest-auth/login/';
export const REGISTER_URI = '/rest-auth/registration/';
export const RESET_URI = '/rest-auth/password/reset/';
export const RESET_CONFIRM_URI = '/rest-auth/password/reset/confirm/';
export const REGISTER_USER_URI = '/api/v0.2/salarmy/myprofile/';
export const GET_AVAILABLE_PREFERENCES_URI = '/api/v0.2/salarmy/availablepreferences/';
export const GET_MY_PREFERENCES_URI = '/api/v0.2/salarmy/mypreferences/';
export const GET_MY_PROFILE_URI = '/api/v0.2/salarmy/myprofile/';
export const UPDATE_MY_PROFILE_URI = '/api/v0.2/salarmy/myprofile/';
export const GET_EVENTS_URI = '/api/v0.2/events/events/';
export const GET_ADMIN_EVENTS_URI = '/api/v0.2/admin/events/events/';
export const GET_ADMIN_EVENT_DETAILS_URI = '/api/v0.2/admin/event/expanded/';
export const GET_EVENT_DETAILS_URI = '/api/v0.2/events/event/expanded/';
export const GET_MYEVENTS_URI = '/api/v0.2/events/myevents/';
export const EVENT_SIGNUP_URI = '/api/v0.2/events/myevents/';
export const EVENT_CANCEL_URI = '/api/v0.2/admin/event/expanded/';
export const GET_EVENT_IMAGE_URI = '/api/v0.2/events/eventimages/';
export const CHANGE_PASSWORD_URI = '/rest-auth/password/change/';
export const UPDATE_MY_PREFERENCES_URI = '/api/v0.2/salarmy/mypreferences/';
export const DONATE_URL = 'http://www.salvationarmydfw.org/p/get-involved/437';
export const GET_USERS_URI = '/api/v0.2/admin/userprofile';
export const SEND_MESSAGE_TO_USERS_LIST_URI = '/api/v0.2/admin/sendusermessages/';
export const SEND_MESSAGE_TO_ORGANIZATION_URI = '/api/v0.2/admin/sendorgmessages/'; //  <organization_id>/
export const GET_EVENTS_REPORT_URI = '/api/v0.2/admin/events/report/';
export const SEND_MESSAGE_TO_EVENT_VOLUNTEERS_URI = '/api/v0.2/admin/eventmessages/';
export const EVENT_CATEGORIES_URI = '/api/v0.2/events/categories/';
export const NEW_ORGANIZATION_URI = '/api/v0.2/accounts/orgrequests/';
export const ALL_ORGANIZATIONS_URI = '/api/v0.2/accounts/organizationnames/';
export const ALL_GROUPS_URI = '/api/v0.2/accounts/organizations/';
export const ALL_GROUPS_ADMIN_URI = '/api/v0.2/admin/organizations/';
export const ALL_ORGANIZATIONTYPES_URI = '/api/v0.2/accounts/organizationtypes/';
export const MY_ORGANIZATIONS_URI = '/api/v0.2/accounts/myorganizations/';
export const MY_ORG_CONTACTS_URI = '/api/v0.2/accounts/organizationcontacts/';
export const GET_MYORG_REG_EVENT_URI = '/api/v0.2/events/orgregistrations/';
export const MY_PENDING_ORGANIZATIONS_URI = '/api/v0.2/accounts/orgrequests/';
export const ORGANIZATIONCONTACTS_URI = '/api/v0.2/accounts/organizationcontacts/';
export const ORGANIZATIONCONTACTS_ADMIN_URI = '/api/v0.2/admin/organizationcontacts/';
export const GET_ORGREQUESTS_REQUESTED_ADMIN_URI = '/api/v0.2/admin/orgrequests/requested/';
export const GET_ORGANIZATION_TYPES_URI = '/api/v0.2/accounts/organizationtypes/';
export const UPDATE_ORGANIZATION_ADMIN_URI = '/api/v0.2/admin/organizations/';
export const UPDATE_ORGANIZATION_URI = '/api/v0.2/accounts/organizations/';
export const ORGANIZATION_URI = '/api/v0.2/accounts/organizations/';
export const APPROVE_ORGANIZATION_URI = '/api/v0.2/admin/orgrequests/';
export const CHECK_MY_EVENTS_URI = '/api/v0.2/events/checkmyevents/';
export const APPLE_MAP_QUERY = 'https://maps.apple.com/?address=';
export const GOOGLE_MAP_QUERY = 'https://www.google.com/maps/search/?api=1&query=\'';
export const RED_KETTLE_URL = 'http://www.registertoring.com';

export var SERVER = window['djangoserver'];
if (document.location.hostname === '198.199.86.127')
    SERVER = 'http://52.206.230.237:8001';
if (document.location.hostname === 'localhost')
    SERVER = 'https://api.testing-volunteers.tsadfw.org'
    //SERVER = 'http://52.206.230.237:8001';

export const CONSTRAINTS = {
    FIRST_NAME_MAX: 25,
    LAST_NAME_MAX: 25,
    FIRST_NAME_MIN: 2,
    LAST_NAME_MIN: 2,
    FIRST_NAME_PATTERN: "[a-z A-Z]*",
    LAST_NAME_PATTERN: "[a-z A-Z]*"

};


export const STRINGS = {
        first_name: 'First Name',
        last_name: 'Last Name',
        emergency_contact: 'Emergency Contact',
        tc_version: 'Terms & Conditions',
        password: 'Password',
        username: 'Username',
        password1: 'Password',
        password2: 'Confirm Password',
        email: 'Email',
        user: "User",
        mobilenumber: "Mobile Number",
        altnumber: "Alt Number",
        address1: "Address 1",
        address2: "Address 2",
        city: "City",
        state: "State",
        zipcode: "Zip Code",
        birthdate: "Birth Date",
        language: "Language",
        notification_option: "Notification Option",
        contactmethod: "Contact Method",
        my_contactmethod_id: "Contact Method",
        volunteertype: "Volunteer Type",
        my_volunteertype_id: "VolunteerType",
        servicearea: "Service Area",
        my_servicearea_id: "Service Area",
        referalsource: "Referral Source",
        my_referalsource_id: "Referral Source",
        donationtype: "Donation Type",
        my_donationtype_id: "Donation Type",
        emergency_contact_first_name: "Emergency Contact First Name",
        emergency_contact_last_name: "Emergency Contact Last Name",
        emergency_contact_relation: "Emergency Contact Relationship"
    }
