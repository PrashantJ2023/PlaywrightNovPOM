
import {loginPage} from '../Fixtures/fixtures'
import { test } from '../Fixtures/fixtures'

test('Application login',async ({loginPage})=>
{
   
    await loginPage.navigatePage('https://freelance-learn-automation.vercel.app/login')
    await loginPage.enterEmail('admin@email.com')
    await loginPage.enterPassword('admin@123')
    await loginPage.clickSignin()  

    
    console.log(await loginPage.getCurrentPageTitle());
    console.log(await loginPage.getPageURL());

    await loginPage.assertUrlNotContains('/login/') 

    await loginPage.logoutApplication()
        
})