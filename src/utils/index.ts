export function getPageName(path: string) {
  switch (path) {
    case '/':
      return 'Home Page';
    case '/about-us':
      return 'About Us';
    default:
      return 'Page 404';
  }
}
