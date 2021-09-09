var json = [];

// Default table --> English Table
getData("english")
getDistrictResults("english")

// Click on Sinhala language button
$('#Sinhala').click(function(){
    let language = "sinhala"
    console.log(language)
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
    changeDistrictLanguage(language)
});

// Click on English language button
$('#English').click(function(){
    let language = "english"
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
    changeDistrictLanguage(language)
});

// Click on Tamil language button
$('#Tamil').click(function(){
    let language = "tamil"
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
    changeDistrictLanguage(language)
});

// English/SInhala/Tamil Tables display function
function getData(language) {
    $.getJSON(`Data/${language}.json`, function (data) {
        var pharmacy = [];
        $.each(data, function (key, value) {
            pharmacy += '<tr>';
            pharmacy += '<td>' + 
                value.District + '</td>';
    
                pharmacy += '<td>' + 
                value.Name + '</td>';
    
                pharmacy += '<td>' + 
                value.Address + '</td>';
    
                pharmacy += '<td>' + 
                value.Phone + '</td>';
    
                pharmacy += '<td>' + 
                value.WhatsApp + '</td>';
    
                pharmacy += '<td>' + 
                value.Viber + '</td>';
    
                pharmacy += '<td>' + 
                value.MoH + '</td>';
    
            pharmacy += '</tr>';
        })
        json = data;
        $('#table tbody').append(pharmacy);
    });
}

// this function to filter dictrict by SInhala and Tamil languages
function getDistrictResults(language) {
    $('#districtButtons button').click(function(event) {
        var districtVal = this.textContent
        if (language.includes("sinhala")) {
            filteredTableByDisctrict(districtVal)
        } else if (language.includes("tamil")) {
            filteredTableByDisctrict(districtVal)
        } else {
            filteredTableByDisctrict(districtVal)
        }
    });
}

// English/Sinhala/Tamil languages dictrict filter 
function filteredTableByDisctrict(districtVal) {
    var districts = [];
    var District = "District";
    $('#table tbody').html('');
    for (var i=0 ; i < json.length ; i++)
    {
        if ((json[i][District]).includes(districtVal)) {
            filterDataForDistrict()
        } 
        function filterDataForDistrict() {
            var district_data = '';
            district_data += '<tr>';
            district_data += '<td>' + json[i].District + '</td>';
            district_data += '<td>' + json[i].Name + '</td>';
            district_data += '<td>' + json[i].Address + '</td>';
            district_data += '<td>' + json[i].Phone + '</td>';
            district_data += '<td>' + json[i].WhatsApp + '</td>';
            district_data += '<td>' + json[i].Viber + '</td>';
            district_data += '<td>' + json[i].MoH + '</td>';
            district_data += '</tr>';

            districts.push(district_data);
            $('#table tbody').append(district_data);
        }
    }
}

// English language search function
function filteredTable() {
    var results = [];
    var District = "District";
    var Name = "Name";
    var Address = "Address";
    var MOH = "MoH";
    var searchVal = document.getElementById('search').value.toLowerCase();
    $('#table tbody').html('');
    for (var i=0 ; i < json.length ; i++)
    {
        if ((json[i][District].toLowerCase()).includes(searchVal)) {
            filterData()
        } else if ((json[i][Name].toLowerCase()).includes(searchVal)) {
            filterData()
        } else if ((json[i][Address].toLowerCase()).includes(searchVal)) {
            filterData()
        } else if ((json[i][MOH].toLowerCase()).includes(searchVal)) {
            filterData()
        }
        function filterData() {
            var newroutes_data = '';
            newroutes_data += '<tr>';
            newroutes_data += '<td>' + json[i].District + '</td>';
            newroutes_data += '<td>' + json[i].Name + '</td>';
            newroutes_data += '<td>' + json[i].Address + '</td>';
            newroutes_data += '<td>' + json[i].Phone + '</td>';
            newroutes_data += '<td>' + json[i].WhatsApp + '</td>';
            newroutes_data += '<td>' + json[i].Viber + '</td>';
            newroutes_data += '<td>' + json[i].MoH + '</td>';
            newroutes_data += '</tr>';

            results.push(newroutes_data);
            $('#table tbody').append(newroutes_data);
        }
    }
}

