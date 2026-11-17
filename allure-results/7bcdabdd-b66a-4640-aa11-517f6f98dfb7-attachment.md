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
- generic [ref=f20e3]:
  - navigation [ref=f20e4]:
    - generic [ref=f20e5]:
      - generic [ref=f20e6] [cursor=pointer]:
        - img "logo" [ref=f20e7]
        - heading "Learn Automation Courses" [level=1] [ref=f20e8]
      - generic [ref=f20e9]:
        - button "Cart" [ref=f20e10] [cursor=pointer]
        - generic [ref=f20e11]: Manage
        - img "menu" [ref=f20e12] [cursor=pointer]
        - generic [ref=f20e13]:
          - generic [ref=f20e14]:
            - text: Learn Automation Courses
            - img "delete" [ref=f20e15] [cursor=pointer]
          - generic [ref=f20e16]:
            - link "Home" [ref=f20e17] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f20e19] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f20e21] [cursor=pointer]
  - generic [ref=f20e24]:
    - generic [ref=f20e28]:
      - generic [ref=f20e29]:
        - heading "Selenium For Web Automation" [level=2] [ref=f20e30]
        - paragraph [ref=f20e31]: Selenium For Web Automation...
      - generic [ref=f20e32]:
        - img "instructor" [ref=f20e33]
        - text: Mukesh Otwani
      - generic [ref=f20e34]:
        - img "clock" [ref=f20e35]
        - generic [ref=f20e36]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=f20e37]:
        - img "clock" [ref=f20e38]
        - generic [ref=f20e39]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=f20e40]:
        - text: "Price:"
        - generic [ref=f20e41]: ₹1500
      - button [ref=f20e42] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f20e43]
    - generic [ref=f20e47]:
      - generic [ref=f20e48]:
        - heading "dummy course" [level=2] [ref=f20e49]
        - paragraph [ref=f20e50]: dummy Description...
      - generic [ref=f20e51]:
        - img "instructor" [ref=f20e52]
        - text: Mukesh Otwani
      - generic [ref=f20e53]:
        - img "clock" [ref=f20e54]
        - generic [ref=f20e55]: "Start:"
        - text: Thu Nov 12 2026
      - generic [ref=f20e56]:
        - img "clock" [ref=f20e57]
        - generic [ref=f20e58]: "Finish:"
        - text: Thu Dec 10 2026
      - generic [ref=f20e59]:
        - text: "Price:"
        - generic [ref=f20e60]: ₹500
      - button [ref=f20e61] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f20e62]
  - generic [ref=f20e64]:
    - generic [ref=f20e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f20e66]
      - heading "©2023 All rights reserved" [level=2] [ref=f20e67]
    - generic [ref=f20e68] [cursor=pointer]:
      - link [ref=f20e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f20e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f20e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f20e79]:
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