/* ----------Задание №1---------- */
// let tasks = [
//   'Сходить в магазин',
//   'Приготовить обед',
//   'Поесть',
//   'Отдохнуть',
//   'Работать'
// ];
// let taskList = document.querySelector('.todo-list');
// for(let value of tasks) {
  // let createTaskList = document.createElement(`li`);
  // createTaskList.className = 'task';
  // createTaskList.textContent = value;
  // taskList.append(createTaskList);
// }

/* ----------Задание №2---------- */
// let taskList = document.querySelector('.todo-list');
// while(true) {
//   let getTaskName = prompt('Укажите задачу');
//   if(getTaskName === null){
//     break;
//   }
//   let getImportantTask = confirm('Задача важная?');
//   let createTaskList = document.createElement(`li`);
//   createTaskList.textContent = getTaskName;
//   if(getImportantTask) {
//     createTaskList.style.color = 'red';
//   }
//   taskList.append(createTaskList);
// }

/* ----------Задание №3---------- */
// let users = [
//   {
//     firstName: 'Mike',
//     lastName: 'Wazowski',
//     login: '#wazowski',
//     followers: '50',
//   },
//   {
//     firstName: 'Sam',
//     lastName: 'Burner',
//     login: '#burner',
//     followers: '25',
//   },
//   {
//     firstName: 'Vasya',
//     lastName: 'Pupkin',
//     login: '#pupkin',
//     followers: '500',
//   },
//   {
//     firstName: 'Jack',
//     lastName: 'London',
//     login: '#london',
//     followers: '115',
//   },
//   {
//     firstName: 'Brad',
//     lastName: 'Pitt',
//     login: '#pitt',
//     followers: '5',
//   },
// ];

// let usersList = document.querySelector('.twitter__list')
// for(let item of users) {
//   let user = document.createElement('li');
//   let userLogin = document.createElement('a');
//   let followers = document.createElement('strong')
//   followers.textContent = item.followers + ' followers'
//   user.className = 'user'
//   user.textContent = item.firstName + ' ' + item.lastName + ' ';
//   userLogin.textContent = item.login + ' ';
//   userLogin.href = item.login;
//   user.append(userLogin);
//   user.append(followers);
//   usersList.append(user);
// }

/* ----------Задание №4---------- */
// let users = [
//   {
//     firstName: 'Mike',
//     lastName: 'Jefferson'
//   },
//   {
//     firstName: 'Sam',
//     lastName: 'Warnington'
//   },
//   {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
// ];

// let createUsersList = document.createElement('ul')
// createUsersList.className = 'users__list'
// for(let user of users) {
//   let createUserList = document.createElement('li');
//   createUserList.className = 'users__item';
//   createUserList.textContent = user.firstName + ' ' + user.lastName;
//   createUsersList.append(createUserList)
// }
// document.querySelector('body').append(createUsersList)
/* ----------Задание №5---------- */
// let authors = [
//   {
//     firstName: 'Mike',
//     lastName: 'Jefferson'
//   },
//   {
//     firstName: 'Sam',
//     lastName: 'Warnington'
//   },
//   {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
// ];

// let createAuthor = document.querySelectorAll('.text');

// for(let i = 0; i < createAuthor.length; i++){
//   let createElementAuthor = document.createElement('h5');
//   createElementAuthor.className = 'author';
//   createElementAuthor.textContent = authors[i].firstName + ' ' + authors[i].lastName
//   createAuthor[i].append(createElementAuthor)
// }