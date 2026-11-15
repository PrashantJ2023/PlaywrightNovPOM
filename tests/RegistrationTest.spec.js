import{registrationPage} from '../Fixtures/fixtures.js'
import{test} from '../Fixtures/fixtures.js'
import { randomEmail } from '../utils/helper.js'
import { signUp } from '../TestData/signUp.js'


for(let data of signUp){

test(`Registaration of user ${data.name}`,async ({registrationPage})=>
{       
    await registrationPage.navigatePage('https://freelance-learn-automation.vercel.app/signup')
    await registrationPage.enterName(data.name)
    await registrationPage.enterEmail(randomEmail('testUser'))
    await registrationPage.enterPassword('Prashant')
    await registrationPage.selectInterest(data.interest)
    await registrationPage.selectGender(data.gender)
    await registrationPage.selectState(data.state)
    await registrationPage.selectHobby(data.hobbies)
    await registrationPage.signUpButtonClick()
    await registrationPage.signUpMessageValidation()

  
})
}