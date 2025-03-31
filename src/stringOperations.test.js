test("String operations", () => {
  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  expect(text.length).toEqual(26);
  expect(text.charAt(3)).toEqual("D");
  expect(text.at(3)).toEqual("D");
  expect(text[3]).toEqual("D");
  expect(text.slice(3, 6)).toEqual("DEF");
  expect(text.slice(3)).toEqual("DEFGHIJKLMNOPQRSTUVWXYZ");
  expect(text.slice(-3)).toEqual("XYZ");
  expect(text.substring(3, 6)).toEqual("DEF");
  expect(text.substring(3)).toEqual("DEFGHIJKLMNOPQRSTUVWXYZ");
  expect("Hans".toUpperCase()).toBe("HANS");
  expect("Hans".toLowerCase()).toBe("hans");
  expect("Hans".concat(" ", "Raj")).toEqual("Hans Raj");
  expect("Hans" + " " + "Raj").toBe("Hans Raj");
  expect("  Hans Raj  ".trim()).toBe("Hans Raj");
  expect("  Hans Raj  ".trimStart()).toBe("Hans Raj  ");
  expect("  Hans Raj  ".trimEnd()).toBe("  Hans Raj");
  expect("Hans".repeat(2)).toBe("HansHans");
  expect("Hans Raj Raj".replace("Raj", "XYZ")).toBe("Hans XYZ Raj");
  expect("Hans Raj Raj".replace(/raj/gi, "XYZ")).toBe("Hans XYZ XYZ");
  expect("Hans Raj Raj".replaceAll("Raj", "XYZ")).toBe("Hans XYZ XYZ");
  expect("Hans Raj D".split(" ")).toEqual(["Hans", "Raj", "D"]);
  expect("This is&a*sentence".replace(/[^a-z]/gi, " ")).toEqual(
    "This is a sentence"
  );
  expect(
    "This is a sentence".replace(/\s\w/g, function (first_char_of_word) {
      return first_char_of_word.toUpperCase();
    })
  ).toEqual("This Is A Sentence");
  expect("This Is A Sentence".replace(/\s/g, "")).toEqual("ThisIsASentence");
  expect("This Is A Sentence".replaceAll(" ", "")).toEqual("ThisIsASentence");
});
