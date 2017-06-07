// JSON obects for bio, education, work and projects
var bio = {

    "name": "VIPUL MALHOTRA",

    "role": "Web Developer",
    "contacts": {

        "mobile": "123-567-8904",

        "email": "vipul1996malhotra@gmail.com",

        "twitter": "@vip9876",
        "github": "vip8896",

        "location": "Chandigarh,India"

    },

    "welcomeMessage": "Computer Science Grad Seeking Programmer/Developer/Information Technology Specialist position",

    "skills": [

        "FRONT END DEVELOPMENT", "C/C++", "JAVA CERTIFICATION",
        "PostgreSQL", "CISCO PACKET TRACER", "SAP LUMIRA", "LINUX", "ALGORITHM DESIGN AND ANALYSIS"
    ],

    "biopic": "images/vipul_bio.jpg"

};


var education = {

    "schools": [{

            "name": "Chitkara University",

            "location": "RAJPURA,PUNJAB",

            "degree": "Computer Science Engineering(In Progress)",
            "majors": ["WEB DEVELOPMENT", "ALGORITHM DESIGNING"],

            "dates": "Aug 2014- Aug-2018",

            "url": "http://www.chitkara.edu.in/"

        },



        {
            "name": "Udacity",

            "location": "CHANDIGARH",

            "degree": "Frontend Nanodgree (In Progress)",

            "majors": ["Frontend Development", " Full Stack Development", " DevOps"],

            "dates": "April-2016- Current",

            "url": "https://udacity.com/"

        }
    ],


    "onlineCourses": [


        {

            "title": "Intro to Computer Science",

            "school": "Udacity",

            "dates": "2015",

            "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"

        },


        {

            "title": "Programming in scratch",

            "school": "EDX",

            "dates": "2015",

            "url": "https://edx.org/"

        },


        {

            "title": "Applied Cryptography",

            "school": "Udacity",

            "dates": "2013",

            "url": "https://www.udacity.com/course/applied-cryptography--cs387"

        },


        {

            "title": "Intro to Statistics",

            "school": "Udacity",

            "dates": "2013",

            "url": "https://www.udacity.com/course/intro-to-statistics--st101"


        },


        {

            "title": "Malicous Software and It's Underground Economy",

            "school": "Royal Holloway University of London",

            "dates": "2013",

            "url": "https://www.coursera.org/course/malsoftware"

        }

    ]
};


var work = {

    "jobs": [{

            "employer": "Palatine Public Library",

            "title": "Technology Associate",

            "location": "Palatine, IL",

            "dates": "February 2013 to Present",

            "description": "Around the Spring of 2012 I had discovered the MOOC phenomenon via Udacity and Coursera which motivated me to transition down a computer science/information technology career path. After completing many courses, in early 2013, the hard work paid off and I was promoted to a Technology Associate position. Along with a colleague, I was tasked with creating an Apple Digital Media Center, offering digital creation and digital conversion resources to patrons. Since then I have regularly staffed the Digital Media Center and Technology reference desks as well as providing back of the house IT and help desk support."

        },


        {

            "employer": "Class Central",

            "title": "Chief Data Officer",

            "location": "San Francisco, CA",

            "dates": "October 2014 to Present",

            "description": "I am currently a member of the Class Central team, widely considered the defacto standard resource for MOOCs. We have helped more than 3 million people decide which online course to take next."

        }

    ]
};


var projects = {


    "projects": [{

            "title": "Deploying Chat Server",

            "dates": "2016-17",

            "description": "Efficient use of multithreading technique.One laptop was set as a client and the the other as a server.Both the laptops were connected using hotspot and were able to communicate e.g. sending files and messages from one to the other.",


            "images": ["images/project_im.png"],
            "url": "http://obscuredbyfuzz.com/"

        }

    ]


};


// function to display the bio section of the resume

bio.display = function() {


    // header section

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);


    $("#header").prepend(formattedRole);

    $("#header").prepend(formattedName);

    $("#header").append(formattedPic);


    // contacts section


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


    // create contacts array


    var contactArray = [];

    contactArray.push(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);


    // loop thru contacts to display under header


    contactLength = contactArray.length;

    for (var i = 0; i < contactLength; i++) {

        $("#topContacts").append(contactArray[i]);

    }


    // loop thru contacts to display in footer


    for (i = 0; i < contactLength; i++) {

        $("#footerContacts").append(contactArray[i]);

    }


    // Welcome Message section under contacts


    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);


    // loop thru Skills under Contacts section


    for (i = 0; i < bio.skills.length; i++) {

        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

        $("#header").append(formattedSkills);


    }
};


// function to display work history information

work.display = function() {

    for (var job = 0; job < work.jobs.length; job++) {


        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


        // concat employer name and job title

        var formattedWorkTitleFinal = formattedEmployer + formattedWorkTitle;


        // create work array to loop over

        var workArray = [];

        workArray.push(formattedWorkDescription, formattedWorkLocation, formattedWorkDates, formattedWorkTitleFinal);

        var workLength = workArray.length;


        // loop over work array


        for (var i = 0; i < workLength; i++) {

            $(".work-entry:last").prepend(workArray[i]);

        }

    }
};


// function to display projects

projects.display = function() {

    for (var item = 0; item < projects.projects.length; item++) {

        $("#projects").append(HTMLprojectStart);


        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);

        for (var j = 0,jLen= projects.projects[item].images.length; j<jLen;j++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[j]);
            $('#projects').append(formattedProjectImage);
        }
        var projectsURL = projects.projects[item].url;


        // Make Project Title a clickable link

        formattedProjectTitle = formattedProjectTitle.replace("#", projectsURL);


        // create projects array to loop over

        var projectsArray = [];

        projectsArray.push(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

        var projectsLength = projectsArray.length;


        // loop over projects array

        for (var i = 0; i < projectsLength; i++) {

            $(".project-entry:last").append(projectsArray[i]);

        }
    }
};


// function to display schools and online courses
education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (var school = 0; school < education.schools.length; school++) {


        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        var educationURL = education.schools[school].url;


        // concat school name and degree obtained

        var formattedSchoolNameFinal = formattedSchoolName + formattedSchoolDegree;


        // make school name a clickable link

        formattedSchoolNameFinal = formattedSchoolNameFinal.replace("#", educationURL);


        // create education array to loop over

        var educationArray = [];

        educationArray.push(formattedSchoolMajor, formattedSchoolLocation, formattedSchoolDates, formattedSchoolNameFinal);

        var educationLength = educationArray.length;


        // loop over education array
        for (var i = 0; i < educationLength; i++) {

            $(".education-entry:last").prepend(educationArray[i]);

        }
    }


    // start online courses section

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var moocs = 0; moocs < education.onlineCourses.length; moocs++) {


        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[moocs].title);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[moocs].school);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[moocs].dates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[moocs].url);


        // make url strings clickable links

        formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[moocs].url);


        // concat course title and university name

        var formattedOnlineProvider = formattedOnlineTitle + formattedOnlineSchool;


        // make course titles clickable links

        formattedOnlineProvider = formattedOnlineProvider.replace("#", education.onlineCourses[moocs].url);


        // create moocs array to loop over

        var moocsArray = [];

        moocsArray.push(formattedOnlineProvider, formattedOnlineDates, formattedOnlineURL);

        moocsLength = moocsArray.length;


        // loop over moocs array

        for (t = 0; t < moocsArray.length; t++) {

            $(".education-entry:last").append(moocsArray[t]);

        }
    }
};


// call functions from above


bio.display();

work.display();

projects.display();

education.display();


$("#mapDiv").append(googleMap);