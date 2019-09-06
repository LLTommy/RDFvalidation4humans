/*
Including yashe editor
var yashe = YASHE(document.getElementById("showcase"));
(or, if you would like to instantiate YASHE from an existing text area, use var yashe = YASHE.fromTextArea(document.getElementById('textAreaItem'));
*/

var propsArray=[]

//$(document).keydown(function(event) {
  //var key = (event.keyCode ? event.keyCode : event.which);
  //console.log(key)
//  if (key==9) {
//    if ($("#propsKey").is(":focus") == true){
//        $("#props").focus()
//    }
//    }
//})


function callWebservice(){
  ShEx=document.getElementById('outputfield').value
  data = new FormData();
  data.append( 'schema', ShEx );

  $.ajax( {
    type:'POST',
    url:'http://rdfshape.weso.es/api/schema/info',
    data: data,
    processData: false,
    contentType: false,
    success:function(data) {
      console.log(data)

      if (data['errors'].length>0)
      {
        $('#feedback').text('FALSE\n'+data['errors'])
      }
      else {
        $('#feedback').text(data['wellFormed'])
      }

  }
  })
}


function changeFunc() {

if (document.getElementById("props").value=="ref")
{
      var input = document.createElement("input");
      input.type = "text";
      input.id="refInput"
      document.getElementById('fieldsetId').appendChild(input); // put it into the DOM
      document.getElementById("refInput").focus();

      input.onblur= function() {
      let exp="IRI @"+input.value

      propsArray.push(document.getElementById("propsKey").value)
      propsArray.push(exp)
      }
  }

}


function addProps(){
//  var props='<select id="props"><option value="date">date</option><option value="string">string</option><option value="fKEy">Forgein Key</option>'
  var fieldset= document.getElementById('fieldsetId');
  var fieldParent = fieldset.parentNode;
  var newFieldSet = document.createElement('fieldset');
  newFieldSet.innerHTML = fieldset.innerHTML;
  fieldParent.appendChild(newFieldSet);
  //  document.getElementById("props").appendChild(document.createElement(props));
}


function eval(){
prefixes="PREFIX :   <http://example.org/> \nPREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>\n"

var focusNode = document.getElementById("focusNode").value;
var type = document.getElementById("type").value;
var fieldsetId = document.getElementById("fieldsetId");
var propsKey=document.getElementById("propsKey").value;
var props=document.getElementById("props").value;


//Create ShExprop for valuation
let ShExprops=""
//In case it is a LITERAL - don't do anything else
let ShEx=""

if (type==="LITERAL") {
  propsArray=[]
  ShEx=prefixes+focusNode+" "+type
}

if (type==="BNODE") {
  propsArray=[]
  ShEx=prefixes+focusNode+"[ ]"
}

if (type==="IRI")
{
  if (props!="ref")  //Only add it if it's not a reference
  {
    propsArray.push(propsKey)
    propsArray.push(props)
  }

  for (i=0; i<propsArray.length ;i=i+2)
  {
    ShExprops=ShExprops+" "+propsArray[i]+" "+propsArray[i+1]+" ;"
  }
  
  ShEx=prefixes+focusNode+" "+type
  ShEx=" "+ShEx+" { " +ShExprops+ " }"
}


//If we have a literal, then we don't need { }
//if (ShExprops!=="")
//{ ShEx=" "+ShEx+" { " +ShExprops+ " }"  }

document.getElementById('outputfield').value=ShEx
callWebservice()

}
