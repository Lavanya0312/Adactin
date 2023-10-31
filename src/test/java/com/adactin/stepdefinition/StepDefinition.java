package com.adactin.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunnerClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	public static WebDriver driver = RunnerClass.driver;
	
	@Given("^user Launch The Url In Adactin Application$")
	public void user_Launch_The_Url_In_Adactin_Application() throws Throwable {
		driver.get("http://adactinhotelapp.com/");
	}

	@When("^user Enter The Username In Username Field$")
	public void user_Enter_The_Username_In_Username_Field() throws Throwable {
		WebElement username = driver.findElement(By.xpath("//input[@id='username']"));
		username.sendKeys("Lavanya6125");
	}

	@When("^user Enter The Password In Password Field$")
	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
	WebElement password = driver.findElement(By.xpath("//input[@id='password']"));
	password.sendKeys("Lava@1996");
	}

	@Then("^user Click The Login Button And It Navigate To Next Page$")
	public void user_Click_The_Login_Button_And_It_Navigate_To_Next_Page() throws Throwable {
		WebElement login = driver.findElement(By.xpath("//input[@id='login']"));
		login.click();
	}

	@When("^user Select The Location In Location Dropdown Field$")
	public void user_Select_The_Location_In_Location_Dropdown_Field() throws Throwable {
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	WebElement location = driver.findElement(By.xpath("//select[@name='location']"));	
	Select s = new Select(location);
	s.selectByIndex(6);
	}

	@When("^user Select The Hotel In Hotel Dropdown$")
	public void user_Select_The_Hotel_In_Hotel_Dropdown() throws Throwable {
		WebElement hotels = driver.findElement(By.xpath("//select[@id='hotels']"));
		Select f=new Select(hotels);
		f.selectByValue("Hotel Hervey");
	}

	@When("^user Select The Room Type In  Room Type Dropdown$")
	public void user_Select_The_Room_Type_In_Room_Type_Dropdown() throws Throwable {
		WebElement room_type = driver.findElement(By.xpath("//select[@id='room_type']"));
		Select g=new Select(room_type);
		g.selectByVisibleText("Super Deluxe");
	}

	@When("^user Select The Number of Rooms In Number of Rooms Dropdown$")
	public void user_Select_The_Number_of_Rooms_In_Number_of_Rooms_Dropdown() throws Throwable {
		WebElement room_nos = driver.findElement(By.xpath("//select[@id='room_nos']"));
		Select h=new Select(room_nos);
		h.selectByIndex(2);
	}

	@When("^user Enter The Check In Date In Check In Date Field$")
	public void user_Enter_The_Check_In_Date_In_Check_In_Date_Field() throws Throwable {
		WebElement datepick_in = driver.findElement(By.xpath("//input[@id='datepick_in']"));
		datepick_in.click();
		datepick_in.clear();
		datepick_in.sendKeys("15/10/2023");

	}

	@When("^user Enter The Check Out Date In Check Out Date Field$")
	public void user_Enter_The_Check_Out_Date_In_Check_Out_Date_Field() throws Throwable {
		WebElement datepick_out = driver.findElement(By.xpath("//input[@id='datepick_out']"));
		datepick_out.click();
		datepick_out.clear();
		datepick_out.sendKeys("20/10/2023");
	}

	@When("^user Select The Number Of Adults In Adults Per Room Field$")
	public void user_Select_The_Number_Of_Adults_In_Adults_Per_Room_Field() throws Throwable {
		WebElement adult_room = driver.findElement(By.xpath("//select[@id='adult_room']"));
		Select i=new Select(adult_room);
		i.selectByIndex(2);
	}

	@When("^user Select The Number Of Childrens In Childrens Per Room Field$")
	public void user_Select_The_Number_Of_Childrens_In_Childrens_Per_Room_Field() throws Throwable {
		WebElement child_room = driver.findElement(By.xpath("//select[@id='child_room']"));
		Select j=new Select(child_room);
		j.selectByVisibleText("2 - Two");
	}

	@Then("^user Click The Search Button And It Navigate  To Next Page$")
	public void user_Click_The_Search_Button_And_It_Navigate_To_Next_Page() throws Throwable {
		WebElement Submit = driver.findElement(By.xpath("//input[@id='Submit']"));
		Submit.click();
	}

	@When("^user Select The Hotel By Using Radio Button In hotel Select Page$")
	public void user_Select_The_Hotel_By_Using_Radio_Button_In_hotel_Select_Page() throws Throwable {
		WebElement radiobutton = driver.findElement(By.xpath("//input[@id='radiobutton_0']"));
		radiobutton.click();
	}

	@Then("^user Select The Continue Button And  It Navigate To Next Page$")
	public void user_Select_The_Continue_Button_And_It_Navigate_To_Next_Page() throws Throwable {
		WebElement cont = driver.findElement(By.xpath("//input[@id='continue']"));
	cont.click();	
	}

	@When("^user Enter The First Name$")
	public void user_Enter_The_First_Name() throws Throwable {
		WebElement first_name = driver.findElement(By.xpath("//input[@id='first_name']"));
		first_name.sendKeys("Lavanya");
		}

	@When("^user Enter The Second Name$")
	public void user_Enter_The_Second_Name() throws Throwable {
		WebElement lastname = driver.findElement(By.xpath("//input[@id='last_name']"));
		lastname.sendKeys("Vivekanandhan");
	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {
		WebElement cc_num = driver.findElement(By.xpath("//input[@id='cc_num']"));
		cc_num.sendKeys("1234567891234567");
	}

	@When("^user Enter The Credit Card Number$")
	public void user_Enter_The_Credit_Card_Number() throws Throwable {
		WebElement address = driver.findElement(By.xpath("//textarea[@id='address']"));
		address.sendKeys("Chennai,Tamilnadu");
	}

	@When("^user Select The Credit Card Type$")
	public void user_Select_The_Credit_Card_Type() throws Throwable {
		WebElement findElement9 = driver.findElement(By.xpath("//select[@id='cc_type']"));
		Select l= new Select(findElement9);
		l.selectByValue("MAST");
	}

	@When("^user Select The Credit Card Expire Year And Month$")
	public void user_Select_The_Credit_Card_Expire_Year_And_Month() throws Throwable {
		WebElement cc_exp_month = driver.findElement(By.xpath("//select[@id='cc_exp_month']"));
		Select k=new Select(cc_exp_month);
		k.selectByIndex(11);
		WebElement findElement11 = driver.findElement(By.xpath("//select[@id='cc_exp_year']"));
		Select m=new Select(findElement11);
		m.selectByValue("2024");
		}

	@When("^user Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {
		WebElement cvv_no = driver.findElement(By.xpath("//input[@id='cc_cvv']"));
		cvv_no.sendKeys("123");
		}

	@Then("^user Click Book Now Button And Navigate To Next Page$")
	public void user_Click_Book_Now_Button_And_Navigate_To_Next_Page() throws Throwable {
		WebElement booknow = driver.findElement(By.xpath("//input[@id='book_now']"));
		booknow.click();
		}

	@Then("^user Click The Logout Button$")
	public void user_Click_The_Logout_Button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebElement logout = driver.findElement(By.id("logout"));
		logout.click();
		
		}


}
