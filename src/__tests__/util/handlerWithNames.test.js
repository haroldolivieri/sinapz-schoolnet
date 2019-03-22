import { extractInitials } from '../../util/handlerWithNames'

describe('extractInitials', () => {
  context('with two names', () => {
    it('should be first and last initials', () => { expect(extractInitials('Unidade Madureira')).toBe('UM') })
  })

  context('with one names', () => {
    it('should be fist initial', () => { expect(extractInitials('Meier')).toBe('M') })
  })

  context('with three or bigger names', () => {
    it('should be first and last initials', () => {
      expect(extractInitials('Calégio Emilio Cardos')).toBe('CEC')
    })
  })
})