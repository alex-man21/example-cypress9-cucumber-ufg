Feature: Login

    Scenario Outline: Login to Orange CRM Website

        Given User is at the login page
        Then Open eyes
        When User enters username as '<username>' and password as '<password>'
        Then Capture screenshot
        And User clicks on login button
        Then User is able to successfully login to the Website
        Then Close eyes
        Examples:
            | username | password |
            | Admin    | admin123 |