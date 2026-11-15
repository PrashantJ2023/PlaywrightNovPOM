import { expect } from "allure-playwright";
import { BasePage } from "./BasePage";

export class CategoryPage extends BasePage
{   

     /**
      * 
      * @param {import('@playwright/test').Page} page 
      */

   constructor(page)
   {
    super(page)
    this.page=page  
    this.addNewCategoryButton=this.page.locator("//button[text()='Add New Category ']")
   }  

   async clickOnAddNewCategoryButton(categoryName)
   {
    await this.acceptDialog(categoryName)
    await this.addNewCategoryButton.click()
   }
     

   async validateCategoryName(categoryName)
   {
    const cName= this.page.locator(`//td[text()='${categoryName}']`)
    await expect(cName).toBeVisible()
   }

   async deleteCategory(categoryName)
   {
    await this.page.locator(`//td[text()='${categoryName}']/following::td/button[text()='Delete ']`).click()
    await this.clickDeletePopup()   
}

   async clickDeletePopup()
   { 
    
    await this.page.locator("//button[text()='Delete']").click()

   }

   async validateDeletedCategory(categoryName)
   {
    const cName= this.page.locator(`//td[text()='${categoryName}']`)
    await expect(cName).not.toBeVisible()
   }
   
    async updateCategoryName(categoryName)
    {
        await this.acceptDialog(categoryName,'Updated')
        await this.acceptDialog(categoryName,'Updated1')
        await this.page.locator(`//td[text()='${categoryName}']/following::td/button/img[@alt='update']`).click()
        console.log("Category name updated");
        
    }

}