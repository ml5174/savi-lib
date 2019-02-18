export const GENDER_RESTRICTION = {
        0: 'none',
        1: 'male',
        2: 'female',
        3: 'other'
}
export const VOLUNTEER_RESTRICTION = {
        0: 'none',
        1: 'guest',
        2: 'volunteer',
        3: 'staff'
}
export const EVENT_STATUS = {
        0: 'Scheduled',
        1: 'Pending',
        2: 'Cancelled',
        3: 'Urgent'
}
export const SAMEDAY_RESTRICTION = {
        0: 'no',
        1: 'yes',
        2: 'no',
        3: 'instaff'
}
export const AGE_RESTRICTION = {
        0: 'none',
        1: '16 and over',
        2: 'under 16'
}

export const ORG_RESTRICTION = {
        0: 'none',
        1: 'Orgs Only',
        2: 'Defined Orgs',
        3: 'No Orgs'      
}

//yeah, this one probably needs some adjusting
export const NOTIFICATION_SCHEDULE = {
        0: 'none',
        1: 'days',
        7: 'weeks',
        14: 'two-weeks'
}
export const NOTIFICATION_OPTIONS = {
        0: 'no',
        1: 'yes'
}

export const MONTH_NAMES: Array<String> = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export const CATEGORY_MAP: Array <string> =['Food Service', 'Food Pantry', 'Clothing Warehouse', 'Child Care', 'Practicum Service',
    'Red Kettle'];