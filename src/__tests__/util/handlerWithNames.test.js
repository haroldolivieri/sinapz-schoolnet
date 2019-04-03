import { extractInitials } from '../../util/handlerWithNames'

describe('extractInitials', () => {
  describe('with two names', () => {
    it('should be first and last initials', () => { expect(extractInitials('Unidade Madureira')).toBe('UM') })
  })

  describe('with one names', () => {
    it('should be fist initial', () => { expect(extractInitials('Meier')).toBe('M') })
  })

  describe('with three or bigger names', () => {
    it('should be first and last initials', () => {
      expect(extractInitials('Calégio Emilio Cardos')).toBe('CEC')
    })
  })
})