Interactive Resume
==================

Uses JQuery to perform element replacement with a HelperJS file. 

example: 

```javascript

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span><hr>';
var HTMLbioPic = '<img src="%data%" class="biopic">';

```

The object data is appended to the HTML elements in place of the %data% strings

``` javascript

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);

```

JSON objects declared in resumeBuilder.js: 

* bio
* education
* online courses
* work
* projects

Map pulls locations from education and work JSON objects and uses Google Maps API. 