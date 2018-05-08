export const extractCookie = cookieName => {
  const parts = `; ${document.cookie}`.split(`; ${cookieName}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

