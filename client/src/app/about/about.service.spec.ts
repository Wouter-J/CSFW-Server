import { AboutService } from './about.service'

// Straight Jasmine testing without Angular's testing support
describe('AboutService', () => {
  let service: AboutService
  beforeEach(() => {
    service = new AboutService()
  })

  it('#getValue should return real value', () => {
    const result = service.getValue()
    expect(result).toBe('real value')
    expect(result).not.toBeUndefined()
  })

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value')
      done()
    })
  })

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value')
      done()
    })
  })
})
