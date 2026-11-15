# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cartPage.spec.js >> Managing Cart functionality >> Adding course into cart
- Location: tests\cartPage.spec.js:10:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'Enroll Now\']')
  - operation was aborted: Test timeout of 30000ms exceeded.

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
        - button "Cart 1" [ref=f2e10] [cursor=pointer]:
          - text: Cart
          - generic [ref=f2e11]: "1"
        - generic [ref=f2e12]: Manage
        - img "menu" [ref=f2e13] [cursor=pointer]
        - generic [ref=f2e14]:
          - generic [ref=f2e15]:
            - text: Learn Automation Courses
            - img "delete" [ref=f2e16] [cursor=pointer]
          - generic [ref=f2e17]:
            - link "Home" [ref=f2e18] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f2e20] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=f2e22] [cursor=pointer]
  - generic [ref=f2e25]:
    - generic [ref=f2e29]:
      - generic [ref=f2e30]:
        - heading "Selenium For Web Automation" [level=2] [ref=f2e31]
        - paragraph [ref=f2e32]: Selenium For Web Automation...
      - generic [ref=f2e33]:
        - img "instructor" [ref=f2e34]
        - text: Mukesh Otwani
      - generic [ref=f2e35]:
        - img "clock" [ref=f2e36]
        - generic [ref=f2e37]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=f2e38]:
        - img "clock" [ref=f2e39]
        - generic [ref=f2e40]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=f2e41]:
        - text: "Price:"
        - generic [ref=f2e42]: ₹1500
      - button [active] [ref=f2e43] [cursor=pointer]:
        - text: Remove from Cart
        - img "right arrow" [ref=f2e44]
    - generic [ref=f2e48]:
      - generic [ref=f2e49]:
        - heading "dummy course" [level=2] [ref=f2e50]
        - paragraph [ref=f2e51]: dummy Description...
      - generic [ref=f2e52]:
        - img "instructor" [ref=f2e53]
        - text: Mukesh Otwani
      - generic [ref=f2e54]:
        - img "clock" [ref=f2e55]
        - generic [ref=f2e56]: "Start:"
        - text: Thu Nov 12 2026
      - generic [ref=f2e57]:
        - img "clock" [ref=f2e58]
        - generic [ref=f2e59]: "Finish:"
        - text: Thu Dec 10 2026
      - generic [ref=f2e60]:
        - text: "Price:"
        - generic [ref=f2e61]: ₹500
      - button [ref=f2e62] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=f2e63]
  - generic [ref=f2e65]:
    - generic [ref=f2e66]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f2e67]
      - heading "©2023 All rights reserved" [level=2] [ref=f2e68]
    - generic [ref=f2e69] [cursor=pointer]:
      - link [ref=f2e70]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f2e74]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f2e77]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f2e80]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { BasePage } from "./BasePage";
  2  | 
  3  | export class CartPage extends BasePage
  4  | {
  5  |     /**
  6  |      * 
  7  |      * @param {import('@playwright/test').Page} page 
  8  |      */
  9  | 
  10 |     constructor(page)
  11 |     {
  12 |         super(page)
  13 |         this.page=page
  14 |         this.cartbutton=this.page.locator("//button[text()='Cart']")
  15 |         this.enrollNowButton=this.page.locator("//button[text()='Enroll Now']")
  16 |         this.enrollNowAddress=this.page.locator("#address")
  17 |         this.enrollNowPhoneNum=this.page.locator("#phone")
  18 |         this.enrollNowEnrollNum=this.page.getByText("Enroll Now")
  19 |         this.enrollOrderID=this.page.locator("//h4[@class='uniqueId']/b")
  20 | 
  21 |     }
  22 |       
  23 |     
  24 |     async addToCart(courseName)
  25 |     {
  26 |         await this.page.locator(`//h2[text()='${courseName}']/../../button[text()='Add to Cart']`).click()
  27 |     }  
  28 | 
  29 |     async navigateCartPage()
  30 |     {
  31 |         await this.cartbutton.click()
  32 |     }
  33 |      
  34 |     async cartEnrollButton()
  35 |     {
> 36 |         await this.enrollNowButton.click()
     |                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  37 |     }
  38 | 
  39 |     async enrollNowEnterAddress(address)
  40 |     {
  41 |         await this.enrollNowAddress.pressSequentially(address)
  42 |     }
  43 | 
  44 |     async enrollNowEnterPhone(phone)
  45 |     {
  46 |         await this.enrollNowPhoneNum.pressSequentially(phone)
  47 |     } 
  48 | 
  49 |     async enrollClickEnrollnowButton()
  50 |     {
  51 |         await this.enrollNowEnrollNum.click()
  52 |     }
  53 |     
  54 |     async captureOrderID()
  55 |     {
  56 |       const orderID= await this.enrollOrderID.innerText()
  57 |       console.log(orderID);
  58 |       return orderID
  59 |     }
  60 | 
  61 | }
```