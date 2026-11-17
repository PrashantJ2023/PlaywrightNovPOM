# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: categoryTest.spec.js >> Manage category functionality >> Add Category
- Location: tests\categoryTest.spec.js:9:3

# Error details

```
ReferenceError: CategoryPage is not defined
```

# Page snapshot

```yaml
- generic [ref=f12e3]:
  - navigation [ref=f12e4]:
    - generic [ref=f12e5]:
      - generic [ref=f12e6] [cursor=pointer]:
        - img "logo" [ref=f12e7]
        - heading "Learn Automation Courses" [level=1] [ref=f12e8]
      - generic [ref=f12e9]:
        - button "Cart" [ref=f12e10] [cursor=pointer]
        - generic [ref=f12e11]:
          - text: Manage
          - generic [ref=f12e12]:
            - link [ref=f12e13] [cursor=pointer]:
              - /url: /course/manage
              - img "manage course" [ref=f12e14]
              - text: Manage Courses
            - link [active] [ref=f12e15] [cursor=pointer]:
              - /url: /category/manage
              - img "manage category" [ref=f12e16]
              - text: Manage Categories
        - img "menu" [ref=f12e17] [cursor=pointer]
        - generic [ref=f12e18]:
          - generic [ref=f12e19]:
            - text: Learn Automation Courses
            - img "delete" [ref=f12e20] [cursor=pointer]
          - generic [ref=f12e21]:
            - link "Home" [ref=f12e22] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f12e24] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f12e26] [cursor=pointer]
  - generic [ref=f12e29]:
    - generic [ref=f12e33]:
      - generic [ref=f12e34]:
        - heading "Selenium For Web Automation" [level=2] [ref=f12e35]
        - paragraph [ref=f12e36]: Selenium For Web Automation...
      - generic [ref=f12e37]:
        - img "instructor" [ref=f12e38]
        - text: Mukesh Otwani
      - generic [ref=f12e39]:
        - img "clock" [ref=f12e40]
        - generic [ref=f12e41]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=f12e42]:
        - img "clock" [ref=f12e43]
        - generic [ref=f12e44]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=f12e45]:
        - text: "Price:"
        - generic [ref=f12e46]: ₹1500
      - button [ref=f12e47] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f12e48]
    - generic [ref=f12e52]:
      - generic [ref=f12e53]:
        - heading "dummy course" [level=2] [ref=f12e54]
        - paragraph [ref=f12e55]: dummy Description...
      - generic [ref=f12e56]:
        - img "instructor" [ref=f12e57]
        - text: Mukesh Otwani
      - generic [ref=f12e58]:
        - img "clock" [ref=f12e59]
        - generic [ref=f12e60]: "Start:"
        - text: Thu Nov 12 2026
      - generic [ref=f12e61]:
        - img "clock" [ref=f12e62]
        - generic [ref=f12e63]: "Finish:"
        - text: Thu Dec 10 2026
      - generic [ref=f12e64]:
        - text: "Price:"
        - generic [ref=f12e65]: ₹500
      - button [ref=f12e66] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f12e67]
  - generic [ref=f12e69]:
    - generic [ref=f12e70]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f12e71]
      - heading "©2023 All rights reserved" [level=2] [ref=f12e72]
    - generic [ref=f12e73] [cursor=pointer]:
      - link [ref=f12e74]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f12e78]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f12e81]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f12e84]:
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
  17 |         this.manageCategoryoption=this.page.getByText("Manage Categories")
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
  39 |         await this.clickManageButton()
  40 |         const [newTab]=await Promise.all([
  41 |                
  42 |             this.page.waitForEvent('popup'),
  43 |             this.manageCategoryoption.click()
  44 | 
  45 |         ])
  46 |         await newTab.waitForLoadState('networkidle')
  47 |         console.log("new Tab title:", await newTab.title());
  48 |         console.log("new Tab URL:", await newTab.url());
> 49 |         return new CategoryPage(newTab)
     |         ^ ReferenceError: CategoryPage is not defined
  50 |        }
  51 | 
  52 | 
  53 |  }
```