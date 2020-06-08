import { baseUrl } from './shared/baseUrl';


const publicVapidKey =
"BDGd6_hu_pl5u_eEPBImTWFn5WBzDPHoXucwGEIx8-aNq8AtrAa_V5W1MlJbduW5SoB3_r3UyYMQmRM-lGetgg0";

// Check for service worker
export const test =()=>{
    if ("serviceWorker" in navigator) {
        send().catch(err => console.error(err));
      }
}


// Register SW, Register Push, Send Push
async function send() {
  // Register Service Worker
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });
  console.log("Service Worker Registered...");

  // Register Push
  console.log("Registering Push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log("Push Registered...");

  // Send Push Notification
  console.log("Sending Push...");
  
  await fetch(`${baseUrl}subscribe/`, {
    method: "POST",
    body: JSON.stringify({
      subscription: subscription
    }),
    headers: {
      "content-type": "application/json"
    }
  });
  console.log("Push Sent...");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
