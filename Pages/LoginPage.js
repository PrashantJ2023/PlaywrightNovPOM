import { BasePage } from './BasePage'

export class LoginPage extends BasePage
{    
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {   
        super(page)
        this.page=page
        this.emailField=this.page.getByPlaceholder('Enter Email')
        this.passwordField=this.page.getByPlaceholder('Enter Password')
        this.signInButton=this.page.getByRole('button',{name:'Sign in'})
    } 
    
    async navigateLoginPage(URL)
    {
        await this.page.goto(URL)
    }

    async enterEmail(email)
    {
      await  this.emailField.pressSequentially(email,{delay:10})
    }

    async enterPassword(password)
    {
        await  this.passwordField.pressSequentially(password,{delay:10})
    }
    
    async clickSignin()
    {
       await this.signInButton.click()
    }
       
    async waitForTimeOut(timeOut)
    {
        await this.page.waitForTimeout(timeOut)
    }

    async signIn(email,password)
    {   
        await this.enterEmail(email)
        await this.enterPassword(password)
        await this.clickSignin()
    }

}