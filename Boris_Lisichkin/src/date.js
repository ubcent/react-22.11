import './date.css'
export default class Today {

  addDate() {
    const date = new Date();
    const dateFormat = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} г.`;
    const dateBuild = document.getElementById('date');
    return dateBuild.innerHTML = dateFormat;
  }

}