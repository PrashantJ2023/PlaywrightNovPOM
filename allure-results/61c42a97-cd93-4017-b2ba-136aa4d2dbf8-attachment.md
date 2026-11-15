# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: categoryTest.spec.js >> Manage category functionality >> Add Category
- Location: tests\categoryTest.spec.js:9:3

# Error details

```
TypeError: this.ManageCourseoption is not a function
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - navigation [ref=f2e4]:
    - generic [ref=f2e5]:
      - generic [ref=f2e6] [cursor=pointer]:
        - img "logo" [ref=f2e7]
        - heading "Learn Automation Courses" [level=1] [ref=f2e8]
      - generic [ref=f2e9]:
        - img "menu" [ref=f2e10] [cursor=pointer]
        - generic [ref=f2e11]:
          - generic [ref=f2e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f2e13] [cursor=pointer]
          - generic [ref=f2e14]:
            - link "Home" [ref=f2e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f2e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f2e20]:
    - img "Login" [ref=f2e22]
    - generic [ref=f2e23]:
      - generic [ref=f2e25]:
        - heading "Sign In" [level=2] [ref=f2e26]
        - textbox "Enter Email" [ref=f2e27]: admin@email.com
        - textbox "Enter Password" [ref=f2e28]: admin@123
        - button "Sign in" [active] [ref=f2e29] [cursor=pointer]
        - link "New user? Signup" [ref=f2e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f2e31]:
        - heading "Connect with us" [level=2] [ref=f2e32]
        - generic [ref=f2e33] [cursor=pointer]:
          - link [ref=f2e34]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f2e38]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f2e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f2e44]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f2e47]:
            - /url: https://learn-automation/reddit
  - generic [ref=f2e62]:
    - generic [ref=f2e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f2e64]
      - heading "©2023 All rights reserved" [level=2] [ref=f2e65]
    - generic [ref=f2e66] [cursor=pointer]:
      - link [ref=f2e67]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f2e71]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f2e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f2e77]:
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
> 39 |         await this.ManageCourseoption()
     |                    ^ TypeError: this.ManageCourseoption is not a function
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