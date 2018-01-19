function testNow() {
	console.log("starting testing....");
	let testMsg = document.getElementById("test_result");
	if (testUsername() && testPassword()) {
		testMsg.innerHTML = "All test Passed!"
	} else
		testMsg.innerHTML = "Test failed."

}

function testUsername() {
	let testPassed = 0;
	// Test 1
	let username = "1234sdklfdlks";
	if (!validateUsername(username))
		testPassed++;

	// Test 2
	username = "";
	if (!validateUsername(username))
		testPassed++;

	// Test 3
	username = "theuser";
	if (validateUsername(username))
		testPassed++;

	// Test 4
	username = "the";
	if (!validateUsername(username))
		testPassed++;
	
	return isAllTestPassed(4, testPassed, "username tests failed");
}

function testPassword() {
	let testPassed = 0;
	let password = document.getElementById("password");
	// Test 1
	password.value = "1234sdklfdlks";
	if (isSubmitDisabled())
		testPassed++;

	// Test 2
	password.value = "";
	if (isSubmitDisabled())
		testPassed++;

	// Test 3
	password.value = "theuser";
	if (!isSubmitDisabled())
		testPassed++;
	return isAllTestPassed(0, 0, "password tests failed");
}

function isAllTestPassed(totalTest, testPassed, msg) {
	if (testPassed == totalTest) {
		console.log("All test passed");
		return true;
	} else
		console.log(msg + ". Out of " + totalTest +", only " + testPassed + " passed.");
		return false;
}

function isSubmitDisabled() {
	return document.getElementById('submitbtn').disabled;
}