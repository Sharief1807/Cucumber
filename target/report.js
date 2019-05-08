$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/org/firstcucumber/Addtariff.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User can add tariff",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User in the telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "Addtariff.user_in_the_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in the AddTariff Page",
  "keyword": "And "
});
formatter.match({
  "location": "Addtariff.user_in_the_AddTariff_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill details and clickon submit",
  "rows": [
    {
      "cells": [
        "1000",
        "449",
        "449",
        "200",
        "10",
        "30",
        "05"
      ]
    },
    {
      "cells": [
        "1500",
        "649",
        "499",
        "200",
        "10",
        "30",
        "05"
      ]
    },
    {
      "cells": [
        "2000",
        "749",
        "549",
        "200",
        "10",
        "25",
        "05"
      ]
    },
    {
      "cells": [
        "2500",
        "899",
        "599",
        "200",
        "05",
        "25",
        "05"
      ]
    },
    {
      "cells": [
        "3000",
        "999",
        "649",
        "200",
        "05",
        "20",
        "05"
      ]
    },
    {
      "cells": [
        "3500",
        "999",
        "699",
        "200",
        "05",
        "20",
        "05"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Addtariff.user_fill_details_and_clickon_submit(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "Addtariff.user_see_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
});