export function camelize(str) {
  var lower_str = str.toLowerCase().trim()
  var specialChars = /[^a-zA-Z]/g
  var sanitized_str = lower_str.replace(specialChars, ' ')
  var sanitized_camel_str = sanitized_str.replace(
    /\s\w/g,
    function (first_char_of_word) {
      return first_char_of_word.toUpperCase()
    }
  )
  return sanitized_camel_str.replace(/\s/g, '')
}
