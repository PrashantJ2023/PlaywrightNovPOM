import { BasePage } from "./BasePage";

export class CartPage extends BasePage
{
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page)
    {
        super(page)
        this.page=page
        this.cartbutton=this.page.locator("//button[text()='Cart']")
        this.enrollNowButton=this.page.locator("//button[text()='Enroll Now']")
        this.enrollNowAddress=this.page.locator("#address")
        this.enrollNowPhoneNum=this.page.locator("#phone")
        this.enrollNowEnrollNum=this.page.locator("//button[text()='Cancel']/following-sibling::button[text()='Enroll Now']")
        this.enrollOrderID=this.page.locator("//h4[@class='uniqueId']/b")

    }
      
    
    async addToCart(courseName)
    {
        await this.page.locator(`//h2[text()='${courseName}']/../../button[text()='Add to Cart']`).click()
    }  

    async navigateCartPage()
    {
        await this.cartbutton.click()
    }
     
    async cartEnrollButton()
    {
        await this.enrollNowButton.click()
    }

    async enrollNowEnterAddress(address)
    {
        await this.enrollNowAddress.pressSequentially(address)
    }

    async enrollNowEnterPhone(phone)
    {
        await this.enrollNowPhoneNum.pressSequentially(phone)
    } 

    async enrollClickEnrollnowButton()
    {
        await this.enrollNowEnrollNum.click()
        
    }
    
    async captureOrderID()
    {
      const orderID= await this.enrollOrderID.innerText()
      console.log(orderID);
      return orderID

    }
     
    async clickCancelEnroll()
    {
    await this.page.getByRole('button',{name:'Cancel'}).click()
    }  
}