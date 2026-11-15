import{test as base,expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage'
import{RegistrationPage} from '../Pages/RegistrationPage.js'
import {DashBoardPage} from '../Pages/DashBoardPage.js'
import { CoursePage } from '../Pages/CoursePage.js'
import{CategoryPage} from '../Pages/CategoryPage.js'
import { CartPage } from '../Pages/CartPage.js'

export const test= base.extend(
    {
        
       loginPage: async ({page},use) =>{         
            
        const login=new LoginPage(page)
         
        await use(login)
    },

     registrationPage :async ({page},use) =>
      {
        
        const registration=new RegistrationPage(page)
         
        await use(registration)

      },

      dashBoardPage:async ({page},use) => {

        const dashBoard=new DashBoardPage(page)

        await use(dashBoard)
     
      },


      coursePage:async ({page},use) => {

        const course=new CoursePage(page)

        await use(course)
     
      },

      categoryPage:async ({page},use) => {

        const category=new CategoryPage(page)

        await use(category)
     
      },
      cartPage:async ({page},use) => {

        const cart=new CartPage(page)

        await use(cart)
     
      }

});
    
export{expect}