import { BasePage } from "./BasePage";
import { CategoryPage } from "./CategoryPage";
import { categoryPage } from "../Fixtures/fixtures";

 
export class DashBoardPage extends BasePage
 {
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
   
    constructor(page)
    {
        super(page)
        this.page=page
        this.Managebutton=this.page.getByText("Manage")
        this.ManageCourseoption=this.page.getByText("Manage Courses")
        this.manageCategoryoption=this.page.getByText("Manage Categories")
        
    }
       async clickManageButton()
       {
        await this.Managebutton.nth(0).click()
       }

       async selectManageCourseOption()
       {
        await this.ManageCourseoption.nth(0).click()
       } 

       async navigateToAddNewCourse()
       {
        await this.clickManageButton()
        await this.selectManageCourseOption()
       }
        
       async navigateManageCategory()
       {
         
        await this.clickManageButton()
        const [newTab]=await Promise.all([
               
            this.page.waitForEvent('popup'),
            this.manageCategoryoption.click()

        ])
        await newTab.waitForLoadState('networkidle')
        console.log("new Tab title:", await newTab.title());
        console.log("new Tab URL:", newTab.url());
        return new CategoryPage(newTab)
       }
     
       async addToCart(courseName)
    {
        await this.page.locator(`//h2[text()='${courseName}']/../../button[text()='Add to Cart']`).click()
    }  

    async navigateCartPage()
    {
        await this.cartbutton.click()
    }

 }