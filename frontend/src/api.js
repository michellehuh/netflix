export const createAccount = credentials =>
  fetch("http://localhost:8080/admin/", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.status !== 200)
      return Promise.reject({ message: "Submitted ID already exists!" });
    return res.json();
  });

export const planChosen = data =>
  fetch("http://localhost:8080/admin/plan", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.status !== 200)
      return Promise.reject({
        message: "It's not you, it's us! Try again in a few seconds."
      });
    return res.json();
  });

export const paymentInfoSubmitted = data =>
  fetch("http://localhost:8080/admin/payment", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.status !== 200)
      return Promise.reject({
        message: "Please ensure you have submitted valid information!"
      });
    return res.json();
  });

export const getProfileAppropriateMovies = data =>
  fetch("http://localhost:8080/profile/movies/all", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.status !== 200)
      return Promise.reject({
        message: "It's not you, it's us! Refresh within a few seconds."
      });
    return res.json();
  });

export const getProfileFavoriteMovies = data =>
  fetch("http://localhost:8080/profile/movies/favorites", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.status !== 200)
      return Promise.reject({
        message: "It's not you, it's us! Refresh within a few seconds."
      });
    return res.json();
  });