function changeDistrictLanguage(language) {
    if (language.includes("sinhala") ) {
        // change button names when select sinhala language
        document.getElementById('provinceSelector').textContent   = 'පලාත තෝරන්න';
        document.getElementById('languageSelector').textContent   = 'භාශාව තෝරන්න';
        document.getElementById('search').placeholder   = 'ෆාමසියේ නමින්, නගරයකින්, ගමකින් ඔබේ ෆාමසිය සොයන්න...';
        // change district names when select sinhala language
        document.getElementById('Ampara').textContent   = 'අම්පාර';
        document.getElementById('Anuradhapura').textContent   = 'අනුරාධපුර';
        document.getElementById('Badulla').textContent   = 'බදුල්ල';
        document.getElementById('Batticaloa').textContent   = 'මඩකලපුව';
        document.getElementById('Colombo').textContent   = 'කොළඹ';
        document.getElementById('Galle').textContent   = 'ගාල්ල';
        document.getElementById('Gampaha').textContent   = 'ගම්පහ';
        document.getElementById('Hambantota').textContent   = 'හම්බන්තොට';
        document.getElementById('Jaffna').textContent   = 'යාපනය';
        document.getElementById('Kalutara').textContent   = 'කළුතර';
        document.getElementById('Kandy').textContent   = 'මහනුවර';
        document.getElementById('Kegalle').textContent   = 'කෑගල්ල';
        document.getElementById('Kurunegala').textContent   = 'කුරුණෑගල';
        document.getElementById('Matale').textContent   = 'මාතලේ';
        document.getElementById('Matara').textContent   = 'මාතර';
        document.getElementById('Monaragala').textContent   = 'මොණරගල';
        document.getElementById('Mullaitivu').textContent   = 'මුලතිව්';
        document.getElementById('Nuwara-Eliya').textContent   = 'නුවරඑලිය';
        document.getElementById('Polonnaruwa').textContent   = 'පොළොන්නරුව';
        document.getElementById('Puttalam').textContent   = 'පුත්තලම';
        document.getElementById('Ratnapura').textContent   = 'රත්නපුර';
        document.getElementById('Trincomalee').textContent   = 'ත්රිකුණාමලය';
        document.getElementById('Vavuniya').textContent   = 'වවුනියාව';
    } else if (language.includes("tamil")) {
        // change button names when select tamil language
        document.getElementById('provinceSelector').textContent   = 'மாகாணத்தைத்';
        document.getElementById('languageSelector').textContent   = 'மொழியை தேர்ந்தெடுங்கள்';
        document.getElementById('search').placeholder   = 'மருந்தகம், நகரம் அல்லது கிராமத்தின் பெயரால் உங்கள் மருந்தகத்தைக் கண்டறியவும் ...';
        // change district names when select tamil language
        document.getElementById('Ampara').textContent   = 'அம்பாறை';
        document.getElementById('Anuradhapura').textContent   = 'அனுராதபுரம்';
        document.getElementById('Badulla').textContent   = 'பதுளை';
        document.getElementById('Batticaloa').textContent   = 'மட்டக்களப்பு';
        document.getElementById('Colombo').textContent   = 'கொழும்பு';
        document.getElementById('Galle').textContent   = 'காலி';
        document.getElementById('Gampaha').textContent   = 'கம்பஹா';
        document.getElementById('Hambantota').textContent   = 'அம்பாந்தோட்டை';
        document.getElementById('Jaffna').textContent   = 'யாழ்';
        document.getElementById('Kalutara').textContent   = 'களுத்துறை';
        document.getElementById('Kandy').textContent   = 'கண்டி';
        document.getElementById('Kegalle').textContent   = 'கேகாலை';
        document.getElementById('Kurunegala').textContent   = 'குருநாகல்';
        document.getElementById('Matale').textContent   = 'மாத்தளை';
        document.getElementById('Matara').textContent   = 'மாத்தறை';
        document.getElementById('Monaragala').textContent   = 'மொனராகல';
        document.getElementById('Mullaitivu').textContent   = 'முல்லைத்தீவு';
        document.getElementById('Nuwara-Eliya').textContent   = 'நுவரெலியா';
        document.getElementById('Polonnaruwa').textContent   = 'பொலன்னறுவை';
        document.getElementById('Puttalam').textContent   = 'புத்தளம்';
        document.getElementById('Ratnapura').textContent   = 'இரத்தினபுரி';
        document.getElementById('Trincomalee').textContent   = 'திருகோணமலை';
        document.getElementById('Vavuniya').textContent   = 'வவுனியா';
    } else if (language.includes("english")) {
        // change button names when select english language
        document.getElementById('provinceSelector').textContent   = 'Select Province';
        document.getElementById('languageSelector').textContent   = 'Select Language';
        document.getElementById('search').placeholder   = 'Search By District, Pharmacy Name, Address or MOH...';
        // change district names when select english language
        document.getElementById('Ampara').textContent   = 'Ampara';
        document.getElementById('Anuradhapura').textContent   = 'Anuradhapura';
        document.getElementById('Badulla').textContent   = 'Badulla';
        document.getElementById('Batticaloa').textContent   = 'Batticaloa';
        document.getElementById('Colombo').textContent   = 'Colombo';
        document.getElementById('Galle').textContent   = 'Galle';
        document.getElementById('Gampaha').textContent   = 'Gampaha';
        document.getElementById('Hambantota').textContent   = 'Hambantota';
        document.getElementById('Jaffna').textContent   = 'Jaffna';
        document.getElementById('Kalutara').textContent   = 'Kalutara';
        document.getElementById('Kandy').textContent   = 'Kandy';
        document.getElementById('Kegalle').textContent   = 'Kegalle';
        document.getElementById('Kurunegala').textContent   = 'Kurunegala';
        document.getElementById('Matale').textContent   = 'Matale';
        document.getElementById('Matara').textContent   = 'Matara';
        document.getElementById('Monaragala').textContent   = 'Monaragala';
        document.getElementById('Mullaitivu').textContent   = 'Mullaitivu';
        document.getElementById('Nuwara-Eliya').textContent   = 'Nuwara-Eliya';
        document.getElementById('Polonnaruwa').textContent   = 'Polonnaruwa';
        document.getElementById('Puttalam').textContent   = 'Puttalam';
        document.getElementById('Ratnapura').textContent   = 'Ratnapura';
        document.getElementById('Trincomalee').textContent   = 'Trincomalee';
        document.getElementById('Vavuniya').textContent   = 'Vavuniya';
    }
}

// Display two(language and province dropdowns)
$('#dropdownForLanguage').click(function(){
    $('#languageDropdown').toggleClass('show');
});

$('#dropdownForProvince').click(function(){
    $('#provinceDropdown').toggleClass('show');
});
