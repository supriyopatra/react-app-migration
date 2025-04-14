import dayjs from "dayjs"

export const today = ()=>dayjs().format('MMMM D, YYYY');

export const formatDate =(date)=> dayjs(date).format("dddd, MMMM D YYYY");