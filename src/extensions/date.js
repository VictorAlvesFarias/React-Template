import moment from "moment";

export function dateValidator(data) {
    const br_format = /^\d{2}-\d{2}-\d{4}$/.test(data)

    if(br_format&&moment(data,"DD/MM/YYYY").isValid()) {
      return true
    }
    else {
      return false 
    }

} 

export function dateFormat(data) {
  var dateParts = data.split("-");

  var date = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];

  return date
} 
