// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
    // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
    // ├┴┐├─┤└─┐││  └─┐
    // └─┘┴ ┴└─┘┴└─┘└─┘

    // General
    name: 'Jack',
    imageBackground: true,
    openInNewTab: true,
    twelveHourFormat: false,

    // Greetings
    greetingMorning: 'Good morning!',
    greetingAfternoon: 'Good afternoon,',
    greetingEvening: 'Good evening,',
    greetingNight: 'Go to Sleep!',

    // Weather
    weatherKey: '8686f37936ef48c6ed29420eeb163dae',
    weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
    weatherUnit: 'F', // 'F', 'C'
    language: 'en', // More languages in https://openweathermap.org/current#multi

    trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: '33.2654',
    defaultLongitude: '112.426',

    // ┌─┐┌─┐┬─┐┌┬┐┌─┐
    // │  ├─┤├┬┘ ││└─┐
    // └─┘┴ ┴┴└──┴┘└─┘

    // Links
    cards: [{
            id: '1',
            name: 'Github',
            icon: 'github',
            link: 'https://github.com/',
        },
        {
            id: '2',
            name: 'Mail',
            icon: 'mail',
            link: 'https://mail.protonmail.com/',
        },
        {
            id: '3',
            name: 'Todoist',
            icon: 'trello',
            link: 'https://todoist.com',
        },
        {
            id: '4',
            name: 'Calendar',
            icon: 'calendar',
            link: 'https://calendar.google.com/calendar/r',
        },
        {
            id: '5',
            name: 'Reddit',
            icon: 'glasses',
            link: 'https://reddit.com',
        },
        {
            id: '6',
            name: 'Odysee',
            icon: 'youtube',
            link: 'https://odysee.com/',
        },
    ],

    // ┬  ┬┌─┐┌┬┐┌─┐
    // │  │└─┐ │ └─┐
    // ┴─┘┴└─┘ ┴ └─┘

    //Icons
    firstListIcon: 'music',
    secondListIcon: 'coffee',

    // Links
    lists: {
        firstList: [{
                name: 'Inspirational',
                link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
                name: 'Classic',
                link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
                name: 'Oldies',
                link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
                name: 'Rock',
                link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
        ],
        secondList: [{
                name: 'Linkedin',
                link: 'https://linkedin.com/',
            },
            {
                name: 'Figma',
                link: 'https://figma.com/',
            },
            {
                name: 'Dribbble',
                link: 'https://dribbble.com',
            },
            {
                name: 'Telegram',
                link: 'https://webk.telegram.org',
            },
        ],
    },
};