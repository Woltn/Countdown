// ==========================================
// DECEMBER 4TH COUNTDOWN
// ==========================================

// Everything ends on December 4th at 5:45 PM
console.log("Countdown - Version 1");

const targetDate = new Date(
    2026,
    11,
    4,
    17,
    45,
    0
);

// ===============================
// ONE-TIME EXTRA CLASSES
// ===============================

const extraClasses = {
    Ballet: [
        {
            date: "2026-09-12",
            start: "09:00",
            end: "10:00"
        }
    ],

    VCASS: [],

    Conditioning: [],

    Gym: [],

    Character: [
        {
            date: "2026-09-12",
            start: "10:15",
            end: "11:15"
        }
    ],

    Contemporary: [],

    "Classical Studies": [],

    Repertoire: [
        {
            date: "2026-09-12",
            start: "11:30",
            end: "12:15"
        }
    ]
};


// ==========================================
// CLASS SCHEDULE
// ==========================================

// JavaScript weekdays:
//
// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday


const schedule = {

    // ======================================
    // BALLET
    // ======================================

    Ballet: [

        {
            day: 1,
            start: "14:45",
            end: "16:15"
        },

        {
            day: 2,
            start: "08:30",
            end: "09:45"
        },

        {
            day: 3,
            start: "14:45",
            end: "16:15"
        },

        {
            day: 4,
            start: "08:30",
            end: "10:00"
        },

        {
            day: 5,
            start: "13:45",
            end: "15:15"
        }

    ],


    // ======================================
    // VCASS
    // ======================================

    VCASS: [

        // Monday

        {
            day: 1,
            start: "08:30",
            end: "09:15"
        },

        {
            day: 1,
            start: "09:15",
            end: "10:00"
        },

        {
            day: 1,
            start: "10:20",
            end: "11:05"
        },

        {
            day: 1,
            start: "11:50",
            end: "12:35"
        },


        // Tuesday

        {
            day: 2,
            start: "12:35",
            end: "13:20"
        },

        {
            day: 2,
            start: "13:20",
            end: "14:05"
        },

        {
            day: 2,
            start: "14:05",
            end: "14:50"
        },

        {
            day: 2,
            start: "14:50",
            end: "15:35"
        },


        // Wednesday

        {
            day: 3,
            start: "08:30",
            end: "09:15"
        },

        {
            day: 3,
            start: "09:15",
            end: "10:00"
        },

        {
            day: 3,
            start: "10:20",
            end: "11:05"
        },

        {
            day: 3,
            start: "11:50",
            end: "12:35"
        },


        // Thursday

        {
            day: 4,
            start: "13:20",
            end: "14:05"
        },

        {
            day: 4,
            start: "14:05",
            end: "14:50"
        },

        {
            day: 4,
            start: "14:50",
            end: "15:35"
        },


        // Friday

        {
            day: 5,
            start: "08:30",
            end: "09:15"
        },

        {
            day: 5,
            start: "09:15",
            end: "10:00"
        },

        {
            day: 5,
            start: "10:20",
            end: "11:05"
        },

        {
            day: 5,
            start: "11:50",
            end: "12:35"
        }

    ],


    // ======================================
    // CONDITIONING
    // ======================================

    Conditioning: [

        {
            day: 1,
            start: "14:05",
            end: "14:35"
        },

        {
            day: 3,
            start: "14:05",
            end: "14:35"
        }

    ],


    // ======================================
    // GYM
    // ======================================

    Gym: [

        {
            day: 2,
            start: "16:45",
            end: "17:15"
        },

        {
            day: 4,
            start: "12:00",
            end: "12:30"
        }

    ],


    // ======================================
    // CHARACTER
    // ======================================

    Character: [

        {
            day: 5,
            start: "16:30",
            end: "17:45"
        }

    ],


    // ======================================
    // CONTEMPORARY
    // ======================================

    Contemporary: [

        {
            day: 2,
            start: "10:00",
            end: "11:15"
        }

    ],


    // ======================================
    // CLASSICAL STUDIES
    // ======================================

    "Classical Studies": [

        {
            day: 1,
            start: "16:30",
            end: "17:15"
        },

        {
            day: 5,
            start: "15:30",
            end: "16:15"
        }

    ],


    // ======================================
    // REPERTOIRE
    // ======================================

    Repertoire: [

        {
            day: 3,
            start: "16:30",
            end: "17:15"
        }

    ]

};



