# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addCourseTest.spec.js >> Add course
- Location: tests\addCourseTest.spec.js:7:1

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//button[@class=\'menu-item\']') resolved to 5 elements:
    1) <button class="menu-item">RAG</button> aka getByRole('button', { name: 'RAG' })
    2) <button class="menu-item">rest assured</button> aka getByRole('button', { name: 'rest assured' })
    3) <button class="menu-item">appium</button> aka getByRole('button', { name: 'appium' })
    4) <button class="menu-item">JavaScript</button> aka getByRole('button', { name: 'JavaScript' })
    5) <button class="menu-item">PlaywrightTests</button> aka getByRole('button', { name: 'PlaywrightTests' })

Call log:
  - waiting for locator('//button[@class=\'menu-item\']')

```

# Page snapshot

```yaml
- generic [ref=f24e1]:
  - generic [ref=f24e3]:
    - navigation [ref=f24e4]:
      - generic [ref=f24e5]:
        - generic [ref=f24e6] [cursor=pointer]:
          - img "logo" [ref=f24e7]
          - heading "Learn Automation Courses" [level=1] [ref=f24e8]
        - generic [ref=f24e9]:
          - button "Cart" [ref=f24e10] [cursor=pointer]
          - generic [ref=f24e11]: Manage
          - img "menu" [ref=f24e12] [cursor=pointer]
          - generic [ref=f24e13]:
            - generic [ref=f24e14]:
              - text: Learn Automation Courses
              - img "delete" [ref=f24e15] [cursor=pointer]
            - generic [ref=f24e16]:
              - link "Home" [ref=f24e17] [cursor=pointer]:
                - /url: /
              - link "Practise" [ref=f24e19] [cursor=pointer]:
                - /url: /practise
              - button "Sign out" [ref=f24e21] [cursor=pointer]
    - generic [ref=f24e23]:
      - generic [ref=f24e24]:
        - heading [level=1] [ref=f24e25]:
          - img "manage course" [ref=f24e26]
          - text: Manage Courses
        - generic [ref=f24e27]:
          - textbox "Search by course name, instructor name or category" [ref=f24e28]
          - combobox [ref=f24e29]:
            - option "Name"
            - option "Instructor Name"
            - option "Price"
        - generic [ref=f24e30]:
          - button [ref=f24e31] [cursor=pointer]:
            - text: Delete Courses
            - img "delete" [ref=f24e32]
          - button [ref=f24e33] [cursor=pointer]:
            - text: Activate Courses
            - img "activate" [ref=f24e34]
          - button [ref=f24e35] [cursor=pointer]:
            - text: Deactivate Courses
            - img "deactivate" [ref=f24e36]
          - button [ref=f24e37] [cursor=pointer]:
            - text: Add New Course
            - img "add" [ref=f24e38]
      - table [ref=f24e40]:
        - rowgroup [ref=f24e41]:
          - row [ref=f24e42]:
            - columnheader [ref=f24e43]
            - columnheader "Course Name" [ref=f24e44]
            - columnheader "Course Price" [ref=f24e45]
            - columnheader "Instructor Name" [ref=f24e46]
            - columnheader "Start Date" [ref=f24e47]
            - columnheader "End Date" [ref=f24e48]
            - columnheader "Active" [ref=f24e49]
            - columnheader "Category" [ref=f24e50]
            - columnheader "Enroll Count" [ref=f24e51]
            - columnheader "Thumbnail" [ref=f24e52]
            - columnheader "Download" [ref=f24e53]
            - columnheader "Delete" [ref=f24e54]
        - rowgroup [ref=f24e55]:
          - row [ref=f24e56]:
            - cell [ref=f24e57]:
              - checkbox [ref=f24e59]
            - cell "Test" [ref=f24e60]
            - cell "₹3999" [ref=f24e61]
            - cell "Mukesh" [ref=f24e63]
            - cell "11/14/2026" [ref=f24e64]
            - cell "12/14/2026" [ref=f24e65]
            - cell [ref=f24e66]:
              - img "activate" [ref=f24e67]
            - cell "JavaScript" [ref=f24e68]
            - cell "0" [ref=f24e69]
            - cell [ref=f24e70]:
              - img "thumbnail" [ref=f24e71]
            - cell [ref=f24e72]:
              - link [ref=f24e73] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/6af86e1f5c0b8e1aae78d86d
                - img "download" [ref=f24e74]
            - cell [ref=f24e75]:
              - button [ref=f24e76] [cursor=pointer]:
                - text: Delete
                - img "delete" [ref=f24e77]
          - row [ref=f24e78]:
            - cell [ref=f24e79]:
              - checkbox [ref=f24e81]
            - cell "demo course" [ref=f24e82]
            - cell "₹500" [ref=f24e83]
            - cell "Mukesh" [ref=f24e85]
            - cell "11/13/2026" [ref=f24e86]
            - cell "12/10/2026" [ref=f24e87]
            - cell [ref=f24e88]:
              - img "activate" [ref=f24e89]
            - cell "JavaScript" [ref=f24e90]
            - cell "0" [ref=f24e91]
            - cell [ref=f24e92]:
              - img "thumbnail" [ref=f24e93]
            - cell [ref=f24e94]:
              - link [ref=f24e95] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/6af706185c0b8e1aae78d267
                - img "download" [ref=f24e96]
            - cell [ref=f24e97]:
              - button [ref=f24e98] [cursor=pointer]:
                - text: Delete
                - img "delete" [ref=f24e99]
          - row [ref=f24e100]:
            - cell [ref=f24e101]:
              - checkbox [ref=f24e103]
            - cell "dummy course" [ref=f24e104]
            - cell "₹500" [ref=f24e105]
            - cell "Mukesh Otwani" [ref=f24e107]
            - cell "11/12/2026" [ref=f24e108]
            - cell "12/10/2026" [ref=f24e109]
            - cell [ref=f24e110]:
              - img "activate" [ref=f24e111]
            - cell "JavaScript" [ref=f24e112]
            - cell "0" [ref=f24e113]
            - cell [ref=f24e114]:
              - img "thumbnail" [ref=f24e115]
            - cell [ref=f24e116]:
              - link [ref=f24e117] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/6af5c28d5c0b8e1aae78cd99
                - img "download" [ref=f24e118]
            - cell [ref=f24e119]:
              - button [ref=f24e120] [cursor=pointer]:
                - text: Delete
                - img "delete" [ref=f24e121]
          - row [ref=f24e122]:
            - cell [ref=f24e123]
            - cell "Selenium For Web Automation" [ref=f24e124]
            - cell "₹1500" [ref=f24e125]
            - cell "Mukesh Otwani" [ref=f24e127]
            - cell "2/17/2025" [ref=f24e128]
            - cell "3/17/2025" [ref=f24e129]
            - cell [ref=f24e130]:
              - img "activate" [ref=f24e131]
            - cell "None" [ref=f24e132]
            - cell "0" [ref=f24e133]
            - cell [ref=f24e134]:
              - img "thumbnail" [ref=f24e135]
            - cell [ref=f24e136]:
              - link [ref=f24e137] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/67b2abd3289e9e7395cbd866
                - img "download" [ref=f24e138]
            - cell [ref=f24e139]
      - button "Load More" [ref=f24e140] [cursor=pointer]
    - generic [ref=f24e142]:
      - generic [ref=f24e143]:
        - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f24e144]
        - heading "©2023 All rights reserved" [level=2] [ref=f24e145]
      - generic [ref=f24e146] [cursor=pointer]:
        - link [ref=f24e147]:
          - /url: https://youtube.com/MukeshOtwani
        - link [ref=f24e151]:
          - /url: https://twitter.com/MukeshOtwani
        - link [ref=f24e154]:
          - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - link [ref=f24e157]:
          - /url: https://www.facebook.com/groups/256655817858291
  - dialog [ref=f24e161]:
    - generic [ref=f24e162]:
      - generic [ref=f24e163]:
        - generic [ref=f24e164]: Add New Course
        - button "Close" [ref=f24e165] [cursor=pointer]
      - generic [ref=f24e166]:
        - heading "Thumbnail" [level=3] [ref=f24e167]
        - button "Choose File" [ref=f24e168]
        - heading "Course Name" [level=3] [ref=f24e169]
        - textbox [ref=f24e170]: Playwright with Javascript
        - heading "Description" [level=3] [ref=f24e171]
        - textbox [ref=f24e172]: Playwright with Javascript, MCP Server
        - generic [ref=f24e173]:
          - generic [ref=f24e174]:
            - heading "Instructor" [level=3] [ref=f24e175]
            - textbox [ref=f24e176]: Mukesh
          - generic [ref=f24e177]:
            - heading "Price" [level=3] [ref=f24e178]
            - textbox [ref=f24e179]: "2000"
        - generic [ref=f24e180]:
          - generic [ref=f24e181]:
            - heading "Starts From" [level=3] [ref=f24e182]
            - textbox [ref=f24e185]: 11/20/2026
          - generic [ref=f24e186]:
            - heading "Ends On" [level=3] [ref=f24e187]
            - textbox [ref=f24e190]: 12/20/2026
        - generic [ref=f24e192]:
          - heading "Permanent" [level=3] [ref=f24e193]
          - checkbox [ref=f24e194]
        - heading "Category" [level=3] [ref=f24e195]
        - button [active] [ref=f24e196] [cursor=pointer]:
          - generic [ref=f24e197]:
            - text: Select Category
            - img "select category" [ref=f24e198]
        - generic [ref=f24e199]:
          - button "RAG" [ref=f24e200] [cursor=pointer]
          - button "rest assured" [ref=f24e201] [cursor=pointer]
          - button "appium" [ref=f24e202] [cursor=pointer]
          - button "JavaScript" [ref=f24e203] [cursor=pointer]
          - button "PlaywrightTests" [ref=f24e204] [cursor=pointer]
      - generic [ref=f24e205]:
        - button "Cancel" [ref=f24e206] [cursor=pointer]
        - button "Save" [ref=f24e207] [cursor=pointer]
