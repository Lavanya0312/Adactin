Feature: Hotel Booking in Adactin Application
@login
Scenario: User Login In The Web Application
Given user Launch The Url In Adactin Application
When user Enter The Username In Username Field
And user Enter The Password In Password Field
Then user Click The Login Button And It Navigate To Next Page
@hotel_search
Scenario: User Hotel Search Page 
When user Select The Location In Location Dropdown Field
And user Select The Hotel In Hotel Dropdown 
And user Select The Room Type In  Room Type Dropdown 
And user Select The Number of Rooms In Number of Rooms Dropdown
And user Enter The Check In Date In Check In Date Field
And user Enter The Check Out Date In Check Out Date Field
And user Select The Number Of Adults In Adults Per Room Field
And user Select The Number Of Childrens In Childrens Per Room Field
Then user Click The Search Button And It Navigate  To Next Page
@select_hotel
Scenario: User need to Select The Hotel Page 
When user Select The Hotel By Using Radio Button In hotel Select Page
Then user Select The Continue Button And  It Navigate To Next Page
@book_hotel
Scenario: User Book Hote
When user Enter The First Name
And user Enter The Second Name
And user Enter The Billing Address
And user Enter The Credit Card Number
And user Select The Credit Card Type
And user Select The Credit Card Expire Year And Month
And user Enter The CVV Number
Then user Click Book Now Button And Navigate To Next Page
@logout
Scenario: User Logout From The Application
Then user Click The Logout Button
