

class ScheduleService {

  constructor (http){
    this.http = http;
    this.host = 'https://apps-services.eu-gb.mybluemix.net';
  }

  get(id) {
    let url = `${this.host}/timetable/${id}`;
    return this.http.get(url);
  }

  getAll(id) {
    let url = `${this.host}/timetables/?id=${id}`;
    return this.http.get(url);
  }

}


export default ScheduleService;
