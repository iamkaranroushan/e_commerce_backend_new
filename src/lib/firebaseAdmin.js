import admin from "firebase-admin";
import  dotenv  from "dotenv";
dotenv.config();


if (!admin.apps.length) {

    const serviceAccount = JSON.parse(
        Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, "base64").toString("utf-8")
    );

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}


export default admin;
