var json = [];

getData("english")
getDistrictResults("english")

$('#Sinhala').click(function(){
    let language = "sinhala"
    console.log(language)
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
    changeDistrictLanguage(language)
});
$('#English').click(function(){
    let language = "english"
    console.log(language)
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
});
$('#Tamil').click(function(){
    let language = "tamil"
    console.log(language)
    $('#table tbody').html('');
    getData(language)
    getDistrictResults(language)
});

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

function getDistrictResults(language) {
    $('#districtButtons button').click(function(event) {
        var districtVal = this.textContent
        if (language.includes("sinhala")) {
            console.log(`filter with ${language} language`)
            if (districtVal.includes("Ampara")) {
                districtVal = "අම්පාර"
                console.log(districtVal)
                filteredTableByDisctrict(districtVal)
            } else if (districtVal.includes("Anuradhapura")) {
                districtVal = "අනුරාධපුර"
                console.log(districtVal)
                filteredTableByDisctrict(districtVal)
            } else {
                districtVal = "කොළඹ"
                console.log(districtVal)
                filteredTableByDisctrict(districtVal)
            }
        } else if (language.includes("tamil")) {
            console.log(`filter with ${language} language`)
        } else {
            console.log(districtVal)
            filteredTableByDisctrict(districtVal)
        }
    });
}


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
        var ampara = document.getElementById(Ampara)
        ampara.innerHTML = "somethinga"
        var anuradhapura = document.getElementById(Anuradhapura)
        anuradhapura.innerHTML = "අනුරාධපුර"
    } else if (language.includes("tamil")) {
        document.getElementById(Ampara).textContent.innerHTML = "அம்பாறை"
    }
}


$('.dropdown').click(function(){
    $('.dropdown-menu').toggleClass('show');
});
