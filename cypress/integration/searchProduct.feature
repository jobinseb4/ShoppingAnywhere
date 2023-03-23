Feature: Scenariors to test home page


Scenario: Open the home page and add a product to cart
    Given User visits the website
    Then User searches a product
    Then User adds the product to cart
    Then Verify the product in cart
