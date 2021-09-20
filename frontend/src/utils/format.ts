import {format} from 'date-fns';

//Formata para modelo dd/mm/yyyy
export const formatLocalDate = (date: string, pattern: string) => {
    const dt = new Date(date);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return format(dtDateOnly, pattern);
}

//Formata para modelo yyyy-mm-dd
export const FormataStringData = (date: string) => {
    var dia = date.split("/")[0];
    var mes = date.split("/")[1];
    var ano = date.split("/")[2];

    return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
}