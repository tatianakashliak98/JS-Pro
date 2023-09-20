const base64UrlDecode = (base64Url: string) => {
  const padding = "=".repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = (base64Url + padding).replace(/-/g, "+").replace(/_/g, "/");
  const decoded = atob(base64);
  return Array.from(decoded).map((char) => char.charCodeAt(0));
};

export const decodeJwt = (jwtToken: string) => {
  const [headerBase64Url, payloadBase64Url, signatureBase64Url] =
    jwtToken.split(".");

  const header = JSON.parse(
    String.fromCharCode(...base64UrlDecode(headerBase64Url))
  );
  const payload = JSON.parse(
    String.fromCharCode(...base64UrlDecode(payloadBase64Url))
  );

  return { header, payload };
};

export const expToMinutes = (expTimestampInSeconds: number) => {
  const expTimestampInMillis = expTimestampInSeconds * 1000;

  const currentTimeInMillis = Date.now();
  const timeDifferenceInMillis = expTimestampInMillis - currentTimeInMillis;
  const timeDifferenceInMinutes = timeDifferenceInMillis / 60000;

  return timeDifferenceInMinutes;
};

export const updateAccessToken = () => {
   try {
      let refresh = localStorage.getItem("refresh");
      fetch("https://studapi.teachmeskills.by/auth/jwt/refresh/", {
         method: "POST",
         body: JSON.stringify({ refresh }),
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((data) => data.json())
         .then((data) => {
            console.log(data)
            localStorage.setItem('access',data.access)
         });
   
   } catch (err) {
     console.log(err);
   }
 };
