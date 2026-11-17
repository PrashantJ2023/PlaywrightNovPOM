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
- generic [ref=f30e3]:
  - navigation [ref=f30e4]:
    - generic [ref=f30e5]:
      - generic [ref=f30e6] [cursor=pointer]:
        - img "logo" [ref=f30e7]
        - heading "Learn Automation Courses" [level=1] [ref=f30e8]
      - generic [ref=f30e9]:
        - button "Cart" [ref=f30e10] [cursor=pointer]
        - generic [ref=f30e11]:
          - text: Manage
          - generic [ref=f30e12]:
            - link [ref=f30e13] [cursor=pointer]:
              - /url: /course/manage
              - img "manage course" [ref=f30e14]
              - text: Manage Courses
            - link [active] [ref=f30e15] [cursor=pointer]:
              - /url: /category/manage
              - img "manage category" [ref=f30e16]
              - text: Manage Categories
        - img "menu" [ref=f30e17] [cursor=pointer]
        - generic [ref=f30e18]:
          - generic [ref=f30e19]:
            - text: Learn Automation Courses
            - img "delete" [ref=f30e20] [cursor=pointer]
          - generic [ref=f30e21]:
            - link "Home" [ref=f30e22] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f30e24] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f30e26] [cursor=pointer]
  - generic [ref=f30e29]:
    - generic [ref=f30e33]:
      - generic [ref=f30e34]:
        - heading "Selenium For Web Automation" [level=2] [ref=f30e35]
        - paragraph [ref=f30e36]: Selenium For Web Automation...
      - generic [ref=f30e37]:
        - img "instructor" [ref=f30e38]
        - text: Mukesh Otwani
      - generic [ref=f30e39]:
        - img "clock" [ref=f30e40]
        - generic [ref=f30e41]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=f30e42]:
        - img "clock" [ref=f30e43]
        - generic [ref=f30e44]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=f30e45]:
        - text: "Price:"
        - generic [ref=f30e46]: ₹1500
      - button [ref=f30e47] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f30e48]
    - generic [ref=f30e52]:
      - generic [ref=f30e53]:
        - heading "dummy course" [level=2] [ref=f30e54]
        - paragraph [ref=f30e55]: dummy Description...
      - generic [ref=f30e56]:
        - img "instructor" [ref=f30e57]
        - text: Mukesh Otwani
      - generic [ref=f30e58]:
        - img "clock" [ref=f30e59]
        - generic [ref=f30e60]: "Start:"
        - text: Thu Nov 12 2026
      - generic [ref=f30e61]:
        - img "clock" [ref=f30e62]
        - generic [ref=f30e63]: "Finish:"
        - text: Thu Dec 10 2026
      - generic [ref=f30e64]:
        - text: "Price:"
        - generic [ref=f30e65]: ₹500
      - button [ref=f30e66] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f30e67]
  - generic [ref=f30e69]:
    - generic [ref=f30e70]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f30e71]
      - heading "©2023 All rights reserved" [level=2] [ref=f30e72]
    - generic [ref=f30e73] [cursor=pointer]:
      - link [ref=f30e74]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f30e78]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f30e81]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f30e84]:
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
  18 |    async clickOnAddNewCategoryButton(categoryName)
  19 |    {
  20 |     await this.acceptDialog(categoryName)
> 21 |     await this.addNewCategoryButton.click()
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |    }
  23 |      
  24 | 
  25 | 
  26 | }
```