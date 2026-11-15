import { expect } from "allure-playwright";
import { BasePage } from "./BasePage";


     export class CoursePage extends BasePage
 {
    
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */


    constructor(page)
    {
        super(page)
        this.page=page
        this.addNewCourseButton=this.page.getByText("Add New Course ")
        this.chooseFileButton=this.page.locator("#thumbnail")
        this.courseNameTextField=this.page.locator("#name")
        this.descriptionTextBox=this.page.locator("#description")
        this.instructorNameField=this.page.locator("#instructorNameId")
        this.priceField=this.page.locator("#price")
        this.startDateInput = this.page.locator("input[name='startDate']")
        this.endDateInput = this.page.locator("input[name='endDate']")
        this.selectCategoryDropdown=this.page.getByText("Select Category",{exact:true})
        this.categorySelectOption=this.page.getByText("Select Category")
        this.saveButton=this.page.getByText("Save",{exact:true})
        this.datepickerDays   = this.page.locator("//div[contains(@class,'datepicker__day')]")

       
    }   

      async clickOnAddnewCourseButton()
      {
        await this.addNewCourseButton.click()
      }
       
      async selectFile(filePath)
      {
        await this.chooseFileButton.setInputFiles(filePath)
      }
      
      async enterCourseName(courseName)
      {
        await this.courseNameTextField.pressSequentially(courseName)
      }

      async enterDescription(description)
      {
        await this.descriptionTextBox.pressSequentially(description)
      }
       
      async enterInstructor(instructor)
      {
        await this.instructorNameField.pressSequentially(instructor)
      }
       
      async enterPrice(price)
      {
        await this.priceField.fill(price)
      }

    async selectDateWith31(dateInput)
    {
        await dateInput.click()
        const days = await this.datepickerDays.all()
        for(const day of days)
        {
            const text = await day.textContent()
            if(text.trim() === "20")
            {
                await day.click()
                break
            }
        }
    } 
      
    async selectStartDate()
    {
        await this.selectDateWith31(this.startDateInput)
    }

    async selectEndDate()
    {
        await this.selectDateWith31(this.endDateInput)
    }
     
    async selectCategory(category)
    {   
        await this.categorySelectOption.click()
        await this.page.locator(`//button[text()='${category}']`).nth(0).click()
    }

    async clickSave()
    {
        await this.saveButton.click()
    }

   async selectCourseNameCheckbox(courseName)
   {
    await this.page.locator(`//td[text()='${courseName}']/preceding::td/div/input`).click()
   }

   async deleteButton(courseName)
   {
    await this.page.locator(`//td[text()='${courseName}']/following-sibling::td[10]/button`).click()
   }
    
    
   async validateCourseName(courseName)
   {
    const cName = this.page.locator(`//td[text()='${courseName}']`)
    await expect(cName).not.toBeVisible()
    return true
   }



 }