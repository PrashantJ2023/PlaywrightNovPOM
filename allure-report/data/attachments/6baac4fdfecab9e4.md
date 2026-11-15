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
- generic [ref=f32e3]:
  - navigation [ref=f32e4]:
    - generic [ref=f32e5]:
      - generic [ref=f32e6] [cursor=pointer]:
        - img "logo" [ref=f32e7]
        - heading "Learn Automation Courses" [level=1] [ref=f32e8]
      - generic [ref=f32e9]:
        - button "Cart" [ref=f32e10] [cursor=pointer]
        - generic [ref=f32e11]:
          - text: Manage
          - generic [ref=f32e12]:
            - link [ref=f32e13] [cursor=pointer]:
              - /url: /course/manage
              - img "manage course" [ref=f32e14]
              - text: Manage Courses
            - link [active] [ref=f32e15] [cursor=pointer]:
              - /url: /category/manage
              - img "manage category" [ref=f32e16]
              - text: Manage Categories
        - img "menu" [ref=f32e17] [cursor=pointer]
        - generic [ref=f32e18]:
          - generic [ref=f32e19]:
            - text: Learn Automation Courses
            - img "delete" [ref=f32e20] [cursor=pointer]
          - generic [ref=f32e21]:
            - link "Home" [ref=f32e22] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f32e24] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f32e26] [cursor=pointer]
  - generic [ref=f32e29]:
    - generic [ref=f32e33]:
      - generic [ref=f32e34]:
        - heading "Selenium For Web Automation" [level=2] [ref=f32e35]
        - paragraph [ref=f32e36]: Selenium For Web Automation...
      - generic [ref=f32e37]:
        - img "instructor" [ref=f32e38]
        - text: Mukesh Otwani
      - generic [ref=f32e39]:
        - img "clock" [ref=f32e40]
        - generic [ref=f32e41]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=f32e42]:
        - img "clock" [ref=f32e43]
        - generic [ref=f32e44]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=f32e45]:
        - text: "Price:"
        - generic [ref=f32e46]: ₹1500
      - button [ref=f32e47] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f32e48]
    - generic [ref=f32e52]:
      - generic [ref=f32e53]:
        - heading "dummy course" [level=2] [ref=f32e54]
        - paragraph [ref=f32e55]: dummy Description...
      - generic [ref=f32e56]:
        - img "instructor" [ref=f32e57]
        - text: Mukesh Otwani
      - generic [ref=f32e58]:
        - img "clock" [ref=f32e59]
        - generic [ref=f32e60]: "Start:"
        - text: Thu Nov 12 2026
      - generic [ref=f32e61]:
        - img "clock" [ref=f32e62]
        - generic [ref=f32e63]: "Finish:"
        - text: Thu Dec 10 2026
      - generic [ref=f32e64]:
        - text: "Price:"
        - generic [ref=f32e65]: ₹500
      - button [ref=f32e66] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f32e67]
  - generic [ref=f32e69]:
    - generic [ref=f32e70]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f32e71]
      - heading "©2023 All rights reserved" [level=2] [ref=f32e72]
    - generic [ref=f32e73] [cursor=pointer]:
      - link [ref=f32e74]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f32e78]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f32e81]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f32e84]:
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
  21 |     await this.page.waitForTimeout(1000)
> 22 |     await this.addNewCategoryButton.click()
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 |    }
  24 |      
  25 | 
  26 | 
  27 | }
```