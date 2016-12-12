var fname, lname, email, phone, address;
function onSubmitClick() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value;

	if(firstname == '' || lastname == '' || email == '' || phone == '' || address == '') {
		alert("Please enter all the details");
	}
	else {
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem("fname", firstname);
			localStorage.setItem("lname", lastname);
			localStorage.setItem("email", email);
			localStorage.setItem("phone", phone);
			localStorage.setItem("address", address);

			alert("Submitted Successfully");

			document.getElementById("student_fname").innerHTML = localStorage.getItem("fname");
			document.getElementById("student_lname").innerHTML = localStorage.getItem("lname");
			document.getElementById("student_email").innerHTML = localStorage.getItem("email");
			document.getElementById("student_phone").innerHTML = localStorage.getItem("phone");
			document.getElementById("student_address").innerHTML = localStorage.getItem("address");
		}
	}
}	