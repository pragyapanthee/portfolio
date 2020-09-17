function validation()
{
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");

	var text;

	error_message.style.padding = "10px";

	if (name.length == "") 
	{
		text = "Please enter the name";
		error_message.innerHTML = text;

	
		return false;
	}

	if (email.length == "") 
	{
		text = "Please enter the email";
		error_message.innerHTML = text;

		return false;
	}

	if (email.indexOf("@")== -1 || email.length < 6) 
	{
		text = "Please enter valid email";
		error_message.innerHTML = text;

		return false;
	}

	if(message.length == "")
	{
		text = "Please enter the message";
		error_message.innerHTML = text;

		return false;
	}

	text = "Message Sended Sucessfully";
		success_message.innerHTML = text;
		error_message.style.padding = "0px";
		success_message.style.padding= "10px";

		return true;


}