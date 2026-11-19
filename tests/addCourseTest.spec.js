import { coursePage, expect } from "../Fixtures/fixtures";
import { test } from '../Fixtures/fixtures'
import { loginPage } from '../Fixtures/fixtures'
import { dashBoardPage } from "../Fixtures/fixtures";
import { CoursePage } from "../Pages/CoursePage";
import { LoginPage } from "../Pages/LoginPage";
import { courseDetails } from "../TestData/courseDetails";
import { credentials } from "../TestData/credentials";

test('Add course', async ({coursePage,loginPage,dashBoardPage})=>
{
    let date=Date.now()
    let courseName=courseDetails.courseName+"-"+date;
     
    await loginPage.navigateLoginPage(credentials.URL)
    await loginPage.signIn(credentials.userName,credentials.passWord)
    
    await dashBoardPage.navigateToAddNewCourse()
    

    await coursePage.clickOnAddnewCourseButton()
    await coursePage.selectFile(courseDetails.filePath)
    await coursePage.enterCourseName(courseName)
    await coursePage.enterDescription(courseDetails.courseDescription)
    await coursePage.enterInstructor(courseDetails.instructorName)
    await coursePage.enterPrice(courseDetails.price)
    await coursePage.selectStartDate()
    await coursePage.selectEndDate()
    await coursePage.selectCategory(courseDetails.category)
    await coursePage.clickSave() 
    
    //Delete course
    await coursePage.selectCourseNameCheckbox(courseName)
    await coursePage.deleteButton(courseName)
    
    await coursePage.validateCourseName(courseName) 

    await loginPage.logoutApplication()
})
