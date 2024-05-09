  // Function to redirect to different pages based on input tag ID
  function redirectToPage( ) {
    // Get the ID of the clicked input tag
    var inputID = this.id;



    // Use the button ID to determine the target page
    var pageURL;
    switch (inputID) {
        case 'input0':
            pageURL = 'Add.html';
            break;
        case 'input1':
            pageURL = 'TeamInfo(A).html';
            break;
        case 'input2':
            pageURL = 'TeamInfo(A).html';
            break;
        case 'input3':
            pageURL = 'TeamInfo(A).html';
            break;
        case 'input4':
            pageURL = 'TeamInfo(A).html';
            break;
        // Add more cases as needed for additional inputs
        default:
            pageURL = 'default.html';
    }
    
    // Redirect to the target page
    window.location.href = pageURL;
}

  