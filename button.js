function dropdown(id) {
    var div = document.getElementById(id);
    const sidebarButtons = div.querySelectorAll('.sidebar_button');
    const firstButton = sidebarButtons[0];
    const sideArrow = div.querySelector('.sidebar_arrow');
    const isHidden = firstButton.style.maxHeight === '0px';

    sidebarButtons.forEach(button => {
        button.style.display = 'block';
    });

    if (isHidden) {

        sidebarButtons.forEach(button => {
        button.style.maxHeight = button.scrollHeight + 'px';
        sideArrow.style.transform = "rotate(180deg)";
    });
    } else {
        
        sidebarButtons.forEach(button => {
        button.style.maxHeight = '0';
        sideArrow.style.transform = "rotate(90deg)";
    });
    }
}
  
  

// Set the display property of each sidebar_button element to 'none' when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const sidebarButtons = document.querySelectorAll('.sidebar_button');
    sidebarButtons.forEach(button => {
      button.style.display = 'none';
      button.style.maxHeight = '0';
    });

    // get all the main_entry divs
  var mainEntries = document.querySelectorAll('.main_entry');

  // loop through each main_entry div
  mainEntries.forEach(function(mainEntry) {
    // get all the .problem_content_main TDs inside the main_entry div
    var problemContentTds = mainEntry.querySelectorAll('.problem_content_main');

    // loop through each .problem_content_main TD
    for (var i = 0; i < problemContentTds.length; i++) {
      if (i === 0) {
        // set the display style of the first TD to 'block'
        problemContentTds[i].style.display = 'block';
      } else {
        // set the display style of all other TDs to 'none'
        problemContentTds[i].style.display = 'none';
      }
    }
  });
});

function test() {
    alert("test");
}

function displayProblemDesc(mainEntryId, problemID) {
    var entry = document.getElementById(mainEntryId);
    // var buttons = entry.getElementsByClassName('button');
    const contents = entry.querySelectorAll('.problem_content_main');

    // buttons[buttonNum].style.color = 'var(--platinum)';
    // disable all contents under our mainEntryId class.
    contents.forEach(td => {
        td.style.display = 'none';
    });

    // enable the desired content
    const desired = document.getElementById(problemID);
    desired.style.display = 'block';
}

function scrollToSection() {
    // get the section element
    var section = document.getElementById("03_02_23");
    
    // get the position of the div relative to the top of the document
    var divTop = section.offsetTop;
    
    // scroll the page to the position 10 viewport units above the top of the div
    window.scrollTo({
        top: divTop - 10 * window.innerHeight / 100,
        behavior: 'smooth'
      });
    // scroll the page to the section element
    // section.scrollIntoView({ behavior: 'smooth' });
}