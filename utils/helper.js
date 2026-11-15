//randomEmail
//randomNumber
//readCSV
//readExcel
//readJSON

export function randomEmail(namePrefix)
{
    let date=Date.now()
    let email=`${namePrefix}_${date}@email.com`
    return email
} 