// ==========================================
// CLASS PERIODS
// ==========================================

// First class period:
// September 14 → September 18

const firstPeriod = new Date(
    2026,
    8,
    8,
    0,
    0,
    0
);


// Second class period:
// October 5 → December 4

const secondPeriod = new Date(
    2026,
    9,
    5,
    0,
    0,
    0
);



// ==========================================
// CREATE DATE FROM TIME
// ==========================================

function createDate(date, time) {

    const [hours, minutes] =
        time.split(":").map(Number);


    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes,
        0
    );
}



// ==========================================
// GET ALL CLASS SESSIONS
// ==========================================

function getAllClasses(classSchedule, className) {

    const classes = [];


    const currentDate =
        new Date(firstPeriod);


    while (currentDate <= targetDate) {

        // ==================================
        // CHECK WHETHER CLASSES ARE RUNNING
        // ==================================

        const inFirstPeriod =
            currentDate >= firstPeriod &&
            currentDate < secondPeriod;


        const inSecondPeriod =
            currentDate >= secondPeriod &&
            currentDate <= targetDate;


        if (inFirstPeriod || inSecondPeriod) {

            const weekday =
                currentDate.getDay();


            // ==================================
            // FIND CLASSES ON THIS DAY
            // ==================================

            for (
                const classInfo of classSchedule
            ) {

                if (
                    classInfo.day === weekday
                ) {

                    const start =
                        createDate(
                            currentDate,
                            classInfo.start
                        );


                    const end =
                        createDate(
                            currentDate,
                            classInfo.end
                        );


                    // Don't include anything
                    // after the final deadline

                    if (
                        end <= targetDate
                    ) {

                        classes.push({

                            start: start,

                            end: end

                        });

                    }

                }

            }

        }


        // Move to the next day

        currentDate.setDate(
            currentDate.getDate() + 1
        );

    }

// ==========================================
// ADD ONE-TIME EXTRA CLASSES
// ==========================================

if (extraClasses[className]) {

    extraClasses[className].forEach(session => {

        const [year, month, day] =
            session.date.split("-").map(Number);

        const [startHour, startMinute] =
            session.start.split(":").map(Number);

        const [endHour, endMinute] =
            session.end.split(":").map(Number);


        const start = new Date(
            year,
            month - 1,
            day,
            startHour,
            startMinute,
            0
        );


        const end = new Date(
            year,
            month - 1,
            day,
            endHour,
            endMinute,
            0
        );


        // Only include extras before the deadline

        if (
            start >= firstPeriod &&
            end <= targetDate
        ) {

            classes.push({
                start: start,
                end: end
            });

        }

    });

}

    return classes;
}



// ==========================================
// COUNT CLASSES LEFT
// ==========================================

function countClassesLeft(
    classSchedule,
    className,
    now
) {

    const classes =
        getAllClasses(
            classSchedule,
            className
        );


    let remaining = 0;


    for (
        const classSession of classes
    ) {

        // ==================================
        // IMPORTANT:
        //
        // The class stays counted while
        // you are actually in the class.
        //
        // It disappears ONLY after the
        // class finishes.
        // ==================================

        if (
            classSession.end > now
        ) {

            remaining++;

        }

    }


    return remaining;
}



// ==========================================
// UPDATE CLASS COUNTERS
// ==========================================