```

# Test source

```ts
  1   | import { BasePage } from "./BasePage";
  2   | 
  3   | 
  4   |      export class CoursePage extends BasePage
  5   |  {
  6   |     
  7   |     /**
  8   |      * 
  9   |      * @param {import('@playwright/test').Page} page 
  10  |      */
  11  | 
  12  | 
  13  |     constructor(page)
  14  |     {
  15  |         super(page)
  16  |         this.page=page
  17  |         this.addNewCourseButton=this.page.getByText("Add New Course ")
  18  |         this.chooseFileButton=this.page.locator("#thumbnail")
  19  |         this.courseNameTextField=this.page.locator("#name")
  20  |         this.descriptionTextBox=this.page.locator("#description")
  21  |         this.instructorNameField=this.page.locator("#instructorNameId")
  22  |         this.priceField=this.page.locator("#price")
  23  |         this.startDateInput = this.page.locator("input[name='startDate']")
  24  |         this.endDateInput = this.page.locator("input[name='endDate']")
  25  |         this.selectCategoryDropdown=this.page.getByText("Select Category",{exact:true})
  26  |         this.categorySelectOption=this.page.locator("//button[@class='menu-item']")
  27  |         this.saveButton=this.page.getByText("Save",{exact:true})
  28  |         this.datepickerDays   = this.page.locator("//div[contains(@class,'datepicker__day')]")
  29  |     }   
  30  | 
  31  |       async clickOnAddnewCourseButton()
  32  |       {
  33  |         await this.addNewCourseButton.click()
  34  |       }
  35  |        
  36  |       async selectFile(filePath)
  37  |       {
  38  |         await this.chooseFileButton.setInputFiles(filePath)
  39  |       }
  40  |       
  41  |       async enterCourseName(courseName)
  42  |       {
  43  |         await this.courseNameTextField.pressSequentially(courseName)
  44  |       }
  45  | 
  46  |       async enterDescription(description)
  47  |       {
  48  |         await this.descriptionTextBox.pressSequentially(description)
  49  |       }
  50  |        
  51  |       async enterInstructor(instructor)
  52  |       {
  53  |         await this.instructorNameField.pressSequentially(instructor)
  54  |       }
  55  |        
  56  |       async enterPrice(price)
  57  |       {
  58  |         await this.priceField.fill(price)
  59  |       }
  60  | 
  61  |     async selectDateWith31(dateInput)
  62  |     {
  63  |         await dateInput.click()
  64  |         const days = await this.datepickerDays.all()
  65  |         for(const day of days)
  66  |         {
  67  |             const text = await day.textContent()
  68  |             if(text.trim() === "20")
  69  |             {
  70  |                 await day.click()
  71  |                 break
  72  |             }
  73  |         }
  74  |     } 
  75  |       
  76  |     async selectStartDate()
  77  |     {
  78  |         await this.selectDateWith31(this.startDateInput)
  79  |     }
  80  | 
  81  |     async selectEndDate()
  82  |     {
  83  |         await this.selectDateWith31(this.endDateInput)
  84  |     }
  85  |      
  86  |     async selectCategory(category)
  87  |     {   
> 88  |         await this.categorySelectOption.click()
      |                                         ^ Error: locator.click: Error: strict mode violation: locator('//button[@class=\'menu-item\']') resolved to 5 elements:
  89  |         await this.page.getByText(category,{exact:true}).click()
  90  |     }
  91  | 
  92  |     async clickSave()
  93  |     {
  94  |         await this.saveButton.click()
  95  |     }
  96  | 
  97  | 
  98  |     
  99  | 
  100 | 
  101 | 
  102 | 
  103 |  }
```