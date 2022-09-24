export const convertToBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const filReader = new FileReader();
    filReader.readAsDataURL(file);
    filReader.onload = () => {
      resolve(filReader.result);
    };
    filReader.onerror = (error) => {
      reject(error);
    };
  });
};
export const workerTypeOptions = ["GARDNER", "CLEANER", "SWEAPER", "GUARD"];
export const workerExperienceOptions = [
  "6 Months",
  "1 Year",
  "2 Years",
  "2.5 Years",
];

export const capitalizeFirstLetter = (str) => {
  let firstLetter = str?.charAt(0)?.toUpperCase();
  let string = str.slice(1, str?.length);
  string = string?.toLowerCase();
  return firstLetter.concat(string);
};
