# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cartPage.spec.js >> Managing Cart functionality >> Adding course into cart
- Location: tests\cartPage.spec.js:10:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Enroll Now') resolved to 3 elements:
    1) <button>Enroll Now</button> aka locator('#root').getByRole('button', { name: 'Enroll Now' })
    2) <div class="modal-title h4">Enroll Now</div> aka getByText('Enroll Now').nth(1)
    3) <button class="action-btn">Enroll Now</button> aka getByRole('dialog').getByRole('button', { name: 'Enroll Now' })

Call log:
  - waiting for getByText('Enroll Now')

```

# Page snapshot

```yaml
- generic [ref=f6e1]:
  - generic [ref=f6e3]:
    - navigation [ref=f6e4]:
      - generic [ref=f6e5]:
        - generic [ref=f6e6] [cursor=pointer]:
          - img "logo" [ref=f6e7]
          - heading "Learn Automation Courses" [level=1] [ref=f6e8]
        - generic [ref=f6e9]:
          - button "Cart 1" [ref=f6e10] [cursor=pointer]:
            - text: Cart
            - generic [ref=f6e11]: "1"
          - generic [ref=f6e12]: Manage
          - img "menu" [ref=f6e13] [cursor=pointer]
          - generic [ref=f6e14]:
            - generic [ref=f6e15]:
              - text: Learn Automation Courses
              - img "delete" [ref=f6e16] [cursor=pointer]
            - generic [ref=f6e17]:
              - link "Home" [ref=f6e18] [cursor=pointer]:
                - /url: /
              - link "Practise" [ref=f6e20] [cursor=pointer]:
                - /url: /practise
              - button "Sign out" [ref=f6e22] [cursor=pointer]
    - generic [ref=f6e24]:
      - generic [ref=f6e25]:
        - 'heading "Total Price: ₹1500" [level=3] [ref=f6e26]':
          - text: "Total Price:"
          - generic [ref=f6e27]: ₹1500
        - button "Enroll Now" [ref=f6e28] [cursor=pointer]
      - generic [ref=f6e33]:
        - generic [ref=f6e34]:
          - heading "Selenium For Web Automation" [level=2] [ref=f6e35]
          - paragraph [ref=f6e36]: Selenium For Web Automation...
        - generic [ref=f6e37]:
          - img "instructor" [ref=f6e38]
          - text: Mukesh Otwani
        - generic [ref=f6e39]:
          - img "clock" [ref=f6e40]
          - generic [ref=f6e41]: "Start:"
          - text: Mon Feb 17 2025
        - generic [ref=f6e42]:
          - img "clock" [ref=f6e43]
          - generic [ref=f6e44]: "Finish:"
          - text: Mon Mar 17 2025
        - generic [ref=f6e45]:
          - text: "Price:"
          - generic [ref=f6e46]: ₹1500
        - button [ref=f6e47] [cursor=pointer]:
          - text: Remove from Cart
          - img "right arrow" [ref=f6e48]
    - generic [ref=f6e50]:
      - generic [ref=f6e51]:
        - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f6e52]
        - heading "©2023 All rights reserved" [level=2] [ref=f6e53]
      - generic [ref=f6e54] [cursor=pointer]:
        - link [ref=f6e55]:
          - /url: https://youtube.com/MukeshOtwani
        - link [ref=f6e59]:
          - /url: https://twitter.com/MukeshOtwani
        - link [ref=f6e62]:
          - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - link [ref=f6e65]:
          - /url: https://www.facebook.com/groups/256655817858291
  - dialog [ref=f6e69]:
    - generic [ref=f6e70]:
      - generic [ref=f6e71]:
        - generic [ref=f6e72]: Enroll Now
        - button "Close" [ref=f6e73] [cursor=pointer]
      - generic [ref=f6e74]:
        - heading "Address" [level=3] [ref=f6e75]
        - textbox [ref=f6e76]: Bengaluru
        - heading "Phone Number" [level=3] [ref=f6e77]
        - textbox [active] [ref=f6e78]: "23131313"
        - 'heading "Total Price: ₹1500" [level=3] [ref=f6e79]':
          - text: "Total Price:"
          - generic [ref=f6e80]: ₹1500
      - generic [ref=f6e81]:
        - button "Cancel" [ref=f6e82] [cursor=pointer]
        - button "Enroll Now" [ref=f6e83] [cursor=pointer]
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
  36 |         await this.enrollNowButton.click()
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
> 51 |         await this.enrollNowEnrollNum.click()
     |                                       ^ Error: locator.click: Error: strict mode violation: getByText('Enroll Now') resolved to 3 elements:
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