import { cartPage } from "../Fixtures/fixtures";
import {test} from '../Fixtures/fixtures'
import { dashBoardPage } from "../Fixtures/fixtures";
import { loginPage } from "../Fixtures/fixtures";
import { credentials } from "../TestData/credentials";

test.describe('Managing Cart functionality', async()=>
{
  
    test('Adding course into cart',async ({loginPage,dashBoardPage,cartPage})=>
    {
       
        await loginPage.navigateLoginPage(credentials.URL)
        await loginPage.signIn(credentials.userName,credentials.passWord)
        
        await dashBoardPage.addToCart('Selenium For Web Automation')
        
        await cartPage.navigateCartPage()

        await cartPage.cartEnrollButton()

        await cartPage.enrollNowEnterAddress("Bengaluru")

        await cartPage.enrollNowEnterPhone("23131313")

        await cartPage.enrollClickEnrollnowButton()

        console.log(await cartPage.captureOrderID());
         
        await cartPage.clickCancelEnroll()
        

        await loginPage.logoutApplication()
        
       
        


    })


})
