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
            link: 'https://mail.google.com/',
        },
        {
            id: '3',
            name: 'Calendar',
            icon: 'calendar',
            link: 'https://calendar.google.com/calendar/r',
        },
        {
            id: '4',
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com',
        },
        {
            id: '5',
            name: 'Instagram',
            icon: 'instagram',
            link: 'https://instagram.com',
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
    firstListIcon: 'graduation-cap',
    secondListIcon: 'coffee',

    // Links
    lists: {
        firstList: [{
            name: 'My ASU',
            link: 'ext+container:name=ASU&url=https://webapp4.asu.edu/myasu/student&pinned=true',
        }, {
	        name: 'Cengage',
	        link: 'ext+container:name=ASU&url=https://account.cengage.com/login',
        }, {
            name: 'Canvas',
            link: 'ext+container:name=ASU&url=https://asu.instructure.com&pinned=true',
        }, {
            name: 'OneDrive',
            link: 'ext+container:name=ASU&url=https://arizonastateu-my.sharepoint.com',
        }, {
            name: 'Azure',
            link: 'ext+container:name=ASU&url=https://portal.azure.com/#home',
        }],
        secondList: [{
            name: 'Spotify',
            link: 'https://open.spotify.com',
        }, {
            name: 'Raindrop',
            link: 'https://app.raindrop.io',
        }, {
            name: 'Tetris',
            link: 'https://tetr.io',
        }, {
	        name: 'Zero Trust',
	        link: 'https://dash.teams.cloudflare.com/',
	    }, {
	        name: 'Nation States',
	        link: 'https://www.nationstates.net/nation=hirmfaxi',
        },]
    },
};
