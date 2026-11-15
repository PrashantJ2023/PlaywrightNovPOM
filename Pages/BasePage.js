const { expect } = require('@playwright/test')


export class BasePage
{    
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
  
    constructor(page)
    {
        this.page=page 
    }

    async navigatePage(URL)
    {
       await this.page.goto(URL)
    }

    async refreshPage()
    {
        this.page.reload()
    }

    async goForward()
    {
        this.page.goForward()
    }

    async goBack()
    {
        this.page.goBack()
    }
    
    async getPageURL()
    {
       return this.page.url()
    }

    async getCurrentPageTitle()
    {
      return  this.page.title()
        
    }

    /**
     * 
     * @param {String} pattern 
     */

    async assertUrlNotContains(pattern)
    {
        await expect(this.page).not.toHaveURL(pattern)
    }
     
    /**
     * @param {import ("@playwright/test").Locator} locator
     * @param {number} timeOut 
     */

    async waitForVisible(locator,timeOut)
    {
     await locator.waitFor({state:'visible',timeout:25000})
    } 

    async waitForTimeOut(timeOut)
    {
        await this.page.waitForTimeout(timeOut)
    }
    
    async acceptDialog(text)
    {
        this.page.once('dialog',async dialog=>
            {
                await dialog.accept(text)
            })
    }

    async switchToMainPage()
    {
        const pages=this.page.content().pages()
        await this.page.close()
        await pages[0].bringToFront()

    }
}