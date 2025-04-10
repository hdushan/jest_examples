describe('String Operations', () => {
  let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  describe('Character Access', () => {
    test('length property', () => {
      expect(text.length).toEqual(26)
    })

    test('character access methods', () => {
      expect(text.charAt(3)).toEqual('D')
      expect(text.at(3)).toEqual('D')
      expect(text[3]).toEqual('D')
    })
  })

  describe('Substring Operations', () => {
    test('slice method', () => {
      expect(text.slice(3, 6)).toEqual('DEF')
      expect(text.slice(3)).toEqual('DEFGHIJKLMNOPQRSTUVWXYZ')
      expect(text.slice(-3)).toEqual('XYZ')
    })

    test('substring method', () => {
      expect(text.substring(3, 6)).toEqual('DEF')
      expect(text.substring(3)).toEqual('DEFGHIJKLMNOPQRSTUVWXYZ')
    })
  })

  describe('Case Manipulation', () => {
    test('case conversion', () => {
      expect('Hans'.toUpperCase()).toBe('HANS')
      expect('Hans'.toLowerCase()).toBe('hans')
    })
  })

  describe('String Concatenation', () => {
    test('concatenation methods', () => {
      expect('Hans'.concat(' ', 'Raj')).toEqual('Hans Raj')
      expect('Hans' + ' ' + 'Raj').toBe('Hans Raj')
    })
  })

  describe('String Trimming', () => {
    test('trim methods', () => {
      expect('  Hans Raj  '.trim()).toBe('Hans Raj')
      expect('  Hans Raj  '.trimStart()).toBe('Hans Raj  ')
      expect('  Hans Raj  '.trimEnd()).toBe('  Hans Raj')
    })
  })

  describe('String Repetition', () => {
    test('repeat method', () => {
      expect('Hans'.repeat(2)).toBe('HansHans')
    })
  })

  describe('String Replacement', () => {
    test('basic replacement', () => {
      expect('Hans Raj Raj'.replace('Raj', 'XYZ')).toBe('Hans XYZ Raj')
    })

    test('regex replacement', () => {
      expect('Hans Raj Raj'.replace(/raj/gi, 'XYZ')).toBe('Hans XYZ XYZ')
    })

    test('replaceAll method', () => {
      expect('Hans Raj Raj'.replaceAll('Raj', 'XYZ')).toBe('Hans XYZ XYZ')
    })

    test('complex regex replacements', () => {
      expect('This is&a*sentence'.replace(/[^a-z]/gi, ' ')).toEqual(
        'This is a sentence'
      )
      expect(
        'This is a sentence'.replace(/\s\w/g, function (first_char_of_word) {
          return first_char_of_word.toUpperCase()
        })
      ).toEqual('This Is A Sentence')
    })

    test('whitespace removal', () => {
      expect('This Is A Sentence'.replace(/\s/g, '')).toEqual('ThisIsASentence')
      expect('This Is A Sentence'.replaceAll(' ', '')).toEqual(
        'ThisIsASentence'
      )
    })
  })

  describe('String Splitting', () => {
    test('split method', () => {
      expect('Hans Raj D'.split(' ')).toEqual(['Hans', 'Raj', 'D'])
    })
  })
})
