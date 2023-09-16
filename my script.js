// handle the form submit event
    function.prepareEventHandlers() {
	document.getElementById("frmcontact").onsubmit = function() {
		//prevent form from submitting if no password.
		if (document.getElementById("password").value =="") {
			document.getElementById("errorMessage").innerHTML = "please  provide at least your password!";
			//to stop the form from submitting
			return false;
		} else{
			//reset and allow the form to submit
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
	
}

// when the document loads
window.onload = function() {
  prepareEventHandlers	
};