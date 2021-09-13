// creating an xhr object
function ajax(){
    var xhttp = new XMLHttpRequest();
// event listener
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
         var x = response.GroceryItems;
        var output = "";
        for (var i = 0; i < x.length; i++) {
           output += "<tr>";
            output+= "<td>" + x[i].Name + "<td>";
            output+= "<td>" + x[i].Quantity + "<td>";
            output+= "<td>" + x[i].Unit + "<td>";
            output+= "<td>" + x[i].Department + "<td>";
            output+= "<td>" + x[i].Notes + "<td>";
            output += "<tr>";
            
            
        }
        document.getElementById("items").innerHTML = output;
        document.getElementById("items").style.backgroundColor=" rgba(50, 0, 10, 0.8)";
        document.getElementById("items").style.color="white";
        document.getElementById("items").style.border="2px solid white";
    }
}
xhttp.open("GET","groceryitems.json",true);
xhttp.send();

}
ajax();
