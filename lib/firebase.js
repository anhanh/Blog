import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL
    }),
    databaseURL:
      'https://my-blog-324522-default-rtdb.asia-southeast1.firebasedatabase.app'
  });
}

export default admin.database();
