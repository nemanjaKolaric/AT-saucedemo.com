Feature: Shopping functionality  

    Scenario: User is able to successfully buy one item
        When user buy one item
        Then the purchase has been made

    Scenario: User is able to successfully buy two items
        When user buy two items
        Then the purchase has been made

    Scenario: User is able to add and remove items from cart
        When user remove item from home page
        Then item is removed
        When user remove item from item page
        Then item is removed
        When user remove item from cart page
        Then item is removed