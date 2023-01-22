Feature: menu options functionality

    Scenario: User is able to go back to home page using `ALLITEMS` link
        Given standard_user logged in
        When user from another page go back to home page
        Then user is on home page

    Scenario: User is able to use ABOUT link
        Given standard_user logged in
        When user click on a ABOUT link
        Then user is on another site

    Scenario: User is able to log out from aplication
        Given standard_user logged in
        When user log out from aplication
        Then user is logged out

    Scenario: User is able to reset application state - clear basket icon
        Given standard_user logged in
        When user add item and reset application
        Then item is removed
    @skip
    #  When the user resets the application, the button "remove" still exist on selected item
    Scenario: User is able to reset application state - item not selected
        Given standard_user logged in
        When user add item and reset application
        Then item is not selected