import cookie from '@s-ui/js/lib/cookie'

const COOKIE_NAME = 'user-accepted-cookies'

export class GetUserAcceptedCookiesUseCase {
  async execute() {
    const userAcceptedCookiesValue = cookie.get(COOKIE_NAME)
    return {userAcceptedCookies: userAcceptedCookiesValue !== undefined}
  }
}
