module.exports = {
  firebaseConfig : {
    "type": process.env.FIREBASE_CONFIG_TYPE,
    "project_id": process.env.FIREBASE_CONFIG_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_CONFIG_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_CONFIG_PRIVATE_KEY.replace(/\\n/g, '\n'),
    // "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWyL16I0NSvBpR\nNjmKQ1qhsif1ng13i6Ic/Lv3nOIekumvjtDfCUj74QIuQ2DhnNotpd0QC5XY5JUX\nxB+DkZkkdtZrZ8Icu7m1xJMFn6AzjewQoPW8cC29fWDtyfqi3sBdo5qpfct0lKhG\naPFnq5eWQPH4YfQIv5tRuwCNfymqhASgXotvuOkgd/fv0D2OT2aUVlqWBFwRYEDk\ntB7JVpzQwWLmbAuHLEiLzSKNj5LiJi2cDz7+mSKlWEyd7B2c2/rRSyhLRpTrmAUm\nEQpHXw92fo6d/U/+bLfGBul+nkKG8qIODz0AUZSzBBLIY5yZ3Qhj3FDkRKDz4Wc/\nwNr27HnZAgMBAAECggEAPXRCWWG+4hz9IuVVTUdHTIi2ZZJNzc/Qujy9hV1hAXIC\nIUW1VnnLz7C0uVNHzJwnhhxIPW5jW9tJ8r5B09dHEcgHew32XMycE3uzKkMVQX3R\n3TMlBHC6C7VqiG/eIXxk7aUs93BoODMQZGYIIacbaKc+l2ug0OH69TQgtQrDWhXE\n+EI0KQjVmUl5aP58gDOlCLnxjOhyxbICbaQsXB4VJQ13EM4Mwlhz/CD+JH8D35gq\nBiwH4/2CgqLqTGAwmOi0ujuRu2s2NHLltIpunmp4CAqHziynXOucqifIYH/NR0kB\ne2SbqGkjAYmXY5BNXKLnF1y7hJfarPUGe7esAnNekwKBgQDQdxVnvgXAjJVGJtxD\nosK4/dvhk6zUV06g3SVFgBfVBT143lAtsujiYuvsDmkH3aVKnNHMZ2ia9ThhjQOj\nh/gnT4KcI6r+v7Xw0r8waz0jr2RVXhovn6PwcMI1vvDu1M95cweGXs6QZ+/qNLfS\noFi2C1KVhn03ZvJiOvamihCfDwKBgQC5KpegJyK6OTfFnXXxhv1/LCuQHQd9jAc5\nmyUTt+3wioYB2I9wAlK4mkL2/J3NEjfZTKHdr0t+zBUn3tmGlVNVMmAEacSycYL+\nHBqDzLN2jEYT6/fLZUchuW3VJuST0/eNcnutcH7AqQ5ezZKLdkb69X3G1eZH1IVx\n5fEE0HbYlwKBgA+o0l/Po2j6ZoA1jRg7krsIvsqsKDBvOoXU9ubIn4Gt+hcpRAaa\nyOmwmp5J2tPvb2oya4QaRH5Xa1vQlvRi015Il7wY5dBrIESt4BTICXizxSqwffET\n4eG+5qfY5wpZzBgIbwlF9+hbFmeWfDSDPQa3xQVca+2Meyqr2TlbZ7I7AoGARyD0\nY+IEthJ6uR+2idQ4Fp0KEu8DzJd4wwk04fE6prcfqR/eYcGSszUW2jfKClegOon0\nd+r5jjipO8qgNtGv1D9ooOlcVMvD7QcwrEZ6/eP+m3J+mpRKEctgRIwPLDY1lxFO\nLx7SogGO8p33WDlUJN0etr2+GwOpS0pwHlBSBvsCgYEAkdhhh8vKgYEEN1Qhu1Ka\nyqwYtFR8sm46vPd/mrUMMv5mmBcT10C5CkHvgx8X1xcIW7vlBdrUghj/vmoK1XbP\nRZP5cGAT83EpvlS9YH710XiA3J9va5N/lMRkWVAM5Z87EVLFfHpoiqfWtoT2wpv+\n0X2sFkhrCo2sTUrtSZsqowo=\n-----END PRIVATE KEY-----\n",
    "client_email": process.env.FIREBASE_CONFIG_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CONFIG_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_CONFIG_AUTH_URI,
    "token_uri": process.env.FIREBASE_CONFIG_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_CONFIG_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_CONFIG_CLIENT_X509_CERT_URL
  }
};