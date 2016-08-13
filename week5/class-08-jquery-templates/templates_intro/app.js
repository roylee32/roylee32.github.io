var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}
// presidentObject.presidents.forEach(function (president){
//     $('#jquery-list').append('<option>' + president + '</option>');
// })
// //Handlebars Template Append
// var titleObj = {
//     title: 'US Presidents',
//     description: "A JSD Project",
// }

// //2: get template and compile using Handlebars
// var titleSource = $('#title-template').html();
// var titleCompiled = Handlebars.compile(titleSource);

// //3: pass compiled template JS object
// var titleTemplate = titleCompiled(titleObj);

// //4: append template to the DOM
// $('#title').append(titleTemplate);


var presidentSource = $('#president-template').html();
var presidentCompiled = Handlebars.compile(presidentSource);
var presidentTemplate = presidentCompiled(presidentObject);
$('#handlebars-list').append(presidentTemplate);

