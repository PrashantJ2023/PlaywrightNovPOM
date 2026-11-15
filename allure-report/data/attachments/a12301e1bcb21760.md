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
- generic [ref=f24e3]:
  - navigation [ref=f24e4]:
    - generic [ref=f24e5]:
      - generic [ref=f24e6] [cursor=pointer]:
        - img "logo" [ref=f24e7]
        - heading "Learn Automation Courses" [level=1] [ref=f24e8]
      - generic [ref=f24e9]:
        - button "Cart" [ref=f24e10] [cursor=pointer]
        - generic [ref=f24e11]:
          - text: Manage
          - generic [ref=f24e12]:
            - link [ref=f24e13] [cursor=pointer]:
              - /url: /course/manage
              - img "manage course" [ref=f24e14]
              - text: Manage Courses
            - link [active] [ref=f24e15] [cursor=pointer]:
              - /url: /category/manage
              - img "manage category" [ref=f24e16]
              - text: Manage Categories
        - img "menu" [ref=f24e17] [cursor=pointer]
        - generic [ref=f24e18]:
          - generic [ref=f24e19]:
            - text: Learn Automation Courses
            - img "delete" [ref=f24e20] [cursor=pointer]
          - generic [ref=f24e21]:
            - link "Home" [ref=f24e22] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f24e24] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f24e26] [cursor=pointer]
  - generic [ref=f24e29]:
    - generic [ref=f24e33]:
      - generic [ref=f24e34]:
        - heading "Selenium For Web Automation" [level=2] [ref=f24e35]
        - paragraph [ref=f24e36]: Selenium For Web Automation...
      - generic [ref=f24e37]:
        - img "instructor" [ref=f24e38]
        - text: Mukesh Otwani
      - generic [ref=f24e39]:
        - img "clock" [ref=f24e40]
        - generic [ref=f24e41]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=f24e42]:
        - img "clock" [ref=f24e43]
        - generic [ref=f24e44]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=f24e45]:
        - text: "Price:"
        - generic [ref=f24e46]: ₹1500
      - button [ref=f24e47] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f24e48]
    - generic [ref=f24e52]:
      - generic [ref=f24e53]:
        - heading "dummy course" [level=2] [ref=f24e54]
        - paragraph [ref=f24e55]: dummy Description...
      - generic [ref=f24e56]:
        - img "instructor" [ref=f24e57]
        - text: Mukesh Otwani
      - generic [ref=f24e58]:
        - img "clock" [ref=f24e59]
        - generic [ref=f24e60]: "Start:"
        - text: Thu Nov 12 2026
      - generic [ref=f24e61]:
        - img "clock" [ref=f24e62]
        - generic [ref=f24e63]: "Finish:"
        - text: Thu Dec 10 2026
      - generic [ref=f24e64]:
        - text: "Price:"
        - generic [ref=f24e65]: ₹500
      - button [ref=f24e66] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f24e67]
  - generic [ref=f24e69]:
    - generic [ref=f24e70]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f24e71]
      - heading "©2023 All rights reserved" [level=2] [ref=f24e72]
    - generic [ref=f24e73] [cursor=pointer]:
      - link [ref=f24e74]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f24e78]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f24e81]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f24e84]:
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