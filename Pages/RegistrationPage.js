import { expect } from "@playwright/test"
import { BasePage } from "./BasePage"



export class RegistrationPage extends BasePage {
     
    /**
     * @param {import('@playwright/test').Page} page
     */
    
    constructor(page) {
        super(page)
        this.page=page
        this.nameField=this.page.getByPlaceholder('Name')
        this.emailIDField=this.page.getByPlaceholder('Email')
        this.passwordField=this.page.getByPlaceholder('Password')
        this.stateDropdown=this.page.locator('#state')
        this.hobbiesDropdown=this.page.locator('#hobbies')
        this.signUpButton=this.page.getByRole('button',{name:'Sign up'})

        this.signUpSuccessMessage=this.page.locator("//div[text()='Signup successfully, Please login!']")
        
    }

    async navigateRegistrationPage(URL)
    {
      await  this.page.goto(URL)
    }
     
    async enterName(name)
    {
        await this.nameField.pressSequentially(name)
    }

        async enterEmail(email)
    {
        await this.emailIDField.pressSequentially(email)
    }

            async enterPassword(password)
    {
        await this.passwordField.pressSequentially(password)
    }  

    async selectInterest(interest)
    {
        await this.page.locator(`//label[text()='${interest}']`).click()
    }
     
    async selectGender(gender)
    {
        await this.page.locator(`//input[@value='${gender}']`).click()
    }

   
    async selectState(stateName)
    {
        await this.stateDropdown.selectOption(stateName)
    }

     async selectHobby(Hobbyies)
    {
        await this.hobbiesDropdown.selectOption(Hobbyies)
    }
    
    async signUpButtonClick()
    {
        await this.signUpButton.click()
    }
     
    async signUpMessageValidation()
    {
      await expect(this.signUpSuccessMessage).toBeVisible()
    }
  


}