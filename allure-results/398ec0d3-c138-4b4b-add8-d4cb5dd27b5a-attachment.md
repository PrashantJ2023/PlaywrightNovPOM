# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addCourseTest.spec.js >> Add course
- Location: tests\addCourseTest.spec.js:7:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://freelance-learn-automation.vercel.app/login
Call log:
  - navigating to "https://freelance-learn-automation.vercel.app/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=f10e3]:
  - generic [ref=f10e6]:
    - heading "This site can’t be reached" [level=1] [ref=f10e7]
    - paragraph [ref=f10e8]:
      - strong [ref=f10e9]: freelance-learn-automation.vercel.app
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=f10e10]:
      - paragraph
      - list [ref=f10e11]:
        - listitem [ref=f10e12]:
          - link "Try running Windows Network Diagnostics" [ref=f10e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=f10e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=f10e17] [cursor=pointer]
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test')
  2  | 
  3  | 
  4  | export class BasePage
  5  | {    
  6  |     /**
  7  |      * 
  8  |      * @param {import('@playwright/test').Page} page 
  9  |      */
  10 |   
  11 |     constructor(page)
  12 |     {
  13 |         this.page=page 
  14 |     }
  15 | 
  16 |     async navigatePage(URL)
  17 |     {
> 18 |        await this.page.goto(URL)
     |                        ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://freelance-learn-automation.vercel.app/login
  19 |     }
  20 | 
  21 |     async refreshPage()
  22 |     {
  23 |         this.page.reload()
  24 |     }
  25 | 
  26 |     async goForward()
  27 |     {
  28 |         this.page.goForward()
  29 |     }
  30 | 
  31 |     async goBack()
  32 |     {
  33 |         this.page.goBack()
  34 |     }
  35 |     
  36 |     async getPageURL()
  37 |     {
  38 |        return this.page.url()
  39 |     }
  40 | 
  41 |     async getCurrentPageTitle()
  42 |     {
  43 |       return  this.page.title()
  44 |         
  45 |     }
  46 | 
  47 |     /**
  48 |      * 
  49 |      * @param {String} pattern 
  50 |      */
  51 | 
  52 |     async assertUrlNotContains(pattern)
  53 |     {
  54 |         await expect(this.page).not.toHaveURL(pattern)
  55 |     }
  56 |      
  57 |     /**
  58 |      * @param {import ("@playwright/test").Locator} locator
  59 |      * @param {number} timeOut 
  60 |      */
  61 | 
  62 |     async waitForVisible(locator,timeOut)
  63 |     {
  64 |      await locator.waitFor({state:'visible',timeout:25000})
  65 |     } 
  66 | 
  67 |     async waitForTimeOut(timeOut)
  68 |     {
  69 |         await this.page.waitForTimeout(timeOut)
  70 |     }
  71 | 
  72 | }
```