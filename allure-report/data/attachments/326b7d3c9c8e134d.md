# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addCourseTest.spec.js >> Add course
- Location: tests\addCourseTest.spec.js:10:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Manage').first()
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f40e3]:
  - navigation [ref=f40e4]:
    - generic [ref=f40e5]:
      - generic [ref=f40e6] [cursor=pointer]:
        - img "logo" [ref=f40e7]
        - heading "Learn Automation Courses" [level=1] [ref=f40e8]
      - generic [ref=f40e9]:
        - img "menu" [ref=f40e10] [cursor=pointer]
        - generic [ref=f40e11]:
          - generic [ref=f40e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f40e13] [cursor=pointer]
          - generic [ref=f40e14]:
            - link "Home" [ref=f40e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f40e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f40e20]:
    - img "Login" [ref=f40e22]
    - generic [ref=f40e23]:
      - generic [ref=f40e25]:
        - heading "Sign In" [level=2] [ref=f40e26]
        - textbox "Enter Email" [active] [ref=f40e27]: Admin
        - textbox "Enter Password" [ref=f40e28]: admin@123
        - button "Sign in" [ref=f40e29] [cursor=pointer]
        - link "New user? Signup" [ref=f40e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f40e31]:
        - heading "Connect with us" [level=2] [ref=f40e32]
        - generic [ref=f40e33] [cursor=pointer]:
          - link [ref=f40e34]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f40e38]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f40e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f40e44]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f40e47]:
            - /url: https://learn-automation/reddit
  - generic [ref=f40e62]:
    - generic [ref=f40e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f40e64]
      - heading "©2023 All rights reserved" [level=2] [ref=f40e65]
    - generic [ref=f40e66] [cursor=pointer]:
      - link [ref=f40e67]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f40e71]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f40e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f40e77]:
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
  17 |         
  18 |     }
  19 |        async clickManageButton()
  20 |        {
> 21 |         await this.Managebutton.nth(0).click()
     |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |        }
  23 | 
  24 |        async selectManageCourseOption()
  25 |        {
  26 |         await this.ManageCourseoption.nth(0).click()
  27 |        }
  28 | 
  29 | 
  30 | 
  31 |  }
```