export function checkNotUndefined(data){
return data ? data.value : "N/A";
}

export function formatDate(date){
    const dateFormat = new Date(date);
    const finalDateFormat =
    dateFormat.getDate().toString().padStart(2, "0") +
      "-" +
      (dateFormat.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      dateFormat.getFullYear().toString();

    return finalDateFormat.toString();
}