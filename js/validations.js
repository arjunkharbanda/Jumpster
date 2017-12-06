function validf()
{
	if(document.contactform.uname.value.length<3)
	{
		alert("Please enter your name correctly.")
		return false;
	}
	if(document.contactform.subject.value.length<1)
		alert("Please enter a subject.")
		return false;
	if(document.contactform.email.value.length<1)
		alert("Please enter an Email.")
		return false;
	if(document.contactform.message.value.length<1)
	alert("Please enter a message.")
	return false;	
}