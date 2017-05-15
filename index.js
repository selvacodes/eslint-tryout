/* global fetch,$ */


const userURL = 'https://reqres.in/api/users?page=1&per_page=10'

function userHTML ({ avatar, firstName, lastName }) {
  return `<div class="col-md-3 span3 well">
              <center>
                 <img src="${avatar}" name="aboutme" width="140" height="140" alt="avatar" class="img-circle">
                 <h3>${firstName} ${lastName}</h3>
              </center>
           </div>`
}

const buildUsersHTML = ({ data: users }) => users.map(userHTML).join('')

const renderUsers = html => $('#users').html(html)

const fetchJSON = url => fetch(url).then(response => response.json())

const loadUserData = url =>
  fetchJSON(url).then(buildUsersHTML).then(renderUsers)

loadUserData(userURL)