function updateClassCounters(now) {

    const ballet =
        countClassesLeft(
            schedule.Ballet,
            "Ballet",
            now
        );


    const vcass =
        countClassesLeft(
            schedule.VCASS,
            "VCASS",
            now
        );


    const conditioning =
        countClassesLeft(
            schedule.Conditioning,
            "Conditioning",
            now
        );


    const gym =
        countClassesLeft(
            schedule.Gym,
            "Gym",
            now
        );


    const character =
        countClassesLeft(
            schedule.Character,
            "Character",
            now
        );


    const contemporary =
        countClassesLeft(
            schedule.Contemporary,
            "Contemporary",
            now
        );


    const classicalStudies =
        countClassesLeft(
            schedule["Classical Studies"],
            "Classical Studies",
            now
        );


    const repertoire =
        countClassesLeft(
            schedule.Repertoire,
            "Repertoire",
            now
        );


    // ======================================
    // PUT VALUES ON WEBSITE
    // ======================================

    document.getElementById(
        "ballet"
    ).textContent = ballet;


    document.getElementById(
        "vcass"
    ).textContent = vcass;


    document.getElementById(
        "conditioning"
    ).textContent = conditioning;


    document.getElementById(
        "gym"
    ).textContent = gym;


    document.getElementById(
        "character"
    ).textContent = character;


    document.getElementById(
        "contemporary"
    ).textContent = contemporary;


    document.getElementById(
        "classical"
    ).textContent = classicalStudies;


    document.getElementById(
        "repertoire"
    ).textContent = repertoire;

}

// ==========================================
// TERM PROGRESS BAR
// ==========================================

const termStart = new Date(
    2026,
    9,
    5,
    0,
    0,
    0
);

const termEnd = new Date(
    2026,
    11,
    4,
    17,
    45,
    0
);


function updateTermProgress(now) {

    const totalDuration =
        termEnd - termStart;

    const elapsed =
        now - termStart;


    let progress =
        (elapsed / totalDuration) * 100;


    // Keep progress between 0% and 100%

    progress =
        Math.max(
            0,
            Math.min(100, progress)
        );


    // Round to exactly 2 decimal places

    const percentage =
        progress.toFixed(2);


    document.getElementById(
        "termProgress"
    ).textContent =
        percentage + "%";


    document.getElementById(
        "termProgressBar"
    ).style.width =
        percentage + "%";

}



// ==========================================
// MAIN COUNTDOWN
// ==========================================

function updateCountdown() {

    const now = new Date();


    let difference =
        targetDate - now;



    // ======================================
    // DECEMBER 4TH — 5:45 PM
    // ======================================

    if (difference <= 0) {

        difference = 0;


        document.getElementById(
            "months"
        ).textContent = "0";


        document.getElementById(
            "weeks"
        ).textContent = "0";


        document.getElementById(
            "days"
        ).textContent = "0";


        document.getElementById(
            "hours"
        ).textContent = "00";


        document.getElementById(
            "minutes"
        ).textContent = "00";


        document.getElementById(
            "seconds"
        ).textContent = "00";


        updateClassCounters(
            targetDate
        );

        updateTermProgress(now);


        return;
    }



    // ======================================
    // CALCULATE TIME
    // ======================================

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const seconds =
        totalSeconds % 60;


    const minutes =
        Math.floor(
            totalSeconds / 60
        ) % 60;


    const hours =
        Math.floor(
            totalSeconds / 3600
        ) % 24;


    const totalDays =
        Math.floor(
            totalSeconds / 86400
        );



    // ======================================
    // MONTHS / WEEKS / DAYS
    // ======================================

    const months =
        Math.floor(
            totalDays / 30
        );


    const remainingDaysAfterMonths =
        totalDays % 30;


    const weeks =
        Math.floor(
            remainingDaysAfterMonths / 7
        );


    const days =
        remainingDaysAfterMonths % 7;



    // ======================================
    // DISPLAY COUNTDOWN
    // ======================================

    document.getElementById(
        "months"
    ).textContent = months;


    document.getElementById(
        "weeks"
    ).textContent = weeks;


    document.getElementById(
        "days"
    ).textContent = days;


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2, "0");



    // ======================================
    // UPDATE CLASS COUNTERS
    // ======================================

    updateClassCounters(now);

}

// ======================================
// UPDATE TERM PROGRESS
// ======================================

updateTermProgress(now);

}



// ==========================================
// START
// ==========================================

updateCountdown();


// Update every second

setInterval(
    updateCountdown,
    1000
);
