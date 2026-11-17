# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addCourseTest.spec.js >> Add course
- Location: tests\addCourseTest.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('JavaScript', { exact: true }).first()
    - locator resolved to <span id="chip">JavaScript</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="combine-child">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="modal-body">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="modal-header">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="combine-child">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
  11 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="combine">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <textarea id="description" name="description">Playwright with Javascript, MCP Server</textarea> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <textarea id="description" name="description">Playwright with Javascript, MCP Server</textarea> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="modal-body">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="combine">…</div> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <textarea id="description" name="description">Playwright with Javascript, MCP Server</textarea> from <div role="dialog" tabindex="-1" aria-modal="true" class="fade add-course-modal modal show">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f28e1]:
  - generic [ref=f28e3]:
    - navigation [ref=f28e4]:
      - generic [ref=f28e5]:
        - generic [ref=f28e6] [cursor=pointer]:
          - img "logo" [ref=f28e7]
          - heading "Learn Automation Courses" [level=1] [ref=f28e8]
        - generic [ref=f28e9]:
          - button "Cart" [ref=f28e10] [cursor=pointer]
          - generic [ref=f28e11]: Manage
          - img "menu" [ref=f28e12] [cursor=pointer]
          - generic [ref=f28e13]:
            - generic [ref=f28e14]:
              - text: Learn Automation Courses
              - img "delete" [ref=f28e15] [cursor=pointer]
            - generic [ref=f28e16]:
              - link "Home" [ref=f28e17] [cursor=pointer]:
                - /url: /
              - link "Practise" [ref=f28e19] [cursor=pointer]:
                - /url: /practise
              - button "Sign out" [ref=f28e21] [cursor=pointer]
    - generic [ref=f28e23]:
      - generic [ref=f28e24]:
        - heading [level=1] [ref=f28e25]:
          - img "manage course" [ref=f28e26]
          - text: Manage Courses
        - generic [ref=f28e27]:
          - textbox "Search by course name, instructor name or category" [ref=f28e28]
          - combobox [ref=f28e29]:
            - option "Name"
            - option "Instructor Name"
            - option "Price"
        - generic [ref=f28e30]:
          - button [ref=f28e31] [cursor=pointer]:
            - text: Delete Courses
            - img "delete" [ref=f28e32]
          - button [ref=f28e33] [cursor=pointer]:
            - text: Activate Courses
            - img "activate" [ref=f28e34]
          - button [ref=f28e35] [cursor=pointer]:
            - text: Deactivate Courses
            - img "deactivate" [ref=f28e36]
          - button [ref=f28e37] [cursor=pointer]:
            - text: Add New Course
            - img "add" [ref=f28e38]
      - table [ref=f28e40]:
        - rowgroup [ref=f28e41]:
          - row [ref=f28e42]:
            - columnheader [ref=f28e43]
            - columnheader "Course Name" [ref=f28e44]
            - columnheader "Course Price" [ref=f28e45]
            - columnheader "Instructor Name" [ref=f28e46]
            - columnheader "Start Date" [ref=f28e47]
            - columnheader "End Date" [ref=f28e48]
            - columnheader "Active" [ref=f28e49]
            - columnheader "Category" [ref=f28e50]
            - columnheader "Enroll Count" [ref=f28e51]
            - columnheader "Thumbnail" [ref=f28e52]
            - columnheader "Download" [ref=f28e53]
            - columnheader "Delete" [ref=f28e54]
        - rowgroup [ref=f28e55]:
          - row [ref=f28e56]:
            - cell [ref=f28e57]:
              - checkbox [ref=f28e59]
            - cell "Test" [ref=f28e60]
            - cell "₹3999" [ref=f28e61]
            - cell "Mukesh" [ref=f28e63]
            - cell "11/14/2026" [ref=f28e64]
            - cell "12/14/2026" [ref=f28e65]
            - cell [ref=f28e66]:
              - img "activate" [ref=f28e67]
            - cell "JavaScript" [ref=f28e68]
            - cell "0" [ref=f28e69]
            - cell [ref=f28e70]:
              - img "thumbnail" [ref=f28e71]
            - cell [ref=f28e72]:
              - link [ref=f28e73] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/6af86e1f5c0b8e1aae78d86d
                - img "download" [ref=f28e74]
            - cell [ref=f28e75]:
              - button [ref=f28e76] [cursor=pointer]:
                - text: Delete
                - img "delete" [ref=f28e77]
          - row [ref=f28e78]:
            - cell [ref=f28e79]:
              - checkbox [ref=f28e81]
            - cell "demo course" [ref=f28e82]
            - cell "₹500" [ref=f28e83]
            - cell "Mukesh" [ref=f28e85]
            - cell "11/13/2026" [ref=f28e86]
            - cell "12/10/2026" [ref=f28e87]
            - cell [ref=f28e88]:
              - img "activate" [ref=f28e89]
            - cell "JavaScript" [ref=f28e90]
            - cell "0" [ref=f28e91]
            - cell [ref=f28e92]:
              - img "thumbnail" [ref=f28e93]
            - cell [ref=f28e94]:
              - link [ref=f28e95] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/6af706185c0b8e1aae78d267
                - img "download" [ref=f28e96]
            - cell [ref=f28e97]:
              - button [ref=f28e98] [cursor=pointer]:
                - text: Delete
                - img "delete" [ref=f28e99]
          - row [ref=f28e100]:
            - cell [ref=f28e101]:
              - checkbox [ref=f28e103]
            - cell "dummy course" [ref=f28e104]
            - cell "₹500" [ref=f28e105]
            - cell "Mukesh Otwani" [ref=f28e107]
            - cell "11/12/2026" [ref=f28e108]
            - cell "12/10/2026" [ref=f28e109]
            - cell [ref=f28e110]:
              - img "activate" [ref=f28e111]
            - cell "JavaScript" [ref=f28e112]
            - cell "0" [ref=f28e113]
            - cell [ref=f28e114]:
              - img "thumbnail" [ref=f28e115]
            - cell [ref=f28e116]:
              - link [ref=f28e117] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/6af5c28d5c0b8e1aae78cd99
                - img "download" [ref=f28e118]
            - cell [ref=f28e119]:
              - button [ref=f28e120] [cursor=pointer]:
                - text: Delete
                - img "delete" [ref=f28e121]
          - row [ref=f28e122]:
            - cell [ref=f28e123]
            - cell "Selenium For Web Automation" [ref=f28e124]
            - cell "₹1500" [ref=f28e125]
            - cell "Mukesh Otwani" [ref=f28e127]
            - cell "2/17/2025" [ref=f28e128]
            - cell "3/17/2025" [ref=f28e129]
            - cell [ref=f28e130]:
              - img "activate" [ref=f28e131]
            - cell "None" [ref=f28e132]
            - cell "0" [ref=f28e133]
            - cell [ref=f28e134]:
              - img "thumbnail" [ref=f28e135]
            - cell [ref=f28e136]:
              - link [ref=f28e137] [cursor=pointer]:
                - /url: https://learn-automation.onrender.com/api/course/thumbnail/67b2abd3289e9e7395cbd866
                - img "download" [ref=f28e138]
            - cell [ref=f28e139]
      - button "Load More" [ref=f28e140] [cursor=pointer]
    - generic [ref=f28e142]:
      - generic [ref=f28e143]:
        - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f28e144]
        - heading "©2023 All rights reserved" [level=2] [ref=f28e145]
      - generic [ref=f28e146] [cursor=pointer]:
        - link [ref=f28e147]:
          - /url: https://youtube.com/MukeshOtwani
        - link [ref=f28e151]:
          - /url: https://twitter.com/MukeshOtwani
        - link [ref=f28e154]:
          - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - link [ref=f28e157]:
          - /url: https://www.facebook.com/groups/256655817858291
  - dialog [ref=f28e161]:
    - generic [ref=f28e162]:
      - generic [ref=f28e163]:
        - generic [ref=f28e164]: Add New Course
        - button "Close" [ref=f28e165] [cursor=pointer]
      - generic [ref=f28e166]:
        - heading "Thumbnail" [level=3] [ref=f28e167]
        - button "Choose File" [ref=f28e168]
        - heading "Course Name" [level=3] [ref=f28e169]
        - textbox [ref=f28e170]: Playwright with Javascript
        - heading "Description" [level=3] [ref=f28e171]
        - textbox [ref=f28e172]: Playwright with Javascript, MCP Server
        - generic [ref=f28e173]:
          - generic [ref=f28e174]:
            - heading "Instructor" [level=3] [ref=f28e175]
            - textbox [ref=f28e176]: Mukesh
            - generic [ref=f28e177]:
              - paragraph [ref=f28e178] [cursor=pointer]: Mukesh
              - paragraph [ref=f28e179] [cursor=pointer]: Mukesh Otwani
          - generic [ref=f28e180]:
            - heading "Price" [level=3] [ref=f28e181]
            - textbox [ref=f28e182]: "2000"
        - generic [ref=f28e183]:
          - generic [ref=f28e184]:
            - heading "Starts From" [level=3] [ref=f28e185]
            - textbox [ref=f28e188]: 11/20/2026
          - generic [ref=f28e189]:
            - heading "Ends On" [level=3] [ref=f28e190]
            - textbox [ref=f28e193]: 12/20/2026
        - generic [ref=f28e195]:
          - heading "Permanent" [level=3] [ref=f28e196]
          - checkbox [ref=f28e197]
        - heading "Category" [level=3] [ref=f28e198]
        - button [active] [ref=f28e199] [cursor=pointer]:
          - generic [ref=f28e200]:
            - text: Select Category
            - img "select category" [ref=f28e201]
        - generic [ref=f28e202]:
          - button "RAG" [ref=f28e203] [cursor=pointer]
          - button "rest assured" [ref=f28e204] [cursor=pointer]
          - button "appium" [ref=f28e205] [cursor=pointer]
          - button "JavaScript" [ref=f28e206] [cursor=pointer]
          - button "PlaywrightTests" [ref=f28e207] [cursor=pointer]
      - generic [ref=f28e208]:
        - button "Cancel" [ref=f28e209] [cursor=pointer]
        - button "Save" [ref=f28e210] [cursor=pointer]
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
  26  |         this.categorySelectOption=this.page.getByText("Select Category")
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
  88  |         await this.categorySelectOption.click()
> 89  |         await this.page.getByText(category,{exact:true}).nth(0).click()
      |                                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
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