# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: categoryTest.spec.js >> Manage category functionality >> Add Category
- Location: tests\categoryTest.spec.js:9:3

# Error details

```
TypeError: this.Managebutton is not a function
```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - navigation [ref=f6e4]:
    - generic [ref=f6e5]:
      - generic [ref=f6e6] [cursor=pointer]:
        - img "logo" [ref=f6e7]
        - heading "Learn Automation Courses" [level=1] [ref=f6e8]
      - generic [ref=f6e9]:
        - button "Cart" [ref=f6e10] [cursor=pointer]
        - generic [ref=f6e11]: Manage
        - img "menu" [ref=f6e12] [cursor=pointer]
        - generic [ref=f6e13]:
          - generic [ref=f6e14]:
            - text: Learn Automation Courses
            - img "delete" [ref=f6e15] [cursor=pointer]
          - generic [ref=f6e16]:
            - link "Home" [ref=f6e17] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f6e19] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f6e21] [cursor=pointer]
  - generic [ref=f6e27]:
    - generic [ref=f6e28]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f6e29]
      - heading "©2023 All rights reserved" [level=2] [ref=f6e30]
    - generic [ref=f6e31] [cursor=pointer]:
      - link [ref=f6e32]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f6e36]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f6e39]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f6e42]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { BasePage } from "./BasePage";
  2  | 
  3  |  
  4  | export class DashBoardPage extends BasePage
  5  |  {
  6  |     /**
  7  |      * 
  8  |      * @param {import('@playwright/test').Page} page 
  9  |      */
  10 |    
  11 |     constructor(page)
  12 |     {
  13 |         super(page)
  14 |         this.page=page
  15 |         this.Managebutton=this.page.getByText("Manage")
  16 |         this.ManageCourseoption=this.page.getByText("Manage Courses")
  17 |         this.manageCategoryoption=this.page.getByText("Manage Category")
  18 |         
  19 |     }
  20 |        async clickManageButton()
  21 |        {
  22 |         await this.Managebutton.nth(0).click()
  23 |        }
  24 | 
  25 |        async selectManageCourseOption()
  26 |        {
  27 |         await this.ManageCourseoption.nth(0).click()
  28 |        } 
  29 | 
  30 |        async navigateToAddNewCourse()
  31 |        {
  32 |         await this.clickManageButton()
  33 |         await this.selectManageCourseOption()
  34 |        }
  35 |         
  36 |        async navigateManageCategory()
  37 |        {
  38 |          
> 39 |         await this.Managebutton()
     |                    ^ TypeError: this.Managebutton is not a function
  40 |         const [newTab]=await Promise.all([
  41 |                
  42 |             this.page.waitForEvent('popup'),
  43 |             this.manageCategoryoption.click()
  44 | 
  45 |         ])
  46 |         await newTab.waitForLoadState('networkidle')
  47 |         console.log("new Tab title:", await newTab.title());
  48 |         console.log("new Tab URL:", await newTab.url());
  49 |         return new CategoryPage(newTab)
  50 |        }
  51 | 
  52 | 
  53 |  }
```