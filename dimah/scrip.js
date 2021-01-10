function buttonstate(){
if(document.getElementById("userNsearch").value === "" && document.getElementById("Appsearch").value === ""){

document.getElementById("btnSearch").disabled = true

}else
{

document.getElementById("btnSearch").disabled = false

}
}