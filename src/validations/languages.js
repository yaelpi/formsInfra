import regex from '../resources/regularExpressions';
import languageMessages from '../resources/texts/language'

const required = (value) => {
    if (!value.toString().trim().length) {
      return 'חובה להזין ערך בשדה זה';
    }
  };
  const hebrewName = (value) => {
    if (!value.toString().trim().match(regex.hebrew)) {
      return languageMessages.hebrew.hebrew;
    }
  };
  export default {
    required,
    hebrewName
  }