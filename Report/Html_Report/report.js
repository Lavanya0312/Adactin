$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url In Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Url_In_Adactin_Application()"
});
formatter.result({
  "duration": 918608199,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Username_In_Username_Field()"
});
formatter.result({
  "duration": 2087898199,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 81672799,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 4301271299,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Hotel Search Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-hotel-search-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@hotel_search"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Select The Location In Location Dropdown Field",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Select The Hotel In Hotel Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Select The Room Type In  Room Type Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select The Number of Rooms In Number of Rooms Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Enter The Check In Date In Check In Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enter The Check Out Date In Check Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select The Number Of Adults In Adults Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The Number Of Childrens In Childrens Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click The Search Button And It Navigate  To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Location_In_Location_Dropdown_Field()"
});
formatter.result({
  "duration": 279857301,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_In_Hotel_Dropdown()"
});
formatter.result({
  "duration": 116149599,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Room_Type_In_Room_Type_Dropdown()"
});
formatter.result({
  "duration": 114104201,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_of_Rooms_In_Number_of_Rooms_Dropdown()"
});
formatter.result({
  "duration": 133011100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Check_In_Date_In_Check_In_Date_Field()"
});
formatter.result({
  "duration": 179366900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Check_Out_Date_In_Check_Out_Date_Field()"
});
formatter.result({
  "duration": 138670299,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_Of_Adults_In_Adults_Per_Room_Field()"
});
formatter.result({
  "duration": 132079100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_Of_Childrens_In_Childrens_Per_Room_Field()"
});
formatter.result({
  "duration": 109415700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Search_Button_And_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 709605100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User need to Select The Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-need-to-select-the-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@select_hotel"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Select The Hotel By Using Radio Button In hotel Select Page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Select The Continue Button And  It Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_By_Using_Radio_Button_In_hotel_Select_Page()"
});
formatter.result({
  "duration": 100765101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Continue_Button_And_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 685464001,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User Book Hote",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-hote",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@book_hotel"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Enter The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Enter The Second Name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select The Credit Card Expire Year And Month",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Click Book Now Button And Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_First_Name()"
});
formatter.result({
  "duration": 95919100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Second_Name()"
});
formatter.result({
  "duration": 85310000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 71704099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Credit_Card_Number()"
});
formatter.result({
  "duration": 72101600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 108119000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Credit_Card_Expire_Year_And_Month()"
});
formatter.result({
  "duration": 391880300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 89347900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_Book_Now_Button_And_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 89210500,
  "status": "passed"
});
});