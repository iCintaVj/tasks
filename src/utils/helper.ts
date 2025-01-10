export const convertToDashSeparatedId = (str:string) : string => {
    return str.trim().toLowerCase().replace(/\s+/g, '-');
}
  