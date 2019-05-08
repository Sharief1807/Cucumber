
Feature: Title of your feature
  I want to use this template for my feature file

  Scenario: User can add tariff 
    Given User in the telecom page
    And User in the AddTariff Page
    When User fill details and clickon submit
    
    |1000|449|449|200|10|30|05|
    |1500|649|499|200|10|30|05|
    |2000|749|549|200|10|25|05|
    |2500|899|599|200|05|25|05|
    |3000|999|649|200|05|20|05|
    |3500|999|699|200|05|20|05|
    Then User see confirmation message
