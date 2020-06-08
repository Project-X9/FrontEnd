console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.event, {
    body: "Notified by ProjectX!",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  });
});