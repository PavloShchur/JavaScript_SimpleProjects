'use strict';

let questions = [];

let question_1 = new Question('Who played Punky Brewster in the early 80\'s TV sitcom of the same name?');
let question_2 = new Question('For over 40 years this man has been Big Bird\'s puppeteer');
let question_3 = new Question('Single Celin Dion is a native of this country:');
let question_4 = new Question('Ronald Reagan was inaugurated for his first term in which year?');
let question_5 = new Question('His major league baseball team has won more series than any other.');

questions.push(question_1.question);
questions.push(question_2.question);
questions.push(question_3.question);
questions.push(question_4.question);
questions.push(question_5.question);

let question_oneAnswer, question_twoAnswer, question_threeAnswer, question_fourAnswer, question_fiveAnswer;

question_oneAnswer = ['Sloeil Moon Frye', 'Meeno Poolous', 'Heather Locklear', 'Molly Ringwald'];
question_twoAnswer = ['Jim Henson', 'Art Van Delay', 'Caroll Spinney', 'Bob Keeshan'];
question_threeAnswer = ['Unated States', 'Israel', 'France', 'Canada'];
question_fourAnswer = ['1978', '1980', '1981', '1985'];
question_fiveAnswer = ['New York Mets', 'Toronto Blue Jeys', 'LA Dodgers', 'New York Yankees'];

let correctAnswersIndexes;
correctAnswersIndexes = [0, 2, 3, 2, 3];
