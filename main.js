//-------------------------------ESTA FUNCIÓN CREA LA TABLA RECIBIENDO DATOS DEL JSON----------------------------------------------------------
var members = data.results[0].members;

function createatable (members){
    var senatedata = document.getElementById("senate-data");
    var tbody = document.createElement("tbody");
    var thead = document.createElement("thead");
    senatedata.appendChild(thead);
    senatedata.appendChild(tbody);
    var Tname = document.createElement("th");
    thead.appendChild(Tname);
    Tname.innerHTML = "Name";
    var Tparty = document.createElement("th");
    thead.appendChild(Tparty);
    Tparty.innerHTML = "Party";
    var Tstate = document.createElement("th");
    thead.appendChild(Tstate);
    Tstate.innerHTML = "State";
    var Tseniority = document.createElement("th");
    thead.appendChild(Tseniority);
    Tseniority.innerHTML = "Seniority";
    var Tpercentage = document.createElement("th");
    thead.appendChild(Tpercentage);
    Tpercentage.innerHTML = "Vote %";
    var titulos = document.createElement("tr");
    
    for (var i = 0; i < members.length; i++){
        var tr = document.createElement("tr");
        senatedata.appendChild(tbody);
        tbody.appendChild(tr);
        var memberspages = members[i].url;
        
        if (members[i].middle_name == null){
        
        var nombres = members[i].first_name + " " + members[i].last_name
        }
        else { var nombres = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name
        }
        
        var td = document.createElement("td")
        tr.appendChild(td);
        var a = document.createElement("a");
        a.setAttribute("href", memberspages);
        a.innerHTML = nombres;
        td.appendChild(a);
        var td3 = document.createElement("td");
        td3.innerHTML = members[i].party;
        tr.appendChild(td3);
        var td4 = document.createElement("td");
        td4.innerHTML = members[i].state;
        tr.appendChild(td4);
        var td5 = document.createElement("td");
        td5.innerHTML = members[i].seniority;
        tr.appendChild(td5);
        var td6 = document.createElement("td");
        td6.innerHTML = members[i].votes_with_party_pct + '%';
        tr.appendChild(td6);
        

    }}    
    
createatable(members) 

//-------------------------------ESTA FUNCIÓN CREA BOTONES PARA FILTRAR SEGÚN EL PARÁMETRO PARTY-------------------------------------------------

//-----------------------------------ESTA FUNCIÓN ELIMINA VALORES REPETIDOS DENTRO DE UNA members---------------------------------------------

function removeDuplicates(){
    let unique_array = []
    for(let q = 0; q < members.length; q++){
        if(unique_array.indexOf(members[q].state) == -1){
            unique_array.push(members[q].state)
        }
    }
    return unique_array
}

let unique_array= removeDuplicates();
unique_array.sort();

//-----------------------------------ESTA FUNCIÓN ABRE UN DROPDOWN MENU CON LAS ETIQUETAS---------------------------------------------------

function createoption(){
    for (let w = 0; w < unique_array.length; w++){
        var op = document.createElement("option");
        var sl = document.getElementById("DDM");
        sl.appendChild(op);
        op.innerHTML = unique_array[w];
}}
createoption();

//-------------------------------ESTA FUNCION FILTRA POR LOS ESTADOS EN UN DDM-------------------------------------------------------------


function estado() {
  var x = document.getElementById("DDM").value;
}

var statefilter = [];
function filterbystate(){
    statefilter = [];
    var stateSelected =  document.getElementById("DDM").value;
    
    if(stateSelected == "All") {
        document.getElementById("senate-data").innerHTML = "";
        createatable(members);
    }else{
        for (o = 0; o < members.length; o++){
        if (stateSelected == members[o].state){
            statefilter.push(members[o]);
            document.getElementById("senate-data").innerHTML = "";
        }
    
    }
            createatable(statefilter);
    }
    console.log(statefilter)
}

//----------------------------------UNION DE FILTROS-------------------------------------------------------------------------------------------


var membersfilter = [];
function filter(){
    membersfilter = [];
    var stateSelected =  document.getElementById("DDM").value;
    var parties = document.querySelectorAll('input[name=party]:checked');
    for (x = 0; x < members.length; x++){
    for (i = 0; i < parties.length; i++){
    if (parties[i].value == members[x].party && stateSelected == members[x].state){       
            membersfilter.push(members[x]);
        }
    if(stateSelected == "ALL" && parties[i].value == members[x].party){
         membersfilter.push(members[x]); 
        } 
    }          
      if (parties.length == 0 && stateSelected == "ALL"){
       membersfilter = members ;        
        }   
        if(parties.length == 0 && stateSelected == members[x].state) {
         membersfilter.push(members[x]);      
        }  
    }
    console.log(membersfilter);
            document.getElementById("senate-data").innerHTML = "";
           createatable(membersfilter);
}
