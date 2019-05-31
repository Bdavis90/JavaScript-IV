// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(instrcAttrs){
        super(instrcAttrs)
        this.specialty = instrcAttrs.specialty;
        this.favLanguage = instrcAttrs.favLanguage;
        this.catchPhrase = instrcAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(subject){
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(studAttrs){
        super(studAttrs)
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }

    listsSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i])
        }
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs)
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(subject){
      console.log(`${this.name} debugs ${phil.name}'s code on ${subject}`  )
    }

    
}




const jim = new Person ({
    name: 'Jim',
    location: 'New Jersey',
    age: 35,
})


const kevin = new Instructor({
    name: 'Kevin',
    location: 'New York',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const james = new Instructor({
    name: 'James',
    location: 'Colorado',
    age: 39,
    favLanguage: 'Node.js',
    specialty: 'Full-Stack',
    catchPhrase: `This code is sloppy`
});

const greg = new Student ({
    name: 'Greg',
    location: 'California',
    age: 25,
    favLanguage: 'React',
    specialty: 'Back-End',
    catchPhrase: `Just hurry up`,
    previousBackground: 'Lumberjack',
    className: 'web2',
    favSubjects: ['Html', 'CSS', 'Node.js']
})


const phil = new Student ({
    name: 'Phil',
    location: 'Washington',
    age: 25,
    favLanguage: 'React',
    specialty: 'Back-End',
    catchPhrase: `Just hurry up`,
    previousBackground: 'Lumberjack',
    className: 'web2',
    favSubjects: ['Html', 'CSS', 'Node.js']
})
const brian = new ProjectManager ({
    name: 'Brian',
    location: 'Texas',
    age: 26,
    favLanguage: 'CSS',
    specialty: 'Front-End',
    catchPhrase: `Your code is really good`,
    gradClassName: 'CS1',
    favInstructor: 'James',
})

const bill = new ProjectManager ({
    name: 'Bill',
    location: 'Nevada',
    age: 30,
    favLanguage: 'React',
    specialty: 'Full-Stack',
    catchPhrase: `It's good but you could do better`,
    gradClassName: 'UI5',
    favInstructor: 'Kevin',
})

console.log(jim.speak())
console.log(kevin.demo('JavaScript'))
console.log(james.grade('Html'))
console.log(greg.sprintChallenge('CSS'))
console.log(phil.PRAssignment('CSS'))
console.log(phil.listsSubjects())
console.log(brian.standUp('webpt1'))
console.log(bill.debugsCode('Node.js'))