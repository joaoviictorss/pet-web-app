import admin from 'firebase-admin';

const serviceAccount = {
    "type": "service_account",
    "project_id": "pet-web-app-c2732",
    "private_key_id": "c0731fb375914fdce8432e9570d25cd86d0ff788",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDFYZQ2YAQF58lg\ne9B3/b86uZ/qvd41OGsYpFNeDzFeA6ZREUTiFY2PogNJH/CnAgfQ2mGgG8+0Cvxp\npVY9jFOdKN4dINMETDoz1vB0hvyN6ZZ8Rz0nNXUtdbJ4MPXEjF4PT1g82d2EeMo9\nnzQyUdS5aBH5jXSWBQXYn9oJi+HFogbU5Z8zpYSFTLY/gsFuxBJHZN0UUwovvqV9\nBgZY2fytez1vuEizu0GbhbRzqOFQneeBGGPW64zOPgY9/cdooScF5pIAeX6mqOF8\n+lR/Db9+0aHwnApjcnWmg7CL4qTVFIrf2il004OBs6lp6ECk5W/pAf3VBIRabJ6X\ng/V6F0PNAgMBAAECggEAAagqjcAj+3PQVCtewALmnuFvXpUNNTKOxPX9H25kgflb\nr1VK3sbuxvQWb68Ju1krL7Tc9s13Eb7AVmUQbYRJZpw+W+vytbz1z7+rv57hJmnE\ngIH3lbo9o+B1/Smk//wbS/m8ZETMZeoPgYCu0wbxv7a+LvAKP3AXl9Oav3Hznz8C\n1q7HuvABgUQY6EMwkrNWvbqpJZeu7TssJaHa+1LN+zGgLCN4fqaYzwCgdu5qXmy1\nmPicE5ss190qyjF2RMiyM2V7DUiQjmccbSArToNJccqIhOqvnoaGIXfIni9FV5/p\nMto2fiVso65Ywv/O/8lAN+7ilnWxEGQNOHqLT8cWuQKBgQDwDD/ZFtVMe2Onr17I\np8vWOJf9/t58sow7E4VA0HtSlvod4KmGWFRs4hEi9J/hiP4Toh19r3ztUyOGWDgW\nuGYGix4gZX7ZB0+hsYEDIx5lCVz7EeV00MSwx9asUt68h4zPcE+6mVvnZzYbDHwD\n4lwnCta5ZSLF6rgp/RVtdauoWQKBgQDSf3lR73TAuEbQa7a4Q3GzgAzbcHINQaMk\n2zO+K2JpHRLJFHx8JUUy8dbtjlMPwtxzh9eRE0ywhVFQEF4dzfYUxcz69q/mqvJq\nuMX52/4RYjv86Y2TUC4MY0e8eOQX1v9i6Y3V/OGRBWqI5T4Yw0bxKkOKZQ+4mxYO\nVqn4kdeIlQKBgBS5WgHKANw7gt0FPO+h3O0/sY+SI28skwK+qrBvz1XQBwPxU3Fv\nysojsksMR4lXJGhZhKZHMkfi95wvnZgIj3ZdKFqvqIXgJbXV90doDsW2Szq5zs+I\n/pIsjpIODYDFSxjVn2yCtPaDaJ5pM4O6VS5htywGWTwxCXlGikUK9ajxAoGAEUiA\nKJcVqgE3Z0OA1C5NdqSL6bSY2LfL8mnBHNspEGJfuXziH7tbrCwpLoYiEcg5G49K\nxtGj2VaI7574a1AO5XO8OdrpZHIix1p2fuZuPPUo4cI3aqIJteCs8i+m4sI3Y+Kz\nT5+c0bB1J9pSt+vItmJ2+zUDDnBFZlX9TLiEzuUCgYB2GZYErsdCtOPrj8AvX0+H\nTXfkVJ5OyZaAJMNzWyKxdUlMXZ5Kz3L118g2lh8s381LrEzTCgKd3iAibhl+TqHb\nyTWa51Bm5M/5M5jTTn1BA6A6MNYGb0OKvCgSjbV3QF5b8rga9Z5OLN8Hm+KAKjG8\nlSQSXNofRGnSvjzBcb+vGg==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-u5nm3@pet-web-app-c2732.iam.gserviceaccount.com",
    "client_id": "101604916301336721275",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u5nm3%40pet-web-app-c2732.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  


if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://pet-web-app-c2732-default-rtdb.firebaseio.com"
    });
}

module.exports = admin;
