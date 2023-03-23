Feature: Scenariors to test Registration and Login


Scenario: Provide Registration details
    Given User opens the registration and login page
    Then User click on register button
    Then User provides namer and gender
    Then User selects DOB and subscription

Scenario: Test Login functionality
    Given User opens the registration and login page
    Then  User logs in