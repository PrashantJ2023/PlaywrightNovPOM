# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: categoryTest.spec.js >> Manage category functionality >> Add Category
- Location: tests\categoryTest.spec.js:9:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'Add New Category \']')
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f22e3]:
  - navigation [ref=f22e4]:
    - generic [ref=f22e5]:
      - generic [ref=f22e6] [cursor=pointer]:
        - img "logo" [ref=f22e7]
        - heading "Learn Automation Courses" [level=1] [ref=f22e8]
      - generic [ref=f22e9]:
        - button "Cart" [ref=f22e10] [cursor=pointer]
        - generic [ref=f22e11]:
          - text: Manage
          - generic [ref=f22e12]:
            - link [ref=f22e13] [cursor=pointer]:
              - /url: /course/manage
              - img "manage course" [ref=f22e14]
              - text: Manage Courses
            - link [active] [ref=f22e15] [cursor=pointer]:
              - /url: /category/manage
              - img "manage category" [ref=f22e16]
              - text: Manage Categories
        - img "menu" [ref=f22e17] [cursor=pointer]
        - generic [ref=f22e18]:
          - generic [ref=f22e19]:
            - text: Learn Automation Courses
            - img "delete" [ref=f22e20] [cursor=pointer]
          - generic [ref=f22e21]:
            - link "Home" [ref=f22e22] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f22e24] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f22e26] [cursor=pointer]
  - generic [ref=f22e29]:
    - generic [ref=f22e33]:
      - generic [ref=f22e34]:
        - heading "Selenium For Web Automation" [level=2] [ref=f22e35]
        - paragraph [ref=f22e36]: Selenium For Web Automation...
      - generic [ref=f22e37]:
        - img "instructor" [ref=f22e38]
        - text: Mukesh Otwani
      - generic [ref=f22e39]:
        - img "clock" [ref=f22e40]
        - generic [ref=f22e41]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=f22e42]:
        - img "clock" [ref=f22e43]
        - generic [ref=f22e44]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=f22e45]:
        - text: "Price:"
        - generic [ref=f22e46]: ₹1500
      - button [ref=f22e47] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f22e48]
    - generic [ref=f22e52]:
      - generic [ref=f22e53]:
        - heading "dummy course" [level=2] [ref=f22e54]
        - paragraph [ref=f22e55]: dummy Description...
      - generic [ref=f22e56]:
        - img "instructor" [ref=f22e57]
        - text: Mukesh Otwani
      - generic [ref=f22e58]:
        - img "clock" [ref=f22e59]
        - generic [ref=f22e60]: "Start:"
        - text: Thu Nov 12 2026
      - generic [ref=f22e61]:
        - img "clock" [ref=f22e62]
        - generic [ref=f22e63]: "Finish:"
        - text: Thu Dec 10 2026
      - generic [ref=f22e64]:
        - text: "Price:"
        - generic [ref=f22e65]: ₹500
      - button [ref=f22e66] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f22e67]
  - generic [ref=f22e69]:
    - generic [ref=f22e70]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f22e71]
      - heading "©2023 All rights reserved" [level=2] [ref=f22e72]
    - generic [ref=f22e73] [cursor=pointer]:
      - link [ref=f22e74]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f22e78]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f22e81]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f22e84]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { BasePage } from "./BasePage";
  2  | 
  3  | export class CategoryPage extends BasePage
  4  | {   
  5  | 
  6  |      /**
  7  |       * 
  8  |       * @param {import('@playwright/test').Page} page 
  9  |       */
  10 | 
  11 |    constructor(page)
  12 |    {
  13 |     super(page)
  14 |     this.page=page  
  15 |     this.addNewCategoryButton=this.page.locator("//button[text()='Add New Category ']")
  16 |    }  
  17 | 
  18 |    async clickOnAddNewCategoryButton(category)
  19 |    {
  20 |     await this.acceptDialog(category)
> 21 |     await this.addNewCategoryButton.click()
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |    }
  23 |      
  24 | 
  25 | 
  26 | }
```