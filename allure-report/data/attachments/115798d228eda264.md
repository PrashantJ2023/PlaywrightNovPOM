# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: categoryTest.spec.js >> Manage category functionality >> Add Category
- Location: tests\categoryTest.spec.js:8:3

# Error details

```
TypeError: _CategoryPage.CategoryPage is not a constructor
```

# Test source

```ts
  1  | import{test as base,expect} from '@playwright/test'
  2  | import {LoginPage} from '../Pages/LoginPage'
  3  | import{RegistrationPage} from '../Pages/RegistrationPage.js'
  4  | import {DashBoardPage} from '../Pages/DashBoardPage.js'
  5  | import { CoursePage } from '../Pages/CoursePage.js'
  6  | import{CategoryPage} from '../Pages/CategoryPage.js'
  7  | 
  8  | export const test= base.extend(
  9  |     {
  10 |         
  11 |        loginPage: async ({page},use) =>{         
  12 |             
  13 |         const login=new LoginPage(page)
  14 |          
  15 |         await use(login)
  16 |     },
  17 | 
  18 |      registrationPage :async ({page},use) =>
  19 |       {
  20 |         
  21 |         const registration=new RegistrationPage(page)
  22 |          
  23 |         await use(registration)
  24 | 
  25 |       },
  26 | 
  27 |       dashBoardPage:async ({page},use) => {
  28 | 
  29 |         const dashBoard=new DashBoardPage(page)
  30 | 
  31 |         await use(dashBoard)
  32 |      
  33 |       },
  34 | 
  35 | 
  36 |       coursePage:async ({page},use) => {
  37 | 
  38 |         const course=new CoursePage(page)
  39 | 
  40 |         await use(course)
  41 |      
  42 |       },
  43 | 
  44 |       categoryPage:async ({page},use) => {
  45 | 
> 46 |         const category=new CategoryPage(page)
     |                        ^ TypeError: _CategoryPage.CategoryPage is not a constructor
  47 | 
  48 |         await use(category)
  49 |      
  50 |       }
  51 | 
  52 | });
  53 |     
  54 | export{expect}
```