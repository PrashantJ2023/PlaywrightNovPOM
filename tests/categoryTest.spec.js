import {categoryPage} from '../Fixtures/fixtures.js'
import {test} from '../Fixtures/fixtures.js'
import { dashBoardPage } from '../Fixtures/fixtures.js'
import {loginPage} from '../Fixtures/fixtures.js'
import { credentials } from '../TestData/credentials'

test.describe('Manage category functionality',async =>
{
  test('Add Category',async ({loginPage,dashBoardPage})=>
{    
        let categoryName=`Playwright_${Date.now()}`

    await loginPage.navigateLoginPage(credentials.URL)
    await loginPage.signIn(credentials.userName,credentials.passWord)

    const categoryPage= await dashBoardPage.navigateManageCategory()
        
    await categoryPage.clickOnAddNewCategoryButton(categoryName)

    await categoryPage.deleteCategory(categoryName)    

    await categoryPage.validateDeletedCategory(categoryName)
})

})