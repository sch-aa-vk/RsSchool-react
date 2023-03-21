export function getPageName(path: string) {
  switch (path) {
    case '/':
      return 'Home Page';
    case '/about-us':
      return 'About Us';
    case '/forms':
      return 'Forms';
    default:
      return 'Page 404';
  }
}
