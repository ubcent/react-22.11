export class createDeveloper {
  constructor (name, money, headManager, arrDev){
    this.name = name;
    this.money = money;
    this.headManager = headManager;
    this.arrDev = [];
  };

  newDeveloper(developer){
    this.arrDev.push(developer);
    const objParams = this.arrDev[0];
    document.getElementById('divCreate').innerHTML = `Создан разработчик:
    ${objParams["name"]}, Зарплата: ${objParams["money"]}, <br> ${objParams["headManager"]}-назначен его менеджером`;
  };

  findDeveloper(){
    const inputCollection = document.getElementsByTagName('input');
    let param;
    let inputFindDev = inputCollection[3].value;
    for (let i = 0; i < this.arrDev.length; i++){
       param = this.arrDev[i];
      if (inputFindDev !== param["name"]){
        document.getElementById('divShow').innerHTML = 'ФИО разработчика не найдены';
      } else {
        document.getElementById('divShow').innerHTML = `Найден менеджер: ${inputFindDev}`;
      };
    };
  };
};

