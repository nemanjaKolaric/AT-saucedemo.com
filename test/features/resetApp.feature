Feature: reset functionality
    
    Scenario: User is able to reset aplication state - clear basket icon
        When user add item and reset aplication state
        Then item is removed
    @skip
    #  When the user resets the application, the item is still selected in the intentory list
    Scenario: User is able to reset aplication state - item not selected
        When user add item and reset aplication state
        Then item is not selected
