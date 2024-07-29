function getResult(a,b,c) {

    let discriminant = (Math.pow(b,2) - 4*a*c);
    let arrayWithRoots = [];
    
    if (discriminant < 0){
        arrayWithRoots.push("Дискриминант меньше нуля")
        return arrayWithRoots;
    }

    if (discriminant === 0){
        let x = -b/(2*a);

        arrayWithRoots.push(x);
        return arrayWithRoots;
    }
    if (discriminant > 0){
        let x1 = ((-b + Math.sqrt(discriminant))/(2*a)),
        x2 = ((-b - Math.sqrt(discriminant))/(2*a));
       
        arrayWithRoots.push(x1,x2);
        return arrayWithRoots;   
    }
}

function getAverageMark(marks) {
    if (marks.length==0){
        return 0;
    }

    let marksInt = marks.split(/[ ,]+/);
    let moreThanFive = false;

    if (marksInt.length > 5){
        marksInt.splice(5);
        moreThanFive = true;
    }

    let sum = 0;
    for (let i = 0; i < marksInt.length; i++) {
        sum += parseInt(marksInt[i]);
    }
    
    if (moreThanFive == true){
        return `Аргументов было больше 5, считано только 5 оценок. Среднее значение оценок: ${sum/marksInt.length}.`;
    }
    else {
        return `Среднее значение оценок: ${sum/marksInt.length}.`;
    }   
}

function askDrink(username, dateOfBirthday) {
    
    let today = new Date().toISOString().slice(0, 10).split("-"),
    dateOfBirthdayUser = dateOfBirthday.split("-");
    


    let adult = true

    if ((today[0]-dateOfBirthdayUser[0])==18){
      if((today[1]-dateOfBirthdayUser[1])==0){
        if((today[2]-dateOfBirthdayUser[2])<=0){
            adult = false;
        }
      }
      if ((today[1]-dateOfBirthdayUser[1])<0){
        adult = false;
      }
    }
    if ((today[0]-dateOfBirthdayUser[0])<18){
        adult = false;
    }
    console.log(today)
    if (adult){
        return `Не желаете ли олд-фэшн, ${username}?”`;
    }
    else {
        return `Сожалею, ${username}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!”`
    }
}