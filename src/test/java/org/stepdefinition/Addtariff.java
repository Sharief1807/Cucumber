package org.stepdefinition;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Addtariff {
	
	public static WebDriver driver;
	
	@Given("User in the telecom page")
	public void user_in_the_telecom_page() {

		System.setProperty("webdriver.chrome.driver", "D:\\Selenium and Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/index.html");
		//throw new cucumber.api.PendingException();
	}

	@Given("User in the AddTariff Page")
	public void user_in_the_AddTariff_Page() {

		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		//throw new cucumber.api.PendingException();
	}

	@When("User fill details and clickon submit")
	public void user_fill_details_and_clickon_submit(DataTable dataTable) {
	   
		
		java.util.List<java.util.List<String>> addTariff = dataTable.asLists();
		driver.findElement(By.id("rental1")).sendKeys(addTariff.get(0).get(0));
		driver.findElement(By.id("local_minutes")).sendKeys(addTariff.get(0).get(1));
		driver.findElement(By.id("inter_minutes")).sendKeys(addTariff.get(0).get(2));
		driver.findElement(By.id("sms_pack")).sendKeys(addTariff.get(0).get(3));
		driver.findElement(By.id("minutes_charges")).sendKeys(addTariff.get(0).get(4));
		driver.findElement(By.id("inter_charges")).sendKeys(addTariff.get(0).get(5));
		driver.findElement(By.id("sms_charges")).sendKeys(addTariff.get(0).get(6));
		
		driver.findElement(By.xpath("//input[@type='submit']")).click();
		
	
	}

	@Then("User see confirmation message")
	public void user_see_confirmation_message() {
	    System.out.println("message displayed");
	}



}
