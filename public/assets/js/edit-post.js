const { post } = require("../../../controllers");

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const id = document.querySelector('input[name="post-id"]').value;

  const response =  await fetch(`api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: title,
      post_url: post_url

    }),
    headers: {
      'Content-Type': 'application/json'
    }
  } )
  
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.post-form').addEventListener('submit', editFormHandler);