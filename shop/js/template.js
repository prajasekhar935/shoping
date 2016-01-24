function renderTemplates(filename)            
{
    var url = "json/"+"comp/"+filename + ".json";
    $.getJSON(url, function(data)
    {
        //this gives us a compiled template registered with Dust as  "mytmpt"
        var templContent=document.getElementById('itemTemplate').innerHTML;
        var dataTemplate=dust.compile(templContent,"myTmpl");
        //load the template into the Dust cache
        dust.loadSource(dataTemplate);                
        //inline callback function
        dust.render("myTmpl",data,function(err,res){
            document.getElementById('container').innerHTML=res;
        });//End JSON
    });//END READY
}
function renderTemplatesDescription(filename) {
    var url = "json/" + "desc/" + filename + ".json";
    $.getJSON(url, function (data) {
        //this gives us a compiled template registered with Dust as  "mytmpt"
        var templContent = document.getElementById('itemTemplateDescription').innerHTML;
        var dataTemplate = dust.compile(templContent, "myTmpl");
        //load the template into the Dust cache
        dust.loadSource(dataTemplate);
        //inline callback function
        dust.render("myTmpl", data, function (err, res) {
            document.getElementById('productdescription').innerHTML = res;
        });//End JSON
    });//END READY
}