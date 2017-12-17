/*every time now the $ is used it refers to jQuery*/

var firstName = prompt ('What is your first name');
	var lastName = prompt ('What is your surname');

	var fullName = firstName + ' ' + lastName;
	console.log(fullName);
	if (firstName=='General' && lastName.toLowerCase() !='Assembly') {
	console.log ('Hello General!'); 
}

var age = prompt('How old are you');
	age = parseInt(age);
	console.log ('You are ' + age + ' years old');

	if (age>=18) {
		console.log ('You\'re an adult');
	} else if (age>=13) {
		console.log ('you are a teenager');
	}else {
	console.log ('You are a child');
}


//when the page has loaded
$(function () {

	//When the user clicks the image ask the questions
	$('img').on('click', askQuestions);

	//When the user clicks an h3
	$('h3').on('click', function () {
		//toggle the next element or can update to hide or slide toggle is smarter. number in brackets is timing for animation in milisec
		$(this).next().slideToggle(500);	

	});

});