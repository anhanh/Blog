import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'my-blog-324522',
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    }),
    databaseURL:
      'https://my-blog-324522-default-rtdb.asia-southeast1.firebasedatabase.app'
  });
}

export default admin.database();
