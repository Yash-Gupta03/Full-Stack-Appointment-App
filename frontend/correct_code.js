let form = document.getElementById("booking-form");
form.addEventListener("submit", addToCloud);

function addToCloud(e) {
  e.preventDefault();
  let uname = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let obj = {
    uname: uname,
    email: email,
    phone: phone,
  };
  axios
    .post("http://localhost:3000/add-user", obj)
    .then((res) => {
      //   obj.uid = res.data._id;
      showListofRegisteredUser(res.data.newUserDetail);
    })
    .catch((err) => console.log(err));
  //   console.log(obj);
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/fetch-users")
    .then((res) => {
      for (let i = 0; i < res.data.allUsers.length; i++) {
        showListofRegisteredUser(res.data.allUsers[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showListofRegisteredUser(user) {
  const parentNode = document.getElementById("list");
  const createNewUserHtml = `<li id='${user.id}'>${user.name} - ${user.email} - ${user.phone}
                                    <button onclick=deleteUser('${user.id}')>Delete</button>
                                    <button onclick=editUser('${user.id}','${user.name}','${user.email}','${user.phone}')>Edit</button>
                                </li>
                                `;
  //   console.log(createNewUserHtml);
  parentNode.innerHTML += createNewUserHtml;
  //   console.log(parentNode.innerHTML);
}

function editUser(id, name, email, phone) {
  document.getElementById("username").value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;
  //   axios.put(
  //     `https://crudcrud.com/api/1c123dec5a7b48f6bb35caffe366acdd/bookingData/${user._id}`,
  //     {
  //       uname: "Yash_Gupta",
  //       email: "y@gmail.com",
  //       phone: 9685,
  //     }
  //   );
  deleteUser(id);
}

function deleteUser(userID) {
  // localStorage.removeItem(email)
  axios
    .delete(`http://localhost:3000/delete-user/${userID}`)
    .then((res) => {
      removeItemFromScreen(userID);
    })
    .catch((err) => console.log(err));
}

function removeItemFromScreen(userID) {
  const parentNode = document.getElementById("list");
  const elem = document.getElementById(userID);
  parentNode.removeChild(elem);
}
