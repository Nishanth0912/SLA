function fahren(){
  let degree = Number(document.getElementById("degree").value);
  let res = (degree * 1.8) + 32 ;
  document.getElementById("res").innerText = `${degree}oC is ${res} oF`;
}

function celcius(){
    let degree = Number(document.getElementById("degree").value);
    let res = (degree - 32) * 5 / 9;
    document.getElementById("res").innerText =`${degree}oF is ${res} oC`;
  }