// Class: CS 290- 400
// Name: Chelsea Egan
// Project - JS for History Subpage

// Highlights title in navigation based on scroll position
// Source: http://imakewebthings.com/waypoints/
$(document).ready(function () {
  $('#scrollNav').scroll(function () {
    // Gets initial scroll position
    var scroll = $('#scrollNav').scrollTop();
    // First section
    if (scroll >= 0 && scroll < 700) {
      // Remove styles from all titles
      styleUnFocus();
      // Style "Creator"
      styleFocus('#creatorLink');
    } else if (scroll >= 700 && scroll < 1500) {
      styleUnFocus();
      styleFocus('#introLink');
    } else if (scroll >= 1500 && scroll < 2300) {
      styleUnFocus();
      styleFocus('#impactLink');
    } else if (scroll >= 2300) {
      styleUnFocus();
      styleFocus('#currentLink');
    } else {
      styleUnFocus();
    }

  })
})

// Styling based on user clicking a title in the navigation
$('#creatorLink').on('click', function () {
  // Style "Creator" in navigation
  styleFocus('#creatorLink');
  // Remove styles from all titles in navigation
  styleUnfocus();
})
$('#introLink').on('click', function () {
  styleFocus('#introLink');
  styleUnfocus();
})
$('#impactLink').on('click', function () {
  styleFocus('#impactLink');
  styleUnfocus();
})
$('#currentLink').on('click', function () {
  styleFocus('#currentLink');
  styleUnfocus();
})

// Sets style on navigation title
function styleFocus(navLink) {
  $(navLink).css({
    'background-color': 'darkSlateGray',
    'color': 'white',
    'border-radius': 4 + 'px',
    'padding': 5 + 'px',
    'margin-top': 5 + 'px',
    'margin-bottom': 5 + 'px',  
  });
}

// Removes style from all navigation titles
function styleUnFocus() {
  $('.history-link').css({
    'background-color': 'white',
    'color': 'darkSlateGray',
    'border-radius': 0,
    'padding': 0,
    'margin': 0
  })
}